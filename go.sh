cd proto
protoc --go_out=../collo --go_opt=paths=source_relative \
  --go-grpc_out=../collo --go-grpc_opt=paths=source_relative \
  collo.proto
cd ../