---
title: "Maven - ＜optional＞"
created: 2021-03-03T18:05:59.035-06:00
modified: 2021-03-11T10:38:54.977-06:00
parent: "[[Maven - Dependencies]]"
children: []
---
article: [https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html](https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html)

Optional dependencies are used when it's not possible (for whatever reason) to split a project into sub-modules. The idea is that some of the dependencies are only used for certain features in the project and will not be needed if that feature isn't used. Ideally, such a feature would be split into a sub-module that depends on the core functionality project. This new subproject would have only non-optional dependencies, since you'd need them all if you decided to use the subproject's functionality.

However, since the project cannot be split up (again, for whatever reason), these dependencies are declared optional. If a user wants to use functionality related to an optional dependency, they have to redeclare that optional dependency in their own project. This is not the clearest way to handle this situation, but both optional dependencies and dependency exclusions are stop-gap solutions.
### Why use optional dependencies?

Optional dependencies save space and memory. They prevent problematic jars that violate a license agreement or cause classpath issues from being bundled into a WAR, EAR, fat jar, or the like.
### How do I use the optional tag?

A dependency is declared optional by setting the \<optional\> element to true in its dependency declaration:
```
<project>
  ...
  <dependencies>
    <!-- declare the dependency to be set as optional -->
    <dependency>
      <groupId>sample.ProjectA</groupId>
      <artifactId>Project-A</artifactId>
      <version>1.0</version>
      <scope>compile</scope>
      <optional>true</optional> <!-- value will be true or false only -->
    </dependency>
  </dependencies>
</project>
```
### How do optional dependencies work?
- <font style="color: rgb(102,0,102);">Project</font><font style="color: rgb(102,102,0);">-</font>A → <font style="color: rgb(102,0,102);">Project</font><font style="color: rgb(102,102,0);">-</font>B

The diagram above says that Project-A depends on Project-B. When A declares B as an optional dependency in its POM, this relationship remains unchanged. It's just like a normal build where Project-B will be added in Project-A's classpath.
- <font style="color: rgb(102,0,102);">Project</font><font style="color: rgb(102,102,0);">-</font>X → <font style="color: rgb(102,0,102);">Project</font><font style="color: rgb(102,102,0);">-</font>A

When another project (Project-X) declares Project-A as a dependency in its POM, the optional nature of the dependency takes effect. Project-B is not included in the classpath of Project-X. You need to declare it directly in the POM of Project X for B to be included in X's classpath.
### Example

Suppose there is a project named <em>X2</em> that has similar functionality to <em>Hibernate</em>. It supports many databases such as MySQL, PostgreSQL, and several versions of Oracle. Each supported database requires an additional dependency on a driver jar. All of these dependencies are needed at compile time to build X2. However your project only uses one specific database and doesn't need drivers for the others. X2 can declare these dependencies as optional, so that when your project declares X2 as a direct dependency in its POM, all the drivers supported by the X2 are not automatically included in your project's classpath. Your project will have to include an explicit dependency on the specific driver for the one database it does use.
