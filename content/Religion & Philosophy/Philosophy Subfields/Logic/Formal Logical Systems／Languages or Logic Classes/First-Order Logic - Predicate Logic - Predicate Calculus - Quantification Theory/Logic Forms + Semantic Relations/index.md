---
title: "Logic Forms + Semantic Relations"
created: 2021-09-13T04:44:27.178-05:00
modified: 2023-07-08T23:22:11.504-05:00
parent: "[[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory]]"
children: []
---
###### Logic Forms + Semantic Relations
````excerpt
- [[Davidsonian Logic Forms]] + [[Semantic Relations]]
````
^excerpt

# Examples

> [!expand-ui]- Example 1
> given sentence:
> - <code><font style="color: rgb(128,128,128);">The train was an Acela Express, number 176</font></code>
>
> the corresponding <font style="color: rgb(128,0,0);">Logic Form</font> + <font style="color: rgb(0,128,0);">Semantic Relations</font>
> - <code><font style="color: rgb(128,0,0);">train\_NN(x1) & Acela\_NN(x2) & Express\_NN(x3) & nn\_NNC(x4,x2,x3) &</font></code>
> - <code><font style="color: rgb(128,0,0);">number\_NN(x5) & 176\_NN(x6) & \_number\_NE(x6) & nn\_NNC(x7,x5,x6)</font></code>
> - <code><font style="color: rgb(0,128,0);">& ISA\_SR(x1,x4) & SYN\_SR(x7,x4)</font></code>

> [!expand-ui]- Example 2
> given sentence:
> - <code><font style="color: rgb(128,128,128);">The 176 was scheduled to depart for New York City at 10:30 AM and arrive at 1:30 PM on March 15</font></code>
>
> the corresponding <font style="color: rgb(0,176,80);">Logic Form</font> + <font style="color: rgb(0,128,0);">Semantic Relations</font>
> - <code><font style="color: rgb(128,0,0);">176\_NN(x7) & \_number\_NE(x7) & schedule\_VB(e1) & depart\_VB(e2) &</font></code>
> - <code><font style="color: rgb(128,0,0);">New\_NN(x8) & York\_NN(x9) & City\_NN(x10) & nn\_NNC(x11,x8,x9,x10) & </font></code>
> - <code><font style="color: rgb(128,0,0);">\_town\_NE(x11) & 10\_30\_NN(x12) & AM\_NN(x13) & nn\_NNC(x14,x12,x13) & </font></code>
> - <code><font style="color: rgb(128,0,0);">\_time\_NE(x14) & arrive\_VB(e3) & 1\_30\_NN(x15) & PM\_NN(x16) & </font></code>
> - <code><font style="color: rgb(128,0,0);">nn\_NNC(x17,x15,x16) & \_time\_NE(x17) & march\_NN(x18) & 15\_NN(x19) & </font></code>
> - <code><font style="color: rgb(128,0,0);">nn\_NNC(x20,x18,x19) & \_date\_NE(x20) &</font></code>
> - <code><font style="color: rgb(0,128,0);">THM\_SR(x7,e1) & TPC\_SR(e2,e1) & LOC\_SR(x11,e2) & TMP\_SR(x14,e2) & </font></code>
> - <code><font style="color: rgb(0,128,0);">TPC\_SR(e3,e1) & TMP\_SR(x17,e3) & TMP\_SR(x20,e3)</font></code>

> [!expand-ui]- Example 3
> given sentence:
> - <code><font style="color: rgb(128,128,128);">The train left the station on time</font></code>
>
> the corresponding <font style="color: rgb(128,0,0);">Logic Form</font> + <font style="color: rgb(0,128,0);">Semantic Relations</font>
> - <code><font style="color: rgb(128,0,0);">train\_NN(x1) & leave\_VB(e4) & station\_NN(x21) & on\_time\_RB(x22) &</font></code>
> - <code><font style="color: rgb(153,153,51);"><font style="color: rgb(0,128,0);">AGT\_SR(x1,e4) & LOC\_SR(x21,e4) & TMP\_SR(x22)</font></font></code>
