---
title: "Lambda Calculus (λ-calculus)"
created: 2022-03-06T15:19:01.084-06:00
modified: 2022-03-06T16:05:36.462-06:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children: []
---
###### Lambda Calculus (also written as𝜆-calculus)
- is a [[Formal Logical Systems／Languages or Logic Classes|formal system in mathematical logic]] for expressing [[Computational Complexity Theory|computation]] based on function abstraction and application using variable binding and substitution
- is a universal [model of computation](https://en.wikipedia.org/wiki/Model_of_computation) that can be used to simulate any [[Turing Machine (TM)|Turing machine]]
- it was introduced by the mathematician [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church) in the 1930s as part of his research into the [foundations of mathematics](https://en.wikipedia.org/wiki/Foundations_of_mathematics)

# Introduction

![](https://www.youtube.com/watch?v=eis11j_iGMs)
# Syntax & Semantics

Lambda calculus consists of constructing lambda terms and performing reduction operations on them. In the simplest form of lambda calculus, terms are built using only the following rules:

```merge-table
{
  "rows": [
    [
      {
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "<em>𝑥</em>",
        "bg": "#F4F5F7"
      },
      {
        "content": "Variable",
        "bg": "#F4F5F7"
      },
      "A character or string representing a parameter or mathematical/logical value."
    ],
    [
      {
        "content": "(𝜆𝑥.𝑀)",
        "bg": "#F4F5F7"
      },
      {
        "content": "Abstraction",
        "bg": "#F4F5F7"
      },
      "A function definition (𝑀 is a lambda term). The variable 𝑥 becomes bound in the expression."
    ],
    [
      {
        "content": "(𝑀 𝑁)",
        "bg": "#F4F5F7"
      },
      {
        "content": "Application",
        "bg": "#F4F5F7"
      },
      "Applying a function to an argument. 𝑀 and 𝑁 are lambda terms."
    ]
  ]
}
```

producing expressions such as: (𝜆𝑥.𝜆𝑦.(𝜆𝑧.(𝜆𝑥.𝑧<em> 𝑥</em>) (𝜆𝑦.𝑧<em> 𝑦</em>)) (𝑥<em> 𝑦</em>)). Parentheses can be dropped if the expression is unambiguous. For some applications, terms for logical and mathematical constants and operations may be included.

The reduction operations include:

```merge-table
{
  "rows": [
    [
      {
        "content": "Operation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "(𝜆𝑥.<em>M</em>[𝑥]) → (𝜆𝑦.𝑀[𝑦])",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝛼-conversion",
        "bg": "#F4F5F7"
      },
      "Renaming the bound variables in the expression. Used to avoid [name collisions](https://en.wikipedia.org/wiki/Name_collision)."
    ],
    [
      {
        "content": "((𝜆𝑥.𝑀) 𝐸) → (𝑀[𝑥 := 𝐸])",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝛽-reduction",
        "bg": "#F4F5F7"
      },
      "Replacing the bound variables with the argument expression in the body of the abstraction."
    ]
  ]
}
```

If [De Bruijn indexing](https://en.wikipedia.org/wiki/De_Bruijn_index) is used, then α-conversion is no longer required as there will be no name collisions. If the [repeated application](https://en.wikipedia.org/wiki/Reduction_strategy_(lambda_calculus)) of the reduction steps eventually terminates, then by the [Church–Rosser theorem](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem) it will produce a [𝛽-normal form](https://en.wikipedia.org/wiki/Beta_normal_form).

Variable names are not needed if using a universal lambda function, such as [Iota and Jot](https://en.wikipedia.org/wiki/Iota_and_Jot), which can create any function behavior by calling it on itself in various combinations.
# Examples

Assume TRUE and FALSE are encoded in the following way:
- TRUE  = 𝜆𝑥.𝜆𝑦. 𝑥
- FALSE = 𝜆𝑥.𝜆𝑦. 𝑦

NOT can be encoded the following way:
- NOT   = 𝜆𝑥. 𝑥 FALSE TRUE

For example, given 𝑥 = TRUE, then:
- (𝜆𝑥. 𝑥 FALSE TRUE) TRUE
- <font style="color: rgb(255,102,0);">TRUE</font> FALSE TRUE
- <font style="color: rgb(255,102,0);">𝜆𝑥.𝜆𝑦. 𝑥</font> FALSE TRUE
- FALSE

AND and OR can be encoded in the following ways:
- AND = 𝜆𝑥.𝜆𝑦. 𝑥 𝑦 FALSE
- OR = 𝜆𝑥.𝜆𝑦. 𝑥 𝑦 𝑦
