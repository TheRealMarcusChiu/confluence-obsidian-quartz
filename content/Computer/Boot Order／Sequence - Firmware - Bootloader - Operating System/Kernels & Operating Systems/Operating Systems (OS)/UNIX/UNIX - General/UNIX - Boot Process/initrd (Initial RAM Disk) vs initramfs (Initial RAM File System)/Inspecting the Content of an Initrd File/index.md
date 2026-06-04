---
title: "Inspecting the Content of an Initrd File"
created: 2019-08-27T20:54:21.432-05:00
modified: 2024-09-01T14:14:36.413-05:00
parent: "[[initrd (Initial RAM Disk) vs initramfs (Initial RAM File System)]]"
children: []
---
If you want to look what is inside of an <strong>initrd file</strong>, here you can find some information on how you can do that. Depending on what kernel you are using you might encounter various initrd type of files.
# initrd file type
- uncompressed
- compressed
- cpio

# Uncompressed initrd/cramfs type of file

Older kernels will use a initrd/cramfs type of file. If we want to look inside this file all we have to do is to mount it (as a loop device). Example showing how to mount a file called initrd.img-2.6.8-2-686 (from a default Debian Sarge kernel):
```bash
# All work is done in a temporary directory
mkdir /tmp/initrdmount
# Mount the image file directly
mount -o loop /boot/initrd.img-2.6.8-2-686 /tmp/initrdmount
#Investigate its content, etc.
cd /tmp/initrdmount
#Once done un-mount it:
umount /tmp/initrdmount
```

Seen on: Debian Sarge, kernel 2.6.8
# Compressed initrd/cramfs type of file

This is the same as above just that the file is compressed (with gzip). If we want to look inside this file we need to uncompress it first and then mount it (as a loop device). Example showing how to mount a file called initrd-2.4.21-40.EL.img (from a default RHEL3 kernel):
```bash
# All work is done in a temporary directory
mkdir /tmp/initrdmount
# Copy the image, uncompress it
cp /boot/initrd-2.4.21-40.EL.img /tmp/initrd.img.gz
gunzip -v /tmp/initrd.img.gz
# Mount the image file
mount -o loop /tmp/initrd.img /tmp/initrdmount
#Investigate its content, etc.
cd /tmp/initrdmount
#Once done un-mount it:
umount /tmp/initrdmount
```

Seen on: [[Red Hat Enterprise Linux (RHEL)|RHEL]]3, [[CentOS]]3, kernels 2.4.21
# initramfs type of file

Newer kernels will use this type of file. The initramfs is an cpio archive so all we have to do is to uncompress it to a temporary directory. The example from bellow uses the file initrd.img-2.6.15-1-686-smp (from a default Debian Etch kernel):
```bash
# All work is done in a temporary directory
mkdir /tmp/initrdmount
# Copy the image, uncompress it
cp /boot/initrd.img-2.6.15-1-686-smp /tmp/initrd.img.gz
gunzip -v /tmp/initrd.img.gz
# Extract the content of the cpio archive
cd /tmp/initrdmount
cpio -i < /tmp/initrd.img
```

Seen on: Debian Etch, kernel 2.6.15; [[Red Hat Enterprise Linux (RHEL)|RHEL]]4, [[CentOS]]4, kernel 2.6.9.
