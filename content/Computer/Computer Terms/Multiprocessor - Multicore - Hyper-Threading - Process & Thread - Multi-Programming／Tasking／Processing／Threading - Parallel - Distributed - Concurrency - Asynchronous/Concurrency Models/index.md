---
title: "Concurrency Models"
created: 2019-12-17T16:11:11.131-06:00
modified: 2026-05-17T13:31:03.147-05:00
parent: "[[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous]]"
children: []
---
### Concurrency Models
- parallel workers
- assembly line (aka reactive systems or event driven systems)
- functional parallelism

# Parallel Workers Concurrency Model
In the parallel worker concurrency model a delegator distributes the incoming jobs to different workers. Each worker completes the full job. The workers work in parallel, running in different threads, and possibly on different CPUs

parallel workers can be either:
- <strong>stateless workers</strong> - jobs uses no external data or shared data is immutable
- <strong>stateful workers</strong> - jobs uses a shared common data that is mutable
```merge-table
{
  "rows": [
    [
      {
        "content": "Stateless Workers",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Stateful Workers",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[Concurrency Models/parallel-workers-stateless.png|250]]",
      "![[Concurrency Models/parallel-workers-shared-state.png|450]]"
    ]
  ]
}
```
### Parallel Workers Advantages
- easy to understand and program
- easy to increase the parallelization just by adding more workers

### Parallel Workers Disadvantages
- workers/threads need to access the shared data in a way that makes sure that changes by one thread are visible to the others (pushed to main memory and not just stuck in the CPU cache of the CPU executing the thread)
- workers/threads need to avoid[deadlock](http://tutorials.jenkov.com/java-concurrency/deadlock.html), livelock, [race conditions](http://tutorials.jenkov.com/java-concurrency/race-conditions-and-critical-sections.html) and many other shared state concurrency problems
- job ordering is non-deterministic

# Assembly Line Concurrency Model, Reactive Systems, or Event Driven Systems

In Assembly Line Concurrency Model the workers are organized like workers at an assembly line in a factory. Each worker only performs a part of the full job. When that part is finished the worker forwards the job to the next worker.

Each worker is running in its own thread, and shares no state with other workers. This is also sometimes referred to as a <em>shared nothing</em> concurrency model.

![[Concurrency Models/assembly-line-concurrency-model.png|400]]

![[Concurrency Models/assembly-line-concurency-model.png|400]]

Systems using the assembly line concurrency model are usually designed to use non-blocking IO. Non-blocking IO means that when a worker starts an IO operation (e.g. reading a file or data from a network connection) the worker does not wait for the IO call to finish. IO operations are slow, so waiting for IO operations to complete is a waste of CPU time. The CPU could be doing something else in the meanwhile. When the IO operation finishes, the result of the IO operation ( e.g. data read or status of data written) is passed on to another worker.

With non-blocking IO, the IO operations determine the boundary between workers. A worker does as much as it can until it has to start an IO operation. Then it gives up control over the job. When the IO operation finishes, the next worker in the assembly line continues working on the job, until that too has to start an IO operation etc.

![[Concurrency Models/assembly-line-concurrency-model-with-non-blocking-io.png|400]]
### Assembly Line Advantages
- No Shared State
- Stateful Workers
- Better Hardware Conformity
- Job Ordering is Possible

### Assembly Line Disadvantages
- execution of a job is often spread out over multiple workers, and thus over multiple classes in your project. Thus it becomes harder to see exactly what code is being executed for a given job.
- It may also be harder to write the code. Worker code is sometimes written as callback handlers. Having code with many nested callback handlers may result in what some developer call <em>callback hell</em>. Callback hell simply means that it gets hard to track what the code is really doing across all the callbacks, as well as making sure that each callback has access to the data it needs.

# Functional Parallelism Concurrency Model

The basic idea of functional parallelism is that you implement your program using function calls. Functions can be seen as "agents" or "actors" that send messages to each other, just like in the assembly line concurrency model (AKA reactive or event driven systems). When one function calls another, that is similar to sending a message.

All parameters passed to the function are copied, so no entity outside the receiving function can manipulate the data. This copying is essential to avoiding race conditions on the shared data. This makes the function execution similar to an atomic operation. Each function call can be executed independently of any other function call.

When each function call can be executed independently, each function call can be executed on separate CPUs. That means, that an algorithm implemented functionally can be executed in parallel, on multiple CPUs.
