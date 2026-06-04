---
title: "Java - Servlet API／Specification - Servlet Containers - Application Servers"
created: 2019-03-15T22:30:17.523-05:00
modified: 2024-08-14T18:12:53.457-05:00
parent: "[[Java]]"
children:
  - "[[Apache Tomcat]]"
  - "[[Eclipse Jetty]]"
  - "[[JBoss Undertow]]"
  - "[[Java - (ContextLoaderListener - DispatcherServlet - ApplicationContext - ServletContext - ServletConfig)]]"
  - "[[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)]]"
  - "[[Netty]]"
---
###### Servlet
````excerpt
- is a Java API running on the server machine which can intercept the requests made by the client and can generate/send a response accordingly
- In order to run Servlets, you need a <strong>servlet container</strong>
````
^excerpt

# Servlet API/Specification

see: [[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Java - Servlet API/Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)]]
# Servlet Containers

There are several servlet containers:
- [[Apache Tomcat]]
- [[Eclipse Jetty]]
- [[JBoss Undertow]]
- WebLogic
- GlassFish
- WebSphere

[Which Java Application Server Should I Use?](https://zeroturnaround.com/rebellabs/the-great-java-application-server-debate-with-tomcat-jboss-glassfish-jetty-and-liberty-profile/)
# Application Servers

There are also Java EE application servers which in turn also contain a servlet container besides other Java EE APIs such as JSF, JPA, EJB, etc. See also [What exactly is Java EE?](https://stackoverflow.com/questions/7295096/what-exactly-is-java-ee)
- [JBoss WildFly](http://wildfly.org/)
- [Apache TomEE](https://tomee.apache.org/)
- [IBM WebSphere Liberty](https://developer.ibm.com/wasdev/websphere-liberty/)
- [Payara](https://payara.fish/)
- [Eclipse GlassFish](https://glassfish.java.net/)

# Resources
- [https://stackoverflow.com/tags/servlets/info](https://stackoverflow.com/tags/servlets/info)
