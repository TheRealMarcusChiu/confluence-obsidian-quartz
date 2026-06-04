---
title: "Rule of Products"
created: 2024-01-17T01:04:35.673-06:00
modified: 2024-01-17T01:10:22.082-06:00
parent: "[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)]]"
children: []
---
###### PROBLEM

Given:
- 𝑔<sub>1</sub>(𝑛) = 𝑂(𝑓<sub>1</sub>(𝑛))
- 𝑔<sub>2</sub>(𝑛) = 𝑂(𝑓<sub>2</sub>(𝑛))

Show that:
- 𝑔<sub>1</sub>(𝑛)·𝑔<sub>2</sub>(𝑛) = 𝑂(𝑓<sub>1</sub>(𝑛)·𝑓<sub>2</sub>(𝑛))

###### PROOF
- 𝑔<sub>1</sub>(𝑛) ≤ 𝑐<sub>1</sub>·𝑓<sub>1</sub>(𝑛) for all 𝑛≥𝑛<sub>1</sub><font style="color: rgb(122,134,154);"> \# by definition of</font> [[(Big O - Little o - Omega - Theta) Bounds Notation|Big O notation]]
- 𝑔<sub>2</sub>(𝑛) ≤ 𝑐<sub>2</sub>·𝑓<sub>2</sub>(𝑛) for all 𝑛≥𝑛<sub>2</sub> <font style="color: rgb(122,134,154);">\# by definition of</font> [[(Big O - Little o - Omega - Theta) Bounds Notation|Big O notation]]

Let:
- 𝑛<sub>0</sub> = 𝑚𝑎𝑥(𝑛<sub>1</sub>, 𝑛<sub>2</sub>)

Then, for all 𝑛≥𝑛<sub>0</sub>:
- 𝑔<sub>1</sub>(𝑛)·𝑔<sub>2</sub>(𝑛) = 𝑐<sub>1</sub>·𝑓<sub>1</sub>(𝑛) · 𝑐<sub>2</sub>·𝑓<sub>2</sub>(𝑛)
- 𝑔<sub>1</sub>(𝑛)·𝑔<sub>2</sub>(𝑛) = 𝑐<sub>1</sub>·𝑐<sub>2</sub>·𝑓<sub>1</sub>(𝑛)·𝑓<sub>2</sub>(𝑛)
- 𝑔<sub>1</sub>(𝑛)·𝑔<sub>2</sub>(𝑛) = 𝑐·𝑓<sub>1</sub>(𝑛)·𝑓<sub>2</sub>(𝑛) <font style="color: rgb(122,134,154);">\# 𝑐 = 𝑐<sub>1</sub>·𝑐<sub>2</sub></font>
- 𝑔<sub>1</sub>(𝑛)·𝑔<sub>2</sub>(𝑛) = 𝑂(𝑓<sub>1</sub>(𝑛)·𝑓<sub>2</sub>(𝑛)) <font style="color: rgb(122,134,154);">\# by definition of</font> [[(Big O - Little o - Omega - Theta) Bounds Notation|Big O notation]]
