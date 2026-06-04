---
title: "Preboot eXecution Environment (PXE) Boot"
created: 2019-11-13T08:58:58.633-06:00
modified: 2025-12-24T02:34:54.670-06:00
parent: "[[Network Booting (NetBoot)]]"
children:
  - "[[PXE Boot vs IPMI]]"
---
###### Preboot eXecution Environment (PXE, most often pronounced as <em>pixie</em>)
````excerpt
- is a specification that describes a standardized [client-server](https://en.wikipedia.org/wiki/Client-server) environment that [boots](https://en.wikipedia.org/wiki/Booting) a software assembly, retrieved from a network, on PXE-enabled clients. On the client side it requires only a PXE-capable [[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|network interface controller (NIC)]] and uses a small set of industry-standard network protocols such as [[Dynamic Host Configuration Protocol (DHCP)|DHCP]] and [[Trivial File Transfer Protocol (TFTP)]]
- allows a computer to boot from a network rather than a local drive, like a hard disk or USB drive
- it's a standardized client-server environment where a boot program is downloaded over the network
- this is useful for tasks like operating system deployment, automated installations, and diskless workstations
````
^excerpt

# What happens during a PXE Boot

```merge-table
{
  "rows": [
    [
      {
        "content": "1. Power on the machine",
        "bg": "#F4F5F7"
      },
      "- The NIC firmware (UEFI or legacy BIOS) has PXE support"
    ],
    [
      {
        "content": "2. DHCP request",
        "bg": "#F4F5F7"
      },
      "- The client broadcasts: <em>“I want an IP and PXE info”</em>\n- A [[DHCP Server|DHCP server]] replies with:\n\t- IP address\n\t- PXE server address\n\t- Boot filename"
    ],
    [
      {
        "content": "3. Download Bootloader",
        "bg": "#F4F5F7"
      },
      "- The client downloads a small bootloader via [[Trivial File Transfer Protocol (TFTP)|TFTP]] (commonly)\n- Examples: <code>pxelinux.0</code>, <code>bootx64.efi</code>, <code>grubx64.efi</code>"
    ],
    [
      {
        "content": "4. Load Kernel / Installer",
        "bg": "#F4F5F7"
      },
      "- [[Boot Order／Sequence - Firmware - Bootloader - Operating System|Bootloader]] fetches:\n\t- [[Linux Kernel|Linux kernel]]\n\t- [[initrd (Initial RAM Disk) vs initramfs (Initial RAM File System)|initramfs]]\n\t- or chainloads an installer"
    ],
    [
      {
        "content": "5. OS Install or Live Boot",
        "bg": "#F4F5F7"
      },
      "- The system:\n\t- Installs an OS automatically\n\t- Boots a live environment\n\t- Runs diagnostics or recovery tools"
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
