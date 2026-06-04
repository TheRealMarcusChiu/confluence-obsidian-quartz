---
title: "Debian"
created: 2019-03-15T02:43:35.877-05:00
modified: 2024-08-30T22:30:37.234-05:00
parent: "[[Linux Versions]]"
children:
  - "[[Debian Package Manager]]"
  - "[[Debian Versions]]"
---
###### Debian
````excerpt
- is a distribution that emphasizes free software
- Debian and distributions based on it use the .deb package format and the [[dpkg (Debian Package)]] package manager and its frontends
````
^excerpt

# Package Manager
```dataview
LIST
FROM ""
WHERE file.folder = [[Debian Package Manager]].file.folder + "/" + [[Debian Package Manager]].file.name
```

# Version
```dataview
LIST
FROM ""
WHERE file.folder = [[Debian Versions]].file.folder + "/" + [[Debian Versions]].file.name
```

# ISO - Downloads
- [https://github.com/TheRealMarcusChiu/debian-iso-guide](https://github.com/TheRealMarcusChiu/debian-iso-guide)
