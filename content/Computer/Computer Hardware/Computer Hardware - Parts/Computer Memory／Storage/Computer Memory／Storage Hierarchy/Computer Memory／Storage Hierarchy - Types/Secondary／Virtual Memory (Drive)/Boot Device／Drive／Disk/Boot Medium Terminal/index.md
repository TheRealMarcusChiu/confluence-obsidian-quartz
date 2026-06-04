---
title: "Boot Medium Terminal"
created: 2019-03-15T02:04:44.223-05:00
modified: 2019-03-15T02:07:13.056-05:00
parent: "[[Boot Device／Drive／Disk]]"
children: []
---
<strong>Create Bootable Stick on Mac</strong>

[https://help.ubuntu.com/community/How%20to%20install%20Ubuntu%20on%20MacBook%20using%20USB%20Stick](https://help.ubuntu.com/community/How%20to%20install%20Ubuntu%20on%20MacBook%20using%20USB%20Stick)

<strong>ddrescue</strong>

[https://ubuntu-pi-flavour-maker.org/download/](https://ubuntu-pi-flavour-maker.org/download/)
1. sudo apt-get install gddrescue
2. unxz ubuntu-mate-16.04-desktop-armhf-raspberry-pi.img.xz
3. sudo ddrescue -d -D --force ubuntu-mate-16.04-desktop-armhf-raspberry-pi.img /dev/sdx

<strong>Install Ubuntu on Mac Command line</strong>

[https://computers.tutsplus.com/tutorials/how-to-create-a-bootable-ubuntu-usb-drive-for-pc-on-a-mac--cms-21187](https://computers.tutsplus.com/tutorials/how-to-create-a-bootable-ubuntu-usb-drive-for-pc-on-a-mac--cms-21187)[https://help.ubuntu.com/community/How%20to%20install%20Ubuntu%20on%20MacBook%20using%20USB%20Stick](https://help.ubuntu.com/community/How%20to%20install%20Ubuntu%20on%20MacBook%20using%20USB%20Stick)
1. Convert the .iso file to .img using the convert option of hdiutil
   
   hdiutil convert /path/to/ubuntu.iso -format UDRW -o /path/to/target.img
2. determine the device node assigned to your flash media (e.g. /dev/disk2)
   
   diskutil list
3. unmount
   
   diskutil unmountDisk /dev/diskN
4. this takes a very long time
   
   sudo dd if=/path/to/downloaded.img of=/dev/diskN bs=1m
   
   once it’s done, don’t click on any of the Mac popups
5. remove your flash media
   
   diskutil eject /dev/diskN
