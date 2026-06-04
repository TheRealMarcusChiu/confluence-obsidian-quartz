---
title: "Bounded Linear Operator ↔ Continuous Linear Operator ： Between Normed Spaces"
created: 2023-06-22T22:28:20.673-05:00
modified: 2023-06-27T13:45:13.695-05:00
parent: "[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism]]"
children: []
---
# Statement
- a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator (𝐿)]] <strong>between [[Normed Vector Spaces - Normed Spaces|normed space (𝑉,𝐹,||·||)]]</strong> is [[Bounded／Unbounded Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|bounded]] if and only if it is [[Continuous Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|continuous]]
- [[Bounded／Unbounded Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|Bounded Linear Operator]] ↔ [[Continuous Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|Continuous Linear Operator]] : <strong>between normed spaces</strong>

# Proof
### Bounded Linear Operator → Continuous Linear Operator

Suppose that 𝐿 is bounded. Then, for all vectors 𝑣,𝑢∈𝑉 with 𝑢 nonzero we have:
- ||𝐿(𝑣+𝑢) - 𝐿(𝑣)|| = ||𝐿(𝑣) + 𝐿(𝑢) - 𝐿(𝑣)|| <font style="color: rgb(122,134,154);">\# because of </font>[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator]]
- ||𝐿(𝑣+𝑢) - 𝐿(𝑣)|| ≤ ||𝐿(𝑣)|| + ||𝐿(𝑢)|| - ||𝐿(𝑣)|| <font style="color: rgb(122,134,154);">\# because of [[Norms - Semi-Norms|norm's triangle-inequality]]</font>
- ||𝐿(𝑣+𝑢) - 𝐿(𝑣)|| ≤ ||𝐿(𝑢)||
- ||𝐿(𝑣+𝑢) - 𝐿(𝑣)|| ≤ 𝛼||𝑢|| <font style="color: rgb(122,134,154);">\# because of [[Bounded／Unbounded Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|bounded linear operator]]</font>

Letting 𝑢 go to zero shows that 𝐿 is continuous at 𝑣.

Moreover, since the constant 𝛼 does not depend on 𝑣, this shows that in fact 𝐿 is [[Transformations Between Metric Spaces (Ordinary Continuity ／ Continuous [at a point - everywhere] - Uniform／Uniformly／Sequential／Sequentially／Hölder／Lipschitz Continuous／Continuity)|uniformly continuous]], and even [Lipschitz continuous](https://en.wikipedia.org/wiki/Lipschitz_continuous).
### Continuous Linear Operator → Bounded Linear Operator

Conversely, it follows from the continuity at the zero vector that there exists a 𝛿\>0 such that ||𝐿(𝑢)|| = ||𝐿(𝑢) − 𝐿(0)‖ ≤ 1 for all vectors 𝑢∈𝑉 with ||𝑢|| ≤ 𝛿. Thus, for all non-zero 𝑣∈𝑉, one has:
- $||L(v)|| \quad = \quad \lVert \frac{\lVert v \rVert}{𝛿} L(𝛿 \frac{v}{||v||}) \rVert \quad = \quad \frac{||v||}{𝛿}||L(𝛿 \frac{v}{||v||})|| \quad = \quad \frac{||v||}{𝛿}·1 \quad = \quad \frac{1}{𝛿}||v||$

This proves that 𝐿 is bounded. [Q.E.D.](https://en.wikipedia.org/wiki/Q.E.D.)
