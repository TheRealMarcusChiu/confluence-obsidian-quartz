---
title: "Chapter 2 - Empirical Risk Minimization (ERM)"
created: 2024-01-20T15:02:10.471-06:00
modified: 2024-01-21T23:06:27.435-06:00
parent: "[[Understanding Machine Learning： From Theory to Algorithms]]"
children: []
---
# What is ERM?

𝐿<sub>𝑆</sub>(ℎ) is the training error (aka empirical error and empirical risk) defined as:
- 𝐿<sub>𝑆</sub>(ℎ) = (1/𝑚) \* |{(𝑥,𝑦)∊𝑆 : ℎ(𝑥) ≠ 𝑦}|

where:
- 𝑆 = {(𝑥<sub>1</sub>,𝑦<sub>1</sub>), (𝑥<sub>2</sub>,𝑦<sub>2</sub>), ..., (𝑥<sub>𝑚</sub>,𝑦<sub>𝑚</sub>)} is the training set of size 𝑚

Since 𝑆 is a snapshot of the world, it makes sense to search for a predictor ℎ that minimizes 𝐿<sub>𝑆</sub>(ℎ). This is called <strong>Empirical Risk Minimization (ERM)</strong>.

ERM is formally defined as:
- $ERM_{\mathcal{H}}(S) ∊ argmin_{h∊\mathcal{H}} L_S(h)$

Let ℎ<sub>𝑆</sub> denote the result of applying 𝐸𝑅𝑀<sub>𝐻</sub> to 𝑆:
- $h_S ∊ ERM_{\mathcal{H}}(S)$

# What Could Go Wrong?

TLDR: overfitting
- 𝐿<sub>𝑆</sub>(ℎ) is the empirical risk
- 𝐿<sub>(𝒟,𝑓)</sub>(ℎ) is the <em>true</em> risk

where:
- 𝒟 is the unknown true distribution of 𝑆
- 𝑓 is the unknown true "hypothesis"

Also since we cannot guarantee perfect label prediction, we introduce the accuracy parameter commonly denoted as 𝜀.

We interpret:
- 𝐿<sub>(𝒟,𝑓)</sub>(ℎ<sub>𝑆</sub>) ≤ 𝜀 as an approximately correct predictor
- 𝐿<sub>(𝒟,𝑓)</sub>(ℎ<sub>𝑆</sub>) \> 𝜀 as a failure of the learner

# Upper Bound of the Probability of Leaner Failure

We would like to upper bound the probability to sample 𝑚-tuple of instances that will lead to failure of the learner:
- $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε})$

where:
- 𝒟<sup>𝑚</sup> denotes the probability over 𝑚-tuples induced by applying 𝒟 to pick each element of the tuple independently of the other members of the tuple
- 𝑆|<sub>𝑥</sub> = (𝑥<sub>1</sub>, ..., 𝑥<sub>𝑚</sub>) is a training set, i.e. an 𝑚-tuple of instances [[Independent and Identically Distributed (IID)|i.i.d.]] from 𝒟

The upper bound is defined as:
- $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; |\mathcal{H}| e^{-𝜀m}$

> [!expand-ui]- PROOF
> Let the set of "bad" hypothesis be:
> - $\mathcal{H}_B = \{ h∊\mathcal{H} : L_{(\mathcal{D},f}(h) > 𝜀 \}$
>
> Let the set of misleading examples be:
> - $M = \{ S|_x : ∃h∊\mathcal{H}_B, L_S(h) = 0 \}$
>
> Since, 𝐿<sub>𝑆</sub>(ℎ<sub>𝑆</sub>) = 0, the event 𝐿<sub>(𝒟,𝑓)</sub>(ℎ<sub>𝑆</sub>) \> 𝜀 can only happen if for some ℎ∊𝐻<sub>𝐵</sub> we have 𝐿<sub>𝑆</sub>(ℎ) = 0. In other words, this event will only happen if our sample is in the set of misleading samples 𝑀. Formally it is defined as:
> - $\{ S|_x : L_{(\mathcal{D},f)}(h_S) > 𝜀\} ⊆ M$
>
> Which can be rewritten as:
> - $M = \bigcup_{h∊\mathcal{H}_B} \{ S|_x : L_S(h) = 0 \}$
>
> Hence:
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; \mathcal{D}^m(M)$
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; \mathcal{D}^m(\bigcup_{h∊\mathcal{H}_B} \{ S|_x : L_S(h) = 0 \})$
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; \sum_{h∊\mathcal{H}_B} \mathcal{D}^m(\{ S|_x : L_S(h) = 0 \}) \;\;\; \text{ because of union bound of probabilities}$
> 	- $\mathcal{D}^m(\{ S|_x : L_S(h) = 0 \}) = \mathcal{D}^m(\{ S|_x : \forall_i, h(x_i) = f(x_i) \}) \;\;\; \text{ The event 𝐿_𝑆(ℎ) = 0 is equivalent to the event ∀𝑖, ℎ(𝑥_𝑖) = 𝑓(𝑥_𝑖)}$
> 	- $\mathcal{D}^m(\{ S|_x : L_S(h) = 0 \}) = \prod_{i=1}^m \mathcal{D}(\{x_i : h(x_i) = f(x_i) \}) \;\;\; \text{ because training set are sampled i.i.d.}$
> 		- $\mathcal{D}(\{x_i : h(x_i) = y_i \}) = 1 - L_{(\mathcal{D},f)}(h)$
> 		- $\mathcal{D}(\{x_i : h(x_i) = y_i \}) ≤ 1 - 𝜀$
> 	- $\mathcal{D}^m(\{ S|_x : L_S(h) = 0 \}) ≤ \prod_{i=1}^m (1 - 𝜀)$
> 	- $\mathcal{D}^m(\{ S|_x : L_S(h) = 0 \}) ≤ (1 - 𝜀)^m$
> 	- $\mathcal{D}^m(\{ S|_x : L_S(h) = 0 \}) ≤ e^{-𝜀m} \;\;\; \text{via the inequality } 1 - 𝜀 ≤ e^{-𝜀}$
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; \sum_{h∊\mathcal{H}_B} \mathcal{D}^m(\{ S|_x : L_S(h) = 0 \})$
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; \sum_{h∊\mathcal{H}_B} e^{-𝜀m}$
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; |\mathcal{H}_B| e^{-𝜀m}$
> - $\mathcal{D}^m({S|_x : L_{(\mathcal{D},f)}(h_S) > ε}) \;\; ≤ \;\; |\mathcal{H}| e^{-𝜀m}$
> [!info]
> the rest below is supplemental from: [https://www.baeldung.com/cs/probably-aproximately-correct](https://www.baeldung.com/cs/probably-aproximately-correct)

In other words, it says that the probability that the hypothesis space contains a hypothesis where its training-error is 0 and its true-error is \>𝜀, is lower than |𝐻|𝑒<sup>-𝜀𝑚</sup>. Where 𝑚 is the size of the training set. Mathematically:
- 𝐏(∃ℎ∊𝐻 s.t. 𝑡𝑟𝑎𝑖𝑛𝑖𝑛𝑔-𝑒𝑟𝑟𝑜𝑟(ℎ) = 0 AND 𝑡𝑟𝑢𝑒-𝑒𝑟𝑟𝑜𝑟(ℎ) \> 𝜀) ≤ |𝐻|𝑒<sup>-𝜀𝑚</sup>

The assumptions are that:
- the hypothesis space 𝐻 is finite
- training samples are i.i.d.

# Where Does Probably Come From?

We can bound the probability |𝐻|𝑒<sup>-𝜀𝑚</sup> from above:
- $|𝐻|𝑒^{-𝜀𝑚} ≤ 𝛿$

From this, we can calculate the number of samples we need for a set of hypothesis 𝐻 to be approximately correct with the predefined probability 𝛿:
- $m ≥ \frac{1}{𝜀} \left( ln(|H|) + ln(\frac{1}{𝛿}) \right)$

So as we increase the size of the data 𝑚 we could:
- decrease the error rate 𝜀
- decrease the probability 𝛿

# Agnostic PAC Learning

Agnostic PAC learning considers the case where the hypothesis space 𝐻 is inconsistent with the training data. In other words, the [[The Realizability Assumption|realizability assumption]] is lifted.

This means the error rate of the hypothesis set on the training data is non-zero. In this case, we have:
- $𝐏(\text{true-error}(h) > \text{training-error}(h) + 𝜀) \;\; ≤ \;\; |H|e^{-2m𝜀^2}$

From the above inequality, we can find the sample complexity in agnostic PAC learning to be:
- $m ≥ \frac{1}{2𝜀^2} \left( ln(|H|) + ln(\frac{1}{𝛿}) \right)$

# PAC Learnability and VC Dimension

As we saw above, PAC learnability for a concept class 𝐻 holds if the sample complexity 𝑚 is a polynomial function of (1/𝜀), (1/𝛿), and |𝐻| the size of the concept class.

<strong>VC dimension</strong> is the maximum number of points a hypothesis can shatter (i.e. separate differently labeled points for any labeling).

PAC learnability and VC dimension are closely related:
- 𝐻 is agnostically PAC-learnable iff 𝐻 has a finite VC dimension

If VC dimension of 𝐻 is finite, then the sample complexity 𝑚 can be computed as follows:
- $m > \frac{1}{𝜀} \left( 8VC(H) log(\frac{13}{𝜀}) + 4 log(\frac{2}{𝛿}) \right)$

where:
- 𝜀 is the learner's maximum error with the 1-𝛿 probability

# Examples

> [!expand-ui]- Class of 2D Rectangles
> The set of axis-aligned rectangles in a 2D space is PAC-learnable.
>
> To show this, it’s sufficient to find the sample complexity of this hypothesis set. And to do that, we can find its VC dimension.
>
> From the figures below, we can see that a rectangle can separate 2, 3, and 4 data points with ANY labeling
>
> ```merge-table
> {
>   "rows": [
>     [
>       "![[Chapter 2 - Empirical Risk Minimization (ERM)/vc-dimension-rectangular-boxes-2.png|100]]",
>       "![[Chapter 2 - Empirical Risk Minimization (ERM)/vc-dimension-rectangular-boxes-3.png|100]]",
>       "![[Chapter 2 - Empirical Risk Minimization (ERM)/vc-dimension-rectangular-boxes-4.png|100]]",
>       "![[Chapter 2 - Empirical Risk Minimization (ERM)/vc-dimension-rectangular-boxes-5.png|100]]"
>     ]
>   ]
> }
> ```
>
> No matter how these points are labeled, we can always place a rectangle that separates differently labeled points.
>
> However, when there are five points, shattering them with a rectangle is impossible. As a result, the VC dimension of axis-aligned rectangles is 4.
>
> Using this, we can calculate the sample complexity with arbitrary \\epsilon and \\delta.
>
> So, the class of 2D rectangles is PAC-learnable.

> [!expand-ui]- Class of Polynomial Classifiers in ℝ
> A classifier in a one-dimensional line can shatter at most 2 points, and a line in two-dimensional space can shatter at most 3 points. Similarly, the VC dimension of a polynomial classifier of degree 𝑛 is 𝑛+1. As a result, each finite polynomial is PAC-learnable.
>
> However, the class of all polynomial classifiers (i.e., their union) has a VC dimension of ∞. Therefore, the union of polynomial classifiers is not PAC-learnable.
>
> So, although any set of polynomials with the same finite degree is learnable, their union isn’t.
# Resources
- [https://en.wikipedia.org/wiki/Probably_approximately_correct_learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning)
- [https://www.cs.utexas.edu/~klivans/f06lec2.pdf](https://www.cs.utexas.edu/~klivans/f06lec2.pdf)
- [https://www.youtube.com/watch?v=X4Oxst5huQA](https://www.youtube.com/watch?v=X4Oxst5huQA)
