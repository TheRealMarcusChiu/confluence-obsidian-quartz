---
title: "Functions (Domain - Codomain - Preimage - Image - Range)"
created: 2021-09-13T05:29:23.653-05:00
modified: 2025-10-02T23:58:02.446-05:00
parent: "[[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms]]"
children: []
---
###### Functions
````excerpt
- see: [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|Transformations/Operations/Operators/Mappings/Maps/Functions/Morphisms]]
````
^excerpt

# Functions - Definitions

```merge-table
{
  "rows": [
    [
      {
        "content": "Term",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example 3",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "function",
        "bg": "#F4F5F7"
      },
      "- is a mapping between 2 [[Set Theory|sets]] where every element of a first set (domain) maps exactly to one element in the second set (co-domain)",
      "- 𝑓: ℝ → ℝ\n- 𝑓(𝑥) = 𝑥<sup>2</sup>",
      "- 𝑓: ℝ\\\\{0} → ℝ\n- 𝑓(𝑥) = 1/𝑥",
      "- 𝑓:ℝ<sup>2</sup>→ℝ\n- 𝑓(𝑥<sub>1</sub>, 𝑥<sub>2</sub>) = 𝑥<sub>1</sub> + 2𝑥<sub>2</sub>\n- 𝑓(𝑥<sub>1</sub>, 𝑥<sub>2</sub>) = \\[1, 2\\]\\[𝑥, 𝑥\\]<sup>𝑇</sup>"
    ],
    [
      {
        "content": "domain",
        "bg": "#F4F5F7"
      },
      "- the set into which all of the input of the function is constrained to fall",
      "- domain of 𝑓 is ℝ",
      "- domain of 𝑓 is ℝ\\\\{0}",
      "- domain of 𝑓 is ℝ<sup>2</sup>"
    ],
    [
      {
        "content": "codomain",
        "bg": "#F4F5F7"
      },
      "- the set into which all of the output of the function is constrained to fall",
      "- codomain of 𝑓 is ℝ",
      "- codomain of 𝑓 is ℝ",
      "- codomain of 𝑓 is ℝ"
    ],
    [
      {
        "content": "preimage",
        "bg": "#F4F5F7"
      },
      "- preimage of a function is the set of all input values (i.e. subset of domain)\n- preimage of an element 𝑦 in the domain 𝑌 is defined to be {𝑥 | 𝑓(𝑥)=𝑦}",
      "- preimage of function 𝑓 is ℝ\n- preimage of element 4 is 2",
      "- preimage of function 𝑓 is ℝ\\\\{0}\n- preimage of element 1/2 is 2",
      "- preimage of function 𝑓 is ℝ<sup>2</sup>\n- preimage of element \\[4\\] are the set of elements that satisfy \\[2,1\\] + \\[-2𝑎, 𝑎\\] for ∀𝑎∊ℝ\n- preimage of element \\[4\\] is the element \\[2, 1\\]"
    ],
    [
      {
        "content": "image",
        "bg": "#F4F5F7"
      },
      "- image of a function is the set of all output values (i.e. subset of codomain)\n- image of an element 𝑥 in the domain 𝑋 is defined to be {𝑦|𝑓(𝑥)=𝑦}",
      "- image of function 𝑓 is non-negative reals\n- image of element 2 is 4",
      "- image of function 𝑓 is ℝ\\\\{0}\n- image of element 2 is 1/2",
      "- image of function 𝑓 is ℝ\n- image of element \\[2, 1\\] is the element \\[4\\]\n- image of element \\[0, 2\\] is the element \\[4\\]"
    ],
    [
      {
        "content": "range",
        "bg": "#F4F5F7"
      },
      "- either <em>image</em> or <em>codomain</em>",
      "",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Function Approximation Problem]]
