---
title: "Java - Spring - @Configuration(proxyBeanMethods=[false｜true])"
created: 2021-01-06T12:18:34.884-06:00
modified: 2021-01-06T12:26:08.957-06:00
parent: "[[Java - Spring - @Configuration]]"
children: []
---
```
@Configuration(proxyBeanMethods=[false|true])
public class TestConfig {

    @Bean
    TestService sharedService(){
        System.out.println("inside shared service");
        return new TestService("Marcus Chiu");
    }

    @Bean
    Test1Service serviceA(){
        return new Test1Service(sharedService());
    }

    @Bean
    Test2Service serviceB(){
        return new Test2Service(sharedService());
    }
}
```
```
@SpringBootApplication
public class SandboxApplication implements CommandLineRunner {

   public static void main(String[] args) {
      SpringApplication.run(SandboxApplication.class, args);
   }

   @Autowired
   TestService testService;

   @Autowired
   Test1Service test1Service;

   @Autowired
   Test2Service test2Service;

   @Override
   public void run(String... strings) {
      testService.state = "testService";
      System.out.println(test1Service.testService.state);
      System.out.println(test2Service.testService.state);

      test1Service.testService.state = "test1Service";
      System.out.println(test1Service.testService.state);
      System.out.println(test2Service.testService.state);

      test2Service.testService.state = "test2Service";
      System.out.println(test1Service.testService.state);
      System.out.println(test2Service.testService.state);
   }
}
```
### Differences in Output

```merge-table
{
  "rows": [
    [
      {
        "content": "<font style=\"color: rgb(128,128,0);\">proxyBeanMethods=true</font>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">proxyBeanMethods=false</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "when TestConfig is annotated with <code><font style=\"color: rgb(128,128,0);\">@Configuration(proxyBeanMethods=true)</font></code> or <code><font style=\"color: rgb(128,128,0);\">@Configuration</font></code>:\n```\ninside shared service\n\ntestService\ntestService\ntest1Service\ntest1Service\ntest2Service\ntest2Service\n```",
      "when TestConfig is annotated with <code><font style=\"color: rgb(128,128,0);\">@Configuration(proxyBeanMethods=false)</font></code>:\n```\ninside shared service\ninside shared service\ninside shared service\n\nMarcus Chiu\nMarcus Chiu\ntest1Service\nMarcus Chiu\ntest1Service\ntest2Service\n```"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
