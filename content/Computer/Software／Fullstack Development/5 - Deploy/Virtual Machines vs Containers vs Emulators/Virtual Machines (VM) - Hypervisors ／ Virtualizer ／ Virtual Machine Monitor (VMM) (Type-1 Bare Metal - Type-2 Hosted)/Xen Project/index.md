---
title: "Xen Project"
created: 2019-08-27T21:20:58.810-05:00
modified: 2023-06-10T10:36:29.765-05:00
parent: "[[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)]]"
children: []
---
<strong>Xen Project</strong>
- is an open-source type-1 [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|hypervisor]]
- provides services that allow multiple computer operating systems to execute on the same computer hardware concurrently
- it was developed by the University of Cambridge and is now being developed by the Linux Foundation with support from Intel

# Xen Supports 2 Types of Virtualization
- <strong>HVM (Hardware Virtual Machine)</strong> guests are fully virtualized. It means that the VMs running on top of their hypervisors are not aware that they are sharing processing time with other clients on the same hardware. The host should have the capability to emulate underlying hardware for each of its guest machines. This virtualization type provides the ability to run an operating system directly on top of a virtual machine without any modification — as if it were run on bare-metal hardware. The advantage of this is that HVMs can use hardware extensions that provide very fast access to underlying hardware on the host system.
- <strong>PV (Paravirtualization)</strong> is a lighter form of virtualization. This technique is fast and provides near-native speed in comparison to full virtualization. With Paravirtualization, the guest operating system requires some modification before everything can work. These modifications allow the hypervisor to export a modified version of the underlying hardware to the VMs, allowing them near-native performance. All PV machines running on a hypervisor are basically modified operating systems like Solaris or various Linux distributions.
