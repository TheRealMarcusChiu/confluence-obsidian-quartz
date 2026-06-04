---
title: "Difference Between useradd／userdel／groupadd／groupdel & adduser／deluser／addgroup／delgroup"
created: 2019-11-16T12:36:13.093-06:00
modified: 2019-11-16T12:37:46.064-06:00
parent: "[[User Group Permission & Ownership]]"
children: []
---
### Difference Between useradd/userdel/groupadd/groupdel & adduser/deluser/addgroup/delgroup

there's no difference in features provided, however:
- <code>useradd/userdel/groupadd/groupdel</code>
	- is native binary compiled with the system
- <code>adduser/deluser/addgroup/delgroup</code>
	- is a perl script which uses <code>useradd/userdel/groupadd/groupdel</code> binary in back-end.
	- adduser/deluser/addgroup/delgroup is more user friendly and interactive than its back-end useradd/userdel/groupadd/groupdel
