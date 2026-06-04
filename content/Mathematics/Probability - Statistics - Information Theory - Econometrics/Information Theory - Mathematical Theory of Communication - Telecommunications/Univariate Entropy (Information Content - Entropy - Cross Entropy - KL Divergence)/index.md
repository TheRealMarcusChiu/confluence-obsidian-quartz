---
title: "Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)"
created: 2021-09-13T05:26:27.462-05:00
modified: 2024-08-24T16:19:48.460-05:00
parent: "[[Information Theory - Mathematical Theory of Communication - Telecommunications]]"
children:
  - "[[Maximum Entropy (Maxent) Models]]"
  - "[[Modeling - KL Divergence vs Reverse KL Divergence]]"
---
###### Entropy
- is a measure of how close a system is to equilibrium (higher means more equal)

###### Information Entropy
- is a measure of the amount of disorder/stochasticity/noise in the distribution
	- lower entropy implies distribution mass/density is on a few instances
	- larger entropy implies distribution mass/density is more evenly spread out (similar to [[Uniform Distribution|uniform distribution]])
- is the MINIMAL number of bits needed, on average, to encode the information produced by a:
	- stochastic source of data
	- stochastic/probability distribution
	- random variable

![](https://www.youtube.com/watch?v=ErfnhcEV1O8&t=5s)
# Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)

```merge-table
{
  "rows": [
    [
      "<strong>Information Content </strong>ℎ(𝑋=𝑥) - a measure of information content of an [[Probability Spaces (Sample Space - Event Space - Probability Measure)|outcome]] 𝑥. (optimal) minimal number of bits to encode outcome 𝑥\n\n> [!expand]- Click here to expand...\n> - ℎ<sub>𝑥\\~</sub><sub>𝑃</sub>(𝑋=𝑥) = 𝑙𝑔 \\[1/𝑃(𝑋=𝑥)\\]\n> - ℎ<sub>𝑥\\~</sub><sub>𝑃</sub>(𝑋=𝑥) = - 𝑙𝑔 𝑃(𝑋=𝑥)\n\n<strong>Entropy </strong>𝐻<sub>𝑃</sub>(𝑃) or 𝐻(𝑃) - is the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expected value]] of the information content of a [[Probability Distributions|probability distribution]] 𝑃. the average length of communicating an event from a distribution 𝑃 with the optimal code for the same distribution 𝑃\n\n> [!expand]- Click here to expand...\n> - 𝐻<sub>𝑃</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ ℎ(𝑋=𝑥) \\]\n> - 𝐻<sub>𝑃</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ 𝑙𝑔 \\[1/𝑃(𝑋)\\] \\]\n> - 𝐻<sub>𝑃</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ - 𝑙𝑔 𝑃(𝑋) \\]\n> - when 𝑃 is a [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete probability distribution]]\n> \t- 𝐻<sub>𝑃</sub>(𝑃) = - 𝛴<sub>𝑥∊𝑋</sub>\\[ 𝑃(𝑋=𝑥) 𝑙𝑔 𝑃(𝑋=𝑥) \\]\n> - when 𝑃 is a [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|continuous probability distribution]] (𝐻(𝑃) is known as <strong>continuous/differential entropy</strong>)\n> \t- 𝐻<sub>𝑃</sub>(𝑃) = - <sub>𝑠𝑡𝑎𝑟𝑡</sub>∫<sup>𝑒𝑛𝑑</sup> 𝑃(𝑋=𝑥) 𝑙𝑔 𝑃(𝑋=𝑥) 𝑑𝑥\n\n<strong>Cross Entropy </strong>𝐻<sub>𝑄</sub>(𝑃) - the average length of communicating an event from one distribution 𝑃 with the optimal code for another distribution 𝑄\n\n> [!expand]- Click here to expand...\n> - if the distributions 𝑃 and 𝑄 are SAME then the <strong>cross-entropy</strong> = <strong>entropy</strong> of 𝑃 = <strong>entropy</strong> of 𝑄\n> \t- 𝐻<sub>𝑃</sub>(𝑄) = 𝐻<sub>𝑄</sub>(𝑃) = 𝐻<sub>𝑃</sub>(𝑃) = 𝐻<sub>𝑄</sub>(𝑄)\n> - the more different the distributions 𝑃 and 𝑄 are:\n> \t- the more the <strong>cross-entropy</strong> of 𝑃 with respect to 𝑄 will be bigger than the <strong>entropy</strong> of 𝑃\n> \t\t- 𝐻<sub>𝑄</sub>(𝑃) \\> 𝐻<sub>𝑃</sub>(𝑃)\n> \t- the more the <strong>cross-entropy</strong> of 𝑄 with respect to 𝑃 will be bigger than the <strong>entropy</strong> of 𝑄\n> \t\t- 𝐻<sub>𝑃</sub>(𝑄) \\> 𝐻<sub>𝑄</sub>(𝑄)\n> - cross-entropy is not symmetric: 𝐻<sub>𝑄</sub>(𝑃) ≠ 𝐻<sub>𝑃</sub>(𝑄)\n> - 𝐻<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ ℎ<sub>𝑄</sub>(𝑋) \\]\n> - 𝐻<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ 𝑙𝑔 \\[1/𝑄(𝑋)\\] \\]\n> - 𝐻<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ - 𝑙𝑔 𝑄(𝑋) \\]\n> - when 𝑃 and 𝑄 are [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete probability distributions]]\n> \t- 𝐻<sub>𝑄</sub>(𝑃) = - 𝛴<sub>𝑥∊𝑋</sub>\\[ 𝑃(𝑋=𝑥) 𝑙𝑔 𝑄(𝑋=𝑥) \\]\n> - when 𝑃 and 𝑄 are [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|continuous probability distributions]] (𝐻<sub>𝑄</sub>(𝑃) is known as <strong>continuous/differential cross entropy</strong>)\n> \t- 𝐻<sub>𝑄</sub>(𝑃) = - <sub>𝑠𝑡𝑎𝑟𝑡</sub>∫<sup>𝑒𝑛𝑑</sup> 𝑃(𝑋=𝑥) 𝑙𝑔 𝑄(𝑋=𝑥) 𝑑𝑥\n> - often compared as [[MLE - Relation to (Cross Entropy & Relative Entropy)|negative log-likelihood]]\n> \t- 𝐻<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋,𝑌\\~</sub><sub>𝑃</sub>\\[ - 𝑙𝑔 𝑄(𝑌|𝑋) \\] <font style=\"color: rgb(128,128,128);\">\\# likelihood function = 𝑄(𝑌|𝑋)</font>\n\n<strong>Relative Entropy </strong>or<strong> Kullback-Leibler (KL) Divergence </strong>𝐷<sub>𝐾𝐿</sub>(𝑃||𝑄) or 𝐷<sub>𝑄</sub>(𝑃) - measures the \"distance\" between 2 distributions (see: [[Divergences|divergence]])\n\n> [!expand]- Click here to expand...\n> - 𝐷<sub>𝑄</sub>(𝑃) = 𝐻<sub>𝑄</sub>(𝑃) - 𝐻<sub>𝑃</sub>(𝑃)\n> - 𝐷<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ 𝑙𝑔\\[1/𝑄(𝑋)\\] \\] - 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ 𝑙𝑔\\[1/𝑃(𝑋)\\] \\]\n> - 𝐷<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub><strong>\\[</strong> 𝑙𝑔\\[1/𝑄(𝑋)\\] - 𝑙𝑔\\[1/𝑃(𝑋)\\] <strong>\\]</strong>\n> - 𝐷<sub>𝑄</sub>(𝑃) = 𝐄<sub>𝑋\\~</sub><sub>𝑃</sub>\\[ 𝑙𝑔\\[𝑃(𝑋)/𝑄(𝑋)\\] \\]\n>\n> if we have 2 separate [[Probability Distributions|probability distributions]] 𝑃 and 𝑄 over the same random variable 𝑥, we can measure the distance between 𝑃 and 𝑄 using the KL Divergence\n> - if the distributions 𝑃 and 𝑄 are DIFF then the <strong>KL-Divergence </strong>\\> 0\n> - if the distributions 𝑃 and 𝑄 are SAME then the <strong>KL-Divergence</strong> = 0\n>\n> Because the KL Divergence is non-negative and measures the difference between two distributions, it is often conceptualized as some sort of [[Distance Measures／Metrics／Semi-Metrics／Functions|distance measure]] between these distributions. However, it is not a true [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]] because it is not symmetric:\n> - 𝐷<sub>𝑄</sub>(𝑃) ≠ 𝐷<sub>𝑃</sub>(𝑄)\n>\n> using [[Modeling - KL Divergence vs Reverse KL Divergence|KL Divergence for modeling]]\n###### Bringing It All Together\n![[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)/CrossEntropyQP.png|200]]![[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)/CrossEntropyPQ.png|200]]",
      "![](https://www.youtube.com/watch?v=KHVR587oW8I)"
    ]
  ]
}
```
# Multivariate Entropy

see: [[Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)|Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information / Information Gain - Variation of Information)]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://colah.github.io/posts/2015-09-Visual-Information/#fn4](https://colah.github.io/posts/2015-09-Visual-Information/#fn4)
