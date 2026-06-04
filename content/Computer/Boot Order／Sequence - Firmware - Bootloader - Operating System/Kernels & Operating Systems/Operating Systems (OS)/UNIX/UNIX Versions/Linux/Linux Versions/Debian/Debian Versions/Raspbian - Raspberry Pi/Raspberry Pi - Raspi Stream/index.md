---
title: "Raspberry Pi - Raspi Stream"
created: 2019-04-10T21:37:44.979-05:00
modified: 2019-04-10T21:38:44.084-05:00
parent: "[[Raspbian - Raspberry Pi]]"
children: []
---
```bash
#!/bin/bash
 
if [ ! -d /tmp/stream ]
then
   mkdir /tmp/stream/
fi
 
if pgrep raspistill > /dev/null
then
   echo "raspistill already running"
else
   echo "raspistill not running"
fi
 
if pgrep mjpg_streamer > /dev/null
then
   echo "mjpg_streamer already running"
else 
   echo "mjpg_streamer not running"
fi
```
```bash
#!/bin/bash
 
if pgrep raspistill
then
   kill $(pgrep raspistill) > /dev/null 2>&1
   echo "raspistill stopped"
else
   echo "raspistill not running"
fi
 
if pgrep mjpg_streamer
then
   kill $(pgrep mjpg_streamer) > /dev/null 2>&1
   echo "mjpg_streamer stopped"
else
   echo "mjpg_streamer not running"
fi
```
