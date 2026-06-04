---
title: "Java - Neo4j - Embedded With Spring Data Neo4j (SDN)"
created: 2021-05-02T23:10:24.678-05:00
modified: 2021-05-02T23:36:33.432-05:00
parent: "[[Java - Neo4j - Embedded Examples]]"
children: []
---
# 1 - Overview

this article sets up an <strong>Embedded Neo4j</strong> that can be queried by [[Java - Spring - Spring Data Neo4j (SDN)|Spring Data Neo4j (SDN)]]

code: [https://github.com/SpringBootMarcusChiu/neo4j-embedded-sdn-example](https://github.com/SpringBootMarcusChiu/neo4j-embedded-sdn-example)
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
# 3 - Configure SDN
```
<dependency>
   <groupId>org.springframework.data</groupId>
   <artifactId>spring-data-neo4j</artifactId>
</dependency>
```
<span style="white-space: pre-wrap"><code>application.properties</code></span>

```
spring.data.neo4j.uri=bolt://localhost:7687
#spring.data.neo4j.username=neo4j NO NEED FOR USERNAME
#spring.data.neo4j.password=password NO NEED FOR PASSWORD
```

SDN will auto configure beans necessary for the application
# 4 - Using SDN to Query Embedded Neo4j
```
@Autowired
UserRepository userRepository;

public void query() {
	userRepository.save(User.builder().firstName("Marcus").lastName("Chiu").uuid("uuid").build());
	Optional<User> o = userRepository.findByUuid("uuid");
	System.out.println(o.get().getFirstName());
}
```
