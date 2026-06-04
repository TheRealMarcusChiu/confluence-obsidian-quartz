---
title: "Maven - Convert Java Class 2 Maven Artifact & Import into Maven Project"
created: 2021-04-03T23:21:40.548-05:00
modified: 2021-04-03T23:23:52.318-05:00
parent: "[[Apache - Maven]]"
children: []
---
create random java file MarcusChiu.java

compile it
- javac com/marcuschiu/MarcusChiu.java

jar it
- jar cf marcus-chiu.jar com/marcuschiu/MarcusChiu.class

create maven artifact out of the jar file
- to default shared local repository
	- mvn install:install-file -Dfile=marcus-chiu.jar -DgroupId=com.marcuschiu -DartifactId=marcus-chiu -Dversion=0.1.0 -Dpackaging=jar -DgeneratePom=true
- to some other local repository
	- mvn install:install-file -Dfile=marcus-chiu.jar -DgroupId=com.marcuschiu -DartifactId=marcus-chiu -Dversion=0.1.0 -Dpackaging=jar -DgeneratePom=true -DlocalRepositoryPath=./repository
