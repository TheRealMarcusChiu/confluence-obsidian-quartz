---
title: "conky"
created: 2025-04-12T15:21:23.219-05:00
modified: 2025-04-12T15:24:22.537-05:00
parent: "[[Heads Up Display (HUD) - Status／Panel Bar]]"
children: []
---
###### conky
````excerpt
- is the king of [[Heads Up Display (HUD) - Status／Panel Bar|HUD]]s
- it is extensible in [[Lua|lua]]
````
^excerpt

# conky - Example

Conky reads its configuration from the \~/.conkyrc file. A minimalist config would be:
```
cat <<EOF > ~/.conkyrc
alignment tl
gap_x 10
gap_y 40

TEXT
shblah
EOF
conky &
```
