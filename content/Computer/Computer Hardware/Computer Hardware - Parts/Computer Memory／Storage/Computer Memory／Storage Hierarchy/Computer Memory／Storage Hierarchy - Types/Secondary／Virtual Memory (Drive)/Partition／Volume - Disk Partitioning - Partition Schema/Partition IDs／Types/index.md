---
title: "Partition IDs／Types"
created: 2020-06-10T12:05:23.745-05:00
modified: 2020-06-10T13:30:58.665-05:00
parent: "[[Partition／Volume - Disk Partitioning - Partition Schema]]"
children: []
---
This is a list of known master boot record partition types on [IBM PC compatible](https://en.wikipedia.org/wiki/IBM_PC_compatible) computers:

```merge-table
{
  "rows": [
    [
      {
        "content": "Partition ID",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Occurrence",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Access",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Bootable",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Origin",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Supported by",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "00h",
      "Empty partition entry",
      "[MBR](https://en.wikipedia.org/wiki/Master_boot_record), [EBR](https://en.wikipedia.org/wiki/Extended_boot_record)",
      {
        "content": "N/A",
        "align": "center"
      },
      "No",
      "Free",
      "[IBM](https://en.wikipedia.org/wiki/IBM)",
      "All"
    ],
    [
      "01h",
      "[FAT12](https://en.wikipedia.org/wiki/FAT12) as primary partition in first physical 32 MB of disk or as logical drive anywhere on disk (else use [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h) instead)",
      "MBR, EBR",
      "[CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector), [LBA](https://en.wikipedia.org/wiki/Logical_Block_Addressing)",
      "x86, 68000, 8080/Z80",
      "File system",
      "IBM",
      "[DOS](https://en.wikipedia.org/wiki/DOS) 2.0+"
    ],
    [
      "02h",
      "XENIX root (see [03h](https://en.wikipedia.org/wiki/Partition_type#PID_03h) and [FFh](https://en.wikipedia.org/wiki/Partition_type#PID_FFh))",
      "MBR",
      "CHS",
      "x86, 68000, Z8000, PDP-11",
      "File system",
      "[Microsoft](https://en.wikipedia.org/wiki/Microsoft), [SCO](https://en.wikipedia.org/wiki/Santa_Cruz_Operation)",
      "[XENIX](https://en.wikipedia.org/wiki/XENIX)"
    ],
    [
      "03h",
      "XENIX usr (see [02h](https://en.wikipedia.org/wiki/Partition_type#PID_02h) and [FFh](https://en.wikipedia.org/wiki/Partition_type#PID_FFh))",
      "MBR",
      "CHS",
      "No",
      "File system",
      "Microsoft, SCO",
      "XENIX"
    ],
    [
      "04h",
      "[FAT16](https://en.wikipedia.org/wiki/FAT16) with less than 65536 sectors (32 MB). As primary partition it must reside in first physical 32 MB of disk, or as logical drive anywhere on disk (else use [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h) instead)",
      "MBR, EBR",
      "CHS, LBA",
      "x86, 68000, 8080/Z80",
      "File system",
      "Microsoft",
      "DOS 3.0+"
    ],
    [
      "05h",
      "[Extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector) addressing. It must reside within the first physical 8 GB of disk, else use [0Fh](https://en.wikipedia.org/wiki/Partition_type#PID_0Fh) instead (see [0Fh](https://en.wikipedia.org/wiki/Partition_type#PID_0Fh), [85h](https://en.wikipedia.org/wiki/Partition_type#PID_85h), [C5h](https://en.wikipedia.org/wiki/Partition_type#PID_C5h), [D5h](https://en.wikipedia.org/wiki/Partition_type#PID_D5h))",
      "MBR, EBR",
      "CHS, (LBA)",
      "No, [AAP](https://en.wikipedia.org/wiki/Advanced_Active_Partition)",
      "Container",
      "IBM",
      "Some versions of DOS 3.2, DOS 3.3+"
    ],
    [
      "06h",
      "[FAT16B](https://en.wikipedia.org/wiki/FAT16B) with 65536 or more sectors. It must reside within the first 8 GB of disk unless used for logical drives in an [0Fh](https://en.wikipedia.org/wiki/Partition_type#PID_0Fh) extended partition (else use [0Eh](https://en.wikipedia.org/wiki/Partition_type#PID_0Eh) instead). Also used for FAT12 and FAT16 volumes in primary partitions if they are not residing in first physical 32 MB of disk",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "File system",
      "[Compaq](https://en.wikipedia.org/wiki/Compaq)",
      "DOS 3.31+"
    ],
    [
      {
        "content": "07h",
        "rowspan": 5
      },
      "[IFS](https://en.wikipedia.org/wiki/Installable_file_system)",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "File system",
      "Microsoft, IBM",
      "[OS/2](https://en.wikipedia.org/wiki/OS/2) 1.2+"
    ],
    [
      "[HPFS](https://en.wikipedia.org/wiki/High_Performance_File_System)",
      "MBR, EBR",
      "CHS, LBA",
      "286",
      "File system",
      "IBM",
      "OS/2 1.2+, Windows NT"
    ],
    [
      "[NTFS](https://en.wikipedia.org/wiki/NTFS)",
      "MBR, EBR",
      "CHS, LBA",
      "386",
      "File system",
      "Microsoft",
      "[Windows NT](https://en.wikipedia.org/wiki/Windows_NT)"
    ],
    [
      "[exFAT](https://en.wikipedia.org/wiki/ExFAT)",
      "MBR, EBR",
      "CHS, LBA",
      "Yes",
      "File system",
      "Microsoft",
      "[Windows Embedded CE](https://en.wikipedia.org/wiki/Windows_Embedded_CE)"
    ],
    [
      "QNX \"qnx\" (7) (pre-1988 only)",
      "",
      "",
      "",
      "File system",
      "[Quantum Software Systems](https://en.wikipedia.org/wiki/Quantum_Software_Systems)",
      "[QNX](https://en.wikipedia.org/wiki/QNX) 2"
    ],
    [
      {
        "content": "08h",
        "rowspan": 5
      },
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT)",
      "MBR",
      "CHS",
      "x86",
      "File system",
      "[Commodore](https://en.wikipedia.org/wiki/Commodore_International)",
      "Commodore MS-DOS 3.x"
    ],
    [
      "OS/2 (FAT?)",
      "",
      "CHS",
      "x86",
      "File system",
      "IBM",
      "OS/2 1.0-1.3"
    ],
    [
      "AIX boot/split",
      "",
      "",
      "",
      "File system",
      "IBM",
      "[AIX](https://en.wikipedia.org/wiki/AIX)"
    ],
    [
      "QNX \"qny\" (8)",
      "",
      "",
      "",
      "File system",
      "Quantum Software Systems",
      "QNX 1.x/2.x"
    ],
    [
      "Partition spanning multiple drives",
      "",
      "",
      "",
      "Container",
      "[Dell](https://en.wikipedia.org/wiki/Dell)",
      ""
    ],
    [
      {
        "content": "09h",
        "rowspan": 4
      },
      "AIX data/boot",
      "",
      "",
      "",
      "File system",
      "IBM",
      "AIX"
    ],
    [
      "QNX \"qnz\" (9)",
      "",
      "",
      "",
      "File system",
      "Quantum Software Systems",
      "QNX 1.x/2.x"
    ],
    [
      "Coherent file system",
      "MBR",
      "CHS",
      "286",
      "File system",
      "[Mark Williams Company](https://en.wikipedia.org/wiki/Mark_Williams_Company)",
      "[Coherent](https://en.wikipedia.org/wiki/Coherent_(operating_system))"
    ],
    [
      "OS-9 RBF",
      "MBR",
      "",
      "",
      "File system",
      "[Microware](https://en.wikipedia.org/wiki/Microware)",
      "[OS-9](https://en.wikipedia.org/wiki/OS-9)"
    ],
    [
      {
        "content": "0Ah",
        "rowspan": 2
      },
      "OS/2 Boot Manager",
      "",
      "",
      "",
      "Service",
      "[PowerQuest](https://en.wikipedia.org/wiki/PowerQuest), IBM",
      "OS/2"
    ],
    [
      "Coherent swap partition",
      "",
      "",
      "",
      "Swap",
      "Mark Williams Company",
      "Coherent"
    ],
    [
      "0Bh",
      "[FAT32](https://en.wikipedia.org/wiki/FAT32) with [CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector) addressing",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "File system",
      "Microsoft",
      "DOS 7.1+"
    ],
    [
      "0Ch",
      "[FAT32](https://en.wikipedia.org/wiki/FAT32) with [LBA](https://en.wikipedia.org/wiki/Logical_block_addressing)",
      "MBR, EBR",
      "LBA",
      "x86",
      "File system",
      "Microsoft",
      "DOS 7.1+"
    ],
    [
      "0Eh",
      "FAT16B with LBA",
      "MBR, EBR",
      "LBA",
      "x86",
      "File system",
      "Microsoft",
      "DOS 7.0+"
    ],
    [
      "0Fh",
      "[Extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with LBA (see [05h](https://en.wikipedia.org/wiki/Partition_type#PID_05h) and [CFh](https://en.wikipedia.org/wiki/Partition_type#PID_CFh))",
      "MBR, EBR",
      "LBA",
      "No, AAP",
      "Container",
      "Microsoft",
      "DOS 7.0+"
    ],
    [
      "10h",
      "",
      "",
      "",
      "",
      "?",
      "Unisys",
      "OPUS"
    ],
    [
      {
        "content": "11h",
        "rowspan": 2
      },
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT)",
      "MBR",
      "CHS",
      "x86",
      "File system",
      "[Leading Edge](https://en.wikipedia.org/wiki/Leading_Edge_Hardware_Products)",
      "Leading Edge MS-DOS 3.x"
    ],
    [
      "Hidden FAT12 (corresponds with [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h))",
      "",
      "",
      "",
      "Hidden FS",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      {
        "content": "12h",
        "rowspan": 6
      },
      "Configuration partition (bootable [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table) with MS-DOS); Recovery partition (bootable FAT32 with Windows setup)",
      "MBR",
      "CHS, LBA",
      "x86",
      "Service FS",
      "Compaq",
      ""
    ],
    [
      "EISA configuration utility for the system",
      "MBR",
      "",
      "x86",
      "Service",
      "[Gang of Nine](https://en.wikipedia.org/wiki/Extended_Industry_Standard_Architecture)",
      "[EISA](https://en.wikipedia.org/wiki/Extended_Industry_Standard_Architecture) machines"
    ],
    [
      "Hibernation partition",
      "",
      "",
      "",
      "Hibernation",
      "Compaq",
      "[Compaq Contura](https://en.wikipedia.org/wiki/Compaq_Contura)"
    ],
    [
      "Diagnostics and firmware partition (bootable [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table))",
      "MBR",
      "",
      "x86",
      "Service FS",
      "[NCR](https://en.wikipedia.org/wiki/NCR_Corporation)",
      ""
    ],
    [
      "Service partition (bootable [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table)) (see [98h](https://en.wikipedia.org/wiki/Partition_type#PID_98h))",
      "MBR",
      "",
      "x86",
      "Service FS",
      "[Intel](https://en.wikipedia.org/wiki/Intel)",
      ""
    ],
    [
      "Rescue and Recovery partition",
      "",
      "",
      "",
      "Service FS",
      "IBM",
      ""
    ],
    [
      {
        "content": "14h",
        "rowspan": 3
      },
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT) (see [AST MBR](https://en.wikipedia.org/wiki/AST_MBR))",
      "",
      "",
      "",
      "File system",
      "[AST](https://en.wikipedia.org/wiki/AST_Research)",
      "AST MS-DOS 3.x"
    ],
    [
      "Hidden FAT16 (corresponds with [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h))",
      "",
      "",
      "x86, 68000, 8080/Z80",
      "Hidden FS",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      "Omega file system",
      "",
      "LBA",
      "x86",
      "File system",
      "Lasse Krogh Thygesen",
      "Maverick OS"
    ],
    [
      {
        "content": "15h",
        "rowspan": 2
      },
      "Hidden [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector) addressing (corresponds with [05h](https://en.wikipedia.org/wiki/Partition_type#PID_05h))",
      "",
      "",
      "No, AAP",
      "Hidden container",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      "Swap",
      "",
      "LBA",
      "No",
      "Swap",
      "Lasse Krogh Thygesen",
      "Maverick OS"
    ],
    [
      "16h",
      "Hidden FAT16B (corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "x86, 68000, 8080/Z80",
      "Hidden FS",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      "17h",
      "Hidden [IFS](https://en.wikipedia.org/wiki/Installable_file_system) (corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "Hidden FS",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      {
        "content": "1Ch",
        "rowspan": 2
      },
      "Hidden [HPFS](https://en.wikipedia.org/wiki/High_Performance_File_System) (corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "Hidden FS",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      "Hidden [NTFS](https://en.wikipedia.org/wiki/NTFS) (corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "Service FS",
      "ASUS",
      "ASUS eRecovery"
    ],
    [
      "1Eh",
      "Hidden [exFAT](https://en.wikipedia.org/wiki/ExFAT) (corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "Hidden FS",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      "1Fh",
      "AST Zero Volt Suspend or SmartSleep partition",
      "MBR, EBR",
      "LBA",
      "",
      "Hidden container",
      "IBM",
      "OS/2 Boot Manager"
    ],
    [
      {
        "content": "20h",
        "rowspan": 2
      },
      "Willowtech Photon coS (see [20h](https://en.wikipedia.org/wiki/Partition_type#PID_20h))",
      "",
      "",
      "?",
      "File system",
      "Microsoft",
      "[Windows Mobile](https://en.wikipedia.org/wiki/Windows_Mobile)"
    ],
    [
      "Hidden [FAT32](https://en.wikipedia.org/wiki/FAT32) (corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "",
      "",
      "",
      "File system",
      "Willow Schlanger",
      ""
    ],
    [
      {
        "content": "21h",
        "rowspan": 2
      },
      "Hidden FAT32 with LBA (corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "MBR",
      "",
      "",
      "?",
      "[Hewlett Packard](https://en.wikipedia.org/wiki/Hewlett_Packard)",
      "HP Volume Expansion"
    ],
    [
      "ASUS recovery partition (Hidden FAT32 with LBA, see [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "",
      "",
      "",
      "File system",
      "Dave Poirier",
      "Oxygen"
    ],
    [
      "22h",
      "Hidden FAT16 with LBA (corresponds with [0Eh](https://en.wikipedia.org/wiki/Partition_type#PID_0Eh))",
      "",
      "",
      "",
      "Container",
      "Dave Poirier",
      "Oxygen"
    ],
    [
      "23h",
      "Hidden [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [LBA](https://en.wikipedia.org/wiki/Logical_block_addressing) addressing (corresponds with [0Fh](https://en.wikipedia.org/wiki/Partition_type#PID_0Fh))",
      "",
      "",
      "Yes",
      "File system",
      "Microsoft",
      "Windows Mobile"
    ],
    [
      "24h",
      "Windows Mobile update [XIP](https://en.wikipedia.org/wiki/XIP)",
      "MBR",
      "CHS",
      "x86",
      "File system",
      "[NEC](https://en.wikipedia.org/wiki/NEC)",
      "NEC MS-DOS 3.30"
    ],
    [
      "25h",
      "Willowsoft Overture File System (OFS1) (see [19h](https://en.wikipedia.org/wiki/Partition_type#PID_19h))",
      "",
      "",
      "?",
      "File system",
      "Microsoft",
      "Windows Mobile"
    ],
    [
      "26h",
      "",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      {
        "content": "27h",
        "rowspan": 4
      },
      "FSo2 (Oxygen File System) (see [22h](https://en.wikipedia.org/wiki/Partition_type#PID_22h))",
      "",
      "",
      "",
      "Service FS",
      "[Microsoft](https://en.wikipedia.org/wiki/Microsoft)",
      "Windows"
    ],
    [
      "Oxygen Extended Partition Table (see [21h](https://en.wikipedia.org/wiki/Partition_type#PID_21h))",
      "MBR",
      "LBA",
      "Yes",
      "Service FS",
      "[Acer](https://en.wikipedia.org/wiki/Acer_Inc.)",
      "D2D eRecovery"
    ],
    [
      "Windows Mobile boot XIP",
      "",
      "",
      "",
      "File system",
      "",
      "[MirOS](https://en.wikipedia.org/wiki/MirOS) BSD"
    ],
    [
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT) (see [NEC MBR](https://en.wikipedia.org/wiki/NEC_MBR))",
      "",
      "",
      "?",
      "Service",
      "",
      "RooterBOOT"
    ],
    [
      {
        "content": "2Ah",
        "rowspan": 2
      },
      "Windows Mobile [IMGFS](https://en.wikipedia.org/w/index.php?title=IMGFS&action=edit&redlink=1)",
      "",
      "",
      "",
      "File system",
      "Kurt Skauen",
      "[AtheOS](https://en.wikipedia.org/wiki/AtheOS)"
    ],
    [
      "Reserved",
      "MBR, EBR",
      "LBA",
      "x86",
      "File system",
      "",
      ""
    ],
    [
      "2Bh",
      "[Windows Recovery Environment](https://en.wikipedia.org/wiki/Windows_Recovery_Environment) (RE) partition (hidden [NTFS](https://en.wikipedia.org/wiki/NTFS) partition type [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "File system",
      "Kristian van der Vliet",
      "[SyllableOS](https://en.wikipedia.org/wiki/SyllableOS)"
    ],
    [
      "31h",
      "Rescue partition (Hidden NTFS labeled \"PQService\", corresponds to [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      "32h",
      "MirOS partition",
      "",
      "",
      "",
      "File system",
      "Alien Internet Services",
      "NOS"
    ],
    [
      "33h",
      "RooterBOOT kernel partition (contains a raw ELF Linux kernel, no file system)",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      "34h",
      "[AtheOS file system](https://en.wikipedia.org/wiki/AtheOS_file_system) (AthFS, AFS) (an extension of BFS, see [2Bh](https://en.wikipedia.org/wiki/Partition_type#PID_2Bh) and [EBh](https://en.wikipedia.org/wiki/Partition_type#PID_EBh))",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      "35h",
      "Reserved (see [CAh](https://en.wikipedia.org/wiki/Partition_type#PID_CAh))",
      "MBR, EBR",
      "CHS, LBA",
      "No",
      "File system",
      "IBM",
      "OS/2 Warp Server / [eComStation](https://en.wikipedia.org/wiki/EComStation)"
    ],
    [
      "36h",
      "SyllableSecure (SylStor), a variant of [AthFS](https://en.wikipedia.org/wiki/Partition_type#PID_2Ah) (an extension of BFS, see [2Ah](https://en.wikipedia.org/wiki/Partition_type#PID_2Ah) and [EBh](https://en.wikipedia.org/wiki/Partition_type#PID_EBh))",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      "38h",
      "Reserved",
      "",
      "",
      "",
      "File system",
      "Timothy Williams",
      "[THEOS](https://en.wikipedia.org/wiki/THEOS)"
    ],
    [
      {
        "content": "39h",
        "rowspan": 2
      },
      "",
      "",
      "",
      "",
      "Container",
      "[Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs)",
      "[Plan 9](https://en.wikipedia.org/wiki/Plan_9_(Bell_Labs))"
    ],
    [
      "Reserved",
      "",
      "",
      "",
      "File system",
      "Timothy Williams",
      "THEOS"
    ],
    [
      "3Ah",
      "Reserved",
      "",
      "",
      "",
      "File system",
      "Timothy Williams",
      "THEOS"
    ],
    [
      "3Bh",
      "JFS (OS/2 implementation of AIX Journaling File system)",
      "",
      "",
      "",
      "Container",
      "Timothy Williams",
      "THEOS"
    ],
    [
      "3Ch",
      "Reserved",
      "",
      "",
      "",
      "Service",
      "[PowerQuest](https://en.wikipedia.org/wiki/PowerQuest)",
      "[PartitionMagic](https://en.wikipedia.org/wiki/PartitionMagic)"
    ],
    [
      "3Dh",
      "THEOS version 3.2, 2 GB partition",
      "",
      "",
      "",
      "Hidden FS",
      "PowerQuest",
      "PartitionMagic"
    ],
    [
      {
        "content": "40h",
        "rowspan": 2
      },
      "Plan 9 edition 3 partition (sub-partitions described in second sector of partition)",
      "",
      "",
      "",
      "",
      "PICK Systems",
      "[PICK](https://en.wikipedia.org/wiki/Pick_operating_system)"
    ],
    [
      "THEOS version 4 spanned partition",
      "",
      "",
      "",
      "",
      "[VenturCom](https://en.wikipedia.org/wiki/VenturCom)",
      "[Venix](https://en.wikipedia.org/wiki/Venix)"
    ],
    [
      {
        "content": "41h",
        "rowspan": 3
      },
      "THEOS version 4, 4 GB partition",
      "",
      "",
      "Yes",
      "",
      "",
      "Personal RISC"
    ],
    [
      "THEOS version 4 extended partition",
      "",
      "",
      "",
      "",
      "[Linux](https://en.wikipedia.org/wiki/Linux)",
      "Linux"
    ],
    [
      "PqRP (PartitionMagic or DriveImage in progress)",
      "",
      "",
      "PowerPC",
      "",
      "PowerPC",
      "PowerPC"
    ],
    [
      {
        "content": "42h",
        "rowspan": 3
      },
      "Hidden [NetWare](https://en.wikipedia.org/wiki/NetWare)",
      "",
      "",
      "",
      "Secured FS",
      "[Peter Gutmann](https://en.wikipedia.org/wiki/Peter_Gutmann_(computer_scientist))",
      "SFS"
    ],
    [
      "PICK R83",
      "",
      "",
      "No",
      "",
      "Linux",
      "Linux"
    ],
    [
      "Venix 80286",
      "",
      "",
      "",
      "Container",
      "Microsoft",
      "Windows 2000, XP, etc."
    ],
    [
      "43h",
      "Personal RISC Boot",
      "",
      "",
      "Yes",
      "File system",
      "Linux",
      "Linux"
    ],
    [
      "44h",
      "Old Linux/[Minix](https://en.wikipedia.org/wiki/Minix) (disk shared with DR DOS 6.0) (corresponds with [81h](https://en.wikipedia.org/wiki/Partition_type#PID_81h))",
      "",
      "",
      "",
      "",
      "Wildfile",
      "[GoBack](https://en.wikipedia.org/wiki/GoBack)"
    ],
    [
      {
        "content": "45h",
        "rowspan": 3
      },
      "PPC PReP (Power PC Reference Platform) Boot",
      "",
      "CHS",
      "",
      "",
      "[Priam](https://en.wikipedia.org/wiki/Priam_Corporation)",
      ""
    ],
    [
      "Secure File system (SFS)",
      "MBR",
      "CHS",
      "Yes",
      "",
      "",
      "Boot-US"
    ],
    [
      "Old Linux swap (disk shared with DR DOS 6.0) (corresponds with [82h](https://en.wikipedia.org/wiki/Partition_type#PID_82h))",
      "",
      "",
      "",
      "",
      "[Jochen Liedtke](https://en.wikipedia.org/wiki/Jochen_Liedtke), [GMD](https://en.wikipedia.org/wiki/Gesellschaft_f%C3%BCr_Mathematik_und_Datenverarbeitung)",
      "[EUMEL](https://en.wikipedia.org/wiki/EUMEL)/[ELAN](https://en.wikipedia.org/wiki/ELAN_(programming_language))"
    ],
    [
      "46h",
      "[Dynamic](https://en.wikipedia.org/wiki/Dynamic_disk) extended partition marker",
      "",
      "",
      "",
      "",
      "Jochen Liedtke, GMD",
      "EUMEL/ELAN"
    ],
    [
      "47h",
      "Old Linux native (disk shared with DR DOS 6.0) (corresponds with [83h](https://en.wikipedia.org/wiki/Partition_type#PID_83h))",
      "",
      "",
      "",
      "",
      "Jochen Liedtke, GMD",
      "EUMEL/ELAN"
    ],
    [
      "48h",
      "Norton GoBack, WildFile GoBack, Adaptec GoBack, Roxio GoBack",
      "",
      "",
      "",
      "",
      "Jochen Liedtke, GMD",
      "EUMEL/ELAN"
    ],
    [
      {
        "content": "4Ah",
        "rowspan": 2
      },
      "Priam (see also [5Ch](https://en.wikipedia.org/wiki/Partition_type#PID_5Ch))",
      "MBR",
      "",
      "Yes",
      "",
      "Nick Roberts",
      "AdaOS"
    ],
    [
      "Boot-US boot manager (1 cylinder)",
      "MBR, EBR",
      "CHS, LBA",
      "No",
      "File system",
      "Mark Aitchison",
      "ALFS/THIN"
    ],
    [
      "4Ch",
      "EUMEL/ELAN (L2)",
      "",
      "",
      "",
      "",
      "[ETH Zürich](https://en.wikipedia.org/wiki/ETH_Z%C3%BCrich)",
      "[ETH Oberon](https://en.wikipedia.org/wiki/Oberon_(operating_system))"
    ],
    [
      "4Dh",
      "EUMEL/ELAN (L2)",
      "",
      "",
      "",
      "",
      "[Quantum Software Systems](https://en.wikipedia.org/wiki/Quantum_Software_Systems)",
      "QNX 4.x, Neutrino"
    ],
    [
      "4Eh",
      "EUMEL/ELAN (L2)",
      "",
      "",
      "",
      "",
      "Quantum Software Systems",
      "QNX 4.x, Neutrino"
    ],
    [
      {
        "content": "4Fh",
        "rowspan": 2
      },
      "EUMEL/ELAN (L2), ERGOS L3",
      "",
      "",
      "",
      "",
      "Quantum Software Systems",
      "QNX 4.x, Neutrino"
    ],
    [
      "Aquila (see [7Fh](https://en.wikipedia.org/wiki/Partition_type#PID_7Fh))",
      "",
      "",
      "Yes",
      "",
      "ETH Zürich",
      "ETH Oberon"
    ],
    [
      {
        "content": "50h",
        "rowspan": 4
      },
      "ALFS/THIN advanced lightweight file system for DOS",
      "",
      "",
      "",
      "",
      "ETH Zürich",
      "ETH Oberon"
    ],
    [
      "Aos (A2) file system (76)",
      "",
      "",
      "No",
      "",
      "OnTrack",
      "[Disk Manager](https://en.wikipedia.org/wiki/Disk_Manager) 4"
    ],
    [
      "Primary QNX POSIX volume on disk (77)",
      "",
      "",
      "",
      "",
      "",
      "[LynxOS](https://en.wikipedia.org/wiki/LynxOS)"
    ],
    [
      "Secondary QNX POSIX volume on disk (78)",
      "",
      "",
      "",
      "",
      "",
      "Novell"
    ],
    [
      {
        "content": "51h",
        "rowspan": 2
      },
      "Tertiary QNX POSIX volume on disk (79)",
      "",
      "",
      "",
      "",
      "Novell",
      ""
    ],
    [
      "Boot / native file system (79)",
      "",
      "",
      "No",
      "",
      "OnTrack",
      "Disk Manager 4-6"
    ],
    [
      {
        "content": "52h",
        "rowspan": 2
      },
      "Alternative native file system (80)",
      "MBR",
      "CHS",
      "",
      "File system",
      "[Digital Research](https://en.wikipedia.org/wiki/Digital_Research)",
      "[CP/M-80](https://en.wikipedia.org/wiki/CP/M-80)"
    ],
    [
      "Read-only partition (old)",
      "",
      "",
      "",
      "",
      "[Microport](https://en.wikipedia.org/wiki/Microport_(software))",
      "System V/AT, V/386"
    ],
    [
      "53h",
      "Lynx RTOS",
      "",
      "",
      "",
      "",
      "OnTrack",
      "Disk Manager 6"
    ],
    [
      "54h",
      "",
      "",
      "",
      "",
      "",
      "OnTrack",
      "Disk Manager 6"
    ],
    [
      "55h",
      "",
      "",
      "",
      "",
      "",
      "MicroHouse / StorageSoft",
      "EZ-Drive"
    ],
    [
      {
        "content": "56h",
        "rowspan": 3
      },
      "Read-write partition (Aux 1)",
      "",
      "",
      "",
      "",
      "[AT&T](https://en.wikipedia.org/wiki/AT%26T)",
      "AT&T MS-DOS 3.x"
    ],
    [
      "[CP/M-80](https://en.wikipedia.org/wiki/CP/M-80)",
      "",
      "",
      "",
      "",
      "MicroHouse / StorageSoft",
      "EZ-Drive"
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "Golden Bow",
      "VFeature"
    ],
    [
      {
        "content": "57h",
        "rowspan": 2
      },
      "Auxiliary 3 (WO)",
      "",
      "",
      "",
      "",
      "MicroHouse / StorageSoft",
      "DrivePro"
    ],
    [
      "Dynamic Drive Overlay (DDO)",
      "",
      "",
      "",
      "",
      "Novell",
      ""
    ],
    [
      "5Ch",
      "EZ-Drive, Maxtor, MaxBlast, or DriveGuide INT 13h redirector volume",
      "",
      "CHS",
      "",
      "Container",
      "[Priam](https://en.wikipedia.org/wiki/Priam_Corporation)",
      "[EDISK](https://en.wikipedia.org/wiki/Priam_EDISK)"
    ],
    [
      "61h",
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT)",
      "MBR",
      "CHS",
      "",
      "Hidden FS",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      {
        "content": "63h",
        "rowspan": 2
      },
      "Disk Manager partition converted to EZ-BIOS",
      "",
      "CHS",
      "",
      "File system",
      "AT&T",
      "SCO Unix, ISC, UnixWare, AT&T System V/386, ix, MtXinu BSD 4.3 on Mach, GNU HURD"
    ],
    [
      "VFeature partitionned volume",
      "MBR",
      "CHS",
      "",
      "Hidden FS",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      {
        "content": "64h",
        "rowspan": 3
      },
      "",
      "",
      "",
      "",
      "?",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "VNDI partition",
      "",
      "",
      "",
      "File system",
      "[Novell](https://en.wikipedia.org/wiki/Novell)",
      "[NetWare](https://en.wikipedia.org/wiki/NetWare)"
    ],
    [
      "Priam EDisk Partitioned Volume (see also [45h](https://en.wikipedia.org/wiki/Partition_type#PID_45h))",
      "",
      "",
      "",
      "Secured FS",
      "Solomon",
      ""
    ],
    [
      "65h",
      "Hidden FAT12 (corresponds to [E1h](https://en.wikipedia.org/wiki/Partition_type#PID_E1h))",
      "",
      "",
      "",
      "File system",
      "Novell",
      "NetWare"
    ],
    [
      {
        "content": "66h",
        "rowspan": 3
      },
      "",
      "",
      "",
      "",
      "File system",
      "Novell",
      "NetWare"
    ],
    [
      "Hidden read-only FAT12 (corresponds to [E3h](https://en.wikipedia.org/wiki/Partition_type#PID_E3h))",
      "",
      "",
      "",
      "?",
      "Novell",
      "NetWare"
    ],
    [
      "Hidden FAT16 (corresponds to [E4h](https://en.wikipedia.org/wiki/Partition_type#PID_E4h))",
      "MBR",
      "CHS",
      "",
      "Hidden FS",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "67h",
      "[NetWare File System 286](https://en.wikipedia.org/wiki/NetWare_File_System_286)/2",
      "",
      "",
      "",
      "?",
      "Novell",
      "NetWare"
    ],
    [
      "68h",
      "PC-ARMOUR",
      "",
      "",
      "",
      "?",
      "Novell",
      "NetWare"
    ],
    [
      {
        "content": "69h",
        "rowspan": 2
      },
      "[NetWare File System 386](https://en.wikipedia.org/wiki/NetWare_File_System_386)",
      "",
      "",
      "",
      "?",
      "Novell",
      "NetWare 5"
    ],
    [
      "[NetWare File System 386](https://en.wikipedia.org/wiki/NetWare_File_System_386)",
      "",
      "",
      "",
      "?",
      "Novell",
      "NetWare"
    ],
    [
      "6Ch",
      "Storage Management Services (SMS)",
      "MBR",
      "CHS, LBA",
      "x86",
      "Container",
      "[DragonFly BSD](https://en.wikipedia.org/wiki/DragonFly_BSD)",
      "BSD"
    ],
    [
      "70h",
      "Hidden read-only FAT16 (corresponds to [E6h](https://en.wikipedia.org/wiki/Partition_type#PID_E6h))",
      "",
      "",
      "",
      "Service",
      "",
      "DiskSecure"
    ],
    [
      "71h",
      "Wolf Mountain",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      {
        "content": "72h",
        "rowspan": 2
      },
      "",
      "MBR, EBR",
      "CHS",
      "x86",
      "Policy FS",
      "",
      "APTI conformant systems"
    ],
    [
      "",
      "",
      "",
      "",
      "File system",
      "Nordier",
      "Unix V7/x86"
    ],
    [
      "73h",
      "[Novell Storage Services](https://en.wikipedia.org/wiki/Novell_Storage_Services) (NSS)",
      "",
      "",
      "",
      "",
      "Microsoft, IBM",
      ""
    ],
    [
      "74h",
      "[BSD slice](https://en.wikipedia.org/wiki/BSD_disklabel) (DragonFly BSD)",
      "MBR",
      "CHS",
      "",
      "Hidden FS",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "75h",
      "DiskSecure multiboot",
      "",
      "",
      "",
      "File system",
      "IBM",
      "[PC/IX](https://en.wikipedia.org/wiki/PC/IX)"
    ],
    [
      "76h",
      "Reserved",
      "",
      "",
      "",
      "",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "77h",
      "APTI alternative FAT12 (CHS, SFN) (corresponds with [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h))",
      "",
      "",
      "",
      "File system",
      "Novell",
      ""
    ],
    [
      "78h",
      "V7/x86",
      "",
      "",
      "Yes",
      "File system",
      "Geurt Vos",
      ""
    ],
    [
      "79h",
      "Reserved",
      "MBR, EBR",
      "CHS",
      "x86",
      "Policy FS",
      "",
      "APTI conformant systems"
    ],
    [
      "7Ah",
      "Hidden FAT16B (corresponds to [F4h](https://en.wikipedia.org/wiki/Partition_type#PID_F4h))",
      "MBR, EBR",
      "LBA",
      "x86",
      "Policy FS",
      "",
      "APTI conformant systems"
    ],
    [
      "7Bh",
      "",
      "MBR, EBR",
      "CHS",
      "x86",
      "Policy FS",
      "",
      "APTI conformant systems"
    ],
    [
      "7Ch",
      "Hidden read-only FAT16B (corresponds to [F6h](https://en.wikipedia.org/wiki/Partition_type#PID_F6h))",
      "MBR, EBR",
      "LBA",
      "x86",
      "Policy FS",
      "",
      "APTI conformant systems"
    ],
    [
      "7Dh",
      "VNDI, M2FS, M2CS",
      "MBR, EBR",
      "CHS",
      "x86",
      "Policy FS",
      "",
      "APTI conformant systems"
    ],
    [
      "7Eh",
      "[XOSL](https://en.wikipedia.org/wiki/XOSL) bootloader file system",
      "MBR, EBR",
      "",
      "No",
      "Cache",
      "Romex Software",
      "PrimoCache"
    ],
    [
      "7Fh",
      "APTI alternative FAT16 (CHS, SFN) (corresponds with [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h))",
      "MBR, EBR",
      "",
      "",
      "",
      "Alternative OS Development Partition Standard",
      ""
    ],
    [
      "80h",
      "APTI alternative FAT16 (LBA, SFN) (corresponds with [0Eh](https://en.wikipedia.org/wiki/Partition_type#PID_0Eh))",
      "",
      "",
      "",
      "File system",
      "[Andrew Tanenbaum](https://en.wikipedia.org/wiki/Andrew_Tanenbaum)",
      "[Minix](https://en.wikipedia.org/wiki/Minix) 1.1-1.4a"
    ],
    [
      {
        "content": "81h",
        "rowspan": 2
      },
      "APTI alternative FAT16B (CHS, SFN) (corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "",
      "File system",
      "Andrew Tanenbaum",
      "Minix 1.4b+"
    ],
    [
      "APTI alternative FAT32 (LBA, SFN) (corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "",
      "",
      "",
      "?",
      "?",
      "?"
    ],
    [
      {
        "content": "82h",
        "rowspan": 3
      },
      "APTI alternative FAT32 (CHS, SFN) (corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "",
      "",
      "No",
      "Swap",
      "GNU/Linux",
      "Linux"
    ],
    [
      "Level 2 cache",
      "",
      "",
      "x86",
      "Container",
      "[Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems)",
      ""
    ],
    [
      "Reserved for individual or local use and temporary or experimental projects",
      "",
      "",
      "",
      "?",
      "Prime Computer",
      "PRIMOS"
    ],
    [
      "83h",
      "[MINIX file system](https://en.wikipedia.org/wiki/MINIX_file_system) (old)",
      "",
      "",
      "Yes",
      "File system",
      "GNU/Linux",
      "Linux"
    ],
    [
      {
        "content": "84h",
        "rowspan": 3
      },
      "MINIX file system (corresponds with [41h](https://en.wikipedia.org/wiki/Partition_type#PID_41h))",
      "",
      "",
      "No",
      "Hibernation",
      "Microsoft",
      "?"
    ],
    [
      "Mitac Advanced Disk Manager",
      "",
      "",
      "",
      "Hidden FS",
      "IBM",
      "OS/2"
    ],
    [
      "[Linux swap space](https://en.wikipedia.org/wiki/Swap_space#Linux) (corresponds with [42h](https://en.wikipedia.org/wiki/Partition_type#PID_42h))",
      "",
      "",
      "",
      "Hibernation",
      "Intel",
      "Rapid Start technology"
    ],
    [
      "85h",
      "[Solaris](https://en.wikipedia.org/wiki/Solaris_(operating_system)) x86 (for Sun disklabels up to 2005) (see [BFh](https://en.wikipedia.org/wiki/Partition_type#PID_BFh))",
      "",
      "",
      "No, AAP",
      "Container",
      "GNU/Linux",
      "Linux"
    ],
    [
      {
        "content": "86h",
        "rowspan": 2
      },
      "",
      "",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "Any native [Linux file system](https://en.wikipedia.org/wiki/File_system#Linux) (see [93h](https://en.wikipedia.org/wiki/Partition_type#PID_93h), corresponds with [43h](https://en.wikipedia.org/wiki/Partition_type#PID_43h))",
      "",
      "",
      "",
      "Service",
      "GNU/Linux",
      "Linux"
    ],
    [
      "87h",
      "[APM](https://en.wikipedia.org/wiki/Advanced_Power_Management) hibernation (suspend to disk, S2D)",
      "",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "88h",
      "Hidden C: (FAT16)(corresponds to either 04h or 06h)",
      "",
      "",
      "",
      "Service",
      "GNU/Linux",
      ""
    ],
    [
      "8Ah",
      "Rapid Start hibernation data (possibly iFFS; possibly used for [Intel SRT](https://en.wikipedia.org/wiki/Smart_Response_Technology) SSD cache as well)",
      "",
      "",
      "",
      "Service",
      "Martin Kiewitz",
      "AiR-BOOT"
    ],
    [
      "8Bh",
      "Linux [extended](https://en.wikipedia.org/wiki/Extended_boot_record) (corresponds with [05h](https://en.wikipedia.org/wiki/Partition_type#PID_05h))",
      "",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "8Ch",
      "[Fault-tolerant](https://en.wikipedia.org/wiki/Fault-tolerant) FAT16B mirrored volume set (see [B6h](https://en.wikipedia.org/wiki/Partition_type#PID_B6h) and [C6h](https://en.wikipedia.org/wiki/Partition_type#PID_C6h), corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "8Dh",
      "Linux [RAID](https://en.wikipedia.org/wiki/RAID) superblock with auto-detect (old) (see [FDh](https://en.wikipedia.org/wiki/Partition_type#PID_FDh))",
      "MBR, EBR",
      "CHS, LBA",
      "x86, 68000, 8080/Z80",
      "Hidden FS",
      "[FreeDOS](https://en.wikipedia.org/wiki/FreeDOS)",
      "Free [FDISK](https://en.wikipedia.org/wiki/FDISK#FreeDOS)"
    ],
    [
      "8Eh",
      "Fault-tolerant [HPFS](https://en.wikipedia.org/wiki/High_Performance_File_System)/[NTFS](https://en.wikipedia.org/wiki/NTFS) mirrored volume set (see [B7h](https://en.wikipedia.org/wiki/Partition_type#PID_B7h) and [C7h](https://en.wikipedia.org/wiki/Partition_type#PID_C7h), corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "",
      "",
      "",
      "Container",
      "GNU/Linux",
      "Linux"
    ],
    [
      "90h",
      "Linux plaintext partition table",
      "MBR, EBR",
      "CHS, LBA",
      "x86, 68000, 8080/Z80",
      "Hidden FS",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      "91h",
      "Linux kernel image",
      "MBR, EBR",
      "CHS, LBA",
      "No, AAP",
      "Hidden container",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      "92h",
      "Legacy fault-tolerant [FAT32](https://en.wikipedia.org/wiki/FAT32) mirrored volume set (see [BBh](https://en.wikipedia.org/wiki/Partition_type#PID_BBh) and [CBh](https://en.wikipedia.org/wiki/Partition_type#PID_CBh), corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Hidden FS",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      {
        "content": "93h",
        "rowspan": 2
      },
      "Legacy fault-tolerant FAT32 mirrored volume set (see [BCh](https://en.wikipedia.org/wiki/Partition_type#PID_BCh) and [CCh](https://en.wikipedia.org/wiki/Partition_type#PID_CCh), corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "",
      "",
      "",
      "File system",
      "[Andrew S. Tanenbaum](https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum)",
      "[Amoeba](https://en.wikipedia.org/wiki/Amoeba_(operating_system))"
    ],
    [
      "Hidden FAT12 (corresponds with [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h))",
      "",
      "",
      "",
      "Hidden FS",
      "",
      "Linux"
    ],
    [
      "94h",
      "[Linux LVM](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)) since 1999 (see [FEh](https://en.wikipedia.org/wiki/Partition_type#PID_FEh))",
      "",
      "",
      "",
      "Service",
      "Andrew S. Tanenbaum",
      "Amoeba"
    ],
    [
      "95h",
      "Hidden FAT16 (corresponds with [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h))",
      "",
      "",
      "",
      "File system",
      "MIT",
      "EXOPC"
    ],
    [
      "96h",
      "Hidden [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector) addressing (corresponds with [05h](https://en.wikipedia.org/wiki/Partition_type#PID_05h))",
      "",
      "",
      "",
      "File system",
      "?",
      "CHRP"
    ],
    [
      "97h",
      "Hidden FAT16B (corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Hidden FS",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      {
        "content": "98h",
        "rowspan": 3
      },
      "Amoeba native file system",
      "MBR, EBR",
      "LBA",
      "x86",
      "Hidden FS",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      "Hidden Linux file system (see [83h](https://en.wikipedia.org/wiki/Partition_type#PID_83h))",
      "MBR",
      "CHS, LBA",
      "x86",
      "Service FS",
      "Datalight",
      "ROM-DOS"
    ],
    [
      "Amoeba bad block table",
      "MBR",
      "CHS, LBA",
      "x86",
      "Service FS",
      "Intel",
      "?"
    ],
    [
      "99h",
      "EXOPC native",
      "",
      "",
      "",
      "File system",
      "?",
      "?"
    ],
    [
      "9Ah",
      "[ISO-9660](https://en.wikipedia.org/wiki/ISO-9660) file system",
      "MBR, EBR",
      "LBA",
      "x86",
      "Hidden FS",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      "9Bh",
      "Hidden [FAT32](https://en.wikipedia.org/wiki/FAT32) (corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "MBR, EBR",
      "LBA",
      "No, AAP",
      "Hidden container",
      "FreeDOS",
      "Free FDISK"
    ],
    [
      {
        "content": "9Eh",
        "rowspan": 2
      },
      "Hidden [FAT32](https://en.wikipedia.org/wiki/FAT32) (corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "",
      "",
      "",
      "File system",
      "Andy Valencia",
      "[VSTa](https://en.wikipedia.org/wiki/VSTa)"
    ],
    [
      "Service partition (bootable [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table)) ROM-DOS SuperBoot (see [12h](https://en.wikipedia.org/wiki/Partition_type#PID_12h))",
      "",
      "",
      "",
      "File system",
      "Andy Valencia",
      "ForthOS"
    ],
    [
      "9Fh",
      "Service partition (bootable [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table)) (see [12h](https://en.wikipedia.org/wiki/Partition_type#PID_12h))",
      "",
      "",
      "",
      "?",
      "?",
      "BSD/OS 3.0+, BSDI"
    ],
    [
      {
        "content": "A0h",
        "rowspan": 2
      },
      "Early Unix",
      "MBR",
      "",
      "",
      "Service FS",
      "[Hewlett Packard](https://en.wikipedia.org/wiki/Hewlett_Packard)",
      "?"
    ],
    [
      "Hidden FAT16 (corresponds with [0Eh](https://en.wikipedia.org/wiki/Partition_type#PID_0Eh))",
      "",
      "",
      "",
      "Hibernation",
      "Phoenix, IBM, Toshiba, Sony",
      "?"
    ],
    [
      {
        "content": "A1h",
        "rowspan": 2
      },
      "Hidden [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [LBA](https://en.wikipedia.org/wiki/Logical_block_addressing) (corresponds with [0Fh](https://en.wikipedia.org/wiki/Partition_type#PID_0Fh))",
      "",
      "",
      "",
      "?",
      "Hewlett Packard",
      "HP Volume Expansion"
    ],
    [
      "",
      "",
      "",
      "",
      "Hibernation",
      "Phoenix, NEC",
      "?"
    ],
    [
      "A2h",
      "ForthOS (eForth port)",
      "MBR",
      "CHS, LBA",
      "ARM",
      "Image",
      "[Altera](https://en.wikipedia.org/wiki/Altera)",
      "Cyclone V"
    ],
    [
      "A3h",
      "(see [B7h](https://en.wikipedia.org/wiki/Partition_type#PID_B7h) and [B8h](https://en.wikipedia.org/wiki/Partition_type#PID_B8h))",
      "",
      "",
      "",
      "?",
      "Hewlett Packard",
      "HP Volume Expansion"
    ],
    [
      "A4h",
      "Diagnostic partition for HP laptops",
      "",
      "",
      "",
      "?",
      "Hewlett Packard",
      "HP Volume Expansion"
    ],
    [
      "A5h",
      "Hibernate partition",
      "MBR",
      "",
      "",
      "Container",
      "[FreeBSD](https://en.wikipedia.org/wiki/FreeBSD)",
      "BSD"
    ],
    [
      {
        "content": "A6h",
        "rowspan": 2
      },
      "",
      "",
      "",
      "",
      "?",
      "Hewlett Packard",
      "HP Volume Expansion"
    ],
    [
      "Hibernate partition",
      "MBR",
      "",
      "",
      "Container",
      "[OpenBSD](https://en.wikipedia.org/wiki/OpenBSD)",
      "OpenBSD"
    ],
    [
      "A7h",
      "Hard Processor System (HPS) ARM preloader",
      "",
      "",
      "386",
      "File system",
      "[NeXT](https://en.wikipedia.org/wiki/NeXT)",
      "NeXTSTEP"
    ],
    [
      "A8h",
      "",
      "",
      "",
      "",
      "File system",
      "[Apple](https://en.wikipedia.org/wiki/Apple_Inc.)",
      "Darwin, Mac OS X"
    ],
    [
      "A9h",
      "",
      "MBR",
      "",
      "",
      "Container",
      "[NetBSD](https://en.wikipedia.org/wiki/NetBSD)",
      "NetBSD"
    ],
    [
      "AAh",
      "[BSD slice](https://en.wikipedia.org/wiki/BSD_disklabel) (BSD/386, 386BSD, NetBSD (before 1998-02-19), FreeBSD)",
      "MBR",
      "CHS",
      "?",
      "File system",
      "[Olivetti](https://en.wikipedia.org/wiki/Olivetti)",
      "MS-DOS"
    ],
    [
      {
        "content": "ABh",
        "rowspan": 2
      },
      "",
      "",
      "",
      "Yes",
      "Service",
      "Apple",
      "Darwin, Mac OS X"
    ],
    [
      "[OpenBSD slice](https://en.wikipedia.org/wiki/BSD_disklabel)",
      "",
      "",
      "",
      "File system",
      "Stanislav Karchebny",
      "GO! OS"
    ],
    [
      "ACh",
      "",
      "",
      "",
      "Yes",
      "Service",
      "Apple",
      "Darwin, Mac OS X"
    ],
    [
      "ADh",
      "Apple [Darwin](https://en.wikipedia.org/wiki/Darwin_(operating_system)), [Mac OS X](https://en.wikipedia.org/wiki/Mac_OS_X) UFS",
      "",
      "",
      "",
      "File system",
      "Ben Avison, Acorn",
      "RISC OS"
    ],
    [
      "AEh",
      "[NetBSD slice](https://en.wikipedia.org/wiki/BSD_disklabel)",
      "",
      "",
      "x86",
      "File system",
      "Frank Barrus",
      "ShagOS"
    ],
    [
      {
        "content": "AFh",
        "rowspan": 2
      },
      "Olivetti MS-DOS FAT12 (1.44 MB) (corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "?",
      "File system",
      "Apple",
      "Mac OS X"
    ],
    [
      "Apple Darwin, [Mac OS X](https://en.wikipedia.org/wiki/Mac_OS_X) boot",
      "",
      "",
      "No",
      "Swap",
      "Frank Barrus",
      "ShagOS"
    ],
    [
      "B0h",
      "GO!",
      "MBR",
      "CHS, LBA",
      "x86",
      "Blocker",
      "Star-Tools",
      "Boot-Star"
    ],
    [
      {
        "content": "B1h",
        "rowspan": 2
      },
      "Apple RAID, [Mac OS X](https://en.wikipedia.org/wiki/Mac_OS_X) RAID",
      "",
      "",
      "",
      "?",
      "[Hewlett Packard](https://en.wikipedia.org/wiki/Hewlett_Packard)",
      "HP Volume Expansion"
    ],
    [
      "[ADFS](https://en.wikipedia.org/wiki/Advanced_Disc_Filing_System) / FileCore format",
      "",
      "",
      "",
      "File system",
      "[QNX Software Systems](https://en.wikipedia.org/wiki/QNX_Software_Systems)",
      "QNX 6.x"
    ],
    [
      "B2h",
      "ShagOS file system",
      "",
      "",
      "",
      "File system",
      "QNX Software Systems",
      "QNX 6.x"
    ],
    [
      {
        "content": "B3h",
        "rowspan": 2
      },
      "[HFS](https://en.wikipedia.org/wiki/Hierarchical_File_System) and [HFS+](https://en.wikipedia.org/wiki/HFS%2B)",
      "",
      "",
      "",
      "?",
      "[Hewlett Packard](https://en.wikipedia.org/wiki/Hewlett_Packard)",
      "HP Volume Expansion"
    ],
    [
      "ShagOS swap",
      "",
      "",
      "",
      "File system",
      "QNX Software Systems",
      "QNX 6.x"
    ],
    [
      "B4h",
      "Boot-Star dummy partition",
      "",
      "",
      "",
      "?",
      "Hewlett Packard",
      "HP Volume Expansion"
    ],
    [
      {
        "content": "B6h",
        "rowspan": 2
      },
      "",
      "",
      "",
      "",
      "?",
      "Hewlett Packard",
      "HP Volume Expansion"
    ],
    [
      "[QNX Neutrino](https://en.wikipedia.org/wiki/QNX_Neutrino) power-safe file system",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      {
        "content": "B7h",
        "rowspan": 2
      },
      "QNX Neutrino power-safe file system",
      "",
      "",
      "",
      "File system",
      "",
      "BSDI (before 3.0)"
    ],
    [
      "",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "B8h",
      "QNX Neutrino power-safe file system",
      "",
      "",
      "",
      "File system",
      "",
      "BSDI (before 3.0)"
    ],
    [
      {
        "content": "BBh",
        "rowspan": 3
      },
      "",
      "",
      "",
      "",
      "Hidden FS",
      "[PhysTechSoft](https://en.wikipedia.org/wiki/PTS-DOS), [Acronis](https://en.wikipedia.org/wiki/Acronis), [SWsoft](https://en.wikipedia.org/wiki/SWsoft)",
      "BootWizard, [OS Selector](https://en.wikipedia.org/wiki/Acronis_OS_Selector)"
    ],
    [
      "",
      "MBR",
      "",
      "",
      "Service FS",
      "Acronis",
      "[Acronis True Image](https://en.wikipedia.org/wiki/Acronis_True_Image)"
    ],
    [
      "Corrupted fault-tolerant FAT16B mirrored master volume (see [C6h](https://en.wikipedia.org/wiki/Partition_type#PID_C6h) and [86h](https://en.wikipedia.org/wiki/Partition_type#PID_86h), corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      {
        "content": "BCh",
        "rowspan": 3
      },
      "BSDI native file system / swap (see [B8h](https://en.wikipedia.org/wiki/Partition_type#PID_B8h) and [9Fh](https://en.wikipedia.org/wiki/Partition_type#PID_9Fh))",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "Corrupted fault-tolerant [HPFS](https://en.wikipedia.org/wiki/High_Performance_File_System)/[NTFS](https://en.wikipedia.org/wiki/NTFS) mirrored master volume (see [C7h](https://en.wikipedia.org/wiki/Partition_type#PID_C7h) and [87h](https://en.wikipedia.org/wiki/Partition_type#PID_87h), corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "MBR",
      "LBA",
      "",
      "Service FS",
      "Acronis",
      "Acronis True Image",
      ""
    ],
    [
      "BSDI swap / native file system (see [B7h](https://en.wikipedia.org/wiki/Partition_type#PID_B7h) and [9Fh](https://en.wikipedia.org/wiki/Partition_type#PID_9Fh))",
      "MBR, EBR",
      "",
      "",
      "Service FS",
      "[Paragon Software Group](https://en.wikipedia.org/wiki/Paragon_Software_Group)",
      "Backup Capsule"
    ],
    [
      "BDh",
      "PTS BootWizard 4 / OS Selector 5 for hidden partitions <em>other</em> than [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h), [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h), [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h), [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h), [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh), [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch), [0Eh](https://en.wikipedia.org/wiki/Partition_type#PID_0Eh) and unformatted partitions",
      "",
      "",
      "",
      "File system",
      "?",
      "BonnyDOS/286"
    ],
    [
      "BEh",
      "OEM Secure Zone (corresponds to [BCh](https://en.wikipedia.org/wiki/Partition_type#PID_BCh))",
      "",
      "",
      "Yes",
      "File system",
      "[Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems)",
      "[Solaris](https://en.wikipedia.org/wiki/Solaris_(operating_system)) 8"
    ],
    [
      "BFh",
      "Corrupted fault-tolerant [FAT32](https://en.wikipedia.org/wiki/FAT32) mirrored master volume (see [CBh](https://en.wikipedia.org/wiki/Partition_type#PID_CBh) and [8Bh](https://en.wikipedia.org/wiki/Partition_type#PID_8Bh), corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "",
      "",
      "x86",
      "Container",
      "Sun Microsystems",
      "Solaris"
    ],
    [
      "C0h",
      "Corrupted fault-tolerant [FAT32](https://en.wikipedia.org/wiki/FAT32) mirrored master volume (see [CCh](https://en.wikipedia.org/wiki/Partition_type#PID_CCh) and [8Ch](https://en.wikipedia.org/wiki/Partition_type#PID_8Ch), corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "MBR",
      "CHS, LBA",
      "x86",
      "Secured container",
      "[Novell](https://en.wikipedia.org/wiki/Novell), [IMS](https://en.wikipedia.org/wiki/Intelligent_Micro_Software)",
      "[DR-DOS](https://en.wikipedia.org/wiki/DR-DOS), [Multiuser DOS](https://en.wikipedia.org/wiki/Multiuser_DOS), [REAL/32](https://en.wikipedia.org/wiki/REAL/32)"
    ],
    [
      "C1h",
      "[Acronis Secure Zone](https://en.wikipedia.org/wiki/Acronis_Secure_Zone)",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Secured FS",
      "[Digital Research](https://en.wikipedia.org/wiki/Digital_Research)",
      "DR DOS 6.0+"
    ],
    [
      "C2h",
      "Backup Capsule",
      "",
      "",
      "Yes",
      "Hidden FS",
      "BlueSky Innovations",
      "Power Boot"
    ],
    [
      "C3h",
      "",
      "",
      "",
      "No",
      "Hidden swap",
      "BlueSky Innovations",
      "Power Boot"
    ],
    [
      "C4h",
      "Solaris 8 boot",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Secured FS",
      "Digital Research",
      "DR DOS 6.0+"
    ],
    [
      "C5h",
      "Solaris x86 (for Sun disklabels, since 2005) (see [82h](https://en.wikipedia.org/wiki/Partition_type#PID_82h))",
      "MBR, EBR",
      "CHS, LBA",
      "No, AAP",
      "Secured container",
      "Digital Research",
      "DR DOS 6.0+"
    ],
    [
      {
        "content": "C6h",
        "rowspan": 2
      },
      "Secured [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table) partition (smaller than 32 MB)",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Secured FS",
      "Digital Research",
      "DR DOS 6.0+"
    ],
    [
      "Secured [FAT12](https://en.wikipedia.org/wiki/FAT12) (corresponds with [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h))",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      {
        "content": "C7h",
        "rowspan": 2
      },
      "Hidden Linux native file system",
      "MBR",
      "",
      "Yes",
      "File system",
      "",
      "Syrinx"
    ],
    [
      "Hidden Linux swap",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "C8h",
      "Secured FAT16 (corresponds with [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h))",
      "",
      "",
      "",
      "",
      "?",
      ""
    ],
    [
      "C9h",
      "Secured [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector) addressing (corresponds with [05h](https://en.wikipedia.org/wiki/Partition_type#PID_05h))",
      "",
      "",
      "",
      "",
      "?",
      ""
    ],
    [
      "CAh",
      "Secured FAT16B (corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "",
      "",
      "?",
      ""
    ],
    [
      {
        "content": "CBh",
        "rowspan": 2
      },
      "Corrupted fault-tolerant FAT16B mirrored slave volume (see [B6h](https://en.wikipedia.org/wiki/Partition_type#PID_B6h) and [86h](https://en.wikipedia.org/wiki/Partition_type#PID_86h), corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Secured FS",
      "[Caldera](https://en.wikipedia.org/wiki/Caldera_UK)",
      "DR-DOS 7.0x"
    ],
    [
      "Syrinx boot",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      {
        "content": "CCh",
        "rowspan": 2
      },
      "Corrupted fault-tolerant [HPFS](https://en.wikipedia.org/wiki/High_Performance_File_System)/[NTFS](https://en.wikipedia.org/wiki/NTFS) mirrored slave volume (see [B7h](https://en.wikipedia.org/wiki/Partition_type#PID_B7h) and [87h](https://en.wikipedia.org/wiki/Partition_type#PID_87h), corresponds with [07h](https://en.wikipedia.org/wiki/Partition_type#PID_07h))",
      "MBR, EBR",
      "LBA",
      "x86",
      "Secured FS",
      "Caldera",
      "DR-DOS 7.0x"
    ],
    [
      "Reserved for DR-DOS since 1997",
      "EBR",
      "",
      "",
      "File system",
      "Microsoft",
      "Windows NT 4 Server"
    ],
    [
      "CDh",
      "Reserved for DR-DOS since 1997",
      "",
      "",
      "No",
      "Service",
      "Convergent Technologies, Unisys",
      "CTOS"
    ],
    [
      "CEh",
      "Reserved for DR-DOS since 1997",
      "MBR, EBR",
      "LBA",
      "x86",
      "Secured FS",
      "Caldera",
      "DR-DOS 7.0x"
    ],
    [
      "CFh",
      "Secured [FAT32](https://en.wikipedia.org/wiki/FAT32) (corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "MBR, EBR",
      "LBA",
      "No, AAP",
      "Secured container",
      "Caldera",
      "DR-DOS 7.0x"
    ],
    [
      "D0h",
      "Corrupted fault-tolerant [FAT32](https://en.wikipedia.org/wiki/FAT32) mirrored slave volume (see [BBh](https://en.wikipedia.org/wiki/Partition_type#PID_BBh) and [8Bh](https://en.wikipedia.org/wiki/Partition_type#PID_8Bh), corresponds with [0Bh](https://en.wikipedia.org/wiki/Partition_type#PID_0Bh))",
      "MBR",
      "CHS, LBA",
      "386",
      "Secured container",
      "[Novell](https://en.wikipedia.org/wiki/Novell), [IMS](https://en.wikipedia.org/wiki/Intelligent_Micro_Software)",
      "Multiuser DOS, REAL/32"
    ],
    [
      "D1h",
      "Secured [FAT32](https://en.wikipedia.org/wiki/FAT32) (corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "MBR, EBR",
      "CHS",
      "386",
      "Secured FS",
      "Novell",
      "Multiuser DOS"
    ],
    [
      "D4h",
      "Corrupted fault-tolerant [FAT32](https://en.wikipedia.org/wiki/FAT32) mirrored slave volume (see [BCh](https://en.wikipedia.org/wiki/Partition_type#PID_BCh) and [8Ch](https://en.wikipedia.org/wiki/Partition_type#PID_8Ch), corresponds with [0Ch](https://en.wikipedia.org/wiki/Partition_type#PID_0Ch))",
      "MBR, EBR",
      "CHS",
      "386",
      "Secured FS",
      "Novell",
      "Multiuser DOS"
    ],
    [
      "D5h",
      "Memory dump (see [DDh](https://en.wikipedia.org/wiki/Partition_type#PID_DDh) and [DBh](https://en.wikipedia.org/wiki/Partition_type#PID_DBh))",
      "MBR, EBR",
      "CHS",
      "No",
      "Secured container",
      "Novell",
      "Multiuser DOS"
    ],
    [
      "D6h",
      "Secured FAT16B (corresponds with [0Eh](https://en.wikipedia.org/wiki/Partition_type#PID_0Eh))",
      "MBR, EBR",
      "CHS",
      "386",
      "Secured FS",
      "Novell",
      "Multiuser DOS"
    ],
    [
      "D8h",
      "Secured [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [LBA](https://en.wikipedia.org/wiki/Logical_block_addressing) (corresponds with [0Fh](https://en.wikipedia.org/wiki/Partition_type#PID_0Fh))",
      "MBR",
      "CHS",
      "",
      "File system",
      "[Digital Research](https://en.wikipedia.org/wiki/Digital_Research)",
      "CP/M-86"
    ],
    [
      {
        "content": "DAh",
        "rowspan": 2
      },
      "Secured [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table) partition (larger than 32 MB)",
      "",
      "",
      "No",
      "Service",
      "John Hardin",
      ""
    ],
    [
      "Secured FAT12 (corresponds with [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h))",
      "",
      "",
      "",
      "Secured FS",
      "[DataPower](https://en.wikipedia.org/wiki/DataPower)",
      "Powercopy Backup"
    ],
    [
      {
        "content": "DBh",
        "rowspan": 4
      },
      "Secured FAT16 (corresponds with [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h))",
      "MBR",
      "CHS",
      "x86",
      "File system",
      "[Digital Research](https://en.wikipedia.org/wiki/Digital_Research)",
      "[CP/M-86](https://en.wikipedia.org/wiki/CP/M-86), [Concurrent CP/M-86](https://en.wikipedia.org/wiki/Concurrent_CP/M-86), [Concurrent DOS](https://en.wikipedia.org/wiki/Concurrent_DOS)"
    ],
    [
      "Secured [extended partition](https://en.wikipedia.org/wiki/Extended_Boot_Record) with [CHS](https://en.wikipedia.org/wiki/Cylinder-head-sector) addressing (corresponds with [05h](https://en.wikipedia.org/wiki/Partition_type#PID_05h))",
      "",
      "",
      "",
      "?",
      "[Convergent Technologies](https://en.wikipedia.org/wiki/Convergent_Technologies), [Unisys](https://en.wikipedia.org/wiki/Unisys)",
      "[CTOS](https://en.wikipedia.org/wiki/CTOS)"
    ],
    [
      "Secured FAT16B (corresponds with [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "x86",
      "Service",
      "KDG Telemetry",
      "D800"
    ],
    [
      "[CP/M-86](https://en.wikipedia.org/wiki/CP/M-86) (see [DBh](https://en.wikipedia.org/wiki/Partition_type#PID_DBh))",
      "MBR",
      "CHS, LBA",
      "x86",
      "Service FS",
      "[Dell](https://en.wikipedia.org/wiki/Dell)",
      "[DRMK](https://en.wikipedia.org/wiki/DRMK)"
    ],
    [
      "DDh",
      "Non-file system data",
      "",
      "",
      "No",
      "Service",
      "Convergent Technologies, Unisys",
      "CTOS"
    ],
    [
      "DEh",
      "Shielded disk",
      "MBR",
      "CHS, LBA",
      "x86",
      "Hidden FS",
      "[Dell](https://en.wikipedia.org/wiki/Dell)",
      ""
    ],
    [
      {
        "content": "DFh",
        "rowspan": 3
      },
      "(see [D8h](https://en.wikipedia.org/wiki/Partition_type#PID_D8h))",
      "",
      "",
      "",
      "?",
      "[Data General](https://en.wikipedia.org/wiki/Data_General)",
      "[DG/UX](https://en.wikipedia.org/wiki/DG/UX)"
    ],
    [
      "? (see [CDh](https://en.wikipedia.org/wiki/Partition_type#PID_CDh) and [DDh](https://en.wikipedia.org/wiki/Partition_type#PID_DDh))",
      "MBR",
      "",
      "",
      "Blocker",
      "[TeraByte Unlimited](https://en.wikipedia.org/wiki/TeraByte_Unlimited)",
      "[BootIt](https://en.wikipedia.org/wiki/BootIt_Next_Generation)"
    ],
    [
      "boot image for x86 supervisor CPU (SCPU) module",
      "",
      "",
      "",
      "?",
      "?",
      "Aviion"
    ],
    [
      "E0h",
      "FAT32 system restore partition (DSR) (see [DEh](https://en.wikipedia.org/wiki/Partition_type#PID_DEh))",
      "",
      "",
      "",
      "File system",
      "[STMicroelectronics](https://en.wikipedia.org/wiki/STMicroelectronics)",
      ""
    ],
    [
      "E1h",
      "Hidden memory dump (see [CDh](https://en.wikipedia.org/wiki/Partition_type#PID_CDh) and [DBh](https://en.wikipedia.org/wiki/Partition_type#PID_DBh))",
      "MBR",
      "CHS",
      "",
      "File system",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "E3h",
      "FAT16 utility/diagnostic partition",
      "",
      "",
      "",
      "File system",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "E4h",
      "DG/UX virtual disk manager",
      "MBR",
      "CHS",
      "",
      "File system",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "E5h",
      "EMBRM",
      "MBR",
      "CHS",
      "x86",
      "File system",
      "[Tandy](https://en.wikipedia.org/wiki/Tandy_Computers)",
      "Tandy MS-DOS"
    ],
    [
      "E6h",
      "",
      "",
      "",
      "",
      "File System",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "E8h",
      "ST AVFS",
      "MBR,EBR",
      "CHS, LBA",
      "No",
      "Service",
      "Linux",
      "[LUKS](https://en.wikipedia.org/wiki/LUKS)"
    ],
    [
      "EBh",
      "FAT12 (≤16 MB) (corresponds to [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h))",
      "",
      "",
      "386",
      "File system",
      "[Be Inc.](https://en.wikipedia.org/wiki/Be_Inc.)",
      "[BeOS](https://en.wikipedia.org/wiki/BeOS), [Haiku](https://en.wikipedia.org/wiki/Haiku_(operating_system))"
    ],
    [
      "ECh",
      "Read-only FAT12 (corresponds to [E1h](https://en.wikipedia.org/wiki/Partition_type#PID_E1h))",
      "",
      "",
      "",
      "File system",
      "Robert Szeleney",
      "[SkyOS](https://en.wikipedia.org/wiki/SkyOS)"
    ],
    [
      {
        "content": "EDh",
        "rowspan": 2
      },
      "FAT16 (≤32 MB) (corresponds to [04h](https://en.wikipedia.org/wiki/Partition_type#PID_04h))",
      "MBR, EBR",
      "CHS, LBA",
      "x86",
      "Service",
      "Matthias R. Paul",
      "Sprytix"
    ],
    [
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT)",
      "MBR",
      "CHS, LBA",
      "x86",
      "",
      "[Hewlett Packard](https://en.wikipedia.org/wiki/Hewlett_Packard)",
      "EFI"
    ],
    [
      "EEh",
      "Read-only FAT16 (corresponds to [E4h](https://en.wikipedia.org/wiki/Partition_type#PID_E4h))",
      "MBR",
      "",
      "No",
      "Blocker",
      "[Microsoft](https://en.wikipedia.org/wiki/Microsoft)",
      "[EFI](https://en.wikipedia.org/wiki/Extensible_Firmware_Interface)"
    ],
    [
      "EFh",
      "Linux Unified Key Setup",
      "MBR",
      "",
      "",
      "Service FS",
      "[Intel](https://en.wikipedia.org/wiki/Intel)",
      "EFI"
    ],
    [
      "F0h",
      "[BFS](https://en.wikipedia.org/wiki/Be_File_System) (see [2Ah](https://en.wikipedia.org/wiki/Partition_type#PID_2Ah) and [2Bh](https://en.wikipedia.org/wiki/Partition_type#PID_2Bh))",
      "",
      "CHS",
      "",
      "Service",
      "",
      "Linux"
    ],
    [
      "F2h",
      "[SkyFS](https://en.wikipedia.org/wiki/SkyFS)",
      "MBR",
      "CHS",
      "x86",
      "File system",
      "[Sperry IT](https://en.wikipedia.org/wiki/Sperry_Corporation), [Unisys](https://en.wikipedia.org/wiki/Unisys), [Digital Research](https://en.wikipedia.org/wiki/Digital_Research)",
      "Sperry IT MS-DOS 3.x, Unisys MS-DOS 3.3, Digital Research [DOS Plus](https://en.wikipedia.org/wiki/DOS_Plus) 2.1"
    ],
    [
      {
        "content": "F4h",
        "rowspan": 2
      },
      "EDC loader",
      "MBR",
      "CHS",
      "",
      "File system",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      "Was proposed for [GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table) [hybrid MBR](https://en.wikipedia.org/wiki/Hybrid_MBR)",
      "",
      "",
      "",
      "File system",
      "?",
      "Prologue"
    ],
    [
      "F5h",
      "[GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table) [protective MBR](https://en.wikipedia.org/wiki/Protective_MBR) (see [EFh](https://en.wikipedia.org/wiki/Partition_type#PID_EFh))",
      "",
      "",
      "",
      "Container",
      "?",
      "Prologue"
    ],
    [
      "F6h",
      "[EFI system partition](https://en.wikipedia.org/wiki/EFI_system_partition). Can be a FAT12, FAT16, [FAT32](https://en.wikipedia.org/wiki/FAT32) (or other) file system (see [EEh](https://en.wikipedia.org/wiki/Partition_type#PID_EEh))",
      "MBR",
      "",
      "",
      "File system",
      "Storage Dimensions",
      "SpeedStor"
    ],
    [
      {
        "content": "F7h",
        "rowspan": 2
      },
      "[PA-RISC](https://en.wikipedia.org/wiki/PA-RISC) Linux boot loader; must reside in first physical 2 GB",
      "",
      "",
      "",
      "File system",
      "Natalia Portillo",
      "O.S.G."
    ],
    [
      "[Logical sectored FAT12 or FAT16](https://en.wikipedia.org/wiki/Logical_sectored_FAT) secondary partition",
      "",
      "",
      "",
      "File system",
      "DDRdrive",
      "X1"
    ],
    [
      "F9h",
      "FAT16B (corresponds to [06h](https://en.wikipedia.org/wiki/Partition_type#PID_06h))",
      "",
      "",
      "",
      "Cache",
      "ALC Press",
      "Linux"
    ],
    [
      "FBh",
      "Single volume partition for NGF or TwinFS",
      "",
      "",
      "No",
      "File system",
      "[VMware](https://en.wikipedia.org/wiki/VMware)",
      "[VMware ESX](https://en.wikipedia.org/wiki/VMware_ESXi)"
    ],
    [
      "FCh",
      "MD0-MD9 multi volume partition for NGF or TwinFS",
      "",
      "",
      "No",
      "Swap",
      "VMware",
      "VMware ESX"
    ],
    [
      "FDh",
      "Read-only FAT16B (corresponds to [F4h](https://en.wikipedia.org/wiki/Partition_type#PID_F4h))",
      "",
      "",
      "",
      "Service",
      "GNU/Linux",
      "Linux"
    ],
    [
      {
        "content": "FEh",
        "rowspan": 5
      },
      "EFAT",
      "",
      "",
      "",
      "?",
      "[Intel](https://en.wikipedia.org/wiki/Intel)",
      "LANstep"
    ],
    [
      "[Solid State](https://en.wikipedia.org/wiki/Solid-state_drive) file system",
      "",
      "",
      "",
      "Service",
      "IBM",
      "PS/2"
    ],
    [
      "pCache ext2/ext3 persistent cache",
      "MBR",
      "CHS, LBA",
      "x86",
      "Service FS",
      "IBM",
      "PS/2"
    ],
    [
      "[VMware VMFS](https://en.wikipedia.org/wiki/VMware_VMFS) file system partition",
      "",
      "",
      "",
      "Service",
      "Microsoft",
      "Windows NT"
    ],
    [
      "VMware swap / VMKCORE kernel dump partition",
      "",
      "",
      "",
      "Service",
      "GNU/Linux",
      "Linux"
    ],
    [
      "FFh",
      "Linux [RAID](https://en.wikipedia.org/wiki/RAID) superblock with auto-detect (see [86h](https://en.wikipedia.org/wiki/Partition_type#PID_86h))",
      "MBR",
      "CHS",
      "No",
      "Service",
      "[Microsoft](https://en.wikipedia.org/wiki/Microsoft)",
      "XENIX"
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "[PS/2](https://en.wikipedia.org/wiki/PS/2) IML partition",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    [
      "",
      "PS/2 recovery partition (FAT12 <em>reference disk</em> floppy image), (corresponds with [01h](https://en.wikipedia.org/wiki/Partition_type#PID_01h) if activated, all other partitions +10h then)",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
