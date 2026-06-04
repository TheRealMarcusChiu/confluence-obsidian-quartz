---
title: "Java - Neo4j - Testing"
created: 2021-05-12T20:35:38.975-05:00
modified: 2021-05-12T20:40:33.980-05:00
parent: "[[Java - Neo4j]]"
children: []
---
# 1 - Testing Neo4j Methods
- Neo4j's Test Harness
- [[Java - Neo4j - Embedded|Neo4j's Embedded]]
- [[Java - TestContainers|TestContainer]]'s Neo4j Module

# 2 - Comparisons

Using Harness and/or the Neo4j's Embedded requires adding dependencies. This inevitably pollutes the test classpath leading to various issues, for example
- having conflicting versions of libraries on the classpath (the culprits are usually Lucene, Jetty or Scala), see for example [<em>this issue</em>](https://github.com/neo4j/neo4j/issues/10238)
- Spring auto-configuration is affected by presence of certain classes on classpath
- non-determinism - your code either sometimes fails, or fails only in certain environments

# 3 - Resources
- [https://graphaware.com/docker,/testing/2018/12/16/integration-testing-with-docker-neo4j-image-and-testcontainers.html](https://graphaware.com/docker,/testing/2018/12/16/integration-testing-with-docker-neo4j-image-and-testcontainers.html)
