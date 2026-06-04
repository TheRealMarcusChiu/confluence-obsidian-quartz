---
title: "Java Naming and Directory Interface (JNDI)"
created: 2022-05-27T20:08:29.173-05:00
modified: 2022-05-28T01:21:33.780-05:00
parent: "[[Java - Native Libraries]]"
children:
  - "[[JNDI - Exploitation／Hack／Vulnerability／Injections]]"
  - "[[JNDI - Java Objects Serialization／Serialize／Serializing & Deserialization／Deserialize／Deserializing into Directory]]"
  - "[[JNDI - LDAP Attack Vector (Entry Poisoning)]]"
  - "[[JNDI - ObjectFactory and DirObjectFactory]]"
  - "[[JNDI - com.sun.jndi.ldap.object.trustURLCodebase com.sun.jndi.rmi.object.trustURLCodebase]]"
---
###### Java Naming and Directory Interface (JNDI)
- is a Java API that allows clients to discover and lookup data and objects via a name. These objects can be stored in different naming or directory services, such as:
	- [[Remote Method Invocation (RMI)]]
	- Common Object Request Broker Architecture (CORBA)
	- [[Light-Weight／Lightwieght Directory Access Protocol (LDAP)|Lightweight Directory Access Protocol (LDAP)]]
	- [[Domain Name System／Service (DNS)|Domain Name Service (DNS)]]
	- etc

# JNDI - When is it Used?

The most common use case is to set up a database [[Java - Connection Pooling Frameworks|connection pool]] on a Java EE application server. Any application that's deployed on that server can gain access to the connections they need using the JNDI name <code><font style="color: rgb(122,134,154);">java:comp/env/FooBarPool</font></code> without having to know the details about the connection.

This has several advantages:
1. If you have a deployment sequence where apps move from <code><font style="color: rgb(122,134,154);">devl-\>int-\>test-\>prod</font></code> environments, you can use the same JNDI name in each environment and hide the actual database being used. Applications don't have to change as they migrate between environments.
2. You can minimize the number of folks who need to know the credentials for accessing a production database. Only the Java EE app server needs to know if you use JNDI.

# JNDI - Architecture
![[Java Naming and Directory Interface (JNDI)/jndi-architecture.png]]

The [[Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)|JDK]] includes the <em>Service Provider Interfaces (SPI)</em> for the following naming/directory services:
1. Lightweight Directory Access Protocol (LDAP)
2. Common Object Request Broker Architecture (CORBA) Common Object Services (COS) name service
3. Java Remote Method Invocation (RMI) Registry
4. Domain Name Service (DNS)

Other service providers can be downloaded from the [JNDI page](http://www.oracle.com/technetwork/java/jndi/index.html) or obtained from other vendors.
# JNDI - Code Example

Let's consider a simple Java API, such as <code><font style="color: rgb(122,134,154);">InitialContext.lookup(String name)</font></code>
```
String jndiUrl = "jndi:ldap://ldap-server.com:386"
new javax.naming.InitialContext().lookup(jndiUrl);
```
# JNDI - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# JNDI - Resources
- [https://docs.oracle.com/javase/tutorial/jndi/overview/index.html](https://docs.oracle.com/javase/tutorial/jndi/overview/index.html)
