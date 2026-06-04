---
title: "Java - Spring - ApplicationContextInitializer - How to Register a Custom ApplicationContextInitializer"
created: 2021-06-02T20:12:26.299-05:00
modified: 2021-07-04T22:54:29.077-05:00
parent: "[[Java - Spring - ApplicationContext - ApplicationContextInitializer]]"
children: []
---
# Via META-INF/spring.factories

You can register a [[Java - Spring - ApplicationContext - ApplicationContextInitializer|ApplicationContextInitializer]] in <code>META-INF/spring.factories</code>
```
org.springframework.context.ApplicationContextInitializer=com.example.YourInitializer
```
# Via SpringApplication

You can also add them on your <code>SpringApplication</code> before running it
```
application.addInitializers(new YourInitializer());
application.run(args);
```

Or on the builder
```
new SpringApplicationBuilder(YourApp.class)
    .initializers(new YourInitializer());
    .run(args);
```
