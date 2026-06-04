---
title: "Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)"
created: 2021-09-13T05:26:26.866-05:00
modified: 2022-01-02T21:21:16.748-06:00
parent: "[[Information Theory - Mathematical Theory of Communication - Telecommunications]]"
children: []
---
see: [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)]]

<strong>Entropy</strong> 𝐻(𝑋) = 𝐻<sub>𝑃</sub>(𝑋) = - 𝛴<sub>𝑥∊𝑋</sub>\[ 𝑃(𝑋=𝑥) 𝑙𝑔 𝑃(𝑋=𝑥) \]

<strong>Joint Entropy</strong> 𝐻(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑋,𝑌)

> [!expand]- Click here to expand...
> - 𝐻<sub>𝑃</sub>(𝑋,𝑌) = - 𝛴<sub>𝑥∊𝑋</sub> 𝛴<sub>𝑦∊𝑌</sub>\[ 𝑃(𝑋=𝑥,𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥,𝑌=𝑦) \]
> - joint entropy is very similar to entropy: we could just substitute 𝑃(𝑋,𝑌) with 𝑄(𝑍) and get the entropy formula
> 	- 𝐻<sub>𝑄</sub>(𝑍) = - 𝛴<sub>𝑧∊𝑍</sub> \[ 𝑄(𝑍=𝑧) 𝑙𝑔 𝑄(𝑍=𝑧) \]
> - joint entropy is symmetric
> 	- 𝐻<sub>𝑃</sub>(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑌,𝑋)

<strong>Conditional Entropy</strong> 𝐻(𝑋|𝑌) = 𝐻<sub>𝑃</sub>(𝑋|𝑌)

> [!expand]- Click here to expand...
> - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - 𝛴<sub>𝑦∊𝑌</sub>𝑃(𝑌=𝑦) 𝛴<sub>𝑥∊𝑋</sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥|𝑌=𝑦) \]
> - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - 𝛴<sub>𝑥∊𝑋</sub> 𝛴<sub>𝑦∊𝑌</sub>\[ 𝑃(𝑋=𝑥,𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥|𝑌=𝑦) \]
>
> if values of 𝑋 are completely determined by 𝑌 then:
> - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = 0
>
> conditional entropy of itself 𝐻(𝑋|𝑋) = 0. It is so because entropy is a measure of uncertainty and there is no uncertainty in reasoning on values of 𝑋 given the values of 𝑋:
> - 𝐻<sub>𝑃</sub>(𝑋|𝑋) = 0 = - 𝛴<sub>𝑥∊𝑋</sub> 𝛴<sub><font style="color: rgb(128,0,0);">𝑥</font>∊𝑋</sub>\[ 𝑃(𝑋=𝑥,𝑋=<font style="color: rgb(128,0,0);">𝑥</font>) 𝑙𝑔 𝑃(𝑋=𝑥|𝑋=<font style="color: rgb(128,0,0);">𝑥</font>) \]
> 	- if 𝑥=<font style="color: rgb(128,0,0);">𝑥 </font>then 𝑙𝑔𝑃(𝑋=𝑥|𝑋=<font style="color: rgb(128,0,0);">𝑥</font>) = 0
> 	- if 𝑥≠<font style="color: rgb(128,0,0);">𝑥 </font>then 𝑃(𝑋=𝑥,𝑋=<font style="color: rgb(128,0,0);">𝑥</font>) = 0

<strong>Mutual Information</strong> or <strong>Information Gain</strong> 𝐼(𝑋,𝑌) - information shared between the variables

> [!expand]- Click here to expand...
> - 𝐼<sub>𝑃</sub>(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑋) + 𝐻<sub>𝑃</sub>(𝑌) - 𝐻<sub>𝑃</sub>(𝑋,𝑌)
>
> this definition works because 𝐻<sub>𝑃</sub>(𝑋) + 𝐻<sub>𝑃</sub>(𝑌) has two copies of the mutual information, since it’s in both 𝑋 and 𝑌, while 𝐻<sub>𝑃</sub>(𝑋,𝑌) only has one
>
> or more accurately, 𝐼(𝑋,𝑌) is the measure of reduction in uncertainty about a variable after observing the other:
> - 𝐼<sub>𝑃</sub>(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑋) - 𝐻<sub>𝑃</sub>(𝑋|𝑌) <font style="color: rgb(128,128,128);">\# reduction in uncertainty about 𝑋 after observing 𝑌</font>
> - 𝐼<sub>𝑃</sub>(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑌) - 𝐻<sub>𝑃</sub>(𝑌|𝑋) <font style="color: rgb(128,128,128);">\# reduction in uncertainty about <font style="color: rgb(128,128,128);">𝑌</font> after observing <font style="color: rgb(128,128,128);">𝑋</font></font>
>
> therefore:
> - 𝐼<sub>𝑃</sub>(𝑋,𝑌) ≤ 𝑚𝑖𝑛(𝐻<sub>𝑃</sub>(𝑋), 𝐻<sub>𝑃</sub>(𝑌))
>
> for discrete variables:
> - 𝐼<sub>𝑃</sub>(𝑋,𝑌) = 𝛴<sub>𝑥∊𝑋</sub>𝛴<sub>𝑦∊𝑌</sub><strong>\[</strong> 𝑃(𝑋=𝑥,𝑌=𝑦) 𝑙𝑜𝑔 \[ 𝑃(𝑋=𝑥,𝑌=𝑦) / \[ 𝑃(𝑋=𝑥)𝑃(𝑌=𝑦) \] \] <strong>\]</strong>

<strong>Pointwise Mutual Information</strong> 𝐼<sub>𝑃</sub>(𝑋=𝑥,𝑌=𝑦) - measures how much more do events 𝑥 and 𝑦 co-occur than if they were independent

> [!expand]- Click here to expand...
> 𝐼<sub>𝑃</sub>(𝑋=𝑥,𝑌=𝑦) = 𝑙𝑜𝑔 <strong>\[</strong> 𝑃(𝑋=𝑥,𝑌=𝑦) / \[ 𝑃(𝑋=𝑥)𝑃(𝑌=𝑦) \] <strong>\]</strong>

<strong>Self Information</strong> - mutual information with itself 𝐼<sub>𝑃</sub>(𝑋,𝑋)

> [!expand]- Click here to expand...
> - 𝐼<sub>𝑃</sub>(𝑋,𝑋) = 𝐻<sub>𝑃</sub>(𝑋) - 𝐻<sub>𝑃</sub>(𝑋|𝑋)
> - 𝐼<sub>𝑃</sub>(𝑋,𝑋) = 𝐻<sub>𝑃</sub>(𝑋) <font style="color: rgb(128,128,128);">\# because 𝐻<sub>𝑃</sub>(𝑋|𝑋) = 0 see conditional entropy section</font>

<strong>Variation of Information</strong> 𝑉<sub>𝑃</sub>(𝑋,𝑌) - gives us a metric, a notion of distance, between different variables. The variation of information between two variables is zero if knowing the value of one tells you the value of the other and increases as they become more independent

> [!expand]- Click here to expand...
> - 𝑉<sub>𝑃</sub>(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑋,𝑌) - 𝐼<sub>𝑃</sub>(𝑋,𝑌)
###### Relationship between Entropy, Joint Entropy, & Conditional Entropy

> [!expand]- Click here to expand...
> - 𝐻<sub>𝑃</sub>(𝑋,𝑌) ≥ 𝐻<sub>𝑃</sub>(𝑋) ≥ 𝐻<sub>𝑃</sub>(𝑋|𝑌)
> - 𝐻<sub>𝑃</sub>(𝑋,𝑌) ≥ 𝐻<sub>𝑃</sub>(𝑌) ≥ 𝐻<sub>𝑃</sub>(𝑌|𝑋)
> - 𝐻<sub>𝑃</sub>(𝑋,𝑌) = 𝐻<sub>𝑃</sub>(𝑋|𝑌) + 𝐻<sub>𝑃</sub>(𝑌) = 𝐻<sub>𝑃</sub>(𝑌|𝑋) + 𝐻<sub>𝑃</sub>(𝑋)
>
> from (Joint Entropy - Entropy) → (Conditional Entropy):
> - 𝐻<sub>𝑃</sub>(𝑌|𝑋) = 𝐻<sub>𝑃</sub>(𝑋,𝑌) - 𝐻<sub>𝑃</sub>(𝑋)
> - and
> - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = 𝐻<sub>𝑃</sub>(𝑋,𝑌) - 𝐻<sub>𝑃</sub>(𝑌)
> > [!expand]- Click here to expand...
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - 𝛴<sub>𝑦∊𝑌</sub>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥,𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥,𝑌=𝑦) \] - -𝛴<sub>𝑦∊𝑌</sub>\[ 𝑃(𝑌=𝑦) 𝑙𝑔 𝑃(𝑌=𝑦) \]
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - <strong>\[</strong> 𝛴<sub>𝑦∊𝑌</sub>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥,𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥,𝑌=𝑦) \] - 𝛴<sub>𝑦∊𝑌</sub>\[ 𝑃(𝑌=𝑦) 𝑙𝑔 𝑃(𝑌=𝑦) \] <strong>\]</strong>
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - <strong>\[ </strong>𝛴<sub>𝑦∊𝑌</sub><strong>\[</strong>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥,𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥,𝑌=𝑦) \] - 𝑃(𝑌=𝑦) 𝑙𝑔 𝑃(𝑌=𝑦) <strong>\] \]</strong>
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - <strong>\[</strong>𝛴<sub>𝑦∊𝑌</sub><strong>\[</strong>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦)𝑃(𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥,𝑌=𝑦) \] - 𝑃(𝑌=𝑦) 𝑙𝑔 𝑃(𝑌=𝑦) <strong>\] \]</strong>
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - <strong>\[</strong>𝛴<sub>𝑦∊𝑌</sub>𝑃(𝑌=𝑦) <strong>\[</strong>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥|𝑌=𝑦) \] + 𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) 𝑙𝑔 𝑃(𝑌=𝑦) \] - 𝑙𝑔 𝑃(𝑌=𝑦) <strong>\] \]</strong>
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - <strong>\[</strong>𝛴<sub>𝑦∊𝑌</sub>𝑃(𝑌=𝑦) <strong>\[</strong>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥|𝑌=𝑦) \] + 𝑙𝑔 𝑃(𝑌=𝑦) 𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) \] - 𝑙𝑔 𝑃(𝑌=𝑦) <strong>\] \]</strong>
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - <strong>\[</strong>𝛴<sub>𝑦∊𝑌</sub>𝑃(𝑌=𝑦) <strong>\[</strong>𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥|𝑌=𝑦) \] + 𝑙𝑔 𝑃(𝑌=𝑦) - 𝑙𝑔 𝑃(𝑌=𝑦) <strong>\] \] </strong><font style="color: rgb(128,128,128);">\# 𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) \] = 1</font>
> > - 𝐻<sub>𝑃</sub>(𝑋|𝑌) = - 𝛴<sub>𝑦∊𝑌</sub>𝑃(𝑌=𝑦) 𝛴<sub>𝑥∊𝑋</sub><sub></sub>\[ 𝑃(𝑋=𝑥|𝑌=𝑦) 𝑙𝑔 𝑃(𝑋=𝑥|𝑌=𝑦) \] <font style="color: rgb(128,128,128);">\# definition of conditional entropy</font>
###### KL-Divergence vs Variation of Information

> [!expand]- Click here to expand...
> - <strong>KL Divergence</strong> gives us a distance between two <strong>distributions</strong> over the same variable or set of variables (not symmetric)
> - <strong>Variation of Information</strong> gives us the distance between two jointly distributed <strong>variables</strong> (symmetric)
>
> KL Divergence is between distributions, Variation of Information between variables within a distribution
###### Bringing it All Together
![[Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)/entropy.png|350]]
# Resources
- [https://colah.github.io/posts/2015-09-Visual-Information/#fn4](https://colah.github.io/posts/2015-09-Visual-Information/#fn4)
