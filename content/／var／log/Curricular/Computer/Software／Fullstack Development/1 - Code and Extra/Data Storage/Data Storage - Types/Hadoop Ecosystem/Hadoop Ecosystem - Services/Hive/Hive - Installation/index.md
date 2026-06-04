---
title: "Hive - Installation"
created: 2020-05-21T00:09:42.485-05:00
modified: 2020-05-21T00:14:07.973-05:00
parent: "[[Hive]]"
children: []
---
hive requires the following to be installed:
- java
- hadoop

### Download

find binary from [https://hive.apache.org/downloads.html](https://hive.apache.org/downloads.html)
```
wget http://apache.mirrors.hoobly.com/hive/hive-2.3.7/apache-hive-2.3.7-bin.tar.gz
tar -xvf apache-hive-1.2.2-bin.tar.gz
```
### Add Path

edit \~/.bashrc and add the following
```
...
export HIVE_HOME=/somewhere-over-the-rainbow/apache-hive-1.2.2-bin  
export PATH=$PATH:/somewhere-over-the-rainbow/apache-hive-1.2.2-bin/bin
```
```
source ~/.bashrc
```
### Start Hive
Let's start the hive by providing the following command
```
hive
```
