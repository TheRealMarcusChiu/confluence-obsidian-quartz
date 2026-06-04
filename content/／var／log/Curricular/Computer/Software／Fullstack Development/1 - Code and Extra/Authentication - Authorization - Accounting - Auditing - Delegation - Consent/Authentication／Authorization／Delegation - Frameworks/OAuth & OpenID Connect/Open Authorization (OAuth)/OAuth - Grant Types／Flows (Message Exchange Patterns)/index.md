---
title: "OAuth - Grant Types／Flows (Message Exchange Patterns)"
created: 2020-01-09T13:07:06.671-06:00
modified: 2026-01-09T17:07:37.749-06:00
parent: "[[Open Authorization (OAuth)]]"
children:
  - "[[OAuth - Authorization Code Flow]]"
  - "[[OAuth - Client Credentials Grant (Machine to Machine M2M  Authorization)]]"
  - "[[OAuth - Implicit Code Flow]]"
---
````excerpt
Grant Types or Flows or Message Exchange Patterns

```merge-table
{
  "rows": [
    [
      {
        "content": "Flow",
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
        "content": "[[OAuth - Implicit Code Flow|Authorization Token Flow (Implicit Flow)]]",
        "bg": "#F4F5F7"
      },
      "- front-channel only (less secure)\n- required for apps that have no “back end” logic on the web server, like a pure Javascript app\n- flow in which all tokens (e.g. [[Access Token]], [[Refresh Token]]) are returned from the Authorization Endpoint, and neither the Token Endpoint nor an Authorization Code are used"
    ],
    [
      {
        "content": "[[OAuth - Authorization Code Flow|Authorization Code Flow]] (WebServer Flow)",
        "bg": "#F4F5F7"
      },
      "- front-channel and back-channel (more secure)\n- designed for apps that have a back end that can communicate directly with the Authorization Server (away from the Client browser)\n- flow in which an Authorization Code is returned from the Authorization Endpoint and all tokens (e.g. [[Access Token]], [[Refresh Token]]) is returned from the Token Endpoint"
    ],
    [
      {
        "content": "Resource Owner Password Grant",
        "bg": "#F4F5F7"
      },
      "- back-channel only\n- does not have a login UI and is useful when access to a web browser is not possible"
    ],
    [
      {
        "content": "[[OAuth - Client Credentials Grant (Machine to Machine M2M  Authorization)|Client Credentials Grant]]",
        "bg": "#F4F5F7"
      },
      "- backchannel only\n- useful for machine to machine (M2M) authorization"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt
