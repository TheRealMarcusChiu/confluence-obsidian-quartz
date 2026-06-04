---
title: "Dynamic Bayesian Networks (DBN)"
created: 2021-09-13T05:26:45.094-05:00
modified: 2026-05-21T15:30:28.088-05:00
parent: "[[BN - Variants]]"
children:
  - "[[2-Time Slice Bayesian Networks (2TBN)]]"
  - "[[Ground／Unrolled Bayesian Network]]"
---
###### Dynamic Bayesian Networks (DBNs)
````excerpt
- extension of standard [[Bayesian Networks (BN)|Bayesian Networks]] incorporating temporal dimension
- generalization of [[Hidden Markov Models (HMM)]]
- is a type of [[PGM - Template Models|Template Model]]
- are used for modeling times series and sequences
````
^excerpt

# Formal Definition

a DBN over variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} is defined by 2 components:
- [[Bayesian Networks (BN)|Bayesian Network]] over initial variables {𝑋<sub>1</sub><sup>(𝑡=0)</sup>, ..., 𝑋<sub>𝑛</sub><sup>(𝑡=0)</sup>}
- [[2-Time Slice Bayesian Networks (2TBN)|2-Time Slice Bayesian Network (2TBN)]] over {𝑋<sub>1</sub><sup>(𝑡)</sup>, ..., 𝑋<sub>𝑛</sub><sup>(𝑡)</sup>} and {𝑋<sub>1</sub><sup>(𝑡+1)</sup>, ..., 𝑋<sub>𝑛</sub><sup>(𝑡+1)</sup>}

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Daphne Koller - DBN & 2TBN](https://www.coursera.org/lecture/probabilistic-graphical-models/temporal-models-dbns-y1I9j)
- [https://www.bayesserver.com/docs/introduction/dynamic-bayesian-networks](https://www.bayesserver.com/docs/introduction/dynamic-bayesian-networks)
