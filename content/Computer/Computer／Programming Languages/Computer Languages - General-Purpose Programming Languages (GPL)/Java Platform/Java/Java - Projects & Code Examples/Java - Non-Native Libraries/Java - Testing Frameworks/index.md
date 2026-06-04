---
title: "Java - Testing Frameworks"
created: 2021-03-06T09:22:31.256-06:00
modified: 2021-10-09T17:17:48.699-05:00
parent: "[[Java - Non-Native Libraries]]"
children:
  - "[[Java - JUnit4 - JUnit5 Jupiter]]"
  - "[[Java - Mockito]]"
  - "[[Java - Performance／Micro-benchmarks Frameworks]]"
  - "[[Java - PowerMock]]"
  - "[[Java - TestContainers]]"
---
To learn how to write tests, go to [[3 - Testing (Automated Tests)]]
# Frameworks

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Java - JUnit4 - JUnit5 Jupiter|JUnit]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "the de-facto standard for unit testing Java applications"
    ],
    [
      {
        "content": "[[Java - Mockito|Mockito]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Test Doubles (Dummy - Fake - Stub - Spy - Mock)|mocking/stubbing/spying]] objects/dependencies framework"
    ],
    [
      {
        "content": "[[Java - PowerMock|PowerMock]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a more powerful Mockito"
    ],
    [
      {
        "content": "[Wiremock](http://wiremock.org/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for [[Test Doubles (Dummy - Fake - Stub - Spy - Mock)|stubbing]] out external services"
    ],
    [
      {
        "content": "[AssertJ](https://assertj.github.io/doc/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a fluent assertion library"
    ],
    [
      {
        "content": "[Hamcrest](https://github.com/hamcrest/JavaHamcrest)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a library of matcher objects (also known as constraints or predicates)"
    ],
    [
      {
        "content": "[JSONassert](https://github.com/skyscreamer/JSONassert)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an assertion library for JSON"
    ],
    [
      {
        "content": "[JsonPath](https://github.com/jayway/JsonPath)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[XML Path Language (XPath)|XPath]] for JSON"
    ],
    [
      {
        "content": "[Pact](https://docs.pact.io/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for writing Consumer-Driven Contracts (CDC) tests"
    ],
    [
      {
        "content": "[[Selenium]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for writing UI-driven end-to-end tests"
    ],
    [
      {
        "content": "[REST-assured](https://github.com/rest-assured/rest-assured)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for writing REST API-driven end-to-end tests"
    ],
    [
      {
        "content": "[[Java - TestContainers|TestContainers]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for using [[Docker]] containers within tests"
    ],
    [
      {
        "content": "[[Java - Performance／Micro-benchmarks Frameworks|Performance/Micro-benchmarks Frameworks]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for performance/micro-benchmark testing"
    ],
    [
      {
        "content": "[[Java - Spring Framework - Testing Framework|Spring Testing Framework]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "utilities and integration test support for Spring Boot applications"
    ]
  ]
}
```
# Maven Plugins

see: [[Maven - Test Plugins]]
