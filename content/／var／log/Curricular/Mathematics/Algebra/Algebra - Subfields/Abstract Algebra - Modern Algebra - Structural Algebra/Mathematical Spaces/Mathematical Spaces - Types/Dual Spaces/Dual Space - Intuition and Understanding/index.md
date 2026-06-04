---
title: "Dual Space - Intuition and Understanding"
created: 2023-06-29T11:57:03.983-05:00
modified: 2023-08-02T18:00:42.841-05:00
parent: "[[Dual Spaces]]"
children: []
---
# See This
[[Tensor - 3 - Covector Introduction]]
# Another Attempt Below

based on: [https://medium.com/@luca.ambrogioni/understanding-dual-spaces-4b39d000a7ed](https://medium.com/@luca.ambrogioni/understanding-dual-spaces-4b39d000a7ed)

The goal is to make you realize how weirdly unintuitive vector spaces really are and to gain intuition about dual space. Our intuition of vector spaces is highly influenced by ℝ<sup>𝑛</sup>, the space of numeric tuples. Using a [[Coordinate Systems|coordinate system]], we can represent an arbitrary 𝑛-dimensional [[Vector Spaces - Linear Spaces|vector space (𝑉)]] with tuple numbers. Good for computation, but it creates a misleading conceptual model! ℝ<sup>𝑛</sup> comes in fact equipped with a very natural [[Topology|topology]] and [[Distance Measures／Metrics／Semi-Metrics／Functions|metric]]! We can definitely say that the two vectors 𝑣 and 𝑤 are close to each other, we just need to compare their numerical values right? True for ℝ<sup>𝑛</sup>, but completely meaningless for a general [[Vector Spaces - Linear Spaces|vector space (𝑉)]]!

If we use coordinates to map [[Vectors|vectors]] in 𝑉 to tuples in ℝ<sup>𝑛</sup>, we should keep in mind that the resulting [[Distance Measures／Metrics／Semi-Metrics／Functions|metric]] and [[Topology|topology]] of the tuples is an artifact of the [[Coordinate Systems|coordinate system]]! Change coordinates and everything change… except for one thing! The real essence of a vector space 𝑉 is the set of questions you can ask about 𝑉 whose answer does not depend on the coordinates. What are those questions?

It’s simple, there is basically only one type of question you can ask: “Does the vector 𝑣 lays in the sub-space 𝑆?”. To understand this we need to define sub-spaces. Pretty simple, a subspace 𝑆 is the set of linear combinations of a set of vectors (𝑠<sub>1</sub>, …, 𝑠<sub>𝑚</sub>). A linear combination is an expression of the form:
- 𝑣 = 𝛼<sub>1</sub>𝑠<sub>1</sub> + … + 𝛼<sub>𝑚</sub>𝑠<sub>𝑚</sub>

where the coefficients (𝛼<sub>1</sub>, ..., 𝛼<sub>𝑛</sub>) can take on on any real value. A vector 𝑣 lays in a vector space when it can be obtained as a linear combination of vectors in the subspace. the question “Does the vector 𝑣 lays in the sub-space 𝑆?” has a binary answer. Yes or no. Nothing else you can ask is meaningful! It does not make any sense to ask if a vector 𝑣 is close to a subspace 𝑆.

This means that the following two geometric representations below are completely equivalent!

![[Dual Space - Intuition and Understanding/1.png|500]]replace 𝐴 with 𝑆

Not understanding the weird geometry of vector spaces blocks you from understanding the nature and importance of the dreaded [[Dual Spaces|dual space]]! The reason for this misunderstanding is that the dual is “trivial” in [[Metric Spaces|metric spaces (𝑋,𝑑)]] such as ℝ<sup>𝑛</sup>.

Time for some recap. The dual space of vector space 𝑉 is the space of [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear form]] from 𝑉 to ℝ.

But what does a dual element 𝜉<sub>𝑎</sub> look like geometrically? In other words, is there a geometrical object in 𝑉 that can be identified with a dual vector 𝜉<sub>𝑎</sub>? Yes! The geometrical element associated with 𝜉<sub>𝑎</sub> is the [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|null space]] of vectors that are annihilated by 𝜉<sub>𝑎</sub>, in other words it is the set of vectors 𝑣 that satisfies the following condition {𝑣 | 𝜉<sub>𝑎</sub>(𝑣) = 0}.

Dual vectors are called forms. Makes sense! form means shape! Forms are like toddler toys that only let one shape pass and block everything else!

![[Dual Space - Intuition and Understanding/2.png|500]]

In the toddler toy analogy, the form is a hole in the box and the null space is the set of all blocks that do not fit in that shape. Going back to vectors, why don’t instead associate the form with all the vectors that “fit” (give non-zero result)? Simple! Because those vectors that “fit” do not form a subspace! Linear combinations of those vectors can for sure be in the null space! It’s not a nice linear object! The null space of a form is a (𝑛-1) subspace of 𝑉 that is associated with the form 𝜉<sub>𝑎</sub>.

If you read my previous thread, you’ll know that this picture is almost complete but not quite since scaling 𝜉<sub>𝑎</sub> by a number doesn’t change the null space. More exactly, the geometric object (in 𝑉 that can be identified with a dual vector 𝜉<sub>𝑎</sub>) is a scaled and signed null space of 𝜉<sub>𝑎</sub>. You can interpret it as a stack of null spaces “stacked along a direction of growth”. If the form is a gradient of a function, this stack gives the height levels of the function. This is what I explained in the previous thread. It is loosely right but potentially misleading, a function on a manifold does not have a well-defined direction of growth! The only well-defined thing is the scaled null space (space of constancy). A vector can either be in this subspace or not in this subspace; but it is not meaningful to ask how close the vector is from it. This means that you can’t isolate an orthogonal direction of maximal growth!

In [[Vector Calculus - Vector Analysis|vector calculus]], the gradient is a vector giving the direction of maximal growth. This is possible because the metric allows us to pick out a well-defined direction of orthogonality from the null space of the gradient form. In our toddler toy analogy, the metric allows you to associate a block (well a scaled signed block, they sell them at prenatal…) to each hole. In adult terms, it gives you a geometrically meaningful [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|isomorphism]] between vectors and forms. More generally, a metric allows you to associate (𝑛-1) spaces to their orthogonal vectors. Each form is then associated with a unique vector… it points somewhere now! This implies that 𝑉 and its dual become completely equivalent!
