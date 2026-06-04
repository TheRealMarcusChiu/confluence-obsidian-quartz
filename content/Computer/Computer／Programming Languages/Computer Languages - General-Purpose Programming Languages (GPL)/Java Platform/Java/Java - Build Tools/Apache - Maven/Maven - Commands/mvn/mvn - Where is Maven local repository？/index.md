---
title: "mvn - Where is Maven local repository？"
created: 2021-06-10T10:32:37.707-05:00
modified: 2021-06-10T10:33:24.170-05:00
parent: "[[mvn]]"
children: []
---
<span style="white-space: pre-wrap"><code>mvn help:evaluate -Dexpression=settings.localRepository</code></span>

```
❯ mvn help:evaluate -Dexpression=settings.localRepository
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------< org.apache.maven:standalone-pom >-------------------
[INFO] Building Maven Stub Project (No POM) 1
[INFO] --------------------------------[ pom ]---------------------------------
[INFO]
[INFO] --- maven-help-plugin:3.2.0:evaluate (default-cli) @ standalone-pom ---
[INFO] No artifact parameter specified, using 'org.apache.maven:standalone-pom:pom:1' as project.
[INFO]
/Users/marcuschiu/.m2/repository
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  0.588 s
[INFO] Finished at: 2021-06-10T10:31:49-05:00
[INFO] ------------------------------------------------------------------------
```
