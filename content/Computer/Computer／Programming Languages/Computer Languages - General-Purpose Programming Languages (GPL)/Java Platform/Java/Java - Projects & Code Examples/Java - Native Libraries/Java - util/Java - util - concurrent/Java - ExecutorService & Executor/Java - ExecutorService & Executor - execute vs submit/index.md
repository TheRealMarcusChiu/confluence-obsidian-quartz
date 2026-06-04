---
title: "Java - ExecutorService & Executor - execute vs submit"
created: 2021-04-04T18:55:23.943-05:00
modified: 2021-04-23T20:43:05.876-05:00
parent: "[[Java - ExecutorService & Executor]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>execute</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>submit</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "parameter type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- [[Java - Runnable vs Callable|Runnable]]",
      "- Runnable or [[Java - Runnable vs Callable|Callable]]"
    ],
    [
      {
        "content": "return type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- void",
      "- [[Java - Future & CompletableFuture|Future]], which allows to either:\n\t- cancel an un-started task\n\t- interrupt a started task (causing InterruptedException to be thrown)"
    ],
    [
      {
        "content": "code",
        "header": true,
        "bg": "#F4F5F7"
      },
      "```\npublic interface Executor {\n\tvoid execute(Runnable command);\n}\n```",
      "```\npublic interface ExecutorService extends Executor {\n\t<T> Future<T> submit(Callable<T> task);\n\t<T> Future<T> submit(Runnable task, T result);\n\tFuture<?> submit(Runnable task);\n\t// more methods ...\n}\n```"
    ]
  ]
}
```
