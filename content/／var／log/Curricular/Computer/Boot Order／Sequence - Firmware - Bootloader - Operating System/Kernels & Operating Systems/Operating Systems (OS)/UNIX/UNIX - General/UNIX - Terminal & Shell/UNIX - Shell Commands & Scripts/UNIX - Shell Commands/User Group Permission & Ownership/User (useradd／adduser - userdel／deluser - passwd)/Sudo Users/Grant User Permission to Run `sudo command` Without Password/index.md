---
title: "Grant User Permission to Run `sudo command` Without Password"
created: 2020-06-25T21:49:58.901-05:00
modified: 2020-06-25T21:53:22.556-05:00
parent: "[[Sudo Users]]"
children: []
---
Let's grant your user permission to run<code><font style="color: rgb(128,128,128);"> sudo touch </font></code>without a password:
```
echo "$(whoami) ALL=(ALL) NOPASSWD: $(which touch)" | sudo tee /etc/sudoers.d/touch
```

When you're done, the file <code><font style="color: rgb(128,128,128);">/etc/sudoers.d/touch</font></code> should look something like this:
```
$ sudo cat /etc/sudoers.d/touch
marcuschiu ALL=(ALL) NOPASSWD: /usr/bin/touch
```
