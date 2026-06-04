---
title: "Vector Clock - Birman Schiper Stephenson Protocol"
created: 2019-06-18T16:20:23.961-05:00
modified: 2019-07-01T12:10:19.435-05:00
parent: "[[Distributed - Virtual／Logic Clocks]]"
children: []
---
this protocol is a modification of [[Vector Clock - Fidge Mattern Protocol]] that maintains <strong><em>causal message ordering</em></strong> in [[Distributed - Virtual／Logic Clocks|broadcasting messages]]
## <strong>Clock Property for Vector Clock</strong>
- for all events e and f: (e → f) <font style="color: rgb(128,0,128);">⇔</font> (C(e) \< C(f))
- i.e. both of the following would hold:
	- <strong>if</strong> event e happened-before f <strong>then</strong> the scalar clock value of e must be strictly smaller than f
	- <strong>if</strong> the scalar clock value of e must be strictly smaller than f <strong>then</strong> event e happened-before f

<strong>Vector - What is it?</strong>
- vector size = number of processes (i.e. one entry per process)
- example vectors:
	- \[2 1 0\]
	- \[3 0 5\]

<strong>Vector - Defining Smaller</strong>
- (V<sub>1</sub> \< V<sub>2</sub>) is true iff both:
	- ∀i: V<sub>1</sub>\[i\] ≤ V<sub>2</sub>\[i\]
	- ∃j: V<sub>1</sub>\[j\] \< V<sub>2</sub>\[j\]

## <strong>Birman Schiper Stephenson Protocol</strong>

V<sub>i</sub>\[j\] = x means: as per P<sub>i</sub>, P<sub>j</sub> has either:
- executed at least x events so far
- broadcast at least x events so far

<strong>Example Diagram</strong>
```
      [0 0 0]     [1 0 0]        [1 1 0] 
TOM   -----------.--------------.------------------------------------------
                 |\____________/__________
                 |            /           \
      [0 0 0]    |[1 0 0]    /[1 1 0]      \
ANNA  -----------.----------.---------------\------------------------------
                             \m2=[1 0 0]     \m1=[0 0 0]
                              \               \
      [0 0 0]                  \ [0 0 0]       \ [1 0 0]       [1 1 0]
HARRY --------------------------.---------------.-------------.------------
                                m2 buffered      m1 delivered  m2 delivered
```
- <strong>if</strong> V<sub>i</sub> ≱ V<sub>m</sub> <strong>then</strong> buffer message m
- <strong>if</strong> V<sub>i</sub> ≥ V<sub>m</sub> <strong>then</strong> deliver message m to application

<strong>Clock Algorithm - Vector (Algorithm that Adheres to Vector Clock Property & Causal Message Ordering) - assumes instantaneous events</strong>
- on broadcasting m
  piggyback V<sub>i</sub> on m
  V<sub>i</sub>\[i\] ≔ V<sub>i</sub>\[i\] + 1
- on arrival of m sent by P<sub>j</sub> carrying V<sub>m</sub>
	- if V<sub>m</sub> = V<sub>i</sub> then
		- V<sub>i</sub>\[j\] + 1
		- send m to application
	- if V<sub>m</sub> \> V<sub>i</sub> then
		- buffer m until V<sub>m</sub>≤ V<sub>i</sub> then
			- V<sub>i</sub>\[j\] + 1e
			- send m to application

<strong>Properties of Birman Schiper Stephenson BSS Protocol</strong>
- has the following Correctness Properties:
	- safety property - messages are delivered in order
	- liveness/progress property - messages are eventually delivered
