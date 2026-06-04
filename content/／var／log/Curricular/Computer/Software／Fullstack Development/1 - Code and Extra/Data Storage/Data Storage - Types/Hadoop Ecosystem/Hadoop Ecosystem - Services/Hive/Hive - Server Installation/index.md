---
title: "Hive - Server Installation"
created: 2020-05-21T12:35:07.702-05:00
modified: 2020-05-21T13:45:44.497-05:00
parent: "[[Hive]]"
children: []
---
Put the following at the beginning of hive-site.xml
```
<property>
    <name>system:java.io.tmpdir</name>
    <value>/tmp/hive/java</value>
</property>
<property>
    <name>system:user.name</name>
    <value>${user.name}</value>
</property>
```
```
wget http://www.java2s.com/Code/JarDownload/mysql/mysql-connector-java-commercial-5.1.7-bin.jar.zip
 unzip mysql-connector-java-commercial-5.1.7-bin.jar.zip
 cp mysql-connector-java-commercial-5.1.7-bin.jar  $HIVE_HOME/lib/
```
