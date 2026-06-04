---
title: "PSU (ATX 3.1 PCIe 5.1 vs ATX 3.0 PCIe 5.0)"
created: 2025-10-11T01:27:59.670-05:00
modified: 2025-10-11T02:11:34.626-05:00
parent: "[[Power Supply Unit (PSU)]]"
children: []
---
For new builds with high-end GPUs, ATX 3.1 is the better choice, primarily for the more secure 12V-2x6 connector, which addresses melting issues seen with ATX 3.0's 12VHPWR connector. ATX 3.0 is still sufficient for most users, especially those with AMD/Intel GPUs or using a high-quality ATX 3.0 PSU, but ATX 3.1 is the safer, more future-proof option for the latest flagship GPUs
# ATX 3.1 (PCIe 5.1)

```merge-table
{
  "rows": [
    [
      {
        "content": "Pros",
        "bg": "#F4F5F7"
      },
      "- Features the more secure 12V-2x6 connector, which has shorter sensing pins and longer conductors to prevent melting issues with high-power GPUs, say GameMax and Corsair.\n- Recommended for NVIDIA's 50-series GPUs and other high-end components, notes GameMax.\n- Slightly improved efficiency due to a shorter hold-up time (12ms vs 17ms)."
    ],
    [
      {
        "content": "Cons",
        "bg": "#F4F5F7"
      },
      "- Generally more expensive than ATX 3.0 units, though availability is increasing.\n- The internal 12VHPWR vs 12V-2x6 PCB header on the PSU side is the only difference; the cable itself is the same, though it is not recommended to mix them, says an ASUS ROG Forum post."
    ]
  ]
}
```
# ATX 3.0 (PCIe 5.0)

```merge-table
{
  "rows": [
    [
      {
        "content": "Pros",
        "bg": "#F4F5F7"
      },
      "- Fully capable of handling modern components, including most high-end GPUs, according to GameMax.\n- Often more affordable than ATX 3.1 models.\n- ATX 3.0 power supplies are designed to be compatible with older ATX standards like ATX 2.2 and ATX 2.4, notes GameMax."
    ],
    [
      {
        "content": "Cons",
        "bg": "#F4F5F7"
      },
      "- Uses the 12VHPWR connector, which was prone to melting when it was not fully plugged into the GPU.\n- May not be ideal for the absolute newest, highest-power flagship GPUs"
    ]
  ]
}
```
