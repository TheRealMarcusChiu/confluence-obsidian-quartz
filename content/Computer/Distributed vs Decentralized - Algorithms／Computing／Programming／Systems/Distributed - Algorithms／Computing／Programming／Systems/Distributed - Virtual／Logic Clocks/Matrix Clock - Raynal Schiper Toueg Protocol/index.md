---
title: "Matrix Clock - Raynal Schiper Toueg Protocol"
created: 2019-06-18T16:19:28.916-05:00
modified: 2019-07-01T12:17:52.955-05:00
parent: "[[Distributed - Virtual／Logic Clocks]]"
children: []
---
M<sub>i</sub> - matrix clock for process P<sub>i</sub>

M<sub>i</sub>\[j,k\] = x (as per P<sub>i</sub>, P<sub>j</sub> has sent to P<sub>k</sub> at least x messages)
```
      [0 0 0]     [0 0 1]   [0 1 1] 
      [0 0 0]     [0 0 0]   [0 0 0] 
      [0 0 0]     [0 0 0]   [0 0 0] 
TOM   -----------.---------.---------------------------------------------------------------
                 |m1       |m2 
                 |         | 
      [0 0 0]    |         |  [0 1 1]     [0 1 1] 
      [0 0 0]    |         |  [0 0 0]     [0 0 1] 
      [0 0 0]    |          \ [0 0 0]     [0 0 0] 
ANNA  -----------|-----------.-----------.-------------------------------------------------
                 |                        \m3 
      [0 0 0]    \_________________________\_________________   [0 0 1]     [0 1 1]
      [0 0 0]                               \                \  [0 0 0]     [0 0 1]
      [0 0 0]                                \                \ [0 0 0]     [0 0 0]
HARRY ----------------------------------------.----------------.---------------------------
                                               BUFFER m3        DELIVER m1  DELIVER m3
```

DELIVER m if M<sub>i</sub>\[t,i\] ≥ M<sub>m</sub>\[t,i\]

<strong>Clock Algorithm - Matrix (Algorithm that Adheres to Matrix Clock Property & Causal Message Ordering) - assumes instantaneous events</strong>
- on P<sub>i</sub> sending message m to P<sub>j</sub>
  piggyback M<sub>i</sub> on m
  M<sub>i</sub>\[i,j\] + 1
- on P<sub>i</sub> receiving message m sent by P<sub>j</sub> carrying M<sub>m</sub>
  buffer until M<sub>i</sub>\[t,i\] ≥ M<sub>m</sub>\[t,i\] for each possible value t, then deliver message m to application
- on P<sub>i</sub> delivery of m to its application (m sent by P<sub>j</sub>)
  ∀x,y: M<sub>i</sub>\[x, y\] ≔ max(M<sub>i</sub>\[x,y\], M<sub>m</sub>\[x,y\])
  M<sub>i</sub>\[j,i\] + 1
