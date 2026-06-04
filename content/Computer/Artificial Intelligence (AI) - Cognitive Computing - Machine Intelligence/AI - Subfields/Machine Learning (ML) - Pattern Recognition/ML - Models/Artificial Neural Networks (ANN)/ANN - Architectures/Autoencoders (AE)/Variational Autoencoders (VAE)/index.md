---
title: "Variational Autoencoders (VAE)"
created: 2020-08-17T22:48:46.995-05:00
modified: 2024-08-21T18:21:14.540-05:00
parent: "[[Autoencoders (AE)]]"
children: []
---
###### Variational Autoencoders (VAE)
````excerpt
- is a probabilistic twist on traditional [[Autoencoders (AE)|autoencoder]] - samples the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] and [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]] to compute latent sample
- is an [[ANN - Architectures|ANN architecture]] introduced by Diederik P. Kingma and Max Welling
- it belongs to the family of [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical models]] and variational Bayesian methods
````
^excerpt

# VAE - Architecture

```merge-table
{
  "rows": [
    [
      "![[Variational Autoencoders (VAE)/variational-autoencoder.png|600]]\n- the <strong>encoder</strong> tries to compute the [[Probability Distributions|probability distribution]] 𝑞<sub>𝜙</sub>(𝑧|𝑥) where 𝜙 represents the weights of the encoder\n- the <strong>decoder</strong> tries to compute the probability distribution 𝑝<sub>𝜃</sub>(𝑥|𝑧) where 𝜃 represents the weights of the decoder\n\nThe [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|loss function]] 𝐿 is defined as:\n- 𝐿(𝜙, 𝜃, 𝑥) = (𝑟𝑒𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛 𝑙𝑜𝑠𝑠) + (𝑟𝑒𝑔𝑢𝑙𝑎𝑟𝑖𝑧𝑎𝑡𝑖𝑜𝑛 𝑡𝑒𝑟𝑚)\n\nwhere:\n- 𝑟𝑒𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛 𝑙𝑜𝑠𝑠 = 𝑙𝑜𝑔-𝑙𝑖𝑘𝑒𝑙𝑖ℎ𝑜𝑜𝑑 OR ||𝑥 - 𝑥̂||<sup>2</sup>\n- 𝑟𝑒𝑔𝑢𝑙𝑎𝑟𝑖𝑧𝑎𝑡𝑖𝑜𝑛 𝑡𝑒𝑟𝑚 = 𝐷<sub>𝐾𝐿</sub>( 𝑞<sub>𝜙</sub>(𝑧|𝑥) || 𝑞(𝑧) )\n\t- 𝐷<sub>𝐾𝐿</sub>( || ) - is the [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|KL Divergence]] which measures the distance between 2 probability distributions\n\t- 𝑞<sub>𝜙</sub>(𝑧|𝑥) - inferred latent distribution\n\t- 𝑞(𝑧) - fixed prior on latent distribution (usually a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard distribution]])",
      "![](http://youtube.com/watch?v=Dmm4UG-6jxA)"
    ]
  ],
  "tableStyle": "width: 59.009%;"
}
```
# VAE - Variants
- [[Beta Variational Autoencoders (𝛽-VAE)]]

# Other
- [[GAN vs VAE vs Flow-Based Model vs Diffusion Model]]

# Resources
- [https://towardsdatascience.com/intuitively-understanding-variational-autoencoders-1bfe67eb5daf](https://towardsdatascience.com/intuitively-understanding-variational-autoencoders-1bfe67eb5daf)
