---
title: ".js .jsx .ts .tsx (JavaScript - TypeScript - JavaScript XML - TypeScript XML)"
created: 2025-04-13T16:47:13.577-05:00
modified: 2025-04-13T16:52:21.341-05:00
parent: "[[Computer Languages - Web Programming]]"
children: []
---
All of these will compile down to JavaScript code.
# <strong>.js JavaScript</strong>

plain and simple
<span style="white-space: pre-wrap"><code><font style="color: rgb(1,84,147);">const</font> <font style="color: rgb(183,83,1);">Foo</font> = () =\> {</code><br><code>    <font style="color: rgb(1,84,147);">return</font> <font style="color: rgb(183,83,1);">React</font>.<font style="color: rgb(183,83,1);">createElement</font>(<font style="color: rgb(86,122,13);">"div"</font>, <font style="color: rgb(183,83,1);">null</font>, <font style="color: rgb(86,122,13);">"Hello World!"</font>);</code><br><code>};</code></span>

# <strong>.ts TypeScript</strong>

Microsoft's way of adding "concrete" types to JavaScript
<span style="white-space: pre-wrap"><code><font style="color: rgb(1,84,147);">const</font> <font style="color: rgb(183,83,1);">Foo</font>: <font style="color: rgb(183,83,1);">FunctionalComponent</font> = () =\> {</code><br><code>    <font style="color: rgb(1,84,147);">return</font> <font style="color: rgb(183,83,1);">React</font>.<font style="color: rgb(183,83,1);">createElement</font>(<font style="color: rgb(86,122,13);">"div"</font>, <font style="color: rgb(183,83,1);">null</font>, <font style="color: rgb(86,122,13);">"Hello World!"</font>);</code><br><code>};</code></span>

# <strong>.jsx JavaScript XML</strong>

is JavaScript but with [JSX](https://reactjs.org/docs/introducing-jsx.html) enabled which is [[React - React.js - ReactJS|React's]] language extension to allow you to write markup directly in code which is then compiled to plain JavaScript with the JSX replaced with direct API calls to <code>React.createElement</code> or whatever API is targeted
<span style="white-space: pre-wrap"><code><font style="color: rgb(1,84,147);">const</font> <font style="color: rgb(183,83,1);">Foo</font> = () =\> {</code><br><code>    <font style="color: rgb(1,84,147);">return</font> \<<font style="color: rgb(183,83,1);">div</font>\>Hello World!\</<font style="color: rgb(183,83,1);">div</font>\>;</code><br><code>};</code></span>

# <strong>.tsx TypeScript XML</strong>

is similar to <strong>jsx</strong> except it's TypeScript with the JSX language extension.
<span style="white-space: pre-wrap"><code><font style="color: rgb(1,84,147);">const</font> <font style="color: rgb(183,83,1);">Foo</font>: <font style="color: rgb(183,83,1);">FunctionalComponent</font> = () =\> {</code><br><code>    <font style="color: rgb(1,84,147);">return</font> \<<font style="color: rgb(183,83,1);">div</font>\>Hello World!\</<font style="color: rgb(183,83,1);">div</font>\>;</code><br><code>};</code></span>
