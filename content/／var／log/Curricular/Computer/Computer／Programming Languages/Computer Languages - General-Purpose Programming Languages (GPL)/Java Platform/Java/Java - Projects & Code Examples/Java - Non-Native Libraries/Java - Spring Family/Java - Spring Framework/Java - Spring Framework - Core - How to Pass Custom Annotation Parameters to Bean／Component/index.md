---
title: "Java - Spring Framework - Core - How to Pass Custom Annotation Parameters to Bean／Component"
created: 2022-07-08T02:16:01.377-05:00
modified: 2022-12-22T09:55:11.476-06:00
parent: "[[Java - Spring Framework]]"
children: []
---
# Example Code Setup
```
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Import(EnableExampleRegistrar.class)
public @interface EnableExample {
    String cacheName() default "my-cache";
}
```
```
public class EnableExampleRegistrar implements ImportBeanDefinitionRegistrar {
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
        MultiValueMap<String, Object> attributes = importingClassMetadata.getAllAnnotationAttributes(EnableExample.class.getName(), false);
        List<Object> t = attributes.get("cacheName");

        GenericBeanDefinition gbd = new GenericBeanDefinition();
        gbd.setBeanClass(ExampleBeanConfiguration.class);
        gbd.getPropertyValues().addPropertyValue("custom", t.get(0));
        registry.registerBeanDefinition("exampleBeanConfiguration", gbd);
    }
}
```
```
@Data
public class ExampleBeanConfiguration {

    private String custom;

    @Bean
    public ExampleBean exampleBean() {
        return ExampleBean.builder().custom(custom).build();
    }

    @Data
    @Builder
    public static class ExampleBean {
        private String custom;
    }
}
```
# Example Code Usage
```
@SpringBootApplication
@EnableExample(cacheName = "hello world!")
public class MainApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

    @Autowired
    private ExampleBeanConfiguration.ExampleBean exampleBean;

    @Override
    public void run(String... args) throws Exception {
        System.out.println(exampleBean.getCustom());
    }
}
```
