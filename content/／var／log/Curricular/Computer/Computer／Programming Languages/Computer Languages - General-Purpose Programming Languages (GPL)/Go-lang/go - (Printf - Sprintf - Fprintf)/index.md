---
title: "go - (Printf - Sprintf - Fprintf)"
created: 2020-10-07T01:08:33.550-05:00
modified: 2020-10-07T01:14:53.080-05:00
parent: "[[Go-lang]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Printf",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>Printf</code> prints the formatted string to <code>os.Stdout</code>",
      "<span style=\"white-space: pre-wrap\"><code>fmt.Printf(<font style=\"color: rgb(33,145,97);\">\"Hello World</font><font style=\"color: rgb(33,145,97);\">\"</font>)</code></span>\n\n<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(128,128,128);\">// outputs \"Hello World\"</font></code></span>"
    ],
    [
      {
        "content": "Sprintf",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code>Sprintf</code> formats and returns a string without printing it anywhere",
      "<span style=\"white-space: pre-wrap\"><code>s <font style=\"color: rgb(102,102,102);\">:=</font> fmt.Sprintf(<font style=\"color: rgb(33,145,97);\">\"Hello %s\"</font>, <font style=\"color: rgb(33,145,97);\">\"World\"</font>)</code><br><code>fmt.Println(s)</code></span>\n\n<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(128,128,128);\">// outputs \"Hello World\"</font></code></span>"
    ],
    [
      {
        "content": "Fprintf",
        "header": true,
        "bg": "#F4F5F7"
      },
      "You can format+print to <code>io.Writers</code> other than <code>os.Stdout</code> using <code>Fprintf</code>",
      "<span style=\"white-space: pre-wrap\"><code>fmt.Fprintf(os.Stderr, <font style=\"color: rgb(33,145,97);\">\"Hello %s\"</font>, <font style=\"color: rgb(33,145,97);\">\"World\"</font>)</code></span>\n\n<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(128,128,128);\">// outputs \"Hello World\"</font></code></span>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
