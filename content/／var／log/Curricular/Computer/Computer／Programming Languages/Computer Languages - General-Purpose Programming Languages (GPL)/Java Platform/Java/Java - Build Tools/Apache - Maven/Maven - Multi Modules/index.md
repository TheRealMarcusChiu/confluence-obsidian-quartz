---
title: "Maven - Multi Modules"
created: 2021-03-03T18:09:08.648-06:00
modified: 2021-05-19T19:41:38.805-05:00
parent: "[[Apache - Maven]]"
children: []
---
- [https://maven.apache.org/guides/mini/guide-multiple-modules.html](https://maven.apache.org/guides/mini/guide-multiple-modules.html)
- article: [https://www.baeldung.com/spring-maven-bom](https://www.baeldung.com/spring-maven-bom)
- code: [https://github.com/maven-examples/multi-module](https://github.com/maven-examples/multi-module)

In this tutorial, we'll show how to build a multi-module project with Maven.

First, we'll discuss what's a multi-module project and have a look at the benefits of following this approach. Then we'll set up our sample project. For a good introduction to Maven, check out [this tutorial](https://www.baeldung.com/maven).
## 2. Maven's Multi-Module Project

A multi-module project is built from an aggregator POM that manages a group of submodules. In most cases, the aggregator is located in the project's root directory and must have packaging of type <em>pom</em>.

Now, the submodules are regular Maven projects, and they can be built separately or through the aggregator POM.

By building the project through the aggregator POM, each project that has packaging type different than <em>pom</em> will result in a built archive file.
## 3. Benefits of Using Multi-Modules

The significant advantage of using this approach is that we may reduce duplication.

Let's say we have an application which consists of several modules, let it be a front-end module and a back-end module. Now, we work on both of them and change functionality which affects the two. In that case, without a specialized build tool, we'll have to build both components separately or write a script which would compile the code, run tests and show the results. Then, after we get even more modules in the project, it will become harder to manage and maintain.

Besides, in the real world, projects may need certain Maven plugins to perform various operations during [build lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html), share dependencies and profiles or include other [[Maven - Bill of Materials (BOM)|BOM projects]].

Therefore, when leveraging multi-modules, we can build our application's modules in a single command and if the order matters, Maven will figure this out for us. Also, we can share a vast amount of configuration with other modules.
## 4. Parent POM

Maven supports inheritance in a way that each pom.xml file has the implicit parent POM, it's called Super POM and can be located in the Maven binaries. These two files are merged by Maven and form the Effective POM.

Hence, we can create our own pom.xml file which will serve us as the parent project. Then, we can include there all configuration with dependencies and set this as the parent of our child modules, so they'll inherit from it.

Besides the inheritance, Maven provides the notion of the aggregation. Parent POM that leverages this functionality is called an aggregate POM. Basically, this kind of POM declares its modules explicitly in its pom.xml file.
## 5. Submodules

Submodules or subprojects are regular Maven projects that inherit from parent POM. As we already know, inheritance let us share the configuration and dependencies with submodules. However, if we'd like to build or release our project in one shot, we have to declare our submodules explicitly in parent POM. Ultimately, our parent POM will be the parent as well as the aggregate POM.
## 6. Building the Application

Now that we understand Maven's submodules and hierarchy, let's build a sample application to demonstrate them. We'll use Maven's command line interface to generate our projects.

This app will consist of three modules, that will represent:
- The <em>core </em>part of our domain
- A web <em>service </em>providing some REST APIs
- A <em>webapp </em>containing user-facing web assets of some sort

Since we'll focus on Maven, the implementation of these services will remain undefined.
### 6.1. Generating Parent POM

First, let's create a parent project:
```
mvn archetype:generate -DgroupId=org.baeldung -DartifactId=parent-project
```

Once the parent is generated, we have to open the <em>pom.xml</em> file located in the parent's directory and change the packaging to pom.
```
<packaging>pom</packaging>
```

By setting packaging to pom type, we're declaring that project will serve as a parent or an aggregator – it won't produce further artifacts.

Now, as our aggregator is done, we can generate our submodules.

However, we need to note, this is the place where all the configuration to be shared is located and eventually re-used in child modules. Among other things, we can make use of <em>dependencyManagement</em> or <em>pluginManagement</em> here.
### 6.2. Creating Submodules

As our parent POM was named <em>parent-project</em>, we need to make sure we're in the parent's directory and run <em>generate</em> commands:
```
cd parent-project
mvn archetype:generate -DgroupId=org.baeldung  -DartifactId=core
mvn archetype:generate -DgroupId=org.baeldung  -DartifactId=service
mvn archetype:generate -DgroupId=org.baeldung  -DartifactId=webapp
```

Notice the command used. It is the same as we used for the parent. The thing here is, these modules are regular Maven projects, yet Maven recognized they're nested. When we changed the directory to the <em>parent-project</em>, it found that parent has packaging of type <em>pom</em> and modified both <em>pom.xml </em>files accordingly.

After that, Maven will generate three submodules and modify for us the parent's <em>pom.xml</em> file by adding some tags:
```
<modules>
    <module>core</module>
    <module>service</module>
    <module>webapp</module>
</modules>
```

Now, our parent explicitly declares aggregated modules.

Next, when running <code><em>mvn package</em></code> command in the parent project directory, Maven will build and test all three modules.

Moreover, Maven Reactor will analyze our project and build it in proper order. So, if our <em>webapp</em> module depends on <em>the service </em>module, Maven will build first the <em>service</em>, then the <em>webapp</em>.

After all, if we wish to share all the configuration with our submodules, in their <em>pom.xml</em> files, we'll have to declare the parent:
```
<parent>
    <groupId>org.baeldung</groupId>
    <artifactId>parent-project</artifactId>
    <version>1.0-SNAPSHOT</version>
</parent>
```

We need to note, that submodules can have only one parent. However, we can import many BOMs. More details about the BOM files can be found in [this article](https://www.baeldung.com/spring-maven-bom).
### 6.3. Building the Project

Now we can build all three modules at once. In the parent's project directory, run:
```
mvn package
```

This will build all the modules, we should see the following output of the command:
```
[INFO] Scanning for projects...
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Build Order:
[INFO] parent-project
[INFO] core
[INFO] service
[INFO] webapp
...
[INFO] Reactor Summary:
[INFO] parent-project ..................................... SUCCESS [  0.140 s]
[INFO] core ............................................... SUCCESS [  2.195 s]
[INFO] service ............................................ SUCCESS [  0.767 s]
[INFO] webapp ............................................. SUCCESS [  0.572 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
```

The Reactor lists the <em>parent-project</em>, but as it's <em>pom</em> type it's excluded and the build results in three separate <em>.jar</em> files for all other modules. In that case, build occurs in three of them.
