---
title: "Maven - DependencyManagement vs Dependencies"
created: 2020-12-05T22:42:23.316-06:00
modified: 2020-12-06T11:24:43.623-06:00
parent: "[[Maven - Dependencies]]"
children: []
---
In the parent POM, the main difference between the <strong><code>\<dependencies\></code></strong> and <strong><code>\<dependencyManagement\></code></strong> is this:
- Artifacts specified in the <strong><code>\<dependencies\></code></strong> section, will ALWAYS be included as a dependency of the child module(s)
- Artifacts specified in the <strong><code>\<dependencyManagement\></code></strong> section, will ONLY be included in the child module if they were also specified in the <strong><code>\<dependencies\></code></strong> section of the child module itself

### Example
```xml
<!-- ParentProj pom -->
<project>
  <dependencyManagement>
    <dependencies>
      <dependency> <!-- not much benefit defining alpha here, as we only use in 1 child, so optional -->
        <groupId>alpha</groupId>
        <artifactId>alpha</artifactId>
        <version>1.0</version>
        <exclusions>
          <exclusion>
            <groupId>zebra</groupId>
            <artifactId>zebra</artifactId>
          </exclusion>
        </exclusions>
      </dependency>
      <dependency>
        <groupId>charlie</groupId> <!-- not much benefit defining charlie here, so optional -->
        <artifactId>charlie</artifactId>
        <version>1.0</version>
        <type>war</type>
        <scope>runtime</scope>
      </dependency>
      <dependency> <!-- defining betaShared here makes a lot of sense -->
        <groupId>betaShared</groupId>
        <artifactId>betaShared</artifactId>
        <version>1.0</version>
        <type>bar</type>
        <scope>runtime</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
</project>

<!-- Child Proj1 pom -->
<project>
  <dependencies>
    <dependency>
      <groupId>alpha</groupId>
      <artifactId>alpha</artifactId>  <!-- jar type IS DEFAULT, so no need to specify in child projects -->
    </dependency>
    <dependency>
      <groupId>betaShared</groupId>
      <artifactId>betaShared</artifactId>
      <type>bar</type> <!-- This is not a jar dependency, so we must specify type. -->
    </dependency>
  </dependencies>
</project>

<!-- Child Proj2 -->
<project>
  <dependencies>
    <dependency>
      <groupId>charlie</groupId>
      <artifactId>charlie</artifactId>
      <type>war</type> <!-- This is not a jar dependency, so we must specify type. -->
    </dependency>
    <dependency>
      <groupId>betaShared</groupId> 
      <artifactId>betaShared</artifactId> 
      <type>bar</type> <!-- This is not a jar dependency, so we must specify type. -->
    </dependency>
  </dependencies>
</project>
```
