---
title: "Java - sleep() vs wait()"
created: 2021-04-04T12:29:19.191-05:00
modified: 2021-04-04T12:41:52.162-05:00
parent: "[[Java - util - concurrent]]"
children: []
---
- <strong><code>sleep()</code></strong> - is used to pause the process for a specified amount of time
- <code><strong>wait()</strong></code> - moves the thread into [[Java - Thread States|waiting state]] and it won’t come back automatically until we call the <code>notify()</code> or <code>notifyAll()</code>

### Behavior with Locks
- <strong><code>sleep()</code></strong> - doesn’t releases the lock or monitor while waiting
- <code><strong>wait()</strong></code> - releases the lock or monitor
```
synchronized(LOCK) {
	Thread.sleep(1000); // LOCK is held
}
synchronized(LOCK) {
	LOCK.wait(); // LOCK is not held
}
```
### Summary

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "sleep()",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "wait()",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "method called on",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Call on a Thread; always currently executing thread",
      "Call on an object; current thread must synchronize on the lock object"
    ],
    [
      {
        "content": "synchronized",
        "header": true,
        "bg": "#F4F5F7"
      },
      "when synchronized multiple threads wait for sleep over of sleeping thread",
      "when synchronized multiple threads access same Object one by one"
    ],
    [
      {
        "content": "lock duration",
        "header": true,
        "bg": "#F4F5F7"
      },
      "keep lock for at least t times if timeout specified or somebody interrupt",
      "release the lock for other objects to have chance to execute"
    ],
    [
      {
        "content": "wake up condition",
        "header": true,
        "bg": "#F4F5F7"
      },
      "until at least time expire or call interrupt()",
      "until call notify(), notifyAll() from object"
    ],
    [
      {
        "content": "usage",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for multi-thread-synchronization",
      "for time-synchronization"
    ]
  ]
}
```
