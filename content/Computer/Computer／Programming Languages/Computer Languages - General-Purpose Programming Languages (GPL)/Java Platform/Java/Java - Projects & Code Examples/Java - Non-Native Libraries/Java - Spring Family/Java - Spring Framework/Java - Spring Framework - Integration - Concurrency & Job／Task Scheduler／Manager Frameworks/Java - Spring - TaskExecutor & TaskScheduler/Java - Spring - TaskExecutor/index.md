---
title: "Java - Spring - TaskExecutor"
created: 2021-09-26T23:20:50.067-05:00
modified: 2021-09-26T23:46:00.560-05:00
parent: "[[Java - Spring - TaskExecutor & TaskScheduler]]"
children: []
---
###### TaskExecutor
- same definition as Java's <code><font style="color: rgb(122,134,154);">[[Java - ExecutorService & Executor|Executor]]</font></code> class
- similar to <code>[[Java - Spring - TaskScheduler|TaskScheduler]]</code> but executes it immediately

# TaskExecutor - Class Definition
```
public interface TaskExecutor extends Executor {
    void execute(Runnable task);
}
```
# TaskExecutor - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>SimpleAsyncTaskExecutor</code>",
        "bg": "#F4F5F7"
      },
      "- This implementation does not reuse any threads, rather it starts up a new thread for each invocation. However, it does support a concurrency limit which will block any invocations that are over the limit until a slot has been freed up. If you are looking for true pooling, see the discussions of <code><font style=\"color: rgb(122,134,154);\">SimpleThreadPoolTaskExecutor</font></code> and <code><font style=\"color: rgb(122,134,154);\">ThreadPoolTaskExecutor</font></code> below"
    ],
    [
      {
        "content": "<code>SyncTaskExecutor</code>",
        "bg": "#F4F5F7"
      },
      "- This implementation doesn’t execute invocations asynchronously. Instead, each invocation takes place in the calling thread. It is primarily used in situations where multi-threading isn’t necessary such as simple test cases"
    ],
    [
      {
        "content": "<code>ConcurrentTaskExecutor</code>",
        "bg": "#F4F5F7"
      },
      "- This implementation is an [[Adapter Pattern|adapter]] for a <code>[[Java - ExecutorService & Executor|java.util.concurrent.Executor]]</code> object. There is an alternative, <code><font style=\"color: rgb(122,134,154);\">ThreadPoolTaskExecutor</font></code>, that exposes the <code><font style=\"color: rgb(122,134,154);\">Executor</font></code> configuration parameters as bean properties. It is rare to need to use the <code><font style=\"color: rgb(122,134,154);\">ConcurrentTaskExecutor</font></code>, but if the <code><font style=\"color: rgb(122,134,154);\">ThreadPoolTaskExecutor</font></code> isn’t flexible enough for your needs, the <code><font style=\"color: rgb(122,134,154);\">ConcurrentTaskExecutor</font></code> is an alternative"
    ],
    [
      {
        "content": "<code>SimpleThreadPoolTaskExecutor</code>",
        "bg": "#F4F5F7"
      },
      "- This implementation is actually a subclass of Quartz’s <code><font style=\"color: rgb(122,134,154);\">SimpleThreadPool</font></code> which listens to Spring’s lifecycle callbacks. This is typically used when you have a thread pool that may need to be shared by both Quartz and non-Quartz components"
    ],
    [
      {
        "content": "<code>ThreadPoolTaskExecutor</code>",
        "bg": "#F4F5F7"
      },
      "- This implementation is the most commonly used one. It exposes bean properties for configuring a <code><font style=\"color: rgb(122,134,154);\">java.util.concurrent.ThreadPoolExecutor</font></code> and wraps it in a <code><font style=\"color: rgb(122,134,154);\">TaskExecutor</font></code>. If you need to adapt to a different kind of <code><font style=\"color: rgb(122,134,154);\">java.util.concurrent.Executor</font></code>, it is recommended that you use a <code><font style=\"color: rgb(122,134,154);\">ConcurrentTaskExecutor</font></code> instead"
    ],
    [
      {
        "content": "<code>WorkManagerTaskExecutor</code>",
        "bg": "#F4F5F7"
      },
      "- This implementation uses the CommonJ <code>WorkManager</code> as its backing implementation and is the central convenience class for setting up a CommonJ <code><font style=\"color: rgb(122,134,154);\">WorkManager</font></code> reference in a Spring context. Similar to the <code><font style=\"color: rgb(122,134,154);\">SimpleThreadPoolTaskExecutor</font></code>, this class implements the <code><font style=\"color: rgb(122,134,154);\">WorkManager</font></code> interface and therefore can be used directly as a <code><font style=\"color: rgb(122,134,154);\">WorkManager</font></code> as well\n\n> [!info]\n> CommonJ is a set of specifications jointly developed between BEA and IBM. These specifications are not Java EE standards, but are standard across BEA’s and IBM’s Application Server implementations"
    ]
  ]
}
```
