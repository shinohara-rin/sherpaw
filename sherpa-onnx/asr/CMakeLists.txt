# Original author: Copyright (c) 2024 Xiaomi Corporation, Licensed under the Apache 2.0 License.
# Modified by Makito in 2026

include(../HelperFunctions.cmake)

set(exported_functions
  # Online ASR
  SherpaOnnxCreateOnlineRecognizer
  SherpaOnnxCreateOnlineStream
  SherpaOnnxDecodeMultipleOnlineStreams
  SherpaOnnxDecodeOnlineStream
  SherpaOnnxDestroyOnlineRecognizer
  SherpaOnnxDestroyOnlineRecognizerResult
  SherpaOnnxDestroyOnlineStream
  SherpaOnnxDestroyOnlineStreamResultJson
  SherpaOnnxGetOfflineStreamResultAsJson
  SherpaOnnxGetOnlineStreamResult
  SherpaOnnxGetOnlineStreamResultAsJson
  SherpaOnnxIsOnlineStreamReady
  SherpaOnnxOnlineStreamAcceptWaveform
  SherpaOnnxOnlineStreamGetOption
  SherpaOnnxOnlineStreamInputFinished
  SherpaOnnxOnlineStreamIsEndpoint
  SherpaOnnxOnlineStreamReset
  SherpaOnnxOnlineStreamSetOption
  # Encoder-output noise rollouts (rollouts/sherpaw-rollouts.cc)
  SherpawAttachRollouts
  SherpawDetachRollouts
  SherpawGetRolloutResultAsJson
  SherpawRolloutCount
  # Offline ASR
  SherpaOnnxAcceptWaveformOffline
  SherpaOnnxCreateOfflineRecognizer
  SherpaOnnxOfflineRecognizerSetConfig
  SherpaOnnxCreateOfflineStream
  SherpaOnnxDecodeMultipleOfflineStreams
  SherpaOnnxDecodeOfflineStream
  SherpaOnnxDestroyOfflineRecognizer
  SherpaOnnxDestroyOfflineRecognizerResult
  SherpaOnnxDestroyOfflineStream
  SherpaOnnxDestroyOfflineStreamResultJson
  SherpaOnnxGetOfflineStreamResult
  SherpaOnnxOfflineStreamGetOption
  SherpaOnnxOfflineStreamSetOption
)

set(exported_runtime_methods
	ccall
	FS_unlink
	stringToUTF8
	setValue
	getValue
	lengthBytesUTF8
	UTF8ToString
	HEAPU8
	HEAP16
	HEAP32
	HEAPU32
	HEAPF32
	HEAPF64
)

set_emcc_flags(MY_FLAGS "${exported_functions}" "${exported_runtime_methods}")

plan_build(asr)
set_target_properties(asr PROPERTIES LINK_FLAGS "${MY_FLAGS}")

# Rollouts need two hooks in the transducer recognizer. The patch applies with zero fuzz to a
# build-local copy of the header, so upstream stays untouched and an incompatible update stops
# configuration. The recognizer factory is recompiled next to the patched header, because a
# quoted include looks in the including file's directory first. The executable's copy then
# replaces the archive member of sherpa-onnx-core at link time.
find_program(PATCH_EXECUTABLE patch REQUIRED)
set(rollouts_dir "${CMAKE_CURRENT_BINARY_DIR}/rollouts")
set(upstream_csrc "${CMAKE_CURRENT_SOURCE_DIR}/../upstream/sherpa-onnx/csrc")
set(rollouts_patch "${CMAKE_CURRENT_SOURCE_DIR}/rollouts/online-recognizer-transducer-impl.patch")
set(patched_header "${rollouts_dir}/sherpa-onnx/csrc/online-recognizer-transducer-impl.h")
configure_file("${upstream_csrc}/online-recognizer-transducer-impl.h" "${patched_header}" COPYONLY)
configure_file("${upstream_csrc}/online-recognizer-impl.cc" "${rollouts_dir}/online-recognizer-impl.cc" COPYONLY)
set_property(DIRECTORY APPEND PROPERTY CMAKE_CONFIGURE_DEPENDS "${rollouts_patch}")
execute_process(COMMAND "${PATCH_EXECUTABLE}" --batch --fuzz=0 "${patched_header}" "${rollouts_patch}"
  RESULT_VARIABLE rollouts_result OUTPUT_VARIABLE rollouts_log ERROR_VARIABLE rollouts_error)
if(NOT rollouts_result EQUAL 0)
  message(FATAL_ERROR "Cannot apply ${rollouts_patch}: ${rollouts_log}${rollouts_error}")
endif()
get_target_property(rollouts_core_includes sherpa-onnx-core INCLUDE_DIRECTORIES)
target_sources(asr PRIVATE "${rollouts_dir}/online-recognizer-impl.cc" rollouts/sherpaw-rollouts.cc)
target_include_directories(asr PRIVATE ${rollouts_core_includes} "${CMAKE_CURRENT_SOURCE_DIR}/rollouts")

option(SHERPAW_ASR_WEBGPU "Build the optional ASR WebGPU backend" OFF)
if(SHERPAW_ASR_WEBGPU)
  add_subdirectory(../asr-runtime "${CMAKE_CURRENT_BINARY_DIR}/webgpu")
endif()
