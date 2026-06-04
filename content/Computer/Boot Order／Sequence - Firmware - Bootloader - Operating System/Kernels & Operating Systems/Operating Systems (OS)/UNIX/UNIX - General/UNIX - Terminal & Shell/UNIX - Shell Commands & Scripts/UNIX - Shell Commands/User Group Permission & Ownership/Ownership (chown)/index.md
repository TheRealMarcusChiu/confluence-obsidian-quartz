---
title: "Ownership (chown)"
created: 2019-11-16T12:39:37.232-06:00
modified: 2019-11-16T12:39:51.822-06:00
parent: "[[User Group Permission & Ownership]]"
children: []
---
<strong>1. change user ownership</strong>
<span style="white-space: pre-wrap"><code>  chown \[new-owner\]:\[new-group\] \[file-name\]</code><br><code></code><br><code>  sudo chown \<user\> \<file\> </code><br><code>  sudo chown \<user\> \<directory\> -R</code></span>

<strong>2. change group ownership</strong>
<span style="white-space: pre-wrap"><code>  sudo chgrp \[new-group\] \[file-name\]</code><br><code></code><br><code>  sudo chgrp \<group\> \<file\></code><br><code>  sudo chgrp \<group\> \<directory\> -R</code></span>
