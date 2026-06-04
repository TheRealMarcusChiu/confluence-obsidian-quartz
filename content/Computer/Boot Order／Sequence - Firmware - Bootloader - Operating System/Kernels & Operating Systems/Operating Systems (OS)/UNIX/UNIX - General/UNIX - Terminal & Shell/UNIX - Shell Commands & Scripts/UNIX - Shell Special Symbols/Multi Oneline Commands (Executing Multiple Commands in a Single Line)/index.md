---
title: "Multi Oneline Commands (Executing Multiple Commands in a Single Line)"
created: 2019-03-15T15:58:07.277-05:00
modified: 2021-01-14T14:00:30.836-06:00
parent: "[[UNIX - Shell Special Symbols]]"
children:
  - "[[Have Command Always Succeed]]"
---
<strong>Run A and then B, regardless of the success or failure of A</strong>
<span style="white-space: pre-wrap"><code>  A ; B </code></span>

<strong>Run B only if A succeeded</strong>
<span style="white-space: pre-wrap"><code>  A && B </code></span>

<strong>Run B only if A failed</strong>
<span style="white-space: pre-wrap"><code>  A || B </code></span>
