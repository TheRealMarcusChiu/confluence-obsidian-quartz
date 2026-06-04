---
title: "MCMC - Transition Models"
created: 2021-09-13T05:28:13.140-05:00
modified: 2021-09-13T05:28:13.140-05:00
parent: "[[Markov Chain Monte Carlo (MCMC)]]"
children: []
---
````excerpt
we often define a set of transition models {𝑇<sub>1</sub>, 𝑇<sub>𝑘</sub>} where each transition model 𝑇<sub>𝑖</sub> is called a <em>kernel</em>.

In certain cases, the variety or multiplicity of kernels:
- is necessary, because no single kernel on its own suffices to ensure [[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility|regularity]]
- makes the state-space more connected and therefore speeds up the convergence to a stationary distribution

### Methods in Constructing a Markov Chain From Multiple Transition Models
- simply select a random 𝑇<sub>𝑖</sub> from {𝑇<sub>1</sub>, 𝑇<sub>𝑘</sub>} at each step
- simply cycle through over different transition models at each step

in the case of graphical models, we could define a multi-kernel chain, where we have a kernel 𝑇<sub>𝑖</sub> for each variable/node. Thus 𝑇<sub>𝑖</sub> takes state (𝒙<sub>-𝑖</sub>, 𝑥<sub>𝑖</sub>) and transitions to a state of the form (𝒙<sub>-𝑖</sub>, 𝑥<sub>𝑖</sub>'). This method is called [[Gibbs Sampling]]
````
^excerpt
