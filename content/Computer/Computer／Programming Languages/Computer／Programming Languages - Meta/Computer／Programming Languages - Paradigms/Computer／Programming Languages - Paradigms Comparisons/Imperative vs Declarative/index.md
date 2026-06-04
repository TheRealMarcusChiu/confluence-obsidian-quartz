---
title: "Imperative vs Declarative"
created: 2022-02-14T18:56:52.805-06:00
modified: 2022-12-18T16:36:27.471-06:00
parent: "[[Computer／Programming Languages - Paradigms Comparisons]]"
children: []
---
- <strong>Declarative Programming</strong> is a [[Computer／Programming Languages - Paradigms|programming paradigm]] that focuses on what to execute, and defines program logic, but not detailed control flow
- <strong>[[Imperative Programming Paradigm|Imperative Programming]]</strong> - is a [[Computer／Programming Languages - Paradigms|programming paradigm]] that focuses on how to execute, and defines control flow as statements that change a program state

# Declarative vs Imperative - Concrete Example

> [!expand]- Click here to expand...
> ## Problem
>
> Given a list of numbers obtain all odd numbers
> ```
> List<int> list = new List<int> { 1, 2, 3, 4, 5 };
> ```
> ## Solution
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "### Declarative Solution",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "### Imperative Solution",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "With declarative programming, you write code that describes what you want, but not necessarily how to get it (declare your desired results, but not the step-by-step):\n```\nList<int> results = list.filter(i -> i % 2 != 0);\n```\n\nHere, we're saying:\n- give us everything where it's odd\n\nNOT \"Step through the collection. Check this item, if it's odd, add it to a result collection\"",
>       "With imperative programming, we'd step through this, and decide what we want:\n```\nList<int> results = new List<int>();\nforeach(var i in list) { \n\tif (i % 2 != 0) {\n\t\tresults.add(i); \n\t}\n}\n```\n\nHere, we're saying:\n1. create a result collection\n2. step through each number in the collection\n3. check the number, if it's odd, add it to the results"
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
# Declarative vs Imperative - Which is Better?

```merge-table
{
  "rows": [
    [
      {
        "content": "Parallel Computing",
        "bg": "#F4F5F7"
      },
      "- declarative programming allows for AUTOMATIC parallel computing as they only specify a pattern of results, not the algorithm used to determine the results (e.g. [[Structured Query Language (SQL)|SQL]])\n- imperative programming requires the developer to update the algorithm to utilize parallel computing"
    ]
  ]
}
```
