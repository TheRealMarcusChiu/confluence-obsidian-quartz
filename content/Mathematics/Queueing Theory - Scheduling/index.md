---
title: "Queueing Theory - Scheduling"
created: 2021-09-13T05:29:21.689-05:00
modified: 2023-04-10T21:50:59.379-05:00
parent: "[[Mathematics]]"
children: []
---
- <strong>Queueing Theory</strong> is the mathematical study of waiting for lines or queues.
- <strong>Scheduling</strong> is the method by which work is assigned to resources that complete the work
- <strong>work </strong>- also tasks, jobs, or [[Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)|processes]]

# Task Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Preemptive Task",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In a preemptive scheduling policy, a low-priority process has to be suspended execution if high priority process is waiting in the same queue for its execution"
    ],
    [
      {
        "content": "Non-Preemptive Task\n\nCooperative Task",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In a non-preemptive scheduling policy, processes are executed on a first-come-first-serve basis, which means the next process is executed only when the currently running process finishes its execution"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Processor Scheduler Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Preemptive Multi-Tasking",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "a style of computer [[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous|multi-tasking]] in which the operating system initiates a context switch (preemption) from a running [[Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)|process]] to another process"
    ],
    [
      {
        "content": "<strong>Non-Preemptive Multi-Tasking</strong>\n\nCooperative Multi-Tasking",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "a style of computer [[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous|multi-tasking]] in which the operating system <font style=\"color: rgb(255,0,0);\">NEVER</font> initiates a context switch from a running [[Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)|process]] to another process. Instead, processes voluntarily yield control periodically or when idle or logically blocked in order to enable multiple applications to be run concurrently"
    ],
    [
      {
        "content": "<strong>Cyclic Executive</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "a form of cooperative multi-tasking, in which there is only one task. The sole task is typically realized as an infinite loop in main()"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Processor Scheduling Algorithm (Choosing Which Task of Many to Execute)

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>First Come First Serve </strong><strong>(FCFS)</strong>\n\n<strong>First In First Out (FIFO)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In this scheduling algorithm, the first process entered in the queue is processed first."
    ],
    [
      {
        "content": "<strong>Shortest Job First </strong><strong>(SJF)</strong>\n\nEarliest Deadline First (EDF)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In <strong>SJF</strong> the process which requires the shortest CPU time to execute is processed first\n\nIn <strong>EDF</strong> the process with the earliest deadline in the queue is processed first"
    ],
    [
      {
        "content": "<strong>Shortest Remaining Time First </strong><strong>(SRTF)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "This scheduling Algorithm is the preemptive version of the SJF scheduling algorithm. In this, the process which is left with the least processing time is executed first."
    ],
    [
      {
        "content": "<strong>Longest Job First </strong><strong>(LJF)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In this type of scheduling algorithm, the process with the maximum time required to execute is scheduled first. This type of scheduling is not widely used because it is not a very effective way of scheduling, as the average turn-around time and the average waiting time are maximum in this case."
    ],
    [
      {
        "content": "<strong>Longest Remaining Time First </strong><strong>(LRTF)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "As SRTF is to SJF, LRTF is the preemptive version of the LJF scheduling algorithm."
    ],
    [
      {
        "content": "<strong>Priority Scheduling</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In this scheduling algorithm, priority is assigned to all the processes, and the process with the highest priority is executed first. Priority assignment of processes is done on the basis of internal factors such as CPU and memory requirements or external factors such as user choice. The priority scheduling algorithm supports preemptive and non - preemptive scheduling policies."
    ],
    [
      {
        "content": "<strong>Round Robin </strong><strong>(RR)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "In this algorithm, the process is allocated the CPU for the specific time period called <strong>time slice</strong>, which is normally 10 to 100 milliseconds. If the process completes its execution within this time slice, then it is removed from the queue otherwise it has to wait for another time slice."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
