---
title: "SpotBugs／FindBugs - Suppress／Ignore a Single Warning"
created: 2021-06-24T16:58:08.568-05:00
modified: 2021-06-24T19:07:20.143-05:00
parent: "[[Maven - SpotBugs／FindBugs]]"
children: []
---
# Dependency (Maven)
```
<dependency>
    <groupId>net.jcip</groupId>
    <artifactId>jcip-annotations</artifactId>
    <version>1.0</version>
    <optional>true</optional>
</dependency>
<dependency>
    <groupId>com.github.spotbugs</groupId>
    <artifactId>spotbugs-annotations</artifactId>
    <version>3.1.3</version>
    <optional>true</optional>
</dependency>
```
# Annotation
```
@edu.umd.cs.findbugs.annotations.SuppressFBWarnings(
    value="HE_EQUALS_USE_HASHCODE", 
    justification="I know what I'm doing")
```
# Resources
- [https://stackoverflow.com/questions/39412365/what-to-import-to-use-suppressfbwarnings](https://stackoverflow.com/questions/39412365/what-to-import-to-use-suppressfbwarnings)
