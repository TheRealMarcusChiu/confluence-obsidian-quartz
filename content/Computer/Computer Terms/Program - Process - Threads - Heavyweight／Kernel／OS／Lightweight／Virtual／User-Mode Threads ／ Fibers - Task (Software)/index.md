---
title: "Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)"
created: 2019-09-18T09:57:25.459-05:00
modified: 2022-10-07T23:26:07.622-05:00
parent: "[[Computer Terms]]"
children: []
---
````excerpt
[[Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Task Type",
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
        "content": "program",
        "bg": "#F4F5F7"
      },
      "- is a sequence of lines-of-code and/or [[Opcode - Assembly Language - Machine Code／Language／Instruction|machine-code]]"
    ],
    [
      {
        "content": "processes",
        "bg": "#F4F5F7"
      },
      "- is a program loaded into memory (i.e. in execution)\n- processes are independent sequences of execution\n- a process is an execution of a program\n- processes run on separate memory spaces\n\nusually starts with a single thread i.e a primary thread but later down the line of execution it can create multiple threads"
    ],
    [
      {
        "content": "threads",
        "bg": "#F4F5F7"
      },
      "- threads are independent sequences of execution\n- a thread is an execution of a program driven by the environment of a process\n- threads run in the same memory space of its parent process"
    ],
    [
      {
        "content": "virtual thread\nfiber",
        "bg": "#F4F5F7"
      },
      "- a thread is managed and scheduled by the operating system, while a virtual thread is managed and scheduled by a virtual machine"
    ],
    [
      {
        "content": "task",
        "bg": "#F4F5F7"
      },
      "- either a process or thread or virtual-thread"
    ]
  ],
  "tableStyle": "width: 99.9991%;"
}
```
````
^excerpt

see how they relate to hardware concepts: [[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous|Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming/Tasking/Processing/Threading - Parallel - Distributed - Concurrency - Asynchronous]]
# Program vs Process
![[Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)/program-vs-process.png|500]]
# Process vs Thread vs Virtual Thread / Fiber

```merge-table
{
  "rows": [
    [
      {
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "<strong>Process</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<strong>Thread</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Heavyweight/Kernel/OS Thread",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Lightweight/Virtual/User-Mode Thread - Fiber",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Handled By",
        "bg": "#F4F5F7"
      },
      "[[Operating Systems (OS)|Operating System]]",
      "Operating System",
      "Programming Language's Virtual Machine"
    ],
    [
      {
        "content": "Basic",
        "bg": "#F4F5F7"
      },
      "program in execution",
      "lightweight process or part of it",
      ""
    ],
    [
      {
        "content": "Memory sharing",
        "bg": "#F4F5F7"
      },
      "completely isolated and do not share memory",
      "shares memory with each other",
      "shares memory with each other"
    ],
    [
      {
        "content": "Resource consumption",
        "bg": "#F4F5F7"
      },
      "more",
      "less",
      "lesser"
    ],
    [
      {
        "content": "Time required for creation",
        "bg": "#F4F5F7"
      },
      "more",
      "less",
      "lesser"
    ],
    [
      {
        "content": "Context switching time",
        "bg": "#F4F5F7"
      },
      "consumes more time",
      "consumes less time",
      "consumes lesser time"
    ],
    [
      {
        "content": "Uncertain termination",
        "bg": "#F4F5F7"
      },
      "results in loss of process",
      "a thread can be reclaimed",
      "?"
    ],
    [
      {
        "content": "Time required for termination",
        "bg": "#F4F5F7"
      },
      "more",
      "less",
      "lesser"
    ]
  ],
  "tableStyle": "width: 99.646%;"
}
```
