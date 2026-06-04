---
title: "Java - Spring - @Autowired @Resource @Inject (Wiring Types) - @Qualifier @Named"
created: 2019-12-08T20:17:15.730-06:00
modified: 2021-04-22T16:55:55.329-05:00
parent: "[[Java - Spring - Context Annotations]]"
children: []
---
# @Qualifier vs @Named

```merge-table
{
  "rows": [
    [
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Qualifier</font>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Named</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "belong to both Spring and Java extension package:\n- <font style=\"color: rgb(128,128,0);\">@javax.inject.Qualifier</font>\n- <font style=\"color: rgb(128,128,0);\">@org.springframework.beans.factory.annotation.Qualifier</font>",
      "belong to Java"
    ]
  ]
}
```
# @Autowired vs @Resource vs @Inject

```merge-table
{
  "rows": [
    [
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Autowired</font>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Resource</font>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Inject</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "1. Match by Type\n2. Match by Qualifier\n3. Match by Name",
      "1. Match by Name\n2. Match by Type\n3. Match by Qualifier",
      "1. Match by Type\n2. Match by Qualifier\n3. Match by Name"
    ],
    [
      "supports injecting:\n- fields\n- setter methods\n- constructors\n- multi-argument methods",
      "supports injecting:\n- fields\n- setter methods",
      ""
    ],
    [
      "belongs to Spring\n- <font style=\"color: rgb(128,128,0);\">@org.springframework.beans.factory.annotation.Autowired</font>",
      "belong to the Java extension package:\n- <font style=\"color: rgb(128,128,0);\">@javax.annotation.Resource</font>",
      "belong to the Java extension package:\n- <font style=\"color: rgb(128,128,0);\">@javax.inject.Inject</font>"
    ]
  ]
}
```
# Which To Use

```merge-table
{
  "rows": [
    [
      {
        "content": "Scenario",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Resource</font>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Inject</font>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">@Autowired</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Application-wide use of singletons through polymorphism",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "✗",
        "bg": "red"
      },
      {
        "content": "✔",
        "bg": "green"
      },
      {
        "content": "✔",
        "bg": "green"
      }
    ],
    [
      {
        "content": "Fine-grained application behavior configuration through polymorphism",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "✔",
        "bg": "green"
      },
      {
        "content": "✗",
        "bg": "red"
      },
      {
        "content": "✗",
        "bg": "red"
      }
    ],
    [
      {
        "content": "Dependency injection should be handled solely by the Jakarta EE platform",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "✔",
        "bg": "green"
      },
      {
        "content": "✔",
        "bg": "green"
      },
      {
        "content": "✗",
        "bg": "red"
      }
    ],
    [
      {
        "content": "Dependency injection should be handled solely by the Spring Framework",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "✗",
        "bg": "red"
      },
      {
        "content": "✗",
        "bg": "red"
      },
      {
        "content": "✔",
        "bg": "green"
      }
    ]
  ]
}
```
# Example Use
```
@Bean
@Qualifier("appContext1")
public com.context.AppContext appContext1() {
	return new AppContext();
}

@Qualifier("appContext2")
public com.context.AppContext appContext2() {
	return new AppContext();
}
```

given the configuration above, the following shows what's allowed and not:
```
// type case
@Autowired
AppContext appContext;  // ERROR

// qualifier case
@Autowired
@Qualifier("appContext1")
AppContext appContext;  // NO ERROR

// named case
@Autowired
AppContext appContext1; // NO ERROR
```
