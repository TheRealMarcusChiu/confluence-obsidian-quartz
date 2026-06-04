---
title: "Intelligent Platform Management Interface (IPMI)"
created: 2025-10-23T00:51:54.200-05:00
modified: 2025-12-24T03:02:14.646-06:00
parent: "[[Computer IO I／O Input／Output Ports／Devices]]"
children: []
---
###### Intelligent Platform Management Interface (IPMI)
````excerpt
- is a set of computer interface specifications for an autonomous computer subsystem that provides management and monitoring capabilities independently of the host system's [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]], [[Boot Firmware|firmware]] ([[Basic Input／Output System (BIOS)|BIOS]] or [[Unified EFI (UEFI)|UEFI]]) and [[Operating Systems (OS)|operating system]]
````
^excerpt

# IPMI - Ports

```merge-table
{
  "rows": [
    [
      {
        "content": "Port",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Purpose",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "623",
      "[[Universal／User Datagram Protocol (UDP)|UDP]]",
      "Standard IPMI Remote Management Control Protocol (RMCP)"
    ],
    [
      "80/443",
      "[[Transmission Control Protocol (TCP)|TCP]]",
      "IPMI web interface ([[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]/[[Hyper Text Transfer Protocol Secure (HTTPS)|HTTPS]])"
    ],
    [
      "427",
      "TCP",
      "Other management services, like <code><font style=\"color: rgb(122,134,154);\">svrloc</font></code> (Service Location Protocol)"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[PXE Boot vs IPMI]]
