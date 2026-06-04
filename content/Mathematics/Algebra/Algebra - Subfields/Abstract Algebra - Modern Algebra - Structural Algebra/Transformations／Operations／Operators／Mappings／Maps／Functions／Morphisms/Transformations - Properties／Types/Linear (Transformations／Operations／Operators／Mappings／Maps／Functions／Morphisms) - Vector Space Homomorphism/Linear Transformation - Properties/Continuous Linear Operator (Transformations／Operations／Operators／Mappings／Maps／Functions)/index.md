---
title: "Continuous Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)"
created: 2023-06-22T20:10:13.372-05:00
modified: 2023-07-28T13:50:04.429-05:00
parent: "[[Linear Transformation - Properties]]"
children: []
---
###### Continuous Linear Operator (Transformations/Operations/Operators/Mappings/Maps/Functions) <sup>([[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|general definition]]</sup><sup>)</sup>
````excerpt
- given a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation 𝐿]] between two [[Topological Vector Spaces (TVS) - Linear Topological Spaces|topological vector spaces]]. The following are equivalent:
	1. 𝐿 is continuous at the origin in 𝑋
	2. 𝐿 is [[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|continuous at some point]] 𝑥∈𝑋
	3. 𝐿 is continuous
	4. 𝐿 is bounded
- given a linear transformation 𝐿 between two [[Normed Vector Spaces - Normed Spaces|normed spaces (𝑉,𝐹,||·||)]] then:
	- [[Bounded Linear Operator ↔ Continuous Linear Operator ： Between Normed Spaces|𝐿 is bounded ↔ 𝐿 is continuous]]
````
^excerpt

# Continuous Linear Operator - Definition

Continuous operator between metric spaces:

> [!expand]- Click here to expand...
> Given a mapping 𝑓: 𝑋→𝑌 between two [[Metric Spaces|metric spaces]] 𝑋 and 𝑌: <sup>[[Transformations Between Metric Spaces (Ordinary Continuity ／ Continuous [at a point - everywhere] - Uniform／Uniformly／Sequential／Sequentially／Hölder／Lipschitz Continuous／Continuity)|[details]]]</sup>
> - 𝑓 is <em>continuous at point</em> <font style="color: rgb(255,0,0);">𝑥̃∊𝑋</font> if:
> 	- <font style="color: rgb(0,128,0);">∀𝜀\>0 ∃𝛿\>0</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑥</font>) \< 𝛿 → 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) \< 𝜀
> - 𝑓 is <em>continuous</em> (i.e. continuous at all points) if:
> 	- <font style="color: rgb(255,0,0);">∀𝑥̃∊𝑋</font> <font style="color: rgb(51,153,102);">∀𝜀\>0 ∃𝛿\>0</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑥</font>) \< 𝛿 → 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) \< 𝜀
# Continuous Linear Operator - Examples/Types
- [[Compact Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|Compact Operator (Transformations/Operations/Operators/Mappings/Maps/Functions)]]
- 
> [!expand]- The norm of a normed space (𝑋,||·||) is a continuous function 𝑓: 𝑋→ℝ
> If
> - 𝑥<sub>𝑛</sub> → 𝑥<sub>0</sub> in 𝑋
>
> then
> - 𝑑(||𝑥<sub>𝑛</sub>||,||𝑥<sub>0</sub>||) = | ||𝑥<sub>𝑛</sub>|| - ||𝑥<sub>0</sub>|| | ≤ ||𝑥<sub>𝑛</sub> - 𝑥<sub>0</sub>|| = 𝑑(𝑥<sub>𝑛</sub>,𝑥<sub>0</sub>) → 0
>
> by the reverse triangle inequality

# Continuous Linear Operator - Other
- [[Bounded Linear Operator ↔ Continuous Linear Operator ： Between Normed Spaces|Bounded Linear Operator ↔ Continuous Linear Operator : Between Normed Spaces]]
