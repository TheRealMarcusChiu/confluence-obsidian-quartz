---
title: "Java - Pass-by-Reference or Pass-by-Value"
created: 2020-10-06T19:51:32.011-05:00
modified: 2021-12-12T01:55:02.609-06:00
parent: "[[Java - Underneath]]"
children: []
---
<strong>Java is always pass-by-reference</strong>

Real pass-by-reference involves passing the address of a variable. With real pass-by-reference, the called method can assign to its local variable, and this causes the variable in the caller to be updated.

But not in Java. In Java, the called method can update the contents of the array, and it can update its copy of the array reference, but it can't update the variable in the caller that holds the caller's array reference. Hence ... what Java is providing is NOT pass-by-reference

For more details see: [[Pass by Reference - Pass by Value - Pass by Pointer]]
