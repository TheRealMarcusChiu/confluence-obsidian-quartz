---
title: "HA - Installation macOS Silicon via VirtualBox"
created: 2026-01-06T00:26:01.085-06:00
modified: 2026-01-06T01:40:51.065-06:00
parent: "[[HA - Installation]]"
children: []
---
see: [https://www.home-assistant.io/installation/macos/](https://www.home-assistant.io/installation/macos/)

If you need to increase size of disk after setup (16000 is in MB):
```
VBoxManage modifymedium disk /path/to/haos_generic-aarch64-16.3.vmdk --resize $SIZE_IN_MEGABYTES
VBoxManage modifymedium disk /path/to/haos_generic-aarch64-16.3.vmdk --resize 16000
```
