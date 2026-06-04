---
title: "Graphics DDR SDRAM (GDDR SDRAM) (GDDR2／GDDR3／GDDR4／GDDR5／GDDR5X／GDDR6／GDDR6X／GDDR6W)"
created: 2024-08-25T14:11:48.378-05:00
modified: 2026-03-20T00:59:29.235-05:00
parent: "[[Video Random Access Memory (VRAM)]]"
children:
  - "[[GDDR6 vs GDDR6X]]"
---
###### Graphics DDR SDRAM (GDDR SDRAM)
````excerpt
- is a type of [[Video Random Access Memory (VRAM)|VRAM]]
- is a type of [[Synchronous Dynamic RAM (SDRAM)|synchronous dynamic random-access memory (SDRAM)]] specifically designed for applications requiring high bandwidth, e.g. GPUs)
- is distinct from the more widely known types of [DDR SDRAM](https://en.wikipedia.org/wiki/DDR_SDRAM) (e.g. [DDR4](https://en.wikipedia.org/wiki/DDR4_SDRAM) and [DDR5](https://en.wikipedia.org/wiki/DDR5_SDRAM))
- as of 2023, GDDR SDRAM has been succeeded by [GDDR2](https://en.wikipedia.org/wiki/GDDR2), [GDDR3](https://en.wikipedia.org/wiki/GDDR3), [GDDR4](https://en.wikipedia.org/wiki/GDDR4), [GDDR5](https://en.wikipedia.org/wiki/GDDR5), [GDDR5X](https://en.wikipedia.org/wiki/GDDR5X), [GDDR6](https://en.wikipedia.org/wiki/GDDR6), [GDDR6X](https://en.wikipedia.org/wiki/GDDR6X) and [GDDR6W](https://en.wikipedia.org/wiki/GDDR6W)
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Versions

```merge-table
{
  "rows": [
    [
      {
        "content": "Version",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Release",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "I/O Clock",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bus Width per Chip",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Typical Capacity per Chip",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Max Bandwidth per Chip",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Voltage",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes / First GPUs",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "GDDR1",
        "bg": "#F4F5F7"
      },
      "1998",
      "166–400 MHz",
      "32 bits",
      "32–128 MB",
      "1.3–1.6 GB/s",
      "2.5V",
      "Early 3D graphics memory, used in NVIDIA RIVA TNT2, ATI Rage 128"
    ],
    [
      {
        "content": "GDDR2",
        "bg": "#F4F5F7"
      },
      "2001",
      "200–400 MHz",
      "32 bits",
      "32–128 MB",
      "1.6–3.2 GB/s",
      "2.5V",
      "Limited adoption, higher signaling rate than GDDR1"
    ],
    [
      {
        "content": "GDDR3",
        "bg": "#F4F5F7"
      },
      "2003",
      "400–800 MHz",
      "32 bits",
      "128–512 MB",
      "3.2–6.4 GB/s",
      "1.8V",
      "Widely used; NVIDIA GeForce 6/7, ATI Radeon X series"
    ],
    [
      {
        "content": "GDDR4",
        "bg": "#F4F5F7"
      },
      "2005",
      "800–1000 MHz",
      "32 bits",
      "256–512 MB",
      "6.4–8 GB/s",
      "1.5V",
      "Short-lived; ATI Radeon X1000 series"
    ],
    [
      {
        "content": "GDDR5",
        "bg": "#F4F5F7"
      },
      "2007",
      "1000–2000 MHz",
      "32 bits",
      "512 MB – 1 GB",
      "8–16 GB/s",
      "1.5V",
      "Mainstream adoption; NVIDIA GeForce 8800 GTX, Radeon HD 4000"
    ],
    [
      {
        "content": "GDDR5X",
        "bg": "#F4F5F7"
      },
      "2016",
      "1250–1400 MHz",
      "32 bits",
      "1–2 GB",
      "10–14 GB/s",
      "1.35V",
      "High-bandwidth variant of GDDR5; NVIDIA Pascal GPUs"
    ],
    [
      {
        "content": "GDDR6",
        "bg": "#F4F5F7"
      },
      "2018",
      "1750–2000 MHz",
      "32 bits",
      "1–2 GB",
      "14–16 GB/s",
      "1.35V",
      "Widely used in gaming GPUs; RTX 20 series, AMD RX 5000"
    ],
    [
      {
        "content": "GDDR6X",
        "bg": "#F4F5F7"
      },
      "2020",
      "1900–2200 MHz",
      "32 bits",
      "1–2 GB",
      "19–21 GB/s",
      "1.35–1.45V",
      "Uses PAM4 signaling for higher bandwidth; NVIDIA RTX 30 series"
    ],
    [
      {
        "content": "GDDR7",
        "bg": "#F4F5F7"
      },
      "2023–2024",
      "3200–4000 MHz (effective)",
      "32 bits",
      "2–4 GB",
      "25–32 GB/s",
      "~1.1–1.2V",
      "Latest generation; very high bandwidth, supports next-gen GPUs"
    ]
  ]
}
```
