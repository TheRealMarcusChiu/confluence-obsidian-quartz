---
title: "Java - Spring Boot - Log4j2"
created: 2022-05-18T02:22:16.025-05:00
modified: 2022-05-18T02:59:44.791-05:00
parent: "[[Java - Spring Boot - Logging／Log]]"
children: []
---
# Dependencies

Enabling the Spring Boot application to use [[Java - Log4j2|Log4j2]]
```
<!-- Exclude Spring Boot's Default Logging -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- Add Log4j2 Dependency -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```
# Log4j Configuration

Add to classpath (or into <code><font style="color: rgb(122,134,154);">src/main/resources</font></code> folder) one of the following files:
- <code><font style="color: rgb(122,134,154);">log4j2-spring.xml</font></code>
- <code><font style="color: rgb(122,134,154);">log4j2.xml</font></code>
- <code><font style="color: rgb(122,134,154);">log4j2.properties</font></code>

See [[Java - Log4j2|Log4j2]] for more configurations

Example <code><font style="color: rgb(122,134,154);">log4j-spring.xml</font></code> file

> [!expand]- Click here to expand...
> ```
> <?xml version="1.0" encoding="UTF-8"?>
> <Configuration>
>     <Appenders>
>         <Console name="Console" target="SYSTEM_OUT">
>             <PatternLayout
>                 pattern="%style{%d{ISO8601}}{black} %highlight{%-5level }[%style{%t}{bright,blue}] %style{%C{1.}}{bright,yellow}: %msg%n%throwable" />
>         </Console>
>
>         <RollingFile name="RollingFile"
>             fileName="./logs/spring-boot-logger-log4j2.log"
>             filePattern="./logs/$${date:yyyy-MM}/spring-boot-logger-log4j2-%d{-dd-MMMM-yyyy}-%i.log.gz">
>             <PatternLayout>
>                 <pattern>%d %p %C{1.} [%t] %m%n</pattern>
>             </PatternLayout>
>             <Policies>
>                 <!-- rollover on startup, daily and when the file reaches 
>                     10 MegaBytes -->
>                 <OnStartupTriggeringPolicy />
>                 <SizeBasedTriggeringPolicy
>                     size="10 MB" />
>                 <TimeBasedTriggeringPolicy />
>             </Policies>
>         </RollingFile>
>     </Appenders>
>
>     <Loggers>
>         <!-- LOG everything at INFO level -->
>         <Root level="info">
>             <AppenderRef ref="Console" />
>             <AppenderRef ref="RollingFile" />
>         </Root>
>
>         <!-- LOG "com.baeldung*" at TRACE level -->
>         <Logger name="com.baeldung" level="trace"></Logger>
>     </Loggers>
>
> </Configuration>
> ```
# Spring Boot Log4j2 Demo - Using Slf4j

> [!expand]- Click here to expand...
> Using Log4j2 via [[Java - Simple Logging Facade for Java (SLF4j)|Slf4j]]
> ```
> import org.slf4j.Logger;
> import org.slf4j.LoggerFactory;
>
> @SpringBootApplication
> public class Application extends SpringBootServletInitializer {
>
>     private static final Logger log = LoggerFactory.getLogger(Application.class);
>
>     public static void main(String[] args) {
>         ApplicationContext ctx = SpringApplication.run(Application.class, args);
>
>         log.info("Info level log message");
>         log.debug("Debug level log message");
>         log.error("Error level log message");
>     }
> }
> ```
>
> see output
> ```
> 2018-06-01T13:55:42.506+0530 INFO Info level log message
> 2018-06-01T13:55:42.506+0530 DEBUG Debug level log message
> 2018-06-01T13:55:42.506+0530 ERROR Error level log message
> ```
# Spring Boot Log4j2 Demo - Using Log4j2 Directly

> [!expand]- Click here to expand...
> Using Log4j2 directly
> ```
> import org.apache.logging.log4j.LogManager;
> import org.apache.logging.log4j.Logger;
>  
> @SpringBootApplication
> public class Application extends SpringBootServletInitializer {
>  
>     private static final Logger log = LogManager.getLogger(Application.class);
>  
>     public static void main(String[] args) {
>         ApplicationContext ctx = SpringApplication.run(Application.class, args);
>          
>         log.info("Info level log message");
>         log.debug("Debug level log message");
>         log.error("Error level log message");
>     }
> }
> ```
