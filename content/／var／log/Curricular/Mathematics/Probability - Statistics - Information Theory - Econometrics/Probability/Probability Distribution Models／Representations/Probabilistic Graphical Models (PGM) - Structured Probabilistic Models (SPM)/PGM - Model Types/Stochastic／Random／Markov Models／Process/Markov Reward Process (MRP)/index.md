---
title: "Markov Reward Process (MRP)"
created: 2022-09-18T15:19:04.945-05:00
modified: 2022-09-18T15:33:12.390-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children: []
---
###### Markov Reward Process (MRP)
- is a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] WITH the addition rewards
	- if all rewards are the same, then the MRP reduces to a Markov Chain
- is a [[Markov Decision Process (MDP)]] <font style="color: rgb(255,0,0);">WITHOUT</font> the addition of actions
	- if only one action exists for each state, then the MDP reduces to an MRP

# MRP - Components
MDP can be represented in these components ⟨𝐒, 𝐓, 𝐑, 𝛾⟩:
- 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<sub>𝑠</sub>} - set of states the agent can be in
- 𝐓 transition probability matrices - which is the probability of moving from state 𝑆<sub>𝑖</sub>to another state 𝑆<sub>𝑗</sub>
- 𝐑 reward probability matrices - which is the probability of a reward acquired by the agent for moving from state 𝑆<sub>𝑖</sub>to another state 𝑆<sub>𝑘</sub>
- 𝛾 discount factor - controls the importance between immediate rewards and future rewards

# MRP - State Value Function

```merge-table
{
  "rows": [
    [
      {
        "content": "State Value Function (𝑉-function)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- specifies how good it is to be in a particular state 𝑆<sub>𝑖</sub>\n- denoted as: 𝑉(𝑆<sub>𝑖</sub>) = 𝐄\\[𝛴<sub>0≤𝑡≤∞</sub>𝛾<sup>𝑡</sup>𝑟<sub>𝑘+𝑡+1</sub>|𝑆<sub>𝑘</sub>=𝑆<sub>𝑖</sub>\\]",
        "align": "left"
      }
    ]
  ]
}
```
# MRP - Solving State Value Function

```merge-table
{
  "rows": [
    [
      {
        "content": "linear algebra",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- invert matrix to solve for value function",
        "align": "left"
      }
    ]
  ]
}
```
