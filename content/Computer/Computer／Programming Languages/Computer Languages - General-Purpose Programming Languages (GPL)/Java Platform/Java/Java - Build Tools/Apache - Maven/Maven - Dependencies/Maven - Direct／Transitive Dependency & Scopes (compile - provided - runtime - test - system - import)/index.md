---
title: "Maven - Direct／Transitive Dependency & Scopes (compile - provided - runtime - test - system - import)"
created: 2020-10-22T17:11:42.958-05:00
modified: 2020-12-06T11:15:27.806-06:00
parent: "[[Maven - Dependencies]]"
children: []
---
# <strong>Direct Dependency & Transitive Dependency</strong>

There're two types of dependencies in Maven:
- <em>direct</em>
- <em>transitive</em>

<strong>Direct dependencies</strong> are the ones that are explicitly included in the project. These can be included in the project using <code><font style="color: rgb(128,128,128);"><em>\<<font style="color: rgb(51,102,255);">dependency</font>\></em></font></code> tags:
```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
```

<strong>Transitive dependencies</strong>, on the other hand, are dependencies required by our direct dependencies. Required transitive dependencies are automatically included in our project by Maven.

We can list all dependencies including transitive dependencies in the project using:
```
mvn dependency:tree
```
# <strong>Dependency Scopes</strong>

the scope element refers to the classpath of the task at hand (compiling and runtime, testing, etc.) as well as how to limit the transitivity of a dependency

maven has 6 default dependency scopes
> [!tabs]
>
> === compile
>
> - default scope when no other scope is provided
> - dependencies with this scope are available on all classpaths
> - dependencies with this scope are transitive
>
> ```
> <dependency>
>     <groupId>commons-lang</groupId>
>     <artifactId>commons-lang</artifactId>
>     <version>2.6</version>
> </dependency>
> ```
>
> === provided
>
> - used to mark dependencies that should be provided at runtime by JDK or a container
> - dependencies with this scope are available only at compile and test classpaths (not runtime)
> - dependencies with this scope are NOT transitive
>
> A good use case for this scope would be a web application deployed in some container, where the container already provides some libraries itself.
>
> For example, a web server that already provides the Servlet API at runtime, thus in our project, those dependencies can be defined with the <em>provided</em> scope
> ```
> <dependency>
>     <groupId>javax.servlet</groupId>
>     <artifactId>servlet-api</artifactId>
>     <version>2.5</version>
>     <scope>provided</scope>
> </dependency>
> ```
>
> === runtime
>
> - indicates that the dependency is not required for compilation, but is for execution
> - dependencies with this scope are available only at runtime and test classpaths (not compile)
>
> A good example of dependencies that should use the runtime scope is a JDBC driver
> ```
> <dependency>
>     <groupId>mysql</groupId>
>     <artifactId>mysql-connector-java</artifactId>
>     <version>6.0.6</version>
>     <scope>runtime</scope>
> </dependency>
> ```
>
> === test
>
> - indicates that the dependency is not required at standard runtime of the application, but is used only for test purposes
> - dependencies with this scope are only available for test-compilation and test-execution classpaths
> - dependencies with this scope are NOT transitive
>
> The standard use case for this scope is adding test library like JUnit to our application:
> ```
> <dependency>
>     <groupId>junit</groupId>
>     <artifactId>junit</artifactId>
>     <version>4.12</version>
>     <scope>test</scope>
> </dependency>
> ```
>
> === system
>
> - system scope is much similar to the provided scope
> - the main difference between those two scopes is that <em>system</em> requires us to directly point to specific jar on the system
>
> The important thing to remember is that building the project with <em>system</em> scope dependencies may fail on different machines if dependencies aren't present or are located in a different place than the one <em>systemPath</em> points to:
> ```
> <dependency>
>     <groupId>com.marcuschiu</groupId>
>     <artifactId>custom-dependency</artifactId>
>     <version>1.3.2</version>
>     <scope>system</scope>
>     <systemPath>${project.basedir}/libs/custom-dependency-1.3.2.jar</systemPath>
> </dependency>
> ```
>
> === import
>
> - This scope was added in Maven 2.0.9 and <strong>it's only available for the dependency type <em>pom</em></strong>
> - <em>Import</em> indicates that this dependency should be replaced with all effective dependencies declared in it's POM
>
> ```
> <dependency>
>     <groupId>com.marcuschiu</groupId>
>     <artifactId>custom-project</artifactId>
>     <version>1.3.2</version>
>     <type>pom</type>
>     <scope>import</scope>
> </dependency>
> ```

# <strong>Scope & Transitivity</strong>

a project's dependency that is marked:
- <strong><code><font style="color: rgb(128,128,128);"><em>compile</em></font></code></strong> scope, then:
	- all dependencies with <em><code><font style="color: rgb(128,128,128);">runtime</font></code> scope </em>will be pulled in with <code><font style="color: rgb(128,128,128);"><em>runtime</em></font></code> scope in the project
	- all dependencies with <em><code><font style="color: rgb(128,128,128);">compile</font></code> </em>scope will be pulled in with <code><font style="color: rgb(128,128,128);"><em>compile</em></font></code> scope in the project
- <strong><code><font style="color: rgb(128,128,128);"><em>provided</em></font></code></strong> scope, then both <em><code><font style="color: rgb(128,128,128);">runtime</font></code> </em>and <code><font style="color: rgb(128,128,128);"><em>compile</em></font></code> scope dependencies will be pulled in with the <code><font style="color: rgb(128,128,128);"><em>provided</em></font></code> scope in the project
- <strong><code><font style="color: rgb(128,128,128);"><em>test</em></font></code></strong> scope, then both <em><code><font style="color: rgb(128,128,128);">runtime</font></code> </em>and <em><code><font style="color: rgb(128,128,128);">compile</font></code> </em>scope transitive dependencies will be pulled in with the <em><code><font style="color: rgb(128,128,128);">test</font></code> </em>scope in the project
- <strong><code><font style="color: rgb(128,128,128);"><em>runtime</em></font></code></strong> scope, then both <em><code><font style="color: rgb(128,128,128);">runtime</font></code> </em>and <code><font style="color: rgb(128,128,128);"><em>compile</em></font></code> scope transitive dependencies will be pulled in with the <em><code><font style="color: rgb(128,128,128);">runtime</font></code> </em>scope in the project

NOTE: a project with dependencies that contains dependencies with scopes <code><font style="color: rgb(128,128,128);"><em>provided</em></font></code> and <em><code><font style="color: rgb(128,128,128);">test</font></code> </em>will never be included in the project
