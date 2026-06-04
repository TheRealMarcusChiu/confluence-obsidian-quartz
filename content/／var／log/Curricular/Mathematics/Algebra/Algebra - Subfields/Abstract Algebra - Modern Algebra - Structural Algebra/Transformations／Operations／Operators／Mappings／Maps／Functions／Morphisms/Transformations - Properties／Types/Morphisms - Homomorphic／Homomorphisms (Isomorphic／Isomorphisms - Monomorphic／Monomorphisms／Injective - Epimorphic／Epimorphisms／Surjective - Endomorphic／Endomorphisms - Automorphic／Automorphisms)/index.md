---
title: "Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)"
created: 2023-06-12T13:57:50.643-05:00
modified: 2024-01-12T13:32:35.586-06:00
parent: "[[Transformations - Properties／Types]]"
children:
  - "[[Composition of Morphisms]]"
  - "[[Diffeomorphic／Diffeomorphisms]]"
  - "[[Group Homomorphisms]]"
  - "[[Homeomorphic／Homeomorphisms - Topological Isomorphism ／ Topologically Isomorphic - Bicontinuous Function]]"
---
###### Morphisms
````excerpt
- in <strong>[[Category Theory|category theory]]</strong>, a <strong>morphism</strong> is a structure-preserving map from one mathematical structure to another one of the same type
	- in [[Set Theory|set theory]], <strong>morphisms</strong> are [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|functions]]
	- in [[Linear Algebra|linear algebra]], <strong>morphisms</strong> are [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformations]]
	- in [[Groups (Algebraic Structure) - Group Theory|group theory]], <strong>morphisms</strong> are group homomorphisms
	- in [[Mathematical Analysis|analysis]] and [[Topology|topology]], <strong>morphisms</strong> are [[Continuous Functions (continuous at a point - continuous over／on an interval - continuous everywhere／over／on the entire domain)|continuous functions]]
	- etc
````
^excerpt

# Morphism - Definition
- TODO [https://en.wikipedia.org/wiki/Morphism#:~:text=called%20arrows.-,Definition,-%5Bedit%5D](https://en.wikipedia.org/wiki/Morphism#:~:text=called%20arrows.-,Definition,-%5Bedit%5D)

# Morphism - Builtin Operation "Composition of Morphisms"

see: [[Composition of Morphisms]]
# Morhism vs Homomorphism

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Morphism",
        "bg": "#F4F5F7"
      },
      "- a morphism in [[Category Theory|category theory]] is an abstraction of a homomorphism\n- TODO [https://math.stackexchange.com/questions/438344/what-does-homomorphism-require-that-morphism-doesnt](https://math.stackexchange.com/questions/438344/what-does-homomorphism-require-that-morphism-doesnt)",
      ""
    ],
    [
      {
        "content": "Homomorphic\nHomomorphism",
        "bg": "#F4F5F7"
      },
      "- a mapping between two [[Algebraic Structures|algebraic structures]] of the same type, that preserves the operations of the structures\n- a mapping that may lose information, thus mapping is not always invertible",
      "- a homomorphism between two [[Vector Spaces - Linear Spaces|vector spaces]] is called a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]]"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```
# Homomorphism - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Homomorphism Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Monomorphic\nMonomorphism\nInjective Homomorphism",
        "bg": "#F4F5F7"
      },
      "- a mapping that is [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|injective]]\n- every monomorphism is a homomorphism",
      ""
    ],
    [
      {
        "content": "Epimorphic\nEpimorphism\nEpic Morphism\nSurjective Homomorphism",
        "bg": "#F4F5F7"
      },
      "- a mapping that is [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|surjective]]\n- every epimorphism is a homomorphism",
      ""
    ],
    [
      {
        "content": "Isomorphic\nIsomorphism",
        "bg": "#F4F5F7"
      },
      "- a mapping that is [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|bijective]]\n- every isomorphism is a homomorphism\n- a mapping that preserves information, thus mapping is always invertible",
      "- [[Diffeomorphic／Diffeomorphisms|Diffeomorphic/Diffeomorphisms]]\n- [[Homeomorphic／Homeomorphisms - Topological Isomorphism ／ Topologically Isomorphic - Bicontinuous Function|Homeomorphic/Homeomorphisms]]"
    ],
    [
      {
        "content": "Endomorphic\nEndomorphism",
        "bg": "#F4F5F7"
      },
      "- a mapping from a [[Mathematical Object|mathematical object]] to itself\n- a mapping that may lose information, thus mapping is not always invertible",
      ""
    ],
    [
      {
        "content": "Automorphic\nAutomorphism",
        "bg": "#F4F5F7"
      },
      "- is an invertible endomorphism",
      ""
    ]
  ]
}
```
# TODO

Mappings between sets that preserve structures (i.e., structures in the domain are mapped to equivalent structures in the codomain) are of special interest in many fields of mathematics. Examples are:
- <strong>homomorphisms</strong> - mappings that preserve [[Algebraic Structures|algebraic structures]]
- <strong>homeomorphisms</strong> - mappings that preserve topological structures
- <strong> diffeomorphisms</strong> - mappings that preserve differential structures

# TODO MORE

A [morphism](https://en.wikipedia.org/wiki/Morphism) 𝑓 : 𝑎 → 𝑏 is called
- a [monomorphism](https://en.wikipedia.org/wiki/Monomorphism) (or monic) if it is left-cancellable, i.e. 𝑓𝑔<sub>1</sub> = 𝑓𝑔<sub>2</sub> implies 𝑔<sub>1</sub> = 𝑔<sub>2</sub> for all morphisms 𝑔<sub>1</sub>, 𝑔<sub>2</sub> : 𝑥 → 𝑎.
- an [epimorphism](https://en.wikipedia.org/wiki/Epimorphism) (or epic) if it is right-cancellable, i.e. 𝑔<sub>1</sub>𝑓 = 𝑔<sub>2</sub>𝑓 implies 𝑔<sub>1</sub> = 𝑔<sub>2</sub> for all morphisms 𝑔<sub>1</sub>, 𝑔<sub>2</sub> : 𝑏 → 𝑥.
- a [bimorphism](https://en.wikipedia.org/wiki/Bimorphism) if it is both a monomorphism and an epimorphism.
- a [retraction](https://en.wikipedia.org/wiki/Retract_(category_theory)) if it has a right inverse, i.e. if there exists a morphism 𝑔 : 𝑏 → 𝑎 with 𝑓𝑔 = 1<sub>𝑏</sub>.
- a [section](https://en.wikipedia.org/wiki/Section_(category_theory)) if it has a left inverse, i.e. if there exists a morphism 𝑔 : 𝑏 → 𝑎 with 𝑔𝑓 = 1<sub>𝑎</sub>.
- an [isomorphism](https://en.wikipedia.org/wiki/Isomorphism) if it has an inverse, i.e. if there exists a morphism 𝑔 : 𝑏 → 𝑎 with ???? = 1<sub>𝑏</sub> and 𝑔𝑓 = 1<sub>𝑎</sub>.
- an [endomorphism](https://en.wikipedia.org/wiki/Endomorphism) if 𝑎 = 𝑏. The class of endomorphisms of a is denoted 𝑒𝑛𝑑(𝑎).
- an [automorphism](https://en.wikipedia.org/wiki/Automorphism) if 𝑓 is both an endomorphism and an isomorphism. The class of automorphisms of 𝑎 is denoted 𝑎𝑢𝑡(𝑎).

Every retraction is an epimorphism. Every section is a monomorphism. The following three statements are equivalent:
- 𝑓 is a monomorphism and a retraction;
- 𝑓 is an epimorphism and a section;
- 𝑓 is an isomorphism.

Relations among morphisms (such as 𝑓𝑔 = ℎ) can most conveniently be represented with [commutative diagrams](https://en.wikipedia.org/wiki/Commutative_diagram), where the objects are represented as points and the morphisms as arrows.
