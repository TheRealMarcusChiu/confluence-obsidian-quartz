---
title: "Java - Spring - Property／Properties - Custom Property Source - ApplicationContextInitializer"
created: 2021-06-02T23:31:05.518-05:00
modified: 2021-06-02T23:35:51.201-05:00
parent: "[[Java - Spring - Property／Properties - Custom Property Source]]"
children: []
---
using [[Java - Spring - ApplicationContext - ApplicationContextInitializer|ApplicationContextInitializer]] to inject custom PropertySource
###### Create Custom ApplicationContextInitializer That Injects New PropertySource
```
public class MyPropertyInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

    @Override
    public void initialize(ConfigurableApplicationContext applicationContext) {
        MyPropertySource ps = new MyPropertySource();
        applicationContext.getEnvironment().getPropertySources().addFirst(ps);
    }
}
```
###### Register Custom ApplicationContextInitializer

for other ways to register ApplicationContextInitializer see: [[Java - Spring - ApplicationContextInitializer - How to Register a Custom ApplicationContextInitializer]]
```
public class MyInitializer extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return super.configure(builder.initializers(new MyPropertyInitializer()));
    }
}
```
