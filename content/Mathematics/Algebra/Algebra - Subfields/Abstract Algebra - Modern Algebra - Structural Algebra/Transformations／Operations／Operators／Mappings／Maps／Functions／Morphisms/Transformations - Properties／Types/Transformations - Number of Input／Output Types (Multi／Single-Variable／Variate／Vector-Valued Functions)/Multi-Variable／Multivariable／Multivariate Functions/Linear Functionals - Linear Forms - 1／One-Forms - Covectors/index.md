---
title: "Linear Functionals - Linear Forms - 1／One-Forms - Covectors"
created: 2023-06-11T16:39:55.252-05:00
modified: 2024-01-12T16:18:11.982-06:00
parent: "[[Multi-Variable／Multivariable／Multivariate Functions]]"
children:
  - "[[Zero／Null Linear Functional]]"
---
###### Linear Functionals - Linear Forms - 1/One-Forms - Covectors (𝐿: 𝑉 → 𝐹)
````excerpt
- eats vectors and poops out scalars
- is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map/transformation (𝐿)]] from a [[Vector Spaces - Linear Spaces|vector space (𝑉)]] to its [[Scalar-Valued Functions - Scalar Fields|field of scalars (𝐹)]]
- denoted as:
	- 𝐿: 𝑉 → 𝐹
	- 𝑓(𝑣) where 𝑣∊𝑉
- is a (0,1)-[[Tensors|tensor]]
- the set of all <em>linear functionals</em> from 𝑉 to 𝐹 is called the [[Dual Spaces|dual space]] of 𝑉
````
^excerpt

# Linear Functional - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "General Linear Functional Examples",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Linear Functionals in ℝ<sup>𝑛</sup>",
        "bg": "#F4F5F7"
      },
      "- \n> [!expand]- Click here to expand...\n> Given a [[Vector Spaces - Linear Spaces|vector space 𝑉]] over a [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], let 𝑣 be a column vector in 𝑉:\n> - $v = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}$\n>\n> For each row vector 𝑎 = \\[𝑎<sub>1</sub>, 𝑎<sub>2</sub>, ..., 𝑎<sub>𝑛</sub>\\] there is a <strong><em>linear functional</em></strong> <strong>𝑓<sub>𝑎</sub></strong> defined by:\n> - $f_a(v) = a_1v_1 + a_2v_2 + \\cdots + a_nv_n$\n>\n> and each <strong><em>linear functional</em></strong> can be expressed in this form.\n>\n> This can be interpreted as either the matrix product or the dot product of the row vector 𝑎 and the column vector 𝑣:\n> - $f_a(𝑣) = a·𝑣 = \\begin{bmatrix} a_1 \\cdots a_n \\end{bmatrix} \\begin{bmatrix} 𝑣_1 \\\\ \\vdots \\\\ x_𝑣 \\end{bmatrix}$"
    ],
    [
      {
        "content": "[[Definite Integrals／Integrations - Indefinite Integrals／Integrations|Definite Integrals]]",
        "bg": "#F4F5F7"
      },
      "- \n> [!expand]- example definite integral as linear functional\n> A typical <em>linear functional</em> is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] defined by the Riemann integral\n> - $I(f) = \\int_a^b f(x)dx$\n>\n> is a <em>linear functional</em> from the [[Vector Space of Continuous Functions - Set of Continuous Functions|vector space of continuous functions 𝐶[𝑎,𝑏]]] on the [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] \\[𝑎,𝑏\\] to the [[Real Numbers System|real numbers]].\n>\n> The linearity of 𝐼 follows from the standard facts about integral:\n> - $I(f+g) = \\int_a^b[f(x) + g(x)]dx = \\int_a^bf(x)dx + \\int_a^b g(x)dx$\n> - $I(𝛼f) = \\int_a^b𝛼f(x)dx = 𝛼\\int_a^bf(x)dx = 𝛼I(f)$"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Specific Linear Functionals in ℝ<sup>𝑛</sup>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Zero／Null Linear Functional|zero function]]",
        "bg": "#F4F5F7"
      },
      "- one-form 𝑎 = \\[0, 0, …, 0\\] = zero row-vector, maps every column-vector to scalar 0\n- is the ONLY <em>linear function</em> that is non-[[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|surjective]], every other linear functional is surjective"
    ],
    [
      {
        "content": "indexing into a [[Vectors|vector]]",
        "bg": "#F4F5F7"
      },
      "- one-form 𝑎 = \\[0,1,0\\]. That is, the second element of \\[𝑥,𝑦,𝑧\\] is \\[0,1,0\\]·\\[𝑥,𝑦,𝑧\\] = 𝑦"
    ],
    [
      {
        "content": "[[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]",
        "bg": "#F4F5F7"
      },
      "- one-form 𝑎 = \\[1/𝑛, 1/𝑛, …, 1/𝑛\\] where 𝑛 is the number of elements. That is, 𝑚𝑒𝑎𝑛⁡(𝑣) = \\[1/𝑛, 1/𝑛, …, 1/𝑛\\]·𝑣"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;width: 100.0%;"
}
```
# Linear Functional - Non-Examples
- A function 𝑓 having the equation of a line 𝑓(𝑥) = 𝑎 + 𝑟𝑥 with 𝑎 ≠ 0. For example, 𝑓(𝑥) = 1 + 2𝑥) is not a linear functional on ℝ, since it is not linear. It is however [affine-linear](https://en.wikipedia.org/wiki/Affine-linear_function)

# Linear Functional - Visualizations
- [[Level Sets (Level-Curve／Contour-Line／Isoline - Level-Surface／Isosurface - Level-Hypersurface)|level sets]] can be used to visualize linear functionals

# Resources
- [https://en.wikipedia.org/wiki/Linear_form](https://en.wikipedia.org/wiki/Linear_form)
