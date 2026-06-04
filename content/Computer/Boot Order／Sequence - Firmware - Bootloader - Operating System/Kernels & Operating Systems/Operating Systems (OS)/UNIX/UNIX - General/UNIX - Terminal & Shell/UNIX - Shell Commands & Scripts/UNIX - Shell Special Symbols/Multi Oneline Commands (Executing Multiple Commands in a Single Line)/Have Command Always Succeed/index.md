---
title: "Have Command Always Succeed"
created: 2019-03-15T15:57:37.085-05:00
modified: 2019-03-15T15:57:51.190-05:00
parent: "[[Multi Oneline Commands (Executing Multiple Commands in a Single Line)]]"
children: []
---
<strong>1. error code would be anything but 0</strong>
<span style="white-space: pre-wrap"><code>  cd chsjdbcdhsvs</code><br><code>  echo \$?</code></span>

<strong>2. error code (\$?) will now always be 0 for success</strong>
<span style="white-space: pre-wrap"><code>  cd vhsjbvfhjsbj || true</code><br><code>  echo \$?</code></span>
