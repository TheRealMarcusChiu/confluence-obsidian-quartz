---
title: "Java - Spring Data - Spring Data Commons"
created: 2022-12-20T20:33:52.127-06:00
modified: 2022-12-22T09:49:00.139-06:00
parent: "[[Java - Spring Data]]"
children: []
---
###### Spring Data Commons
- interfaces and code shared between the various [[Java - Spring Data - Spring Data Modules (Builtin)|datastore-specific implementations]]

# Maven configuration

Add the Maven dependency:
```
<dependency>
  <groupId>org.springframework.data</groupId>
  <artifactId>spring-data-commons</artifactId>
  <version>${version}</version>
</dependency>
```

If you’d rather like the latest snapshots of the upcoming major version, use our Maven snapshot repository and declare the appropriate dependency version
```
<dependency>
  <groupId>org.springframework.data</groupId>
  <artifactId>spring-data-commons</artifactId>
  <version>${version}-SNAPSHOT</version>
</dependency>

<repository>
  <id>spring-libs-snapshot</id>
  <name>Spring Snapshot Repository</name>
  <url>https://repo.spring.io/libs-snapshot</url>
</repository>
```
# Resources
- [https://github.com/spring-projects/spring-data-commons](https://github.com/spring-projects/spring-data-commons)
