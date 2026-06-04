---
title: "dig"
created: 2019-03-16T23:04:37.251-05:00
modified: 2026-01-22T21:52:37.821-06:00
parent: "[[DNS Client]]"
children:
  - "[[dig - commands]]"
---
# Installation

[[CentOS]]/[[Red Hat Enterprise Linux (RHEL)|RHEL]]/[[Fedora]]
```bash
sudo yum install bind-utils -y
```

[[Debian]]/[[Ubuntu]]
```bash
sudo apt-get install dnsutils -y
```
# Configuration

adjust command defaults with <code><font style="color: rgb(122,134,154);">\~/.digrc</font></code> file
```bash
$ dig google.com +short
216.58.220.110
$ vim ~/.digrc
$ cat ~/.digrc
+short
$ dig google.com
216.58.220.110
```
# Commands

refer to [[dig - commands]]
