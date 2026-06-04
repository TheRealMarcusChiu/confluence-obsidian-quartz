---
title: "Proxmox - Add Drive"
created: 2022-11-05T03:35:49.223-05:00
modified: 2022-11-05T22:47:18.341-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
# Open Shell

Install parted
```
apt update
apt install parted -y
```

Apply drive label
```
parted /dev/[drive-name] mklabel gpt
```

Partition a full drive
```
parted -a opt /dev/[drive-name] mkpart primary ext4 0% 100%
```

Give drive a name just to make it easier to work with (name = Storage)
```
mkfs.ext4 -L [your drive name] /dev/[found drive name followed by 1]
```

Make a directory for proxmox to mount the drive to
```
mkdir -p [path to mount folder]
```

Update fstab so drive will auto mount on reboot
```
vim /etc/fstab
```

Inside /etc/fstab add the following
```
LABEL=[drive name] [mount path] ext4 defaults 0 2
```

Because, we don't want to reboot server, run the following to mount the new drive
```
mount -a
```

Close shell
# Open Proxmox Console

datacenter \> storage \> add \> directory
- enter name for drive (any name)
- enter mount location
- click add
