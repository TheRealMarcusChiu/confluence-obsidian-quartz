---
title: "Java - CLASSPATH vs PATH"
created: 2020-05-28T11:57:14.403-05:00
modified: 2020-05-28T12:04:31.946-05:00
parent: "[[Java - Underneath]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "PATH",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "CLASSPATH",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "used by [[Operating Systems (OS)|operating system]] to locate JDK binaries like \"java\" or \"javac\"",
      "used by [Application ClassLoader](http://javarevisited.blogspot.com/2012/12/how-classloader-works-in-java.html) to locate and load compile Java bytecodes stored in the .class file"
    ],
    [
      "cannot be overridden by any Java settings",
      "can be overridden by providing command line option -classpath or -cp to both \"java\" and \"javac\" commands or by using Class-Path attribute in Manifest file inside [JAR archive](http://java67.blogspot.com/2016/01/how-to-run-jar-file-from-command-prompt.html)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
