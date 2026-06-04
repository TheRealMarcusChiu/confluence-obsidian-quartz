---
title: "Hypergeometric Distribution"
created: 2021-09-13T05:27:33.931-05:00
modified: 2023-10-23T16:23:00.074-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children:
  - "[[Hypergeometric Distribution Derivation]]"
---
###### Hypergeometric Distribution
````excerpt
- is a [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete probability distribution]]
- sampling 𝑛 trials WITHOUT REPLACEMENT (as oppose to [[Binomial Distribution|binomial distribution]])
- the number of success in 𝑛 trials
- is used to calculate probabilities of [[Combination Without Replacement (Binomial Coefficient - n Choose k)|combinations without replacement]]
````
^excerpt

# Probability Mass Function

𝑃(𝑋=𝑘) is the probability of obtaining exactly 𝑥 successes
- $P(X=𝑘) = \frac{(_KC_x)(_{(N-K)}C_{(n-x)})}{_NC_n}$

where:
- 𝑁 is the size of the population
- 𝐾 is the number of "successes" in the population
- 𝑛 is the size of the sample
- 𝑘 is the number of "successes" in the sample
- <sub>𝑖</sub>𝐶<sub>𝑗</sub> is the number of [[Combination Without Replacement (Binomial Coefficient - n Choose k)|combinations without replacement]] of taking 𝑗 things from a set of 𝑖 things

# Expectation

𝐄(𝑋) = 𝑛 (𝐾/𝑁)
# Variance

𝑉𝑎𝑟(𝑋) = 𝑛 𝐾(𝑁-𝐾) (𝑁-𝑛) / \[𝑁<sup>2</sup>(𝑁-1)\]

𝑉𝑎𝑟(𝑋) = 𝑛 𝑝(1-𝑝) \[1 - (𝑛-1)/(𝑁-1)\]

where:
- 𝑝 = (𝐾/𝑁)
- \[1 - (𝑛-1)/(𝑁-1)\] is the "finite population correction factor"

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Hypergeometric Distribution Example
Suppose you first randomly sample one card from a deck of 52. Then, without putting the card back in the deck you sample a second and then (again without replacing cards) a third. Given this sampling procedure, what is the probability that exactly two of the sampled cards will be aces (4 of the 52 cards in the deck are aces). You can calculate this probability using the following formula based on the hypergeometric distribution:

In this example:
- 𝑁 = 52 because there are 52 cards in a deck
- 𝐾 = 4 because there are four aces in the deck
- 𝑛 = 3 because 3 cards were sampled
- 𝑘 = 2 because the problem asks about the probability of getting two aces

Therefore,
- $P(X=2) = \frac{(_4C_2)(_{(52-4)}C_{(3-2)})}{_{52}C_3}$
- $P(X=2) = \frac {\frac{4!}{2!2!} \frac{48!}{1!47!}} {\frac{52!}{3!49!}}$
- $P(X=2) = 0.013$
