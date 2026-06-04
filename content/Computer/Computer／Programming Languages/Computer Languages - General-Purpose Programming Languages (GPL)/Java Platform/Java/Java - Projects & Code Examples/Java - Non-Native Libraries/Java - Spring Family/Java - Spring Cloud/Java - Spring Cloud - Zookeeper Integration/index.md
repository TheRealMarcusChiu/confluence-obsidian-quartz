---
title: "Java - Spring Cloud - Zookeeper Integration"
created: 2020-11-28T14:44:42.112-06:00
modified: 2024-08-28T12:35:48.043-05:00
parent: "[[Java - Spring Cloud]]"
children: []
---
- see: [[Zookeeper]]
- article: [https://www.baeldung.com/spring-cloud-zookeeper](https://www.baeldung.com/spring-cloud-zookeeper)
- code:
	- consumer service - [https://github.com/SpringBootMarcusChiu/zookeeper-example-consumer](https://github.com/SpringBootMarcusChiu/zookeeper-example-consumer)
	- producer service - [https://github.com/SpringBootMarcusChiu/zookeeper-example-producer](https://github.com/SpringBootMarcusChiu/zookeeper-example-producer)

# Steps to Run
- start zookeeper (see: [[Zookeeper]])
- start producer service
	- mvn spring-boot:run
- start consumer service
	- mvn spring-boot:run
- goto:
	- consumer site: [http://localhost:8082/](http://localhost:8082/)
	- producer site: [http://localhost:8081/](http://localhost:8081/)
