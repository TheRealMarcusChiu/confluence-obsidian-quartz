---
title: "Vector Space of Linear Transformations - Set of Linear Transformations"
created: 2023-07-27T00:02:06.343-05:00
modified: 2023-07-27T19:07:54.435-05:00
parent: "[[Vector Space - Types]]"
children: []
---
###### Vector Space of Linear Transformations - Set of Linear Transformations - 𝐿(𝑋,𝑌) or 𝐿(𝑋)
````excerpt
- Suppose we have [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformations (𝐿: 𝑋→𝑌)]] for [[Vector Spaces - Linear Spaces|vector spaces]] 𝑋 and 𝑊. Then the space of all those transformations forms the <em>vector space of linear transformations</em>
- If 𝑋 and 𝑌 are finite vector spaces then the dimension is 𝑑𝑖𝑚(𝑋) \* 𝑑𝑖𝑚(𝑌)
- The set of linear transformations 𝑋→𝑌 is denoted by 𝐿(𝑋,𝑌). If 𝑋=𝑌, we may abbreviate 𝐿(𝑋,𝑋) by 𝐿(𝑋)
````
^excerpt

# Definition

𝐿: 𝑋→𝑌 is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] if it follows the following, for all vectors 𝑢̅,𝑣̅∊𝑋 and scalar 𝜆∊ℝ (or ℂ):
- 𝐿(𝑣̅ + 𝑢̅) = 𝐿(𝑣̅) + 𝐿(𝑢̅)
- 𝐿(𝜆·𝑣̅) = 𝜆·𝐿(𝑣̅)

𝐿(𝑋,𝑌) is a <em>vector space of linear transformations</em> if it follows the following, for all linear transformations 𝑆,𝑇∊𝐿(𝑋,𝑌), vector 𝑣̅∊𝑋, and scalar 𝜆∊ℝ (or ℂ):
- (𝑇 + 𝑆)(𝑣̅) = 𝑇𝑣̅ + 𝑆𝑣̅ <font style="color: rgb(122,134,154);">∊ 𝐿(𝑋,𝑌)</font>
- (𝜆·𝑇)(𝑣̅) = 𝜆·𝑇(𝑣̅) <font style="color: rgb(122,134,154);">∊ 𝐿(𝑋,𝑌)</font>

# Basis

TODO
# Subtypes
- [[Vector Space of Bounded Linear Transformations - Set of Bounded Linear Transformations]]
- [[Vector Space of Continuous Linear Transformations - Set of Continuous Linear Transformations]]

# Resources
- [https://math.stackexchange.com/questions/371774/vector-space-of-linear-transformations](https://math.stackexchange.com/questions/371774/vector-space-of-linear-transformations)
- [https://wiki.math.ntnu.no/linearmethods/linearmappings](https://wiki.math.ntnu.no/linearmethods/linearmappings)
