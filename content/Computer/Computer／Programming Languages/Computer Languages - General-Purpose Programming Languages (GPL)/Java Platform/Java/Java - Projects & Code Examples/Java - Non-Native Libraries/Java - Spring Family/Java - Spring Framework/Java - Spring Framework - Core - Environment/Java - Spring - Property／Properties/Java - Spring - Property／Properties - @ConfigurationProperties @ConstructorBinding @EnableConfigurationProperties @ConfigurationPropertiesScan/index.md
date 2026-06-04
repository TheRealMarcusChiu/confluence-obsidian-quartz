---
title: "Java - Spring - Property／Properties - @ConfigurationProperties @ConstructorBinding @EnableConfigurationProperties @ConfigurationPropertiesScan"
created: 2020-12-04T11:44:21.872-06:00
modified: 2021-09-25T17:21:26.884-05:00
parent: "[[Java - Spring - Property／Properties]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@ConfigurationProperties</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- used to bind a class with an externalized property file"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@ConstructorBinding</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- used in tandem with <code><font style=\"color: rgb(128,128,0);\">@ConfigurationProperties</font></code> to tell Spring to use the constructor instead of setter methods"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@EnableConfigurationProperties</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- creates a binding between a configuration entity class and Spring configuration stereotype so that after injection within a service, properties can be retrieved easily\n- is for enabling support of <code><font style=\"color: rgb(128,128,0);\">@ConfigurationProperties</font></code> on annotated beans"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@ConfigurationPropertiesScan</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- scans <code><font style=\"color: rgb(128,128,0);\">@ConfigurationProperties</font></code>"
    ]
  ]
}
```
# @ConfigurationProperties & @ConstructorBinding Example

Let's say you have properties in either: <code><font style="color: rgb(51,102,255);">application.yml</font></code> or <code><font style="color: rgb(51,102,255);">application.properties</font></code> that you want to map to POJOs
```
additional.unit="hello world"
additional.max=25
other=something
```

First, we need to define our example properties class
```
@ConfigurationProperties(prefix = "additional")
public class AdditionalProperties {
    private String unit;
    private int max;
    // standard getters and setters
}
```

Above requires setter methods, if you want an immutable AdditionalProperties use <code><font style="color: rgb(128,128,0);">@ConstructorBinding</font></code>
```
@ConstructorBinding
@ConfigurationProperties(prefix = "additional")
public class AdditionalProperties {
    private String unit;
    private int max;

	public AdditionalProperties(String unit, int max) {
		this.unit = unit;
		this.max = max;
	}

    // standard getters
}
```
# Injecting a @ConfigurationProperties Annotated Class
> [!tabs]
>
> === @EnableConfigurationProperties
>
> ```
> @Configuration
> @EnableConfigurationProperties(AdditionalProperties.class)
> public class AdditionalConfiguration {
>
>     @Autowired
>     private AdditionalProperties additionalProperties;
>
>     // make use of the bound properties
> }
> ```
>
> === @ConfigurationPropertiesScan
>
> Place <code><font style="color: rgb(128,128,0);">@ConfigurationPropertiesScan</font></code> at a <code><font style="color: rgb(128,128,0);">@Configuration</font></code> class which would then scan all sub-packages for classes annotated with <code><font style="color: rgb(128,128,0);">@ConfigurationProperties</font></code>
> ```
> @SpringBootApplication
> @ConfigurationPropertiesScan
> public class MainApplication {
> 	public static void main(String[] args) {
> 		SpringApplication.run(MainApplication.class, args);
> 	}
> }
> ```
>
> Inject the <code><font style="color: rgb(128,128,0);">@ConfigurationProperties</font></code> annotated class (e.g. <code><font style="color: rgb(122,134,154);">AdditionalProperties.class</font></code>) into any <code><font style="color: rgb(128,128,0);">@Component</font></code> for use
> ```
> @Component
> public class ExampleComponent {
> 	@Autowired
> 	private AdditionalProperties additionalProperties;
>
> 	// make use of the bound properties
> }
> ```
