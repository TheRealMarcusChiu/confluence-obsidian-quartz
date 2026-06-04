---
title: "Carriage Return (CR) - Line Feed (LF) - CRLF - End of Line (EOL)"
created: 2019-12-21T15:07:33.712-06:00
modified: 2020-01-07T15:43:59.374-06:00
parent: "[[ASCII]]"
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
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Code",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Carriage Return (CR)",
      "1 bytecode for <em>carriage-return</em>",
      "- <code>0x0D</code> (13 decimal)\n- \\\\r"
    ],
    [
      "Line Feed (LF)",
      "1 bytecode for <em>line-feed</em>",
      "- <code>0x0A</code> (10 decimal)\n- \\\\n"
    ],
    [
      "CRLF\n\nEnd of Line (EOL)",
      "2 bytecodes for end-of-line\n\ncombines both CR and LF",
      "- <code>0x0D 0x0A</code>\n- \\\\r\\\\n"
    ]
  ],
  "tableStyle": "width: 61.9853%;"
}
```
### OS Adoption
- [[Windows]] uses EOL (i.e. 2 characters the CR-LF sequence)
- [[UNIX|Unix]] only uses LF
- old [[Macintosh OSs (Mac OS X) - macOS|MacOS]] (pre-OSX Macintosh) used CR
