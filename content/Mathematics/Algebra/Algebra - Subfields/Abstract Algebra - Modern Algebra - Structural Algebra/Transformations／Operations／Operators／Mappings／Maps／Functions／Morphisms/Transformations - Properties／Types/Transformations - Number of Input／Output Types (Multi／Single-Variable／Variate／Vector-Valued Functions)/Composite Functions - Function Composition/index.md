---
title: "Composite Functions - Function Composition"
created: 2021-09-13T05:29:28.613-05:00
modified: 2023-07-17T14:46:32.145-05:00
parent: "[[Transformations - Number of Input／Output Types (Multi／Single-Variable／Variate／Vector-Valued Functions)]]"
children: []
---
###### Composite Function - Function Composition - 𝑓∘𝑔 - 𝑓(𝑔(·))
````excerpt
- a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] is <em>composite</em> if you can write it as 𝑓∘𝑔 or 𝑓(𝑔(𝑥)) or even 𝑓(𝑔<sub>1</sub>(𝑥), ..., 𝑔<sub>𝑘</sub>(𝑥)):
	- 𝑓() - outer function
	- 𝑔() - inner function (can also be a composite function)
````
^excerpt

# Composite Functions - Examples
###### Example 1 ([[Transformations - Number of Input／Output Types (Multi／Single-Variable／Variate／Vector-Valued Functions)|Single-Variable]] Composite Function)

𝑐𝑜𝑠(𝑥<sup>2</sup>) is composite because if we let:
- 𝑓(𝑥) = 𝑐𝑜𝑠(𝑥)
- 𝑔(𝑥) = 𝑥<sup>2</sup>

then
- 𝑐𝑜𝑠(𝑥<sup>2</sup>) = 𝑓(𝑔(𝑥))

###### Example 2 ([[Transformations - Number of Input／Output Types (Multi／Single-Variable／Variate／Vector-Valued Functions)|Multi-Variable]] Composite Function)

𝑓 is composite
- 𝑓(𝑔<sub>1</sub>(𝑥), 𝑔<sub>2</sub>(𝑥)) = 𝑔<sub>1</sub>(𝑥)<sup>2</sup>·𝑔<sub>2</sub>(𝑥)
- 𝑔<sub>1</sub>(𝑥) = 𝑐𝑜𝑠(𝑥)
- 𝑔<sub>2</sub>(𝑥) = 𝑠𝑖𝑛(𝑥)

therefore:
- 𝑓(𝑥) = 𝑐𝑜𝑠(𝑥)<sup>2</sup>·𝑠𝑖𝑛(𝑥)

# Composite Functions - Other
- [[Visualizing Back Propagation on Composite Functions|Visualizing Gradient Descent & Back Propagation on Composite Functions]]
