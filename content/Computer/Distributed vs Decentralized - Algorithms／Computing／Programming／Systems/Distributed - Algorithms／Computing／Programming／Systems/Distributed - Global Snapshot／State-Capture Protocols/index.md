---
title: "Distributed - Global Snapshot／State-Capture Protocols"
created: 2019-06-18T16:28:01.500-05:00
modified: 2019-12-15T14:02:35.454-06:00
parent: "[[Distributed - Algorithms／Computing／Programming／Systems]]"
children:
  - "[[Distributed - Global Snapshot - (2-Phase／Freezing-Based) Protocol]]"
  - "[[Distributed - Global Snapshot - Chandy & Lamport Protocol]]"
---
### Sections
- [[Distributed - Global Snapshot／State-Capture Protocols]]
- [[Distributed - Global Snapshot／State-Capture Protocols|Extend Happens-Before (→)  Relation]]
- [[Distributed - Global Snapshot／State-Capture Protocols|Global Snapshot/State-Capture Properties]]
- [[Distributed - Global Snapshot／State-Capture Protocols]]
	- [Global Snapshot - (2-Phase/Freezing-Based) Protocol](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2654721)
	- [Global Snapshot - Chandy & Lamport Protocol](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2654724)

# <strong>Example Banking System</strong>
```
      $2000 $1500
P1 ----u---.-------------v----
            \    
             \   
              \m=$500
               \
          $3000 \ $3500
P2 ----x---------.-------y----
```

local states:
- u
- v
- x
- y

global states:
- \<u,x\>
- \<v,y\>
- \<v,x\>
- \<u,y\>

system state = process state + network/channel state

```merge-table
{
  "rows": [
    [
      {
        "content": "Global State",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Total",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Valid or Invalid",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<u,x>",
      "$5000",
      "<font style=\"color: rgb(51,153,102);\">valid</font>"
    ],
    [
      "<u,y>",
      "$5500",
      "<font style=\"color: rgb(255,0,0);\">invalid </font>- as it is saying the receive event happened without the corresponding send event"
    ],
    [
      "<v,x>",
      "$4500",
      "<font style=\"color: rgb(51,153,102);\">valid</font> - after send event and before receive event"
    ],
    [
      "<v,y>",
      "$5000",
      "<font style=\"color: rgb(51,153,102);\">valid</font>"
    ]
  ]
}
```
## <strong>Extend Happens-Before (→)  Relation</strong>
- only compares between:
	- state and state
	- event and event
- does not compare between: event and state

- let s and t be local states of processes Pi and Pj respectively
	- we say that s → t <strong>if</strong> there exists events e and f such that all of the following holds:
		- Pi executes e after reaching s
		- Pj executes f before reaching t
		- (e = f) or (e → f)
	- we say s and t are concurrent (syntactically represented as "s||t") <strong>if </strong>both:
		- s ⥇ t
		- t ⥇ s

## <strong>Global Snapshot/State-Capture Properties</strong>
- G is a set of local states (one from each process)
- G\[i\] is the local state of process Pi
- there can be multiple Gs in a given domain

###### Consistent Global State/Snapshot Protocol
- returns a global state/snapshot that is guaranteed to be consistent

###### Strongly-Consistent Snapshot Protocol
- returns a global state that is guaranteed to be STRONGLY consistent
- strongly consistent - no intransit messages

# <strong>Algorithms for Consistent Global Snapshot/State-Capture</strong>
- [[Distributed - Global Snapshot - (2-Phase／Freezing-Based) Protocol|Distributed - Global Snapshot - (2-Phase/Freezing-Based) Protocol]]
- [[Distributed - Global Snapshot - Chandy & Lamport Protocol|Global Snapshot - Chandy & Lamport Protocol]]
