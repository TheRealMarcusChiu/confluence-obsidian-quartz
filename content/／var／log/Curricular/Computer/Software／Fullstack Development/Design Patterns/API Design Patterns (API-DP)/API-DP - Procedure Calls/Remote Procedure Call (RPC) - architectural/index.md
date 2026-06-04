---
title: "Remote Procedure Call (RPC) - architectural"
created: 2019-12-12T21:03:35.305-06:00
modified: 2021-12-31T20:23:33.940-06:00
parent: "[[API-DP - Procedure Calls]]"
children: []
---
for network protocol: [[Remote Procedure Call (RPC) - network protocol]]
###### Remote Procedure Call (RPC)
- is an architectural framework for calling a procedure in another process and exchanging data
- implemented on top of an existing network protocol

# Implementations
- building RPC APIs with HTTP
	- [Understanding RPC Vs REST For HTTP APIs](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)
		- If an API is mostly actions, maybe it should be RPC
		- If an API is mostly CRUD, maybe it should be [[Representational State Transfer (REST) - RESTful|REST]]
- [XML-RPC](https://en.wikipedia.org/wiki/XML-RPC)
- [JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC)
- [SOAP](https://en.wikipedia.org/wiki/SOAP) RPC
- [[gRPC]] - includes [[Protocol Buffer (protobuf)|protocol-buffers]] a tool that generates "boilerplate" code, for server and/or client method stubs
