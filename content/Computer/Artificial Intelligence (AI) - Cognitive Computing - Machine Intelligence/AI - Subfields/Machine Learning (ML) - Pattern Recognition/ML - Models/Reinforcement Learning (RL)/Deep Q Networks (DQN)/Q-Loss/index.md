---
title: "Q-Loss"
created: 2024-08-24T14:00:26.069-05:00
modified: 2026-05-15T18:18:28.503-05:00
parent: "[[Deep Q Networks (DQN)]]"
children: []
---
###### Q-Loss
````excerpt
- is a [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|loss function]] defined for [[Deep Q Networks (DQN)|Deep Q Network]]
````
^excerpt

# Q-Loss Formula$L = E \left[ \left\Vert \overbrace{(r + \gamma \max_{a'} Q(s', a'))}^\text{target} - \overbrace{Q(s, a)}^\text{predicted} \right\Vert^2 \right]$
