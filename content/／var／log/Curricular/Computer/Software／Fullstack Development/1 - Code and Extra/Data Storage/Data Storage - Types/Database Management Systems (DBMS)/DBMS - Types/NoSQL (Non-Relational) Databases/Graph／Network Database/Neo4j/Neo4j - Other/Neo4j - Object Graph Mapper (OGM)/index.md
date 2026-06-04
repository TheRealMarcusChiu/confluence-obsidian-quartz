---
title: "Neo4j - Object Graph Mapper (OGM)"
created: 2021-06-26T11:10:43.641-05:00
modified: 2021-06-26T11:19:21.534-05:00
parent: "[[Neo4j - Other]]"
children: []
---
<strong>Neo4j - Object Graph Mapper (OGM)</strong> is a Java library/framework to CRUD against a Neo4j database
# Example Code Snippet

given Java POJOs, the Neo4j OGM library comes with declarative annotations
```
@NodeEntity(label="Film")
public class Movie {

   private Long id;

   @Id @GeneratedValue(strategy = UuidStrategy.class)
   private String uuid;

   @Property(name="title")
   private String name;
}

@NodeEntity
public class Actor extends DomainObject {

   private Long id;

   @Id @GeneratedValue(strategy = UuidStrategy.class)
   private String uuid;

   @Property(name="name")
   private String fullName;

   @Relationship(type="ACTED_IN", direction=Relationship.OUTGOING)
   private List<Role> filmography;

}

@RelationshipEntity(type="ACTED_IN")
public class Role {
    @Id @GeneratedValue  private Long relationshipId;
    @Property            private String title;
    @StartNode           private Actor actor;
    @EndNode             private Movie movie;
}
```
# Spring Data Abstraction
- see [[Java - Spring - Spring Data Neo4j (SDN)]]

# Resources
- intro - [https://neo4j.com/developer/neo4j-ogm/](https://neo4j.com/developer/neo4j-ogm/)
- dependency matrix - [https://neo4j.com/developer/neo4j-ogm/#_compatibility](https://neo4j.com/developer/neo4j-ogm/#_compatibility)
- manual - [https://neo4j.com/docs/ogm-manual/current/](https://neo4j.com/docs/ogm-manual/current/)
