---
title: "Proxy (Forward／Reverse Proxy Chains)"
created: 2019-03-16T22:05:31.175-05:00
modified: 2025-06-21T15:13:09.690-05:00
parent: "[[7 - Application Layer]]"
children:
  - "[[Forward Proxy (Proxy)]]"
  - "[[Proxy Chains]]"
  - "[[Reverse Proxy]]"
---
###### Proxy
````excerpt
- operates at the [[7 - Application Layer|application layer]]
- proxy server is an intermediary for requests from clients seeking resources from other servers
````
^excerpt

# Proxy Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Forward Proxy (Proxy)]]",
        "bg": "#F4F5F7"
      },
      "if you want to protect clients in your internal network, put them behind a <strong>forward proxy</strong>"
    ],
    [
      {
        "content": "[[Reverse Proxy]]",
        "bg": "#F4F5F7"
      },
      "if your intention is to protect servers, put them behind a <strong>reverse proxy</strong>"
    ],
    [
      {
        "content": "[[Proxy Chains]]",
        "bg": "#F4F5F7"
      },
      "are chains of forward proxies"
    ]
  ]
}
```
# Diagrams

```merge-table
{
  "rows": [
    [
      {
        "content": "Forward Proxy & Reverse Proxy",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Proxy Chain",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "![[Proxy (Forward／Reverse Proxy Chains)/forward-proxy-reverse-proxy.png|500]]",
      "![[Proxy (Forward／Reverse Proxy Chains)/proxy-chain.png|500]]"
    ]
  ]
}
```
