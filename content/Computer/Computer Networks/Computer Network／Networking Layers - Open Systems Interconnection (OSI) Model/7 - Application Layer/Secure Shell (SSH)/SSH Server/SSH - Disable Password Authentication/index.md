---
title: "SSH - Disable Password Authentication"
created: 2022-12-06T22:02:34.785-06:00
modified: 2022-12-06T22:03:07.100-06:00
parent: "[[SSH Server]]"
children: []
---
In file /etc/ssh/sshd\_config uncomment the following line
```
#PasswordAuthentication no
```

Then run
```
service ssh restart
```
