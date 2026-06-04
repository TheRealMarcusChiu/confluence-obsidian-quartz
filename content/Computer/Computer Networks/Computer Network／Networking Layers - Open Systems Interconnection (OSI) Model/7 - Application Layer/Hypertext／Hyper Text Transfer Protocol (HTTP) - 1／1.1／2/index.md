---
title: "Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2"
created: 2019-03-16T22:37:14.016-05:00
modified: 2026-01-14T11:37:18.463-06:00
parent: "[[7 - Application Layer]]"
children:
  - "[[HTTP - Specifications]]"
---
###### Hypertext Transfer Protocol (HTTP)
````excerpt
- is an [[7 - Application Layer|application-layer]]/[[API - Network-Level|network-level API]] protocol for transmitting hypermedia documents (e.g. [[HyperText Markup Language (HTML)|HTML]], [[JavaScript]], [[Cascading Style Sheets (CSS)|CSS]], etc)
- it was designed for communication between web clients and web servers
- HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response
- HTTP is a stateless protocol, meaning that this protocol does not have builtin "sessions"
````
^excerpt

# HTTP - History
- HTTP is the underlying communication protocol of the World Wide Web
- It was invented by Tim Berners-Lee at CERN between 1989 and 1991, and open-sourced in 1993

# HTTP - Request & Response

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "HTTP Request",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "HTTP Response",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Template",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(128,0,0);\">Request-Method</font> <font style=\"color: rgb(255,102,0);\">/Request-Resource</font> <font style=\"color: rgb(128,128,0);\">HTTP-Version</font>\n<font style=\"color: rgb(0,128,0);\">HTTP Headers</font>\n\n<font style=\"color: rgb(255,0,0);\">HTTP Request Body (depends on <font style=\"color: rgb(128,0,0);\">Request-Method</font>)</font>",
      "<font style=\"color: rgb(128,128,0);\">HTTP-Version <font style=\"color: rgb(51,102,255);\">HTTP Response Code</font></font><font style=\"color: rgb(0,128,0);\">HTTP Headers</font>\n\n<font style=\"color: rgb(255,0,0);\">HTTP Response Body</font>"
    ],
    [
      {
        "content": "Example",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(128,0,0);\">POST</font> <font style=\"color: rgb(255,102,0);\">/test/resource</font> <font style=\"color: rgb(128,128,0);\">HTTP/1.1</font> \n<font style=\"color: rgb(0,128,0);\">Host: foo.example.com </font>Content-Type: application/x-www-form-urlencoded\nContent-Length: 27<font style=\"color: rgb(255,0,0);\">field1=value1&field2=value2</font>",
      "<font style=\"color: rgb(128,128,0);\">HTTP/1.1</font> <font style=\"color: rgb(51,102,255);\">200 OK</font>\n<font style=\"color: rgb(0,128,0);\">Server: nginx/1.12.2</font>\n<font style=\"color: rgb(0,128,0);\">Content-Type: text/html</font>\n<font style=\"color: rgb(0,128,0);\">Content-Length: 12292</font>\n\n<font style=\"color: rgb(255,0,0);\">\\<html\\>\\<header\\>\\</header\\>\\<body\\>\\<p\\>Hello, World\\</p\\>\\</body\\>\\</html\\></font>"
    ],
    [
      {
        "content": "Other",
        "bg": "#F4F5F7"
      },
      "- [[HTTP - Headers]]\n- [[HTTP - Request Methods／Verbs  & Request Resource|HTTP - Request Methods/Verbs & Request Resource]]",
      "- [[HTTP - Headers]]\n- [[HTTP - Response Codes]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# HTTP - Specifications
- [[HTTP - Pipelining & Multiplexing]]

# HTTP - Implementations
- [[Web (HTTP) Servers|HTTP Servers]]
- [[Web (HTTP) Clients／Browsers|HTTP Clients]]
