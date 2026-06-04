---
title: "Macintosh OSs (Mac OS X) - macOS"
created: 2019-03-15T02:25:51.788-05:00
modified: 2023-02-19T16:59:22.969-06:00
parent: "[[Berkeley Software Distribution (BSD)]]"
children:
  - "[[macOS - General]]"
  - "[[macOS - Personal Projects]]"
  - "[[macOS Package Managers]]"
---
The family of <strong>Macintosh Operating Systems</strong> was developed by [Apple Inc](https://en.wikipedia.org/wiki/Apple_Inc.).
# Macintosh OS - Components
- <strong>Darwin</strong> - OS that contains [[XNU (X is Not Unix)|XNU]] as the [[Kernel／Kernels (OS)|kernel]]
- <strong>Aqua UI</strong> - closed source
- <strong>Cocoa API</strong> - closed source

# Macintosh OS - Brand Names

```merge-table
{
  "rows": [
    [
      {
        "content": "Brand Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Time Period",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "\"Classic\" Mac OS",
        "bg": "#F4F5F7"
      },
      "1984 - 1996"
    ],
    [
      {
        "content": "Mac OS",
        "bg": "#F4F5F7"
      },
      "1996 - 2001"
    ],
    [
      {
        "content": "Mac OS X",
        "bg": "#F4F5F7"
      },
      "2001 - 2012"
    ],
    [
      {
        "content": "OS X",
        "bg": "#F4F5F7"
      },
      "2012 - 2016"
    ],
    [
      {
        "content": "macOS",
        "bg": "#F4F5F7"
      },
      "2016 - present"
    ]
  ]
}
```
# General
```dataview
LIST
FROM ""
WHERE file.folder = [[macOS - General]].file.folder + "/" + [[macOS - General]].file.name
```

# Personal Projects
```dataview
LIST
FROM ""
WHERE file.folder = [[macOS - Personal Projects]].file.folder + "/" + [[macOS - Personal Projects]].file.name
```

# Package Managers
```dataview
LIST
FROM ""
WHERE file.folder = [[macOS Package Managers]].file.folder + "/" + [[macOS Package Managers]].file.name
```
