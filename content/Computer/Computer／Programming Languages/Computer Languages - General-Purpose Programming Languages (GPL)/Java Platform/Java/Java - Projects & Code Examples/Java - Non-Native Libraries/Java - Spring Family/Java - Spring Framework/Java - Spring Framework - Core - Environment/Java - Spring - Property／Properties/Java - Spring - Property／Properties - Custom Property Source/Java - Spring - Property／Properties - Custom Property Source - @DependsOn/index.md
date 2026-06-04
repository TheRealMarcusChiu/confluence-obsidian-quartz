---
title: "Java - Spring - Property／Properties - Custom Property Source - @DependsOn"
created: 2021-06-02T23:46:49.429-05:00
modified: 2021-06-02T23:47:45.846-05:00
parent: "[[Java - Spring - Property／Properties - Custom Property Source]]"
children: []
---
```
@Configuration
public class YourPropertyConfigClass{

    @Value("${fromCustomSource}")
    String prop; // failing - property source not yet existing

    @Autowired
    ConfigurableEnvironment env;

    @PostConstruct
    public void init() throws Exception {
        env.getPropertySources().addFirst(new MyCustomPropertySource("my custom property source"));
    }
}

@Configuration
@DependsOn("YourPropertyConfigClass")
public class PropertyUser {

    @Value("${fromCustomSource}")
    String prop; // not failing
}
```
