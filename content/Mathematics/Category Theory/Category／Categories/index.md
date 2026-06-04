---
title: "Category／Categories"
created: 2024-01-11T23:58:24.168-06:00
modified: 2024-01-12T20:11:59.063-06:00
parent: "[[Category Theory]]"
children: []
---
###### Category/Categories
````excerpt
- TODO
````
^excerpt

# Category - Definition

There are many equivalent definitions of a category. One commonly used definition is as follows. A <strong>category</strong> 𝐶 consists of
- a [class](https://en.wikipedia.org/wiki/Class_(set_theory)) 𝑜𝑏(𝐶) of <strong>[[Mathematical Object|objects]]</strong>
- a class 𝑚𝑜𝑟(𝐶) of <strong>[[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|morphisms]]</strong> or <strong>arrows</strong>
- a <strong>[[Functions (Domain - Codomain - Preimage - Image - Range)|domain]]</strong> or <strong>source</strong> class function 𝑑𝑜𝑚: 𝑚𝑜𝑟(𝐶) → 𝑜𝑏(𝐶)
- a <strong>[[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]]</strong> or <strong>target</strong> class function 𝑐𝑜𝑑: 𝑚𝑜𝑟(𝐶) → 𝑜𝑏(𝐶)
- for every three objects 𝑎, 𝑏, and 𝑐, a [[Binary／Dyadic Operations／Operators|binary operation]] ℎ𝑜𝑚(𝑎, 𝑏) × ℎ𝑜𝑚(𝑏, 𝑐) → ℎ𝑜𝑚(𝑎, 𝑐) called [[Composition of Morphisms|composition of morphisms]]
	- Here ℎ𝑜𝑚(𝑎, 𝑏) denotes the subclass of morphisms 𝑓 in 𝑚𝑜𝑟(𝐶) such that 𝑑𝑜𝑚(𝑓)=𝑎 and 𝑐𝑜𝑑(𝑓)=𝑏
	- Morphisms in this subclass are written 𝑓:𝑎→𝑏, and the composite of 𝑓:𝑎→𝑏 and 𝑔:𝑏→𝑐 is often written as 𝑔∘𝑓 or 𝑔𝑓
> [!indent]
> such that the following axioms hold:

- 
	- the [[Associativity／Associative|associative property]]: if 𝑓:𝑎→𝑏, 𝑔:𝑏→𝑐 and ℎ:𝑐→𝑑 then ℎ∘(𝑔∘𝑓) = (ℎ∘𝑔)∘𝑓
	- the ([left and right unit laws](https://en.wikipedia.org/wiki/Identity_(mathematics))): for every object 𝑥, there exists a morphism 1<sub>𝑥</sub>: 𝑥 → 𝑥 (some authors write 𝑖𝑑<sub>𝑥</sub>) called the identity morphism for 𝑥, such that:
		- every morphism 𝑓 : 𝑎 → 𝑥 satisfies 1<sub>𝑥</sub> ∘ 𝑓 = 𝑓, and
		- every morphism 𝑔 : 𝑥 → 𝑏 satisfies 𝑔 ∘ 1<sub>𝑥</sub> = 𝑔

# Category - Small & Large

A category 𝐶 is called <strong>small</strong> if both 𝑜𝑏(𝐶) and ℎ𝑜𝑚(𝐶) are [sets](https://en.wikipedia.org/wiki/Set_(mathematics)) and not [proper classes](https://en.wikipedia.org/wiki/Proper_class), and <strong>large</strong> otherwise. A <strong>locally small category</strong> is a category such that for all objects 𝑎 and 𝑏, the hom-class ℎ𝑜𝑚(𝑎, 𝑏) is a set, called a <strong>homset</strong>. Many important categories in mathematics (such as the category of sets), although not small, are at least locally small. Since, in small categories, the objects form a set, a small category can be viewed as an [algebraic structure](https://en.wikipedia.org/wiki/Algebraic_structure) similar to a [monoid](https://en.wikipedia.org/wiki/Monoid) but without requiring [closure](https://en.wikipedia.org/wiki/Closure_(mathematics)) properties. Large categories on the other hand can be used to create "structures" of algebraic structures.
# Category - Examples

The class of all sets (as objects) together with all functions between them (as morphisms), where the composition of morphisms is the usual function composition, forms a large category, <strong>Set</strong>. It is the most basic and the most commonly used category in mathematics.

The category <strong>Rel</strong> consists of all sets (as objects) with binary relations between them (as morphisms).

The category <strong>[Cat](https://en.wikipedia.org/wiki/Category_of_small_categories)</strong> consists of all small categories, with [[Functors|functors]] between them as morphisms.

The class of all preordered sets with [monotonic functions](https://en.wikipedia.org/wiki/Monotonic_function) as morphisms form a category, <strong>[Ord](https://en.wikipedia.org/wiki/Category_of_preordered_sets)</strong>. It is a [concrete category](https://en.wikipedia.org/wiki/Concrete_category), i.e. a category obtained by adding some type of structure onto <strong>Set</strong>, and requiring that morphisms are functions that respect this added structure.

```merge-table
{
  "rows": [
    [
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Objects",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Morphisms",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Set](https://en.wikipedia.org/wiki/Category_of_sets)",
        "bg": "#F4F5F7"
      },
      "[sets](https://en.wikipedia.org/wiki/Set_(mathematics))",
      "[functions](https://en.wikipedia.org/wiki/Function_(mathematics))"
    ],
    [
      {
        "content": "[Grp](https://en.wikipedia.org/wiki/Category_of_groups)",
        "bg": "#F4F5F7"
      },
      "[[Groups (Algebraic Structure) - Group Theory|groups]]",
      "[[Group Homomorphisms|group homomorphisms]]"
    ],
    [
      {
        "content": "[Mag](https://en.wikipedia.org/wiki/Magma_category)",
        "bg": "#F4F5F7"
      },
      "[[Magmas (Algebraic Structures)|magmas]]",
      "[magma homomorphisms](https://en.wikipedia.org/wiki/Magma_(algebra)#Morphism_of_magmas)"
    ],
    [
      {
        "content": "[Man<sup>p</sup>](https://en.wikipedia.org/wiki/Category_of_manifolds)",
        "bg": "#F4F5F7"
      },
      "[[Smooth Manifolds|smooth manifolds]]",
      "p-times [continuously differentiable](https://en.wikipedia.org/wiki/Continuously_differentiable) maps"
    ],
    [
      {
        "content": "[Met](https://en.wikipedia.org/wiki/Category_of_metric_spaces)",
        "bg": "#F4F5F7"
      },
      "[[Metric Spaces|metric spaces]]",
      "[short maps](https://en.wikipedia.org/wiki/Short_map)"
    ],
    [
      {
        "content": "[R-Mod](https://en.wikipedia.org/wiki/Category_of_modules)",
        "bg": "#F4F5F7"
      },
      "[R-modules](https://en.wikipedia.org/wiki/Module_(mathematics)), where R is a ring",
      "[R-module homomorphisms](https://en.wikipedia.org/wiki/Module_homomorphism)"
    ],
    [
      {
        "content": "[Mon](https://en.wikipedia.org/wiki/Category_of_monoids)",
        "bg": "#F4F5F7"
      },
      "[[Monoids (Algebraic Structures)|monoids]]",
      "[monoid homomorphisms](https://en.wikipedia.org/wiki/Monoid#Monoid_homomorphisms)"
    ],
    [
      {
        "content": "[Ring](https://en.wikipedia.org/wiki/Category_of_rings)",
        "bg": "#F4F5F7"
      },
      "[[Rings (Algebraic Structure) - Ring Theory|rings]]",
      "[ring homomorphisms](https://en.wikipedia.org/wiki/Ring_homomorphism)"
    ],
    [
      {
        "content": "[Top](https://en.wikipedia.org/wiki/Category_of_topological_spaces)",
        "bg": "#F4F5F7"
      },
      "[[Topological Spaces|topological spaces]]",
      "[[Continuous Functions／Transformations Between Topological Spaces (Topological Continuity - Topologically Continuous)|continuous functions]]"
    ],
    [
      {
        "content": "[Uni](https://en.wikipedia.org/wiki/Category_of_uniform_spaces)",
        "bg": "#F4F5F7"
      },
      "[[Uniform Spaces|uniform spaces]]",
      "[uniformly continuous functions](https://en.wikipedia.org/wiki/Uniformly_continuous_function)"
    ],
    [
      {
        "content": "[Vect<sub>K</sub>](https://en.wikipedia.org/wiki/K-Vect)",
        "bg": "#F4F5F7"
      },
      "[[Vector Spaces - Linear Spaces|vector spaces]] over the [[Fields (Algebraic Structure) - Field Theory|field]] K",
      "K-[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear maps]]"
    ]
  ]
}
```
# Category - Construction of New Categories
###### Dual category

Any category 𝐶 can itself be considered as a new category differently: the objects are the same as those in the original category but the arrows are those of the original category reversed. This is called the [dual or opposite category](https://en.wikipedia.org/wiki/Opposite_category) and is denoted 𝐶<sup>𝑜𝑝</sup>.
###### Product categories

If 𝐶 and 𝐷 are categories, one can form the product category 𝐶×𝐷: the objects are pairs consisting of one object from 𝐶 and one from 𝐷, and the morphisms are also pairs, consisting of one morphism in 𝐶 and one in 𝐷. Such pairs can be composed [componentwise](https://en.wikipedia.org/wiki/N-tuple).
