---
title: "Double Dual Space - Intuition"
created: 2024-01-11T15:24:45.704-06:00
modified: 2024-01-11T16:39:29.437-06:00
parent: "[[Double Dual Spaces - Double Dual Vector Spaces - Dual Space of a Dual Space]]"
children: []
---
based on: [https://math.stackexchange.com/posts/3464070/edit](https://math.stackexchange.com/posts/3464070/edit)

Maybe it helps if we first widen our view, in order to then narrow it again and see the double-dual as a special case.

So let's start with functions (<em>any</em> functions, for now) 𝑓:𝑋→𝑌. As a concrete example, take 𝑋=𝑌=ℝ. That is, we are dealing with real-values functions of a real argument: 𝑓:ℝ→ℝ. Examples are
- the identity id = 𝑥↦𝑥,
- the constant functions const<sub>𝑐</sub>= 𝑥↦𝑐, and
- the trigonometric functions sin and cos

The normal way to look at functions is to think of them as <em>encoding</em> the operation. For example, it is a property of the function sin that it maps the number 𝜋 to the number 0:
- sin(𝜋)=0

But another view is that the result of <em>applying</em> the function sin to the number 𝜋 gives the number 0, and it is that <em>applying</em> that has all the logic. So you have <em>one</em> function apply that takes two arguments, a real function and a real number, and assigns them another number:
- apply(sin,𝜋)=0

Now looking at this form, we see that sinsin and 𝜋 are on equal footing. Both are merely arguments of the apply function. You recover the original sine function by “pre-inserting” sin as first argument of apply (this is known as currying):
- 𝑥 ↦ apply(sin,𝑥)

But given that both arguments are on equal footing, you may just as well pre-apply the <em>second</em> argument instead:
- 𝑓 ↦ apply(𝑓,𝜋)

We might consider this the application of 𝜋 to the function 𝑓. Thus apply(sin,𝜋) could equivalently be written as
- 𝜋(sin) = 0

In this manner, we can define a set of “number functions”
- {𝑓 ↦ apply(𝑓,𝑐) ∣ 𝑐∈ℝ} (1)

So now, from each real number 𝑐∈ℝ, we get a <em>function</em> that maps real functions to real numbers. Note that just like the function sin is not determined just by the value sin(𝜋), but by the values it takes for <em>all</em> real numbers, similarly, the function 𝜋 is not determined just by the value it takes at sin, but by the values it takes for <em>all</em> real functions. That is, we not only have 𝜋(sin)=0, but also 𝜋(cos)=−1, 𝜋(id)=𝜋, and 𝜋(const<sub>c</sub>)=𝑐.

Note also that the set of real functions:
- 𝐹 := {𝑓 : ℝ → ℝ} (2)

forms an ℝ-vector space under:
- pointwise addition 𝑓<sub>1</sub>+𝑓<sub>2</sub>= 𝑥 ↦ 𝑓<sub>1</sub>(𝑥) + 𝑓<sub>2</sub>(𝑥)
- scalar multiplication 𝑐𝑓 = 𝑥 ↦ 𝑐𝑓(𝑥)

It is easily determined that the “number functions” in (1) are linear functions on 𝐹; that is, they live in the dual space 𝐹\*.

However, the set in (1) is only a proper subset of the dual space of 𝐹 in (2) because it doesn't include the constant function 𝑓↦0 (as there is no real number that is mapped to 0 by all real functions). Indeed, that example shows that (1) is not even a vector subspace of 𝐹\* because it does not include the zero element.

We have, however, an injection into that dual, as we can identify each number by looking only at the function values. The easiest choice is to apply each number to the identity function (that returns the number itself), but even if we did not have that available (as will be the case below), we could e.g. look at the functions that are 1 for exactly one number, and 0 for all others; with those functions, we can uniquely identify the number by just noting which of those functions give a value of 1.

Now let's look instead at a vector space 𝑉 over a field 𝐾, and at <em>linear</em> functions 𝑉→𝐾, that is, members of the dual 𝑉\*. Again, we can do the same game as above, and for each vector, we get a function mapping members of 𝑉\* to the dual of 𝑉\*, which is the double dual of 𝑉.

However, now that we have only linear functions, we get more than above: The function that maps vectors to members of the double dual can easily be shown to be linear itself. And again, we can construct a set of functions in 𝑉\* that uniquely identifies the vector: Choose a basis {𝑏<sub>𝑖</sub>} in 𝑉, and then take the set of linear functions 𝑓<sub>𝑖</sub> that map 𝑣=𝛴<sub>𝑖</sub>𝛼<sub>𝑖</sub>𝑏<sub>𝑖</sub> to 𝛼<sub>𝑖</sub>. Since a vector is uniquely identified by its basis coefficients, this proves that the map 𝑉→𝑉\*\* is injective: You can uniquely identify the vector by the values 𝑣(𝑓<sub>𝑖</sub>) = 𝛼<sub>𝑖</sub>.
