// Encoder-output noise rollouts for streaming transducers.
//
// A rollout is a hidden stream that follows a leader stream. It never takes
// audio. Each time the leader's chunk is encoded, every rollout decodes the same
// encoder frames with its own Gaussian noise added. The encoder runs once for
// the leader and all its rollouts, so a rollout costs only a decoder and joiner
// pass. Where the rollouts disagree with the leader, the recognizer is unsure.
//
// The noise is gated by the input level over a tracked noise floor. Input-noise
// decodes almost never emit tokens in non-speech, but ungated encoder noise
// does, so ungated rollouts flag silence and background as missed speech.
#pragma once

#include <cstdint>
#include <vector>

#include "onnxruntime_cxx_api.h"

namespace sherpa_onnx {

class OnlineStream;
class OnlineTransducerDecoder;

// Called by the patched transducer recognizer after each encoder run, before
// the leaders decode. `encoder_out` has one row per stream in `ss`.
// `features` holds the encoder input: one (chunk_size, feature_dim) block of
// log-mel features per stream.
void SherpawAdvanceRollouts(OnlineTransducerDecoder *decoder, int32_t chunk_size,
                            int32_t chunk_shift, int32_t feature_dim,
                            const float *features, OnlineStream **ss, int32_t n,
                            const Ort::Value &encoder_out);

// The rollouts of a leader, so the recognizer resets them with the leader.
std::vector<OnlineStream *> SherpawRolloutStreams(const OnlineStream *leader);

}  // namespace sherpa_onnx
