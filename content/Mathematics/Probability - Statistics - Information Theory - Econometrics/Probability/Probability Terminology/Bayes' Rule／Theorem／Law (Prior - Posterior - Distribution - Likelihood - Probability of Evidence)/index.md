---
title: "Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)"
created: 2021-09-13T05:28:32.119-05:00
modified: 2022-02-12T18:16:27.785-06:00
parent: "[[Probability Terminology]]"
children:
  - "[[Bayes Factor - Likelihood Ratio]]"
  - "[[Conjugate Prior]]"
  - "[[Inverse Problem & Bayes' Theorem]]"
  - "[[Naive Bayes Model - Bayes Model]]"
  - "[[What is Bayes' Theorem]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Bayes' Rule in [[Probability]] Form",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bayes' Rule in [[Probability vs Odds|Odds]] Form",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝐏(𝑋|𝐸) = 𝐏(𝑋)𝐏(𝐸|𝑋) / 𝐏(𝐸)\n𝐏(𝑋|𝐸) = (𝑃𝑟𝑖𝑜𝑟)([[Sensitivity vs Specificity|𝑆𝑒𝑛𝑠𝑖𝑡𝑖𝑣𝑖𝑡𝑦]]) / [(𝑃𝑟𝑖𝑜𝑟)(𝑆𝑒𝑛𝑠𝑖𝑡𝑖𝑣𝑖𝑡𝑦) + (1 - 𝑃𝑟𝑖𝑜𝑟)([[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|𝐹𝑃𝑅]])]",
      "𝐎(𝑋|𝐸) = 𝐎(𝑋)\\[[[Bayes Factor - Likelihood Ratio|𝐵𝑎𝑦𝑒𝑠 𝐹𝑎𝑐𝑡𝑜𝑟]]\\]\n𝐎(𝑋|𝐸) = 𝐎(𝑋)\\[𝑆𝑒𝑛𝑠𝑖𝑡𝑖𝑣𝑖𝑡𝑦/𝐹𝑃𝑅\\]"
    ],
    [
      "𝐏(𝑋|𝐸<sub>1</sub>,𝐸<sub>2</sub>) = 𝐏(𝑋)𝐏(𝐸<sub>1</sub>,𝐸<sub>2</sub>|𝑋) / 𝐏(𝐸<sub>1</sub>,𝐸<sub>2</sub>)",
      "𝐎(𝑋|𝐸<sub>1</sub>,𝐸<sub>2</sub>) = 𝐎(𝑋)[𝐵𝑎𝑦𝑒𝑠 𝐹𝑎𝑐𝑡𝑜𝑟 1][𝐵𝑎𝑦𝑒𝑠 𝐹𝑎𝑐𝑡𝑜𝑟 2]"
    ]
  ]
}
```
# Bayes' Theorem - Diagram

with: [[AI Chapter 13 - Quantifying Uncertainty|prior and posterior probabilities]] and [[AI Chapter 13 - Quantifying Uncertainty|normalization constant]]

![[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)/bayes' theorem.jpg]]
# Bayes' Theorem - Derivation

the [[AI Chapter 13 - Quantifying Uncertainty|product rule]] can be written in 2 ways:
- 𝐏(𝑌,𝑋) = 𝐏(𝑋|𝑌)𝐏(𝑌)
- 𝐏(𝑌,𝑋) = 𝐏(𝑌|𝑋)𝐏(𝑋)

equating the two right-hand sides, we get <strong>Bayes' Rule/Theorem/Law</strong>:
- 𝐏(𝑌|𝑋) = 𝐏(𝑋|𝑌)𝐏(𝑌) / 𝐏(𝑋)

a more general version conditionalized on some background evidence <strong>e:</strong>
- 𝐏(𝑌|𝑋,<strong>e</strong>) = 𝐏(𝑋|𝑌,<strong>e</strong>) 𝐏(𝑌|e) / 𝐏(𝑋|<strong>e</strong>)

Bayes Theorem allows us to update our belief in a distribution (over one or more variables) 𝑸 = {𝑄<sub>1</sub>, ..., 𝑄<sub>𝑛</sub>}, in the light of new evidence <strong>𝒆</strong> = {<strong>𝑒</strong><sub>1</sub>, ..., 𝑒<sub>𝑛</sub>}
- 𝐏(𝑸|<strong>𝒆</strong>) = 𝐏(<strong>𝒆</strong>|𝑸)𝐏(𝑸) / 𝐏(<strong>𝒆</strong>)

expanded form:
- 𝐏(𝑄<sub>1</sub>, ..., 𝑄<sub>𝑛</sub>|<strong>𝑒</strong><sub>1</sub>, ..., 𝑒<sub>𝑛</sub>) = \[𝐏(<strong>𝑒</strong><sub>1</sub>, ..., 𝑒<sub>𝑛</sub>|𝑄<sub>1</sub>, ..., 𝑄<sub>𝑛</sub>)𝐏(𝑄<sub>1</sub>, ..., 𝑄<sub>𝑛</sub>)\] / \[𝛴<sub>𝑄<sub>1</sub></sub> ... 𝛴<sub>𝑄<sub>𝑛</sub></sub>𝐏(<strong>𝑒</strong><sub>1</sub>, ..., 𝑒<sub>𝑛</sub>|𝑄<sub>1</sub>, ..., 𝑄<sub>𝑛</sub>)𝐏(𝑄<sub>1</sub>, ..., 𝑄<sub>𝑛</sub>)\]
```merge-table
{
  "rows": [
    [
      {
        "content": "Term",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝐏(𝑸)",
      "- prior of <strong>𝑸</strong>",
      "- is a [[Probability Distributions|probability distribution]] or [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint distribution]] that represents your uncertainty over 𝑸 <strong>before </strong>you have sampled any data/evidence and attempted to estimate it"
    ],
    [
      "𝐏(𝑸|𝒆)",
      "- posterior of 𝑸 given 𝒆",
      "- is a [[Conditional Probability Distribution (CPD)|conditional probability distribution]] representing your uncertainty over 𝑸 <strong>after</strong> you have sampled data/evidence"
    ],
    [
      "𝐏(<strong>𝒆</strong>|𝑸)\n𝐋(<strong>𝑸</strong>|<strong>𝒆</strong>)",
      "- likelihood of 𝑸 given 𝒆",
      "- can be defined in 2 ways: [[Likelihood vs Probability|Probability 𝐏(𝒆|𝑸) vs Likelihood 𝐋(𝑸|𝒆)]]\n- given <strong>𝒆</strong>, 𝐏(<strong>𝒆</strong>|𝑸) is a measure of how likely 𝑸 caused <strong>𝒆</strong>"
    ],
    [
      "𝐏(<strong>𝒆</strong>)",
      "- probability of evidence\n- [normalization constant/factor](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+13+-+Quantifying+Uncertainty#AIChapter13-QuantifyingUncertainty-NormalizationConstant(%CE%B1))",
      "- normalizes 𝐏(𝑸|𝒆) so that the resulting probability sums to 1"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Posterior vs Prior

note that the prior is a weighted average of the posteriors, weighted over different instantiations of the evidence:
- 𝐏(𝑸) = 𝛴<sub>𝒆∊𝑬</sub>𝐏(𝑸|𝑬=𝒆)𝐏(𝑬=𝒆)
- 𝑝𝑟𝑖𝑜𝑟 = 𝛴<sub>𝒆∊𝑬</sub>\[𝑝𝑜𝑠𝑡𝑒𝑟𝑖𝑜𝑟\*𝑤𝑒𝑖𝑔ℎ𝑡\]
- 𝑝𝑟𝑖𝑜𝑟 = 𝛴<sub>𝒆∊𝑬</sub>\[𝑤𝑒𝑖𝑔ℎ𝑡𝑒𝑑-𝑝𝑜𝑠𝑡𝑒𝑟𝑖𝑜𝑟\]

thus:
- if the evidence 𝐏(𝑬=𝒆) is LIKELY, then:
	- posterior 𝐏(𝑸|𝑬=𝒆) is a major component in this summation
	- posterior 𝐏(𝑸|𝑬=𝒆) is probably not too far from the prior 𝐏(𝑸)
- if the evidence 𝐏(𝑬=𝒆) is UNLIKELY, then:
	- posterior 𝐏(𝑸|𝑬=𝒆) is negligible component in this summation
	- posterior 𝐏(𝑸|𝑬=𝒆) is not constrained to be similar to the prior 𝐏(𝑸)

# Bayes Box - How Posterior Probability is Updated by Prior Probability and Observed Data

![](https://www.youtube.com/watch?v=mLxDzAsIg7I&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG&index=21)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
