---
title: "Software Design Patterns vs Performance／Efficiency"
created: 2022-02-28T04:18:08.504-06:00
modified: 2022-02-28T04:26:46.896-06:00
parent: "[[SDP - Other]]"
children: []
---
# Do Design Patterns Improve Performance/Efficiency?

The answer depends.

The goal of design patterns is to produce clean maintainable code. It has nothing to do with the performance and efficiency of code execution.

Should you need to optimize anything, you would probably need to de-design pattern the code.

Often the performance of code is dependent on a relatively small piece (a data structure, a function, or even a single loop), so it doesn't go into the scope of design patterns anyway.
