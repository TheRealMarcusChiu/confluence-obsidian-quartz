---
title: "Bilinear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)"
created: 2023-06-28T12:37:59.287-05:00
modified: 2023-12-15T20:50:09.179-06:00
parent: "[[Transformations - Properties／Types]]"
children: []
---
###### Bilinear (Transformations/Operations/Operators/Mappings/Maps/Functions/Morphisms) (𝐵: 𝑉⨯𝑊→𝑋)
````excerpt
- a bilinear map is a type of [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|transformation (𝑇)]] combining elements of two [[Vector Spaces - Linear Spaces|vector spaces]] to yield an element of a third vector space, and is linear in each of its arguments
	- 𝐵: 𝑉⨯𝑊→𝑋
- 𝐵: 𝑉⨯𝑊→𝑋 is equivalent to the [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]] 𝐿: 𝑉⊗𝑊→𝑋 where:
	- ⊗ is the [[Tensor Product|tensor product]]
	- 𝑉⊗𝑊 is a [[Tensor Product Spaces|tensor product space]] which is also a vector space
- a bilinear map of:
	- two copies of the same vector space 𝑉 and with a [[Scalar-Valued Functions - Scalar Fields|scalar field]] 𝐹 as its [[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]] is a [[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear form]] 𝐵: 𝑉⨯𝑉→𝐹
````
^excerpt

# Bilinear Transformation - Definition

Given three [[Vector Spaces - Linear Spaces|vector spaces]] 𝑉, 𝑊, and 𝑋 over the same [[Fields (Algebraic Structure) - Field Theory|field 𝐹]]. A <em>bilinear transformation</em> is a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]]:
- ###### 𝐵: 𝑉 ⨯ 𝑊 → 𝑋

such that:
- for all 𝑤∊𝑊, the map <font style="color: rgb(122,134,154);">𝐵<sub>𝑤</sub> : 𝑣 ↦ 𝐵(𝑣,𝑤)</font> is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] from 𝑉 to 𝑋
- for all 𝑣∊𝑉, the map <font style="color: rgb(122,134,154);">𝐵<sub>𝑣</sub> : 𝑤 ↦ 𝐵(𝑣,𝑤)</font> is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] from 𝑊 to 𝑋

# Bilinear Transformation - Properties

Given any <em>bilinear transformation</em> (𝐵: 𝑉 ⨯ 𝑊 → 𝑋):
- 𝐵(𝜆𝑣,𝑤) = 𝐵(𝑣,𝜆𝑤) = 𝜆𝐵(𝑣,𝑤) for any 𝜆∊𝐹
- 𝐵(𝑣<sub>1</sub>+𝑣<sub>2</sub>,𝑤) = 𝐵(𝑣<sub>1</sub>,𝑤) + 𝐵(𝑣<sub>2</sub>,𝑤) for any 𝑣<sub>1</sub>,𝑣<sub>2</sub>∊𝑉 and 𝑤∊𝑊
- 𝐵(𝑣,𝑤<sub>1</sub>+𝑤<sub>2</sub>) = 𝐵(𝑣,𝑤<sub>1</sub>) + 𝐵(𝑣,𝑤<sub>2</sub>) for any 𝑣∊𝑉 and 𝑤<sub>1</sub>,𝑤<sub>2</sub>∊𝑊

# Bilinear Transformation - Examples/Types
- If 𝑉=𝑊 and we have 𝐵(𝑣,𝑤) = 𝐵(𝑤,𝑣) for all 𝑣,𝑤∊𝑉, then 𝐵 is symmetric
- If 𝑋 is the base field 𝐹, such that (𝐵: 𝑉 ⨯ 𝑊 → 𝐹), then the transformation 𝐵 is called a [[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear form]]

# Resources
- [https://en.wikipedia.org/wiki/Bilinear_map](https://en.wikipedia.org/wiki/Bilinear_map#Continuity_and_separate_continuity)
