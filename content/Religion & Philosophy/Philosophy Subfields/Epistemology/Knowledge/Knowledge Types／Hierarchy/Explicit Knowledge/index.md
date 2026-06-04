---
title: "Explicit Knowledge"
created: 2021-09-13T04:44:21.936-05:00
modified: 2021-09-13T04:44:21.936-05:00
parent: "[[Knowledge Types／Hierarchy]]"
children: []
---
# Explicit Knowledge - Hierarchical Levels
1. lexical level and syntax
2. semantic relations
3. contexts
4. events and event properties
5. event relations
6. meta-events

# Example - Knowledge Representation Derived From Text (NLP)

```merge-table
{
  "rows": [
    [
      {
        "content": "Hierarchical Level",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Input Text",
        "bg": "#F4F5F7"
      },
      {
        "content": "Gilda Flores' kidnapping occurred on January 13, 1990",
        "align": "center"
      },
      {
        "content": "A week before, he had fired the kidnappers",
        "align": "center"
      }
    ],
    [
      {
        "content": "Lexical Level & Syntax\n([[Davidsonian Logic Forms|Davidsonian Logic Form]])",
        "bg": "#F4F5F7"
      },
      {
        "content": "Gilda\\_Flores\\_NN(x1) & \\_human\\_NE(x1) & \\_s\\_POS(x1,x2) & kidnapping\\_NN(x2) & occur\\_VB(e1,x2,x3) & on\\_IN(e1,x4) & \\_date\\_NE(x4) & time\\_TMP(BeginFn(x4),1990,1,13,0,0,0) & time\\_TMP(EndFn(x4),1990,1,13,23,59,59)",
        "align": "center"
      },
      {
        "content": "he\\_PRP(x1) & fire\\_VB(e3,x1,x5) & kidnapper\\_NN(x5) & \\_date\\_NE(x6) & time\\_TMP(BeginFn(x6),1990,1,6,0,0,0) & time\\_TMP(EndFn(x6),1990,1,6,23,59,59)",
        "align": "center"
      }
    ],
    [
      {
        "content": "Semantic Relations\n([[Logic Forms + Semantic Relations]])",
        "bg": "#F4F5F7"
      },
      {
        "content": "THM\\_SR(x1,x2) & AGT\\_SR(x2,e1) & TMP\\_SR(x4,e1)",
        "align": "center"
      },
      {
        "content": "AGT\\_SR(x1,e3) & THM\\_SR(x5,e3) & TMP\\_SR(x6,e3)",
        "align": "center"
      }
    ],
    [
      {
        "content": "Contexts",
        "bg": "#F4F5F7"
      },
      {
        "content": "during\\_TMP(e1,x4)",
        "align": "center"
      },
      {
        "content": "during\\_TMP(e3,x6)",
        "align": "center"
      }
    ],
    [
      {
        "content": "Events & Event Properties",
        "bg": "#F4F5F7"
      },
      {
        "content": "event(e2,x2) & THM\\_EV(x1,e2) & TMP\\_EV(x4,e2)",
        "align": "center"
      },
      {
        "content": "event(e4,e3) & AGT\\_EV(x5,e2) & AGT\\_EV(x1,e4) & THM\\_EV(x5,e4) & TMP\\_SR(x6,e4)",
        "align": "center"
      }
    ],
    [
      {
        "content": "Event Relations",
        "bg": "#F4F5F7"
      },
      {
        "content": "CAUSE\\_EV(e4,e2), earlier\\_TMP(e4,e2)",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Meta-Events",
        "bg": "#F4F5F7"
      },
      {
        "content": "REVENGE",
        "align": "center",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 95.5224%;"
}
```
