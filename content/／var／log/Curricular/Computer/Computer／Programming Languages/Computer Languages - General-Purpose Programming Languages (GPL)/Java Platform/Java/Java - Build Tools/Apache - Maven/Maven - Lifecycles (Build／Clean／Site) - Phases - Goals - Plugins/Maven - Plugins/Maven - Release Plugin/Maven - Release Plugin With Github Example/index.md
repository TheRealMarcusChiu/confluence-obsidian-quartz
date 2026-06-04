---
title: "Maven - Release Plugin With Github Example"
created: 2021-05-26T23:19:43.783-05:00
modified: 2021-05-26T23:26:43.201-05:00
parent: "[[Maven - Release Plugin]]"
children: []
---
with the following code snippets below, a release process is of the following commands:
- mvn release:prepare
- mvn release:perform

### Code Snippets
```xml
<scm>
    <url>https://github.com/maven-examples/maven-master-example</url>
    <connection>scm:git:git@github.com:maven-examples/maven-master-example.git</connection>
    <developerConnection>scm:git:git@github.com:maven-examples/maven-master-example.git</developerConnection>
    <tag>HEAD</tag>
</scm>
<distributionManagement>
    <repository>
        <id>github</id>
        <name>Maven Master Example</name>
        <url>https://maven.pkg.github.com/maven-examples/maven-master-example</url>
    </repository>
</distributionManagement>
```
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub Apache Maven Packages</name>
          <url>https://maven.pkg.github.com/therealmarcuschiu/maven-example</url>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>marcuschiu9@gmail.com</username>
      <password>ghp_SOMETOKENHEREFROMGITHUB</password>
    </server>
  </servers>
</settings>
```
