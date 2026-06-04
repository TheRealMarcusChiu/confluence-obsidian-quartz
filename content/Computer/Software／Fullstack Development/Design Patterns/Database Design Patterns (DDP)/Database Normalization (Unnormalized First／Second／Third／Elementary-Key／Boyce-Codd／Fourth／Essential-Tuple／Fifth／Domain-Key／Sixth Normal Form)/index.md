---
title: "Database Normalization (Unnormalized First／Second／Third／Elementary-Key／Boyce-Codd／Fourth／Essential-Tuple／Fifth／Domain-Key／Sixth Normal Form)"
created: 2019-12-10T14:30:24.841-06:00
modified: 2026-05-14T23:47:07.585-05:00
parent: "[[Database Design Patterns (DDP)]]"
children: []
---
###### Database Normalization
````excerpt
- is the process of structuring a [[Database Management Systems (DBMS)|database]], usually a [[Relational／Row-Oriented Database Management System (RDBMS)|relational database]], in accordance with a series of so-called [normal forms](https://en.wikipedia.org/wiki/Database_normalization#Normal_forms) in order to reduce data redundancy and improve data integrity
````
^excerpt

# Database Normal Forms

The normal forms (from least normalized to most normalized) are:
- UNF: [Unnormalized form](https://en.wikipedia.org/wiki/Unnormalized_form)
- 1NF: [First normal form](https://en.wikipedia.org/wiki/First_normal_form)
- 2NF: [Second normal form](https://en.wikipedia.org/wiki/Second_normal_form)
- 3NF: [Third normal form](https://en.wikipedia.org/wiki/Third_normal_form)
- EKNF: [Elementary key normal form](https://en.wikipedia.org/wiki/Elementary_key_normal_form)
- BCNF: [Boyce–Codd normal form](https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form)
- 4NF: [Fourth normal form](https://en.wikipedia.org/wiki/Fourth_normal_form)
- ETNF: [Essential tuple normal form](https://en.wikipedia.org/w/index.php?title=Essential_tuple_normal_form&action=edit&redlink=1)
- 5NF: [Fifth normal form](https://en.wikipedia.org/wiki/Fifth_normal_form)
- DKNF: [Domain-key normal form](https://en.wikipedia.org/wiki/Domain-key_normal_form)
- 6NF: [Sixth normal form](https://en.wikipedia.org/wiki/Sixth_normal_form)
```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Requirement</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "[UNF](https://en.wikipedia.org/wiki/Unnormalized_form)\n(1970)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[1NF](https://en.wikipedia.org/wiki/First_normal_form)\n(1970)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[2NF](https://en.wikipedia.org/wiki/Second_normal_form)\n(1971)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[3NF](https://en.wikipedia.org/wiki/Third_normal_form)\n(1971)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[EKNF](https://en.wikipedia.org/wiki/Elementary_key_normal_form)\n(1982)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[BCNF](https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form)\n(1974)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[4NF](https://en.wikipedia.org/wiki/Fourth_normal_form)\n(1977)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[ETNF](https://en.wikipedia.org/w/index.php?title=Essential_tuple_normal_form&action=edit&redlink=1)\n(2012)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[5NF](https://en.wikipedia.org/wiki/Fifth_normal_form)\n(1979)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[DKNF](https://en.wikipedia.org/wiki/Domain-key_normal_form)\n(1981)",
        "bg": "#F4F5F7"
      },
      {
        "content": "[6NF](https://en.wikipedia.org/wiki/Sixth_normal_form)\n(2003)",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|Primary key]] (no duplicate [tuples](https://en.wikipedia.org/wiki/Tuple))",
        "bg": "#F4F5F7"
      },
      {
        "content": "MAYBE",
        "bg": "#fffae6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      }
    ],
    [
      {
        "content": "Atomic columns (cells cannot have tables as values)",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      }
    ],
    [
      {
        "content": "Every non-trivial [functional dependency](https://en.wikipedia.org/wiki/Functional_dependency) either does not begin with a proper subset of a [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|candidate key]] or ends with a [prime attribute](https://en.wikipedia.org/wiki/Candidate_key) (no partial functional dependencies of non-prime attributes on candidate keys)",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      }
    ],
    [
      {
        "content": "Every non-trivial functional dependency either begins with a [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|superkey]] or ends with a prime attribute (no [transitive functional dependencies](https://en.wikipedia.org/wiki/Transitive_dependency) of non-prime attributes on candidate keys)",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      }
    ],
    [
      {
        "content": "Every non-trivial functional dependency either begins with a superkey or ends with an [elementary prime attribute](https://en.wikipedia.org/wiki/Elementary_key_normal_form)",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "N/A",
        "bg": "#eae6ff"
      }
    ],
    [
      {
        "content": "Every non-trivial functional dependency begins with a superkey",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "N/A",
        "bg": "#eae6ff"
      }
    ],
    [
      {
        "content": "Every non-trivial [multivalued dependency](https://en.wikipedia.org/wiki/Multivalued_dependency) begins with a superkey",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "N/A",
        "bg": "#eae6ff"
      }
    ],
    [
      {
        "content": "Every [join dependency](https://en.wikipedia.org/wiki/Join_dependency) has a superkey component",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "N/A",
        "bg": "#eae6ff"
      }
    ],
    [
      {
        "content": "Every join dependency has only superkey components",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "N/A",
        "bg": "#eae6ff"
      }
    ],
    [
      {
        "content": "Every constraint is a consequence of domain constraints and key constraints",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      }
    ],
    [
      {
        "content": "Every join dependency is trivial",
        "bg": "#F4F5F7"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "❌",
        "bg": "#ffebe6"
      },
      {
        "content": "✅",
        "bg": "#e3fcef"
      }
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```
# Resources
- [https://en.wikipedia.org/wiki/Database_normalization](https://en.wikipedia.org/wiki/Database_normalization)
