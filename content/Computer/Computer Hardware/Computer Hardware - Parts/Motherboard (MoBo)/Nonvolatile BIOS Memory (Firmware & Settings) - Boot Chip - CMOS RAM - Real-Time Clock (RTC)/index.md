---
title: "Nonvolatile BIOS Memory (Firmware & Settings) - Boot Chip - CMOS RAM - Real-Time Clock (RTC)"
created: 2019-08-28T19:45:32.503-05:00
modified: 2023-01-16T00:57:40.539-06:00
parent: "[[Motherboard (MoBo)]]"
children: []
---
###### Nonvolatile BIOS Memory - Boot Chip
- it is traditionally called <strong>CMOS RAM</strong> because it uses a volatile, low-power [[Complementary Metal-Oxide Semiconductor (CMOS)|CMOS]] [[Static RAM (SRAM)|SRAM]]
- is a chip inside computers/[[Motherboard (MoBo)|motherboards]] that stores the [[Boot Firmware|boot firmware]] and its settings
	- boot firmware - originally stored in [[Single Use Programmable ROM (PROM)|PROM]], then [[Ultra Violet Light Erasable ROM (UV-EPROM)|UV-EPROM]], then [[Electrically Erasable and Programmable ROM (EEPROM)|EEPROM]], then now [[NAND Flash Memory]]
	- boot firmware settings - originally stored in CMOS RAM, then now NAND Flash Memory?
- is sometimes integrated with the <strong>Real-Time Clock</strong> <strong>(RTC) </strong>into one chip

# Boot Chip - History

The Motorola 146818 chip was the first RTC and CMOS RAM chip to be used in early IBM computers, capable of storing a total of 64 bytes of data. Since the system clock used 14 bytes of RAM, this left an additional 50 bytes for storing system settings. Today, most computers have moved the settings from CMOS and integrated them into the [southbridge](https://www.computerhope.com/jargon/s/soutbrid.htm) or [Super I/O](https://www.computerhope.com/jargon/s/sio.htm) chips.
# How Long Does the CMOS Battery Last?

The standard lifetime of a CMOS battery is around 10 Years. However, this can vary depending on the use and environment in which the computer resides.
# What Happens When CMOS battery is Removed?

the [[Boot Firmware|boot firmware]] settings are reset to the default settings
