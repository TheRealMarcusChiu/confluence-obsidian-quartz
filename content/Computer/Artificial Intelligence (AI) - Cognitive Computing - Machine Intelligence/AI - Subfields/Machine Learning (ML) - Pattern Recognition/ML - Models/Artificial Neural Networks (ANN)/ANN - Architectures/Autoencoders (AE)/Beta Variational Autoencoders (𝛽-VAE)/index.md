---
title: "Beta Variational Autoencoders (𝛽-VAE)"
created: 2024-08-21T18:17:07.877-05:00
modified: 2026-05-13T15:12:31.785-05:00
parent: "[[Autoencoders (AE)]]"
children: []
---
###### Beta Variational Autoencoders (𝛽-VAE)
````excerpt
- are [[Variational Autoencoders (VAE)|variational autoencoders]] but with a modified loss function
	- 𝐿(𝜙, 𝜃, 𝑥) = (𝑟𝑒𝑐𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑖𝑜𝑛 𝑙𝑜𝑠𝑠) + 𝛽 \* (𝑟𝑒𝑔𝑢𝑙𝑎𝑟𝑖𝑧𝑎𝑡𝑖𝑜𝑛 𝑡𝑒𝑟𝑚)
- 𝛽\>1 - constrains latent bottle neck, encouraging efficient latent encoding → disentanglement
````
^excerpt
