---
title: "Answer Set Programming (ASP)"
created: 2019-04-01T21:42:22.897-05:00
modified: 2019-04-01T22:03:44.398-05:00
parent: "[[Computer Languages - Logic／Logical Programming Languages]]"
children:
  - "[[Answer Set Programming - Textbooks]]"
---
<strong>Answer set programming</strong> (<strong>ASP</strong>) is a form of [declarative programming](https://en.wikipedia.org/wiki/Declarative_programming) oriented towards difficult (primarily [NP-hard](https://en.wikipedia.org/wiki/NP-hard)) [search problems](https://en.wikipedia.org/wiki/Search_algorithm). It is based on the [stable model](https://en.wikipedia.org/wiki/Stable_model_semantics) (answer set) semantics of [logic programming](https://en.wikipedia.org/wiki/Logic_programming). In ASP, search problems are reduced to computing stable models, and <em>answer set solvers</em>—programs for generating stable models—are used to perform search. The computational process employed in the design of many answer set solvers is an enhancement of the [DPLL algorithm](https://en.wikipedia.org/wiki/DPLL_algorithm) and, in principle, it always terminates (unlike [Prolog](https://en.wikipedia.org/wiki/Prolog) query evaluation, which may lead to an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop)).
# Textbooks
```dataview
LIST
FROM ""
WHERE file.folder = [[Answer Set Programming - Textbooks]].file.folder + "/" + [[Answer Set Programming - Textbooks]].file.name
```

# Implementations
- clingo (clasp + gringo) - [https://potassco.org/](https://potassco.org/)
- sasp - [https://sourceforge.net/projects/sasp-system/](https://sourceforge.net/projects/sasp-system/)
