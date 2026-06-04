---
title: "Kernel Trick"
created: 2020-11-05T18:26:48.096-06:00
modified: 2024-09-11T13:03:21.980-05:00
parent: "[[Kernel Machines／Methods]]"
children: []
---
# Kernel Trick - Intuition

TODO:

![[Kernel Trick/Kernel Trick.pdf]]

<strong>kernel trick</strong> is a key innovation based on the observation that many machine learning algorithms can be written in terms of [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot-products]] between training examples. For example, it can be shown that the linear function 𝜃<sup>𝑇</sup>𝒙 used by [[Linear SVM (SVM Without Kernel)|Linear SVM]] or [[Binomial／Binary Logistic Regression (BLR)|Binomial Logistic Regression]] can be re-written as:
- 𝑓(𝒙) = 𝜃<sup>𝑇</sup>𝒙
- 𝑓(𝒙) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝛼<sub>𝑖</sub> 𝒙<sup>𝑇</sup>𝒙<sub>𝑖</sub> \]

where:
- 𝑛 - is the number of training examples
- 𝒙<sub>𝑖</sub> - is the 𝑖<sup>th</sup> training example
- 𝛼<sub>𝑖</sub> - is a weight coefficient

we could replace:
- 𝒙 with the output of a feature function 𝜙(𝒙)
- 𝒙<sup>𝑇</sup>𝒙<sub>𝑖</sub> with [[Kernel Functions (Similarity Functions)|kernel function]] defined as a dot-product (<font style="color: rgb(128,128,128);">i.e. 𝑘(𝒙,𝒙<sub>𝑖</sub>) = 𝜙(𝒙)<sup>𝑇</sup>𝜙(𝒙<sub>𝑖</sub>)</font>)

after replacing [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot-products]] with kernel evaluations, we can make predictions using the function:
- 𝑓(𝒙) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[ 𝛼<sub>𝑖</sub> 𝑘(𝒙,𝒙<sub>𝑖</sub>) \]

the kernel-based function is exactly equivalent to preprocessing the data by applying 𝜙(𝒙) to all inputs, then learning a linear model in the newly transformed space

by defining a new kernel function [[Kernel Functions (Similarity Functions)|kernel function]], it allows:
- to learn models that are nonlinear as a function of 𝒙 using convex optimization techniques (the optimization algorithm can view the decision function as being linear in a different space)
- the kernel function 𝑘 to be computationally more efficient than naively constructing two 𝜙(𝒙) vectors and explicitly taking their dot product (see [[Kernel Trick|b]]elow)

𝜙(𝒙) can even be infinite-dimensional which would result in an infinite computational cost for the naive explicit approach. In many cases, the kernel function 𝑘(𝒙,𝒙') is a nonlinear tractable function of 𝒙 even when 𝜙(𝒙) is intractable
# Computational Efficiency of Kernel Functions

based on: [https://blog.statsbot.co/support-vector-machines-tutorial-c1618e635e93](https://blog.statsbot.co/support-vector-machines-tutorial-c1618e635e93)

Kernels are the secret sauce that makes SVMs work

So far:
1. for linearly separable data SVMs work amazingly well
2. for data that’s almost linearly separable, SVMs can still be made to work pretty well by using the right value of 𝐶
3. for data that’s not linearly separable, we can project data to a space where it is perfectly/almost linearly separable, which reduces the problem to 1 or 2 and we are back in business

It looks like a big part of what makes SVMs universally applicable is projecting it to higher dimensions. And this is where kernels come in.

A very surprising aspect of SVMs is that in all of the mathematical machinery it uses, the exact projection, or even the number of dimensions, doesn’t show up. You could write all of it in terms of the <em>[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot products]]</em> between various data points (represented as vectors). For <em>𝑝</em>-dimensional vectors <em>𝑖</em> and <em>𝑗</em> where the first subscript on a dimension identifies the point and the second indicates the dimension number:
- 𝑥<sub>𝑖</sub> = (𝑥<sub>𝑖1</sub>, 𝑥<sub>𝑖2</sub>, ..., 𝑥<sub>𝑖𝑝</sub>)
- 𝑥<sub>𝑗</sub> = (𝑥<sub>𝑖1</sub>, 𝑥<sub>𝑗2</sub>, ..., 𝑥<sub>𝑗𝑝</sub>)

The dot product is defined as:
- 𝑥<sub>𝑖</sub>·𝑥<sub>𝑗</sub> = 𝑥<sub>𝑖1</sub>𝑥<sub>𝑗1</sub> + 𝑥<sub>𝑖2</sub>𝑥<sub>𝑗2</sub>+ ... + 𝑥<sub>𝑖𝑝</sub>𝑥<sub>𝑗𝑝</sub>

If we have <em>n</em> points in our dataset, the SVM needs <em>only</em> the dot product of each pair of points to find a classifier. Just that. This is also true when we want to project data to higher dimensions. We don’t need to provide the SVM with exact projections; we need to give it the dot product between all pairs of points in the projected space.

This is relevant because this is exactly what kernels do. A kernel, short for <em>kernel function</em>, takes as input two points in the original space, and directly gives us the dot product in the projected space.

Let’s revisit the projection we did before, and see if we can come up with a corresponding kernel. We will also track the number of computations we need to perform for the projection and then finding the dot products — to see how using a kernel compares.

For a point 𝑖:
- 𝑥<sub>𝑖</sub>= (𝑥<sub>𝑖1</sub>, 𝑥<sub>𝑖2</sub>)

Our corresponding projected point was:
- 𝑋<sub>𝑖</sub> = (𝑥<sub>𝑖1</sub><sup>2</sup>, 𝑥<sub>𝑖2</sub><sup>2</sup>, 2<sup>(1/2)</sup>𝑥<sub>𝑖1</sub>𝑥<sub>𝑖2</sub>)

To compute this projection we need to perform the following operations:
- To get the new first dimension: 1 multiplication
- Second dimension: 1 multiplication
- Third dimension: 2 multiplications

In all, 1+1+2 = 4 multiplications.

The dot product in the new dimension is:
- 𝑋<sub>𝑖</sub>𝑋<sub>𝑗</sub>= 𝑋<sub>𝑖1</sub>𝑋<sub>𝑗1</sub> + 𝑋<sub>𝑖2</sub>𝑋<sub>𝑗2</sub> + 𝑋<sub>𝑖3</sub>𝑋<sub>𝑗3</sub>

To compute this dot product for two points <em>i </em>and <em>j</em>, we need to compute their projections first. So that’s 4+4 = 8 multiplications, and then the dot product itself requires 3 multiplications and 2 additions.

In all, that’s:
- Multiplications: 8 (for the projections) + 3 (in the dot product) = 11 multiplications
- Additions: 2 (in the dot product)

Which is total of 11 + 2 = 13 operations.

I claim this kernel function gives me the same result:
- 𝐾(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) = (𝑥<sub>𝑖</sub>·𝑥<sub>𝑗</sub>)<sup>2</sup>

We take the dot product of the vectors in the original space <em>first</em>, and then square the result.

Let expand it out and check whether my claim is indeed true:
- 𝐾(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) = (𝑥<sub>𝑖</sub>·𝑥<sub>𝑗</sub>)<sup>2</sup>
- 𝐾(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) = (𝑥<sub>𝑖1</sub>𝑥<sub>𝑗1</sub> + 𝑥<sub>𝑖2</sub>𝑥<sub>𝑗2</sub>)<sup>2</sup>
- 𝐾(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) = 𝑥<sub>𝑖1</sub><sup>2</sup>𝑥<sub>𝑗1</sub><sup>2</sup> + 𝑥<sub>𝑖2</sub><sup>2</sup>𝑥<sub>𝑗2</sub><sup>2</sup> + 2𝑥<sub>𝑖1</sub>𝑥<sub>𝑗1</sub>𝑥<sub>𝑖2</sub>𝑥<sub>𝑗2</sub>
- 𝐾(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) = (𝑥<sub>𝑖1</sub><sup>2</sup>, 𝑥<sub>𝑖2</sub><sup>2</sup>, 2<sup>(1/2)</sup>𝑥<sub>𝑖1</sub>𝑥<sub>𝑖2</sub>) · (𝑥<sub>𝑗1</sub><sup>2</sup>, 𝑥<sub>𝑗2</sub><sup>2</sup>, 2<sup>(1/2)</sup>𝑥<sub>𝑗1</sub>𝑥<sub>𝑗2</sub>)

It is. How many operations does this need? Look at step (2) above. To compute the dot product in two dimensions I need 2 multiplications and 1 addition. Squaring it is another multiplication.

So, in all:
- Multiplications: 2 (for the dot product in the original space) + 1 (for squaring the result) = 3 multiplications
- Additions: 1 (for the dot product in the original space)

A total of 3 + 1 = 4 operations. This is only 31% of the operations we needed before.

It looks like it is faster to use a kernel function to compute the dot products we need. It might not seem like a big deal here: we’re looking at 4 vs 13 operations, but with input points with a lot more dimensions, and with the projected space having an even higher number of dimensions, the computational savings for a large dataset add up incredibly fast. So that’s one huge advantage of using kernels.

Most SVM libraries already come pre-packaged with some popular kernels like <em>[[Polynomial Kernel Function|Polynomial]], [[Radial Basis "Kernel" Function (RBF)|Radial Basis Function (RBF)]]</em>, and <em>Sigmoid</em>. When we don’t use a projection (as in our first example in this article), we compute the dot products in the original space — this we refer to as using the <em>linear kernel</em>.

Many of these kernels give you additional levers to further tune it for your data. For example, the polynomial kernel:
- 𝐾(𝑥<sub>𝑖</sub>,𝑥<sub>𝑗</sub>) = (𝑥<sub>𝑖</sub>·𝑥<sub>𝑗</sub> + 𝑐)<sup>2</sup>

allows you to pick the value of 𝑐 and 𝑑 (the degree of the polynomial). For the 3D projection above, I had used a polynomial kernel with 𝑐<em>=0</em> and 𝑑<em>=2</em>.

But we are not done with the awesomeness of kernels yet!

Remember I mentioned projecting to infinite dimensions a while back? If you haven’t already guessed, the way to make it work is to have the right kernel function. That way, we really don’t have to project the input data, or worry about storing infinite dimensions.
> A kernel function computes what the dot product would be if you had actually projected the data.

The RBF kernel is commonly used for a <em>specific </em>infinite-dimensional projection. We won’t go into the math of it here, but look at the references at the end of this article.

How can we have infinite dimensions, but can still compute the dot product? If you find this question confusing, think about how we compute sums of infinite series. This is similar. There are infinite terms in the dot product, but there happens to exist a formula to calculate their sum.

This answers the questions we had asked in the previous section. Let’s summarize:
1. We typically don’t define a specific projection for our data. Instead, we pick from available kernels, tweaking them in some cases, to find one best suited to the data.
2. Of course, nothing stops us from defining our own kernels, or performing the projection ourselves, but in many cases we don’t need to. Or we at least start by trying out what’s already available.
3. If there is a kernel available for the projection we want, we prefer to use the kernel, because that’s often faster.
4. RBF kernels can project points to infinite dimensions.
