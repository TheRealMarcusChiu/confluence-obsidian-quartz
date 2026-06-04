---
title: "HTTP - Request Methods／Verbs  & Request Resource"
created: 2019-12-17T21:54:00.529-06:00
modified: 2022-01-24T22:19:49.610-06:00
parent: "[[HTTP - Specifications]]"
children: []
---
- <font style="color: rgb(128,0,0);"><strong>HTTP Request Methods</strong></font><font style="color: rgb(128,0,0);"> or </font><strong><font style="color: rgb(128,0,0);">HTTP Verbs</font> </strong>to indicate the desired action to be performed for a given resource
- <font style="color: rgb(255,102,0);"><strong>HTTP Request Resource</strong></font> - is identified by the [[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor|URL]] path
```merge-table
{
  "rows": [
    [
      {
        "content": "HTTP Request Template",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "HTTP Request Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<strong><font style=\"color: rgb(128,0,0);\">Request-Method</font> <font style=\"color: rgb(255,102,0);\">/Request-Resource</font></strong> <font style=\"color: rgb(128,128,0);\">HTTP-Version</font>\n<font style=\"color: rgb(0,128,0);\">HTTP Headers</font>\n\n<font style=\"color: rgb(255,0,0);\">HTTP Request Body (depends on Request-Method)</font>",
      "<strong><font style=\"color: rgb(128,0,0);\">POST</font> <font style=\"color: rgb(255,102,0);\">/test/resource</font></strong> <font style=\"color: rgb(128,128,0);\">HTTP/1.1</font>Host: foo.example.com\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 27<font style=\"color: rgb(255,0,0);\">field1=value1&field2=value2</font>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# HTTP Request Method Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)",
        "bg": "#F4F5F7"
      },
      "requests a representation of the specified resource. Requests using <code>GET</code> should only retrieve data."
    ],
    [
      {
        "content": "[HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)",
        "bg": "#F4F5F7"
      },
      "asks for a response identical to that of a <code>GET</code> request, but without the response body."
    ],
    [
      {
        "content": "[POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)",
        "bg": "#F4F5F7"
      },
      "used to submit an entity to the specified resource, often causing a change in state or side effects on the server"
    ],
    [
      {
        "content": "[PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)",
        "bg": "#F4F5F7"
      },
      "replaces all current representations of the target resource with the request payload"
    ],
    [
      {
        "content": "[DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)",
        "bg": "#F4F5F7"
      },
      "deletes the specified resource"
    ],
    [
      {
        "content": "[CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)",
        "bg": "#F4F5F7"
      },
      "establishes a tunnel to the server identified by the target resource"
    ],
    [
      {
        "content": "[OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)",
        "bg": "#F4F5F7"
      },
      "used to describe the communication options for the target resource"
    ],
    [
      {
        "content": "[TRACE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE)",
        "bg": "#F4F5F7"
      },
      "performs a message loop-back test along the path to the target resource"
    ],
    [
      {
        "content": "[PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)",
        "bg": "#F4F5F7"
      },
      "used to apply partial modifications to a resource"
    ]
  ]
}
```
