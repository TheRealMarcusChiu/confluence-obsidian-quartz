---
title: "Link-State Protocols"
created: 2019-03-16T20:54:05.572-05:00
modified: 2023-11-16T17:49:41.885-06:00
parent: "[[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)]]"
children:
  - "[[Intermediate System to Intermediate System (IS-IS - ISIS)]]"
  - "[[Open Shortest Path First (OSPF)]]"
---
###### Link-State Protocols
````excerpt
- in <strong>link state</strong> [[Routing Protocols|routing protocols]], each router describes itself and its interfaces to its directly connected objects; these objects can be either neighboring adjacent routers, or they can be directly attached networks. This information is passed unchanged from one router to another so that in the end, every router knows about every other router, its interfaces, and what exactly they connect to. In essence, in link state routing protocols, each router knows the entire network topology down to every single router and every single interconnection also called the state of a link, hence the name link-state routing protocol
````
^excerpt

# Link-State Protocol - Relies on 2 Mechanisms

> [!expand-ui]- reliable flooding - reliably disseminate the link-state information between every node
> reliable flooding is the process of making sure that all the nodes participating in the routing protocol get a copy of the link-state information from all the other nodes
>
> each node creates a <strong>Link-State Packet (LSP)</strong>, which contains:
> - ID that uniquely identifies the node that created the LSP
> - list of directly connected neighbors of that node, with the cost of the link to each one
> - sequence number
> - time to live for this packet
>
> just as in RIP, each node generates LSPs under two circumstances:
> - the expiry of a <em>periodic</em> timer
> - a change in topology that <em>triggered</em> a node to generate a new LSP
>
> each time a node generates a new LSP, it increments the sequence number by 1
>
> ![[Link-State Protocols/1.png]]
>
> consider a node X that receives a copy of an LSP that originated at some other node Y. Note that Y may be any other router in the same routing domain as X. X checks to see if it has already stored a copy of an LSP from Y. If not, it stores the LSP. If it already has a copy, it compares the sequence numbers; if the new LSP has a larger sequence number, it is assumed to be the more recent, and that LSP is stored, replacing the old one. A smaller (or equal) sequence number would imply an LSP older (or not newer) than the one stored, so it would be discarded and no further action would be needed. If the received LSP was the newer one, X then sends a copy of that LSP to all of its neighbors except the neighbor from which the LSP was just received. The fact that the LSP is not sent back to the node from which it was received helps to bring an end to the flooding of an LSP. Since X passes the LSP on to all its neighbors, who then turn around and do the same thing, the most recent copy of the LSP eventually reaches all nodes

> [!expand-ui]- route calculation - given the link-state information, each node calculates the shortest path to every other node
> - once the node has a copy of LSP from every other node, compute the topology map of the network
> - uses <strong>Dijkstra's Shortest Path Algorithm</strong> also known as <strong>Shortest Path Algorithm</strong> also known as <strong>Forward Search Algorithm</strong>
> - below shows the process of the algorithm
>
> ![[Link-State Protocols/2.png|585x250]]
>
> ![[Link-State Protocols/3.png|645x400]]
>
> (destination-node, link-cost, next-hop-node)
# Link-State Protocols

```merge-table
{
  "rows": [
    [
      {
        "content": "Link-State Protocols",
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
        "content": "[Open Shortest Path First (OSPF)](http://doc.marcuschiu.com/log-page/5b0db0db154cee0e19497307)",
        "bg": "#F4F5F7"
      },
      "![[Open Shortest Path First (OSPF)#^excerpt]]"
    ],
    [
      {
        "content": "[[Intermediate System to Intermediate System (IS-IS - ISIS)]]",
        "bg": "#F4F5F7"
      },
      "![[Intermediate System to Intermediate System (IS-IS - ISIS)#^excerpt]]"
    ]
  ]
}
```
