---
title: "Pacman Distro"
created: 2019-03-15T02:33:06.696-05:00
modified: 2026-05-21T18:00:10.049-05:00
parent: "[[Linux Versions]]"
children:
  - "[[Pacman Package Managers]]"
  - "[[Pacman Versions]]"
---
###### Pacman Distro
````excerpt
- is a package manager that is capable of resolving dependencies and automatically downloading and installing all necessary packages
- in theory, a user need only run a single command to completely update the system
````
^excerpt

## Package Manager
```dataview
LIST
FROM ""
WHERE file.folder = [[Pacman Package Managers]].file.folder + "/" + [[Pacman Package Managers]].file.name
```

## Version
```dataview
LIST
FROM ""
WHERE file.folder = [[Pacman Versions]].file.folder + "/" + [[Pacman Versions]].file.name
```
