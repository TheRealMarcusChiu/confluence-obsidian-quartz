---
title: "Kafka - Installation (Standalone)"
created: 2020-05-26T17:48:49.371-05:00
modified: 2020-05-26T19:00:09.866-05:00
parent: "[[Apache Kafka]]"
children: []
---
based on: [https://kafka.apache.org/quickstart](https://kafka.apache.org/quickstart)

requires:
- [[Zookeeper|zookeeper]]

### Downloads

find binary at [https://kafka.apache.org/downloads](https://kafka.apache.org/downloads)
```
wget http://apache.mirrors.hoobly.com/kafka/2.5.0/kafka_2.12-2.5.0.tgz
tar -xzf kafka_2.12-2.5.0.tgz
cd kafka_2.12-2.5.0
```
### Start Server

start convenience zookeeper sever
```
bin/zookeeper-server-start.sh config/zookeeper.properties
```

start kafka server
```
bin/kafka-server-start.sh config/server.properties
```

if error remove \$CLASS\_PATH environmental variable
```
#export CLASSPATH=$CLASSPATH:$HADOOP_HOME/lib/*
#export CLASSPATH=$CLASSPATH:$HIVE_HOME/lib/*
```
### Create Topic

create a topic named "test" with a single partition and only one replica:
```
bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```

we can now see that topic if we run the list topic command:
```
bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

Alternatively, instead of manually creating topics you can also configure your brokers to auto-create topics when a non-existent topic is published to
### Produce Some Messages
Run the producer and then type a few messages into the console to send to the server.
```
bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test
This is a message
This is another message
```
### Start a Consumer

start command line consumer that will dump out messages to standard output
```
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
This is a message
This is another message
```
### Setting up a Multi-Broker Cluster

see: [[Kafka - Installation (Cluster)]]
