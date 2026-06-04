---
title: "Event Driven Architecture (EDA)"
created: 2020-05-27T14:22:34.522-05:00
modified: 2021-12-31T03:45:46.915-06:00
parent: "[[Architectural／Architecture Design Patterns (ADP)]]"
children:
  - "[[Event Sourcing]]"
---
![](https://www.youtube.com/watch?v=STKCRSUsyP0&t=613s)
- <strong>event</strong> - just indicate a change without expecting any particular response
- <strong>command</strong> - telling some service what to do

# EDA - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Pros",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Cons",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Event Notification",
        "bg": "#F4F5F7"
      },
      "- generic code notifies specific code by events\n- e.g. GUI elements",
      "- decoupling",
      "- inability to understand what is going on by stepping through the code"
    ],
    [
      {
        "content": "Event-Carried State Transfer",
        "bg": "#F4F5F7"
      },
      "- subscribers don't ask for additional information after an event occurred, all necessary state is given in the events\n- subscribers copy whatever they need",
      "- can greatly reduce network traffic\n- better availability",
      "- consistency lost because of replication"
    ],
    [
      {
        "content": "[[Event Sourcing]]",
        "bg": "#F4F5F7"
      },
      "- ability to rebuild the full state of the system by a persisted log of events\n- event sourcing works with data like version control systems work with code",
      "- \"time travel\" like for debugging",
      "- when rebuilding the state from log, can't replay responses of external systems unless the too a recorded\n- old event schema still has to work with newer versions of code\n- IDs that are generated during replay are probably different than before\n- asynchrony is difficult for people (but is optional, you can synchronously use event sourcing)\n- versioning (snapshots can make that easier)\n\nconclusion: replay has to work for everything, otherwise there is no point in using event sourcing"
    ],
    [
      {
        "content": "CQRS",
        "bg": "#F4F5F7"
      },
      "- separate components for:\n\t- updating the system\n\t- reading the system",
      "",
      ""
    ]
  ]
}
```
