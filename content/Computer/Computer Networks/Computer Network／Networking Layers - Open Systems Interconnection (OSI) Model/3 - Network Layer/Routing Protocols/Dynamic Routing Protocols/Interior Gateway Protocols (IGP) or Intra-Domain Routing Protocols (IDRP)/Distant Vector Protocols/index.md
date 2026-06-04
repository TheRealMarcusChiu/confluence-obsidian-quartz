---
title: "Distant Vector Protocols"
created: 2019-03-16T20:49:50.687-05:00
modified: 2023-11-16T17:45:16.076-06:00
parent: "[[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)]]"
children:
  - "[[Distant Vector - Count to Infinity Problem]]"
  - "[[Interior Gateway Routing Protocol (IGRP)]]"
  - "[[Routing Information Protocol (RIP)]]"
  - "[[Routing Information Protocol 2 (RIP2)]]"
---
###### Distant Vector Protocols
````excerpt
- In <strong>distance vector protocols</strong>, each router sends its neighbors a list of all known networks along with its own distance to each one of these networks. Because in software engineering, a list (or better said, an array) is also called a vector, the list of networks and distances is sometimes called the vector of networks and distances, hence the name distance vector routing protocol
````
^excerpt

# Distant-Vector - Protocol Variants

```merge-table
{
  "rows": [
    [
      {
        "content": "Distant-Vector Protocols",
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
        "content": "[[Routing Information Protocol (RIP)]]",
        "bg": "#F4F5F7"
      },
      "![[Routing Information Protocol (RIP)#^excerpt]]"
    ],
    [
      {
        "content": "[[Routing Information Protocol 2 (RIP2)]]",
        "bg": "#F4F5F7"
      },
      "![[Routing Information Protocol 2 (RIP2)#^excerpt]]"
    ],
    [
      {
        "content": "[[Interior Gateway Routing Protocol (IGRP)]]",
        "bg": "#F4F5F7"
      },
      "![[Interior Gateway Routing Protocol (IGRP)#^excerpt]]"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;width: 100.0%;"
}
```
# Distant-Vector - How it Works

To understand what happens when a node detects a link failure, consider what happens when F detects that its link to G has failed:
1. first, F sets its new distance to G to infinity and passes that information along to A
2. since A knows that its 2-hop path to G is through F, A would also set its distance to G to infinity
3. however, with the next update from C, A would learn that C has a 2-hop path to G. Thus, A would know that it could reach G in 3 hops through C, which is less than infinity, and so A would update its table accordingly.
4. when A advertises this to F, node F would learn that it can reach G at a cost of 4 through A, which is less than infinity, and the system would again become stable

![[Distant Vector Protocols/1.png|230]]![[Distant Vector Protocols/2.png|227]]

![[Distant Vector Protocols/4.png|400x438]]
![[Distant Vector Protocols/3.png|390]]
