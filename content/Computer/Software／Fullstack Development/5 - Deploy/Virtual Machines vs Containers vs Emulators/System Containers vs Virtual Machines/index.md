---
title: "System Containers vs Virtual Machines"
created: 2022-11-06T05:32:09.221-06:00
modified: 2022-11-06T05:35:44.776-06:00
parent: "[[Virtual Machines vs Containers vs Emulators]]"
children: []
---
- <strong>Virtual machines</strong> emulate a physical machine, using the hardware of the host system from a full and completely isolated operating system (and guest kernel)
- <strong>System containers</strong> use the host system's OS kernel instead of creating its own independent guest kernel. If you run several system containers, they all share the same kernel, which makes them faster and more lightweight than virtual machines.

You should use a system container to leverage the smaller size and increase performance if all functionality you require is compatible with the kernel of your host operating system. If you need functionality that is not supported by the OS kernel of your host system or you want to run a completely different OS, use a virtual machine.
