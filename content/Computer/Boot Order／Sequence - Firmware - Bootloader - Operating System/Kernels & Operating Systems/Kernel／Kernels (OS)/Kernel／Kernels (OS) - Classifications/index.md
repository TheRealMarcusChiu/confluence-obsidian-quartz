---
title: "Kernel／Kernels (OS) - Classifications"
created: 2022-11-27T14:36:07.816-06:00
modified: 2023-06-14T09:19:07.601-05:00
parent: "[[Kernel／Kernels (OS)]]"
children: []
---
# Kernel/Kernels (OS) - Classifications

```merge-table
{
  "rows": [
    [
      {
        "content": "Kernel Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Monolithic Kernel",
        "bg": "#F4F5F7"
      },
      "This kernel type has all the required functionality inside the kernel, schedulers, device drivers, memory management, etc all in a memory space owned by the kernel. Monolithic kernels typically have the highest data throughput of all kernels and are best used in large servers or job-dedicated servers"
    ],
    [
      {
        "content": "Micro-Kernel",
        "bg": "#F4F5F7"
      },
      "This kernel type uses the minimum set-up required for scheduling, memory management, and inter-process communication. This vastly reduces the amount of memory required for kernel use. The minimum size of the kernel means that the amount of extra communication required by device drivers reduces the maximum data flow through the kernel but also decreases kernel response time to interrupts. Microkernels are typically found in real-time systems"
    ],
    [
      {
        "content": "Hybrid Kernel",
        "bg": "#F4F5F7"
      },
      "This is a mix of the 2 above. The kernel is larger than micro but smaller than monolithic. What you normally get is a stripped-down monolithic kernel that has the majority of device drivers removed but still all of the system services within the kernel space. The device drivers will be attached to the kernel as required when starting up or running. These kernels are typically found on desktops, your Windows, Mac, and Linux OS flavors"
    ],
    [
      {
        "content": "Nano-Kernel",
        "bg": "#F4F5F7"
      },
      "This kernel type only offers hardware abstraction, there are no services and the kernel space is at a minimum. A nano-kernel forms the basis of a hypervisor upon which you may emulate multiple systems via virtualization. Nano-kernels are also very good for embedded projects"
    ],
    [
      {
        "content": "Exo-Kernel",
        "bg": "#F4F5F7"
      },
      "This kernel is the smallest kernel that I know of. It offers process protection and resource handling and nothing else. The programmer using this kernel is responsible for correctly accessing the device they wish to use. I do not know of an instance of the kernel type where it is used outside of academia but I’m happy to be corrected"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Monolithic vs Micro
![[Kernel／Kernels (OS) - Classifications/kernel-monolinth-vs-micro.png|600]]
