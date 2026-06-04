---
title: "Java Archive (JAR) File Format"
created: 2020-10-22T15:38:57.715-05:00
modified: 2020-10-22T15:55:19.012-05:00
parent: "[[Java - Archive File Formats (JAR - WAR - EAR)]]"
children: []
---
TODO: [https://web.archive.org/web/20120626012843/http://java.sun.com/developer/Books/javaprogramming/JAR/basics](https://web.archive.org/web/20120626012843/http://java.sun.com/developer/Books/javaprogramming/JAR/basics)

```merge-table
{
  "rows": [
    [
      {
        "content": "Operation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Command",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "To create a JAR file",
      "<code>jar cf <em>jar-file input-file(s)</em></code>"
    ],
    [
      "To view the contents of a JAR file",
      "<code>jar tf <em>jar-file</em></code>"
    ],
    [
      "To extract the contents of a JAR file",
      "<code>jar xf <em>jar-file</em></code>"
    ],
    [
      "To extract specific files from a JAR file",
      "<code>jar xf <em>jar-file archived-file(s)</em></code>"
    ],
    [
      "To run an application packaged as a JAR file\n(version 1.1)",
      "<span style=\"white-space: pre-wrap\"><code>jre -cp <em>app.jar MainClass</em></code></span>"
    ],
    [
      "To run an application packaged as a JAR file\n(version 1.2 -- requires <code>Main-Class</code>\nmanifest header)",
      "<span style=\"white-space: pre-wrap\"><code>java -jar <em>app.jar</em></code></span>"
    ],
    [
      "To invoke an applet packaged as a JAR file",
      "<span style=\"white-space: pre-wrap\"><code>\\<applet code=<em>AppletClassName.class</em></code><br><code>        archive=\"<em>JarFileName.jar</em>\"</code><br><code>        width=<em>width</em> height=<em>height</em>\\></code><br><code>\\</applet\\></code></span>"
    ]
  ]
}
```
