---
title: "Maven - Test Plugins"
created: 2020-12-06T13:20:47.782-06:00
modified: 2021-03-21T22:39:21.572-05:00
parent: "[[Maven - Plugins]]"
children:
  - "[[Maven - Failsafe Plugin]]"
  - "[[Maven - JaCoCo Plugin]]"
  - "[[Maven - Surefire Plugin]]"
---
see: [[Java - Testing Frameworks]]

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Maven - Surefire Plugin|Surefire Plugin]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- by default, reports are generated in /target/surefire-reports\n- by default, runs tests ending with \\*Test.java with \\`<code><font style=\"color: rgb(128,128,128);\">mvn test</font></code>\\` command\n- has only one goal\n\t- test - this goal is bound to the test phase of the default build lifecycle\n- when test fails, it immediately aborts"
    ],
    [
      {
        "content": "[[Maven - Failsafe Plugin|Failsafe Plugin]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- by default, reports are generated in /target/failsafe-reports/TEST-\\*.xml\n- by default, runs tests ending with \\*IT.java with \\`<code><font style=\"color: rgb(128,128,128);\">mvn verify</font></code>\\` command\n- has only two goals:\n\t- failsafe:integration-test runs the integration tests of an application\n\t- failsafe:verify verifies that the integration tests of an application passed\n- when test fails, it does not immediately abort"
    ],
    [
      {
        "content": "[[Maven - JaCoCo Plugin|JaCoCo Plugin]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a code coverage reports generator for Java projects used to measure how many lines of our code are executed during automated tests"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
