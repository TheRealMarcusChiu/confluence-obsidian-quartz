---
title: "Sleep States (S0／S1／S2／S3／S4／S5)"
created: 2023-12-08T21:45:00.864-06:00
modified: 2023-12-08T21:47:03.096-06:00
parent: "[[Boot Firmware - BIOS／UEFI Settings／Configurations]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "S0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "On / Working",
        "bg": "#F4F5F7"
      },
      "The computer is powered up. If supported, power conservation is handled by each device."
    ],
    [
      {
        "content": "S1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Sleep",
        "bg": "#F4F5F7"
      },
      "CPU is stopped. RAM maintains power. Everything else is off or in low-power mode."
    ],
    [
      {
        "content": "S2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Sleep",
        "bg": "#F4F5F7"
      },
      "CPU has no power. RAM maintains power. Everything else is off or in low-power mode."
    ],
    [
      {
        "content": "S3",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Standby",
        "bg": "#F4F5F7"
      },
      "CPU has no power. RAM maintains power and refreshes slowly. Power supply reduces power. This level might be referred to as “Save to RAM.” Windows enters this level when on standby."
    ],
    [
      {
        "content": "S4",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Hibernate",
        "bg": "#F4F5F7"
      },
      "Power to most hardware is shut off. Any files in memory are saved to the hard disk in a temporary file. If configured, the NIC will remain on for WOL or AoL. This level is also known as “Save to disk.”"
    ],
    [
      {
        "content": "S5",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Off",
        "bg": "#F4F5F7"
      },
      "Everything is off. No files are saved. If configured, the NIC will maintain the power to listen for WOL (Magic) packets. This is known as a shutdown."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
