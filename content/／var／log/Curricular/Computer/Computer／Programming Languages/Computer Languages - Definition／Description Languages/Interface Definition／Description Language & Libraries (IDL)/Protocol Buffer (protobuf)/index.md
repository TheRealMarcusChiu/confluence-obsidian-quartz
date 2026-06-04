---
title: "Protocol Buffer (protobuf)"
created: 2019-12-12T21:37:30.514-06:00
modified: 2019-12-22T18:43:20.742-06:00
parent: "[[Interface Definition／Description Language & Libraries (IDL)]]"
children: []
---
````excerpt
<strong>Protocol Buffer (protobuf)</strong> are a language-neutral, platform-neutral extensible mechanism for serializing structured data
````
^excerpt

[https://developers.google.com/protocol-buffers](https://developers.google.com/protocol-buffers)
### Frameworks That Use Protocol Buffers
- [[gRPC]]

### Installation

protoc - is compiler that takes a .proto file and outputs code in the specified language

> [!expand]- from source
> [download the package](https://developers.google.com/protocol-buffers/docs/downloads.html) and follow the instructions in the README

> [!expand]- homebrew
> brew search protobuf
>
> brew install protobuf
### Example Use

example .proto file
```
syntax = "proto2";

package tutorial;

option java_package = "com.example.tutorial";
option java_outer_classname = "AddressBookProtos";

message Person {
  required string name = 1;
  required int32 id = 2;
  optional string email = 3;

  enum PhoneType {
    MOBILE = 0;
    HOME = 1;
    WORK = 2;
  }

  message PhoneNumber {
    required string number = 1;
    optional PhoneType type = 2 [default = HOME];
  }

  repeated PhoneNumber phones = 4;
}

message AddressBook {
  repeated Person people = 1;
}
```

now run the compiler, specifying the source directory (where your application's source code lives – the current directory is used if you don't provide a value), the destination directory (where you want the generated code to go; often the same as <code>\$SRC\_DIR</code>), and the path to your <code>.proto</code>
```bash
protoc -I=$SRC_DIR --java_out=$DST_DIR $SRC_DIR/addressbook.proto
```

<code>--java\_out</code> - specifies we want Java code (similar options are provided for other supported languages)
