---
title: "gRPC - Spring Boot"
created: 2020-05-16T01:11:02.313-05:00
modified: 2020-05-16T12:20:36.429-05:00
parent: "[[gRPC]]"
children: []
---
## <strong>Maven Dependencies</strong>[grpc-netty](https://search.maven.org/classic/#search%7Cga%7C1%7Ca%3A%22grpc-netty%22), [grpc-protobuf](https://search.maven.org/classic/#search%7Cga%7C1%7Ca%3A%22grpc-protobuf%22) and [grpc-stub](https://search.maven.org/classic/#search%7Cga%7C1%7Ca%3A%22grpc-stub%22) dependencies
```
<dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-netty</artifactId>
    <version>1.16.1</version>
</dependency>
<dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-protobuf</artifactId>
    <version>1.16.1</version>
</dependency>
<dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-stub</artifactId>
    <version>1.16.1</version>
</dependency>
```
## <strong>Defining Service</strong>

create a HelloService.proto
```
syntax = "proto3";
option java_multiple_files = true;
package com.marcuschiu.grpc;
```

The first line tells the compiler what syntax is used in this file. By default, the compiler generates all the Java code in a single Java file. The second line overrides this setting, and everything will be generated in individual files.

Finally, we specify the package we want to use for our generated Java classes
###### Defining Message Structure
```
message HelloRequest {
    string firstName = 1;
    string lastName = 2;
}

message HelloResponse {
    string greeting = 1;
}
```

This defines the request payload. Here each attribute that goes into the message is defined along with its type
###### Defining the Service ContractFor our <em>HelloService</em> we define a <em>hello()</em> operation
```
service HelloService {
    rpc hello(HelloRequest) returns (HelloResponse);
}
```The <em>hello()</em> operation accepts a unary request and returns a unary response. gRPC also supports streaming by prefixing <em>stream</em> keyword to the request and response
## <strong>Generating the Code</strong>Now we pass the <em>HelloService.proto</em> file to the protocol buffer compiler <em>protoc</em> to generate the Java files. There are multiple ways to trigger this
###### Using Protocol Buffer Compiler

[Download the compiler](https://developers.google.com/protocol-buffers/docs/downloads) and follow the instructions in the README file.

You can use the following command to generate the code:
```
protoc -I=$SRC_DIR --java_out=$DST_DIR $SRC_DIR/HelloService.proto
```
###### Using Maven Plugin
gRPC provides a [<em>protobuf-maven-plugin</em>](https://search.maven.org/classic/#search%7Cga%7C1%7Cg%3A%22org.xolstice.maven.plugins%22%20AND%20a%3A%22protobuf-maven-plugin%22) for the Maven build system
```
<build>
  <extensions>
    <extension>
      <groupId>kr.motd.maven</groupId>
      <artifactId>os-maven-plugin</artifactId>
      <version>1.6.1</version>
    </extension>
  </extensions>
  <plugins>
    <plugin>
      <groupId>org.xolstice.maven.plugins</groupId>
      <artifactId>protobuf-maven-plugin</artifactId>
      <version>0.6.1</version>
      <configuration>
        <protocArtifact>
          com.google.protobuf:protoc:3.3.0:exe:${os.detected.classifier}
        </protocArtifact>
        <pluginId>grpc-java</pluginId>
        <pluginArtifact>
          io.grpc:protoc-gen-grpc-java:1.4.0:exe:${os.detected.classifier}
        </pluginArtifact>
      </configuration>
      <executions>
        <execution>
          <goals>
            <goal>compile</goal>
            <goal>compile-custom</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```
## <strong>Creating the Server</strong>

the following files will be generated
- <em>HelloRequest.java – </em>contains the <em>HelloRequest</em> type definition
- <em>HelloResponse.java – </em>this contains the <em>HelleResponse</em> type definition
- <em>HelloServiceImplBase.java – </em>this contains the abstract class <em>HelloServiceImplBase</em> which provides an implementation of all the operations we defined in the service interface

###### Override Service Base Class
```java
public class HelloServiceImpl extends HelloServiceImplBase {
 
    @Override
    public void hello(
      HelloRequest request, StreamObserver<HelloResponse> responseObserver) {
 
        String greeting = new StringBuilder()
          .append("Hello, ")
          .append(request.getFirstName())
          .append(" ")
          .append(request.getLastName())
          .toString();
 
        HelloResponse response = HelloResponse.newBuilder()
          .setGreeting(greeting)
          .build();
 
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
```
###### Running gRPC Server
```
public class GrpcServer {
    public static void main(String[] args) {
        Server server = ServerBuilder
          .forPort(8080)
          .addService(new HelloServiceImpl()).build();
 
        server.start();
        server.awaitTermination();
    }
}
```
## <strong>Creating Client</strong>
```
public class GrpcClient {
    public static void main(String[] args) {
        ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 8080)
          .usePlaintext()
          .build();
 
        HelloServiceGrpc.HelloServiceBlockingStub stub 
          = HelloServiceGrpc.newBlockingStub(channel);
 
        HelloResponse helloResponse = stub.hello(HelloRequest.newBuilder()
          .setFirstName("Baeldung")
          .setLastName("gRPC")
          .build());
 
        channel.shutdown();
    }
}
```
## <strong>Resources</strong>

[https://www.baeldung.com/grpc-introduction](https://www.baeldung.com/grpc-introduction)
