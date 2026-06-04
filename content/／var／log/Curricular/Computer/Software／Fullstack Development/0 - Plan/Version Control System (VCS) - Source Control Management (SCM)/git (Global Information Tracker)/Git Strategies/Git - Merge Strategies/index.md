---
title: "Git - Merge Strategies"
created: 2021-05-15T14:08:20.279-05:00
modified: 2022-03-25T00:19:08.666-05:00
parent: "[[Git Strategies]]"
children: []
---
Here we have 2 branches: <code><strong>master</strong></code> and <code><strong>feature</strong></code>
```
  * (feature) commit 2
  * commit 1
 /
* (master) initial commit
```
# Merge Strategies

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "git merge feature",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "git merge feature --no-ff",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "git merge feature --squash",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "git log --oneline --graph --all",
        "header": true,
        "bg": "#F4F5F7"
      },
      "```\n* (master, feature) commit 2\n* commit 1\n* initial commit\n```",
      "```\n* (master) Merge branch 'feature'\n|\\\n| * (feature) commit 2\n| * commit 1\n|/\n* initial commit\n```",
      "```\n* (master) Squashed commit of the following:\n| * (feature) commit 2\n| * commit 1\n|/\n* initial commit\n```"
    ],
    [
      {
        "content": "git log --oneline",
        "header": true,
        "bg": "#F4F5F7"
      },
      "```\n(master, feature) commit 2\ncommit 1\ninitial commit\n```",
      "```\n(master) Merge branch 'feature'\n(feature) commit 2\ncommit 1\ninitial commit\n```",
      "```\n(master) Squashed commit of the following:\ninitial commit\n```"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [https://stackoverflow.com/questions/6701292/git-fast-forward-vs-no-fast-forward-merge](https://stackoverflow.com/questions/6701292/git-fast-forward-vs-no-fast-forward-merge)
- [https://stackoverflow.com/questions/18388813/whats-the-difference-between-git-merge-no-ff-and-git-merge-squash?noredirect=1&lq=1](https://stackoverflow.com/questions/18388813/whats-the-difference-between-git-merge-no-ff-and-git-merge-squash?noredirect=1&lq=1)
