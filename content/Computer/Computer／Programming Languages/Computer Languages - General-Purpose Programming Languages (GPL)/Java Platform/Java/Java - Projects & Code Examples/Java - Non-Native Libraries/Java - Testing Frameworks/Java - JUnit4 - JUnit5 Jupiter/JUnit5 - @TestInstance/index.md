---
title: "JUnit5 - @TestInstance"
created: 2021-05-10T23:18:00.752-05:00
modified: 2021-10-09T17:04:06.908-05:00
parent: "[[Java - JUnit4 - JUnit5 Jupiter]]"
children: []
---
<code><font style="color: rgb(128,128,0);">@TestInstance</font></code> has two modes:
- <font style="color: rgb(122,134,154);"><strong>LifeCycle.PER\_METHOD</strong></font> (DEFAULT) - JUnit creates a new instance of the test-class for each test-method it contains
- <font style="color: rgb(122,134,154);"><strong>LifeCycle.PER\_CLASS</strong></font> - enables us to ask JUnit to create only one instance of the test class and reuse it between tests

# 1 - Code Examples

```merge-table
{
  "rows": [
    [
      "```\n@TestInstance(LifeCycle.PER_CLASS)\nclass UnitTest {\n\n    private String largeContent;\n\n    @BeforeAll\n    void setUpFixture() {\n        // read the file\n\t\tlargeContent = read()\n    }\n}\n```",
      "```\n@TestInstance(LifeCycle.PER_METHOD)\nclass UnitTest {\n\n    private static String largeContent;\n\n    @BeforeAll\n    static void setUpFixture() {\n        // read the file\n\t\tlargeContent = read()\n    }\n}\n```"
    ]
  ]
}
```
