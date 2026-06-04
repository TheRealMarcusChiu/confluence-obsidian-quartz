---
title: "JavaScript - Module Systems"
created: 2024-01-06T17:38:47.440-06:00
modified: 2024-01-06T17:43:18.055-06:00
parent: "[[JavaScript]]"
children:
  - "[[Asynchronous Module Definition (AMD)]]"
  - "[[CommonJS]]"
  - "[[ECMAScript Modules]]"
  - "[[Universal Module Definition (UMD)]]"
---
- Raw <code>\<script\></code> loading, where dependencies are implicit, and exports are vomited onto the <code>window</code> object. (Strangely, this convention doesn’t have a name!)
- [[CommonJS]] - where a module’s dependencies are synchronously, dynamically <code>require()</code>d, and its exports are placed on an <code>exports</code> object.
- [[ECMAScript Modules|“ECMAScript modules”]] - where a module’s dependencies are statically <code>import</code>ed before execution, and its exports are statically defined, top-level variables.
- [[Asynchronous Module Definition (AMD)]] - where a module calls <code>define(dependencies, callback)</code> (Plus a degenerate alternative form that unsafely wraps a CommonJS module; the less said about it, the better).
- [[Universal Module Definition (UMD)]] - TODO
