---
title: "Java - Bytecode Manipulation Libraries"
created: 2022-06-05T16:07:06.799-05:00
modified: 2023-05-05T11:41:41.818-05:00
parent: "[[Java - Non-Native Libraries]]"
children:
  - "[[Java - ASM]]"
  - "[[Java - Byte Buddy]]"
  - "[[Java - Code Generation Library (CGLIB)]]"
  - "[[Java - Javassist (Java Programming Assistant)]]"
---
# Native Libraries
- [[Java - lang - instrument]]
- [[Java - Dynamic Proxies]]

# Non-Native Libraries
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)|AspectJ]] - a bytecode manipulation library for [[Aspect-Oriented Programming (AOP)|AOP programming]]
- BCEL
- Cojen
- Serp

![[Java - Bytecode Manipulation Libraries/bytecode-manipulation-diagram.png]]

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "baseline",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Byte Buddy",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "cglib",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Javassist",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Java proxy",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "trivial class creation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "0.003",
      "(0.001)",
      "142.772",
      "(1.390)",
      "515.174",
      "(26.753)",
      "193.733",
      "(4.430)",
      "70.712",
      "(0.645)"
    ],
    [
      {
        "content": "interface implementation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "0.004",
      "(0.001)",
      "1'126.364",
      "(10.328)",
      "960.527",
      "(11.788)",
      "1'070.766",
      "(59.865)",
      "1'060.766",
      "(12.231)"
    ],
    [
      {
        "content": "stub method invocation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "0.002",
      "(0.001)",
      "0.002",
      "(0.001)",
      "0.003",
      "(0.001)",
      "0.011",
      "(0.001)",
      "0.008",
      "(0.001)"
    ],
    [
      {
        "content": "class extension",
        "header": true,
        "bg": "#F4F5F7"
      },
      "0.004",
      "(0.001)",
      "885.983\n<em>5'408.329</em>",
      "(7.901)\n<em>(52.437)</em>",
      "1'632.730",
      "(52.737)",
      "683.478",
      "(6.735)",
      "–",
      ""
    ],
    [
      {
        "content": "super method invocation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "0.004",
      "(0.001)",
      "0.004\n<em>0.004</em>",
      "(0.001)\n<em>(0.001)</em>",
      "0.021",
      "(0.001)",
      "0.025",
      "(0.001)",
      "–",
      ""
    ]
  ]
}
```
