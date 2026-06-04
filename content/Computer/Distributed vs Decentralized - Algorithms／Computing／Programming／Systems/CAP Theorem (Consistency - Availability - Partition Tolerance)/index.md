---
title: "CAP Theorem (Consistency - Availability - Partition Tolerance)"
created: 2025-04-25T17:59:32.723-05:00
modified: 2026-01-15T16:27:04.296-06:00
parent: "[[Distributed vs Decentralized - Algorithms／Computing／Programming／Systems]]"
children:
  - "[[Consistency Patterns]]"
---
###### CAP Theorem (Consistency - Availability - Partition Tolerance)
````excerpt
- states that a distributed system cannot simultaneously guarantee all three properties:
	- Consistency
	- Availability
	- Partition Tolerance
- this means that when designing distributed systems, developers must make trade-offs, choosing which two properties are most important for their application
````
^excerpt

# CAP - Introduction![](https://www.youtube.com/watch?v=BHqjEjzAicA)![](https://www.youtube.com/watch?v=VdrEq0cODu4)
# CAP Properties & Trade-Offs

A [[Distributed - Algorithms／Computing／Programming／Systems|distributed system]] can guarantee at most two of the following three properties at the same time:

```merge-table
{
  "rows": [
    [
      {
        "content": "Consistency",
        "bg": "#F4F5F7"
      },
      "- all nodes in the system see the same data at the same time\n- this means all reads receive the most recent write or an error\n- e.g. After writing <code><font style=\"color: rgb(122,134,154);\">x = 5</font></code>, any read from any node must return <code><font style=\"color: rgb(122,134,154);\">5</font></code>"
    ],
    [
      {
        "content": "Availability",
        "bg": "#F4F5F7"
      },
      "- every request receives a (non-error) response, even if the data is not the most recent\n- this ensures that the system is always operational and can respond to requests, even if some nodes are unavailable"
    ],
    [
      {
        "content": "Partition Tolerance",
        "bg": "#F4F5F7"
      },
      "- the system continues to operate despite network partitions or communication failures between nodes\n- this means the system can handle situations where nodes are disconnected from each other due to network issues"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```

Network partitions are unavoidable in distributed systems. So in practice, when a partition happens, you must choose between: Consistency or Availability

```merge-table
{
  "rows": [
    [
      {
        "content": "CP (Consistency and Partition Tolerance)",
        "bg": "#F4F5F7"
      },
      "- Sacrifices availability\n- The system prioritizes keeping data consistent even during network partitions, but may become unavailable or have limited availability if nodes are disconnected"
    ],
    [
      {
        "content": "AP (Availability and Partition Tolerance)",
        "bg": "#F4F5F7"
      },
      "- Sacrifices consistency\n- The system prioritizes being available and continuing to operate during network partitions, but may not guarantee data consistency across all nodes"
    ],
    [
      {
        "content": "CA (Consistency and Availability)",
        "bg": "#F4F5F7"
      },
      "- <font style=\"color: rgb(255,0,0);\">NOT POSSIBLE</font> - Network partitions are unavoidable in distributed systems\n- In a distributed setting, this combination is theoretically impossible because network partitions are inevitable"
    ]
  ]
}
```
# Consistency Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Strong Consistency",
        "bg": "#F4F5F7"
      },
      "- the strongest type of consistency (i.e. same as choosing C in CAP)\n- all reads reflect most recent write"
    ],
    [
      {
        "content": "Causal Consistency",
        "bg": "#F4F5F7"
      },
      "- related events appear in order (comments on a comment)"
    ],
    [
      {
        "content": "Read Your Own Writes Consistency",
        "bg": "#F4F5F7"
      },
      "- user sees their own updates"
    ],
    [
      {
        "content": "Eventual Consistency",
        "bg": "#F4F5F7"
      },
      "- the weakest type of consistency\n- updates will propagate eventually"
    ]
  ]
}
```
