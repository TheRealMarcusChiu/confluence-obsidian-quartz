---
title: "Markov Chain Monte Carlo (MCMC)"
created: 2021-09-13T05:28:12.304-05:00
modified: 2026-04-05T00:18:34.966-05:00
parent: "[[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) ]]"
children:
  - "[[Gibbs Sampling]]"
  - "[[Hamiltonian Monte Carlo Algorithm - Hybrid Monte Carlo]]"
  - "[[MCMC - Transition Models]]"
  - "[[Metropolis-Hastings (MH) Algorithm]]"
---
###### Markov Chain Monte Carlo (MCMC)
````excerpt
- a type of [[Probabilistic Inference - Approximate Inference|approximate probabilistic inference]] that uses [[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) |dependent sampling]] as a way to approximate the distribution of a complex target distribution 𝜋
- is a method for obtaining a sequence of random samples which converge to being distributed according to a target probability distribution for which direct sampling is difficult
- based on the theory of [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]] and [[Monte Carlo (MC) Methods／Experiments／Simulations|Monte Carlo Methods/Experiments/Simulations]]
````
^excerpt

# MCMC - Theory

Problem:
- approximate or sample from target distribution 𝜋

Solution:
- [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] idea: given an [[Markov Chain Property - Ergodic (Definition #1)|ergodic]] [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] 𝑇 there exists a [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]] 𝜋
- MCMC idea: given a target distribution 𝜋 construct an [[Markov Chain Property - Ergodic (Definition #1)|ergodic]] transition matrix 𝑇 that will produce 𝜋
	- the [[Markov Chain Property - Ergodic (Definition #1)|ergodic theorem]] states that sampling from this Markov chain 𝑇 will approximate the target distribution 𝜋
	- 
> [!expand]- Click here to expand...
> - 𝑙𝑖𝑚<sub>𝑡→∞</sub>\[<em>𝜂</em>(𝑖,𝑡)/𝑡\] = <em>𝜋</em>(𝑖)
>
> where:
> - 𝑡 - the number of steps
> - 𝑖 - a state in the Markov chain
> - 𝜂(𝑖,𝑡) - the number of visits to state 𝑖 over a period of 𝑡 steps
> - <em>𝜋</em>(𝑖) \> 0 - the [stationary distribution](http://confluence.lan/pages/viewpage.action?pageId=1026538) value for state 𝑖

MCMC assumes there is some [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] 𝑇 that assigns probabilities from going from one state to another

a necessary condition of 𝑇 is that there must exist a vector 𝜋 that satisfies [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary distribution]]:
- 𝜋(<font style="color: rgb(128,0,0);">𝑥<sub>𝑗</sub></font>) = 𝛴<sub><font style="color: rgb(0,128,0);">𝑥<sub>𝑖</sub></font></sub>𝜋(<font style="color: rgb(0,128,0);">𝑥<sub>𝑖</sub></font>)𝑇(<font style="color: rgb(0,128,0);">𝑥<sub>𝑖</sub></font> → <font style="color: rgb(128,0,0);">𝑥<sub>𝑗</sub></font>)
- 𝜋 = 𝜋𝑇 <font style="color: rgb(128,128,128);">\# matrix vector form</font>

> [!expand]- example stationary distribution
> ![[Markov Chain Monte Carlo (MCMC)/stationary-distribution-example.png|301]]
> - 𝜋(𝑥<sub>𝑗</sub>) = 𝜋(𝑥<sub>0</sub>)𝑇(𝑥<sub>0</sub> → 𝑥<sub>𝑗</sub>) + 𝜋(𝑥<sub>1</sub>)𝑇(𝑥<sub>1</sub> → 𝑥<sub>𝑗</sub>)
>
> for 𝑗=0:
> - 𝜋(𝑥<sub>0</sub>) ≈ 𝜋(𝑥<sub>0</sub>)𝑇(𝑥<sub>0</sub> → 𝑥<sub>0</sub>) + 𝜋(𝑥<sub>1</sub>)𝑇(𝑥<sub>1</sub> → 𝑥<sub>0</sub>)
> - 0.571 ≈ 0.571 \* 0.7 + 0.428 \* 0.4
> - 0.571 ≈ 0.5709
>
> for 𝑗=1:
> - 𝜋(𝑥<sub>1</sub>) ≈ 𝜋(𝑥<sub>0</sub>)𝑇(𝑥<sub>0</sub> → 𝑥<sub>1</sub>) + 𝜋(𝑥<sub>1</sub>)𝑇(𝑥<sub>1</sub> → 𝑥<sub>1</sub>)
> - 0.428 ≈ 0.571 \* 0.3 + 0.428 \* 0.6
> - 0.428 ≈ 0.4281

Suppose target distribution is a joint distribution over 𝑛 variables 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)

In the Markov Chain state-space each state is a complete assignment 𝒙 to 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}

we traverse the state-space 𝑡 times, thus getting 𝑡 samples {𝒙<sup>(1)</sup>, ..., 𝒙<sup>(𝑡)</sup>}:
- 𝒙<sup>(1)</sup> \~ 𝑇(𝒙<sup>(0)</sup> → 𝒙<sup>(1)</sup>)
- 𝒙<sup>(2)</sup> \~ 𝑇(𝒙<sup>(1)</sup> → 𝒙<sup>(2)</sup>)
- ...
- 𝒙<sup>(𝑡)</sup> \~ 𝑇(𝒙<sup>(𝑡-1)</sup> → 𝒙<sup>(𝑡)</sup>)

MCMC gives approximate correlated samples:
- 𝔼<sub>𝐏</sub>\[𝑓\] ≈ (1/𝑡) 𝛴<sub>1≤𝑖≤𝑡</sub> 𝑓(𝒙<sup>(𝑖)</sup>)

at a high level, the Markov Chain is defined in terms of a graph of states over which the sampling algorithm takes a random walk. In the case of graphical models, this graph is not the original graph, but rather whose nodes are possible are the possible assignments to our variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}. A transition model 𝑇 specifies for each pair of states (𝒙, 𝒙') the probability 𝑇(𝒙 → 𝒙') of going from state 𝒙 to 𝒙'.

this defines a random sequence of states: {𝒙<sup>(1)</sup>, ..., 𝒙<sup>(𝑡)</sup>}. Using chain dynamics we can define distributions over subsequent states:
- 𝐏<sup>(𝑖+1)</sup>(𝑋<sup>(𝑖+1)</sup>=𝒙') = 𝛴<sub>𝒙</sub>\[𝐏<sup>(𝑖)</sup>(𝑋<sup>(𝑖)</sup>=𝒙)𝑇(𝒙 → 𝒙')\]

intuitively, the probability of being at state 𝒙' at time 𝑖+1 is the sum over all possible states 𝒙 that the chain could be at time 𝑖 of the probability of being in state 𝒙 times the probability that the chain took a transition from 𝒙 to 𝒙'

as the process converges, we would expect 𝐏<sup>(𝑖+1)</sup> to be close to 𝐏<sup>(𝑖)</sup>:
- 𝐏<sup>(𝑖)</sup>(𝒙') = 𝐏<sup>(𝑖+1)</sup>(𝒙') = 𝛴<sub>𝒙</sub>\[𝐏<sup>(𝑖)</sup>(𝒙)𝑇(𝒙 → 𝒙')\]

at convergence, we expect the resulting distribution 𝜋(𝑿) to be an equilibrium relative to the transition model (i.e. the probability of being in a state is the same as the probability of transitioning into it from a randomly sampled predecessor)
- 𝜋(𝑿=𝒙') = 𝛴<sub>𝒙</sub>𝜋(𝑿=𝒙)𝑇(𝒙 → 𝒙')

𝜋(𝑿) is a stationary distribution for a Markov Chain 𝑇
# MCMC - Transition Models

> [!expand]- Click here to expand...
> ![[MCMC - Transition Models#^excerpt]]
# MCMC - Implementations

Suppose target distribution is 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)

```merge-table
{
  "rows": [
    [
      {
        "content": "Implementation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Transition Function",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Gibbs Sampling]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "based on sampling from 𝐏(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) for all 𝑥<sub>𝑖</sub>\n\n> [!expand]- Click here to expand...\n> Suppose target distribution is 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)\n>\n> 𝐏(𝑥) = 𝐏(𝑥<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>)𝐏(𝒙<sub>-𝑖</sub>)\n>\n> where:\n> - 𝑥 - is all the variables\n> - 𝑥<sub>𝑖</sub> - is a single variable\n> - 𝑥<sub>-𝑖</sub> - is all variables in 𝑥 minus 𝑥<sub>𝑖</sub>\n>\n> for Systematic Gibbs Sampling, we sample from 𝐏(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>) for all 𝑥<sub>𝑖</sub> in 𝑥. After that, we have a sample {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>}\n>\n> Therefore the transition function 𝑇(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>) ≈ 𝐏(<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>|<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>)\n> - <font style=\"color: rgb(128,0,0);\">𝑥<sub>1</sub><sup>𝑛𝑒𝑥𝑡</sup></font> \\~ 𝐏(𝑋<sub>1</sub>|<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sub>2</sub><sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>, ..., <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sub>𝑛</sub><sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>)\n> - <font style=\"color: rgb(128,0,0);\">𝑥<sub>2</sub><sup>𝑛𝑒𝑥𝑡</sup></font> \\~ 𝐏(𝑋<sub>2</sub>|<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sub>1</sub><sup>𝑛𝑒𝑥𝑡</sup></font><font style=\"color: rgb(51,51,51);\">,</font> <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sub>3</sub><sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font><font style=\"color: rgb(51,51,51);\">, ...,</font> <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sub>𝑛</sub><sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font></font></font>)\n> - ...\n> - <font style=\"color: rgb(128,0,0);\">𝑥<sub>𝑛</sub><sup>𝑛𝑒𝑥𝑡</sup></font> \\~ 𝐏(𝑋<sub>𝑛</sub>|<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sub>1</sub><sup>𝑛𝑒𝑥𝑡</sup></font></font></font><font style=\"color: rgb(51,51,51);\">, ...,</font> <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sub>𝑛-1</sub><sup>𝑛𝑒𝑥𝑡</sup></font></font></font></font></font>)\n>\n> Systematic Gibbs Sampling satisfies stationary distribution:\n> - 𝜋(<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>) = 𝛴<sub><font style=\"color: rgb(0,128,0);\"><sub><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup>∊𝐴𝐿𝐿-𝑆𝑇𝐴𝑇𝐸𝑆</font></font></font></sub></font></sub>𝜋(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>)𝑇(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font> → <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>)\n> - 𝐏(<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>) = 𝛴<sub><font style=\"color: rgb(0,128,0);\"><sub><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup>∊𝐴𝐿𝐿-𝑆𝑇𝐴𝑇𝐸𝑆</font></font></font></sub></font></sub>𝐏(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>)𝐏(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font> → <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>)\n> - 𝐏(<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>) = 𝛴<sub><font style=\"color: rgb(0,128,0);\"><sub><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup>∊𝐴𝐿𝐿-𝑆𝑇𝐴𝑇𝐸𝑆</font></sub></font></sub>𝐏(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>)𝐏(<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font></font>|<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>)"
    ],
    [
      "- more efficient than [Metropolis-Hastings Algorithm](http://confluence.marcuschiu.com/display/NOT/Metropolis-Hastings+Algorithm) as it accepts all proposals\n- however, it takes local steps that are very near by, as compared to [[Metropolis-Hastings (MH) Algorithm]]\n- requires us to know and sample from the conditional distribution 𝐏(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>))\n- slow when compared to [[Metropolis-Hastings (MH) Algorithm]] when a subset of variables in {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} are correlated"
    ],
    [
      {
        "content": "[[Metropolis-Hastings (MH) Algorithm]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "based on sampling from proposal distribution 𝐐(𝒙 → 𝒙') and accepting these proposals with probability 𝐀(𝒙 → 𝒙')\n\n> [!expand]- Click here to expand...\n> - proposal distribution 𝐐(𝒙 → 𝒙')\n> - acceptance probability: 𝐀(𝒙 → 𝒙')\n>\n> algorithm:\n> - at each state 𝒙 sample next state 𝒙' from 𝐐(𝒙 → 𝒙')\n> - accept next state 𝒙' with probability 𝐀(𝒙 → 𝒙')\n> \t- if accepted, move to 𝒙'\n> \t- otherwise stay at 𝒙\n>\n> Therefore the transition function 𝑇\n>\n> if 𝒙 ≠ 𝒙'\n> - 𝑇(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>) = 𝐐(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>)𝐀(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>)\n>\n> if 𝒙 = 𝒙'\n> - 𝑇(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>) = 𝐐(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font></font>) + 𝛴<sub>𝑥≠𝒙'</sub> \\[𝐐(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>)(1 - 𝐀(<font style=\"color: rgb(0,128,0);\">𝑥<sup>𝑐𝑢𝑟𝑟𝑒𝑛𝑡</sup></font> → <font style=\"color: rgb(128,0,0);\">𝑥<sup>𝑛𝑒𝑥𝑡</sup></font>))\\]\n>\n> construct 𝐀 such that [[Markov Chain Property - Detailed Balance／Balanced|detailed balance]] holds for 𝐐:\n> - 𝜋(<font style=\"color: rgb(128,0,0);\">𝑥'</font>)𝑇(<font style=\"color: rgb(128,0,0);\">𝑥' </font>→ <font style=\"color: rgb(0,128,0);\">𝑥</font>) = 𝜋(<font style=\"color: rgb(0,128,0);\">𝑥</font>)𝑇(<font style=\"color: rgb(0,128,0);\">𝑥</font> →<font style=\"color: rgb(128,0,0);\"> 𝑥'</font>)\n> - 𝜋(<font style=\"color: rgb(128,0,0);\">𝑥'</font>)𝐐(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥'</font></font> → <font style=\"color: rgb(0,128,0);\">𝑥</font>)𝐀(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥'</font></font> → <font style=\"color: rgb(0,128,0);\">𝑥</font>) = 𝜋(<font style=\"color: rgb(0,128,0);\">𝑥</font>)𝐐(<font style=\"color: rgb(0,128,0);\">𝑥</font> → <font style=\"color: rgb(128,0,0);\">𝑥'</font>)𝐀(<font style=\"color: rgb(0,128,0);\">𝑥</font> → <font style=\"color: rgb(128,0,0);\">𝑥'</font>)\n> \t- 𝐀(<font style=\"color: rgb(0,128,0);\">𝑥</font> → <font style=\"color: rgb(128,0,0);\">𝑥'</font>) / 𝐀(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥'</font></font> → <font style=\"color: rgb(0,128,0);\">𝑥</font>) = 𝜋(<font style=\"color: rgb(128,0,0);\">𝑥'</font>)𝐐(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥'</font></font> → <font style=\"color: rgb(0,128,0);\">𝑥</font>) / 𝜋(<font style=\"color: rgb(0,128,0);\">𝑥</font>)𝐐(<font style=\"color: rgb(0,128,0);\">𝑥</font> → <font style=\"color: rgb(128,0,0);\">𝑥'</font>)\n> \t- 𝐀(<font style=\"color: rgb(0,128,0);\">𝑥</font> → <font style=\"color: rgb(128,0,0);\">𝑥'</font>) = 𝑚𝑖𝑛(1, \\[𝜋(<font style=\"color: rgb(128,0,0);\">𝑥'</font>)𝐐(<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝑥'</font></font> → <font style=\"color: rgb(0,128,0);\">𝑥</font>) / 𝜋(<font style=\"color: rgb(0,128,0);\">𝑥</font>)𝐐(<font style=\"color: rgb(0,128,0);\">𝑥</font> → <font style=\"color: rgb(128,0,0);\">𝑥'</font>)\\])"
    ],
    [
      "- takes steps based on proposal distribution 𝐐(𝒙 → 𝒙'), allowing MH to take larger steps in the state space when compared to [[Gibbs Sampling]].\n- However, it is less efficient than [[Gibbs Sampling]] as it rejects/accepts proposal steps\n- does NOT require us to know and sample from the conditional distribution 𝐏(𝑋<sub>𝑖</sub>|𝒙<sub>-𝑖</sub>))"
    ],
    [
      {
        "content": "[[Hamiltonian Monte Carlo Algorithm - Hybrid Monte Carlo|Hamiltonian Monte Carlo]]",
        "bg": "#F4F5F7"
      },
      "TODO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# MCMC - Examples

> [!expand-ui]- Simple Example
> ![[Markov Chain Monte Carlo (MCMC)/mcmc-simple-example.png]]
# Subpages
- [[Importance Sampling (IS) vs Monte Carlo Markov Chains (MCMC)]]

# Resources
- [https://statswithr.github.io/book/stochastic-explorations-using-mcmc.html](https://statswithr.github.io/book/stochastic-explorations-using-mcmc.html)

![](https://www.youtube.com/watch?v=LDiklt4dV24)![](https://www.youtube.com/watch?v=Em6mQQy4wYA)![](https://www.youtube.com/watch?v=EnjexaMjIuY)![](https://www.youtube.com/watch?v=vTUwEu53uzs)
