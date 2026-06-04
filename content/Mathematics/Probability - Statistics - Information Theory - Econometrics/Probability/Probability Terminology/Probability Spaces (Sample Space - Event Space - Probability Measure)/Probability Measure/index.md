---
title: "Probability Measure"
created: 2024-01-17T17:21:08.823-06:00
modified: 2024-01-17T17:50:28.370-06:00
parent: "[[Probability Spaces (Sample Space - Event Space - Probability Measure)]]"
children: []
---
###### Probability Measure
````excerpt
- is a [[Real-Valued Function (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|real-valued function]] defined on the [[Probability Spaces (Sample Space - Event Space - Probability Measure)|event space]]
- satisfies [[Measure／Measures|measure]] properties
- it is part of a [[Probability Spaces (Sample Space - Event Space - Probability Measure)|probability space]]
- the difference between a probability measure and the more general notion of [[Measure／Measures|measure]] is that a probability measure must assign value 1 to the entire [[σ-Algebra - σ-Field of Sets - σ-field|σ-algebra]]
````
^excerpt

# Probability Measure - Rules

```merge-table
{
  "rows": [
    [
      {
        "content": "Addition Rule",
        "bg": "#F4F5F7"
      },
      "- 𝐏(𝐸<sub>1</sub>⋃𝐸<sub>2</sub>) = 𝐏(𝐸<sub>1</sub>) + 𝐏(𝐸<sub>2</sub>) - 𝐏(𝐸<sub>1</sub>⋂𝐸<sub>2</sub>)"
    ],
    [
      {
        "content": "Union Bound",
        "bg": "#F4F5F7"
      },
      "- 𝐏(⋃<sub>1≤𝑖≤𝐿</sub>𝐸<sub>𝑖</sub>) ≤ 𝛴<sub>1≤𝑖≤𝐿</sub>𝐏(𝐸<sub>𝑖</sub>)"
    ],
    [
      {
        "content": "Inclusion-Exclusion Principle",
        "bg": "#F4F5F7"
      },
      "- 𝐏(⋃<sub>1≤𝑖≤𝐿</sub>𝐸<sub>𝑖</sub>) = 𝛴<sub>1≤𝑖≤𝐿</sub>𝐏(𝐸<sub>𝑖</sub>) - 𝛴<sub>𝑖\\<𝑗</sub>𝐏(𝐸<sub>𝑖</sub>⋂𝐸<sub>𝑗</sub>) + 𝛴<sub>𝑖\\<𝑗\\<𝑘</sub>𝐏(𝐸<sub>𝑖</sub>⋂𝐸<sub>𝑗</sub>⋂𝐸<sub>𝑘</sub>) + ... + (-1)<sup>𝐿-1</sup>𝛴<sub>𝑖\\<𝑗\\<𝑘\\<...\\<𝐿</sub>𝐏(𝐸<sub>𝑖</sub>⋂𝐸<sub>𝑗</sub>⋂𝐸<sub>𝑘</sub>⋂...⋂𝐸<sub>𝐿</sub>)"
    ]
  ]
}
```
# Resources
- [https://en.wikipedia.org/wiki/Probability_measure](https://en.wikipedia.org/wiki/Probability_measure)
