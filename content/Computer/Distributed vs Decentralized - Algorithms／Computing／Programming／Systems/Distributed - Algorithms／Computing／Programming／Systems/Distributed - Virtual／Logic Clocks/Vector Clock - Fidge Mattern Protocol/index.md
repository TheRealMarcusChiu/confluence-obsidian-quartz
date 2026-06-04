---
title: "Vector Clock - Fidge Mattern Protocol"
created: 2019-06-18T16:20:58.688-05:00
modified: 2019-07-01T12:07:39.697-05:00
parent: "[[Distributed - Virtual／Logic Clocks]]"
children: []
---
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

V<sub>1</sub> \<l V<sub>2</sub> if there exist an entry i (for j = i V<sub>1</sub>\[j\] , V<sub>2</sub>\[j\]) and (V<sub>1</sub>\[i\] \< V<sub>2</sub>\[i\])

<strong>Example Diagram</strong>
```
   C1=[0 0 0]       [1 0 0]  [2 0 0]         [3 0 0]
P1 ----------------a--------b---------------c--------------->
                             \m1
                              \
   C2=[0 0 0]       [0 1 0]    \ [2 2 0]        [2 3 0]
P2 ----------------e------------f--------------g------------>
                                                \m2
                                                 \
   C3=[0 0 0]       [0 0 1]    [0 0 2]            \ [2 3 3]
P3 ----------------h----------i--------------------j-------->
```

example clock values:
- C(a) = \[1 0 0\]
- C(e) = \[0 1 0\]
- C(h) = \[0 0 1\]

<strong>Clock Algorithm - Vector (Algorithm that Adheres to Vector Clock Property) - assumes instantaneous events</strong>
- on executing an internal event
  C<sub>i</sub>\[i\] := C<sub>i</sub>\[i\] + 1
- on sending a message m
  C<sub>i</sub>\[i\] := C<sub>i</sub>\[i\] + 1
  piggyback C<sub>i</sub> on m
- on receiving a message m carrying timestamp C<sub>m</sub>
  C<sub>i</sub>\[i\] := C<sub>i</sub>\[i\] + 1
  for each t do: C<sub>i</sub>\[t\] := max(C<sub>i</sub>\[t\],C<sub>m</sub>\[t\])

<strong>What Pi Knows At Each Event Executed at Own Process</strong>
- C<sub>i</sub>\[j\] = x
- as per P<sub>i</sub>, P<sub>j</sub> has executed at least x events so far

<em>v(x) means the vector after executing event x (e.g. \[1 0 0\])</em>

if same process i = j
- e → f ⇔ v(e)\[i\] \< v(f)\[i\]

if different process i ≠ j
- <strong>if</strong> v(e)\[i\] ≤ v(f)\[i\] <strong>then</strong> e → f
- <strong>if</strong> v(f)\[j\] ≤ v(e)\[j\] <strong>then</strong> f → e

the <strong>Vector Clock - Fidge Mattern Protocol </strong>has a problem with message broadcasting as described here
