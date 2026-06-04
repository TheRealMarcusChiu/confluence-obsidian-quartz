---
title: "Conditional／Discriminative Random Fields (CRF)"
created: 2021-09-13T05:26:50.395-05:00
modified: 2023-06-04T09:37:15.541-05:00
parent: "[[MN／MRF - Variants (Gibbs Distribution)]]"
children:
  - "[[First-Order Linear Chain CRF]]"
  - "[[Second-Order Linear Chain CRF]]"
---
###### Conditional/Discriminative Random Fields (CRF)
````excerpt
- a type of [[PGM - Model Types|probabilistic graphical model]]
- is a type of [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]
- used for capturing/estimating the conditional distribution 𝐏(𝒀=𝒚|𝑿=𝒙) <font style="color: rgb(128,128,128);">\# no need to model the correlation between variables in 𝑿, only focusing on target variables 𝒀. This allows models with highly expressive features without worrying about wrong independencies</font>
- parameterized the same as [[PGM - Gibbs Distribution|Gibbs Distribution]], but normalized differently
- a special case of a [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Random Field (MRF)]] where the [[MN／MRF - Potential Functions (𝜙)|factor/clique potentials]] are CONDITIONED on input 𝑿=𝒙
	- see: [[Conditional Random Field (CRF) vs Markov Random Field (MRF)]]
- a generalization of [[Logistic (Logit) Regression Model|Logistic Regression Model]] to have structured outputs, like chains, trees, or grids
	- see: [[Conditional Random Field (CRF) vs Logistic Regression Model]]
````
^excerpt

# CRF - Formula

formulas <font style="color: rgb(128,128,128);">𝜙<sub>𝑗</sub>(𝒚, 𝒙) = 𝑒<sup>𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚, 𝒙)</sup></font>
- 𝐏(𝒀=𝒚|𝑿=𝒙) = 𝛱<sub>0≤𝑗≤𝑘</sub>\[ 𝜙<sub>𝑗</sub>(𝒚, 𝒙) \] / 𝑍(𝒙)
- 𝐏(𝒀=𝒚|𝑿=𝒙) = 𝛱<sub>0≤𝑗≤𝑘</sub>\[ 𝑒<sup>𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚, 𝒙)</sup>\] / 𝑍(𝒙)
- 𝐏(𝒀=𝒚|𝑿=𝒙) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚, 𝒙) \]</sup> / 𝑍(𝒙)

where:
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝑘</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝛱<sub>0≤𝑗≤𝑘</sub>\[ 𝜙<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝐾</sub>, 𝒙) \] <strong>\]</strong>
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝛱<sub>0≤𝑗≤𝑘</sub>\[ 𝑒<sup>𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝐾</sub>, 𝒙)</sup> \] <strong>\]</strong>
- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝐾</sub>, 𝒙) \]</sup><strong>\]</strong>
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝐽</sub>}",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝒀 = {𝑌<sub>1</sub> , ..., 𝑌<sub>𝐾</sub>}",
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      "source/input/observed variables",
      "target/output/hidden variables"
    ],
    [
      {
        "content": "Example 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      "pixel values and processed features",
      "class for every pixel"
    ],
    [
      {
        "content": "Example 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      "words in a sentence",
      "labels for every word"
    ]
  ]
}
```

(𝒀,𝑿) is a CRF when each of the random variables 𝑌<sub>𝑖</sub>, conditioned on 𝑿, obeys the [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Markov Property]] with respect to the graph. Thus, a CRF is a Random Field globally conditioned on the observation 𝑿. Where the hidden variables 𝒀 are globally conditioned on the observed variables 𝑿
# CRF - Graphical Model
![[Conditional／Discriminative Random Fields (CRF)/log-linear-model.png|400]]
# CRF - Variants

```merge-table
{
  "rows": [
    [
      {
        "content": "[[First-Order Linear Chain CRF]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Second-Order Linear Chain CRF]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<strong>Generic CRF</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "simple CRF where hidden variables are aligned in chains",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "graph of arbitrary structure as long as it represents the label sequences being modeled",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Conditional／Discriminative Random Fields (CRF)/linear-chain-conditional-random-field.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Conditional／Discriminative Random Fields (CRF)/second-order-linear-chain-conditional-random-field.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Conditional／Discriminative Random Fields (CRF)/general-conditional-random-field.png|301]]",
        "align": "center"
      }
    ],
    [
      "- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \\]</sup> / 𝑍(𝒙)\n- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>, 𝑦<sub>𝑖</sub>, 𝒙) \\]</sup> <strong>\\]</strong>",
      "- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚,𝒙) \\]</sup> / 𝑍(𝒙)\n- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑘</sub>, 𝒙) \\]</sup> <strong>\\]</strong>",
      "- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚, 𝒙) \\]</sup> / 𝑍(𝒙)\n- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝐾</sub>, 𝒙) \\]</sup><strong>\\]</strong>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# CRF - Example Use
[[Part-of-Speech (PoS) Tagging]]

![[Conditional／Discriminative Random Fields (CRF)/conditional-random-field-log-linear-model-example.png|600]]

[[conditional-random-field-log-linear-model-example.drawio]]
# CRF - Comparisons
- [[Conditional Random Field (CRF) vs Markov Random Field (MRF)]]
- [[Conditional Random Field (CRF) vs Logistic Regression Model]]
- [[Conditional Random Field (CRF) vs Linear Chain CRF]]

# CRF - Resources
- [Daphne Koller - YouTube video](https://www.youtube.com/watch?v=rc3YDj5GiVM)
- [Hugo Larochelle - YouTube](https://www.youtube.com/watch?v=GF3iSJkgPbA&ab_channel=HugoLarochelle)
- [David Batista - Article](http://www.davidsbatista.net/blog/2017/11/13/Conditional_Random_Fields/)
