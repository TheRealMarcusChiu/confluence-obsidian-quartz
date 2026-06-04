---
title: "Java - Spring Framework - Web - Clients (RestTemplate - WebClient)"
created: 2020-07-06T18:44:27.448-05:00
modified: 2022-12-22T10:01:10.094-06:00
parent: "[[Java - Spring Framework - Web／Network／API Libraries]]"
children:
  - "[[Java - Spring - RestTemplate]]"
  - "[[Java - Spring - WebClient]]"
---
[[Java - Spring Family|Java Spring]] implementations of [[Representational State Transfer (REST) - RESTful|REST]]/[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] clients
# REST/HTTP - Clients

RestTemplate vs WebClient: [https://www.baeldung.com/spring-webclient-resttemplate](https://www.baeldung.com/spring-webclient-resttemplate)

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>[[Java - Spring - RestTemplate|RestTemplate]]</code>",
        "bg": "#F4F5F7"
      },
      "- synchronous & blocking"
    ],
    [
      {
        "content": "<code>[[Java - Spring - WebClient|WebClient]]</code>",
        "bg": "#F4F5F7"
      },
      "- asynchronous & non-blocking\n- can achieve <code>RestTemplate</code> like synchronous processing by appending <code>.block()</code>"
    ]
  ],
  "tableStyle": "width: 77.6119%;"
}
```
