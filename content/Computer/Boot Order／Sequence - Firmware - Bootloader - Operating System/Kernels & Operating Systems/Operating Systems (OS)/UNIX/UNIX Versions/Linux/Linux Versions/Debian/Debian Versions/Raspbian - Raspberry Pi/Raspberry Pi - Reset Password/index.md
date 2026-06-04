---
title: "Raspberry Pi - Reset Password"
created: 2019-04-10T21:39:36.948-05:00
modified: 2019-04-10T21:39:51.037-05:00
parent: "[[Raspbian - Raspberry Pi]]"
children: []
---
[http://www.mapledyne.com/ideas/2015/8/4/reset-lost-admin-password-for-raspberry-pi](http://www.mapledyne.com/ideas/2015/8/4/reset-lost-admin-password-for-raspberry-pi)
- Power down and pull the SD card out from your Pi and put it into your computer.
- Open the file 'cmdline.txt' and add 'init=/bin/sh' to the end. This will cause the machine to boot to single user mode.
- Put the SD card back in the Pi and boot.
- apparently Mac’s Wired Keyboard does not work during boot up
- When the flashing prompt comes up, type this so you can write to it mount -rw -o remount /
- type 'su' to log in as root (no password needed).
- Type "passwd pi" and then follow the prompts to enter a new password.
- Shut the machine down, then pull the card again and put the cmdline.txt file back the way it was by removing the 'init=/bin/sh' bit.
