---
title: "Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous"
created: 2019-08-17T23:20:12.765-05:00
modified: 2022-05-12T21:40:26.479-05:00
parent: "[[Computer Terms]]"
children:
  - "[[Concurrency Models]]"
  - "[[Dish Washing Metaphor - Understanding Async, Non-Blocking, Concurrent, Parallel and More]]"
---
# <strong>Hardware Concepts</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Hardware",
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
        "content": "uniprocessor",
        "bg": "#F4F5F7"
      },
      "refers to a single CPU chip with 1 execution-unit/core"
    ],
    [
      {
        "content": "multicore",
        "bg": "#F4F5F7"
      },
      "refers to a single CPU chip with multiple execution-units/cores"
    ],
    [
      {
        "content": "hyper-threading",
        "bg": "#F4F5F7"
      },
      "a single physical execution-unit/core with hyper-threading appears as two <em>logical/virtual</em> <em>units</em> to an operating system"
    ],
    [
      {
        "content": "multiprocessor",
        "bg": "#F4F5F7"
      },
      "refers to a system that has ≥2 CPU chips"
    ]
  ]
}
```
# <strong>Software Concepts</strong>

![[Program - Process - Threads - Heavyweight／Kernel／OS／Lightweight／Virtual／User-Mode Threads ／ Fibers - Task (Software)#^excerpt]]
### Hardware & Software: Putting It Together
# <strong>Hardware Diagram</strong>
![[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous/uniprocessor-multicore-hyper-threading-multiprocessor.png|450]]
# <strong>Hardware & Software Diagram</strong>
![[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous/processes-cores-threads.png|350]]

Whenever there are more <em>software</em> threads of execution trying to execute at any given time than there are available <em>hardware</em> (simultaneous) threads of execution, then these software threads will be "interleaved" among the available cores. In the case of a "uniprocessor" (one CPU core with no hyper-threading), if you have more than one software thread, they will <em>always</em> be interleaved. If you have a 4-core CPU with hyper-threading, that's 8 "hardware threads", meaning the CPU can execute 8 simultaneous threads of execution at the same instant, so if you had 8 software threads trying to run, they could all run at once; but if you had 9 software threads, one of the hardware threads would have to interleave a pair of threads (the exact pair of threads chosen would depend on the operating system's scheduler implementation).
# <strong>General Concepts</strong>
- <strong>synchronous</strong> - tasks are executed one after another, each task waits for any previous task to complete and then gets executed
- <strong>asynchronous</strong> - when one task gets executed, you could switch to a different task without waiting for the previous to get completed
	- <strong>asynchronous </strong><strong>with outside entity</strong> - the dispatching of task(s) to an outside entity, leaving the originating program free to execute other task(s) until it receives a signal from that entity (e.g. Ajax call). That signal can be either: task-finished or error
	- <strong>asynchronous without outside entity </strong>- similar to multi-tasking
- <strong>concurrency</strong> - multiple tasks (e.g. processes or threads) in execution, either: simultaneously or not
	- <strong><strong>parallel</strong> </strong>and<strong> distributed </strong>- multiple tasks in execution simultaneously. It achieves this by distributing tasks to multiple resources (e.g. processors, execution-units)
		- <strong>parallel</strong> - communicate over a shared memory
		- <strong>distributed</strong> - communicate over a network
	- <strong>multi-tasking</strong> - multiple tasks in execution but NOT simultaneously. There is only 1 resource that executes these tasks, therefore at any given moment only 1 task is actually executing code. However, multi-tasking emulates "parallelism" via context switching (i.e. execution time of tasks are interleaved with each other on a single resource)

# <strong>More Terminology</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Term",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Diagram",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "multi-programming",
        "bg": "#F4F5F7"
      },
      "the execution of multiple programs within a computer",
      ""
    ],
    [
      {
        "content": "multi-tasking",
        "bg": "#F4F5F7"
      },
      "a type of concurrency where multiple tasks (e.g. threads or processes) are executed on a single resource (e.g. uniprocessor, core)\n\nfor example:\n- multi-threaded or same-threaded application in a single core environment",
      ""
    ],
    [
      {
        "content": "single-threading",
        "bg": "#F4F5F7"
      },
      "the execution of a single (thread/sequence-of-instructions)",
      "![[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous/single-threaded-system.png|150]]"
    ],
    [
      {
        "content": "multi-threading",
        "bg": "#F4F5F7"
      },
      "the execution of multiple (threads/sequence-of-instructions) concurrently\n\nthreads share common data, which can cause problems (e.g. [[Deadlocks - Livelocks|deadlocks, livelocks]], race-conditions, etc)\n\nmulti-threading in a environment of:\n- multiple cores - similar parallelism\n- single cores - similar to multi-tasking",
      "![[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous/multi-threaded-system.png|150]]"
    ],
    [
      {
        "content": "same-threading",
        "bg": "#F4F5F7"
      },
      "a type of multi-threaded system where threads do not share state with each other\n\nhowever, threads can pass messages between each other via [[Ports - Sockets - An Application Demultiplexer|sockets]]\n\nsince threads don't share state, they don't inherit multi-threaded problems (e.g. [[Deadlocks - Livelocks|deadlocks, livelocks]], race-conditions, etc)",
      "![[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous/same-threaded-system.png|150]]"
    ],
    [
      {
        "content": "multi-processing",
        "bg": "#F4F5F7"
      },
      "the availability of multiple processors/cores which can execute multiple (processes or threads) in parallel",
      ""
    ]
  ],
  "tableStyle": "width: 99.9174%;"
}
```
# <strong>Synchronous/Asynchronous vs Single/Multi Resource</strong>

<strong>Resource</strong> = <strong>Processor</strong> or <strong>Execution-Unit</strong> or <strong>Virtual-Unit</strong>

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Synchronous",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Asynchronous",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Single-Resource",
        "bg": "#F4F5F7"
      },
      "```\nr1: -|<==A==>||<===B===>||<==C==>|---\n```",
      "```\nr1: -|<=A=|<=B=|<=C=|=A=|=B=|=C=>|=A=>|=B=>|-\n      ʌ    ʌ    ʌ               ʌ    ʌ    ʌ\n      |    |    |               |    |    |\n      |    | C-Start -------- C-End  |    |\n      |    |                         |    | \n      | B-Start ---------------------|- B-End\n      |                              |\n     A-Start ---------------------- A-End\n```"
    ],
    [
      {
        "content": "Multi-Resource",
        "bg": "#F4F5F7"
      },
      "```\nr1: -|<==A==>|-----------------------\n              \\  \nr2: -----------|<===B===>|-----------\n                          \\   \nr3: -----------------------|<==C==>|-\n```",
      "```\nr1: -|<==A==>|------------------\n\nr2: -----|<===B===>|------------\n\nr3: -------|<==C====>|----------\n```"
    ]
  ],
  "tableStyle": "width: 99.9174%;"
}
```
# <strong>Subpages</strong>
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
