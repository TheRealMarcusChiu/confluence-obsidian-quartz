---
title: "Java - Logging／Log Frameworks"
created: 2021-03-05T09:49:50.321-06:00
modified: 2026-04-09T11:28:25.074-05:00
parent: "[[Java - Non-Native Libraries]]"
children:
  - "[[Jakarta Commons Logging (JCL) - Apache Commons Logging]]"
  - "[[Java - Java Util Logging (JUL／J.U.L.)]]"
  - "[[Java - Log4j]]"
  - "[[Java - Log4j2]]"
  - "[[Java - Logback]]"
  - "[[Java - Simple Logging Facade for Java (SLF4j)]]"
---
[[Java - Simple Logging Facade for Java (SLF4j)|SLF4j]] and [[Jakarta Commons Logging (JCL) - Apache Commons Logging|JCL]] is a logging [[Facade Pattern|facade]], it doesn’t do logging by themselves instead depends on the logging component like

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Java - Java Util Logging (JUL／J.U.L.)|Java Util Logging]]",
        "bg": "#F4F5F7"
      },
      "- builtin with Java"
    ],
    [
      {
        "content": "[[Java - Log4j|Log4j]]",
        "bg": "#F4F5F7"
      },
      "- development ended 2015\n- doesn't support Slf4j natively"
    ],
    [
      {
        "content": "[[Java - Log4j2|Log4j2]]",
        "bg": "#F4F5F7"
      },
      "- successor to Log4j\n- more \"advanced\" than Logback"
    ],
    [
      {
        "content": "[[Java - Logback|Logback]]",
        "bg": "#F4F5F7"
      },
      "- successor to Log4j\n- less performant than Log4j2?"
    ]
  ]
}
```
# Resources
- [https://stackify.com/compare-java-logging-frameworks/](https://stackify.com/compare-java-logging-frameworks/)

# Other
- [[6 - Logs／Logging & Monitoring & Metrics & Traces／Tracing & Analytics|6 - Logging & Monitoring & Metrics]]
