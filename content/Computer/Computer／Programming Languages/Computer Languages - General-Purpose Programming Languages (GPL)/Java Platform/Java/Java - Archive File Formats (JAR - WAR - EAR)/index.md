---
title: "Java - Archive File Formats (JAR - WAR - EAR)"
created: 2020-10-22T15:36:50.518-05:00
modified: 2023-11-16T22:14:22.819-06:00
parent: "[[Java]]"
children:
  - "[[Java Archive (JAR) File Format]]"
---
###### Java - Archive File Formats (JAR - WAR - EAR)
````excerpt
- is a type of [[Data Archiving Formats - Data Compression Formats|archive file format]] for [[Java]] applications
````
^excerpt

# Differences

```merge-table
{
  "rows": [
    [
      {
        "content": "JAR Files",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "WAR Files",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "EAR Files",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "[[Java Archive (JAR) File Format|Java Archive]]",
      "Web Application Archive",
      "Enterprise Application Archive"
    ],
    [
      "a file containing:\n- compiled Java source code\n- manifest file\n- XML-based configuration data\n- JSON-based data files\n- associated resources (text, images, etc)",
      "a standard JAR containing:\n- JAR files\n- JSP files\n- Servlet files\n- XML files\n- static pages (HTML, JavaScript, CSS)",
      "a standard JAR file that:\n- represents the modules of the application\n- metadata directory (i.e. META-INT) which contain one or more deployment descriptors"
    ],
    [
      "*.jar",
      "*.war",
      "*.ear"
    ],
    [
      "used for running a desktop application on a user's machine's [[Java - Installation (JDK - JRE - JVM - JE - JSE - JEE - JME)|JRE]]\n\ncan also start an embedded web server (e.g. with Spring Boot)",
      "used for deploying a web application inside an [[Java - Servlet API／Specification - Servlet Containers - Application Servers|application server]]",
      "used for deploying different modules onto an application server simultaneously"
    ]
  ]
}
```
