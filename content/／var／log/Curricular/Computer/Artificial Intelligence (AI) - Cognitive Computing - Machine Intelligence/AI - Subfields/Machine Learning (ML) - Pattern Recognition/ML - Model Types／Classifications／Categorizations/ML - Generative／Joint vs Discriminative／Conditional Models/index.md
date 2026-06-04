---
title: "ML - Generative／Joint vs Discriminative／Conditional Models"
created: 2020-04-05T01:34:05.981-05:00
modified: 2024-08-21T18:31:54.107-05:00
parent: "[[ML - Model Types／Classifications／Categorizations]]"
children: []
---
- Andrew NG's Paper: [[discriminative-vs-generative-classifiers.pdf]]
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Discriminative Model (Conditional Model)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Generative Model (Joint Model)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Common",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "is either:\n<strong>classifier</strong> - 𝑌 is a categorical variable\n<strong>regressor</strong> - 𝑌 is a scalar variable",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Goal",
        "header": true,
        "bg": "#F4F5F7"
      },
      "directly estimate/learns the [[Conditional Probability Distribution (CPD)|conditional probability distribution]] 𝐏(𝑌|𝑋)",
      "estimate/learns the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(𝑋,𝑌)"
    ],
    [
      {
        "content": "What It's Used For",
        "header": true,
        "bg": "#F4F5F7"
      },
      "the estimated distribution 𝐏(𝑌|𝑋) can be used for:\n- estimating/predicting the value of 𝑌 when given 𝑋",
      "the estimated distribution 𝐏(𝑋,𝑌) can be used for:\n- estimating/predicting the value of 𝑌 when given 𝑋, by transforming 𝐏(𝑋,𝑌)  into 𝐏(𝑌|𝑋) via [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes rule]]\n- generate likely (𝑥,𝑦) pairs"
    ],
    [
      {
        "content": "Other",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- do not encode the distribution over 𝑋\n- since 𝑋 is not encoded, no independence assumptions are made within 𝑋. Thus discriminative models have lower bias than generative models that makes these independence assumptions\n- cannot be used to reach any conclusions about 𝑋",
      "- encodes the distribution over 𝑋\n- tend to encode independence assumptions within 𝑋 in order to lower the model complexity. Thus, these generative models have higher bias than discriminative models\n- better able to deal with missing values and unlabeled data"
    ],
    [
      {
        "content": "In Relation to Amount of Data",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- the additional independence assumption bias in a generative model can help regularize and constrain the model, thereby reducing its ability to overfit the data. (therefore, generative training often works better when we are learning from limited amounts of data)\n- as amount of data grows, the bias imposed by constraints starts to dominate the error of our model. Therefore discriminative models (which make fewer assumptions) will tend to be less affected by incorrect model assumptions and will often outperform the generatively trained models for larger data sets",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Classification Problems",
        "header": true,
        "bg": "#F4F5F7"
      },
      "discriminative classifier model learns the decision boundary\n\n![[ML - Generative／Joint vs Discriminative／Conditional Models/discriminative-model.png|400]]",
      "generative classifier model learns the probability distributions\n\n![[ML - Generative／Joint vs Discriminative／Conditional Models/generative-model.png|400]]"
    ],
    [
      {
        "content": "Example Models",
        "header": true,
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> - [[Ordinary Least Squares (OLS) Regression]]\n> - [[Logistic (Logit) Regression Model]]\n> - [[Support Vector Machines (SVM)]]\n> - [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Fields (CRF)]]",
      "> [!expand]- Click here to expand...\n> - [[Generalized Discriminant／Discriminative Analysis (GDA)|Generalized Discriminant/Discriminative Analysis (GDA)]]\n> - [[Naive Bayes Model - Bayes Model]]\n> - [[Bayesian Networks (BN)]]\n> - [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Random Fields (MRF)]]\n> - [[Autoencoders (AE)]]\n> - [[Generative Adversarial Networks (GAN)]]\n> - [[Flow-Based Generative Model]]\n> - [Auto-Regression/Regressor/Regressive (AR) Model](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=86409462)\n> - [[Diffusion Model - Diffusion Probabilistic Model - Score-Based Generative Model]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Example 1

Consider the problem of identifying letters from handwritten images:
- the target variable 𝑌 is a [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|categorical variable]] with cardinality of 26
- the input variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} are the 𝑛 pixels of the image

We can then either:
- generatively train a [[Naive Bayes Model - Bayes Model|Naive Bayes Model]]
- discriminatively train a [[Logistic (Logit) Regression Model|Logistic Regression Model]]

The Naive Bayes Model separately learns the distribution over the 256 pixel values given each of the 26 labels; each of these is estimated independently, giving rise to a set of fairly low-dimensional estimation problems. Conversely, the discriminative model is jointly optimizing all of the approximately 26×256 parameters of the multinomial logit distribution, a much higher-dimensional estimation problem. Thus, for sparse data, the naive Bayes model may often perform better.

However, even in this simple setting, the independence assumption made by the Naive Bayes Model — that pixels are independent given the image label — is clearly false. As a consequence, the Naive Bayes Model may be counting, as independent, features that are actually correlated, leading to errors in the estimation. The discriminative model is not making these assumptions; by fitting the parameters jointly, it can compensate for redundancy and other correlations between the features. Thus, as we get enough data to fit the logistic model reasonably well, we would expect it to perform better
# Generative & Discriminative
# Example 2

suppose you have the following data in the form (𝑥,𝑦):
- (1,0)
- (1,0)
- (2,0)
- (2,1)
```merge-table
{
  "rows": [
    [
      {
        "content": "<code></code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<code>Generative\n𝐏(𝑋,𝑌)</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "<code><code>Discriminative\n𝐏(𝑌|𝑋)</code></code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "𝑌=0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑌=1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑌=0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑌=0",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝑋=1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1/2",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝑋=2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1/4",
        "align": "center"
      },
      {
        "content": "1/4",
        "align": "center"
      },
      {
        "content": "1/2",
        "align": "center"
      },
      {
        "content": "1/2",
        "align": "center"
      }
    ]
  ]
}
```

What do joint models 𝐏(𝑋,𝑌) have to do with conditional models 𝐏(𝑌|𝑋)?

think of the space 𝑋×𝑌 as a cartesian product, where:
- 𝑋 is generally huge (e.g. space of documents)
- 𝑌 is generally small (e.g. 2-100 topic classes)

we can build models over 𝐏(𝑋,𝑌) by calculating expectations of features over 𝑋×𝑌:
- 𝐄\[𝑓<sub>𝑖</sub>\] = 𝛴<sub>(𝑥,𝑦)∊(𝑋,𝑌)</sub>\[ 𝐏(𝑋=𝑥,𝑌=𝑦)𝑓<sub>𝑖</sub>(𝑥,𝑦) \]

However, this is impractical as we cannot enumerate 𝑋 efficiently

𝑋 may be huge or infinite, but only a few 𝑥 occur in our data

Therefore, we can add one feature for each 𝑥 and constrain its expectation to match our empirical data:
- ∀𝑥∊𝑋: 𝐏(𝑋=𝑥) = 𝐏ˆ(𝑋=𝑥)

now most entries of 𝐏(𝑥,𝑦) will be zero

we can therefore use the much easier sum:
- 𝐄\[𝑓<sub>𝑖</sub>\] = 𝛴<sub>(𝑥,𝑦)∊(𝑋,𝑌)</sub>\[ 𝐏(𝑋=𝑥,𝑌=𝑦)𝑓<sub>𝑖</sub>(𝑥,𝑦) \]
- 𝐄\[𝑓<sub>𝑖</sub>\] = 𝛴<sub>(𝑥,𝑦)∊(𝑋,𝑌) & 𝐏ˆ(𝑋=𝑥)\>0</sub>\[ 𝐏(𝑋=𝑥,𝑌=𝑦)𝑓<sub>𝑖</sub>(𝑥,𝑦) \]

since we've constrained the 𝑋 marginals, then the only thing that can vary is the conditional distributions:
- 𝐏(𝑋=𝑥,𝑌=𝑦) = 𝐏(𝑌=𝑦|𝑋=𝑥)𝐏(𝑋=𝑥) <font style="color: rgb(128,128,128);">\# via</font> [[Probability (Product Rule - Chain Rule)|chain rule]]
- 𝐏(𝑋=𝑥,𝑌=𝑦) = 𝐏(𝑌=𝑦|𝑋=𝑥)𝐏ˆ(𝑋=𝑥) <font style="color: rgb(128,128,128);">\# our constraint</font>
