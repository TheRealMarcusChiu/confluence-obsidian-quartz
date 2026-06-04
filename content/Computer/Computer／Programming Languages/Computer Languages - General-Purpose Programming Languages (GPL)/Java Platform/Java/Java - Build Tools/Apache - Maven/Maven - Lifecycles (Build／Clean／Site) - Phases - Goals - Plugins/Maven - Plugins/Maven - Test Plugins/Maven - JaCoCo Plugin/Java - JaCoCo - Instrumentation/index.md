---
title: "Java - JaCoCo - Instrumentation"
created: 2021-02-09T22:57:04.648-06:00
modified: 2021-05-15T12:11:57.365-05:00
parent: "[[Maven - JaCoCo Plugin]]"
children: []
---
# Resources
- official docs: [https://www.jacoco.org/jacoco/trunk/doc/maven.html](https://www.jacoco.org/jacoco/trunk/doc/maven.html)
- some other article: [https://automationrhapsody.com/code-coverage-with-jacoco-offline-instrumentation-with-maven/](https://automationrhapsody.com/code-coverage-with-jacoco-offline-instrumentation-with-maven/)
- code: [https://github.com/SpringBootMarcusChiu/jacoco-example](https://github.com/SpringBootMarcusChiu/jacoco-example)

# Introduction
```xml
<properties>
   <!-- can be overridden with `mvn clean test -Djacoco.skip.instrument=false` -->
   <jacoco.skip.instrument>true</jacoco.skip.instrument>
</properties>
...
<execution>
   <id>jacoco-instrument</id>
   <phase>test</phase>
   <goals>
      <goal>instrument</goal>
   </goals>
   <configuration>
      <skip>${jacoco.skip.instrument}</skip>
   </configuration>
</execution>
```

Instrumentation should not be done on every build. You do not want to release instrumented code, first because this is bad practice and second code will not run unless <em><strong>jacocoagent.jar</strong></em> is in the classpath. This is why instrumentation should be disabled by default with <em><strong>jacoco.skip.instrument=true</strong></em> in <em><strong>pom.xml</strong></em> property, which can be overridden when needed with <em><strong>mvn clean test -Djacoco.skip.instrument=false</strong></em> command. Another option is separate <em><strong>pom-offline.xml</strong></em> file and build with it when needed

The maven application gets packaged to a single JAR file by <em><strong>mvn clean package</strong></em>. If instrumentation gets put in <em><strong>package</strong></em> phase then it is not working, as packaging happens before instrumentation. This is why <em><strong>test</strong></em> phase is the correct for the current example, as <em><strong>package</strong></em> includes <em><strong>test</strong></em> by default

<em><strong>mvn clean package -Djacoco.skip.instrument=false</strong></em> command. You can easily check if given class has been instrumented by opening it with some kind of decompiler. The image below shows instrumented class on the right hand side vs non-instrumented in the left hand side

```merge-table
{
  "rows": [
    [
      {
        "content": "Not Instrumented",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Instrumented",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "mvn clean test\n```\npublic class BookService {\n    public BookService() {\n    }\n\n    public List<String> getBooks() {\n        return BookDB.getAll();\n    }\n}\n```",
      "mvn clean test -Djacoco.skip.instrument=false\n```\npublic class BookService {\n    public BookService() {\n\t\tboolean[] var1 = $jacocoInit();\n\t\tsuper();\n\t\tvar1[0] = true;\n\t}\n\n    public java.util.List<java.lang.String> getBookNames() {\n\t\tboolean[] var1 = $jacocoInit();\n\t\tList var10000 = BookDB.getAll();\n\t\tvar1[1] = true;\n\t\treturn var10000;\n\t}\n}\n```"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Instrumentation Offline vs Online
- offline instrumentation - [https://www.jacoco.org/jacoco/trunk/doc/offline.html](https://www.jacoco.org/jacoco/trunk/doc/offline.html)

> [!tabs]
>
> === Offline Instrumentation
>
> ```
> <project xmlns="http://maven.apache.org/POM/4.0.0" 
> 	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
> 	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
>     <modelVersion>4.0.0</modelVersion>
>     <groupId>org.jacoco</groupId>
>     <artifactId>org.jacoco.examples.maven</artifactId>
>     <version>0.8.8-SNAPSHOT</version>
>     <packaging>jar</packaging>
>     <name>JaCoCo Maven plug-in example with Offline Instrumentation</name>
>     <url>http://www.jacoco.org/jacoco</url>
>     <properties>
>         <maven.compiler.source>1.5</maven.compiler.source>
>         <maven.compiler.target>1.5</maven.compiler.target>
>     </properties>
>     <dependencies>
>         <dependency>
>             <groupId>junit</groupId>
>             <artifactId>junit</artifactId>
>             <version>4.10</version>
>             <scope>test</scope>
>         </dependency>
>         <!--  must be on the classpath  -->
>         <dependency>
>             <groupId>org.jacoco</groupId>
>             <artifactId>org.jacoco.agent</artifactId>
>             <classifier>runtime</classifier>
>             <version>0.8.8-SNAPSHOT</version>
>             <scope>test</scope>
>         </dependency>
>     </dependencies>
>     <build>
>         <plugins>
>             <plugin>
>                 <groupId>org.jacoco</groupId>
>                 <artifactId>jacoco-maven-plugin</artifactId>
>                 <version>0.8.8-SNAPSHOT</version>
>                 <executions>
>                     <execution>
>                         <id>default-instrument</id>
>                         <goals>
>                             <goal>instrument</goal>
>                         </goals>
>                     </execution>
>                     <execution>
>                         <id>default-restore-instrumented-classes</id>
>                         <goals>
>                             <goal>restore-instrumented-classes</goal>
>                         </goals>
>                     </execution>
>                     <execution>
>                         <id>default-report</id>
>                         <goals>
>                             <goal>report</goal>
>                         </goals>
>                     </execution>
>                     <execution>
>                         <id>default-check</id>
>                         <goals>
>                             <goal>check</goal>
>                         </goals>
>                         <configuration>
>                             <rules>
>                                 <rule>
>                                     <element>BUNDLE</element>
>                                     <limits>
>                                         <limit>
>                                             <counter>COMPLEXITY</counter>
>                                             <value>COVEREDRATIO</value>
>                                             <minimum>0.60</minimum>
>                                         </limit>
>                                     </limits>
>                                 </rule>
>                             </rules>
>                         </configuration>
>                     </execution>
>                 </executions>
>             </plugin>
>             <plugin>
>                 <groupId>org.apache.maven.plugins</groupId>
>                 <artifactId>maven-surefire-plugin</artifactId>
>                 <version>2.12.2</version>
>                 <configuration>
>                     <systemPropertyVariables>
>                         <jacoco-agent.destfile>target/jacoco.exec</jacoco-agent.destfile>
>                     </systemPropertyVariables>
>                 </configuration>
>             </plugin>
>         </plugins>
>     </build>
> </project>
> ```
>
> === Online Instrumentation
>
> ```
> <project xmlns="http://maven.apache.org/POM/4.0.0" 
> 	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
> 	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
>     <modelVersion>4.0.0</modelVersion>
>     <groupId>org.jacoco</groupId>
>     <artifactId>org.jacoco.examples.maven</artifactId>
>     <version>0.8.8-SNAPSHOT</version>
>     <packaging>jar</packaging>
>     <name>JaCoCo Maven plug-in example with Online Instrumentation</name>
>     <url>http://www.jacoco.org/jacoco</url>
>     <properties>
>         <maven.compiler.source>1.5</maven.compiler.source>
>         <maven.compiler.target>1.5</maven.compiler.target>
>     </properties>
>     <dependencies>
>         <dependency>
>             <groupId>junit</groupId>
>             <artifactId>junit</artifactId>
>             <version>4.13.1</version>
>             <scope>test</scope>
>         </dependency>
>     </dependencies>
>     <build>
>         <plugins>
>             <plugin>
>                 <groupId>org.jacoco</groupId>
>                 <artifactId>jacoco-maven-plugin</artifactId>
>                 <version>0.8.8-SNAPSHOT</version>
>                 <executions>
>                     <execution>
>                         <id>default-prepare-agent</id>
>                         <goals>
>                             <goal>prepare-agent</goal>
>                         </goals>
>                     </execution>
>                     <execution>
>                         <id>default-report</id>
>                         <goals>
>                             <goal>report</goal>
>                         </goals>
>                     </execution>
>                     <execution>
>                         <id>default-check</id>
>                         <goals>
>                             <goal>check</goal>
>                         </goals>
>                         <configuration>
>                             <rules>
>                                 <rule>
>                                     <element>BUNDLE</element>
>                                     <limits>
>                                         <limit>
>                                             <counter>COMPLEXITY</counter>
>                                             <value>COVEREDRATIO</value>
>                                             <minimum>0.60</minimum>
>                                         </limit>
>                                     </limits>
>                                 </rule>
>                             </rules>
>                         </configuration>
>                     </execution>
>                 </executions>
>             </plugin>
>         </plugins>
>     </build>
> </project>
> ```
