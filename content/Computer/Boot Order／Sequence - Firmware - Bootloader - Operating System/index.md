---
title: "Boot Order／Sequence - Firmware - Bootloader - Operating System"
created: 2019-03-15T02:00:40.014-05:00
modified: 2025-05-18T17:08:22.627-05:00
parent: "[[Computer]]"
children:
  - "[[Boot Firmware]]"
  - "[[Boot Loader - Boot Manager]]"
  - "[[Kernels & Operating Systems]]"
---
# Boot Order/Sequence
the diagram below shows how control passes from the [[Boot Firmware]] ([[Basic Input／Output System (BIOS)|BIOS]] or [[Unified EFI (UEFI)|UEFI]]) to the disk's [[Partition／Volume - Disk Partitioning - Partition Schema|partition schema]] to the [[Boot Loader - Boot Manager|bootloader]] and then to the [[Operating Systems (OS)|operating system]]

![[Boot Order／Sequence - Firmware - Bootloader - Operating System/bios-vs-uefi.png]]

> [!expand]- boot sequence/order details
> The system BIOS, a small bit of code inserted in the BIOS prom chip located on your computer's motherboard, is what starts the computer running when you turn it on. Below we have outlined the typical sequence of events that occur during your computer's startup process, although they will vary by the manufacturer of your hardware, BIOS, and the peripherals you have in the PC. Again, this is a typical sequence of events that occur when you turn on your computers power switch:
> 1. The internal power supply turns on, initializes, and then takes a few moments to generate reliable power for the rest of the computer. If the power received by the motherboard's chipset, and subsequently the processor, is not within expected parameters, the chipset will generate a reset signal to the processor in the same fashion as if you were to touch the reset button. This will continue until the motherboard receives a Power Good signal from the power supply or you turn the system off because of a failed power supply.
> 2. After a Power Good signal is received, or after the reset button is released and there is confirmation of reliable power, the processor will be ready to start executing. When the processor first starts, it really has no idea what to do next as there is nothing at all in the memory to execute. Of course, the processor designers are aware of this, so they pre-program the processor to always look at the same place in the system, the BIOS ROM, for the small bit of startup code to begin the boot process. This is typically located at memory location FFFF0h, or right at the end of the system memory. Developers locate it there in the event the size of the ROM has to be changed so as to prevent compatibility problems. Since there are only 16 bytes from there to the end of the conventional memory area, this location contains just a "jump" instruction telling the processor where to go to find the real BIOS startup program.
> 3. The BIOS performs the <strong>power-on self-test (POST)</strong>. If there are any fatal errors, the boot process stops. If the POST is successful, the BIOS calls INT 19 (Interrupt 19) and then proceeds to look for devices attached to the motherboard.
> 4. The BIOS code begins its search by looking for a video card, more particularly, it's looking for the video card's built-in BIOS program, (normally found at location C000h in memory) and if found, runs it. The system BIOS executes the video card BIOS, which in turn initializes the video card. Most modern video cards will display information on the screen about the video card, which is why on some modern PC's you usually see something on the screen about the video card before you see the messages from the system BIOS itself.
> 5. Once the video has been enabled, the BIOS begins searching for other devices that may have their own ROM and whether that ROM has its own BIOS code. Normally, the floppy drive is located at 0000:7C00, and the IDE/ATA hard disk BIOS will be found at C8000h. If a floppy and/or hard drive is found, their codes are executed. If during this INT 19 process, any other device BIOS's are found, they are executed as well.
> 6. The BIOS displays its <strong>startup screen</strong>, which provides some key information about the BIOS as well as other system information.
> 7. As the boot sequence continues, the BIOS continues to perform additional tests on the system. Depending upon the system manufacturer, this will usually include a memory count. The BIOS will generally display an error message on the screen if it encounters an error when it counts installed memory. You will find these error messages and their explanations in our <strong>[Support Center](http://www.dewassoc.com/support/index.html)</strong> in the <strong>Motherboard and BIOS</strong> section or you can <strong>[click here](http://www.dewassoc.com/support/bios/boot_process_errors.htm)</strong>. (Clicking here will open a new window)
> 8. During the next phase of the BIOS startup process, it performs somewhat of an inventory of the hardware installed in the system, and then communicates or interrogates it to ensure that the hardware is functioning. Most modern BIOS's have automatic settings to collect information such as memory timing, based on what kind of memory it finds. Today's BIOS's dynamically set hard drive parameters and access modes and will display a message on the screen for each drive they detect and configure in this way. It will also search for and label logical devices such as COM and LPT ports. Note: If the BIOS supports the Plug and Play standard, and the feature is enabled, this is the point at which it will detect and configure Plug and Play devices and display a message on the screen for each one found.
> 9. During the final phase of the POST and BIOS boot process, the BIOS will display a summary screen with your system's configuration. While early machines, 486 through Pentium II, were fairly accurate about the system configuration information, later machines using the later Pentium III and AMD processors can have some inaccurate information. This is usually related to BIOS setup issues involving processor information. Checking this data can be helpful in diagnosing setup problems, although it can be hard to see because sometimes it flashes on the screen and then scrolls off the top.
> 10. Once the BIOS finishes what it needs to do, it begins searching for a drive to boot an operating system. All BIOS's contain a setting that controls this search sequence for a boot drive. Most are set to first look for a bootable floppy disk, and if one is not found then proceed to a hard disk, which is usually the C: drive. Some BIOS's permit you to boot from your CD-ROM drive or other devices such as a SCSI (Small Computer System Interface), depending on the boot sequence selected. Once the BIOS identifies its target boot drive, then it looks for boot information to start the operating system boot process. If it is searching a hard disk, it looks for a master boot record at cylinder 0, head 0, sector 1, the first sector on the disk. If it is searching a floppy disk, it looks at the same address on the floppy disk for a volume boot sector.
> 11. Once the boot sector is found and its contents or data verified, the BIOS starts the process of booting the operating system by using the information in the boot sector. If this is a floppy disk boot sector, the information is read into memory at location 0000:7c00. INT 19 goes to memory location 0000:7c00 to continue the process. If no boot sector is found on the floppy drive, INT 19 moves to the next bootable drive in the list provided by the motherboard BIOS, usually a hard drive, and then attempts to read the MBR. If a Master Boot Record is found, it is read into memory at location 0000:7c00 and INT 19 jumps to memory location 0000:7c00 the same as was the case with the floppy. At this point, the BIOS attempts to move control of the computer from the BIOS to the actual operating system.
>     
>     Next, the small program in the Master Boot Record will attempt to locate an active (bootable) partition in the hard drives partition table. If such a partition is found, the boot sector of that partition is also read into memory at location 0000:7C00 and then the MBR program itself jumps to memory location 0000:7C00. Keep in mind that each operating system has its own boot sector format. The next step involves the small program in the boot sector locating the first part of the operating system's kernel loader program or in some cases the kernel itself or perhaps a boot manager program, and read then that into memory. For you Windows NT and Windows 2000 fans, this kernel loader is referred to as NTLDR. You will find a <strong>[description of the DOS boot process here](http://www.dewassoc.com/support/msdos/dos_boot_process.htm)</strong>.
> 12. If no boot device of any type can be found, the system will display an error message and stop. The specific error message depends on the BIOS developer and/or the computer's manufacturer, and can be anything from a rather clear "No boot device" to the very cryptic "NO ROM BASIC - SYSTEM HALTED". This will also happen if you have a bootable hard disk partition but forget to set it active. Believe it or not, you can partition a drive, format it, and install the operating system and never realize that there is a problem until the first start of that operating system occurs.
>
> This entire process is referred to as a "cold boot" (since the machine was off, or cold, when it started). A "warm boot" also known as a "soft boot" is the same thing except it occurs when the machine is rebooted using the Ctrl + Alt + Del keys. In this case, the POST is skipped and the boot process continues at roughly step 8 above. As a side note, INT 19 is also called when the CTRL-ALT-DEL keys are used. On most systems, Ctrl + Alt + Del causes a soft-boot or shortened version of the POST to be executed before INT 19 is called

```merge-table
{
  "rows": [
    [
      {
        "content": "Thing",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Boot Firmware]]",
        "bg": "#F4F5F7"
      },
      "![[Boot Firmware#^excerpt]]",
      "- [[Basic Input／Output System (BIOS)|BIOS]]\n- [[Unified EFI (UEFI)|UEFI]]"
    ],
    [
      {
        "content": "[[Boot Loader - Boot Manager|Boot Loader]]\n[[Boot Loader - Boot Manager|Boot Manager]]",
        "bg": "#F4F5F7"
      },
      "![[Boot Loader - Boot Manager#^excerpt]]",
      "- [[Master Boot Record (MBR)|MBR]]\n- [[GRand Unified Bootloader (GRUB 2)]]"
    ],
    [
      {
        "content": "[[Kernels & Operating Systems|Kernel]]\n[[Kernels & Operating Systems|Operating System]]",
        "bg": "#F4F5F7"
      },
      "![[Kernels & Operating Systems#^excerpt]]",
      "- [[Windows]]\n- [[Linux]]\n- [[Macintosh OSs (Mac OS X) - macOS|mac OS]]"
    ]
  ]
}
```
# Boot Medium Preparation
- [[Boot Device／Drive／Disk|Boot Device/Drive/Disk]]
