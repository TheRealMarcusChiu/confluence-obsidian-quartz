---
title: "Java - Spring - Spring Data Neo4j (SDN)"
created: 2020-11-29T20:00:52.859-06:00
modified: 2023-07-21T15:13:34.064-05:00
parent: "[[Java - Spring Data - Spring Data Modules (Builtin)]]"
children:
  - "[[Spring Data Neo4j (SDN) 5 - Custom Complex @Query Auto-Map POJO Objects]]"
---
###### Spring Data Neo4j (SDN)
````excerpt
- is a [[Java - Spring Data - Spring Data Modules (Builtin)|Spring Data Module]] used to communicate with a [[Neo4j]] database
````
^excerpt

# SDN5 vs SDN6 - Java Libraries Structure

```merge-table
{
  "rows": [
    [
      {
        "content": [
          "see: [[Java - Neo4j]]\n\n[https://neo4j.com/developer/java/](https://neo4j.com/developer/java/)",
          {
            "rows": [
              [
                {
                  "content": "<strong>Spring Data Neo4j </strong><strong>(SDN)</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                "[https://neo4j.com/developer/spring-data-neo4j/](https://neo4j.com/developer/spring-data-neo4j/)\n- <strong>SDN5</strong> is built on top of Neo4j-OGM - [official docs](https://docs.spring.io/spring-data/neo4j/docs/5.1.12.RELEASE/reference/html/)\n- <strong>SDN6</strong> is built on top of Neo4j Drivers - [official docs](https://docs.spring.io/spring-data/neo4j/docs/6.0.3/reference/html/#reference)"
              ],
              [
                {
                  "content": "<strong>[[Neo4j - Object Graph Mapper (OGM)|Neo4j-OGM]]</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                "- [https://github.com/neo4j/neo4j-ogm](https://github.com/neo4j/neo4j-ogm)\n- [https://neo4j.com/developer/neo4j-ogm/](https://neo4j.com/developer/neo4j-ogm/)\n- is built on top of the Neo4j Drivers"
              ],
              [
                {
                  "content": "<strong>Neo4j Drivers</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                "- [https://neo4j.com/developer/java/#java-driver](https://neo4j.com/developer/java/#java-driver)\n- [https://neo4j.com/developer/java-driver-spring-boot-starter/](https://neo4j.com/developer/java-driver-spring-boot-starter/)\n- [[Java - Spring - Spring JDBC|JDBC]] drivers [https://github.com/neo4j-contrib/neo4j-jdbc](https://github.com/neo4j-contrib/neo4j-jdbc):\n\t- <strong>Bolt Protocol JDBC Driver</strong> - for [[Neo4j - Stand-Alone|stand-alone neo4j server]]\n\t- <strong>HTTP Protocol JDBC Driver</strong> - for stand-alone neo4j server\n\t- <strong>Embedded JDBC Driver</strong> - for [[Neo4j - Embedded|embedded neo4j server]]"
              ]
            ]
          }
        ]
      },
      "![[Java - Spring - Spring Data Neo4j (SDN)/neo4j-libraries.png|250]][[neo4j-libraries.drawio]]"
    ]
  ]
}
```
# SDN5 vs SDN6

```merge-table
{
  "rows": [
    [
      {
        "content": "SDN5",
        "header": true,
        "bg": "#F4F5F7"
      },
      "SDN5 does not provide any other level of abstraction by itself but uses the Neo4j-OGM library under the hood (like [[Java - Spring - Spring Data JPA (Hibernate)|Spring Data JPA]] does with a [[Java - Java Persistence API (JPA) - Jakarta Persistence|JPA]] implementation). You could opt-in to use the Neo4j-OGM's <code><font style=\"color: rgb(128,128,128);\">SessionFactory</font></code> that you can get injected into your classes."
    ],
    [
      {
        "content": "SDN6",
        "header": true,
        "bg": "#F4F5F7"
      },
      "SDN6 (was named SDN/RX during WIP) provides three levels of abstraction (all of them support Spring Transaction):\n1. <code><font style=\"color: rgb(128,128,128);\">Neo4jClient</font></code> - not aware of any mapping that was done. like a Neo4j Driver on steroids\n2. <code><font style=\"color: rgb(128,128,128);\">Neo4jTemplate</font></code> - uses the metadata from the domain mapping to provide functionality for handling entities\n3. <code><font style=\"color: rgb(128,128,128);\">Neo4jRepository</font></code> - the third and highest level of abstraction\n\nSDN6 [removed the query by depth](https://stackoverflow.com/questions/65219036/how-should-one-migrate-from-the-removed-depth-annotation-in-spring-data-neo4j-6)"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Code Examples
- [https://github.com/SpringBootMarcusChiu/neo4j-example](https://github.com/SpringBootMarcusChiu/neo4j-example)
- [https://www.codota.com/code/java/classes/org.neo4j.ogm.session.Neo4jSession](https://www.codota.com/code/java/classes/org.neo4j.ogm.session.Neo4jSession)
