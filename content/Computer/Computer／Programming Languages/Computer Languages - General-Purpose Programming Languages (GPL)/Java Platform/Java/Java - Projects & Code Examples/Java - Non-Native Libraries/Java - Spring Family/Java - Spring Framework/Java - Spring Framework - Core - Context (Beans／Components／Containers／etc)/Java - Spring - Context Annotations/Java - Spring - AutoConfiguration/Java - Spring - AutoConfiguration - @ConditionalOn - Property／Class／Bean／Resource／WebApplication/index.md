---
title: "Java - Spring - AutoConfiguration - @ConditionalOn - Property／Class／Bean／Resource／WebApplication"
created: 2021-01-22T16:20:11.918-06:00
modified: 2022-08-23T22:27:14.183-05:00
parent: "[[Java - Spring - AutoConfiguration]]"
children: []
---
- code: [https://github.com/SpringBootMarcusChiu/conditional-on-examples](https://github.com/SpringBootMarcusChiu/conditional-on-examples)

# AutoConfiguration Annotations - Conditional Annotations

<code><font style="color: rgb(128,128,0);">@Conditional</font></code> annotations are used in the [[Java - Spring - AutoConfiguration - Classes|auto-configuration class]].

Spring Boot includes a number of <code><font style="color: rgb(128,128,0);">@Conditional</font></code> annotations that can be used on:
- <code><font style="color: rgb(128,128,0);">@Configuration</font></code> classes
- <code><font style="color: rgb(128,128,0);">@Bean</font></code> methods

These annotations are of the following types:

```merge-table
{
  "rows": [
    [
      {
        "content": "[Property Conditions](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-property-conditions)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnProperty</font></code>",
      "loads configuration/bean based on property"
    ],
    [
      {
        "content": "[Class Conditions](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-class-conditions)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnClass</font></code>",
      "loads configuration/bean only if a certain class is on the classpath"
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnMissingClass</font></code>",
      "loads configuration/bean only if a certain class is not on the classpath"
    ],
    [
      {
        "content": "[Bean Conditions](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-bean-conditions)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnBean</font></code>",
      "loads configuration/bean only if specified bean is in application context"
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnMissingBean</font></code>",
      "loads configuration/bean only if specified bean is not in application context"
    ],
    [
      {
        "content": "[Resource Conditions](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-resource-conditions)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnResource</font></code>",
      "loads configuration/bean only if specified resource is on the classpath"
    ],
    [
      {
        "content": "[Web Application Conditions](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-web-application-conditions)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnWebApplication</font></code>",
      "loads configuration/bean only if app in web context"
    ],
    [
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnNotWebApplication</font></code>",
      "loads configuration/bean only if app not in web context"
    ],
    [
      {
        "content": "[SpEL Expression Conditions](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-spel-conditions)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(128,128,0);\">@ConditionalOnExpression</font></code>",
      "loads configuration/bean only if [[Java - Spring Framework - Core - Spring Expression Language (SpEL)|SpEL]] expression is true"
    ],
    [
      {
        "content": "[Custom Conditions](https://www.baeldung.com/spring-boot-custom-auto-configuration#5-custom-conditions)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(128,128,0);\">@Conditional</font></code>",
      "loads configuration/bean only if custom conditional is satisfied"
    ]
  ]
}
```
# Testing AutoConfiguration Annotations

see: [https://www.baeldung.com/spring-boot-custom-auto-configuration#testing-the-auto-configuration](https://www.baeldung.com/spring-boot-custom-auto-configuration#testing-the-auto-configuration)
# Resources
- [https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-developing-auto-configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-developing-auto-configuration)
- [https://www.baeldung.com/spring-boot-custom-auto-configuration](https://www.baeldung.com/spring-boot-custom-auto-configuration)
