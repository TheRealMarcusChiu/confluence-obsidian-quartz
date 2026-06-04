---
title: "Java - Log4j"
created: 2021-04-07T09:10:35.971-05:00
modified: 2022-05-18T02:40:42.901-05:00
parent: "[[Java - Logging／Log Frameworks]]"
children: []
---
# Log4j - Dependencies
```
<dependency> 
    <groupId>log4j</groupId> 
    <artifactId>log4j</artifactId> 
    <version>1.2.17</version> 
</dependency>
```

doesn't support [[Java - Simple Logging Facade for Java (SLF4j)|Slf4j]] natively, so you will need to add the following:
```
<dependency> 
    <groupId>org.slf4j</groupId> 
    <artifactId>slf4j-log4j12</artifactId> 
</dependency>
```
# Log4j - Configuration
define your appender and logger with their log levels in the <code><font style="color: rgb(122,134,154);">log4j.xml</font></code> or <code><font style="color: rgb(122,134,154);">log4j.properties</font></code> in <code><font style="color: rgb(122,134,154);">src/main/resources</font></code>
- appender writes the log messages to a destination such as a file or database
- logger and level defines the granularity of log messages that are written to the log file

# TODO
- [https://stackify.com/compare-java-logging-frameworks/](https://stackify.com/compare-java-logging-frameworks/)
