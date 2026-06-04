---
title: "Proxmox - Disk Pass Through"
created: 2025-05-22T16:33:52.140-05:00
modified: 2025-05-22T16:37:29.780-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
On the Proxmox Server list all disks by ID:
```
> ls -n /dev/disk/by-id/
...
lrwxrwxrwx 1 0 0  9 May 21 15:03 wwn-0x5000000000018006 -> ../../sda
lrwxrwxrwx 1 0 0  9 May 21 14:52 wwn-0x5002538f44113b6a -> ../../sdb
```

Say our disk we want to pass through is <code><font style="color: rgb(122,134,154);">wwn-0x5000000000018006</font></code>.

On the Proxmox Server, execute the following for disk pass through:
```
/sbin/qm set VM_ID_HERE -virtio2 /dev/disk/by-id/SELECTED_DISK_HERE
```

In Proxmox UI navigate to the VM \> Hardware \> Select the added Disk \> Edit and uncheck backup.
# Resources
- [https://www.youtube.com/watch?v=U-UTMuhmC1U](https://www.youtube.com/watch?v=U-UTMuhmC1U)
