---
title: "Java - Neo4j GraphQL (neo4j-graphql-java)"
created: 2021-10-10T22:22:49.376-05:00
modified: 2021-10-10T22:23:12.302-05:00
parent: "[[Java - Neo4j GraphQL]]"
children: []
---
# Dependency

GitHub: [https://github.com/neo4j-graphql/neo4j-graphql-java](https://github.com/neo4j-graphql/neo4j-graphql-java)
```
<dependency>
	<groupId>org.neo4j</groupId>
	<artifactId>neo4j-graphql-java</artifactId>
	<version>1.4.0</version>
</dependency>
```
# Simple Setup
```java
import graphql.schema.GraphQLSchema;
import org.neo4j.graphql.*;

public class Main {

    public static void main(String[] args) throws OptimizedQueryException {
        String schema = "type Person { name: ID! age: Int} type Query { person : [Person] personByName(name:ID) : Person}";
        GraphQLSchema schemaBuilder = SchemaBuilder.buildSchema(schema);
        QueryContext ctx = new QueryContext();
        Translator translator = new Translator(schemaBuilder);

        String query = "{ p:personByName(name:\"Joe\") { age } }";
        List<Cypher> response = translator.translate(query, Map.of(), ctx);
        System.out.println(response.get(0).getQuery());
		// MATCH (p:Person)
		// WHERE p.name = $pName
		// RETURN p {
		//   .age
		// } AS p
    }
}
```
