---
title: "dzen"
created: 2025-04-12T15:19:37.360-05:00
modified: 2025-04-12T15:21:10.221-05:00
parent: "[[Heads Up Display (HUD) - Status／Panel Bar]]"
children: []
---
###### dzen
````excerpt
- is a general purpose messaging, notification and menuing program for [[(X - X11 - X Window System) Core Protocol|X11]]
- it was designed to be scriptable in any language and integrate well with [[Window Managers (WM)|window managers]] like [[DWM|dwm]], wmii and xmonad though it will work with any windowmanger
````
^excerpt

# dzen - Examples

Dzen is really simple to use, pipe text to it, and watch it appear on your screen:
```
echo shblah | dzen2 -w 120 -x 10 -y 10 -p 5
```
