---
title: "Publisher／Pub／Subscriber／Sub Messaging／Message Queues／System"
created: 2026-01-10T02:25:15.204-06:00
modified: 2026-01-10T02:32:03.218-06:00
parent: "[[1 - Code and Extra]]"
children:
  - "[[ActiveMQ]]"
  - "[[Apache Kafka]]"
  - "[[Apache Pulsar]]"
  - "[[RabbitMQ]]"
---
###### Publisher/Pub/Subscriber/Sub Messaging/Message Queues/System
````excerpt
- TODO
````
^excerpt

# Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Comparisons

based on: [https://www.confluent.io/kafka-vs-pulsar/](https://www.confluent.io/kafka-vs-pulsar/)

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[[Apache Kafka]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[[Apache Pulsar]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[[RabbitMQ]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Kafka specific binary protocol over TCP",
      "Pulsar specific binary protocol over TCP",
      "[[Advanced Message Queueing Protocol (AMQP)|AMQP]]"
    ],
    [
      {
        "content": "License",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      "Apache v2",
      "Apache v2",
      "Mozilla Public"
    ],
    [
      {
        "content": "Components",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      "Kafka + Zookeeper(ZK is[being removed](https://cwiki.apache.org/confluence/display/KAFKA/KIP-500%3A+Replace+ZooKeeper+with+a+Self-Managed+Metadata+Quorum))",
      "Pulsar + Zookeeper +BookKeeper +RocksDB",
      "RabbitMQ"
    ],
    [
      {
        "content": "Message Consumption Model",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      "Pull",
      "Push",
      "Push"
    ],
    [
      {
        "content": "Storage Architecture",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      "Log",
      "Index",
      "Index"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
