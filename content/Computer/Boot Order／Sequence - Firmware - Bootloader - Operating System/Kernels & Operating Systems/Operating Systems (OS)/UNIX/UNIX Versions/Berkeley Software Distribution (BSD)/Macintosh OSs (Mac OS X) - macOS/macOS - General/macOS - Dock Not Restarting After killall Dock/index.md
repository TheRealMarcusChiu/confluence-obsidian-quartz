---
title: "macOS - Dock Not Restarting After killall Dock"
created: 2019-12-27T16:21:01.754-06:00
modified: 2019-12-27T16:22:51.840-06:00
parent: "[[macOS - General]]"
children: []
---
run the following command (based on: [https://apple.stackexchange.com/questions/342443/dock-not-restarting-after-killall-dock](https://apple.stackexchange.com/questions/342443/dock-not-restarting-after-killall-dock))
```bash
killall System\ Preferences > /dev/null 2>&1 && rm ~/Library/Application\ Support/Dock/desktoppicture.db && killall Dock
```
