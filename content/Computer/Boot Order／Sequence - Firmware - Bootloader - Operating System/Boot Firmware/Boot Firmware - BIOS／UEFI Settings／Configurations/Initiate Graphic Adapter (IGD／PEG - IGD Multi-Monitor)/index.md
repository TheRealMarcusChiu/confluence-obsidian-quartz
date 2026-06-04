---
title: "Initiate Graphic Adapter (IGD／PEG - IGD Multi-Monitor)"
created: 2023-12-08T15:21:38.936-06:00
modified: 2023-12-08T16:17:21.352-06:00
parent: "[[Boot Firmware - BIOS／UEFI Settings／Configurations]]"
children: []
---
- <strong>IGD - Integrated Graphics Device</strong> - a graphics processing unit integrated directly into the motherboard of a PC.
- <strong>PEG - [[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCI Express]] Graphics</strong> -

# BIOS/UEFI Setting Defaults

```merge-table
{
  "rows": [
    [
      {
        "content": "External GPU",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Integrated GPU",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- \"Initiate Graphic Adapter\" cannot be changed from \"IGD\"\n- \"IGD Multi-Monitor\" cannot be enabled"
    ],
    [
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- \"Initiate Graphic Adapter\" cannot be changed from \"PEG\"\n- \"IGD Multi-Monitor\" cannot be enabled"
    ],
    [
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- \"Initiate Graphic Adapter\" is by default at \"PEG\" but it can be changed for \"IGD\"\n- \"IGD Multi-Monitor\" is disabled by default but it can be enabled (so that OS would be able to see both the CPU built-in GPU and the GC)\n- If you set \"Initiate Graphic Adapter\" at \"IGD\", then mobo's video ports are automatically enabled to be able to display post messages/pictures. In other words, \"IGD Multi-Monitor\" is enabled and cannot be changed.\n- If you set \"Initiate Graphic Adapter\" at \"PEG\", then mobo's video ports are automatically disabled unless you change \"IGD Multi-Monitor\" to enabled.\n- This explains why access to \"IGD Multi-Monitor\" is useful only if \"Initiate Graphic Adapter\" is set at \"PEG\" (and CPU is with built-in GPU)!"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
