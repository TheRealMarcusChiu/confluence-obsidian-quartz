---
title: "JNDI - Java Objects Serialization／Serialize／Serializing & Deserialization／Deserialize／Deserializing into Directory"
created: 2022-05-28T02:14:25.598-05:00
modified: 2022-05-28T03:19:15.794-05:00
parent: "[[Java Naming and Directory Interface (JNDI)]]"
children:
  - "[[JNDI - Serialization & Deserialization of a Java Object - Referenceable Reference]]"
---
# Serialization/Serialize/Serializing Java Objects to Directory

Applications and services can use the directory in different ways to store and locate objects:
- Store (a copy of) the object itself
- Store a reference to an object
- Store attributes that describe the object

Programmatically, all applications use one of the following methods when storing objects in the directory:
- [Context.bind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/Context.html#bind-javax.naming.Name-java.lang.Object-)
- [DirContext.bind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/directory/DirContext.html#bind-javax.naming.Name-java.lang.Object-javax.naming.directory.Attributes-)
- [Context.rebind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/Context.html#rebind-javax.naming.Name-java.lang.Object-) - does not work against Active Directory (see below)
- [DirContext.rebind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/directory/DirContext.html#rebind-javax.naming.Name-java.lang.Object-javax.naming.directory.Attributes-) - does not work against Active Directory (see below)

For storing the below objects types, please refer to the JNDI Tutorial:
- [[JNDI - Serialization & Deserialization of a Java Object - Referenceable Reference|Referenceable objects and JNDI References]] - the bind() examples in the [Add, Replace or Remove a Binding](https://docs.oracle.com/javase/tutorial/jndi/ops/bind.html) lesson use Referenceable objects.
- [Objects with attributes (DirContext)](https://docs.oracle.com/javase/jndi/tutorial/objects/storing/dircontext.html)
- [RMI (Java Remote Method Invocation) objects (including those that use IIOP)](https://docs.oracle.com/javase/jndi/tutorial/objects/storing/remote.html)
- [CORBA objects](https://docs.oracle.com/javase/jndi/tutorial/objects/storing/corba.html)

# Deserialization/Deserialize/Deserializing Java Objects From Directory
Programmatically, all applications use one of the following methods to get a copy of the object back from the directory:
- <code>[lookup()](https://docs.oracle.com/javase/8/docs/api/javax/naming/Context.html#lookup-javax.naming.Name-)</code> -
- <code>[list()](https://docs.oracle.com/javase/8/docs/api/javax/naming/Context.html#list-javax.naming.Name-)</code> - lists a Context or its subtree
- [<code>search()</code>](https://docs.oracle.com/javase/8/docs/api/javax/naming/directory/DirContext.html#search-javax.naming.Name-) - searches a Context or its subtree

In all of these cases,<em> [[JNDI - ObjectFactory and DirObjectFactory|object factories]]</em> might be involved
# Windows Active Directory
[Context.rebind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/Context.html#rebind-javax.naming.Name-java.lang.Object-) and [DirContext.rebind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/directory/DirContext.html#rebind-javax.naming.Name-java.lang.Object-javax.naming.directory.Attributes-) do not work against [[Active Directory (AD) - AD Directory Services (ADDS)|Active Directory]] because these methods work by reading the attributes of the entry to be updated, removing the entry, and then adding a new entry that contains the modified attributes. Active Directory returns some attributes that cannot be set by the user, causing the final addition step to fail. The workaround for this problem is to use [DirContext.getAttributes()](https://docs.oracle.com/javase/8/docs/api/javax/naming/directory/DirContext.html#getAttributes-javax.naming.Name-) to obtain and save the attributes that you want to keep. Then, remove the entry and add it back with the saved attributes (and any others that you want to add) using [DirContext.bind()](https://docs.oracle.com/javase/8/docs/api/javax/naming/directory/DirContext.html#bind-javax.naming.Name-java.lang.Object-javax.naming.directory.Attributes-).
