---
title: "Natural Transformations - Natural Isomorphisms - Natural Equivalence - Isomorphism of Functors - Infranatural Transformations"
created: 2024-01-11T22:05:27.724-06:00
modified: 2024-01-12T20:52:15.977-06:00
parent: "[[Category Theory]]"
children: []
---
###### Natural Transformations
````excerpt
- in [[Category Theory|category theory]], a <strong>natural transformation</strong> provides a way of transforming one [[Functors|functor]] into another while respecting the internal structure
- just as [[Functors|functors]] are translators between [[Category／Categories|categories]], <strong>natural transformations</strong> are translators between functors
````
^excerpt

# Natural Transformations - Definitions

If 𝐹 and 𝐺 are [[Functors|functors]] from the [[Category／Categories|category]] 𝐶 to 𝐷, then a <strong>natural transformation</strong> 𝜂 from 𝐹 to 𝐺 is a family of morphisms that satisfies two requirements.
1. The natural transformation must associate, to every object 𝑋 in 𝐶, a [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|morphism]] 𝜂<sub>𝑋</sub>: 𝐹(𝑋) → 𝐺(𝑋) between objects of 𝐷. The morphism 𝜂<sub>𝑋</sub> is called the <strong>component</strong> of 𝜂 at 𝑋.
2. Components must be such that for every morphism 𝑓 : 𝑋 → 𝑌 in 𝐶 we have:
	1. 𝜂<sub>𝑌</sub>∘𝐹(𝑓) = 𝐺(𝑓)∘𝜂<sub>𝑋</sub>

The last equation can conveniently be expressed by the [commutative diagram](https://en.wikipedia.org/wiki/Commutative_diagram)

![[Natural Transformations - Natural Isomorphisms - Natural Equivalence - Isomorphism of Functors - Infranatural Transformations/Natural_Transformation_between_two_functors.svg.png|301]]

If both 𝐹 and 𝐺 are [contravariant](https://en.wikipedia.org/wiki/Contravariant_functor), the vertical arrows in the right diagram are reversed. If 𝜂 is a natural transformation from 𝐹 to 𝐺, we also write 𝜂 : 𝐹 → 𝐺 or 𝜂 : 𝐹 ⇒ 𝐺. This is also expressed by saying the family of morphisms 𝜂<sub>𝑋</sub>: 𝐹(𝑋) → 𝐺(𝑋) is <strong>natural</strong> in 𝑋.

If, for every object 𝑋 in 𝐶, the morphism 𝜂<sub>𝑋</sub> is an [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|isomorphism]] in 𝐷, then 𝜂 is said to be a <strong>natural isomorphism</strong> (or sometimes <strong>natural equivalence</strong> or <strong>isomorphism of functors</strong>). Two functors 𝐹 and 𝐺 are called <em>naturally isomorphic</em> or simply <em>isomorphic</em> if there exists a natural isomorphism from 𝐹 to 𝐺. <strong>Natural isomorphisms</strong> are <strong>natural translations</strong> with inverses.

An <strong>infranatural transformation</strong> 𝜂 from 𝐹 to 𝐺 is simply a family of morphisms 𝜂<sub>𝑋</sub>: 𝐹(𝑋) → 𝐺(𝑋), for all 𝑋 in 𝐶. Thus a natural transformation is an infranatural transformation for which 𝜂<sub>𝑌</sub>∘𝐹(𝑓) = 𝐺(𝑓)∘𝜂<sub>𝑋</sub> for every morphism 𝑓 : 𝑋 → 𝑌. The <strong>naturalizer</strong> of 𝜂, 𝑛𝑎𝑡(𝜂), is the largest [subcategory](https://en.wikipedia.org/wiki/Subcategory) of 𝐶 containing all the objects of 𝐶 on which 𝜂 restricts to a natural transformation.
# Natural Transformations - Examples

[https://en.wikipedia.org/wiki/Natural_transformation#natural_isomorphism:~:text=of%20its%20applications.-,Definition,-%5Bedit%5D](https://en.wikipedia.org/wiki/Natural_transformation#natural_isomorphism:~:text=of%20its%20applications.-,Definition,-%5Bedit%5D)
