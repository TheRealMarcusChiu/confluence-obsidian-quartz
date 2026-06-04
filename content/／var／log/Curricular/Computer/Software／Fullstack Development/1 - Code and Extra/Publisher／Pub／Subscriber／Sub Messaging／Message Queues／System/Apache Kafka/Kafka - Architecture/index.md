---
title: "Kafka - Architecture"
created: 2020-05-26T12:57:50.147-05:00
modified: 2025-04-25T16:35:58.546-05:00
parent: "[[Apache Kafka]]"
children: []
---
![](https://www.youtube.com/watch?v=R873BlNVUB4&ab_channel=HusseinNasser)![](https://www.youtube.com/watch?v=Ea3aoACnbEk)

```merge-table
{
  "rows": [
    [
      "![[Kafka - Architecture/kafka-architecture.png|600]]\n\n[[kafka-architecture.drawio]]",
      "- the Kafka cluster contains 4 nodes/brokers\n- the Kafka cluster has 2 topics A and B\n- topic A is partitioned into 2 partitions\n- topic B is partitioned into 1 partition\n- each of A's partitions are replicated 2 additional times\n- B's partition is replicated 1 additional time"
    ]
  ]
}
```
### Kafka Cluster - Architecture
- record/message/log
	- schema: {key, value, timestamp}
	- are immutable
	- configurable retention period
- broker is a node in a cluster that contain partition(s)
- producer writes records to a broker
- consumer reads records from a broker (pull instead of push)
- topic - logical name with 1 or more partitions
- partitions are replicated (normally 3x)
- ordering is guaranteed within a partition (not by topic)

###### Message Offset
- unique sequential id per partition
- each consumer keeps track of offset for each assigned partition
- this allows:
	- replays
	- consumers of different speeds

###### Message Delivery Guarantees

producer
- async (no guarantee)
- committed to leader
- committed to leader & quorum

consumer
- at-least-once (default) -
- at-most-once -
- effectively-once - at-least-once delivery
- exactly-once (maybe) -

### Kafka Cluster - 5 Core APIs
- [Producer API](https://kafka.apache.org/documentation.html#producerapi) allows an application to publish a stream of records to one or more Kafka topics
- [Consumer API](https://kafka.apache.org/documentation.html#consumerapi) allows an application to subscribe to one or more topics and process the stream of records produced to them
- [Streams API](https://kafka.apache.org/documentation/streams) allows an application to act as a <em>stream processor</em>, consuming an input stream from one or more topics and producing an output stream to one or more output topics, effectively transforming the input streams to output streams
- [Connector API](https://kafka.apache.org/documentation.html#connect) allows building and running reusable producers or consumers that connect Kafka topics to existing applications or data systems. For example, a connector to a relational database might capture every change to a table
- [Admin API](https://kafka.apache.org/documentation.html#adminapi) allows managing and inspecting topics, brokers and other Kafka objects
