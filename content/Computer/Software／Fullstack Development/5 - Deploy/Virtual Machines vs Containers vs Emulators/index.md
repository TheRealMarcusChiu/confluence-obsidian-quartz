---
title: "Virtual Machines vs Containers vs Emulators"
created: 2019-10-15T23:55:48.515-05:00
modified: 2023-01-08T23:11:16.794-06:00
parent: "[[5 - Deploy]]"
children:
  - "[[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)]]"
  - "[[Emulators／Mediator]]"
  - "[[System Containers vs Virtual Machines]]"
  - "[[TurnKey Linux Virtual Appliance Library]]"
  - "[[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)]]"
---
### Virtual Machines vs Containers
- [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|Virtual Machines]]
	- runs a full-blown guest OS with <em>virtual</em> access to host resources through a hypervisor
	- bins/libs (included with guest OS and installed additionally for application(s)) are independent between VMs
	- in general, VMs incur a lot of overhead beyond what is being consumed by your application logic
- [[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|Containers]]
	- runs <em>natively</em> on OS and shares the kernel of the host machine with other containers
	- bins/libs are shared between containers through the Container Engine
	- it runs a discrete process, taking no more memory than any other executable, making it lightweight
- [[Emulators／Mediator|Emulators/Mediator]]
	- TODO

![[Virtual Machines vs Containers vs Emulators/containers-vs-virtual-machines.png]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

![](https://www.youtube.com/watch?v=L1ie8negCjc)

![](https://www.youtube.com/watch?v=wuhxSLapDe0)
