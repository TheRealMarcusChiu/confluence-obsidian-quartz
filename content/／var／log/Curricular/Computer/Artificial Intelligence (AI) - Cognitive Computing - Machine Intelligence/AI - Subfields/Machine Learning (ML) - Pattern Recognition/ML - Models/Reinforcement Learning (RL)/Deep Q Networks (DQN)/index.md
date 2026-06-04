---
title: "Deep Q Networks (DQN)"
created: 2024-08-24T13:33:42.981-05:00
modified: 2024-08-24T14:27:22.109-05:00
parent: "[[Reinforcement Learning (RL)]]"
children:
  - "[[Q-Loss]]"
---
###### Deep Q Networks (DQN)
````excerpt
- using deep neural networks to learn [[Q-Function|Q-function]] (i.e. [[Q-Learning|Q-learning]])
````
^excerpt

# DQN - Architecture Types
![[Deep Q Networks (DQN)/deep-q-network-architecture-types.png|600]]
# DQN - Q-Learning (Value Learning vs Policy Learning)

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Q-Learning|Value Learning]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Deep Q Networks (DQN)/DQN-value-learning.png|500]]"
    ],
    [
      {
        "content": "[[Q-Learning|Policy Learning]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Deep Q Networks (DQN)/DQN-policy-learning.png|500]]"
    ]
  ]
}
```
# DQN - Continuous Action Space

Policy Learning enables modeling of continuous action space

![[Deep Q Networks (DQN)/DQN-policy-learning-continuous-action-space.png|550]]
# DQN - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
