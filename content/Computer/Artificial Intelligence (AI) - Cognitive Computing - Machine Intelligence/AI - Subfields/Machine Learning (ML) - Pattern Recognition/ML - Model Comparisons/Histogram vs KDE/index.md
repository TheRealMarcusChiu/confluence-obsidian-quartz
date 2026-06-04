---
title: "Histogram vs KDE"
created: 2021-08-14T16:49:45.665-05:00
modified: 2021-12-26T20:39:58.781-06:00
parent: "[[ML - Model Comparisons]]"
children: []
---
# Histogram vs KDE - Estimating Probability Density Functions

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Histogram]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|Kernel Distribution Estimation/Classification]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "To estimate univariate probability density distribution 𝐏(𝑋=𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Given a set of 𝑛 samples 𝐷={𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>𝑛</sub>} [[Independent and Identically Distributed (IID)|i.i.d]] drawn from a random variable 𝑋",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐏ˆ<sub>ℎ</sub>(𝑋=𝑥) = 1/\\[ℎ·𝑛\\]・𝛴<sub>1≤𝑖≤𝑛</sub>𝛴<sub>𝑏𝑖𝑛∊𝐵𝐼𝑁𝑆</sub>\\[𝐼(𝑥<sub>𝑖</sub>∊𝑏𝑖𝑛)·𝐼(𝑥∊𝑏𝑖𝑛)\\]\n- 𝐏ˆ<sub>ℎ</sub>(𝑋=𝑥) = 1/\\[ℎ·𝑛\\]・𝑐𝑜𝑢𝑛𝑡(𝐷=𝑥)\n\nwhere:\n- ℎ ≥ 0 - bin-width\n- 𝑛 - total number of observed samples\n- 𝐵𝐼𝑁𝑆 - set of all bins\n- 𝐼() - [[Indicator Functions - Characteristic Functions - Membership Functions|indicator function]], evaluates to 1 when true, 0 when false\n- 𝑐𝑜𝑢𝑛𝑡(𝐷=𝑥) - total number of observed samples with 𝑥",
      "- 𝐏ˆ<sub>ℎ</sub>(𝑋=𝑥) = 1/\\[ℎ·𝑛\\]・𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥<sub>𝑖</sub>,𝑥)\n\nwhere:\n- ℎ \\> 0 - band-width\n- 𝑘(𝑥<sub>𝑖</sub>,𝑥) - a univariate [[Kernel Functions (Similarity Functions)|kernel function]]\n- ∫𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥<sub>𝑖</sub>,𝑥)𝑑𝑥 = 1"
    ],
    [
      {
        "content": "To estimate a joint probability density distribution 𝐏(𝑋=𝑥,𝑍=𝑧)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Given a set of 𝑛 samples 𝐷={(𝑥<sub>1</sub>,𝑧<sub>1</sub>), (𝑥<sub>2</sub>,𝑧<sub>2</sub>), ..., (𝑥<sub>𝑛</sub>,𝑧<sub>𝑛</sub>)} [[Independent and Identically Distributed (IID)|i.i.d]] drawn from the joint distribution of 𝑋 & 𝑍",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐏ˆ<sub>ℎ𝑥·ℎ𝑧</sub>(𝑋=𝑥,𝑍=𝑧) = 1/\\[ℎ<sub>𝑥</sub>·ℎ<sub>𝑧</sub>·𝑛\\]・𝛴<sub>1≤𝑖≤𝑛</sub>𝛴<sub>𝑏𝑖𝑛∊𝐵𝐼𝑁𝑆</sub>\\[𝐼((𝑥<sub>𝑖</sub>,𝑧<sub>𝑖</sub>)∊𝑏𝑖𝑛)·𝐼((𝑥,𝑧)∊𝑏𝑖𝑛)\\]\n\nwhere:\n- ℎ<sub>𝑥</sub> ≥ 0 - bin-width on 𝑥 axis\n- ℎ<sub>𝑧</sub> ≥ 0 - bin-width on 𝑧 axis",
      "- 𝐏ˆ<sub>ℎ</sub>(𝑋=𝑥,𝑍=𝑧) = 1/\\[ℎ<sup>2</sup>·𝑛\\]・𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>((𝑥<sub>𝑖</sub>,𝑧<sub>𝑖</sub>),(𝑥,𝑧))\n\nwhere:\n- 𝑘<sub>ℎ</sub>((𝑥<sub>𝑖</sub>,𝑧<sub>𝑖</sub>),(𝑥,𝑧)) - a bivariate [[Kernel Functions (Similarity Functions)|kernel function]]"
    ],
    [
      {
        "content": "To estimate the conditional probability density 𝐏(𝑋=𝑥|𝑌=𝑦)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐏ˆ(𝑋=𝑥|𝑌=𝑦) = 1/\\[ℎ·𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦)\\]・𝑐𝑜𝑢𝑛𝑡(𝑋=𝑥,𝑌=𝑦)\n\nwhere:\n- ℎ \\> 0 - a parameter called bandwidth\n- 𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦) - total number of observed samples with 𝑦\n- 𝑐𝑜𝑢𝑛𝑡(𝑋=𝑥,𝑌=𝑦) - total number of observed samples with 𝑥 and 𝑦",
      "- 𝐏ˆ(𝑋=𝑥|𝑌=𝑦) = 1/\\[ℎ·𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦)\\]・𝛴<sub>(</sub><sub>𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>)∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>𝑘\\[(𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>),(𝑥,𝑦)\\]\n\nwhere:\n- 𝑘\\[(𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>),(𝑥,𝑦)\\] - the [[Kernel Functions (Similarity Functions)|kernel function]]"
    ],
    [
      {
        "content": "Example estimate of probability distribution 𝐏(𝑋=𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "![[Histogram vs KDE/Comparison_of_1D_histogram_and_KDE.png]]\n\nthe <font style=\"color: rgb(255,0,0);\">red-dotted-line</font> represents a gaussian-[[Kernel Functions (Similarity Functions)|kernel-function]] for each observation",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐏ˆ(𝑋=𝑥) = 1/\\[ℎ·𝑛\\]・𝑐𝑜𝑢𝑛𝑡(𝑋=𝑥)\n\nwhere:\n- 𝑛 = 6\n- ℎ = 2 <font style=\"color: rgb(128,128,128);\">\\# here we chose 2 but we could choose any number greater than 0</font>\n\nevaluation:\n- <strong>𝐏ˆ(𝑋=𝑥) = 1/12・𝑐𝑜𝑢𝑛𝑡(𝑋=𝑥)</strong>\n- \n> [!expand]- Click here to expand...\n> - 𝐏ˆ(𝑋=-4) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=-3.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=-3) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=-2.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=-2) = 1/12・2 = 1/6\n> \t- 𝐏ˆ(𝑋=-1.5) = 1/12・2 = 1/6\n> - 𝐏ˆ(𝑋=-1) = 1/12・2 = 1/6\n> \t- 𝐏ˆ(𝑋=-1.5) = 1/12・2 = 1/6\n> - 𝐏ˆ(𝑋=0) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=0.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=1) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=1.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=2) = 1/12・0 = 0\n> \t- 𝐏ˆ(𝑋=2.5) = 1/12・0 = 0\n> - 𝐏ˆ(𝑋=3) = 1/12・0 = 0\n> \t- 𝐏ˆ(𝑋=3.5) = 1/12・0 = 0\n> - 𝐏ˆ(𝑋=4) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=4.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=5) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=5.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=6) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=6.5) = 1/12・1 = 1/12\n> - 𝐏ˆ(𝑋=7) = 1/12・1 = 1/12\n> \t- 𝐏ˆ(𝑋=7.5) = 1/12・1 = 1/12",
      "- 𝐏ˆ(𝑋=𝑥) = 1/\\[ℎ·𝑛\\]・𝛴<sub>𝑥<sub>𝑖</sub>∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>𝑘(𝑥<sub>𝑖</sub>,𝑥)\n\nwhere:\n- 𝑛 = 6\n- ℎ = 0.5 <font style=\"color: rgb(128,128,128);\">\\# here we chose 0.5 but we could choose any number greater than 0</font>\n- 𝑘(𝑥<sub>𝑖</sub>,𝑥) = 𝑒𝑥𝑝(-𝛾·||𝑥<sub>𝑖</sub>-𝑥||<sup>2</sup>) <font style=\"color: rgb(128,128,128);\">\\# in this case we use a </font>[[Radial Basis \"Kernel\" Function (RBF)|gaussian kernel]]<font style=\"color: rgb(128,128,128);\">, but we could choose any other </font>[[Kernel Functions (Similarity Functions)|kernel function]]\n\nevaluation:\n- <strong>𝐏ˆ(𝑋=𝑥) = 1/3・𝛴<sub>𝑥<sub>𝑖</sub>∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>𝑒𝑥𝑝(-𝛾·||𝑥<sub>𝑖</sub>-𝑥||<sup>2</sup>)</strong>"
    ],
    [
      {
        "content": "Choice of Bandwidth h & Bias-Variance Tradeoff",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "TODO",
        "align": "center"
      },
      {
        "content": "![[Histogram vs KDE/kde-choice-of-bandwidth-bias-variance-tradeoff.png|301]]",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources

![](https://www.youtube.com/watch?v=QSNN0no4dSI)
