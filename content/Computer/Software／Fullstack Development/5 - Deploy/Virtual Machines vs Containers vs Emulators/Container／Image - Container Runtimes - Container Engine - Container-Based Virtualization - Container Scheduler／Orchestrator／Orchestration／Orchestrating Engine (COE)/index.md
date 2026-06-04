---
title: "Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)"
created: 2019-03-16T00:13:24.334-05:00
modified: 2026-04-07T02:03:06.442-05:00
parent: "[[Virtual Machines vs Containers vs Emulators]]"
children:
  - "[[CRI-O]]"
  - "[[Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)]]"
  - "[[Containerd]]"
  - "[[Docker]]"
  - "[[LXD]]"
  - "[[Linux Containers (LXC)]]"
  - "[[Linux Containers vs Docker Containers - System Container vs Application Container]]"
  - "[[Podman]]"
  - "[[Rkt]]"
---
# Images vs Containers

to use a [[Java]] metaphor: if an image is a class, then a container is an instance of that class - a runtime object
- <strong>image</strong> includes everything needed to run an application (e.g. the code or binary, runtimes, dependencies, and any other filesystem objects required)
- <strong>container</strong> is nothing but a running image, with some added encapsulation features applied to it in order to keep it isolated from the host and from other containers. One of the most important aspects of container isolation is that each container interacts with its own, private [[Disk (Format - Filesystems／File-Systems (FS))|filesystem]]; this filesystem is provided by a Docker image. see [[Virtual Machines vs Containers vs Emulators]]. Is an isolated [[UNIX - Process|process]]

# Container Runtimes vs Container Engines

![](https://www.youtube.com/watch?v=EnJ7qX9fkcU)

```merge-table
{
  "rows": [
    [
      {
        "content": "Thing",
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
        "content": "Container Runtime",
        "bg": "#F4F5F7"
      },
      "are used by Container Engines to do the low-level container and image management stuffs",
      "- [[Containerd|containerd]]"
    ],
    [
      {
        "content": "Container Engine",
        "bg": "#F4F5F7"
      },
      "used by end-users to manage images and containers",
      "- [[Linux Containers (LXC)]]\n- [[LXD]]\n- [[Docker]]\n- Google Container Engine (GKE)\n- [[Rkt]]\n- [[CRI-O]]\n- [[Podman]]"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```
# [[Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|Container Scheduler/Orchestrator/Orchestration/Orchestrating Engine (COE)]]
Container schedulers manage containers across a number of machines, allocating workloads appropriately.
