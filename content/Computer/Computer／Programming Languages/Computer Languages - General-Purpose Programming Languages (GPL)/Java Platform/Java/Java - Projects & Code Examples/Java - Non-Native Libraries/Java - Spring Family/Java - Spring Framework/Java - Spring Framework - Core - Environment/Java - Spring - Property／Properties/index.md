---
title: "Java - Spring - Property／Properties"
created: 2020-12-04T11:44:02.923-06:00
modified: 2021-09-24T00:57:17.704-05:00
parent: "[[Java - Spring Framework - Core - Environment]]"
children:
  - "[[Java - Spring - Property／Properties - @ConfigurationProperties @ConstructorBinding @EnableConfigurationProperties @ConfigurationPropertiesScan]]"
  - "[[Java - Spring - Property／Properties - @PropertySource @PropertySources]]"
  - "[[Java - Spring - Property／Properties - Custom Property Source]]"
  - "[[Java - Spring - Property／Properties - Externalized Properties Configuration]]"
---
TODO: [https://www.baeldung.com/properties-with-spring](https://www.baeldung.com/properties-with-spring)

```merge-table
{
  "rows": [
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@Value</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "inject a particular property value by its key"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@PropertySource</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "reference a properties file and load it"
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(128,128,0);\">@ConfigurationProperties</font></code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "map properties with POJO beans. Then you could use bean to access the properties values in your application"
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
