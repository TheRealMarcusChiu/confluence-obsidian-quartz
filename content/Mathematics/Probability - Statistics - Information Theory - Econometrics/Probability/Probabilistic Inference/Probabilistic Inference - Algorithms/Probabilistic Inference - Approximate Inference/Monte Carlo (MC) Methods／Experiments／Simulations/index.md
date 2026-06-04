---
title: "Monte Carlo (MC) Methods／Experiments／Simulations"
created: 2021-09-13T05:28:18.653-05:00
modified: 2025-09-28T11:41:52.471-05:00
parent: "[[Probabilistic Inference - Approximate Inference]]"
children:
  - "[[Simulation vs Monte Carlo Method vs Monte Carlo Simulation]]"
---
###### Monte Carlo (MC) Methods/Experiments/Simulations
````excerpt
- are any estimation methods used for the computation of [[Probability|probabilities]] and/or [[Probability Distribution - Theorems & Properties|distribution characteristics]]
````
^excerpt

# Why We Use Monte Carlo Methods

let's talk about a simple case; a game of blackjack.

If we wanted to find the probability of getting blackjack (an ace along with a ten-valued card), we could simply count the number of possible hands where this is the case, and divide by the total number of possible combinations of cards to get the probability (its around 1/21, if you are curious). But now imagine our sample space is much harder to compute, for example our deck of cards has thousands as opposed to just 52 cards, or better yet we don’t even know how many cards there are.

We could hunker down at the table and play a hundred games, recording the outcomes as we play. We might get a blackjack 19, 20 or even 28 times, and assign the probability using any of those values. Seems like a pretty bad way to assess our odds at the casino, but hopefully we’re just playing for fun. Now if we go again and play a thousand, ten thousand, millions of times, the [[The Law of Large Numbers|Law of Large Numbers]] states:
> “As the number of identically distributed, randomly generated variables increases, their [[Sample Mean|sample mean]] (average) approaches their theoretical mean.”

Besides being easily one of the most important laws of statistics, this is the basis for Monte Carlo simulations and allows us to build a stochastic/probabilistic model by the method of statistical trials
# Monte Carlo Method/Experiment
- is any method which solves a problem by generating suitable random numbers and observing that fraction of the numbers obeying some property or properties
- is useful for obtaining numerical solutions to problems which are too complicated to solve analytically
- is a subset of computational algorithms that use the process of repeated random sampling to make numerical estimations of unknown parameters
- allow modeling of complex situations where many random variables are involved
- there are a broad spectrum of Monte Carlo methods, but they all share the commonality that they rely on random number generation to solve deterministic problems
- are mainly used in three problem classes:
	- optimization
	- numerical integration
	- generating draws from a [[Univariate Probability Distribution|probability distribution]]

# Types of Monte Carlo Methods/Simulations

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Independent Sampling (Standard Monte Carlo Methods)|Independent Sampling Techniques]]",
        "bg": "#F4F5F7"
      },
      "- [[Simple Sampling - Simple Monte Carlo|Simple Sampling]]\n- [[Acceptance-Rejection Method／Sampling|Rejection Sampling]]\n- [[Forward／Logic Sampling|Forward/Logic Sampling]]\n- [[Likelihood Weighting Sampling|Likelihood Weighting]]\n- [[Importance Sampling (IS)]]"
    ],
    [
      {
        "content": "[[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) |Dependent Sampling Techniques]]",
        "bg": "#F4F5F7"
      },
      "- [[Markov Chain Monte Carlo (MCMC)]]\n\t- [[Gibbs Sampling]]\n\t- [[Metropolis-Hastings (MH) Algorithm]]"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
