---
title: "NOR Flash Memory vs NAND Flash Memory"
created: 2022-09-24T20:50:09.948-05:00
modified: 2022-09-24T20:51:14.047-05:00
parent: "[[Flash Memory]]"
children: []
---
# NOR vs NAND - Flash - Intro
- Intel is the first company to introduce commercial (NOR type) flash chip in 1988
- Toshiba released world's first NAND-flash in 1989
- NAND has greater storage densities and lower costs per bit than NOR-flash

# NOR vs NAND - Flash - Read Abilities
- NOR offers complete address and data buses to randomly access any of its memory location (addressable to every byte). This makes it a suitable replacement for older ROM BIOS/firmware chips, which rarely needs to be updated
- NAND does not provide a random-access external address bus so the data must be read on a block-wise basis (also known as page access), where each block holds hundreds to thousands of bits, resembling to a kind of sequential data access. This is one of the main reasons why the NAND-flash is unsuitable to replace the ROM, because most of the microprocessors and microcontrollers require byte-level random access

# NOR vs NAND - Flash - Write Abilities
- A write operation in any type of flash device can only be performed on an empty or erased unit. So in most cases write operation must be preceded by an erase operation. The erase operation is fairly straightforward in the case of NAND-flash devices. But for a NOR-flash, it is mandatory that all bytes in the target block should be written with zeros before they can be erased.
- The size of an erase-block in NOR-flash ranges from 64 to 128 Kbytes. Here a write/erase operation can take up to 5 s. But the NAND-flash has erase blocks 8 to 32 Kbytes in size. So it is obvious that the NAND performs the identical operation in a lesser time duration.
