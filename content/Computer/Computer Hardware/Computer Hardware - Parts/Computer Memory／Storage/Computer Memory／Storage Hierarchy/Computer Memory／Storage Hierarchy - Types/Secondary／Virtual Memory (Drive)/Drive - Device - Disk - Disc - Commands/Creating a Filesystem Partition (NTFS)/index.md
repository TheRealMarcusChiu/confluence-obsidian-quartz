---
title: "Creating a Filesystem Partition (NTFS)"
created: 2020-06-07T10:49:10.646-05:00
modified: 2022-09-24T01:03:58.731-05:00
parent: "[[Drive - Device - Disk - Disc - Commands]]"
children: []
---
# Find Disk Device (/dev/sdx)

list disks
```
fdisk -l
```

print message buffer of the kernel (typically contains the messages produced by the device drivers)
```
dmesg
```
# Create Partition

initiate fdisk interaction
```
fdisk /dev/sdx
```

commands:
- to create the partition: <strong>n</strong> \[enter\]
- to give a type to the partition: <strong>t</strong>
	- choose \[7\] for NTFS
- if you want to make it bootable: <strong>a</strong>
- to see the changes: <strong>p</strong>
- to write the changes: <strong>w</strong>

command explanations:
- <strong>p</strong> print the partition table
- <strong>n</strong> create a new partition
	- <strong>t</strong> assign partition type
	- <strong>a</strong> make current partition bootable
- <strong>d</strong> delete a partition
- <strong>q</strong> quit without saving changes
- <strong>w</strong> write the new partition table and exit

# Create Filesystem

create a ntfs filesystem on /dev/sdx1:
```
mkfs.ntfs -f /dev/sdx1
```
- <code>-f</code> argument makes the command run fast, skipping both the bad block check and the zeroing of the storage

# Mount Disk
```
mount /dev/sdx1 /mnt/myNtfsDevice
```
