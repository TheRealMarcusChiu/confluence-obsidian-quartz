---
title: "Taylor Series vs Taylor Polynomial"
created: 2021-09-13T05:29:24.857-05:00
modified: 2023-09-12T16:53:24.621-05:00
parent: "[[Approximating Known Target Functions]]"
children:
  - "[[Euler's Equation／Formula]]"
  - "[[Maclaurin Series vs Maclaurin Polynomial]]"
  - "[[Taylor Series Expansion of Cosine Function]]"
  - "[[Taylor Series Expansion of Euler's Equation／Formula]]"
  - "[[Taylor Series Expansion of Exponential Function]]"
  - "[[Taylor Series Expansion of Sine Function]]"
---
###### Taylor Series vs Taylor Polynomial
````excerpt
- is a representation of a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] as a sum of terms that are calculated from the values of the function's [[Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)|derivatives]] at a single point
	- <strong>Taylor series</strong> is an infinite sum
	- <strong>Taylor polynomial</strong> is a finite sum
- goal is to take a non-polynomial function and represent it as a polynomial function (which is easier to understand and manipulate)
- transforms: derivative information at a point → approximation information near that point
````
^excerpt

# Taylor Series/Polynomial - Formula

```merge-table
{
  "rows": [
    [
      {
        "content": "power series form",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Taylor Series vs Taylor Polynomial/taylor-series-polynomial-1.png|301]]"
    ],
    [
      {
        "content": "compact sigma form",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Taylor Series vs Taylor Polynomial/taylor-series-polynomial-2.png|301]]"
    ]
  ]
}
```

where:
- 𝑛! denotes the factorial of 𝑛
- 𝑓<sup>(𝑛)</sup>(𝑎) denotes the 𝑛<sup>𝑡ℎ</sup> derivative of 𝑓 evaluated at the point 𝑎

# Taylor Series/Polynomial - Formula Derivation

> [!expand]- Click here to expand...
> We know that the [[Power Series／Expansion|power series]] can be defined as
> - 𝑓(𝑥) = 𝛴<sub>0≤𝑛</sub><sub>≤</sub><sub>∞</sub>\[𝑎<sub>𝑛</sub>𝑥<sup>𝑛</sup>\] = 𝑎<sub>0</sub> + 𝑎<sub>1</sub>𝑥 + 𝑎<sub>2</sub>𝑥<sup>2</sup> + 𝑎<sub>3</sub>𝑥<sup>3</sup>+ …
>
> When 𝑥 = 0,
> - 𝑓(𝑥) = 𝑎<sub>0</sub>
>
> So, differentiate the given function, it becomes,
> - 𝑓'(𝑥) = 𝑎<sub>1</sub> + 2𝑎<sub>2</sub>𝑥 + 3𝑎<sub>3</sub>𝑥<sup>2</sup> + 4𝑎<sub>4</sub>𝑥<sup>3</sup> +….
>
> Again, when you substitute 𝑥 = 0, we get
> - 𝑓'(0) = 𝑎<sub>1</sub>
>
> Therefore,  \[𝑓'(0)/1!\] = 𝑎<sub>1</sub>
>
> So, differentiate it again, we get
> - 𝑓''(𝑥) = 2𝑎<sub>2</sub> + 6𝑎<sub>3</sub>𝑥 + 12𝑎<sub>4</sub>𝑥<sup>2</sup> + …
>
> Now, substitute 𝑥=0 in second-order differentiation, and we get
> - 𝑓''(0) = 2𝑎<sub>2</sub>
>
> Therefore, \[𝑓''(0)/2!\] = 𝑎<sub>2</sub>
>
> By generalizing the equation, we get
> - 𝑓<sup>𝑛</sup>(0)/𝑛! = 𝑎<sub>𝑛</sub>
>
> Now substitute the values in the power series we get,
> - 𝑓(𝑥) = 𝑓(0) + 𝑓'(0)𝑥 + \[𝑓''(0)/2!\]𝑥<sup>2</sup>+ \[𝑓'''(0)/3!\]𝑥<sup>3</sup>+ ….
>
> Generalize 𝑓 in a more general form, and it becomes
> - 𝑓(𝑥) = 𝑏 + 𝑏<sub>1</sub>(𝑥-𝑎) + 𝑏<sub>2</sub>(𝑥-𝑎)<sup>2</sup> + 𝑏<sub>3</sub>(𝑥-𝑎)<sup>3</sup>+ ….
>
> Now, 𝑥 = 𝑎, we get
> - 𝑏<sub>𝑛</sub> = 𝑓<sup>𝑛</sup>(𝑎)/𝑛!
>
> Now, substitute 𝑏<sub>n</sub> in a generalized form
> - 𝑓(𝑥) = 𝑓(𝑎) + \[𝑓'(𝑎)/1!\](𝑥−𝑎) + \[𝑓''(𝑎)/2!\](𝑥−𝑎)<sup>2</sup>+ \[𝑓'''(𝑎)/3!\](𝑥−𝑎)<sup>3</sup>+ ….
>
> Hence, the Taylor series is proved
# Taylor Series/Polynomial - Variants

```merge-table
{
  "rows": [
    [
      {
        "content": "Types",
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
        "content": "[[Maclaurin Series vs Maclaurin Polynomial|Maclaurin Series]]",
        "bg": "#F4F5F7"
      },
      "a Taylor series is centered at zero (i.e. a = 0)"
    ]
  ]
}
```
# Taylor Series/Polynomial - Other
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

![](https://www.youtube.com/watch?v=3d6DsjIBzJ4)
