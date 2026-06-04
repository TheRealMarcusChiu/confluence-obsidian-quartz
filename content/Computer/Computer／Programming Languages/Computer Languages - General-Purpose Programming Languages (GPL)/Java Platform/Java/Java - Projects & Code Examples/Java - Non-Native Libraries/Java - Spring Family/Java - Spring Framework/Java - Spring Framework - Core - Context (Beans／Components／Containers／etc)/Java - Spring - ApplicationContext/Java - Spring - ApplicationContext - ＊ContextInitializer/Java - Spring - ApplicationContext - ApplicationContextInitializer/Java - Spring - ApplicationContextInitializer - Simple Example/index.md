---
title: "Java - Spring - ApplicationContextInitializer - Simple Example"
created: 2021-06-02T20:21:45.572-05:00
modified: 2021-06-02T20:26:23.308-05:00
parent: "[[Java - Spring - ApplicationContext - ApplicationContextInitializer]]"
children: []
---
a simple example using [[Java - Spring - ApplicationContext - ApplicationContextInitializer|ApplicationContextInitializer]]
# <strong>Simple Configuration</strong>

```merge-table
{
  "rows": [
    [
      "```\n@Configuration\npublic class AppConfig {\n\n  @Bean\n  @Profile(\"windows\")\n  public MyService myServiceA() {\n      return new MyServiceA();\n  }\n\n  @Bean\n  @Profile(\"other\")\n  public MyService myServiceB() {\n      return new MyServiceB();\n  }\n}\n```",
      "```\npublic interface MyService {\n  public String doSomething();\n}\n```\n```\npublic class MyServiceA implements MyService {\n  @Override\n  public String doSomething() {\n      return \"in \" + this.getClass().getSimpleName();\n  }\n}\n```\n```\npublic class MyServiceB implements MyService {\n  @Override\n  public String doSomething() {\n      return \"in \" + this.getClass().getSimpleName();\n  }\n}\n```"
    ]
  ]
}
```
# <strong>Create Custom ApplicationContextInitializer</strong>
```
public class MyApplicationContextInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {
  @Override
  public void initialize(ConfigurableApplicationContext ac) {
      String os = System.getProperty("os.name");
      String profile = (os.toLowerCase().startsWith("windows")) ? "windows" : "other";
      ConfigurableEnvironment ce = ac.getEnvironment();
      ce.addActiveProfile(profile);
  }
}
```
# <strong>Register the Custom ApplicationContextInitializer</strong>

there are many ways to register an ApplicationContextInitializer, below via Spring Boot builder method.

For other methods see [[Java - Spring - ApplicationContextInitializer - How to Register a Custom ApplicationContextInitializer]]
```
@SpringBootApplication
public class DemoApplication {
   public static void main(String[] args) {
      new SpringApplicationBuilder(DemoApplication.class)
            .initializers(new MyApplicationContextInitializer())
            .run(args);
   }
}
```
