---
title: "Kernel-Based Virtual Machine (KVM) Hypervisor"
created: 2019-12-23T16:55:22.564-06:00
modified: 2023-06-10T11:01:54.904-05:00
parent: "[[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)]]"
children: []
---
###### Kernel-Based Virtual Machine (KVM) Hypervisor
- The KVM kernel module turns Linux kernel into a type 1 bare-metal hypervisor, while the overall system could be categorized to type 2 because the host OS is still fully functional and the other VM's are standard Linux processes from its perspective
- can run both Windows and Linux in virtual machines (VMs), where each VM has private, virtualized hardware: a network card, disk, graphics adapter, etc. Running several applications in VMs on a single system, enables you to save power and reduce costs, while at the same time, giving you the flexibility to build an agile and scalable software-defined data center, that meets your business demands
- is a [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|type-2 hypervisor]] (installed on top of another OS, in this case, some flavor of Linux)
- it runs, however, like a [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|type-1 hypervisor]] and can provide the power and functionality of even the most complex and powerful type-1 hypervisors, depending on the tools that are used with the KVM package itself
- converts Linux into a type-1 (bare-metal) hypervisor
- is a Linux kernel module that allows the kernel to function as a hypervisor. It was merged into the mainline Linux kernel in version 2.6.20, which was released on February 5, 2007
- is an open-source virtualization technology built into Linux. Specifically, KVM lets you turn Linux into a hypervisor that allows a host machine to run multiple, isolated virtual environments called guests or virtual machines (VMs)
- KVM is part of Linux. If you’ve got Linux 2.6.20 or newer, you’ve got KVM. KVM was first announced in 2006 and merged into the mainline Linux kernel version a year later. Because KVM is part of existing Linux code, it immediately benefits from every new Linux feature, fixes, and advancement without additional engineering
