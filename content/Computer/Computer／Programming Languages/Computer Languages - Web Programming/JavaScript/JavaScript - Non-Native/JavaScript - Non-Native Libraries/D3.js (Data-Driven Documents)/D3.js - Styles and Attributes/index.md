---
title: "D3.js - Styles and Attributes"
created: 2021-09-13T05:28:57.629-05:00
modified: 2021-12-23T17:34:41.309-06:00
parent: "[[D3.js (Data-Driven Documents)]]"
children: []
---
# .attr() vs .style()

in HTML you'll see something like:
```xml
// .style("fill","red");
<text style="fill: red">
```

and
```xml
// .attr("fill","red");
<text fill="red">
```
# Styles

use .style() for design stuff (e.g. colors, opacity, etc)

a good rule of thumb is, if it works in CSS, set it with <code>.style()</code>
# Attributes

use .attr() for positioning/sizing details like x and y and height, width and radius
