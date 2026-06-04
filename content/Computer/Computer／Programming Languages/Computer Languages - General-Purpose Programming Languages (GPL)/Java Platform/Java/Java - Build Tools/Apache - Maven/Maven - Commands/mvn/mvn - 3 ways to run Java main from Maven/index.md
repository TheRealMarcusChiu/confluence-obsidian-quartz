---
title: "mvn - 3 ways to run Java main from Maven"
created: 2020-09-25T22:05:57.207-05:00
modified: 2022-01-29T19:55:19.929-06:00
parent: "[[mvn]]"
children: []
---
```
mvn compile  

mvn exec:java -Dexec.mainClass="com.marcuschiu.module.Main"
mvn exec:java -Dexec.mainClass="com.marcuschiu.module.Main" -Dexec.args="arg0 arg1 arg2"
```
