---
title: "Hazard Probability Function"
created: 2021-09-13T05:27:39.011-05:00
modified: 2021-09-13T05:27:39.011-05:00
parent: "[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions]]"
children: []
---
reading prerequisites: [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|Probability Distribution Function Variants - Probability/Mass/Density/Cumulative/Survivor/Hazard/Cumulative-Hazard/Inverse/Moment-Generating Distribution Functions]]

<strong>Hazard Probability Function</strong> is used to express the "risk" that a component fails at time t (note: a component fails fluctuates based on time)
### Hazard Function (∆t dependent)
> <span style="white-space: pre-wrap"><code>h(t, ∆t) = P(t ≤ T ≤ t + ∆t | T ≥ t)</code></span>

[[Probability]] of random variable<font style="color: rgb(128,128,128);"> T</font> being within<font style="color: rgb(128,128,128);"> t</font> and <font style="color: rgb(128,128,128);">t + ∆t</font>, given that random variable <font style="color: rgb(128,128,128);">T</font> is greater than or equal to <font style="color: rgb(128,128,128);">t</font>

<font style="color: rgb(0,51,102);">To make <font style="color: rgb(112,112,112);">P(t ≤ T ≤ t + ∆t | T ≥ t)</font> independent of </font>∆t, we consider the limit ∆t → 0. Then, however, the probability would always tend to 0. To avoid this, we divide it by ∆t, thus obtaining a quantity that is similar in spirit to the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability-density-function]]. This gives the definition:
### Hazard Function (∆t independent)
> <span style="white-space: pre-wrap"><code>h(t) = lim  P(t ≤ T ≤ t + ∆t | T ≥ t) / ∆t</code><br><code>       ∆t→0</code></span>
> 
> 
> h(t) = pdf(t) / ∫<sub>-t</sub><sup>∞</sup>pdf(t)dt

where:
- pdf = probability density function

since a typical probability-density-function sooner or later starts decreasing with time, this effect tends to diminish the hazard as t increases. On the other hand, the denominator decreases as t increases, which will increase the hazard. These 2 opposing effects can balance each other in different ways.
### Hazard Function (special case)

a special case when they precisely balance each other is the <strong>exponential distribution</strong>, where the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability-density-function]] is of the form:
> <span style="white-space: pre-wrap"><code>pdf(t) = ke⁻ᵏᵗ</code></span>

In this case the hazard function obtained is a constant:
> <span style="white-space: pre-wrap"><code>h(t) = k</code></span>
### Hazard Function (Common Properties)

In many cases the hazard function has a bathtub shape that consists of 3 parts:
- initial "burn-in" period, when the hazard is relatively large, due to potential manufacturing defects that result in early failure
- steady part with approximately constant hazard function
- aging with increasing hazard

![[Hazard Probability Function/hazard-function.png|296x250]]
