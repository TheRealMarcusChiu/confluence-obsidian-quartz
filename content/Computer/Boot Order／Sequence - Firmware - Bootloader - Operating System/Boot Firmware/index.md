---
title: "Boot Firmware"
created: 2019-03-15T02:00:16.920-05:00
modified: 2024-08-22T16:28:12.524-05:00
parent: "[[Boot Order／Sequence - Firmware - Bootloader - Operating System]]"
children:
  - "[[Boot Firmware - BIOS／UEFI Settings／Configurations]]"
  - "[[Boot Firmware - Types]]"
---
###### Boot Firmware
````excerpt
- is (low-level software) that starts when you boot your PC before booting your [[Operating Systems (OS)|operating system]]
- the firmware itself and its settings are stored in the [[Nonvolatile BIOS Memory (Firmware & Settings) - Boot Chip - CMOS RAM - Real-Time Clock (RTC)|Boot Chip]]
````
^excerpt

# Boot Firmware - Functions
the <em>primary function</em> of <strong>boot firmware</strong> is to initialize the hardware and then to "boot" (load and execute) the primary operating system. 

the <em>secondary functions</em> include:
- Power-On Self-Test (POST) - testing the hardware
- managing hardware configuration information
- providing tools for debugging in case of faulty hardware or software

# [[Boot Firmware - Types]]
![[Boot Firmware - Types#^excerpt]]
# [[Boot Firmware - BIOS／UEFI Settings／Configurations|Boot Firmware - BIOS/UEFI Settings & Configurations]]
```dataview
LIST
FROM ""
WHERE file.folder = [[Boot Firmware - BIOS／UEFI Settings／Configurations]].file.folder + "/" + [[Boot Firmware - BIOS／UEFI Settings／Configurations]].file.name
```
