---
title: "rlogin"
created: 2022-09-06T02:19:57.405-05:00
modified: 2023-11-16T16:53:33.925-06:00
parent: "[[7 - Application Layer]]"
children: []
---
###### Rlogin
````excerpt
- operates at the [[7 - Application Layer|application layer]]
- was created at a time when security wasn’t really a major problem, thus it does not use encryption, and all the traffic is sent in plain text
- as the security holes in Rlogin became more serious, [[Secure Shell (SSH)]] was made a more secure alternative
	- SSH traffic is encrypted while Rlogin traffic is not
	- SSH authenticates the user while Rlogin does not
	- SSH can be used for automation while Rlogin cannot
	- Rlogin is no longer being used in favor of SSH
````
^excerpt
