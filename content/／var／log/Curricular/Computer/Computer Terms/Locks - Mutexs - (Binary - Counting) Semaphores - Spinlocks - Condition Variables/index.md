---
title: "Locks - Mutexs - (Binary - Counting) Semaphores - Spinlocks - Condition Variables"
created: 2019-05-23T13:19:12.557-05:00
modified: 2026-05-21T14:08:25.031-05:00
parent: "[[Computer Terms]]"
children: []
---
# Terminology

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
      }
    ],
    [
      {
        "content": "Mutex (Mutual Exclusion)",
        "bg": "#F4F5F7"
      },
      "- a mutex is a mutual exclusion object\n- a mutex is a lock shared by multiple threads and/or processes\n- it is used for sharing resource mutually exclusively\n- use a mutex when you (thread) want to execute code that should not be executed by any other thread at the same time. Mutex 'down' happens in one thread and mutex 'up' <em>must</em> happen in the same thread later on. e.g.: If you are deleting a node from a global linked list, you do not want another thread to muck around with pointers while you are deleting the node. When you acquire a mutex and are busy deleting a node, if another thread tries to acquire the same mutex, it will be put to sleep till you release the mutex"
    ],
    [
      {
        "content": "Semaphore",
        "bg": "#F4F5F7"
      },
      "- use a semaphore when you (thread/process) want to sleep till some other thread tells you to wake up. Semaphore 'down' happens in one thread (producer) and semaphore 'up' (for same semaphore) happens in another thread (consumer) e.g.: In producer-consumer problem, producer wants to sleep till at least one buffer slot is empty - only the consumer thread can tell when a buffer slot is empty\n- while mutex is used for resource sharing, semaphore is used for signaling\n- does the same as a mutex but allows x number of threads to enter, this can be used to limit the number of tasks running at the same time"
    ],
    [
      {
        "content": "Spinlock",
        "bg": "#F4F5F7"
      },
      "- use a spinlock when you really want to use a mutex but your thread is not allowed to sleep"
    ],
    [
      {
        "content": "Condition Variable",
        "bg": "#F4F5F7"
      },
      "for many applications, mutual exclusion is not enough. Threads attempting an operation may need to wait until some condition P holds true. A [busy waiting](https://en.wikipedia.org/wiki/Busy_waiting) loop\n- \n    ```\n    while not( P ) do skip\n    ```\n\nwill not work, as mutual exclusion will prevent any other thread from entering the monitor to make the condition true"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# (Mutex) vs (Mutex Semaphore) vs (Binary Semaphore)

In a Mutex, only the thread which have locked it can unlock it. If any other thread comes to lock it, it will wait
- In a Binary Semaphore, it is OK for B to take the semaphore and A to give it. Again, a binary semaphore is NOT protecting a resource from access. The act of Giving and Taking a semaphore are fundamentally decoupled
- In a Mutex Semaphore is same as Mutex. It is a binary semaphore with the restriction that
```merge-table
{
  "rows": [
    [
      {
        "content": "Mutex",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mutex Semaphore",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Counting Semaphore",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Lock",
      "Lock",
      "",
      "(P) Claim/Decrease"
    ],
    [
      "Unlock",
      "Unlock",
      "",
      "(V) Release/Increase"
    ]
  ]
}
```

NOTE: in case you've ever wondered at the bizarre letters used for claiming and releasing semaphores, it's because the inventor was Dutch. Probeer te verlagen:
- probeer - means to try and decrease
- verhogen - means to increase

# Articlees
- What is a Semaphore - [https://stackoverflow.com/questions/34519/what-is-a-semaphore/40238#40238](https://stackoverflow.com/questions/34519/what-is-a-semaphore/40238#40238)
- Mutex vs Semaphores - [https://barrgroup.com/Embedded-Systems/How-To/RTOS-Mutex-Semaphore](https://barrgroup.com/Embedded-Systems/How-To/RTOS-Mutex-Semaphore)
