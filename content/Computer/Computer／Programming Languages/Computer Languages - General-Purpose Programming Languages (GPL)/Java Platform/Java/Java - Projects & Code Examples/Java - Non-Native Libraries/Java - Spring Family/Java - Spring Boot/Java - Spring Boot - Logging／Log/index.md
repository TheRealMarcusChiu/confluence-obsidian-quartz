---
title: "Java - Spring Boot - Logging／Log"
created: 2021-09-25T18:31:23.575-05:00
modified: 2022-05-18T03:16:10.907-05:00
parent: "[[Java - Spring Boot]]"
children:
  - "[[Java - Spring Boot - Log4j2]]"
---
Spring Boot uses [[Jakarta Commons Logging (JCL) - Apache Commons Logging|commons logging]] for all internal logging but leaves the underlying log implementation open. Configurations are provided for:
- [[Java - Logback|Logback]] - when using spring boot starter dependencies, Logback is the default logger
- [[Java - Log4j2|Log4j2]]
- [[Java - Java Util Logging (JUL／J.U.L.)|Java Util Logging]]

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- Spring Boot - [https://www.baeldung.com/spring-boot-logging](https://www.baeldung.com/spring-boot-logging)
- Spring - [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging)
