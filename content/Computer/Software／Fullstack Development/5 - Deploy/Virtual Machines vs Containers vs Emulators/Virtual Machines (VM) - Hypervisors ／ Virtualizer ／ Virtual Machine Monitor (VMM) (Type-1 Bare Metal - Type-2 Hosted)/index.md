---
title: "Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)"
created: 2019-03-15T02:08:11.134-05:00
modified: 2023-05-06T13:21:53.323-05:00
parent: "[[Virtual Machines vs Containers vs Emulators]]"
children:
  - "[[Kernel-Based Virtual Machine (KVM) Hypervisor]]"
  - "[[MicroCloud]]"
  - "[[Microsoft Client Hyper-V]]"
  - "[[Microsoft Hyper-V]]"
  - "[[Nutanix Acropolis Hypervisor (AHV)]]"
  - "[[Parallels]]"
  - "[[Proxmox Virtual Environment (PVE)]]"
  - "[[VMware]]"
  - "[[VirtualBox]]"
  - "[[Xen Cloud Platform - next generation (XCP-ng)]]"
  - "[[Xen Project]]"
  - "[[oVirt]]"
---
- <strong>Virtual Machine (VM</strong><strong>)</strong> is an emulation of an [[Operating Systems (OS)|Operating System]]
- <strong>Hypervisor</strong> or <strong>Virtualizer</strong> or <strong>Virtual Machine Monitor</strong> is computer software, firmware, or hardware that creates and runs <strong>VMs</strong>
	- for virtualizing networks see [[Computer Network／Networking Software Emulation／Emulator／Simulations／Simulator／Virtualization／Virtualizer|Network Software Emulator]]

# Hypervisor - Type 1 vs Type 2

```merge-table
{
  "rows": [
    [
      {
        "content": "Hypervisor Type",
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
        "content": "Type 1 \nBare Metal Hypervisor",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- run directly on the system hardware – “bare metal” embedded hypervisor\n- takes advantage of the [[Intel Virtualization Technology (VT) - VT-x VT-i VT-d VT-c|VT-x hardware extension]]",
      "- [[VMware|WMware]]\n- [[Xen Project]]"
    ],
    [
      {
        "content": "Type 2 \nHosted Hypervisor",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- run on a host [[Operating Systems (OS)|operating system]] that provides virtualization services, such as I/O device support and memory management",
      "- [[VirtualBox]]\n- [[Kernel-Based Virtual Machine (KVM) Hypervisor]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Hypervisor - Type 1 vs Type 2 Diagram
# ![[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)/hypervisor-1-vs-2.png|500]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
