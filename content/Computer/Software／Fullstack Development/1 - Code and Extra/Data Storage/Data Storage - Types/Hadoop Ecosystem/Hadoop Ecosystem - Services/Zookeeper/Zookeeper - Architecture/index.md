---
title: "Zookeeper - Architecture"
created: 2020-05-26T16:40:25.543-05:00
modified: 2024-08-28T12:35:34.270-05:00
parent: "[[Zookeeper]]"
children: []
---
# Zookeeper Cluster/Ensemble
![[Zookeeper - Architecture/zookeeper-cluster-ensemble.png|500]]

```merge-table
{
  "rows": [
    [
      {
        "content": "leader",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- writes are quorum based, handled by leader and committed to followers\n- new leader elected if existing leader fails"
    ],
    [
      {
        "content": "follower",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- forwards writes to leader\n- leader syncs state with followers\n- maintains quorum through voting"
    ],
    [
      {
        "content": "observer",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- non-voting members\n- follower without the write overhead of actual follower (voting)"
    ]
  ]
}
```
# Zookeeper Data Model

```merge-table
{
  "rows": [
    [
      "![[Zookeeper - Architecture/zookeeper-data-model.png|200]]\n\n[[zookeeper-data-model.drawio]]",
      "- znode\n\t- container for data & other nodes\n\t- stores stats & user data (1MB max)\n- znode types\n\t- persistent - database configuration\n\t- ephemeral - session nodes\n- znodes can be sequential"
    ]
  ]
}
```
# Zookeeper Watch

clients of zookeeper can watch a znode, and receive push notifications of any changes
