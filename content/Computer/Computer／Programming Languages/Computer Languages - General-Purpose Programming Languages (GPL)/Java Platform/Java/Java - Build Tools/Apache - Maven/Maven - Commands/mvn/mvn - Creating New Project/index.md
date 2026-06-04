---
title: "mvn - Creating New Project"
created: 2020-01-03T20:10:36.807-06:00
modified: 2026-05-21T14:04:53.779-05:00
parent: "[[mvn]]"
children: []
---
[https://www.tutorialspoint.com/maven/maven_creating_project.htm](https://www.tutorialspoint.com/maven/maven_creating_project.htm)
# 1. create java project
```
mvn archetype:generate
```

choose default option (7: maven-archetype-quickstart)

choose groupId, artifactId, version, package

choose Y for confirmation

maven will create default project structure
# 2. build and test project
```
mvn clean package
```

gives maven 2 goals:
- clean - clean the <code><font style="color: rgb(122,134,154);">./target</font></code> directory
- package - package the project build output as a <code><font style="color: rgb(122,134,154);">.jar</font></code> or <code><font style="color: rgb(122,134,154);">.war</font></code> into <code><font style="color: rgb(122,134,154);">./target</font></code> directory
	- <code><font style="color: rgb(122,134,154);">.jar</font></code> or <code><font style="color: rgb(122,134,154);">.war</font></code> is placed into the <code><font style="color: rgb(122,134,154);">./target</font></code> folder
	- test reports are in the surefire-reports

# 3. run the project
```
cd /target/classes
java [path to .class file]
```
