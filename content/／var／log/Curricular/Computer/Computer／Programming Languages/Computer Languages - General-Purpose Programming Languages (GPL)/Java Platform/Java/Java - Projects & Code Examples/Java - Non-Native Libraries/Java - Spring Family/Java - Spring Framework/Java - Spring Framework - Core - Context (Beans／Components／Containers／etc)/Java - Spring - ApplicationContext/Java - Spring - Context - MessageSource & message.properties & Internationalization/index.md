---
title: "Java - Spring - Context - MessageSource & message.properties & Internationalization"
created: 2020-10-20T18:38:49.483-05:00
modified: 2021-07-04T23:24:22.803-05:00
parent: "[[Java - Spring - ApplicationContext]]"
children:
  - "[[Java - Spring - ApplicationContext - MessageSource - ResourceBundleMessageSource]]"
---
<code><font style="color: rgb(51,102,255);">[[Java - Spring - ApplicationContext|ApplicationContext]]</font></code> interface supports <strong>message resolution</strong> and <strong>internationalization</strong> by extending the <code><font style="color: rgb(51,102,255);">MessageSource</font></code> interface
# MessageSource - Implementation Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>[StaticMessageSource](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/support/StaticMessageSource.html)</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "programmatically add messages to the source. However, it supports basic internationalization and is more suitable for tests than production use"
    ],
    [
      {
        "content": "<code>[ResourceBundleMessageSource](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/support/ResourceBundleMessageSource.html)</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "see below"
    ],
    [
      {
        "content": "[<code>ReloadableResourceBundleMessageSource</code>](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/support/ReloadableResourceBundleMessageSource.html)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "allows for reading files from any Spring resource location and supports hot reloading of bundle property files"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
