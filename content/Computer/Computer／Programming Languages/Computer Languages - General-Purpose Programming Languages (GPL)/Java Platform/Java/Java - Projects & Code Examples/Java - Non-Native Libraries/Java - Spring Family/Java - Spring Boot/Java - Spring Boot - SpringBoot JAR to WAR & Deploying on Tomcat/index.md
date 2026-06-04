---
title: "Java - Spring Boot - SpringBoot JAR to WAR & Deploying on Tomcat"
created: 2020-10-22T16:47:29.292-05:00
modified: 2022-08-11T02:29:27.771-05:00
parent: "[[Java - Spring Boot]]"
children: []
---
- code: [https://github.com/SpringBootMarcusChiu/spring-boot-war-example](https://github.com/SpringBootMarcusChiu/spring-boot-war-example)

# SpringBoot JAR to WAR

add the following line to the <code><font style="color: rgb(128,128,128);">pom.xml</font></code>
```xml
<packaging>war</packaging>
```

then add the following within the dependencies
```xml
<dependencies>
   ...
   <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
      <scope>provided</scope>
   </dependency>
   ...
```

<code><font style="color: rgb(128,128,128);">\<<font style="color: rgb(51,102,255);">scope</font>\>provided\</<font style="color: rgb(51,102,255);">scope</font>\></font></code> means the dependency:
- are provided at runtime by JDK or a container
- are available only at compile-time and in the test classpath of the project

# Running SpringBoot's Embedded Tomcat Servlet

even though the pom.xml specifies a war package, we can still compile and run the SpringBoot application with it's embedded tomcat servlet
1. <code><font style="color: rgb(0,128,0);">mvn clean compile</font></code>
2. <code><font style="color: rgb(0,128,0);">mvn spring-boot:run</font></code>

# Running Packaged WAR on External Tomcat Servlet

now let's package the SpringBoot application as a .war file and deploy it on an external [[Apache Tomcat|Tomcat servlet]]
1. <code><font style="color: rgb(0,128,0);">mvn clean package</font></code>
2. retrieve <code><font style="color: rgb(128,128,128);">spring-boot-war-example.war</font></code> file from <code><font style="color: rgb(128,128,128);">target/</font></code> directory
3. place it into tomcat's <code><font style="color: rgb(128,128,128);">libexec/webapps</font></code>
4. start tomcat server
5. open browser to [http://localhost:8080/spring-boot-war-example](http://localhost:8080/spring-boot-war-example)
6. if you see <code><font style="color: rgb(128,128,128);">hello world</font></code> then success!
