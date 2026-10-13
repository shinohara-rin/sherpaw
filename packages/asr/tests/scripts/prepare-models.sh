#!/usr/bin/env bash

TEST_ROOT=$(dirname $(realpath $0))/..
CACHE_DIR=$TEST_ROOT/.cache
MODEL_DIR=$TEST_ROOT/model
FIXTURES_DIR=$TEST_ROOT/fixtures
MODEL_NAME=sherpa-onnx-streaming-paraformer-bilingual-zh-en
MODEL_ARCHIVE=$CACHE_DIR/$MODEL_NAME.tar.bz2
UNPACKED_DIR=$CACHE_DIR/$MODEL_NAME

download() {
	curl -L --progress-bar -o "$2" "$1"
}

mkdir -p $CACHE_DIR
mkdir -p $MODEL_DIR
mkdir -p $FIXTURES_DIR

if [[ ! -f $MODEL_ARCHIVE ]]; then
	download https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/$MODEL_NAME.tar.bz2 $MODEL_ARCHIVE
fi

if [[ ! -d $UNPACKED_DIR ]]; then
	mkdir -p $UNPACKED_DIR
	tar xvf $MODEL_ARCHIVE -C $UNPACKED_DIR --strip-components=1
fi

cp $UNPACKED_DIR/encoder.onnx $MODEL_DIR/encoder.onnx
cp $UNPACKED_DIR/decoder.onnx $MODEL_DIR/decoder.onnx
cp $UNPACKED_DIR/tokens.txt $MODEL_DIR/tokens.txt
cp $UNPACKED_DIR/test_wavs/0.wav $FIXTURES_DIR/0.wav

# A streaming transducer for the rollout tests. Rollouts need a transducer.
TRANSDUCER_NAME=sherpa-onnx-streaming-zipformer-en-20M-2023-02-17
TRANSDUCER_ARCHIVE=$CACHE_DIR/$TRANSDUCER_NAME.tar.bz2
TRANSDUCER_UNPACKED_DIR=$CACHE_DIR/$TRANSDUCER_NAME
TRANSDUCER_DIR=$TEST_ROOT/model-transducer

if [[ ! -f $TRANSDUCER_ARCHIVE ]]; then
	download https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/$TRANSDUCER_NAME.tar.bz2 $TRANSDUCER_ARCHIVE
fi

if [[ ! -d $TRANSDUCER_UNPACKED_DIR ]]; then
	mkdir -p $TRANSDUCER_UNPACKED_DIR
	tar xvf $TRANSDUCER_ARCHIVE -C $TRANSDUCER_UNPACKED_DIR --strip-components=1
fi

mkdir -p $TRANSDUCER_DIR
cp $TRANSDUCER_UNPACKED_DIR/encoder-epoch-99-avg-1.int8.onnx $TRANSDUCER_DIR/encoder.onnx
cp $TRANSDUCER_UNPACKED_DIR/decoder-epoch-99-avg-1.onnx $TRANSDUCER_DIR/decoder.onnx
cp $TRANSDUCER_UNPACKED_DIR/joiner-epoch-99-avg-1.int8.onnx $TRANSDUCER_DIR/joiner.onnx
cp $TRANSDUCER_UNPACKED_DIR/tokens.txt $TRANSDUCER_DIR/tokens.txt
cp $TRANSDUCER_UNPACKED_DIR/test_wavs/0.wav $FIXTURES_DIR/en-0.wav

ls -lh $MODEL_DIR $TRANSDUCER_DIR
ls -lh $FIXTURES_DIR
