---
title: "Scalar Clock - Lamport Protocol"
created: 2019-06-18T16:21:44.238-05:00
modified: 2019-06-25T20:55:42.292-05:00
parent: "[[Distributed - Virtual／Logic Clocks]]"
children: []
---
## <strong>Clock Property for Scalar Clock</strong>
- for all events e and f: (e → f) <font style="color: rgb(128,0,128);">⇒</font> (C(e) \< C(f))
- i.e. <strong>if</strong> event e happened-before f <strong>then</strong> the scalar clock value of e must be strictly smaller than f

<strong>Example Diagram</strong>
```
   C1=0       1      2      3
P1 ----------a------b------c------->
                     \m(2)
                      \
   C2=0      1  2      \ 3   4
P2 ---------d--e--------f---g------>
                             \m(4)
                              \
   C3=0       1                \ 5
P3 ----------h------------------i-->
```

example clock values:
- C(a) = 1
- C(b) = 2
- C(i) = 5

<strong>Clock Algorithm - Scalar (Algorithm that Adheres to Scalar Clock Property) - assumes instantaneous events</strong>
- on executing internal event
  Ci := Ci + 1
- on sending message m
  Ci := Ci + 1
  piggyback Ci on m
- on receiving message m carrying timestamp Cm
  Ci := max(Ci, Cm)
  Ci := Ci + 1

<strong>Explanation on \#3 </strong>- Pi receives message m from Pj carrying timestamp Cm
- the following 2 properties must hold:
	- Ci-new \> Ci-old
	- Ci-new \> Cm
- therefore:
  Ci-new := max(Ci-old, Cm) + 1
