---
title: "gRPC"
created: 2019-12-12T20:57:18.414-06:00
modified: 2026-01-14T11:36:13.862-06:00
parent: "[[Interface Definition／Description Language & Libraries (IDL)]]"
children:
  - "[[gRPC - Spring Boot]]"
---
###### gRPC
````excerpt
- is a high-performance, open-source [[Remote Procedure Call (RPC) - architectural|remote procedure call (RPC)]] framework
- originally developed by Google
- it lets services call methods on other services as if they were local functions with their parameters and return types — even when they’re running on different machines
- uses [[Protocol Buffer (protobuf)|protocol buffers]] to describe both the service interface and the structure of the payload messages
- supports load balancing, tracing, health checking and authentication
- operates over [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP 2.0]]
````
^excerpt

# gRPC - Allowed RPC Types

with their parameters and return types

```merge-table
{
  "rows": [
    [
      {
        "content": "Unary RPC",
        "bg": "#F4F5F7"
      },
      "- where the client sends a single request to the server and gets a single response back, just like a normal function call\n- \n    ```\n    rpc SayHello(HelloRequest) returns (HelloResponse){ }\n    ```"
    ],
    [
      {
        "content": "Server Streaming RPC",
        "bg": "#F4F5F7"
      },
      "- where the client sends a request to the server and gets a stream to read a sequence of messages back. The client reads from the returned stream until there are no more messages. gRPC guarantees message ordering within an individual RPC call\n- \n    ```\n    rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse){ }\n    ```"
    ],
    [
      {
        "content": "Client Streaming RPC",
        "bg": "#F4F5F7"
      },
      "- where the client writes a sequence of messages and sends them to the server, again using a provided stream. Once the client has finished writing the messages, it waits for the server to read them and return its response. Again gRPC guarantees message ordering within an individual RPC call\n- \n    ```\n    rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse) { }\n    ```"
    ],
    [
      {
        "content": "[[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|Bi-Directional]] Streaming RPC",
        "bg": "#F4F5F7"
      },
      "- where both sides send a sequence of messages using a read-write stream. The two streams operate independently, so clients and servers can read and write in whatever order they like: for example, the server could wait to receive all the client messages before writing its responses, or it could alternately read a message then write a message, or some other combination of reads and writes. The order of messages in each stream is preserved\n- \n    ```\n    rpc BidiHello(stream HelloRequest) returns (stream HelloResponse){ }\n    ```"
    ]
  ]
}
```
# gRPC - Example
### Defining a Service

example service defined as a protocol buffer file:
```
// proto version 3
syntax = "proto3";

// A service definition with 2 RPCs
service HelloService {
  rpc SayHello (HelloRequest) returns (HelloResponse);					// Unary RPC
  rpc BidiHello (stream HelloRequest) returns (stream HelloResponse);	// Bi-directional RPC
}

message HelloRequest {
  string greeting = 1;	// tag/field number 1 (should never change for backward compatibility)
}

message HelloResponse {
  string reply = 1;
}
```

the file above defines a Service with 2 RPCs:
1. SayHello RPC - takes in a single message and returns a single message
2. BidiHello RPC - takes in a stream of messages and returns a stream of messages

### Generating Client & Server Code

<code><font style="color: rgb(122,134,154);">protoc</font></code> - is compiler that takes a <code><font style="color: rgb(122,134,154);">.proto</font></code> file and outputs code in the specified language
1. if you haven't installed the compiler, [download the package](https://developers.google.com/protocol-buffers/docs/downloads.html) and follow the instructions in the README
2. further instructions now depends on the target language

Let's use <code><font style="color: rgb(122,134,154);">protoc</font></code> to compile the <code><font style="color: rgb(122,134,154);">hello-service.proto</font></code> file and auto generate [[Go-lang|Go]] files:
```
protoc \
   --go_out=. \
   --go_opt=paths=source_relative \
   --go-grpc_out=.
   --go-grpc_opt=paths=source_relative \
   hello-service.proto
```

where:
- <code><font style="color: rgb(122,134,154);">--go\_out=.</font></code> - enables the Go Protobuf plugin
- <code><font style="color: rgb(122,134,154);">--go\_opt=paths=source\_relative</font></code> - controls where the generated Protobuf message files are placed (i.e. <code><font style="color: rgb(122,134,154);">hello-service.pb.go</font></code>). <code><font style="color: rgb(122,134,154);">source\_relative</font></code> means output files go next to the <code><font style="color: rgb(122,134,154);">.proto</font></code> file
- <code><font style="color: rgb(122,134,154);">--go-grpc\_out=.</font></code> - enables the Go gRPC plugin
- <code><font style="color: rgb(122,134,154);">--go-grpc\_opt=paths=source\_relative</font></code> - controls where the generated gRPC client & server code are placed (i.e. <code><font style="color: rgb(122,134,154);">hello-service</font><font style="color: rgb(122,134,154);">\_grpc.pb.go</font></code>)

# gRPC - Implementations
- Java gRPC - [https://grpc.io/docs/tutorials/basic/java/](https://grpc.io/docs/tutorials/basic/java/)
	- using plugin <code><font style="color: rgb(122,134,154);">protoc-gen-grpc-java</font></code>
		- install plugin: [https://github.com/grpc/grpc-java/tree/master/compiler](https://github.com/grpc/grpc-java/tree/master/compiler)
		- run command
		    ```
		    protoc --plugin=protoc-gen-grpc-java --grpc-java_out="$OUTPUT_FILE" --proto_path="$DIR_OF_PROTO_FILE" "$PROTO_FILE"
		    ```
	- use maven for java - [https://github.com/grpc/grpc-java](https://github.com/grpc/grpc-java)
- SpringBoot gRPC Wrapper - [https://github.com/LogNet/grpc-spring-boot-starter](https://github.com/LogNet/grpc-spring-boot-starter)

# Resources
- [https://grpc.io/](https://grpc.io/)
- [Go-lang gRPC example reference](https://bartlomiejmika.com/posts/2021/example-of-writing-a-simple-grpc-server-in-golang-from-scratch/)
