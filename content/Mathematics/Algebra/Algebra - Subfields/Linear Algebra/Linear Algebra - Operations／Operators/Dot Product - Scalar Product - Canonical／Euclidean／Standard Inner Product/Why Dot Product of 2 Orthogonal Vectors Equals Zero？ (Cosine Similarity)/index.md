---
title: "Why Dot Product of 2 Orthogonal Vectors Equals Zero？ (Cosine Similarity)"
created: 2022-04-24T02:06:02.399-05:00
modified: 2022-04-24T02:53:25.878-05:00
parent: "[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product]]"
children: []
---
###### Why is the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]] of 2 orthogonal vectors equal to zero? ([[Cosine Similarity|cosine similarity]])

> [!indent]
> 𝑥·𝑦 = 0

# Proof With Pythagorean Theorem
![[Why Dot Product of 2 Orthogonal Vectors Equals Zero？ (Cosine Similarity)/orthogonal-vectors.png|301]]
- 𝑎<sup>2</sup> + 𝑏<sup>2</sup> = 𝑐<sup>2</sup>
- ||𝑥̅||<sup>2</sup> + ||𝑦̅||<sup>2</sup> = ||𝑥̅ - 𝑦̅||<sup>2</sup>
- 𝑥̅<sup>T</sup>𝑥̅ + 𝑦̅<sup>T</sup>𝑦̅ = (𝑥̅ - 𝑦̅)<sup>T</sup>(𝑥̅ - 𝑦̅)
- (𝑥<sub>1</sub>𝑥<sub>1</sub> + 𝑥<sub>2</sub>𝑥<sub>2</sub> + ... + 𝑥<sub>𝑛</sub>𝑥<sub>𝑛</sub>) + (𝑦<sub>1</sub>𝑦<sub>1</sub> + 𝑦<sub>2</sub>𝑦<sub>2</sub> + ... + 𝑦<sub>𝑛</sub>𝑦<sub>𝑛</sub>) = (\[𝑥<sub>1</sub>𝑥<sub>1</sub> - 2𝑥<sub>1</sub>𝑦<sub>1</sub>+ 𝑦<sub>1</sub>𝑦<sub>1</sub>\] + \[𝑥<sub>2</sub>𝑥<sub>2</sub> - 2𝑥<sub>2</sub>𝑦<sub>2</sub>+ 𝑦<sub>2</sub>𝑦<sub>2</sub>\] + ... + \[𝑥<sub>𝑛</sub>𝑥<sub>𝑛</sub> - 2𝑥<sub>𝑛</sub>𝑦<sub>𝑛</sub>+ 𝑦<sub>𝑛</sub>𝑦<sub>𝑛</sub>\])
- <font style="color: rgb(0,128,0);">𝑥<sub>1</sub>𝑥<sub>1</sub> + 𝑥<sub>2</sub>𝑥<sub>2</sub> + ... + 𝑥<sub>𝑛</sub>𝑥<sub>𝑛</sub></font> <font style="color: rgb(255,102,0);">+ 𝑦<sub>1</sub>𝑦<sub>1</sub> + 𝑦<sub>2</sub>𝑦<sub>2</sub> + ... + 𝑦<sub>𝑛</sub>𝑦<sub>𝑛</sub></font> = <font style="color: rgb(0,128,0);">𝑥<sub>1</sub>𝑥<sub>1</sub></font> - 2𝑥<sub>1</sub>𝑦<sub>1</sub><font style="color: rgb(255,102,0);">+ 𝑦<sub>1</sub>𝑦<sub>1</sub></font> <font style="color: rgb(0,128,0);">+ 𝑥<sub>2</sub>𝑥<sub>2</sub></font> - 2𝑥<sub>2</sub>𝑦<sub>2</sub><font style="color: rgb(255,102,0);">+ 𝑦<sub>2</sub>𝑦<sub>2</sub></font> + ... <font style="color: rgb(0,128,0);">+ 𝑥<sub>𝑛</sub>𝑥<sub>𝑛</sub></font> - 2𝑥<sub>𝑛</sub>𝑦<sub>𝑛</sub><font style="color: rgb(255,102,0);">+ 𝑦<sub>𝑛</sub>𝑦<sub>𝑛</sub></font>
- 0 = - 2𝑥<sub>1</sub>𝑦<sub>1</sub> - 2𝑥<sub>2</sub>𝑦<sub>2</sub> - ... - 2𝑥<sub>𝑛</sub>𝑦<sub>𝑛</sub>
- 0 = -2 (𝑥<sub>1</sub>𝑦<sub>1</sub> + 𝑥<sub>2</sub>𝑦<sub>2</sub> + ... + 𝑥<sub>𝑛</sub>𝑦<sub>𝑛</sub>)
- 0 = 𝑥<sub>1</sub>𝑦<sub>1</sub> + 𝑥<sub>2</sub>𝑦<sub>2</sub> + ... + 𝑥<sub>𝑛</sub>𝑦<sub>𝑛</sub>
- 0 = 𝑥·𝑦
