---
title: "TigerGraph - Ways to Interact with TigerGraph"
created: 2021-07-12T18:57:36.943-05:00
modified: 2021-07-12T18:57:54.647-05:00
parent: "[[TigerGraph]]"
children: []
---
Within the TigerGraph system, a message-passing design is used to coordinate the activities of the components. RESTPP, an enhanced RESTful server, is central to the task management. Users can choose how they wish to interact with the system:

```merge-table
{
  "rows": [
    [
      "![[TigerGraph - Ways to Interact with TigerGraph/tigergraph-platform.png|301]]",
      "- <strong>GraphStudio</strong> - our graphical user interface, which provides most of the basic GSQL functionality, with a graphical and intuitive interface\n- <strong>GSQL client</strong> - the TigerGraph instance can support multiple GSQL clients, on remote nodes\n- <strong>REST API</strong> - enterprise applications which need to run the same queries many times can maximize their efficiency by communicating directly with RESTPP\n- <strong>gAdmin</strong> - is used for system administration"
    ]
  ]
}
```
