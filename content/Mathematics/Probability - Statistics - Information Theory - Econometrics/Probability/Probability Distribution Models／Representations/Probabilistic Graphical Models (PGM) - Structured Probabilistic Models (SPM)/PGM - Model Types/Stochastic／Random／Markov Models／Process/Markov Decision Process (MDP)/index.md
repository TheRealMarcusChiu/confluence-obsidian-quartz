---
title: "Markov Decision Process (MDP)"
created: 2021-09-13T05:27:07.710-05:00
modified: 2025-09-15T13:16:04.593-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children: []
---
###### Markov Decision Process (MDP)
````excerpt
- closely related to [[Reinforcement Learning (RL)|reinforcement learning]]
- is a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] with the addition of actions (allowing choice) and rewards (giving motivation)
	- if only one action exists for each state and all rewards are the same, then the MDP reduces to a Markov Chain
- is a [[Markov Reward Process (MRP)]] with the addition of actions
	- if only one action exists for each state, then the MDP reduces to an MRP
````
^excerpt

# MDP - Components
MDP can be represented in these components ⟨𝐒, 𝐀, 𝐓, 𝐑, 𝛾⟩:
- 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<sub>𝑠</sub>} - set of states the agent can be in
- 𝐀<sub>𝑖</sub> = {𝐴<sub>𝑖1</sub>, ..., 𝐴<sub>𝑖𝑎</sub>} - set of actions the agent can perform while in state 𝑆<sub>𝑖</sub>
- 𝐓 transition probability matrices - which is the probability of moving from state 𝑆<sub>𝑖</sub>to another state 𝑆<sub>𝑗</sub> by performing some action 𝐴<sub>𝑖𝑘</sub>
- 𝐑 reward probability matrices - which is the probability of a reward acquired by the agent for moving from state 𝑆<sub>𝑖</sub>to another state 𝑆<sub>𝑘</sub>by performing some action 𝐴<sub>𝑖𝑘</sub>
- 𝛾 discount factor - controls the importance between immediate rewards and future rewards

# MDP - Policy
- 𝜋 policy is a [[Probability Distributions|distribution]] over actions given states. For example, 𝜋(𝐴<sub>𝑖1</sub>|𝑆<sub>1</sub>) = 𝐏(𝐀<sub>𝑖</sub>=𝐴<sub>𝑖1</sub>| 𝐒=𝑆<sub>1</sub>)
- 𝜋 policy fully defines the behavior of an agent
- 𝜋 policy depends on the current state (not the history)
- 𝜋 policy is [[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector|stationary]] (i.e. time-independent): 𝐴<sub>𝑡</sub> \~ 𝜋(·|𝑆<sub>𝑡</sub>), ∀𝑡 \> 0

# MDP - Reducing to Markov Chain & Markov Reward Process
- given an MDP and a policy function, ⟨𝐒, 𝐓<sup>𝜋</sup>⟩ is a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]]
- given an MDP and a policy function, ⟨𝐒, 𝐓<sup>𝜋</sup>, 𝐑<sup>𝜋</sup>, 𝛾⟩ is a [[Markov Reward Process (MRP)|Markov Reward Process]]

where:
- 𝐓<sup>𝜋</sup>- where for each state only 1 action is allowed to be performed, and that action is determined by 𝜋
	- 𝐓<sup>𝜋</sup><sub>𝑠,𝑠'</sub> = 𝛴<sub>𝑎∊𝐀</sub>\[𝜋(𝑎|𝑠) · 𝐓<sup>𝑎</sup><sub>𝑠,𝑠'</sub>\]
- 𝐑<sup>𝜋</sup>- where for each state only 1 reward is allowed to be acquired, and that reward is determined by the action determined by 𝜋 for each state
	- 𝐑<sup>𝜋</sup><sub>𝑠</sub> = 𝛴<sub>𝑎∊𝐀</sub>\[𝜋(𝑎|𝑠) · 𝐑<sup>𝑎</sup><sub>𝑠</sub>\]

# MDP - Value Functions

```merge-table
{
  "rows": [
    [
      {
        "content": "State-Value Function (𝑉-function)",
        "bg": "#F4F5F7"
      },
      "- the state-value function 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) is the expected rewards starting from state 𝑆<sub>𝑖</sub> and then following policy 𝜋\n- the state-value function 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) tells you how good state 𝑆<sub>𝑖</sub> is"
    ],
    [
      {
        "content": "Action-Value Function (𝑄-function)",
        "bg": "#F4F5F7"
      },
      "- the action-value function 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) is the expected rewards starting from state 𝑆<sub>𝑖</sub>, taking action 𝐴<sub>𝑖𝑗</sub>and then following policy 𝜋\n- the action-value function 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) tells you how good action 𝐴<sub>𝑖𝑗</sub> is in state 𝑆<sub>𝑖</sub>"
    ]
  ]
}
```
# MDP - Value Functions - Bellman Expectation Equations

```merge-table
{
  "rows": [
    [
      {
        "content": "State-Value Function (𝑉-function)",
        "bg": "#F4F5F7"
      },
      "- 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) = 𝐄<sub>𝜋</sub>\\[𝐺<sub>𝑡</sub>|𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>\\]\n\t- $V_𝜋(S_i) = 𝐄_𝜋[R_{t+1} + 𝛾G_{t+1}|S_t=S_i]$\n\t- $V_𝜋(S_i) = \\sum_{A_{ij} \\in 𝐀_i} 𝜋(A_{ij}|S_i) \\sum_{S_k \\in 𝐒} \\sum_{R} 𝐏(S_k, R | S_i, A_{ij}) \\big[ R + 𝛾 𝐄_𝜋[G_{t+1}|S_{t+1}=S_k] \\big]$\n\t- $V_𝜋(S_i) = \\sum_{A_{ij} \\in 𝐀_i} 𝜋(A_{ij}|S_i) \\sum_{S_k \\in 𝐒} \\sum_{R} 𝐏(S_k, R | S_i, A_{ij}) \\big[ R + 𝛾 V_𝜋(S_k) \\big] \\;\\;\\;\\; \\text{Bellman Equation for } V_𝜋(S_i)$\n- 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) = 𝐄<sub>𝜋</sub>\\[𝐺<sub>𝑡</sub>|𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>\\]\n\t- 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) = 𝐄<sub>𝜋</sub>\\[𝛴<sub>0≤𝑡≤∞</sub>𝛾<sup>𝑡</sup>𝑟<sub>𝑡+1</sub>| 𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>\\] <font style=\"color: rgb(122,134,154);\">\\# 𝐺<sub>𝑡</sub>= 𝛴<sub>0≤𝑡≤∞</sub>𝛾<sup>𝑡</sup>𝑟<sub>𝑡+1</sub></font>\n\t- 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) = 𝐄<sub>𝜋</sub>\\[𝑟<sub>𝑡+1</sub>+ 𝛾𝑉<sub>𝜋</sub>(𝑆<sub>𝑡+1</sub>) | 𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>\\] <font style=\"color: rgb(122,134,154);\">\\# Bellman Expectation Equation</font>\n\t- 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) = 𝛴<sub>𝐴𝑖∊𝐀𝑖</sub><strong>\\[</strong>𝜋(𝐴<sub>𝑖</sub>|𝑆<sub>𝑖</sub>)·<font style=\"color: rgb(51,204,204);\"><strong>\\[</strong></font>𝑟<sub>𝑆𝑖,𝐴𝑖</sub>+ 𝛾·<font style=\"color: rgb(255,102,0);\">𝛴<sub>𝑆𝑖'∊𝐒</sub>\\[𝐓<sub>𝑆𝑖,𝑆𝑖',𝐴𝑖</sub>·𝑉<sub>𝜋</sub>(𝑆<sub>𝑖'</sub>)\\]</font><strong><font style=\"color: rgb(51,204,204);\">\\]</font>\\]</strong> <font style=\"color: rgb(122,134,154);\">\\# Bellman Expectation Equation</font>"
    ],
    [
      {
        "content": "Action-Value Function (𝑄-function)",
        "bg": "#F4F5F7"
      },
      "- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝐄<sub>𝜋</sub>\\[𝐺<sub>𝑡</sub>|𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>,𝐴<sub>𝑡</sub>=𝐴<sub>𝑖𝑗</sub>\\]\n\t- $Q_𝜋(S_i, A_{ij}) = 𝐄_𝜋[R_{t+1} + 𝛾G_{t+1}|S_t=S_i, A_t=A_{ij}]$\n\t- $Q_𝜋(S_i, A_{ij}) = \\sum_{S_k \\in 𝐒} \\sum_{R} 𝐏(S_k, R | S_i, A_{ij}) \\big[ R + 𝛾 \\sum_{A_{ij}' \\in 𝐀_i} 𝜋(A_{ij}'|S_k) 𝐄_𝜋[G_{t+1}|S_{t+1}=S_k, A_{t+1}=A_{ij}'] \\big]$\n\t- $Q_𝜋(S_i, A_{ij}) = \\sum_{S_k \\in 𝐒} \\sum_{R} 𝐏(S_k, R | S_i, A_{ij}) \\big[ R + 𝛾 \\sum_{A_{ij}' \\in 𝐀_i} 𝜋(A_{ij}'|S_k) Q_𝜋(S_k, A_{ij}') \\big] \\;\\;\\;\\; \\text{Bellman Equation for } Q_𝜋(S_i, A_{ij})$\n- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝐄<sub>𝜋</sub>\\[𝐺<sub>𝑡</sub>|𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>,𝐴<sub>𝑡</sub>=𝐴<sub>𝑖𝑗</sub>\\]\n\t- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝐄<sub>𝜋</sub>\\[𝛴<sub>0≤𝑡≤∞</sub>𝛾<sup>𝑡</sup>𝑟<sub>𝑡+1</sub>| 𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>,𝐴<sub>𝑡</sub>=𝐴<sub>𝑖𝑗</sub>\\] <font style=\"color: rgb(122,134,154);\">\\# 𝐺<sub>𝑡</sub>= 𝛴<sub>0≤𝑡≤∞</sub>𝛾<sup>𝑡</sup>𝑟<sub>𝑡+1</sub></font>\n\t- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝐄<sub>𝜋</sub>\\[𝑟<sub>𝑡+1</sub>+ 𝛾𝑄<sub>𝜋</sub>(𝑆<sub>𝑡+1</sub>,𝐴<sub>𝑡+1</sub>) | 𝑆<sub>𝑡</sub>=𝑆<sub>𝑖</sub>, 𝐴<sub>𝑡</sub>=𝐴<sub>𝑖𝑗</sub>\\] <font style=\"color: rgb(122,134,154);\">\\# Bellman Expectation Equation</font>\n\t- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝑟<sub>𝑆𝑖,𝐴𝑖</sub>+ 𝛾·<font style=\"color: rgb(255,102,0);\">𝛴<sub>𝑆𝑖'∊𝐒</sub><strong>\\[</strong>𝐓<sub>𝑆𝑖,𝑆𝑖',𝐴𝑖</sub>· <strong>(</strong><font style=\"color: rgb(51,204,204);\">𝛴<sub>𝐴𝑖'∊𝐀𝑖</sub><strong>\\[</strong>𝜋(𝐴<sub>𝑖'</sub>|𝑆<sub>𝑖</sub>) · </font></font><font style=\"color: rgb(51,204,204);\">𝑄<sub>𝜋</sub>(𝑆<sub>𝑖'</sub>,𝐴<sub>𝑖'</sub>)</font><font style=\"color: rgb(255,102,0);\"><font style=\"color: rgb(51,204,204);\"><strong>\\]</strong></font><strong>)\\]</strong></font> <font style=\"color: rgb(122,134,154);\">\\# Bellman Expectation Equation</font>"
    ]
  ]
}
```
# MDP - Solving Bellman Expectation Equation

```merge-table
{
  "rows": [
    [
      {
        "content": "Method Class",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "linear algebra",
        "bg": "#F4F5F7"
      },
      "- invert matrix"
    ],
    [
      {
        "content": "dynamic programming",
        "bg": "#F4F5F7"
      },
      "- are well developed mathematically\n- but require a complete and accurate model of the environment"
    ],
    [
      {
        "content": "Monte Carlo methods",
        "bg": "#F4F5F7"
      },
      "- don’t require a model and are conceptually simple\n- but are not well suited for step-by-step incremental computation"
    ],
    [
      {
        "content": "temporal-difference learning",
        "bg": "#F4F5F7"
      },
      "- require no model and are fully incremental\n- but are more complex to analyze"
    ]
  ]
}
```
# MDP - Optimal Value Functions

The optimal value function specifies the best possible performance in the MDP

```merge-table
{
  "rows": [
    [
      {
        "content": "𝑉<sub>\\*</sub>(𝑆<sub>𝑖</sub>)",
        "bg": "#F4F5F7"
      },
      "- the optimal state-value function\n- 𝑉<sub>\\*</sub>(𝑆<sub>𝑖</sub>) = 𝑚𝑎𝑥<sub>𝜋</sub> 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>)"
    ],
    [
      {
        "content": "𝑄<sub>\\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>)",
        "bg": "#F4F5F7"
      },
      "- the optimal action-value function\n- 𝑄<sub>\\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝑚𝑎𝑥<sub>𝜋</sub> 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>)"
    ]
  ]
}
```
# MDP - Optimal Policy

Define a partial ordering over policies:
- 𝜋 ≥ 𝜋' if 𝑉<sub>𝜋</sub>(𝑆<sub>𝑖</sub>) ≥ 𝑉<sub>𝜋'</sub>(𝑆<sub>𝑖</sub>), ∀𝑆<sub>𝑖</sub>∊𝐒

For any MDP:
- there exists an optimal policy 𝜋\* that is better than or equal to all other policies, 𝜋\* ≥ 𝜋, ∀𝜋
- all optimal policies achieve the optimal state-value function, 𝑉<sub>𝜋\*</sub>(𝑆<sub>𝑖</sub>) = 𝑉<sub>\*</sub>(𝑆<sub>𝑖</sub>)
- all optimal policies achieve the optimal action-value function, 𝑄<sub>𝜋\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝑄<sub>\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>)

# MDP - Finding an Optimal Policy
An optimal policy 𝜋\* can be found by maximizing over 𝑄<sub>\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>),
- 𝜋\*(𝐴<sub>𝑖𝑗</sub>|𝑆<sub>𝑖</sub>) = 1 <font style="color: rgb(122,134,154);">\# if 𝐴<sub>𝑖𝑗</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐴𝑖'∊𝐀𝑖</sub> 𝑄<sub>\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖</sub>')</font>
- 𝜋\*(𝐴<sub>𝑖𝑗</sub>|𝑆<sub>𝑖</sub>) = 0 <font style="color: rgb(122,134,154);">\# otherwise</font>

For any MDP:
- there is always a deterministic optimal policy 𝜋\*

If we know 𝑄<sub>\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>), then we immediately have the optimal policy 𝜋\*
# MDP - Value Functions - Bellman Optimality Equations

```merge-table
{
  "rows": [
    [
      {
        "content": "State-Value Function (𝑉-function)",
        "bg": "#F4F5F7"
      },
      "- 𝑉<sub>\\*</sub>(𝑆<sub>𝑖</sub>) = 𝑚𝑎𝑥<sub>𝐴𝑖∊𝐀𝑖</sub> 𝑄<sub>\\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖</sub>)\n- 𝑉<sub>\\*</sub>(𝑆<sub>𝑖</sub>) = 𝑚𝑎𝑥<sub>𝐴𝑖∊𝐀𝑖</sub><strong>\\[</strong> 𝑟<sub>𝑆𝑖,𝐴𝑖</sub>+ 𝛾·<font style=\"color: rgb(255,102,0);\">𝛴<sub>𝑆𝑖'∊𝐒</sub><strong>\\[</strong>𝐓<sub>𝑆𝑖,𝑆𝑖',𝐴𝑖</sub>· <font style=\"color: rgb(51,204,204);\">𝑉<sub>\\*</sub>(𝑆<sub>𝑖</sub>)</font></font><font style=\"color: rgb(255,102,0);\"><strong>\\] </strong></font><strong>\\]</strong>"
    ],
    [
      {
        "content": "Action-Value Function (𝑄-function)",
        "bg": "#F4F5F7"
      },
      "- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝑟<sub>𝑆𝑖,𝐴𝑖</sub>+ 𝛾·<font style=\"color: rgb(255,102,0);\">𝛴<sub>𝑆𝑖'∊𝐒</sub><strong>\\[</strong>𝐓<sub>𝑆𝑖,𝑆𝑖',𝐴𝑖</sub>· <font style=\"color: rgb(51,204,204);\">𝑉<sub>\\*</sub>(𝑆<sub>𝑖</sub>)</font></font><font style=\"color: rgb(255,102,0);\"><strong>\\]</strong></font>\n- 𝑄<sub>𝜋</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖𝑗</sub>) = 𝑟<sub>𝑆𝑖,𝐴𝑖</sub>+ 𝛾·<font style=\"color: rgb(255,102,0);\">𝛴<sub>𝑆𝑖'∊𝐒</sub><strong>\\[</strong>𝐓<sub>𝑆𝑖,𝑆𝑖',𝐴𝑖</sub>· <font style=\"color: rgb(51,204,204);\">\\[</font></font>𝑚𝑎𝑥<sub>𝐴𝑖∊𝐀𝑖</sub> 𝑄<sub>\\*</sub>(𝑆<sub>𝑖</sub>,𝐴<sub>𝑖</sub>)<font style=\"color: rgb(255,102,0);\"><font style=\"color: rgb(51,204,204);\">\\]</font></font><font style=\"color: rgb(255,102,0);\"><strong>\\]</strong></font>"
    ]
  ]
}
```
# MDP - Solving Bellman Optimality Equation

An MDP is "solved" when an optimal value function is found
- Bellman optimality equation is non-linear (thus, using linear algebra is not possible)
- no closed form solution (in general)
- many iterative solution methods:
	- value iteration
	- policy iteration
	- Q-learning
	- sarsa
```merge-table
{
  "rows": [
    [
      {
        "content": "Method Class",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "dynamic programming",
        "bg": "#F4F5F7"
      },
      "- are well developed mathematically\n- but require a complete and accurate model of the environment"
    ],
    [
      {
        "content": "Monte Carlo methods",
        "bg": "#F4F5F7"
      },
      "- don’t require a model and are conceptually simple\n- but are not well suited for step-by-step incremental computation"
    ],
    [
      {
        "content": "temporal-difference learning",
        "bg": "#F4F5F7"
      },
      "- require no model and are fully incremental\n- but are more complex to analyze"
    ]
  ]
}
```

[https://medium.com/analytics-vidhya/bellman-equation-and-dynamic-programming-773ce67fc6a7](https://medium.com/analytics-vidhya/bellman-equation-and-dynamic-programming-773ce67fc6a7)
# Resources
- [https://en.wikipedia.org/wiki/Markov_decision_process](https://en.wikipedia.org/wiki/Markov_decision_process)
- [David Silver - RL Lecture #2 - MDP](https://www.youtube.com/watch?v=lfHX2hHRMVQ&ab_channel=DeepMind)
