---
title: "Maximum Adjacency Order"
created: 2021-09-13T05:25:22.583-05:00
modified: 2021-09-13T05:25:22.583-05:00
parent: "[[Graph Orders]]"
children: []
---
an ordering of vertices (𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑛</sub>) in an edge-weighted graph (𝐺, 𝑤) is called a <strong>maximum adjacency ordering</strong> if it satisfies:

𝑑<sub>(𝐺,𝑤)</sub>({𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑖-1</sub>}, 𝑣<sub>𝑖</sub>) ≥ 𝑑<sub>(𝐺,𝑤)</sub>({𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑖-1</sub>}, 𝑣<sub>𝑗</sub>) <font style="color: rgb(128,128,128);">\# for 2 ≤ 𝑖 ≤ 𝑗 ≤ 𝑛</font>

where:
- 𝑑<sub>(𝐺,𝑤)</sub>(𝑋,𝑌) denotes Σ{𝑤(𝑒) | 𝑒 = {𝑥,𝑦}∈𝐸, 𝑥∈𝑋, 𝑦∈𝑌}

### Theorem - Nagamochi & Ibaraki
In any MA ordering of vertices, the following statement holds:

𝜆(𝑣<sub>𝑛−1</sub>, 𝑣<sub>𝑛</sub>) = 𝑑(𝑣<sub>𝑛</sub>)

where:
- 𝑑(𝑣) denotes the degree of the vertex 𝑣
- 𝜆(𝑢, 𝑣) denotes the edge-connectivity between vertices 𝑢 and 𝑣
