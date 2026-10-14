#include "sherpaw-rollouts.h"

#include <algorithm>
#include <array>
#include <cmath>
#include <cstring>
#include <limits>
#include <memory>
#include <random>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>

#include "sherpa-onnx/c-api/c-api.h"
#include "sherpa-onnx/csrc/online-recognizer.h"
#include "sherpa-onnx/csrc/online-stream.h"
#include "sherpa-onnx/csrc/online-transducer-decoder.h"

// The C API keeps these handle types private to c-api.cc. The layouts must
// stay identical to sherpa-onnx/c-api/c-api.cc.
struct SherpaOnnxOnlineRecognizer {
  std::unique_ptr<sherpa_onnx::OnlineRecognizer> impl;
};

struct SherpaOnnxOnlineStream {
  std::unique_ptr<sherpa_onnx::OnlineStream> impl;
  explicit SherpaOnnxOnlineStream(std::unique_ptr<sherpa_onnx::OnlineStream> p)
      : impl(std::move(p)) {}
};

namespace sherpa_onnx {
namespace {

struct Rollouts {
  const OnlineRecognizer *recognizer;
  std::vector<std::unique_ptr<OnlineStream>> streams;
  float sigma;
  std::mt19937 random;
  // Running moments of every encoder value seen by the leader. The noise scale
  // follows the encoder output of the whole stream, not of one chunk, and is
  // not reset at endpoints. Measured on 183 clips with X-ASR: the scale changes
  // little with the input level (quiet frames 0.95 of loud frames), but the
  // first chunk alone gives 0.88 of the clip's scale.
  double sum = 0;
  double sum_of_squares = 0;
  double count = 0;
  // Noise floor of the input level in dB. It is not reset at endpoints,
  // because the background continues.
  float floor_db = std::numeric_limits<float>::quiet_NaN();
};

// The noise gate is closed below kGateAboveDb over the noise floor and fully
// open kGateWidthDb higher. The floor follows a quieter frame at once and
// rises kFloorRiseDb per encoder frame, so it finds the background again after
// speech. Measured on 183 clips with X-ASR: the gate stopped all emission in a
// non-speech lead-in (35% of ungated rollouts emitted there) and did not lower
// error detection. When the input starts with speech, the floor starts on
// speech and the gate opens as the speaker pauses (median 1.2 s). On the same
// clips cut at the speech onset, error detection did not drop either.
constexpr float kGateAboveDb = 4.0f;
constexpr float kGateWidthDb = 12.0f;
constexpr float kFloorRiseDb = 0.25f;

// Level in dB of the feature frames [begin, end): the mean power of the summed
// mel bins. Features are natural-log mel energies.
float LevelDb(const float *features, int32_t begin, int32_t end,
              int32_t feature_dim) {
  double power = 0;
  for (int32_t f = begin; f < end; ++f) {
    double frame = 0;
    for (int32_t k = 0; k != feature_dim; ++k) {
      frame += std::exp(features[f * feature_dim + k]);
    }
    power += frame;
  }
  return static_cast<float>(
      10 * std::log10(power / std::max(1, end - begin) + 1e-10));
}

std::unordered_map<const OnlineStream *, Rollouts> &Registry() {
  static std::unordered_map<const OnlineStream *, Rollouts> registry;
  return registry;
}

}  // namespace

void SherpawAdvanceRollouts(OnlineTransducerDecoder *decoder, int32_t chunk_size,
                            int32_t chunk_shift, int32_t feature_dim,
                            const float *features, OnlineStream **ss, int32_t n,
                            const Ort::Value &encoder_out) {
  auto &registry = Registry();
  if (registry.empty()) return;

  auto shape = encoder_out.GetTensorTypeAndShapeInfo().GetShape();
  const int64_t frames = shape[1];
  const int64_t dim = shape[2];
  const int64_t row_size = frames * dim;
  const float *all_rows = encoder_out.GetTensorData<float>();
  Ort::AllocatorWithDefaultOptions allocator;

  for (int32_t i = 0; i != n; ++i) {
    auto found = registry.find(ss[i]);
    if (found == registry.end() || found->second.streams.empty()) continue;
    Rollouts &rollouts = found->second;
    const float *row = all_rows + i * row_size;

    for (int64_t k = 0; k != row_size; ++k) {
      rollouts.sum += row[k];
      rollouts.sum_of_squares += static_cast<double>(row[k]) * row[k];
    }
    rollouts.count += row_size;
    double mean = rollouts.sum / rollouts.count;
    double variance =
        std::max(0.0, rollouts.sum_of_squares / rollouts.count - mean * mean);
    std::normal_distribution<float> noise(
        0.0f, rollouts.sigma * static_cast<float>(std::sqrt(variance)));

    // Each encoder frame covers chunk_shift / frames feature frames from the
    // start of the chunk.
    const float *chunk_features = features + i * chunk_size * feature_dim;
    std::vector<float> gate(frames);
    for (int64_t t = 0; t != frames; ++t) {
      float level = LevelDb(chunk_features, t * chunk_shift / frames,
                            (t + 1) * chunk_shift / frames, feature_dim);
      rollouts.floor_db = std::isnan(rollouts.floor_db)
                              ? level
                              : std::min(rollouts.floor_db + kFloorRiseDb, level);
      gate[t] = std::clamp(
          (level - rollouts.floor_db - kGateAboveDb) / kGateWidthDb, 0.0f, 1.0f);
    }

    const int64_t count = static_cast<int64_t>(rollouts.streams.size());
    std::array<int64_t, 3> noisy_shape{count, frames, dim};
    Ort::Value noisy = Ort::Value::CreateTensor<float>(
        allocator, noisy_shape.data(), noisy_shape.size());
    float *out = noisy.GetTensorMutableData<float>();
    for (int64_t r = 0; r != count; ++r) {
      for (int64_t k = 0; k != row_size; ++k) {
        // Draw for every value, so the gate does not shift later draws.
        out[r * row_size + k] = row[k] + gate[k / dim] * noise(rollouts.random);
      }
    }

    std::vector<OnlineTransducerDecoderResult> results;
    std::vector<OnlineStream *> streams;
    results.reserve(count);
    streams.reserve(count);
    for (auto &stream : rollouts.streams) {
      results.push_back(std::move(stream->GetResult()));
      streams.push_back(stream.get());
    }
    // Same choice as the recognizer makes for the leader: a stream with
    // hotwords needs the overload that scores its context graph.
    if (ss[i]->GetContextGraph()) {
      decoder->Decode(std::move(noisy), streams.data(), &results);
    } else {
      decoder->Decode(std::move(noisy), &results);
    }
    for (int64_t r = 0; r != count; ++r) {
      auto &stream = rollouts.streams[r];
      stream->SetResult(results[r]);
      // Rollouts take no audio. Advancing their frame counter keeps their token
      // times and segment starts on the leader's clock.
      stream->GetNumProcessedFrames() += chunk_shift;
    }
  }
}

std::vector<OnlineStream *> SherpawRolloutStreams(const OnlineStream *leader) {
  std::vector<OnlineStream *> streams;
  auto &registry = Registry();
  auto found = registry.find(leader);
  if (found == registry.end()) return streams;
  for (auto &stream : found->second.streams) streams.push_back(stream.get());
  return streams;
}

}  // namespace sherpa_onnx

extern "C" {

// Attaches `count` rollouts to a stream that has not decoded yet, replacing
// any earlier rollouts. `sigma` scales the noise by the standard deviation of
// the encoder output. Returns 0 on success, -1 for invalid arguments.
SHERPA_ONNX_API int32_t SherpawAttachRollouts(
    const SherpaOnnxOnlineRecognizer *recognizer,
    const SherpaOnnxOnlineStream *stream, int32_t count, float sigma,
    uint32_t seed) {
  if (!recognizer || !stream || count < 1 || !(sigma > 0)) return -1;
  sherpa_onnx::Rollouts rollouts{recognizer->impl.get(), {}, sigma,
                                 std::mt19937(seed)};
  for (int32_t i = 0; i != count; ++i) {
    // Rollouts share the hotwords of the leader, which can differ from the
    // recognizer's own hotwords. Rollouts take no audio, so the default
    // feature config is enough. Reset sets the empty result and the root
    // context state, as CreateStream does.
    auto rollout = std::make_unique<sherpa_onnx::OnlineStream>(
        sherpa_onnx::FeatureExtractorConfig{},
        stream->impl->GetContextGraph());
    recognizer->impl->Reset(rollout.get());
    rollouts.streams.push_back(std::move(rollout));
  }
  sherpa_onnx::Registry()[stream->impl.get()] = std::move(rollouts);
  return 0;
}

// Frees the rollouts of a stream. Call it before the stream is destroyed.
SHERPA_ONNX_API void SherpawDetachRollouts(const SherpaOnnxOnlineStream *stream) {
  if (stream) sherpa_onnx::Registry().erase(stream->impl.get());
}

// Number of rollouts attached to a stream.
SHERPA_ONNX_API int32_t SherpawRolloutCount(const SherpaOnnxOnlineStream *stream) {
  if (!stream) return 0;
  auto &registry = sherpa_onnx::Registry();
  auto found = registry.find(stream->impl.get());
  return found == registry.end()
             ? 0
             : static_cast<int32_t>(found->second.streams.size());
}

// The result of one rollout as JSON, in the shape of
// SherpaOnnxGetOnlineStreamResultAsJson. Free it with
// SherpaOnnxDestroyOnlineStreamResultJson. Returns NULL for a bad index.
SHERPA_ONNX_API const char *SherpawGetRolloutResultAsJson(
    const SherpaOnnxOnlineStream *stream, int32_t index) {
  if (!stream) return nullptr;
  auto &registry = sherpa_onnx::Registry();
  auto found = registry.find(stream->impl.get());
  if (found == registry.end() || index < 0 ||
      index >= static_cast<int32_t>(found->second.streams.size())) {
    return nullptr;
  }
  auto &rollouts = found->second;
  std::string json =
      rollouts.recognizer->GetResult(rollouts.streams[index].get()).AsJsonString();
  char *out = new char[json.size() + 1];
  std::memcpy(out, json.c_str(), json.size() + 1);
  return out;
}

}  // extern "C"
