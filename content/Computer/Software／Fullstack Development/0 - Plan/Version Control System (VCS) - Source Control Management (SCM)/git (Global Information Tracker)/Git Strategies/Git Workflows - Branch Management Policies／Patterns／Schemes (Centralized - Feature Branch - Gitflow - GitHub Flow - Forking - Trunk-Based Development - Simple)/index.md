---
title: "Git Workflows - Branch Management Policies／Patterns／Schemes (Centralized - Feature Branch - Gitflow - GitHub Flow - Forking - Trunk-Based Development - Simple)"
created: 2020-12-16T18:08:30.765-06:00
modified: 2026-03-25T13:15:16.436-05:00
parent: "[[Git Strategies]]"
children: []
---
A <strong>Git Workflow</strong> is a recipe or recommendation for how to use [[git (Global Information Tracker)|Git]] to accomplish work in a consistent and productive manner

Some things to consider when evaluating a Git workflow are:
- Does this workflow scale with team size?
- Is it easy to undo mistakes and errors with this workflow?
- Does this workflow impose any new unnecessary cognitive overhead to the team?

# Workflows - Branch Management Policies/Patterns/Schemes

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
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
        "content": "Centralized Workflow",
        "bg": "#F4F5F7"
      },
      "- there is a single branch named<code>master</code> where everyone syncs up to"
    ],
    [
      {
        "content": "Feature Branch Workflow",
        "bg": "#F4F5F7"
      },
      "- is a logical extension of Centralized Workflow\n- the core idea is that all feature development should take place in a dedicated branch instead of the <code>master</code> branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the <code>master</code> branch should never contain broken code, which is a huge advantage for continuous integration environments"
    ],
    [
      {
        "content": "[Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)",
        "bg": "#F4F5F7"
      },
      "- doesn’t add any new concepts or commands beyond what’s required for the Feature Branch Workflow. Instead, it assigns very specific roles to different branches and defines how and when they should interact\n- [https://nvie.com/posts/a-successful-git-branching-model/](https://nvie.com/posts/a-successful-git-branching-model/)"
    ],
    [
      {
        "content": "GitHub Flow",
        "bg": "#F4F5F7"
      },
      "- a simpler version of Gitflow Workflow, mainly built for those managing web apps\n- [https://guides.github.com/introduction/flow/](https://guides.github.com/introduction/flow/)"
    ],
    [
      {
        "content": "Trunk-Based Development",
        "bg": "#F4F5F7"
      },
      "- [https://trunkbaseddevelopment.com/](https://trunkbaseddevelopment.com/)"
    ],
    [
      {
        "content": "Simple Flow",
        "bg": "#F4F5F7"
      },
      "- [https://hackernoon.com/a-branching-and-releasing-strategy-that-fits-github-flow-be1b6c48eca2](https://hackernoon.com/a-branching-and-releasing-strategy-that-fits-github-flow-be1b6c48eca2)"
    ],
    [
      {
        "content": "[Forking Workflow](http://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)",
        "bg": "#F4F5F7"
      },
      "- is fundamentally different than the other workflows\n- instead of using a single server-side repository to act as the “central” codebase, it gives every developer a server-side repository. This means that each contributor has not one, but two repositories: a private local one and a public server-side one"
    ]
  ]
}
```
# Resources
- [https://martinfowler.com/articles/branching-patterns.html](https://martinfowler.com/articles/branching-patterns.html)
- [https://www.atlassian.com/git/tutorials/comparing-workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
