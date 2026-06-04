---
title: "LBA & CHS - Mappings／Conversion"
created: 2020-06-11T21:27:10.175-05:00
modified: 2022-09-11T15:26:20.225-05:00
parent: "[[Drive - Device - Disk - Disc - Memory Addressing Modes]]"
children: []
---
this article shows the mappings/conversions between 2 addressing modes:
- [[Cylinder-Head-Sector (CHS) Addressing Mode]]
- [[Logical Block Addressing (LBA) Mode - Logical Sector Number (LSN)]]

### LBA-Assisted Translation

When the BIOS is configured to use a disk in LBA-assisted translation mode, the BIOS accesses the hardware using LBA mode, but also presents a translated CHS geometry via the INT 13h interface. The number of cylinders, heads, and sectors in the translated geometry depends on the total size of the disk, as shown in the following table.

```merge-table
{
  "rows": [
    [
      {
        "content": "Disk size",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Sectors/track",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Heads",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Cylinders",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "1 \\< X ≤ 504 MiB",
      "63",
      "16",
      "X ÷ (63 × 16 × 512)"
    ],
    [
      "504 MiB \\< X ≤ 1008 MiB",
      "63",
      "32",
      "X ÷ (63 × 32 × 512)"
    ],
    [
      "1008 MiB \\< X ≤ 2016 MiB",
      "63",
      "64",
      "X ÷ (63 × 64 × 512)"
    ],
    [
      "2016 MiB \\< X ≤ 4032 MiB",
      "63",
      "128",
      "X ÷ (63 × 128 × 512)"
    ],
    [
      "4032 MiB \\< X ≤ 8032.5 MiB",
      "63",
      "255",
      "X ÷ (63 × 255 × 512)"
    ]
  ]
}
```
# <strong>CHS to LBA</strong>

In 2002 the [ATA-6](https://en.wikipedia.org/wiki/Parallel_ATA) specification introduced an optional 48 bits [[Logical Block Addressing (LBA) Mode - Logical Sector Number (LSN)|Logical Block Addressing]] and declared [[Cylinder-Head-Sector (CHS) Addressing Mode|CHS Addressing]] as obsolete, but still allowed to implement the ATA-5 translations. Unsurprisingly the CHS to LBA translation formula given below also matches the last ATA-5 CHS translation. In the ATA-5 specification CHS support was mandatory for up to 16,514,064 sectors and optional for larger disks. The ATA-5 limit corresponds to CHS <code>16383-16-63</code> or equivalent disk capacities (16,514,064 = 16,383×16×63 = 1032×254×63), and requires 24 = 14+4+6 bits (16,383 + 1 = 2<sup>14</sup>)

LBA numbering starts with the first cylinder, first head, and track's first sector. Once the track is exhausted, numbering continues to the second head, while staying inside the first cylinder. Once all heads inside the first cylinder are exhausted, numbering continues from the second cylinder, etc. Thus, the lower the LBA value is, the closer the physical sector is to the hard drive's first (that is, outermost) cylinder.

CHS [tuples](https://en.wikipedia.org/wiki/Tuple) can be mapped onto LBA addresses using the following formula:
- A = (c ⋅ N<sub>heads</sub> + h) ⋅ N<sub>sectors</sub> + (s − 1)

where:
- <em>A</em> is the LBA address
- <em>N</em><sub>heads</sub> is the number of heads on the disk
- <em>N</em><sub>sectors</sub> is the maximum number of sectors per track
- (<em>c</em>, <em>h</em>, <em>s</em>) is the CHS Address

the formula does not use the number of cylinders, but requires the number of heads and the number of sectors per track in the disk geometry, because the same CHS tuple addresses different logical sector numbers depending on the geometry. <strong>Examples</strong>:
- For geometry 1020 16 63 of a disk with 1028160 sectors, CHS 3 2 1 is LBA  3150=((3× 16)+2)× 63 + (1-1)
- For geometry 1008 4 255 of a disk with 1028160 sectors, CHS 3 2 1 is LBA  3570=((3×  4)+2)×255 + (1-1)
- For geometry  64 255 63 of a disk with 1028160 sectors, CHS 3 2 1 is LBA 48321=((3×255)+2)× 63 + (1-1)
- For geometry 2142 15 32 of a disk with 1028160 sectors, CHS 3 2 1 is LBA  1504=((3× 15)+2)× 32 + (1-1)

To help visualize the sequencing of sectors into a linear LBA model, note that:

The first LBA sector is sector \# zero, the same sector in a CHS model is called sector \# one. All the sectors of each head/track get counted before incrementing to the next head/track. All the heads/tracks of the same cylinder get counted before incrementing to the next cylinder. The outside half of a whole Hard Drive would be the first half of the drive.
# <strong>LBA to </strong><strong>CHS</strong>

LBA addresses can be mapped to CHS tuples with the following formula ("mod" is the modulo operation, i.e. the remainder, and "÷" is integer division, i.e. the quotient of the division where any fractional part is discarded):
- C = LBA ÷ (HPC × SPT)
- H = (LBA ÷ SPT) mod HPC
- S = (LBA mod SPT) + 1

According to the ATA specifications, "If the content of words (61:60) is greater than or equal to 16,514,064, then the content of word 1 \[the number of logical cylinders\] shall be equal to 16,383." Therefore, for LBA 16450559, an ATA drive may actually respond with the CHS <em>tuple</em> (16319, 15, 63), and the number of cylinders in this scheme must be much larger than 1024 allowed by INT 13h.
