---
title: "Distributed - Virtual／Logic Clocks"
created: 2019-06-18T11:25:41.997-05:00
modified: 2019-12-15T14:03:03.820-06:00
parent: "[[Distributed - Algorithms／Computing／Programming／Systems]]"
children:
  - "[[Matrix Clock - Raynal Schiper Toueg Protocol]]"
  - "[[Scalar Clock - Lamport Protocol]]"
  - "[[Vector Clock - Birman Schiper Stephenson Protocol]]"
  - "[[Vector Clock - Fidge Mattern Protocol]]"
---
### Sections
- [[Distributed - Virtual／Logic Clocks|binary relations]]
- [[Distributed - Virtual／Logic Clocks|virtual/logic clock types]]
- [[Distributed - Virtual／Logic Clocks|broadcasting messages]]

# <strong>Binary Relations</strong>

<strong>Happened-Before Relation (→)</strong>
- e → f : event e is said to have happened-before event f
- e → f is true if one of the following is true:
	- both e and f belong to the same process and e was executed before f
	- e is the send event of a message and f is the receive event of the same message
	- there exists an event g such that e → g and g → f

<strong>Concurrent Relation (‖)</strong>
- x‖y = !(x → y) and !(y → x)
- x‖y = !\[(x → y) or (y → x)\]

<strong>Example Use</strong>
```
P1 -----a------b------c------>
                \m1
P2 -----d--e-----f----g------>
                       \m2
P3 -----h-----i---------j---->
```

the following are true:
- a → b
- b → f
- f → j
- a || d
- c || e

# <strong>Virtual/Logic Clock Types</strong>

<strong>Scalar Clock - 0 dimension</strong>
- [[Scalar Clock - Lamport Protocol]]

<strong>Vector Clock</strong><strong> - 1 dimension</strong>
- [[Vector Clock - Fidge Mattern Protocol]] - does not support broadcast in <strong>causal message ordering</strong>
- [[Vector Clock - Birman Schiper Stephenson Protocol]] - supports broadcast not multicast

<strong>Matrix Clock - 2 dimension</strong>
- [[Matrix Clock - Raynal Schiper Toueg Protocol]] - supports multicast

# <strong>Broadcasting Messages</strong>
```
TOM   -----------.----------.---------------------
                 |\        /
                 | \      /
ANNA  -----------.--\----.------------------------
                     \____\_____
                           \    \
HARRY ----------------------.----.----------------
```

<strong>Problem</strong> - HARRY received message from ANNA before TOM. We want to preserve <strong>causal message ordering</strong> here though

<strong>causal message ordering</strong> - insures that the same causal relationship for "message send" events correspond with "message receive" events
