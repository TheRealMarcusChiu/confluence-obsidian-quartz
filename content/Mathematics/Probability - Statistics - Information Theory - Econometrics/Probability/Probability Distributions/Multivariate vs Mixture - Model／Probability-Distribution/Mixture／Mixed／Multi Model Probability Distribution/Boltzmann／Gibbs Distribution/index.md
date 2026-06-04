---
title: "Boltzmann／Gibbs Distribution"
created: 2021-09-13T05:27:18.165-05:00
modified: 2023-12-25T12:20:01.885-06:00
parent: "[[Mixture／Mixed／Multi Model Probability Distribution]]"
children: []
---
###### Boltzmann Distribution (also called Gibbs Distribution)
````excerpt
- is a [[Probability Distributions|probability distribution]] that gives the [[Probability|probability]] that a system will be in a certain state as a function of that state's energy and the temperature of the system
- should not be confused with the [[Maxwell-Boltzmann Distribution]]. The former gives the probability that a system will be in a certain state as a function of that state's energy; in contrast, the latter is used to describe particle speeds in idealized gases
````
^excerpt

# Formulation

The <strong>Boltzmann Distribution</strong> is expressed in the form:

𝑝<sub>𝑖</sub> ∝ 𝑒<sup>-ε<sub>𝑖</sub>/𝑘𝑇</sup>

where:
- 𝑝<sub>𝑖</sub> is the probability of the system being in state 𝑖
- ε<sub>𝑖</sub> is the energy of that state
- constant 𝑘𝑇 of the distribution is the product of [Boltzmann's constant](https://en.wikipedia.org/wiki/Boltzmann%27s_constant) 𝑘 and [thermodynamic temperature](https://en.wikipedia.org/wiki/Thermodynamic_temperature) 𝑇
- ∝ denotes [[Proportionality (Directly - Inversely) - Coefficient of Proportionality Constant|proportionality]]

# Boltzmann Factor
The <em>ratio</em> of probabilities of two states is known as the <strong>Boltzmann factor</strong> and characteristically only depends on the state's energy difference
- 𝑝<sub>𝑖</sub>/𝑝<sub>𝑗</sub>∝ 𝑒<sup>-ε<sub>𝑖</sub>/𝑘𝑇</sup>/ 𝑒<sup>-ε<sub>𝑗</sub>/𝑘𝑇</sup>
- 𝑝<sub>𝑖</sub>/𝑝<sub>𝑗</sub> ∝ 𝑒<sup>ε<sub>𝑗</sub>-ε<sub>𝑖</sub>/𝑘𝑇</sup>

## Boltzmann Distribution

The Boltzmann Distribution is a [[Probability Distributions|probability distribution]] that gives the [[Probability|probability]] of a certain state as a function of that state's energy and temperature of the system to which the distribution is applied. It is given as

![[Boltzmann／Gibbs Distribution/boltzmann-gibbs-distribution.png|301]]

where:
- 𝑝<sub>𝑖</sub> is the probability of the system being in state 𝑖
- ε<sub>𝑖</sub> is the energy of that state
- constant 𝑘𝑇 of the distribution is the product of [Boltzmann's constant](https://en.wikipedia.org/wiki/Boltzmann%27s_constant) 𝑘 and [thermodynamic temperature](https://en.wikipedia.org/wiki/Thermodynamic_temperature) 𝑇
- <em>𝑀</em> is the number of all states accessible to the system of interest

The normalization denominator <em>𝑄</em> (denoted by some authors by <em>𝑍</em>) is the [canonical partition function](https://en.wikipedia.org/wiki/Canonical_partition_function)
# Subpages
- [[PGM - Gibbs Distribution]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
