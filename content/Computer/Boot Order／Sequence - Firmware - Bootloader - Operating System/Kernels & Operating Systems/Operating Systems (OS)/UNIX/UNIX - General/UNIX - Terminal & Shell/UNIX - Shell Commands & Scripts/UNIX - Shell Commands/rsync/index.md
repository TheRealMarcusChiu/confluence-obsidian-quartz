---
title: "rsync"
created: 2019-03-15T15:47:40.005-05:00
modified: 2025-12-30T00:49:36.519-06:00
parent: "[[UNIX - Shell Commands]]"
children: []
---
###### rsync
````excerpt
- used for transferring and synchronizing files between computers or storage devices
````
^excerpt

# Examples

rsync everything from <code><font style="color: rgb(122,134,154);">\~/ComputerScience</font></code> to flash drive named <code><font style="color: rgb(122,134,154);">CS\_BACKUP</font></code>:
```
rsync -avP --delete ~/ComputerScience/ /Volumes/CS_BACKUP/ComputerScience/
```

rsync over the internet
```
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress /root/bigfile.txt username@198.211.117.129:/
```
# Other Use Cases
- [[Backup Script - Local 2 Remote]]
