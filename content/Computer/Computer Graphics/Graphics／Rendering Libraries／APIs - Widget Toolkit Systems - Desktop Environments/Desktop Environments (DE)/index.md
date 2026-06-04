---
title: "Desktop Environments (DE)"
created: 2024-06-18T13:35:44.545-05:00
modified: 2024-06-29T11:58:02.585-05:00
parent: "[[Graphics／Rendering Libraries／APIs - Widget Toolkit Systems - Desktop Environments]]"
children:
  - "[[Display Server - Windowing Systems - Window Systems]]"
  - "[[Graphical Desktop Environments]]"
  - "[[Window Manager vs Desktop Environment]]"
  - "[[Window Manager vs Display Server ／ Windowing System]]"
  - "[[Window Managers (WM)]]"
---
###### Desktop Environments (DE)
````excerpt
- is an implementation of the [desktop metaphor](https://en.wikipedia.org/wiki/Desktop_metaphor)
````
^excerpt

# DE - Overview

A DE bundles together a variety of components to provide common GUI elements such as icons, toolbars, wallpapers, and desktop widgets. Additionally, most desktop environments include a set of integrated applications and utilities. Most importantly, desktop environments provide their own [[Window Managers (WM)|window manager]], which can however usually be replaced with another compatible one.

The user is free to configure their GUI environment in any number of ways. Desktop environments simply provide a complete and convenient means of accomplishing this task. Note that users are free to mix-and-match applications from multiple DEs. For example, a [[KDE Plasma - KDE Desktop (K Desktop Environment)|KDE]] user may install and run [[GNOME Desktop (GNU Network Object Model Environment)|GNOME]] applications such as the Epiphany web browser, should they prefer it over KDE's Konqueror web browser. One drawback of this approach is that many applications provided by desktop environment projects rely heavily upon the libraries underlying the respective desktop environment. As a result, installing applications from a range of desktop environments will require installation of a larger number of dependencies. Users seeking to conserve disk space often avoid such mixed environments, or choose alternatives which do depend on only few external libraries.

Furthermore, applications provided by desktop environments tend to integrate better with their native environments. Superficially, mixing environments with different widget toolkits will result in visual discrepancies (that is, interfaces will use different icons and widget styles). In terms of usability, mixed environments may not behave similarly (e.g. single-clicking versus double-clicking icons; drag-and-drop functionality) potentially causing confusion or unexpected behavior
# DE - Components

```merge-table
{
  "rows": [
    [
      "![[Desktop Environments (DE)/linux_basic_components_of_a_gui.png]]"
    ]
  ]
}
```
# DE - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
