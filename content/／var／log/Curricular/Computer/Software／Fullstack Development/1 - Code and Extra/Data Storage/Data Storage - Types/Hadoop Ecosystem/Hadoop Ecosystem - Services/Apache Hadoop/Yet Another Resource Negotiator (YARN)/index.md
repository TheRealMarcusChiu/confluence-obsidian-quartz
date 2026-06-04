---
title: "Yet Another Resource Negotiator (YARN)"
created: 2020-05-22T13:35:42.097-05:00
modified: 2020-05-24T14:12:20.905-05:00
parent: "[[Apache Hadoop]]"
children: []
---
<strong>Yet Another Resource Negotiator (YARN)</strong>
- was introduced in [[Apache Hadoop]] 2.0 to remove the bottleneck on Job Tracker which was present in Hadoop 1.0
- separates the Resource Management and Data Processing of a MapReduce 1 (MR1) into YARN/MR2
- idea is to have a global ResourceManager (RM) and per-application ApplicationMaster (AM). An application is either a single job or a DAG of jobs

### YARN - Before and After YARN Introduction

![[Yet Another Resource Negotiator (YARN)/yarn-before-and-after.png|500]]
### YARN - MapReduce2 Job Diagram

![[Yet Another Resource Negotiator (YARN)/YARN-MapReduce2-Architecture.png|450]]
[[YARN-MapReduce2-Architecture.drawio]]
1. client submits a MapReduce task to Application Manager
2. Application Manager chooses a node to launch a Container with an Application Master for the submitted MapReduce task
3. Application Master requests compute resources from Scheduler
4. Scheduler launches the Containers needed for completing the MapReduce task
5. Application Master coordinates the Containers until task completion
```merge-table
{
  "rows": [
    [
      {
        "content": "Components",
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
      "###### ResourceManager",
      "- 1 ResourceManager in Hadoop Cluster\n- coordinates compute resources in the Hadoop Cluster\n- 2 components:\n\t- <strong>ApplicationManager</strong> - accepts job-submissions, and negotiating a container for executing the application specific Application Master\n\t- <strong>Scheduler</strong> - allocates cluster resources for compute. performs its scheduling function based on the resource requirements of the applications/tasks; it does so based on the abstract notion of a resource Container which incorporates elements such as memory, cpu, disk, network etc"
    ],
    [
      "###### NodeManager",
      "- 1 NodeManager per node\n- launches Containers within the node\n- monitors the Containers resource usage (cpu, memory, disk, network)\n- reports resource usage back to the ResourceManager/Scheduler"
    ],
    [
      "###### Container",
      "- exists in NodeManager can contain multiple\n- either:\n\t- contains an ApplicationMaster\n\t- executes a specific MapReduce subtask"
    ],
    [
      "###### ApplicationMaster",
      "- 1 per application / MapReduce task\n- exists in a Container\n- in charge of a single MapReduce task\n- negotiates appropriate resource Containers from the ResourceManager/Scheduler\n- works with the NodeManager(s) to execute and monitor the tasks"
    ]
  ]
}
```
