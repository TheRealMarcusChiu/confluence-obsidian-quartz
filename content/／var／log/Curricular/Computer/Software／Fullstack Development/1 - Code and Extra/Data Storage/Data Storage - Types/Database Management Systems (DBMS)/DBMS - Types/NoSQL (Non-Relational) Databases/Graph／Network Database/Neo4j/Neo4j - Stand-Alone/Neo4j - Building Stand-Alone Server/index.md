---
title: "Neo4j - Building Stand-Alone Server"
created: 2022-09-22T14:48:54.359-05:00
modified: 2022-09-22T14:52:01.809-05:00
parent: "[[Neo4j - Stand-Alone]]"
children: []
---
# Prerequisites
```
git clone https://github.com/neo4j/neo4j.git
sudo apt install maven openjdk-11-jdk
```
# Building Neo4j

Before you start running the unit and integration tests in the Neo4j Maven project on a Linux-like system, you should ensure your limit on open files is set to a reasonable value. You can test it with <code>ulimit -n</code>. We recommend you have a limit of at least 40K.
- A plain <code>mvn clean install</code> will only build the individual jar files.
- Test execution is, of course, part of the build.
- In case you just want the jars, without running tests, this is for you: <code>mvn clean install -DskipTests</code>.
- To build product packages, do <code>export PATH="bin:\$PATH" && make clean all</code> in the packaging directory after building artifacts with Maven.
- To build the documentation see the [Neo4j documentation](https://github.com/neo4j/neo4j-documentation/).
- If you are running into problems building on Windows you can try building Neo4j in a Ubuntu virtual machine.

# Running Neo4j

After running a <code>mvn clean install</code>, <code>cd</code> into <code>packaging/standalone/target</code> and extract the version you want, then:
```
bin/neo4j start
```

in the extracted folder to start Neo4j on <code>localhost:7474</code>. On Windows you want to run:
```
bin\neo4j start
```
