---
title: "Architectural Design Patterns - Distributed"
created: 2019-12-17T23:09:06.852-06:00
modified: 2020-04-02T21:30:54.281-05:00
parent: "[[Architectural／Architecture Design Patterns (ADP)]]"
children: []
---
![](https://www.youtube.com/watch?v=tpspO9K28PM&t=138s)
###### Distributed Architectural Design Patterns

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Modern Three-Tier \\[[2:25](https://www.youtube.com/watch?v=tpspO9K28PM&t=145s)\\]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Sharded \\[[16:49](https://www.youtube.com/watch?v=tpspO9K28PM&t=1009s)\\]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Lambda \\[[28:39](https://www.youtube.com/watch?v=tpspO9K28PM&t=1719s)\\]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Streaming \\[[39:57](https://www.youtube.com/watch?v=tpspO9K28PM&t=2397s)\\]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Presentation - Business - Data \\[[2:54](https://www.youtube.com/watch?v=tpspO9K28PM&t=174s)\\]\n- (JSP EJB Oracle)\n- (React.js Node.js Cassandra)\n\nStrengths \\[[12:43](https://www.youtube.com/watch?v=tpspO9K28PM&t=763s)\\]\n- Rich front-end framework (scale, UX)\n- Hip, scalable middle tier\n- Basically infinitely scalable data tier\n\nWeaknesses \\[[14:57](https://www.youtube.com/watch?v=tpspO9K28PM&t=897s)\\]\n- State in the middle tier\n\nOverall Rating \\[[15:32](https://www.youtube.com/watch?v=tpspO9K28PM&t=932s)\\]\n- Scalability 4\n- Hipness 2\n- Difficulty 3\n- Flexibility 5",
      "When Sharding Attacks \\[[19:53](https://www.youtube.com/watch?v=tpspO9K28PM&t=1193s)\\]\n\nStrengths \\[[23:38](https://www.youtube.com/watch?v=tpspO9K28PM&t=1418s)\\]\n- Client isolation is easy(data and deployment)\n- Known, simple technologies\n\nWeaknesses \\[[24:56](https://www.youtube.com/watch?v=tpspO9K28PM&t=1496s)\\]\n- Complexity\n- No comprehensive view of data (ETL)\n- Oversized shards\n\nOverall Rating \\[[28:00](https://www.youtube.com/watch?v=tpspO9K28PM&t=1680s)\\]\n- Scalability 3\n- Hipness 1\n- Difficulty 4\n- Flexibility 3",
      "[http://softwareengineeringdaily.com/2016/08/19/apache-beam-with-frances-perry](https://www.youtube.com/redirect?stzid=UgwId9K-A6OEhO7zpY54AaABAg&q=http%3A%2F%2Fsoftwareengineeringdaily.com%2F2016%2F08%2F19%2Fapache-beam-with-frances-perry%2F&event=comments&redir_token=OAG-Qmo4IDp0Bwo321qQVLm4wg58MTU3NjczMjA5NkAxNTc2NjQ1Njk2)\n\nMessaging \\[[34:42](https://www.youtube.com/watch?v=tpspO9K28PM&t=2082s)\\]\n\nKafka \\[[35:09](https://www.youtube.com/watch?v=tpspO9K28PM&t=2109s)\\]\n\nStrengths \\[[38:20](https://www.youtube.com/watch?v=tpspO9K28PM&t=2300s)\\]\n- Optimizes subsystems based on operational requirements\n- Good at unbounded data\n\nWeaknesses \\[[39:09](https://www.youtube.com/watch?v=tpspO9K28PM&t=2349s)\\]\n- Complex to operate and maintain\n- No, seriously\n\nOverall Rating\n- Scalability 5\n- Hipness 1\n- Difficulty 5\n- Flexibility 2",
      "Streaming \\[[40:04](https://www.youtube.com/watch?v=tpspO9K28PM&t=2404s)\\]\n- Integration is a first-class concern\n- Life is dynamic; databases are static\n- Tables are streams and streams are tables\n- Keep your services close, your computation closer\n\nIntegration \\[[41:55](https://www.youtube.com/watch?v=tpspO9K28PM&t=2515s)\\]\n\nDatabase Abstraction \\[[45:25](https://www.youtube.com/watch?v=tpspO9K28PM&t=2725s)\\]\n\nStoring Data in Messages \\[[46:26](https://www.youtube.com/watch?v=tpspO9K28PM&t=2786s)\\]\n- Retention policy? Don't be so hasty\n- Whole-hearted I/O performance\n- O(1) writes\n- Partitioning, replication\n- Elastic scale\n\nFirst-class events \\[[47:07](https://www.youtube.com/watch?v=tpspO9K28PM&t=2827s)\\]\n\nStreams API for kafka \\[[48:05](https://www.youtube.com/watch?v=tpspO9K28PM&t=2885s)\\]\n- Core Kafka since 0.10 (May, 2016)\n- Filters, aggregations, joins\n- Doesn't require a separate cluster!\n- Keep stream computation near your code\n\nOverall Rating\n- Scalability 5\n- Hipness 5\n- Difficulty 4\n- Flexibility 5"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
