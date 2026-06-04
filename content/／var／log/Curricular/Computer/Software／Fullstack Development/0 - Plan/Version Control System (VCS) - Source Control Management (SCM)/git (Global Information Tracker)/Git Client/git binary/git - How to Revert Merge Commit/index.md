---
title: "git - How to Revert Merge Commit"
created: 2021-07-24T08:17:44.781-05:00
modified: 2021-07-24T10:03:35.383-05:00
parent: "[[git binary]]"
children: []
---
The <code>-m</code> option specifies the <strong>parent number</strong>. This is because a merge commit has more than one parent, and Git does not know automatically which parent was the mainline, and which parent was the branch you want to un-merge.

When you view a merge commit in the output of <code>git log</code>, you will see its parents listed on the line that begins with <code>Merge</code>:
```
commit 8f937c683929b08379097828c8a04350b9b8e183
Merge: 8989ee0 7c6b236
Author: Ben James <ben@example.com>
Date:   Wed Aug 17 22:49:41 2011 +0100
```

In this situation:
- <code>git revert 8f937c6 -m 1</code> will get you the tree as it was in <code>8989ee0</code>
- <code>git revert 8f937c6 -m 2</code> will get you the tree as it was in <code>7c6b236</code>

# Resources
- [https://stackoverflow.com/questions/7099833/how-to-revert-a-merge-commit-thats-already-pushed-to-remote-branch](https://stackoverflow.com/questions/7099833/how-to-revert-a-merge-commit-thats-already-pushed-to-remote-branch)
