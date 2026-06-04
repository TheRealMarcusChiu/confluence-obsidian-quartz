---
title: "Decision Problems - Optimization Problems"
created: 2021-09-13T05:24:51.534-05:00
modified: 2023-06-13T21:58:55.248-05:00
parent: "[[Computable／Computational Problems]]"
children: []
---
<strong>Decision Problems</strong> and <strong>Optimization Problems</strong>
````excerpt
- both are types of a [[Computable／Computational Problems|computational problem]]
- <strong>decision problem</strong> is a problem that asks if a statement is true or false. The output of a decision problem is a single yes/no answer.
- <strong>optimization problem</strong> is a problem that asks to find the best solution from all feasible solutions. The output of an optimization problem is a solution that minimizes or maximizes an objective function
````
^excerpt

# Example Comparison

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Decision Problem</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "corresponding",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Optimization Problem</strong>",
        "bg": "#F4F5F7"
      }
    ],
    [
      "input:\n- directed graph 𝐺=(𝑉,𝐸)\n- weight function 𝑤:𝐸→ℝ\n- 𝑠 ∈ 𝑉\n- 𝑡 ∈ 𝑉\n- 𝑥 ∈ ℝ\n\noutput:\n- 1 if ∃ a path s→t with cost ≤ 𝑥\n- 0 otherwise",
      {
        "content": "corresponding",
        "bg": "#F4F5F7"
      },
      "input:\n- directed graph 𝐺=(𝑉,𝐸)\n- weight function 𝑤:𝐸→ℝ\n- 𝑠 ∈ 𝑉\n- 𝑡 ∈ 𝑉\n\noutput:\n- shortest path"
    ]
  ]
}
```
