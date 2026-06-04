---
title: "Java - Spring - ConfigurableEnvironment"
created: 2021-06-02T23:47:58.080-05:00
modified: 2021-06-02T23:52:15.606-05:00
parent: "[[Java - Spring Framework - Core - Environment]]"
children: []
---
ConfigurableEnvironment allows you to add properties and/or profiles
# Example Use
```
@Configuration
public class ExampleConfig {

    @Autowired
    private ConfigurableEnvironment ce;

    @PostConstruct
    public void init() throws Exception {
        // do what ever you want with ConfigurableEnvironment

        // 1 - add new PropertySource
        ce.getPropertySources().addFirst(new MyCustomPropertySource("my custom property source"));

        // 2 - add new profile
        ce.addActiveProfile("random-profile");
    }
}

@Configuration
@DependsOn("ExampleConfig")
public class Example2Config {

    @Value("${fromCustomSource}")
    private String prop;
}
```
