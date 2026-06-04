---
title: "Conditional Relative Entropy"
created: 2021-09-13T05:26:25.690-05:00
modified: 2021-09-13T05:26:25.690-05:00
parent: "[[Information Theory - Mathematical Theory of Communication - Telecommunications]]"
children: []
---
### <strong>Conditional Relative Entropy</strong>
- 𝐷<sub>𝑄</sub>(𝑃(𝑋|𝑌)) = 𝐄<sub>𝑃</sub>\[ 𝑙𝑔 \[𝑃(𝑋|𝑌)/𝑄(𝑋|𝑌)\] \]
- 𝐷<sub>𝑄</sub>(𝑃(𝑋|𝑌)) = ∑<sub>𝑦∊𝑌</sub>𝑃(𝑌=𝑦)·𝐷<sub>𝑄</sub>(𝑃(𝑋|𝑌=𝑦))

###### Relative Entropy Chain Rule

let 𝑄 and 𝑃 be distribution over 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>
- 𝐷<sub>𝑄</sub>(𝑃) = 𝐷<sub>𝑄</sub>(𝑃(𝑋<sub>1</sub>)) + 𝐷<sub>𝑄</sub>(𝑃(𝑋<sub>2</sub>|𝑋<sub>1</sub>)) + 𝐷<sub>𝑄</sub>(𝑃(𝑋<sub>3</sub>|𝑋<sub>2</sub>, 𝑋<sub>1</sub>)) + ... + 𝐷<sub>𝑄</sub>(𝑃(𝑋<sub>𝑛</sub>|𝑋<sub>𝑛-1</sub>, ..., 𝑋<sub>1</sub>))

###### Properties
- 𝐷<sub>𝑄</sub>(𝑃(𝑋)) ≤ 𝐷<sub>𝑄</sub>(𝑃(𝑋,𝑌))
- 𝐷<sub>𝑄</sub>(𝑃(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>)) ≤ 𝐷<sub>𝑄</sub>(𝑃(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)) for 𝑘 ≤ 𝑛
