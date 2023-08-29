import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ColloRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): ColloRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ColloRequest;
  hasFrom(): boolean;
  clearFrom(): ColloRequest;

  getUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUntil(value?: google_protobuf_timestamp_pb.Timestamp): ColloRequest;
  hasUntil(): boolean;
  clearUntil(): ColloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ColloRequest): ColloRequest.AsObject;
  static serializeBinaryToWriter(message: ColloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColloRequest;
  static deserializeBinaryFromReader(message: ColloRequest, reader: jspb.BinaryReader): ColloRequest;
}

export namespace ColloRequest {
  export type AsObject = {
    keyword: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    until?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ColloResponse extends jspb.Message {
  getWordsMap(): jspb.Map<number, string>;
  clearWordsMap(): ColloResponse;

  getPairsList(): Array<Pair>;
  setPairsList(value: Array<Pair>): ColloResponse;
  clearPairsList(): ColloResponse;
  addPairs(value?: Pair, index?: number): Pair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ColloResponse): ColloResponse.AsObject;
  static serializeBinaryToWriter(message: ColloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColloResponse;
  static deserializeBinaryFromReader(message: ColloResponse, reader: jspb.BinaryReader): ColloResponse;
}

export namespace ColloResponse {
  export type AsObject = {
    wordsMap: Array<[number, string]>,
    pairsList: Array<Pair.AsObject>,
  }
}

export class Pair extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): Pair;
  clearValuesList(): Pair;
  addValues(value: number, index?: number): Pair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pair.AsObject;
  static toObject(includeInstance: boolean, msg: Pair): Pair.AsObject;
  static serializeBinaryToWriter(message: Pair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pair;
  static deserializeBinaryFromReader(message: Pair, reader: jspb.BinaryReader): Pair;
}

export namespace Pair {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

