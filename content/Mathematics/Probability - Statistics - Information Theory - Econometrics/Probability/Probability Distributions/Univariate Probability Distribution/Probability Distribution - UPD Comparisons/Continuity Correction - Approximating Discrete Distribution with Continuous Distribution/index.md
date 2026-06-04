---
title: "Continuity Correction - Approximating Discrete Distribution with Continuous Distribution"
created: 2021-09-13T05:27:37.482-05:00
modified: 2021-11-11T19:42:19.729-06:00
parent: "[[Probability Distribution - UPD Comparisons]]"
children: []
---
<strong>Continuity Correction</strong> is needed when we approximate a discrete distribution by a continuous distribution (e.g. [[Binomial Distribution - Approximating With Normal Distribution|approximating Binomial with Normal]]). When a continuous distribution is approximated by another continuous distribution (e.g approximating Gamma with Normal), the continuity correction is not needed. In fact, it would be an error to use it in this case because it would no longer preserve the probability

Recall that the probability P{X=x} may be positive if X is discrete, whereas it is always 0 for continuous X. Thus, direct use of

> [!indent]
> ![[Continuity Correction - Approximating Discrete Distribution with Continuous Distribution/continuity-correction-binomial-normal-approximation.png|340]]

will always approximate this probability by 0. It is obviously a poor approximation.

This is resolved by introducing a continuity correction. Expand the interval by 0.5 units in each direction, then use the Normal approximation. Notice that

> [!indent]
> ![[Continuity Correction - Approximating Discrete Distribution with Continuous Distribution/continuity-correction-example.png|340]]

is true for a Binomial variable X; therefore, the continuity correction does not change the event and preserves its probability. It makes a difference for the Normal distribution, so every time when we approximate some discrete distribution with some continuous distribution, we should be using a continuity correction. Now it is the probability of an interval instead of one number, and it is not zero
# Example

A new computer virus attacks a folder consisting of 200 files. Each file gets damaged with a probability 0.2 independently of other files.

What is the probability that fewer than 50 files get damaged?

> [!expand]- solution
> The number X of damaged files has Binomial distribution with:
> - n = 200
> - p = 0.2
> - μ = np = 40
> - σ = √\[np(1 − p)\] = 5.657
>
> compute actual probability using Binomial probability mass function
> - <strong>𝑃</strong> {𝑋\<50} = ∑<sub>0≤𝑖≤49</sub>\[200 choose 𝑖\] \* (0.2)<sup>(𝑖)</sup> \* (0.8)<sup>(200 - 𝑖)</sup>
> - <strong>𝑃</strong> {𝑋\<50} = 0.95064666..
>
> estimate probability using [[Central Limit Theorem (CLT)]] WITHOUT continuity correction
> - <strong>𝑃</strong> {𝑋\<50} = <strong>𝑃</strong> {(𝑋-40)/5.657 \< (50-40)/5.657}
> - <strong>𝑃</strong> {𝑋\<50} = ɸ(1.767721407)
> - <font style="color: rgb(255,0,0);"><strong>𝑃</strong> {𝑋\<50} = 0.9614 ← OFF!!</font>
>
> estimate probability using [[Central Limit Theorem (CLT)]] WITH continuity correction
> - <strong>𝑃</strong> {𝑋\<50} = <strong>𝑃</strong> {𝑋\<49.5}
> - <strong>𝑃</strong> {𝑋\<50} = <strong>𝑃</strong> {(𝑋-40)/5.657 \< (49.5-40)/5.657}
> - <strong>𝑃</strong> {𝑋\<50} = ɸ(1.679335337)
> - <strong>𝑃</strong> {𝑋\<50} = 0.9535
>
> Notice that the properly applied continuity correction replaces 50 with 49.5, not 50.5. Indeed, we are interested in the event that X is strictly less than 50. This includes all values up to 49 and corresponds to the interval \[0, 49\] that we expand to \[0, 49.5\]. In other words, events {X \< 50} and {X \< 49.5} are the same; they include the same possible values of X. Events {X \< 50} and {X \< 50.5} are different because the former includes X = 50, and the latter does not. Replacing {X \< 50} with {X \< 50.5} would have changed its probability and would have given a wrong answer

What is the probability that exactly 50 files get damaged?

> [!expand]- Click here to expand...
> The number X of damaged files has Binomial distribution with:
> - n = 200
> - p = 0.2
> - μ = np = 40
> - σ = √\[np(1 − p)\] = 5.657
>
> compute actual probability using Binomial probability mass function
> - <strong>𝑃</strong> {𝑋=50} = \[200 choose 50\] \* (0.2)<sup>50</sup> \* (0.8)<sup>150</sup>
> - <strong>𝑃</strong> {𝑋=50} = 0.014856..
>
> estimate probability using [[Central Limit Theorem (CLT)]] WITHOUT continuity correction
> - <strong>𝑃</strong> {𝑋=50} = <strong>𝑃</strong> {50\<𝑋\<50}
> - <strong>𝑃</strong> {𝑋=50} = <strong>𝑃</strong> {𝑋\<50} - <strong>𝑃</strong> {𝑋\<50}
> - <font style="color: rgb(255,0,0);"><strong>𝑃</strong> {𝑋=50} = 0 ← WRONG!!</font>
>
> estimate probability using [[Central Limit Theorem (CLT)]] WITH continuity correction
> - <strong>𝑃</strong> {𝑋=50} = <strong>𝑃</strong> {49.5\<𝑋\<50.5}
> - <strong>𝑃</strong> {𝑋=50} = <strong>𝑃</strong> {𝑋\<50.5} - <strong>𝑃</strong> {𝑋\<49.5}
> - <strong>𝑃</strong> {𝑋=50} = ɸ(1.856107477) - ɸ(1.679335337)
> - <strong>𝑃</strong> {𝑋=50} = 0.9683 - 0.9535
> - <strong>𝑃</strong> {𝑋=50} = 0.0148
