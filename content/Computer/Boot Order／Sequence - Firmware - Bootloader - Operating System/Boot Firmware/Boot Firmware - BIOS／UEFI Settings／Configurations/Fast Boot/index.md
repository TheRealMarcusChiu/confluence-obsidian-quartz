---
title: "Fast Boot"
created: 2023-12-08T15:29:48.988-06:00
modified: 2023-12-08T15:30:33.077-06:00
parent: "[[Boot Firmware - BIOS／UEFI Settings／Configurations]]"
children: []
---
Fast boot in [[Windows]] settings - Disable this if you are dual-booting. It's a Windows feature similar to hibernate, it saves Windows state to disk when you shut down and loads up from it to save boot time. It will also prevent you from mounting Windows partitions as R/W in [[Linux]].

Fast boot in [[Unified EFI (UEFI)|UEFI]] Settings - Skips some initial tests your computer runs at startup, disables some boot devices and USB won't be available until OS loads up. If you OC or regularly access UEFI or live USB then disable this.
