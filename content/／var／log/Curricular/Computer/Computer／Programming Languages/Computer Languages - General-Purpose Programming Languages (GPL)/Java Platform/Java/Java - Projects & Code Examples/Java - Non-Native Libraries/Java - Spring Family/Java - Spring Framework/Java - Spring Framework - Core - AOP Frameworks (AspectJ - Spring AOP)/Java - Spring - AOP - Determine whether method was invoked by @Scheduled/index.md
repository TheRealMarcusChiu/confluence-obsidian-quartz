---
title: "Java - Spring - AOP - Determine whether method was invoked by @Scheduled"
created: 2020-12-21T22:45:04.715-06:00
modified: 2020-12-21T22:47:34.313-06:00
parent: "[[Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)]]"
children: []
---
see: [https://stackoverflow.com/questions/65397019/spring-aop-determine-whether-method-was-invoked-by-scheduled/65402730#65402730](https://stackoverflow.com/questions/65397019/spring-aop-determine-whether-method-was-invoked-by-scheduled/65402730#65402730)
```
package de.scrum_master.spring.q65397019;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {}
```
```
package de.scrum_master.spring.q65397019;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Aspect
@Component
public class MyAspect {
  @Around("@annotation(myAnnotation)")
  public Object advice2(ProceedingJoinPoint joinPoint, MyAnnotation myAnnotation) throws Throwable {
    if (
      Arrays.stream(new Exception().getStackTrace())
        .map(StackTraceElement::toString)
        .anyMatch(string -> string.contains("scheduling.support.ScheduledMethodRunnable.run("))
    )
      System.out.println(joinPoint + " -> scheduled");
    else
      System.out.println(joinPoint + " -> normal");
    return joinPoint.proceed();
  }
}
```
```
package de.scrum_master.spring.q65397019;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {
  @Scheduled(fixedRate = 1000)
//  @Async
  @MyAnnotation
  public void doSomething() {}
}
```
```
package de.scrum_master.spring.q65397019;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@Configuration
@EnableScheduling
@EnableAsync
public class DemoApplication {
  public static void main(String[] args) throws InterruptedException {
    try (ConfigurableApplicationContext appContext = SpringApplication.run(DemoApplication.class, args)) {
      doStuff(appContext);
    }
  }

  private static void doStuff(ConfigurableApplicationContext appContext) throws InterruptedException {
    MyComponent myComponent = appContext.getBean(MyComponent.class);
    myComponent.doSomething();
    Thread.sleep(1000);
    myComponent.doSomething();
  }
}
```

this will print something like
```
(...)
2020-12-22 10:00:59.372  INFO 1620 --- [           main] o.s.s.c.ThreadPoolTaskScheduler          : Initializing ExecutorService 'taskScheduler'
execution(void de.scrum_master.spring.q65397019.MyComponent.doSomething()) -> scheduled
2020-12-22 10:00:59.456  INFO 1620 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2020-12-22 10:00:59.456  INFO 1620 --- [           main] d.s.spring.q65397019.DemoApplication     : Started DemoApplication in 6.534 seconds (JVM running for 8.329)
execution(void de.scrum_master.spring.q65397019.MyComponent.doSomething()) -> normal
execution(void de.scrum_master.spring.q65397019.MyComponent.doSomething()) -> scheduled
execution(void de.scrum_master.spring.q65397019.MyComponent.doSomething()) -> normal
2020-12-22 10:01:00.475  INFO 1620 --- [           main] o.s.s.c.ThreadPoolTaskScheduler          : Shutting down ExecutorService 'taskScheduler'
2020-12-22 10:01:00.477  INFO 1620 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Shutting down ExecutorService 'applicationTaskExecutor'
(...)
```

On Java 9+ you could use the stack walking API which would be more efficient than creating full stack traces from exception instances or querying them from the currently running thread.

<strong>Caveat:</strong> If you also annotate your scheduled method with <code>@Async</code>, then this will not work anymore because then the asynchronously running method does not have a stack trace in which you could identify that it was triggered by a <code>ScheduledMethodRunnable</code> or an application class.
