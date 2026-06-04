---
title: "Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)"
created: 2019-04-06T23:05:46.268-05:00
modified: 2026-01-11T10:17:11.528-06:00
parent: "[[Java]]"
children: []
---
# Java Conceptual Diagram (JDK - JRE - JVM - JSE)
- <strong>[[Java Virtual Machine (JVM)]]</strong> - executes Java bytecodes
- <strong>Java Editions (JE)</strong> - defines a set of capabilities and functionalities
	- <strong>Java Standard Edition (JSE)</strong> - standard stuff
	- <strong>Java Enterprise Edition (JEE)</strong> - more complex stuff for enterprise environments
	- <strong>Java Micro Edition (JME)</strong> - simpler stuff for mobile environments
- <strong>Java Runtime Environment (JRE)</strong> - includes both JVM and a JE
- <strong>Java Development Kit (JDK)</strong> - includes JRE and tools to develop Java programs and a [[Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader|compiler]] to convert Java programs into Java bytecodes

![[Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)/1.png|700]]
# JDK Installation

> [!expand]- manual
> go to [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html) for java development kit downloads

> [!expand]- apt-get
> ```
> sudo apt-get install openjdk-11-jdk
> ```
