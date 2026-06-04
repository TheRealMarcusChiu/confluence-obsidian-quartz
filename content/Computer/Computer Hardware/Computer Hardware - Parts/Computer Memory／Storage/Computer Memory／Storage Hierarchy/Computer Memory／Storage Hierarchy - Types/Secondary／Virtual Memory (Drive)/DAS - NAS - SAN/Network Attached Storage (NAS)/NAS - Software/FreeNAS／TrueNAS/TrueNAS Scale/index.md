---
title: "TrueNAS Scale"
created: 2024-06-27T14:06:09.169-05:00
modified: 2024-06-27T19:16:33.675-05:00
parent: "[[FreeNAS／TrueNAS]]"
children: []
---
###### TrueNAS Scale
````excerpt
- is part of the [[FreeNAS／TrueNAS|TrueNAS]] family of software
````
^excerpt

# Setup

![](https://www.youtube.com/watch?v=C-UI8Wvl9YU)

additional setup:
- ZFS setup
- enable encryption
- Tom Lawrence - to use more than 50% RAM - [https://www.youtube.com/watch?v=3T5wBZOm4hY](https://www.youtube.com/watch?v=3T5wBZOm4hY)
- needs lots of RAM
- setup alerts when drive fails
- get UPS
- consider adding a stiped L2ARC cache SSDs
- consider moving ZIL into a mirrored SLOG in a SSD
- consider enabling snapshots

# Resources
- [https://www.truenas.com/docs/scale/gettingstarted/](https://www.truenas.com/docs/scale/gettingstarted/)
