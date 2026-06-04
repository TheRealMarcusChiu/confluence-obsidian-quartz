---
title: "Java - Instrumentation API & Java Agents"
created: 2021-03-18T19:50:58.679-05:00
modified: 2021-10-27T02:49:32.431-05:00
parent: "[[Java - lang - instrument]]"
children:
  - "[[Java - Java Agent (Creating Agent)]]"
  - "[[Java - Java Agent (Loading Agent)]]"
---
- <strong>[Instrumentation API](https://docs.oracle.com/javase/7/docs/api/java/lang/instrument/Instrumentation.html)</strong> - provides the ability to add byte-code to existing compiled Java classes

# What is a Java Agent
- In general, a java agent is just a specially crafted jar file
- It utilizes the Instrumentation API that the JVM provides to alter existing byte-code that is loaded in a [[Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)|JVM]]

For an agent to work, we need to define two methods:
- <strong><em>premain</em></strong> – will statically load the agent using <code><font style="color: rgb(122,134,154);">-javaagent</font></code> parameter at JVM startup
- <strong><em>agentmain</em></strong> – will dynamically load the agent into the JVM using the [Java Attach API](https://docs.oracle.com/javase/7/docs/jdk/api/attach/spec/com/sun/tools/attach/package-summary.html)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://www.baeldung.com/java-instrumentation](https://www.baeldung.com/java-instrumentation)
