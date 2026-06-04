---
title: "RPM Distro (Red Hat Package Manager)"
created: 2019-03-15T03:53:10.268-05:00
modified: 2026-05-21T17:52:58.500-05:00
parent: "[[Linux Versions]]"
children:
  - "[[RPM Package Managers]]"
  - "[[RPM Versions]]"
---
###### RPM Distro (Red Hat Package Manager)
````excerpt
- is an default open source and most popular package management utility for Red Hat based systems like ([[Red Hat Enterprise Linux (RHEL)|RHEL]], [[CentOS]] and [[Fedora]])
````
^excerpt

# Package Manager
```dataview
LIST
FROM ""
WHERE file.folder = [[RPM Package Managers]].file.folder + "/" + [[RPM Package Managers]].file.name
```

# Version
```dataview
LIST
FROM ""
WHERE file.folder = [[RPM Versions]].file.folder + "/" + [[RPM Versions]].file.name
```
