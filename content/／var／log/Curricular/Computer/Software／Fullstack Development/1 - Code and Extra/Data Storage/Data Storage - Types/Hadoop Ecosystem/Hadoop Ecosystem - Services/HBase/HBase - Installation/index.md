---
title: "HBase - Installation"
created: 2020-05-20T23:13:17.990-05:00
modified: 2020-05-20T23:31:29.465-05:00
parent: "[[HBase]]"
children: []
---
HBase requires the following to be installed:
- Java
- Hadoop
- Zookeeper

Hbase can be installed in three modes:
- standalone
- pseudo distributed mode
- fully distributed mode

### Download
find binary here: [https://hbase.apache.org/downloads.html](https://hbase.apache.org/downloads.html)
```
wget http://apache.mirrors.hoobly.com/hbase/2.2.4/hbase-2.2.4-bin.tar.gz
tar -zxvf hbase-0.98.8-hadoop2-bin.tar.gz
mv hbase-0.98.8/* hadoop/hbase # optional
```
## <strong>Configuring HBase in Standalone Mode</strong>

edit /hbase/conf/hbase-env.sh and replace the existing JAVA\_HOME
```
export JAVA_HOME=/usr/lib/jvm/java-1.8.0
```

edit /hbase/hbase-site.xml
```
...
<configuration>  
	// Here you have to set the path where you want HBase to store its files.  
	<property>  
		<name>hbase.rootdir</name>  
		<value>file:/home/hadoop/HBase/HFiles</value>  
	</property>  
      
	//Here you have to set the path where you want HBase to store its built in zookeeper  files.  
	<property>  
		<name>hbase.zookeeper.property.dataDir</name>  
		<value>/home/hadoop/zookeeper</value>  
	</property>  
</configuration> 
...
```

Now start the Hbase by running the start-hbase.sh present in the bin folder of Hbase
```
./HBase/bin/start-hbase.sh
```
