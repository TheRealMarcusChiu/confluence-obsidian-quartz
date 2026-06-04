---
title: "Java - Simple Logging Facade for Java (SLF4j)"
created: 2021-03-05T10:11:07.305-06:00
modified: 2022-05-18T02:42:58.629-05:00
parent: "[[Java - Logging／Log Frameworks]]"
children:
  - "[[Slf4j - Extended Logger ／ XLogger]]"
---
<strong>Simple Logging Facade for Java (abbreviated SLF4J)</strong>
- acts as a [[Facade Pattern|facade]] for different [[Java - Logging／Log Frameworks|logging frameworks]] (e.g. [[Java - Java Util Logging (JUL／J.U.L.)|java.util.logging]], [[Java - Logback|logback]], [[Java - Log4j|Log4j]])
- offers a generic API making the logging independent of the actual implementation

# 1 - Writing Log Messages
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyClass { 
    Logger log = LoggerFactory.getLogger(this.getClass().getName());
 
    public void myMethod() {
		log.debug("This is a DEBUG message");
        log.info("This is an INFO message");
		log.warning("This is a WARNING message");
		log.error("This is an ERROR message");
		log.fatal("This is a FATAL message");
    } 
}
```

or use [[Java - Lombok|Lombok's]] <code><font style="color: rgb(128,128,0);">@Slf4j</font></code>
```
@Slf4j
public class MyClass { 
 
    public void myMethod() {
  		log.debug("This is a DEBUG message");
        log.info("This is an INFO message");
		log.warning("This is a WARNING message");
		log.error("This is an ERROR message");
		log.fatal("This is a FATAL message"); 
     } 
}
```
# 2 - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# 3 - Resources
- [https://www.baeldung.com/slf4j-with-log4j2-logback](https://www.baeldung.com/slf4j-with-log4j2-logback)
