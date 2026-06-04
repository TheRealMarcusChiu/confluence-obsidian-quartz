---
title: "Binomial Distribution"
created: 2021-09-13T05:27:31.021-05:00
modified: 2023-10-23T16:18:04.368-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children: []
---
###### Binomial Distribution
````excerpt
- is the number of successes in a sequence of 𝑛 independent [[Bernoulli Distribution|Bernoulli trials]]
- its parameters are:
	- 𝑛 - the number of trials
	- 𝑝 - the probability of success on each trial
- sampling 𝑛 trials WITH REPLACEMENT (as oppose to [[Hypergeometric Distribution|hypergeometric distribution]])
````
^excerpt

# Binomial Distribution - 4 Conditions
1. The experiment consists of 𝑛 identical trials.
2. Each trial results in one of the two outcomes, called success and failure.
3. The probability of success, denoted 𝑝, remains the same from trial to trial.
4. The 𝑛 trials are independent.

# Recognizing Binomial Variables

> [!expand]- Click here to expand...
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "example",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "X = Binomial Variable?",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "why",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "in a game involving a standard deck of 52 playing cards, an individual randomly draws 7 cards without replacement.\n\n<strong>let X = the number of aces drawn</strong>",
>       "NO",
>       "trials are not independent"
>     ],
>     [
>       "60% of a certain species of tomato live after transplanting from pot to garden. Eli transplants 16 of these tomato plants. Assume that the plants live independently of each other\n\n<strong>let X = the number of tomato plants that live</strong>",
>       "YES",
>       "fulfills all 4 conditions"
>     ],
>     [
>       "in a game of luck, a turn consists of a player continuing to roll a pair of six-sided dice until they roll a double (2 same face values)\n\n<strong>let X = the number of rolls in one turn</strong>",
>       "NO",
>       "number of trials is not fixed"
>     ]
>   ]
> }
> ```
# Probability Mass Function

𝐏(𝐗=𝑥|𝑛) defines the probability of obtaining exactly 𝑥 successes out of 𝑛 [[Bernoulli Distribution|Bernoulli trials]] 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>, where 𝑝 is the probability of success for a Bernoulli trial (i.e. 𝐏(𝑋<sub>𝑖</sub>=1) = 𝑝)
- 𝐏(𝐗=𝑥;𝑛,𝑝) = \[𝑛!/(𝑥!(𝑛-𝑥)!\] \* 𝑝<sup>𝑥</sup> \* (1-𝑝)<sup>(𝑛-𝑥)</sup>

> [!expand]- Click here to expand...
> - 𝐏(𝐗=𝑥|𝑛) = \[[[Combination Without Replacement (Binomial Coefficient - n Choose k)|𝑛 choose 𝑥]]\] \* prob-of-𝑥-success \* prob-of-(𝑛-𝑥)-failures
> - 𝐏(𝐗=𝑥|𝑛) = \[𝑛 choose 𝑥\] \* 𝐏(𝑋=1)<sup>𝑥</sup> \* 𝐏(𝑋=0)<sup>(𝑛-𝑥)</sup>
> - 𝐏(𝐗=𝑥|𝑛) = \[𝑛 choose 𝑥\] \* 𝑝<sup>𝑥</sup> \* (1-𝑝)<sup>(𝑛-𝑥)</sup>
> - 𝐏(𝐗=𝑥|𝑛) = \[𝑛!/(𝑥!(𝑛-𝑥)!\] \* 𝑝<sup>𝑥</sup> \* (1-𝑝)<sup>(𝑛-𝑥)</sup>
# Cumulative Distribution Function

= 𝐼<sub>𝑞</sub>(𝑛-𝑥, 1+𝑥)

where:
- 𝐼 is the [[Incomplete Beta Function - Regularized Incomplete Beta Function|Regularized Incomplete Beta Function]]
- 𝑞 = 1 - 𝑝

# Expectation

𝐄\[𝐗\] = 𝑛𝑝

> [!expand]- Click here to expand...
> The expectation of 1 Bernoulli Variable 𝑋<sub></sub>with a probability of success 𝐏(𝑋=1) = 𝑝:
> - 𝐄\[𝑋\] = 𝛴<sub>𝑥∊𝑋</sub>\[𝑥·𝐏(𝑋=𝑥)\]
> - 𝐄\[𝑋\] = (0)𝐏(𝑋<sub>𝑖</sub>=0) + (1)𝐏(𝑋<sub>𝑖</sub>=1)
> - 𝐄\[𝑋\] = (0)(1−𝑝) + (1)(𝑝)
> - 𝐄\[𝑋\] = 𝑝
>
> The expectation of 𝑛 Bernoulli Variables 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub> (i.e. Binomial Variable <strong>𝐗</strong>):
> - 𝐄\[𝐗\] = 𝐄\[𝑋<sub>1</sub>+ ... + 𝑋<sub>𝑛</sub>\]
> - 𝐄\[𝐗\] = 𝐄\[𝑋<sub>1</sub>\] + ... + 𝐄\[𝑋<sub>𝑛</sub>\]
> - 𝐄\[𝐗\] = 𝑝 + ... + 𝑝
> - 𝐄\[𝐗\] = 𝑛𝑝
# Variance

𝑉𝑎𝑟(𝐗) = 𝑛𝑝(1-𝑝)

> [!expand]- Click here to expand...
> variance of 1 Bernoulli Variable 𝑋<sub>𝑖</sub>with probability of success 𝐏(𝑋<sub>𝑖</sub>=1) = 𝑝
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = 𝐄\[(𝑥 − 𝐄\[𝑋<sub>𝑖</sub>\])<sup>2</sup>\]
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = 𝛴<sub>𝑥∊𝑋<sub>𝑖</sub></sub>\[(𝑥 − 𝐄(𝑋<sub>𝑖</sub>))<sup>2</sup>𝐏(𝑋<sub>𝑖</sub>=𝑥)\]
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = 𝛴<sub>𝑥∊𝑋<sub>𝑖</sub></sub>\[(𝑥−𝑝)<sup>2</sup>𝐏(𝑋<sub>𝑖</sub>=𝑥)\]
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = (0−𝑝)<sup>2</sup>𝐏(𝑋<sub>𝑖</sub>=0) + (1−𝑝)<sup>2</sup>𝐏(𝑋<sub>𝑖</sub>=1)
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = (0−𝑝)<sup>2</sup>(1−𝑝) + (1−𝑝)<sup>2</sup>𝑝
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = 𝑝<sup>2</sup>(1−𝑝) + (1−𝑝)<sup>2</sup>𝑝
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = (1−𝑝)(𝑝<sup>2</sup> + (1−𝑝)𝑝)
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = (1−𝑝)(𝑝<sup>2</sup> + 𝑝 − 𝑝<sup>2</sup>)
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = (1−𝑝)(𝑝)
> - 𝑉𝑎𝑟(𝑋<sub>𝑖</sub>) = 𝑝(1−𝑝)
>
> variance of 𝑛 Bernoulli Variables 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub> (i.e. Binomial Variable <strong>𝐗</strong>):
> - 𝑉𝑎𝑟(𝐗) = 𝑉𝑎𝑟(𝑋<sub>1</sub>+ ... + 𝑋<sub>𝑛</sub>)
> - 𝑉𝑎𝑟(𝐗) = 𝑉𝑎𝑟(𝑋<sub>1</sub>) + ... + 𝑉𝑎𝑟(𝑋<sub>𝑛</sub>)
> - 𝑉𝑎𝑟(𝐗) = 𝑝(1−𝑝) + ... + 𝑝(1−𝑝)
> - 𝑉𝑎𝑟(𝐗) = 𝑛𝑝(1-𝑝)
# Moment-Generating Function$M_X(t) = [1-p+pe^t]^n$

See: [[Moment-Generating Function - Binomial Distribution]]
# Subpages
- [[Geometric Distribution vs Binomial Distribution]]
- [[Negative Binomial Distribution vs Binomial Distribution]]
- [[Binomial Distribution vs Poisson Distribution]]
- [[Binomial Distribution Special Cases - (Poisson Distribution and Normal Distribution)]]
