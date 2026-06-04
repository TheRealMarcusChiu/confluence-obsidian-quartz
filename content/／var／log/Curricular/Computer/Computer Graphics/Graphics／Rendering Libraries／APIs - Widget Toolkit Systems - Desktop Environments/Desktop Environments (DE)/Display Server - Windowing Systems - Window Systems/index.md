---
title: "Display Server - Windowing Systems - Window Systems"
created: 2020-07-05T11:11:24.753-05:00
modified: 2025-01-23T00:06:38.712-06:00
parent: "[[Desktop Environments (DE)]]"
children:
  - "[[(X - X11 - X Window System) Core Protocol]]"
  - "[[Quartz Compositor]]"
  - "[[Wayland]]"
  - "[[Windowing System Interface (WSI)]]"
---
###### Display Server - Windowing Systems - Window Systems
````excerpt
- is software that manages separately different parts of display screens
- it is a type of graphical user interface (GUI) which implements the WIMP (windows, icons, menus, pointer) paradigm for a user interface
````
^excerpt

# Display Server - Diagram

```merge-table
{
  "rows": [
    [
      "![[Display Server - Windowing Systems - Window Systems/Schema_of_the_layers_of_the_graphical_user_interface.png|450]]",
      ""
    ]
  ]
}
```
# Display Server - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[(X - X11 - X Window System) Core Protocol|X Core Protocol]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "UNIX"
    ],
    [
      {
        "content": "[[Wayland]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "UNIX"
    ],
    [
      {
        "content": "[[Quartz Compositor]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "MacOS"
    ]
  ]
}
```
# Display Server - Other
- [[Window Manager vs Display Server ／ Windowing System|Window Manager vs Display Server / Windowing System]]
