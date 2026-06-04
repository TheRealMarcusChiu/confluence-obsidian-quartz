---
title: "Java - Neo4j - Embedded 3.x With APOC Plugin"
created: 2021-05-10T22:50:12.920-05:00
modified: 2021-05-10T22:54:32.359-05:00
parent: "[[Java - Neo4j - Embedded Examples]]"
children: []
---
# 1 - Overview

this article sets up an <strong>Embedded Neo4j 3.x</strong> that is extended with Neo4j APOC Plugin

code: [https://github.com/SpringBootMarcusChiu/neo4j-embedded-3x-apoc-plugin-example](https://github.com/SpringBootMarcusChiu/neo4j-embedded-3x-apoc-plugin-example)

for Embedded Neo4j 4.x see: [[Java - Neo4j - Embedded 4.x With APOC Plugin]]
# 2 - Configure Embedded Neo4j
```
<dependency>
   <groupId>org.neo4j</groupId>
   <artifactId>neo4j</artifactId>
   <version>3.5.16</version>
</dependency>
```
<span style="white-space: pre-wrap"><code>EmbeddedNeo4jServerConfig.java</code></span>

```
@Bean
public GraphDatabaseService graphDatabaseService() {
    GraphDatabaseService graphDatabaseService = new GraphDatabaseFactory()
        .newEmbeddedDatabase(new File("embedded-neo4j-db"));
    return graphDb;
}
```
# 3 - Extended Embedded Neo4j with APOC plugin
```
<dependency>
   <groupId>org.neo4j.procedure</groupId>
   <artifactId>apoc</artifactId>
   <version>3.5.0.11</version>
</dependency>
```

add method into <code>EmbeddedNeo4jServerConfig.java</code>
```
private static void registerProcedure(GraphDatabaseService db, Class<?>... procedures) throws KernelException {
    var procedureServices = ((GraphDatabaseAPI) db)
            .getDependencyResolver()
            .resolveDependency(Procedures.class);

    for (Class<?> procedure : procedures) {
        procedureServices.registerProcedure(procedure, true);
        procedureServices.registerFunction(procedure, true);
        procedureServices.registerAggregationFunction(procedure, true);
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
private SessionFactory sessionFactory;
@Autowired
private GraphDatabaseService graphDatabaseService;

@Override
public void run(String... args) {
   System.out.println("COMMAND LINE RUNNER");

   graphDatabaseServiceExample();
   sessionFactoryExample();

   System.exit(0);
}

private void graphDatabaseServiceExample() {
   var result1 = graphDatabaseService.execute("CALL apoc.help('help')");
   System.out.println("\nGraphDatabaseService\n" + result1.next().toString());
}

private void sessionFactoryExample() {
   var result2 = sessionFactory.openSession().query("CALL apoc.help('help')", Map.of());
   List<Map<String, Object>> dataList = StreamSupport.stream(result2.spliterator(), false)
         .collect(Collectors.toList());
   System.out.println("\nSessionFactory\n" + dataList.toString() + "\n\n");
}
```
