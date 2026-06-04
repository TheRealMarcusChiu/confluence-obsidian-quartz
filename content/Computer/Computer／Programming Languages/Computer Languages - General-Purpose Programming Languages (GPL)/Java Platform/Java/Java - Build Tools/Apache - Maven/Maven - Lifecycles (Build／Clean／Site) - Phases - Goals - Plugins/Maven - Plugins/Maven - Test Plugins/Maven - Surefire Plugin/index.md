---
title: "Maven - Surefire Plugin"
created: 2020-12-14T20:59:44.073-06:00
modified: 2021-03-06T09:21:41.097-06:00
parent: "[[Maven - Test Plugins]]"
children: []
---
surefire
- runs tests of a project using the surefire plugin
- by default, this plugin generates XML reports in the directory target/surefire-reports
- this plugin has only one goal, test. This goal is bound to the test phase of the default build lifecycle, and the command mvn test will execute it

By default, surefire automatically includes all test classes whose name starts with Test, or ends with Test, Tests or TestCase

We can change this configuration using the <em>excludes</em> and <em>includes</em> parameters, however:
```xml
    <build>
      <plugins>
<!--         maven by default will run test ending with *Test.java with `mvn test` command -->
         <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <configuration>
               <excludes>
                  <exclude>DataTest.java</exclude>
               </excludes>
               <includes>
                  <include>DataCheck.java</include>
               </includes>
            </configuration>
         </plugin>
      <plugins>
    <build>
```

With this configuration, test cases in the <em>DataCheck</em> class are executed while the ones in <em>DataTest</em> aren't
