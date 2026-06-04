---
title: "Probabilistic Inference - Syntax"
created: 2021-09-13T05:28:30.783-05:00
modified: 2024-09-22T23:37:42.085-05:00
parent: "[[Probabilistic Inference]]"
children: []
---
````excerpt
![[Graphical Models#^excerpt]]

and let:
- 𝐐 = 𝑄<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>be the set of query variables
- 𝐄 = 𝐸<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>be the set of evidence variables
- 𝐇 = 𝐻<sub>1</sub>, ..., 𝐻<sub>𝑡</sub>be the remainder of the variables<sub></sub>(called the hidden variables (non-evidence, non-query variables))
- 𝐪 = 𝑞<sub>1</sub>, ..., 𝑞<sub>𝑟</sub>be a grounded instantiation of 𝐐
- 𝐞 = 𝑒<sub>1</sub>, ..., 𝑒<sub>𝑠</sub>be a grounded instantiation of 𝐄
- 𝐡 = 𝘩<sub>1</sub>, ..., 𝘩<sub>𝑡</sub>be a grounded instantiation of 𝐇

𝑋, 𝐸, and 𝑌 are disjoint exhaustive sets of all variables 𝐗

therefore:
- the complete set of variables is 𝐗 = 𝐐 ∪ 𝐄 ∪ 𝐇 = {<strong>𝑋</strong><sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} = {𝑄<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>, 𝐸<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>, 𝐻<sub>1</sub>, ..., 𝐻<sub>𝑡</sub>}
- the complete set of instantiations is 𝒙 = 𝐪 ∪ 𝐞 ∪ 𝐡 = {<strong>𝑥</strong><sub>1</sub>, ..., <strong>𝑥</strong><sub>𝑛</sub>} = {𝑞<sub>1</sub>, ..., 𝑞<sub>𝑟</sub>, 𝑒<sub>1</sub>, ..., 𝑒<sub>𝑠</sub>, ℎ<sub>1</sub>, ..., ℎ<sub>𝑡</sub>}
````
^excerpt
