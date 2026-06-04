---
title: "mvn"
created: 2019-03-15T22:08:31.954-05:00
modified: 2022-01-29T19:44:51.945-06:00
parent: "[[Maven - Commands]]"
children:
  - "[[mvn - 3 ways to run Java main from Maven]]"
  - "[[mvn - Creating New Project]]"
  - "[[mvn - Passing pom.xml]]"
  - "[[mvn - Where is Maven local repository？]]"
---
<strong>Apache Maven</strong> is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.

[http://tutorials.jenkov.com/maven/maven-tutorial.html](http://tutorials.jenkov.com/maven/maven-tutorial.html)
# Installation

> [!expand]- manual
> 1. go to [http://maven.apache.org/](http://maven.apache.org/) and download binary

> [!expand]- homebrew
> <strong>1. install maven using brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install maven</code></span>
>
> <strong>2. verify maven was installed</strong>
> <span style="white-space: pre-wrap"><code>  mvn -v</code></span>
>
> <strong>3. a .m2 folder should be created in /Users/{name}/.m2</strong> (.m2 is the Maven settings/home directory)
> <span style="white-space: pre-wrap"><code>  a repository folder should also be inside the m2 folder </code><br><code>  this is where all the dependencies/libraries are added</code></span>

> [!expand]- apt-get
> <strong>0. search package</strong>
> <span style="white-space: pre-wrap"><code>  apt-cache search maven</code></span>
>
> <strong>1. install</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install maven</code></span>
>
> <strong>2. verification</strong>
> <span style="white-space: pre-wrap"><code>  mvn -version</code></span>
# Commands
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
