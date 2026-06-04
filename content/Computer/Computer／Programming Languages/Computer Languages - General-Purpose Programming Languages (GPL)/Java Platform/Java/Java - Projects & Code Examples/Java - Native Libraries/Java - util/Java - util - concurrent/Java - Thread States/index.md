---
title: "Java - Thread States"
created: 2021-04-04T11:37:54.455-05:00
modified: 2021-04-04T12:15:27.452-05:00
parent: "[[Java - util - concurrent]]"
children: []
---
![[Java - Thread States/threadLifeCycle.jpg]]

A thread lies only in one of the shown states at any instant:

```merge-table
{
  "rows": [
    [
      {
        "content": "State",
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
        "content": "<strong>New</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a thread that has not yet started"
    ],
    [
      {
        "content": "<strong>Runnable</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- thread state for a runnable thread\n- a thread in runnable state might be either:\n\t- running\n\t- ready run at any instant of time"
    ],
    [
      {
        "content": "<strong>Blocked</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- thread state for a thread blocked waiting for a monitor lock\n- a thread in the blocked state is waiting for a monitor lock to enter a synchronized block/method or reenter a synchronized block/method after calling <code>Object.wait()</code>"
    ],
    [
      {
        "content": "Waiting",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- thread state for a waiting thread\n- a thread is in the waiting state due to calling one of the following methods:\n\t- <code>Object.wait with no timeout</code>\n\t- <code>Thread.join with no timeout</code>\n\t- <code>LockSupport.park</code>\n- a thread in the waiting state is waiting for another thread to perform a particular action. For example, a thread that has called <code>Object.wait()</code> on an object is waiting for another thread to call <code>Object.notify()</code> or <code>Object.notifyAll()</code> on that object. A thread that has called <code>Thread.join()</code> is waiting for a specified thread to terminate."
    ],
    [
      {
        "content": "<strong>Timed Waiting</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- thread state for a waiting thread with a specified waiting time\n- a thread is in the timed waiting state due to calling one of the following methods with a specified positive waiting time:\n\t- <code>Thread.sleep</code>\n\t- <code>Object.wait with timeout</code>\n\t- <code>Thread.join with timeout</code>\n\t- <code>LockSupport.parkNanos</code>\n\t- <code>LockSupport.parkUntil</code>"
    ],
    [
      {
        "content": "<strong>Terminated</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a thread terminates because of either of the following reasons:\n\t- Because it exits normally. This happens when the code of thread has entirely executed by the program.\n\t- Because there occurred some unusual erroneous event, like segmentation fault or an unhandled exception"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
