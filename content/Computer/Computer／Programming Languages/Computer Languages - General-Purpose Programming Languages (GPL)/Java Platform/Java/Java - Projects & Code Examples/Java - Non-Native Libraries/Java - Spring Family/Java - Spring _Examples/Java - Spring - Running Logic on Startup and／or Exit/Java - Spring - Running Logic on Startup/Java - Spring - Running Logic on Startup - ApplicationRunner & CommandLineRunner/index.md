---
title: "Java - Spring - Running Logic on Startup - ApplicationRunner & CommandLineRunner"
created: 2020-10-19T22:55:37.340-05:00
modified: 2021-06-15T17:15:35.502-05:00
parent: "[[Java - Spring - Running Logic on Startup]]"
children:
  - "[[Prevent ApplicationRunner or CommandLineRunner From Executing During Junit Testing]]"
---
# 1 - Differences

```merge-table
{
  "rows": [
    [
      {
        "content": "ApplicationRunner",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "CommandLineRunner",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "both are Functional Interfaces with a <code>run()</code> method\nboth will get execute just after Spring application context is created and before spring boot application startup\nboth provides the same functionality and the only difference between them is what is accepted in their run arguments",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "multiple <code>ApplicationRunner/CommandLineRunner</code> beans can be defined within the same application context and can be ordered using the <code><font style=\"color: rgb(128,128,0);\">@Ordered</font></code> interface or <code><font style=\"color: rgb(128,128,0);\">@Order</font></code> annotation",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<code>run()</code> accepts <code>[ApplicationArguments](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/ApplicationArguments.html)</code> as argument\n\nThe <em>ApplicationArguments </em>interface has methods to get argument values that are options and plain argument values. An argument that is prefixed with – – is an option argument",
        "align": "center"
      },
      {
        "content": "<code>run()</code> accepts <code>String\\[\\]</code> as argument",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# 2 - Code Examples
> [!tabs]
>
> === ApplicationRunner
>
> ```
> @Component
> public class AppStartupRunner implements ApplicationRunner {
>  
>     @Override
>     public void run(ApplicationArguments args) throws Exception {
>         System.out.println("Application started with option names : {}", args.getOptionNames());
>     }
> }
> ```
>
> === CommandLineRunner
>
> ```
> @Component
> public class CommandLineAppStartupRunner implements CommandLineRunner {
>  
>     @Override
>     public void run(String...args) throws Exception {
>         System.out.println("Hello, World!");
>     }
> }
> ```

# 3 - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
