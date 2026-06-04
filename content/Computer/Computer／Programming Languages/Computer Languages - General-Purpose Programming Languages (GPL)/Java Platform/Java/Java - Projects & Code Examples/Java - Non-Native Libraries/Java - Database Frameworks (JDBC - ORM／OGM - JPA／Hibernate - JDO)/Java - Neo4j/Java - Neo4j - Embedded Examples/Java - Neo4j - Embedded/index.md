---
title: "Java - Neo4j - Embedded"
created: 2021-05-02T23:06:35.557-05:00
modified: 2021-05-03T00:05:35.761-05:00
parent: "[[Java - Neo4j - Embedded Examples]]"
children: []
---
# 1 - Overview

this article sets up an <strong>Embedded Neo4j</strong> and how to query it

code: [https://github.com/SpringBootMarcusChiu/neo4j-embedded-example](https://github.com/SpringBootMarcusChiu/neo4j-embedded-example)
# 2 - Configure Embedded Neo4j
```
<dependency>
   <groupId>org.neo4j</groupId>
   <artifactId>neo4j</artifactId>
   <version>4.0.0</version>
</dependency>
```
<span style="white-space: pre-wrap"><code>EmbeddedNeo4jServerConfig.java</code></span>

```
@Bean
public GraphDatabaseService graphDatabaseService() {
    DatabaseManagementService managementService = new DatabaseManagementServiceBuilder(new File("embedded_neo4j_database"))
            .loadPropertiesFromFile("neo4j.conf")
            .build();
    GraphDatabaseService graphDb = managementService.database(DEFAULT_DATABASE_NAME);
    return graphDb;
}
```
# 3 - Querying Embedded Neo4j
```
@Autowired
GraphDatabaseService graphDatabaseService;

@Override
public void run(String... args) throws Exception {
   var transaction = graphDatabaseService.beginTx();
   var result = transaction.execute("MERGE (n:Person {firstName: 'Marcus', lastName: 'Chiu'}) RETURN n");
   List<Map<String, Object>> dataList = StreamSupport
         .stream(result.stream().spliterator(), false)
         .collect(Collectors.toList());
   System.out.println(dataList.toString());
}
```
