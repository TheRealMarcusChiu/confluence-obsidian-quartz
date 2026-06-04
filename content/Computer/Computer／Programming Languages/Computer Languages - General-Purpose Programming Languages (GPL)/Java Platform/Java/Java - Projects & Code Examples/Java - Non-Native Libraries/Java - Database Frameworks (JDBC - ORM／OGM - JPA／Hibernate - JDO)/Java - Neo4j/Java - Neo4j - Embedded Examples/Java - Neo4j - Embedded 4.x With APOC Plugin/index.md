---
title: "Java - Neo4j - Embedded 4.x With APOC Plugin"
created: 2021-05-02T23:36:52.903-05:00
modified: 2021-05-10T22:54:58.287-05:00
parent: "[[Java - Neo4j - Embedded Examples]]"
children: []
---
# 1 - Overview

this article sets up an <strong>Embedded Neo4j 4.x</strong> that is extended with Neo4j APOC Plugin

code: [https://github.com/SpringBootMarcusChiu/neo4j-embedded-apoc-plugin-example](https://github.com/SpringBootMarcusChiu/neo4j-embedded-apoc-plugin-example)

for Embedded Neo4j 3.x see: [[Java - Neo4j - Embedded 3.x With APOC Plugin]]
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
# 3 - Extended Embedded Neo4j with APOC plugin
```
<dependency>
   <groupId>org.neo4j.procedure</groupId>
   <artifactId>apoc</artifactId>
   <version>4.0.0.13</version>
</dependency>
```

add method into <code>EmbeddedNeo4jServerConfig.java</code>
```
public static void registerProcedure(GraphDatabaseService db, Class<?>... procedures) {
    GlobalProcedures globalProcedures = ((GraphDatabaseAPI) db).getDependencyResolver().resolveDependency(GlobalProcedures.class);
    for (Class<?> procedure : procedures) {
        try {
            globalProcedures.registerProcedure(procedure, true);
            globalProcedures.registerFunction(procedure, true);
            globalProcedures.registerAggregationFunction(procedure, true);
        } catch (KernelException e) {
            throw new RuntimeException("while registering " + procedure, e);
        }
    }
}
```

modify GraphDatabaseService bean, to call registerProcedure before returning
```
    // ...
    registerProcedure(graphDb, LoadCsv.class, Help.class);
    return graphDb;
}
```
# 4 - Test APOC
```
@Autowired
GraphDatabaseService graphDatabaseService;

@Override
public void run(String... args) throws Exception {
   var transaction = graphDatabaseService.beginTx();
   var result = transaction.execute("CALL apoc.help(\"apoc\")");
   List<Map<String, Object>> dataList = StreamSupport
         .stream(result.stream().spliterator(), false)
         .collect(Collectors.toList());
   System.out.println(dataList.toString());
}
```
