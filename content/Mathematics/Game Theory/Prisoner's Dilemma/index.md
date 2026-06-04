---
title: "Prisoner's Dilemma"
created: 2023-05-01T17:42:40.007-05:00
modified: 2023-05-01T18:18:02.297-05:00
parent: "[[Game Theory]]"
children: []
---
###### Prisoner's Dilemma
````excerpt
- is a game analyzed in [[Game Theory|game theory]]
- it is a thought experiment that challenges 2 rational agents to a dilemma:
	- they could cooperate with their partner for mutual reward
	- or they could betray their partner for individual reward
- The prisoner's dilemma also illustrates that the decisions made under collective rationality may not necessarily be the same as those made under individual rationality
````
^excerpt

# Matrix

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Prisoner B stays silent\n(<em>cooperates</em>)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Prisoner B betrays\n(<em>defects</em>)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Prisoner A stays silent\n(<em>cooperates</em>)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "Each serves 2 years",
      "Prisoner A: 10 years\nPrisoner B: goes free"
    ],
    [
      {
        "content": "Prisoner A betrays\n(<em>defects</em>)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "Prisoner A: goes free\nPrisoner B: 10 years",
      "Each serves 5 years"
    ]
  ]
}
```
# Strategy

The best strategy is to choose "defect"

Because:
- If B cooperates, A should defect, because going free is better than serving 2 years
- If B defects, A should also defect because serving 5 years is better than serving 10

So, either way, A should defect since defecting is A's best response regardless of B's strategy. Parallel reasoning will show that B should defect.
