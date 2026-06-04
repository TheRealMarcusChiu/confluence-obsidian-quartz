---
title: "Java - Dependency Injection Frameworks - Spring vs CDI (Context and Dependency Injection)"
created: 2021-04-06T21:23:37.465-05:00
modified: 2021-10-26T02:50:08.346-05:00
parent: "[[Java - Non-Native Libraries]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Java - Spring Family|Spring]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "CDI",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Dependency Injection (DI)|Dependency Injection]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- handles DI in a static (aka: stateless) way\n- this means that components are wired together at <em>creation time</em>",
      "- handles DI in a <em>dynamic</em> (aka: stateful) way\n- this means that dependencies are resolved at <em>execution time</em>\n- it's far superior and offers way more and advanced options"
    ],
    [
      {
        "content": "Ecosystem",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- comes bundled with <em>a lot of</em> jars (\\>150)",
      "- is pretty small by itself\n\na typical CDI-usage would be inside of a Java EE 6 application server, but you can easily make it work in a servlet engine or even Java SE. This means that using CDI makes no assumption about using Hibernate, JPA, EJB, or whatever - that's up to you"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
