---
title: "Pig - Installation"
created: 2020-05-21T00:23:29.633-05:00
modified: 2020-05-21T00:31:12.941-05:00
parent: "[[Pig]]"
children: []
---
pig requires the following:
- java
- hadoop

### Download

download binary from [https://pig.apache.org/releases.html](https://pig.apache.org/releases.html)
```
wget http://apache.mirrors.hoobly.com/pig/latest/pig-0.17.0-src.tar.gz
tar -xvf pig-0.16.0.tar.gz  
```
### Add PATH

modify \~/.bashrc
```
export PIG_HOME=/somewhere-over-the-rainbow/pig-0.16.0  
export PATH=$PATH:$PIG_HOME/bin
```
```
source ~/.bashrc
```
### Test Installation
```
pig -h
```
### Start Pig

start pig in MapReduce mode (for other modes see: [[Pig - Run Modes]])
```
pig
```
