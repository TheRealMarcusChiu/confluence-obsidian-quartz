---
title: "Ricing"
created: 2025-04-12T15:05:40.631-05:00
modified: 2025-12-25T02:20:01.894-06:00
parent: "[[UNIX - General]]"
children:
  - "[[Heads Up Display (HUD) - Status／Panel Bar]]"
  - "[[Program／Application Launcher]]"
---
###### Ricing
````excerpt
- is customizing your desktop
````
^excerpt

# Ricing - Components

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Window Managers (WM)|Window Managers]]",
        "bg": "#F4F5F7"
      },
      "- the most popular WMs at the moment seem to be the young [[bspwm]] and the widely used [[i3|i3wm]], though people are also making some awesome [[OpenBox|openbox]] desktops"
    ],
    [
      {
        "content": "[[Heads Up Display (HUD) - Status／Panel Bar|Heads Up Display (HUD)]]",
        "bg": "#F4F5F7"
      },
      "- Lots of redditors are also using some sort panel or bar in the configuration which displays all sorts of information such as the time, volume, even the current song playing. I’m not going to go into much details on how panels work, but if your interested check out z3bra’s great introduction\n- At the moment, [[lemonbar]] seems to be the best option for creating a panel in your WM but other options such as i3bar also work great and are built into i3wm"
    ],
    [
      {
        "content": "[[Program／Application Launcher|Program Launcher]]",
        "bg": "#F4F5F7"
      },
      "- When it comes to launching programs in linux, there has always been many ways to do it. You could just execute the program from a terminal emulator but that’s lame and some programs make the terminal log for errors when executed like this. As I write this post [[dmenu]] and rofi are the goto applications launchers for many ricers. Rofi is actually “A window switcher, run dialog and dmenu replacement” according to its homepage which means it can do a lot more than just execute your web browser (most of which I have yet to experiment with)."
    ],
    [
      {
        "content": "[[Terminal Application／Emulation／Emulator|Terminal Emulator]]",
        "bg": "#F4F5F7"
      },
      "- The last part of ricing that I’m going to explain in this guide is the terminal emulator. The terminal emulator allows the user to interact with the Unix shell while in the X environment, according to the Arch Wiki. I personally use urxvt, or rxvt-unicode, which I think works very well with window managers and is very customizable through the .Xresource file in your home directory. The terminal is a very important part of a good ricing and is very"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Ricing - Examples

![](https://www.youtube.com/watch?v=XK7gal3Wrtk)
