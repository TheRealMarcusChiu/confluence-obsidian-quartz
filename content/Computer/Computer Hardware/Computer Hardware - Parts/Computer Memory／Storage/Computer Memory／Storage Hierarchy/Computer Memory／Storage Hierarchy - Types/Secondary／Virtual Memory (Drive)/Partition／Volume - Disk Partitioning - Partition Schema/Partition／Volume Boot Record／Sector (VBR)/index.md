---
title: "Partition／Volume Boot Record／Sector (VBR)"
created: 2020-06-10T19:54:17.509-05:00
modified: 2020-06-11T19:33:07.628-05:00
parent: "[[Partition／Volume - Disk Partitioning - Partition Schema]]"
children:
  - "[[BIOS Parameter Block (BPB)]]"
---
<strong>Volume Boot Record</strong> (<strong>VBR</strong>) - <strong>Volume boot sector</strong> - <strong>Partition Boot Record</strong> - <strong>Partition Boot Sector</strong>
- is a type of [boot sector](https://en.wikipedia.org/wiki/Boot_sector) introduced by the [IBM Personal Computer](https://en.wikipedia.org/wiki/IBM_Personal_Computer)
- is found on a[[Computer Memory／Storage Devices|data storage device]], which contains code for [bootstrapping](https://en.wikipedia.org/wiki/Bootstrapping_(computing))[programs](https://en.wikipedia.org/wiki/Computer_program) stored in other parts of the device (usually, but not necessarily, [[Operating Systems (OS)|operating systems]])
- stored on a particular partition on a [[Computer Memory／Storage Devices|storage medium]]
- contains the necessary computer code to start the boot process
- on partitioned devices, it is the first sector of an individual partition on the device, with the first sector of the entire device being a [[Master Boot Record (MBR)]] containing the [[MBR - Master Partition Table|master partition table]]
- the code in volume boot record is invoked either:
	- directly by the machine's [[Boot Firmware|boot firmware]]
	- indirectly by code in the [[Master Boot Record (MBR)|master boot record]]
	- [[Boot Loader - Boot Manager|boot manager]]

### VBR - Subsections
- [[BIOS Parameter Block (BPB)]]

### VBR - Types
- [[NTFS - Volume Boot Record (VBR) or Partition Boot Sector (PBS)]]
