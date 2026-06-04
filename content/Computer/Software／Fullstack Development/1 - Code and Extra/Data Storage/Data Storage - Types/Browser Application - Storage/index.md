---
title: "Browser Application - Storage"
created: 2019-09-16T18:01:00.660-05:00
modified: 2025-09-24T12:58:45.936-05:00
parent: "[[Data Storage - Types]]"
children:
  - "[[HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)]]"
  - "[[IndexedDB]]"
  - "[[Web SQL Database]]"
  - "[[Web Storage (sessionStorage - localStorage)]]"
---
other [[JavaScript - Native - V8 Engine - Web／Browser APIs|JavaScript - Native - V8 Engine - Web/Browser APIs]]
# Browser Application Storage Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Browser Application Storage Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Means of Server Sending Data to Client",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)|HTTP Cookie]]",
        "bg": "#F4F5F7"
      },
      "passed via [[HTTP - Headers|HTTP Headers]]:\n- Set-Cookie\n- Cookie",
      "![[HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)#^excerpt]]"
    ],
    [
      {
        "content": "[[Web SQL Database]]",
        "bg": "#F4F5F7"
      },
      "any data acquiring [[API Design Patterns (API-DP)|Web Services]]",
      "![[Web SQL Database#^excerpt]]"
    ],
    [
      {
        "content": "[[Web Storage (sessionStorage - localStorage)]]",
        "bg": "#F4F5F7"
      },
      "any data acquiring [[API Design Patterns (API-DP)|Web Services]]",
      "![[Web Storage (sessionStorage - localStorage)#^excerpt]]"
    ],
    [
      {
        "content": "[[IndexedDB]]",
        "bg": "#F4F5F7"
      },
      "any data acquiring [[API Design Patterns (API-DP)|Web Services]]",
      "![[IndexedDB#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Browser Cache Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Browser Cache Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Application Cache (AppCache)",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(213,0,0);\">DEPRECATED<font style=\"color: rgb(0,51,102);\"> - </font></font>[being removed from the web platform](https://html.spec.whatwg.org/multipage/offline.html#offline)"
    ],
    [
      {
        "content": "Cache Storage",
        "bg": "#F4F5F7"
      },
      "used in tandem with Service-Workers?"
    ]
  ],
  "tableStyle": "width: 51.9935%;"
}
```
# Chrome DevTools
![[Browser Application - Storage/browser-storage-google-developer-tool.png]]
