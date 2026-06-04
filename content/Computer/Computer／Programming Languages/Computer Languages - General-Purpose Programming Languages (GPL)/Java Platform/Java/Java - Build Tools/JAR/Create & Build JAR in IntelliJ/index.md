---
title: "Create & Build JAR in IntelliJ"
created: 2020-05-20T20:55:42.166-05:00
modified: 2020-05-20T21:02:28.236-05:00
parent: "[[JAR]]"
children: []
---
### Creating JAR File

file → project structure → project settings → artifacts → + → JAR → from modules with dependencies
- choose main class
- extract to the target JAR
- change Directory for META-INF/MANIFEST.MF to point to resources
	- /src/main/java
	- /src/main/resources

### Build JAR File

build → build artifacts... → choose jar → build

JAR file will be in /out/artifacts/...
### Run JAR File
```
java -jar example.jar
```
