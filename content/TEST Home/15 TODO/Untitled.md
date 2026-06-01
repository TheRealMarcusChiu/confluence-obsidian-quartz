# Algebraic Structures

In [[Abstract Algebra - Modern Algebra - Structural Algebra|abstract algebra]], an **algebraic structure** on a set 𝐴 (called **carrier set** or **underlying set**) is a collection of finitary operations on 𝐴. The set 𝐴 with this structure is also called an **[[Algebra|algebra]]**.

---

## Algebraic Structures — 1 Operator Types

|Algebraic Structure Type|Closed|Associativity|Identity|Invertibility|Commutativity|Description|
|---|:-:|:-:|:-:|:-:|:-:|---|
|[[Partial Magmas (Algebraic Structures)\|Partial Magma]]|❌|❌|❌|❌|❌||
|[Semigroupoid](https://en.wikipedia.org/wiki/Semigroupoid)|❌|✅|❌|❌|❌||
|[Small Category](https://en.wikipedia.org/wiki/Category_\(mathematics\))|❌|✅|✅|❌|❌||
|[Groupoid](https://en.wikipedia.org/wiki/Groupoid)|❌|✅|✅|✅|❌|Can be seen as a **Group** with a partial function replacing the binary operation, or a **Category** in which every morphism is invertible. A groupoid with only one object is a usual group.|
|[[Magmas (Algebraic Structures)\|Magma]]|✅|❌|❌|❌|❌||
|[[Commutative Magma]]|✅|❌|❌|❌|✅||
|[[Quasigroups (Algebraic Structures)\|Quasigroup]]|✅|❌|❌|✅|❌|Is a magma whose elements are invertible|
|_(unnamed)_|✅|❌|❌|✅|✅||
|[[Unital Magmas (Algebraic Structures)\|Unital Magma]]|✅|❌|✅|❌|❌||
|_(unnamed)_|✅|❌|✅|❌|✅||
|[[Loops (Algebraic Structures)\|Loop]]|✅|❌|✅|✅|❌|Is a quasigroup with an identity element|
|_(unnamed)_|✅|❌|✅|✅|✅||
|[[Semigroups (Algebraic Structures)\|Semigroup]]|✅|✅|❌|❌|❌|Is a magma whose binary operation is associative|
|[[Semilattices/Semi-Lattices (Algebraic Structures)\|Semilattice]]|✅|✅|❌|❌|✅|Is a semigroup whose binary operation is commutative and idempotent|
|[[Inverse Semigroups - Associative Quasigroups (Algebraic Structures)\|Inverse Semigroup / Associative Quasigroup]]|✅|✅|❌|✅|❌|Is a semigroup whose elements are invertible|
|_(unnamed)_|✅|✅|❌|✅|✅||
|[[Monoids (Algebraic Structures)\|Monoid]]|✅|✅|✅|❌|❌|Is a semigroup with an identity element|
|[[Commutative Monoids (Algebraic Structures)\|Commutative Monoid]]|✅|✅|✅|❌|✅|Is a monoid whose binary operation is also commutative|
|[[Groups (Algebraic Structure) - Group Theory\|Group]]|✅|✅|✅|✅|❌|Is a monoid whose elements are invertible; is a loop whose binary operation is associative; is an inverse group with an identity element|
|[[Abelian Groups (Algebraic Structure)\|Abelian Group]]|✅|✅|✅|✅|✅|Is a group where the binary operation is commutative|

---

## Algebraic Structures — 2 Operator Types

> Each row pair represents properties of the **first** (e.g. additive) and **second** (e.g. multiplicative) binary operations respectively.

|Algebraic Structure Type|Closed|Associativity|Identity|Invertibility|Commutativity|Distributivity|Description|
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
|[[Semirings/Semi-Rings (Algebraic Structures)\|Semiring]] (op 1)|✅|✅|✅|❌|✅||Is similar to a ring, but without the requirement that each element must have an additive inverse. A **ring** is an algebraic structure that only requires a semigroup under the multiplicative operation (no multiplicative identity required).|
|[[Semirings/Semi-Rings (Algebraic Structures)\|Semiring]] (op 2)|✅|✅|❌|❌|❌|||
|[[Rings (Algebraic Structure) - Ring Theory\|Ring]] (op 1)|✅|✅|✅|✅|✅||Is an abelian group (under addition) that also has a second closed, associative binary operation, where both operations satisfy a distribution law. (A multiplicative identity may or may not be required.)|
|[[Rings (Algebraic Structure) - Ring Theory\|Ring]] (op 2)|✅|✅|❌|❌|❌|||
|[[Unitary Rings (Algebraic Structures)\|Unitary Ring]] (op 1)|✅|✅|✅|✅|✅||TODO|
|[[Unitary Rings (Algebraic Structures)\|Unitary Ring]] (op 2)|✅|✅|✅|?|?|||
|[[Fields (Algebraic Structure) - Field Theory\|Field]] (op 1)|✅|✅|✅|✅|✅||Is a ring where both operations are commutative, every element has both an additive and multiplicative inverse (with a multiplicative identity), and has no zero-divisors (if xy = 0 for x ≠ 0, then y = 0).|
|[[Fields (Algebraic Structure) - Field Theory\|Field]] (op 2)|✅|✅|✅|✅|✅|||

---

## Algebraic Structures — Complex Types

- [[Mathematical Spaces|Mathematical spaces]]
    - [[Vector Spaces - Linear Spaces|Vector spaces]]
- [Modules](https://en.wikipedia.org/wiki/Module_\(mathematics\))
- [Algebras](https://en.wikipedia.org/wiki/Algebra_\(ring_theory\))

---

## See Also

- [[Algebraic Structures - Examples]]