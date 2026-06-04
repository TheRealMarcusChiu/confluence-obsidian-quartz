---
title: "Java - Spring - @Bean @Component"
created: 2020-10-18T15:24:03.072-05:00
modified: 2021-05-29T12:00:51.045-05:00
parent: "[[Java - Spring - Context Annotations]]"
children:
  - "[[Java - Spring - (@Bean @Component)'s @Scope]]"
  - "[[Java - Spring - @Component Stereotypes (@Controller - @Service - @Repository)]]"
  - "[[Java - Spring - Creating @Bean／@Component at Runtime]]"
---
# 1 - Overview

```merge-table
{
  "rows": [
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@Component</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@Bean</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "class level annotation",
      "method level annotation"
    ],
    [
      "does not decouple the declaration of the bean from the class definition. There's an implicit one-to-one mapping between the annotated class and the bean (i.e. one bean per class). Control of wiring is quite limited with this approach, since it's purely declarative",
      "decouples the declaration of the bean from the class definition, and lets you create and configure beans exactly how you choose"
    ],
    [
      "used to auto-detect and auto-configure beans using classpath scanning",
      "explicitly declares a single bean, rather than letting Spring do it automatically"
    ],
    [
      "need not to be used with <code><font style=\"color: rgb(128,128,0);\">@Configuration</font></code> annotation",
      "has to be used within a class annotated <code><font style=\"color: rgb(128,128,0);\">@Configuration </font></code>"
    ],
    [
      "has different specializations/subtypes:\n- <code><font style=\"color: rgb(128,128,0);\">@Controller</font></code>\n- <code><font style=\"color: rgb(128,128,0);\">@Service</font></code>\n- <code><font style=\"color: rgb(128,128,0);\">@Repository</font></code>",
      "has no specializations"
    ],
    [
      "```java\n@Component\npublic class EmailService {\n\t// ...\n}\n```",
      "```java\n@Configuration\npublic class Config {\n\t@Bean\n\tpublic EmailService emailService() {\n\t\treturn new EmailService();\n\t}\n}\n```"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# 2 - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
