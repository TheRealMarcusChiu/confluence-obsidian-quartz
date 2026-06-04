---
title: "Java - Spring - Property／Properties - @PropertySource YAML File"
created: 2021-09-25T03:36:24.640-05:00
modified: 2021-09-25T03:41:32.790-05:00
parent: "[[Java - Spring - Property／Properties - @PropertySource @PropertySources]]"
children: []
---
By default, <code><font style="color: rgb(128,128,0);">@PropertySource</font></code> doesn't load [[YAML Ain't Markup Language (YAML)|YAML files]]. This fact is explicitly mentioned in the [official documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config-yaml-shortcomings).
# Custom YamlPropertySourceFactory
provide our custom implementation of the <code><font style="color: rgb(122,134,154);">PropertySourceFactory</font></code>, which will handle the YAML file processing
```
public class YamlPropertySourceFactory implements PropertySourceFactory {

    @Override
    public PropertySource<?> createPropertySource(String name, EncodedResource encodedResource) throws IOException {
        YamlPropertiesFactoryBean factory = new YamlPropertiesFactoryBean();
        factory.setResources(encodedResource.getResource());
        Properties properties = factory.getObject();
        return new PropertiesPropertySource(encodedResource.getResource().getFilename(), properties);
    }
}
```
# Using Custom YamlPropertySourceFactory
```yml
yaml:
  name: foo
  aliases:
    - abc
    - xyz
```

Injecting <code><font style="color: rgb(122,134,154);">foo.yml</font></code> via <code><font style="color: rgb(128,128,0);">@PropertySource</font></code>
```
@Configuration
@ConfigurationProperties(prefix = "yaml")
@PropertySource(value = "classpath:foo.yml", factory = YamlPropertySourceFactory.class)
public class YamlFooProperties {

    private String name;

    private List<String> aliases;

    // standard getter and setters
}
```
# Resource
- [https://www.baeldung.com/spring-yaml-propertysource](https://www.baeldung.com/spring-yaml-propertysource)
