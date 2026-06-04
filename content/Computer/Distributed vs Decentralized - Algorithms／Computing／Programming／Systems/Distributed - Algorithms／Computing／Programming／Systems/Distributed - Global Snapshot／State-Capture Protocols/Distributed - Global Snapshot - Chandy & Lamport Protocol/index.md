---
title: "Distributed - Global Snapshot - Chandy & Lamport Protocol"
created: 2019-06-18T19:45:09.889-05:00
modified: 2019-12-15T14:03:39.629-06:00
parent: "[[Distributed - Global Snapshot／State-Capture Protocols]]"
children: []
---
this algorithm:
- calculates the local and channel state between multiple communicating processes
- assumes FIFO channels between communicating processes

# <strong>Pseudocode</strong>
- on recording local state, a process sends a MARKER MESSAGE to all outgoing neighbors
- on sending MARKER MESSAGE to all outgoing neighbors, start monitoring all incoming channels
- on receiving MARKER MESSAGE, record local state if not done so already
- on receiving all MARKER MESSAGES from incoming channels, stop monitoring incoming channels

### Example
```
Nodes and Channels

P1 -------- P2 -------- P3
```
```
Example Chandy & Lamport Execution

P1 -----.------RS.==========.------------.------------>
         \am-1    \mm      /            /
          \        \      /            /  POST SNAPSHOT
           \        \    /mm          /am-2
P2 ---------.--------.RS.======.===.-.---------------->
                         \mm  /   /
    PRE SNAPSHOT   _______\__/   /
                  /am-3    \    /mm
P3 --------------.----------.RS.---------------------->

am - app message
mm - marker message
RS - record local state
== - monitoring channels
```

in the example execution depicted above, am-3 is considered in transit
# <strong>Implementation With Vector Clock</strong>
```
   [0 0 0] [1 0 0]
p1 -------.-----a-------------------------
           \
            \
             \
   [0 0 0]    \ [1 1 0]     [1 2 0]
P2 ------------.---b-------.--------------
                            \
                             \
                              \
   [0 0 0]    [0 0 1]          \ [1 2 2]
P3 ----------.-----c------------.-----d----
```

G = \[a b d\]
V(a) = \[1 0 0\]
V(b) = \[1 1 0\]
V(d) = \[1 2 2\] 
therefore V(d) is the max

G = \[a b c\]
V(a) = \[1 0 0\]
V(b) = \[1 1 0\]
V(c) = \[0 0 1\] 
therefore there is no max
# <strong>Determining Whether Global State (a Set of Local Vector States) is Consistent</strong>
<strong>G = \[G\[1\], G\[2\], ..., G\[n\]\]
G\[1\] = V<sub>1</sub></strong><strong>G\[2\] = V<sub>2</sub> 
... 
G\[n\] = V<sub>n</sub></strong>

V<sub>max</sub> = max(V<sub>1</sub>, V<sub>2</sub>, ..., V<sub>n</sub>)
<strong>if</strong> (∀i V<sub>max</sub>\[i\] = V<sub>i</sub>\[i\]) <strong>then</strong> (G is consistent)

<strong>My Attempt to Reconcile</strong>

V<sub>max</sub> = max(V<sub>1</sub>, V<sub>2</sub>, ..., V<sub>n</sub>)
<strong>if</strong> (∀i V<sub>max</sub>\[i\] ≤ V<sub>i</sub>\[i\]) <strong>then</strong> (G is consistent)
# <strong>Prove: All Recorded Local States Are Pairwise-Consistent</strong>

proof by contradiction
```
Pi ---------record-local-state-----------------------------------
                       \
                        \marker message
                         \
Pj -----------------------.---------------record-local-state----------
                           \_____________/        |
                                  |               |
                      some time passed    not possible with the 2 rules above
```

when P<sub>i</sub> records local-state it immediately sends marker message to neighboring processes.
when marker message is received by P<sub>j</sub>, by rule 2, it should either:
- record its local state if it hasn't
- do nothing because it already has recorded its local state

therefore we have reached a contradiction that P<sub>j</sub> cannot be able to record its local state sometime after it received a marker message
# <strong>Complexity - Assuming</strong><strong> Bi-Directional Links</strong>

given:
- n = \# of nodes
- e = \# of bi-directional edges
- d = diameter of graph

complexity
- message complexity - O(e) - maximum O(n(n-1))
- time complexity - O(d) more accurately O(d+1) - minimum O(1) & maximum O(n)
