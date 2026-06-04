---
title: "Kafka - Installation (Cluster)"
created: 2020-05-26T18:58:55.890-05:00
modified: 2020-05-26T18:59:35.086-05:00
parent: "[[Apache Kafka]]"
children: []
---
first: [[Kafka - Installation (Standalone)]]
### Setting up a Multi-Broker Cluster

make a config file for each additional broker
```
cp config/server.properties config/server-1.properties
cp config/server.properties config/server-2.properties
```

edit these new files and set the following properties
```
...
broker.id=1
listeners=PLAINTEXT://:9093
log.dirs=/Desktop/kafka-logs-1
...
```
```
...
broker.id=2
listeners=PLAINTEXT://:9094
log.dirs=/tmp/kafka-logs-2
...
```

<code>[broker.id](http://broker.id)</code> property is the unique and permanent name of each node in the cluster

start the two new nodes:
```
bin/kafka-server-start.sh config/server-1.properties &
bin/kafka-server-start.sh config/server-2.properties &
```

Now create a new topic with a replication factor of three:
```
> bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 3 --partitions 1 --topic my-replicated-topic
```

check which broker is doing what:
```
bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic
Topic:my-replicated-topic   PartitionCount:1    ReplicationFactor:3 Configs:
Topic: my-replicated-topic  Partition: 0    Leader: 1   Replicas: 1,2,0 Isr: 1,2,0
```
- "leader" is the node responsible for all reads and writes for the given partition. Each node will be the leader for a randomly selected portion of the partitions.
- "replicas" is the list of nodes that replicate the log for this partition regardless of whether they are the leader or even if they are currently alive.
- "isr" is the set of "in-sync" replicas. This is the subset of the replicas list that is currently alive and caught-up to the leader

Let's publish a few messages to our new topic:
```
bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic my-replicated-topic
...
my test message 1
my test message 2
^C
```

then let's consume these messages
```
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic
...
my test message 1
my test message 2
^C
```

Now let's test out fault-tolerance. Broker 1 was acting as the leader so let's kill it:
```
> ps aux | grep server-1.properties
7564 ttys002    0:15.91 /System/Library/Frameworks/JavaVM....
> kill -9 7564
```

check the new elected leadership
```
bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic
Topic:my-replicated-topic   PartitionCount:1    ReplicationFactor:3 Configs:
Topic: my-replicated-topic  Partition: 0    Leader: 2   Replicas: 1,2,0 Isr: 2,0
```
