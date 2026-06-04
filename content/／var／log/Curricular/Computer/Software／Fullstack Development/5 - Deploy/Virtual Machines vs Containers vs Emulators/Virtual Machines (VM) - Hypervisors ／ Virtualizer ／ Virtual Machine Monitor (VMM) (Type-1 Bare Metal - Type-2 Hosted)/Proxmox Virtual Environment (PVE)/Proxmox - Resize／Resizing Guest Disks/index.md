---
title: "Proxmox - Resize／Resizing Guest Disks"
created: 2025-05-21T20:50:41.651-05:00
modified: 2025-05-23T20:07:55.442-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
To resize a guest disk you must:
1. resize in host machine
2. resize in guest machine

# 1. Resize in Host Machine
![[Proxmox - Resize／Resizing Guest Disks/proxmox-resize-disk.png|1000]]
# 2. Resize in Guest Machine

Enter parted interactive shell:
```
sudo su -
parted
```

Within the parted shell, execute the following commands:
```
print
Fix
resizepart 3 100%
```

<strong><font style="color: rgb(255,0,0);">Exit parted shell</font></strong>

Then resize partition
```
pvresize /dev/sda3
```

Then resize LVM containing the root filesystem
```
lvextend -r -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv
```
# Resources
- [https://pve.proxmox.com/wiki/Resize_disks](https://pve.proxmox.com/wiki/Resize_disks)
- [https://www.youtube.com/watch?v=rhvRs84rN9I](https://www.youtube.com/watch?v=rhvRs84rN9I)
