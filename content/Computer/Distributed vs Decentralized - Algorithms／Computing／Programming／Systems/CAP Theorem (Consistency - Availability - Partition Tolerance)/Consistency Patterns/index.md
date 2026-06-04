---
title: "Consistency Patterns"
created: 2025-04-26T22:13:26.161-05:00
modified: 2025-04-27T09:36:40.696-05:00
parent: "[[CAP Theorem (Consistency - Availability - Partition Tolerance)]]"
children: []
---
###### Consistency Patterns
````excerpt
- a property of CAP theorem
- with multiple copies of the same data, we are faced with options on how to synchronize them so clients have a consistent view of the data. Recall the definition of consistency from the CAP theorem - Every read receives the most recent write or an error.
````
^excerpt

# Consistency Patterns

```merge-table
{
  "rows": [
    [
      {
        "content": "Weak consistency",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- After a write, reads may or may not see it\n- A best effort approach is taken.",
      "- This approach is seen in systems such as memcached\n- works well in real time use cases such as VoIP, video chat, and realtime multiplayer games"
    ],
    [
      {
        "content": "Eventual consistency",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- After a write, reads will eventually see it (typically within milliseconds)\n- Data is replicated asynchronously",
      "- This approach is seen in systems such as DNS and email\n- works well in highly available systems"
    ],
    [
      {
        "content": "Strong consistency",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- After a write, reads will see it\n- Data is replicated synchronously",
      "- This approach is seen in file systems and RDBMSes\n- works well in systems that need transactions"
    ]
  ]
}
```
