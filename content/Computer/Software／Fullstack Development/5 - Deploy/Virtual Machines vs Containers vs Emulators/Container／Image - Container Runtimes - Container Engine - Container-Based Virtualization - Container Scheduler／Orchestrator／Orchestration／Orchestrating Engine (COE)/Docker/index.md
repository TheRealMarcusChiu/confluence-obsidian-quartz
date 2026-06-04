---
title: "Docker"
created: 2019-03-16T00:13:47.889-05:00
modified: 2026-04-07T03:15:41.968-05:00
parent: "[[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)]]"
children:
  - "[[Docker - CLI Commands]]"
  - "[[Docker - Plugins]]"
  - "[[Docker - Storage Mount Options]]"
  - "[[Docker Network／Driver Types]]"
  - "[[Dockerfile vs Docker Compose File]]"
  - "[[Don't Put Fat Jars in Docker Images]]"
---
###### Docker ([www.docker.com](https://www.docker.com/))
````excerpt
- is a [[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|Container Engine]] based on [[Linux Containers (LXC)]], click <strong>[[Linux Containers vs Docker Containers - System Container vs Application Container|here]]</strong> to find out the difference between them
````
^excerpt

# Docker - Component Terminology

```merge-table
{
  "rows": [
    [
      "- <strong>Docker Server (Daemon)</strong> - manages Docker Containers\n- <strong>Docker Client</strong> - manages Docker Server\n- <strong>Docker Images</strong> - contains application code, libraries, tools, dependencies, and other files needed to make an application run\n- <strong>Docker Registry</strong> (e.g. DockerHub) - a repository of Docker Images\n- <strong>Docker Containers</strong> - are running instances of Docker Images",
      "![[Docker/docker-architecture.png|301]]"
    ]
  ]
}
```
# Docker Installation

see: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
# Docker - Subpages
- [[Linux Containers vs Docker Containers - System Container vs Application Container]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Resources

![](https://www.youtube.com/watch?v=ObhdD49AEYw)
