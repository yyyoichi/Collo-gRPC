#!/bin/sh
SERVER_OUTPUT_DIR=../collo
CLIENT_OUTPUT_DIR=../types

cd proto
protoc --go_out=${SERVER_OUTPUT_DIR} --go_opt=paths=source_relative \
  --go-grpc_out=${SERVER_OUTPUT_DIR} --go-grpc_opt=paths=source_relative \
  --js_out=import_style=commonjs:${CLIENT_OUTPUT_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTPUT_DIR} \
  collo.proto
cd ../