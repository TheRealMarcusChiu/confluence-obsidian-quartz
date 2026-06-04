---
title: "Distributed - System Failure Types"
created: 2019-06-13T22:46:21.754-05:00
modified: 2019-12-15T14:02:56.618-06:00
parent: "[[Distributed - Algorithms／Computing／Programming／Systems]]"
children: []
---
### Distributed System Failure Types

```merge-table
{
  "rows": [
    [
      {
        "content": "node failure",
        "colspan": 2
      },
      null,
      "network failure"
    ],
    [
      "fail stop",
      "byzantine failure",
      {
        "content": "- worry about network partitions",
        "rowspan": 2
      }
    ],
    [
      "- checkpoint & restart\n- replicate & failover",
      "- attempt to transform into fail stop"
    ]
  ]
}
```
