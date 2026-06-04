---
title: "Constraint Aggregation"
created: 2021-09-13T05:26:13.661-05:00
modified: 2021-09-13T05:26:13.661-05:00
parent: "[[ILP - Algorithms Solving Problem]]"
children: []
---
In the <strong>Constraint Aggregation</strong> method we replace several constraints by a single one
# <strong>Constraint Aggregation Example</strong>

assume 0-1 problem

```merge-table
{
  "rows": [
    [
      {
        "content": "0-1 Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function:</strong>\n  max Z = c<sub>1</sub>x<sub>1</sub> + c<sub>1</sub>x<sub>1</sub> + ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub><font style=\"color: rgb(0,51,102);\">≤</font> b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub><font style=\"color: rgb(0,51,102);\">≤</font> b<sub>2</sub>\n- <strong>0-1 variables:</strong>\n  x<sub>1</sub> ∈ {0,1} \n  x<sub>2</sub> ∈ {0,1} \n  ...\n  x<sub>n</sub> ∈ {0,1}"
    ]
  ],
  "tableStyle": "width: 31.4706%;"
}
```

first convert the inequality constraints into equations, by introducing [[LP - Augmented／Slack Form|slack variables]] x<sub>n+1</sub><font style="color: rgb(0,51,102);">and </font>x<sub>n+2</sub>

```merge-table
{
  "rows": [
    [
      {
        "content": "Augmented 0-1 Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function:</strong>\n  max Z = c<sub>1</sub>x<sub>1</sub> + c<sub>1</sub>x<sub>1</sub> + ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub>+ <font style=\"color: rgb(255,0,255);\">a<sub>1n+1</sub>x<sub>n+1</sub> + a<sub>1n+2</sub>x<sub>n+2</sub>= b<sub>1</sub></font>\n  a<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub>+ <font style=\"color: rgb(255,0,255);\">a<sub>2n+1</sub>x<sub>n+1</sub>+ a<sub>1n+2</sub>x<sub>n+2</sub>= b<sub>2</sub></font>\n- <strong>0-1 variables:</strong>\n  x<sub>1</sub> ∈ {0,1} \n  x<sub>2</sub> ∈ {0,1} \n  ...\n  x<sub>n</sub> ∈ {0,1}\n- <strong>integer slack variables:</strong>\n  <font style=\"color: rgb(255,0,255);\">x<sub>n+1</sub> ∈ {0, 1, ..., b<sub>1</sub>}</font>\n  <font style=\"color: rgb(255,0,255);\">x<sub>n+2</sub> ∈ {0, 1, ..., b<sub>2</sub>}</font>"
    ]
  ],
  "tableStyle": "width: 42.8676%;"
}
```

where:
- a<sub>1n+1</sub> = 1
- a<sub>1n+2</sub> = 0
- a<sub>2n+1</sub> = 0
- a<sub>2n+2</sub> = 1

and:
- x<sub>n+1</sub>is an integer value between 0 and b<sub>1</sub>
- x<sub>n+2</sub>is an integer value between 0 and b<sub>2</sub>

it is clear that the 2 linear constraints:
- (1) Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>x<sub>i</sub>\] = b<sub>1</sub>
- (2) Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>2i</sub>x<sub>i</sub>\] = b<sub>2</sub>

imply the new one:
- (3) Σ<sub>i=1</sub><sup>n+2</sup> \[(a<sub>1i</sub>+ ma<sub>2i</sub>)x<sub>i</sub>\] = b<sub>1</sub> + mb<sub>2</sub>

the question is how can we choose m such that the implication also holds in the opposite direction, that is, such that the aggregated constraint (3) implies (1) and (2)

aggregate constraint (3) implies:
- (4) Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>x<sub>i</sub>\] - b<sub>1</sub>+ m { Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>2i</sub>x<sub>i</sub>\] - b<sub>2</sub> } = 0

now observe that the value of Y:
- Y = Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>x<sub>i</sub>\] - b<sub>1</sub>

the following cases must hold about Y:
- Y ≥ -b<sub>1</sub>
	- this is because both:
		- Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>\] (i.e. summation of coefficients) may equal 0
		- b<sub>1</sub> may be its maximum integer value b<sub>1</sub>
- Y ≤ Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>\]
	- this is because both:
		- Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>\] may be some non-negative value
		- b<sub>1</sub> may be its minimum integer value 0

so we have a bound on Y:
- |Y| ≤ b<sub>1</sub>' = max(b<sub>1</sub>, Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>1i</sub>\])

now observe value Z:
- Z = Σ<sub>i=1</sub><sup>n+2</sup> \[a<sub>2i</sub>x<sub>i</sub>\] - b<sub>2</sub>

then using Y, Z, and equation (4) we get:
- (5) Y + mZ = 0

how can this equality (5) hold?

possible cases:
- if Y = Z = 0
	- obviously (1) and (2) are satisfied
- if Z ≠ 0
	- then |Z| ≥ 1, being an integer
	- then Y must make the left hand side 0 in (5)
	- if, however, we choose m = b<sub>1</sub>' + 1,

thus, with the choice of m = b<sub>1</sub>' + 1, we can achieve that whenever the aggregated constraint (3) is satisfiable, both original constraints (1) and (2) will also be satisfiable. Of course, this is only guaranteed when the variables take their values from the allowed ranges

remark: we can assume that b<sub>1</sub> ≤ Σ<sub>i=1</sub><sup>n</sup> \[a<sub>1i</sub>\] since otherwise the original constraint Σ<sub>i=1</sub><sup>n</sup> \[a<sub>1i</sub>x<sub>i</sub>\] ≤ b<sub>1</sub> would always be satisfied, so we could simply leave it out. With this assumption the choice for the constant m becomes
- m = 1 + Σ<sub>i=1</sub><sup>n</sup> \[a<sub>1i</sub>\]
