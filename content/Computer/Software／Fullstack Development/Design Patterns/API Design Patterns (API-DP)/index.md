---
title: "API Design Patterns (API-DP)"
created: 2019-03-16T03:14:40.465-05:00
modified: 2022-02-14T20:48:41.895-06:00
parent: "[[Design Patterns]]"
children:
  - "[[API-DP - CRUDing Data]]"
  - "[[API-DP - Procedure Calls]]"
  - "[[API-DP - Streaming]]"
  - "[[API-DP - Subscription／Consumer Publisher／Producer Based]]"
  - "[[Simple Object Access Protocol (SOAP)]]"
---
- <strong>[[Application Programming Interface (API) - Software Development Kit (SDK)|Application Programming Interface (API)]]</strong> - a set of subroutine definitions, communication protocols, and tools for accessing backend servers
- 
    ````excerpt
    <strong>[[API Design Patterns (API-DP)]]</strong> - are [[Design Patterns]] that deals with designing [[Application Programming Interface (API) - Software Development Kit (SDK)|APIs]] (these APIs usually use existing [[API - Network-Level|Network-Level APIs]])
    ````
    ^excerpt

# API Design Patterns
- consider using [[Interface Definition／Description Language & Libraries (IDL)|Interface Definition/Description Language & Libraries (IDL)]]
- also see: [Google API Design](https://cloud.google.com/apis/design)
```merge-table
{
  "rows": [
    [
      {
        "content": "Patterns",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Purpose",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Representational State Transfer (REST) - RESTful|RESTful]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "CRUDing data",
      "- an API design pattern for CRUDing data\n- implemented on top of an existing network protocol\n- hard/impossible to manage interrelated data in a SINGLE operation"
    ],
    [
      {
        "content": "[[Graph Query Language (GraphQL) - API|GraphQL]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "CRUDing data\n(relational data)",
      "- an API design pattern for CRUDing data\n- implemented on top of an existing network protocol\n- easier to manage interrelated data in a SINGLE operation"
    ],
    [
      {
        "content": "[[Simple Object Access Protocol (SOAP)|SOAP]]",
        "bg": "#F4F5F7"
      },
      "brain fart",
      "- both: an API design pattern & a network protocol\n- distinguishing features:\n\t- security\n\t- transactions\n\t- ACID (Atomicity, Consistency, Isolation, Durability) compliance"
    ],
    [
      {
        "content": "[[Remote Procedure Call (RPC) - architectural|RPC (architecture)]]",
        "bg": "#F4F5F7"
      },
      "calling a procedure in another process and exchanging data",
      "- an API design pattern for calling a procedure in another process and exchanging data\n- implemented on top of an existing network protocol"
    ],
    [
      {
        "content": "[[Remote Method Invocation (RMI)|RMI]]",
        "bg": "#F4F5F7"
      },
      "objected-oriented RPC",
      "- an API design pattern similar to RPC (architecture), but takes it a step further by making it object-oriented and providing the capability to keep references to remote objects and invoke their methods\n- implemented on top of an existing network protocol"
    ],
    [
      {
        "content": "[[Reactive Streams]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "streaming data",
      "- used for processing infinite streams of data in an asynchronous and non-blocking manner"
    ],
    [
      {
        "content": "[[WebHooks]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "subscribers & providers",
      "an API design pattern for subscribers and providers\n\nClient/Subscriber\n- client registers subscription endpoint by submitting a Client Callback [[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor|URL]] to the Server/Provider\n- and then, whenever a new event occurs on the server, the server can send a request to the Client Callback URL to notify the update\n\nServer/Provider has 2 tasks:\n- define a subscription endpoint that allows clients to subscribe\n- implement a WebHook queue of Client Callback URLs"
    ],
    [
      {
        "content": "[[WebSubs - PubSubHubbub - PubSub - PuSH]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "subscribers & providers",
      "an API design pattern for subscribers and providers\n\nWebSub is built upon an ecosystem of:\n- <strong>Servers/Publishers</strong> (Medium, WordPress, etc.)\n- <strong>Mediators/Hubs</strong> (Superfeedr, Switchboard, etc.)\n- <strong>Clients/Subscribers</strong> (Feedly, Flipboard, etc.).\n\nCompared to WebHook, WebSub requires way <strong>less effort</strong> for Publishers as all they need to do is declare the Hub they’re using with the [Link Header](https://www.w3.org/wiki/LinkHeader), and then ping it when they have new content published.\n\nFor Client/Subscribers, not much changed as they’re still going to make a subscription request but this time to the Hub, which is going to ping them at its turn when new content has been published."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# API Design Pattern Comparisons
- [REST vs GraphQL](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b)
	- [Caching](https://philsturgeon.uk/api/2017/01/26/graphql-vs-rest-caching/) - you can’t "network" cache GraphQL results as easily as you can with REST results. GraphQL relies on "application" caching, which is a little more complicated
- [RPC vs REST - over HTTP](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)
	- If an API is mostly actions, maybe it should be RPC
	- If an API is mostly CRUD, maybe it should be REST
- [RPC vs REST vs GraphQL - over HTTP](https://blog.apisyouwonthate.com/understanding-rpc-rest-and-graphql-2f959aadebe7)
- [SOAP vs REST](https://www.upwork.com/hiring/development/soap-vs-rest-comparing-two-apis/)
- [WebHooks vs WebSubs](https://nordicapis.com/webhooks-vs-websub-which-one-is-better-to-stream-your-events-in-real-time/)
