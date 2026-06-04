---
title: "Maximum Entropy (Maxent) Models"
created: 2021-09-13T05:26:28.061-05:00
modified: 2021-11-05T17:56:27.887-05:00
parent: "[[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)]]"
children:
  - "[[Feature Overlapping - Feature Interaction - Double／Overcounting Counting]]"
  - "[[Maxent - NLP PoS Example]]"
---
###### Maximum Entropy (Maxent) Models
- applying [[Mathematical Programming／Optimization|Mathematical Programming/Optimization]] where the [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|objective function]] is the entropy formula 𝐻<sub>𝐏</sub>(𝐏) and subjected with any additional constraints

# Maxent Model - Example

let's consider a discrete random variable 𝐶 with 2 outcomes: ℎ and 𝑡
- 𝐏(𝐶=ℎ) = probability of seeing heads
- 𝐏(𝐶=𝑡) = probability of seeing tails

below is the formula for [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|univariate entropy]], in which we want to maximize 𝐻<sub>𝐏</sub>(𝐏) with respect to the constraints of the model
- 𝐻<sub>𝐏</sub>(𝐏) = 𝛴<sub>𝑥∊𝐶</sub>\[ - 𝐏(𝐶=𝑥) 𝑙𝑛 𝐏(𝐶=𝑥) \]

below are 3 different models

```merge-table
{
  "rows": [
    [
      {
        "content": "Model With No Constraints",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Model With 1 Constraint",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Model With 2 Constraints",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "NONE\n<font style=\"color: rgb(128,128,128);\">here 𝐏</font><font style=\"color: rgb(128,128,128);\">(𝐶) is allowed to be an un-normalized distribution</font><font style=\"color: rgb(128,128,128);\">i.e.</font> <font style=\"color: rgb(128,128,128);\">𝐏</font><font style=\"color: rgb(128,128,128);\">(𝐶) does not have to be a probability distribution</font>",
        "align": "center"
      },
      {
        "content": "𝐏(𝐶=ℎ) + 𝐏(𝐶=𝑡) = 1\nthis constrains 𝐏(𝐶) to be a normalized distribution\ni.e. 𝐏(𝐶) is a probability distribution",
        "align": "center"
      },
      {
        "content": "𝐏(𝐶=ℎ) + 𝐏(𝐶=𝑡) = 1\n𝐏(𝐶=ℎ) = 0.3",
        "align": "center"
      }
    ],
    [
      {
        "content": "thus there is a 2D plane of possible candidates",
        "align": "center"
      },
      {
        "content": "thus there is a 1D line of possible candidates",
        "align": "center"
      },
      {
        "content": "thus there is a single 1D point as the possible candidate",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝐻<sub>𝐏</sub>(𝐏) is maximized when:\n𝐏(𝐶=ℎ) = 1/𝑒\n𝐏(𝐶=𝑡) = 1/𝑒\n\nthis is because the max of -𝐏(𝐶=𝑥)𝑙𝑛𝐏(𝐶=𝑥) is 1/𝑒",
        "align": "center"
      },
      {
        "content": "𝐻<sub>𝐏</sub>(𝐏) is maximized when:\n𝐏(𝐶=ℎ) = 1/2\n𝐏(𝐶=𝑡) = 1/2",
        "align": "center"
      },
      {
        "content": "𝐻<sub>𝐏</sub>(𝐏) is maximized when:\n𝐏(𝐶=ℎ) = 0.3\n𝐏(𝐶=𝑡) = 0.7\n\nwhich is the only candidate point",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Maximum Entropy (Maxent) Models/maximum-entropy-maxent-inuition-no-constraints.png]]",
        "align": "center"
      },
      {
        "content": "![[Maximum Entropy (Maxent) Models/maximum-entropy-maxent-inuition-1-constraint-as-probability-distribution.png]]",
        "align": "center"
      },
      {
        "content": "![[Maximum Entropy (Maxent) Models/maximum-entropy-maxent-inuition-2-constraints.png]]",
        "align": "center"
      }
    ]
  ]
}
```
# Why Find Maximum Entropy Model?

maximizing entropy in effect helps us find an estimated distribution model 𝐏ˆ that:
- minimizes commitment (which is another way of saying maximizes entropy)
- resembles some reference to the true [[Population Distribution|population distribution]] (actually [[Empirical／Sample Distribution|empirical distribution]])

this is what we want in the estimated distribution model 𝐏ˆ
###### Solution

is to maximize entropy 𝐻, subject to feature-based constraints:
- 𝐄<sub>𝐏</sub>\[𝑓<sub>𝑖</sub>\] = 𝐄<sub>𝐏ˆ</sub>\[𝑓<sub>𝑖</sub>\] ↔ 𝛴<sub>𝑥∊𝑓<sub>𝑖</sub></sub>𝐏<sub>𝑥</sub> = 𝐶<sub>𝑖</sub>

adding constraints/features:
- lowers maximum entropy
- raises the maximum likelihood of data
- brings the distribution model further from the uniform distribution
- brings the distribution model closer to the empirical distribution

# Maxent - Properties

> [!expand]- maximum entropy models are convex
> ```merge-table
> {
>   "rows": [
>     [
>       "a model 𝐹 is convex when:\n- 𝐹(𝛴<sub>𝑖</sub>𝑤<sub>𝑖</sub>𝑥<sub>𝑖</sub>) ≥  𝛴<sub>𝑖</sub>𝑤<sub>𝑖</sub>𝐹(𝑥<sub>𝑖</sub>) where 𝛴<sub>𝑖</sub>𝑤<sub>𝑖</sub> = 1\n\nconvexity guarantees a single, global maximum because any higher points are greedily reachable\n\nmaximum entropy models 𝐻<sub>𝐏</sub>(𝐏) = 𝛴<sub>𝑥∊𝐶</sub>\\[ - 𝐏(𝐶=𝑥) 𝑙𝑛 𝐏(𝐶=𝑥) \\] are convex\n- - 𝐏(𝐶=𝑥) 𝑙𝑛 𝐏(𝐶=𝑥) is convex\n- 𝛴<sub>𝑥∊𝐶</sub>\\[ - 𝐏(𝐶=𝑥) 𝑙𝑛 𝐏(𝐶=𝑥) \\] is convex (sum of convex functions is convex)\n- the feasible-region of constrained 𝐻<sub>𝐏</sub>(𝐏) is a linear subspace that is convex\n- the constrained entropy surface is therefore convex",
>       "![[Maximum Entropy (Maxent) Models/maximum-entropy-maxent-inuition-1-constraint-as-probability-distribution.png]]"
>     ]
>   ]
> }
> ```

the [[Maximum Likelihood Estimation (MLE)]] exponential model formulation is also convex (dual)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Stanford's NLP Video Lecture](https://www.youtube.com/watch?v=GGBz6FySsdA&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&index=52&ab_channel=MausamJain)
