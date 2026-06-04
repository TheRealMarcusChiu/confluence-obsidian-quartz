---
title: "vim - Edit in Binary／Byte／Hex Mode"
created: 2022-09-25T21:35:33.703-05:00
modified: 2022-09-25T21:40:12.040-05:00
parent: "[[vi - vim]]"
children: []
---
# Transform Text to Hex
```
:%!xxd
```
- <strong><code>:</code></strong> enters command-line mode
- <strong><code>%</code></strong> matches the entire file as a range
- <strong><code>!</code></strong> filters that range through an external command
- <strong><code>xxd</code></strong> is that external shell command

# Do Hex Edits
Do hex edits
# Transform Hex to Text
```
:%!xxd -r
```
