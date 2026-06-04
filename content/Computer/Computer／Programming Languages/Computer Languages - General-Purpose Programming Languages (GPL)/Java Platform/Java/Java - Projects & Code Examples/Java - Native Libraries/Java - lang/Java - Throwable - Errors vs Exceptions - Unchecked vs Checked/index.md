---
title: "Java - Throwable - Errors vs Exceptions - Unchecked vs Checked"
created: 2020-05-21T16:45:51.570-05:00
modified: 2022-06-30T19:59:53.054-05:00
parent: "[[Java - lang]]"
children:
  - "[[Java - Designing With Exceptions]]"
---
# Errors vs Exceptions

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "ERROR",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "EXCEPTION",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Basic",
        "header": true,
        "bg": "#F4F5F7"
      },
      "caused due to a lack of system resources",
      "caused because of the code"
    ],
    [
      {
        "content": "Recovery",
        "header": true,
        "bg": "#F4F5F7"
      },
      "irrecoverable",
      "recoverable"
    ],
    [
      {
        "content": "Keywords",
        "header": true,
        "bg": "#F4F5F7"
      },
      "no means to handle an error by the program code",
      "handled using three keywords \"<code><font style=\"color: rgb(122,134,154);\">try</font></code>\", \"<code><font style=\"color: rgb(122,134,154);\">catch</font></code>\", and \"<code><font style=\"color: rgb(122,134,154);\">throw</font></code>\""
    ],
    [
      {
        "content": "Consequences",
        "header": true,
        "bg": "#F4F5F7"
      },
      "will terminate program abnormally",
      "is thrown and caught by the \"<code><font style=\"color: rgb(122,134,154);\">try</font></code>\" and \"<code><font style=\"color: rgb(122,134,154);\">catch</font></code>\" keywords correspondingly"
    ],
    [
      {
        "content": "Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      "unchecked exception",
      "checked exception or unchecked exception"
    ],
    [
      {
        "content": "Package",
        "header": true,
        "bg": "#F4F5F7"
      },
      "\"<code><font style=\"color: rgb(122,134,154);\">java.lang.Error</font></code>\" package",
      "\"<code><font style=\"color: rgb(122,134,154);\">java.lang.Exception</font></code>\" package"
    ],
    [
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(122,134,154);\">OutOfMemory</font></code>, <code><font style=\"color: rgb(122,134,154);\">StackOverFlow</font></code>",
      "- Checked Exceptions: <code><font style=\"color: rgb(122,134,154);\">NoSuchMethod</font></code>, <code><font style=\"color: rgb(122,134,154);\">ClassNotFound</font></code>\n- Unchecked Exceptions: <code><font style=\"color: rgb(122,134,154);\">RuntimeException</font></code>:\n\t- <code><font style=\"color: rgb(122,134,154);\">NullPointerException</font></code>\n\t- <code><font style=\"color: rgb(122,134,154);\">IndexOutOfBoundsException</font></code>\n\t- <code><font style=\"color: rgb(122,134,154);\">ArithmeticException</font></code>"
    ]
  ]
}
```
# Checked Exceptions vs Unchecked Exceptions

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "CHECKED EXCEPTION",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "UNCHECKED EXCEPTION",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Basic",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- the compiler CHECKS the checked exception",
      "- the compiler does NOT CHECK the unchecked exception"
    ],
    [
      {
        "content": "Class of Exception",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- all subclasses of <code><font style=\"color: rgb(122,134,154);\">Exception</font></code> (except <code><font style=\"color: rgb(122,134,154);\">RuntimeException</font></code>)",
      "- all subclasses <code><font style=\"color: rgb(122,134,154);\">RuntimeException</font></code>\n- all subclasses of <code><font style=\"color: rgb(122,134,154);\">Error</font></code>"
    ],
    [
      {
        "content": "Handling",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- compiler REQUIRES developer to handle checked exceptions",
      "- compiler DOESN'T REQUIRE developer to handle unchecked exceptions"
    ],
    [
      {
        "content": "Compilation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- program doesn't compile if there is an unhandled checked exception in the program code.",
      "- program compiles successfully even if there is an unhandled unchecked exception in the program code"
    ]
  ]
}
```
# Diagram
![[Java - Throwable - Errors vs Exceptions - Unchecked vs Checked/Checked-and-Unchecked-Exceptions-in-Java.png|400]]![[Java - Throwable - Errors vs Exceptions - Unchecked vs Checked/Checked-and-Unchecked-Exception-Error.jpg|301]]
- <code><font style="color: rgb(122,134,154);">Throwable</font></code> is the parent class of the classes <code><font style="color: rgb(122,134,154);">Error</font></code> and <code><font style="color: rgb(122,134,154);">Exception</font></code>
- <strong>unchecked exceptions</strong> - are the subclasses of <code><font style="color: rgb(122,134,154);">RuntimeException</font></code> and the subclasses of <code><font style="color: rgb(122,134,154);">Error</font></code>
- <strong>checked exceptions</strong> - are the remaining subclasses of <code><font style="color: rgb(122,134,154);">Exception</font></code> except <code><font style="color: rgb(122,134,154);">RuntimeException</font></code>
