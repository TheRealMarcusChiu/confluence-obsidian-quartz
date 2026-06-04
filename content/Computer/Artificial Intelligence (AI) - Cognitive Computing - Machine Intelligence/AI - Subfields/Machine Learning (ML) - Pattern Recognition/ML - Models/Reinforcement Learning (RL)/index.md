---
title: "Reinforcement Learning (RL)"
created: 2019-03-15T01:34:44.940-05:00
modified: 2025-09-03T00:55:21.183-05:00
parent: "[[ML - Models]]"
children:
  - "[[AlphaGo Fan／Lee／Master／Zero]]"
  - "[[Contrastive Reinforcement Learning (CRL)]]"
  - "[[Deep Q Networks (DQN)]]"
  - "[[Multi／K-Armed Bandit Problem]]"
  - "[[Policy Gradient Methods]]"
  - "[[Proximal Policy Optimization (PPO)]]"
  - "[[Q-Function]]"
  - "[[Q-Learning]]"
  - "[[RL - Applications]]"
  - "[[RL - Example (Tic-Tac-Toe)]]"
  - "[[RL - Human Priors for Playing Video Games]]"
  - "[[RL Chapters]]"
  - "[[Reinforcement Learning from Human Feedback (RLHF)]]"
  - "[[Selective Bootstrap Adaptation]]"
---
###### Reinforcement Learning (RL)
````excerpt
- is the science of decision making
- is an area of [[Machine Learning (ML) - Pattern Recognition|machine learning]] concerned with how software agents ought to take actions in an environment in order to maximize some notion of cumulative reward
- almost all RL problems can be formulated as a [[Markov Decision Process (MDP)]]
````
^excerpt

# RL - Learning Paradigms
- there is no supervisor, only a scalar reward signal
- feedback may not be instantaneous (i.e. delayed)
- time-series related (sequential, not [[Independent and Identically Distributed (IID)|i.i.d.]] data)
- agent's action affects the subsequent data it receives

# RL - Components

rewards
- a reward 𝑅<sub>𝑡</sub> is a scalar feedback signal
- indicates how well the agent is doing at timestep 𝑡
- the agent's job is to maximize cumulative reward

RL is based on the <strong>reward hypothesis</strong> - all goals can be described by the maximization of expected cumulative reward

sequential decision making
- the goal is to select actions to maximize total future reward
- actions may have long-term consequences
- the reward may not be instantaneous (i.e. delayed)
- it may be better to sacrifice immediate reward at the cost of long-term reward

at each time-step 𝑡 the agent:
- receives reward 𝑅<sub>𝑡</sub>
- receives observation 𝑂<sub>𝑡</sub>
- does an action 𝐴<sub>𝑡</sub>

![[Reinforcement Learning (RL)/reinforcement-learning-agent-and-environment.png|301]]

history
- is the sequence of rewards, observations, and actions from time-step 1 to 𝑡
- 𝐻<sub>1𝑡</sub> = \[𝑅<sub>1</sub>, 𝑂<sub>1</sub>, 𝐴<sub>1</sub>, 𝑅<sub>2</sub>, 𝑂<sub>2</sub>, 𝐴<sub>2</sub>, ..., 𝑅<sub>𝑡</sub>, 𝑂<sub>𝑡</sub>, 𝐴<sub>𝑡</sub>\]

what happens next depends on the history
- agent selects actions
- the environment selects observations & rewards

state
- is the summary of history used to determine what happens next
- is a function of history:
	- 𝑆<sub>𝑡</sub> = 𝑓(𝐻<sub>1𝑡</sub>)

2 state types:
- environment state 𝑆<sub>𝑡</sub><sup>𝑒</sup>
	- is the environment's internal state representation
	- is whatever data the environment uses to pick the next observation & reward
	- has the Markov property
- agent state 𝑆<sub>𝑡</sub><sup>𝑎</sup>
	- is the agent's internal state representation
	- is whatever data the agent uses to pick the next action
	- is the information used by RL algorithms
	- it can be any function of history
		- 𝑆<sub>𝑡</sub><sup>𝑎</sup> = 𝑓(𝐻<sub>1𝑡</sub>)

state with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Markov property]]
- a state 𝑆<sub>𝑖</sub> has Markov property iff: 𝐏(𝑆<sub>𝑡+1</sub>|𝑆<sub>1</sub>, ..., 𝑆<sub>𝑡</sub>) = 𝐏(𝑆<sub>𝑡+1</sub>|𝑆<sub>𝑡</sub>)
- the entire history from time 1 to 𝑡 (i.e. 𝐻<sub>1𝑡</sub>) has the Markov property

information/markov state:
- has the Markov property
- contains all useful information from the history 𝐻<sub>1𝑡</sub>
- once the information state is known, the history is no longer needed
- is a [[Sufficient Statistic|sufficient statistic]] that can be used in determining the future
```merge-table
{
  "rows": [
    [
      {
        "content": "Environment Types",
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
        "content": "Fully Observable Environment State",
        "bg": "#F4F5F7"
      },
      "- agent directly observes environment state:\n\t- 𝑂<sub>𝑡</sub> = 𝑆<sub>𝑡</sub><sup>𝑎</sup> = 𝑆<sub>𝑡</sub><sup>𝑒</sup>\n\t- agent state = environment state\n- formally this is a [[Markov Decision Process (MDP)]]"
    ],
    [
      {
        "content": "Partially Observable Environment State",
        "bg": "#F4F5F7"
      },
      "- agent indirectly observes environment state\n\t- 𝑆<sub>𝑡</sub><sup>𝑎</sup> ≠ 𝑆<sub>𝑡</sub><sup>𝑒</sup>\n\t- agent state ≠ environment state\n- formally this is a [[Partially Observable Markov Decision Process (POMDP)]]\n- agent must construct its own environment state representation 𝑆<sub>𝑡</sub><sup>𝑒</sup>, such as:\n    ```merge-table\n    {\n      \"rows\": [\n        [\n          {\n            \"content\": \"Representation Type\",\n            \"header\": true,\n            \"bg\": \"#F4F5F7\"\n          },\n          {\n            \"content\": \"Description\",\n            \"header\": true,\n            \"bg\": \"#F4F5F7\"\n          }\n        ],\n        [\n          {\n            \"content\": \"complete history\",\n            \"bg\": \"#F4F5F7\"\n          },\n          \"𝑆<sub>𝑡</sub><sup>𝑎</sup> = 𝐻<sub>1𝑡</sub>\"\n        ],\n        [\n          {\n            \"content\": \"beliefs of environment state\",\n            \"bg\": \"#F4F5F7\"\n          },\n          \"𝑆<sub>𝑡</sub><sup>𝑎</sup> = (𝐏(𝑆<sub>𝑡</sub><sup>𝑒</sup>=𝑠<sup>1</sup>), ..., 𝐏(𝑆<sub>𝑡</sub><sup>𝑒</sup>=𝑠<sup>𝑛</sup>))\"\n        ],\n        [\n          {\n            \"content\": \"[[Recurrent Neural Networks (RNN)|recurrent neural network]]\",\n            \"bg\": \"#F4F5F7\"\n          },\n          \"𝑆<sub>𝑡</sub><sup>𝑎</sup> = 𝜎(𝑆<sub>𝑡-1</sub><sup>𝑎</sup>𝑊<sub>𝑠</sub> + 𝑂<sub>𝑡</sub>𝑊<sub>𝑜</sub>) take a linear combination of agent-state at previous timestep with the current observation\"\n        ]\n      ]\n    }\n    ```"
    ]
  ]
}
```
# RL Agent Components

```merge-table
{
  "rows": [
    [
      {
        "content": "component",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "policy",
        "bg": "#F4F5F7"
      },
      "a function that tells what action the agent should take in a given state\n- is a map from state to action\n- policy types:\n\t- deterministic policy: 𝑎 = 𝜋(𝑠)\n\t- stochastic policy: 𝜋(𝑎|𝑠) = 𝐏(𝐴=𝑎|𝑆=𝑠)"
    ],
    [
      {
        "content": "value function",
        "bg": "#F4F5F7"
      },
      "a function that tells how good each state and/or action is\n- is a prediction of future reward\n- used to evaluate the goodness/badness of states, and therefore used to select between actions\n- 𝑉<sub>𝜋</sub>(𝑠) = 𝐄<sub>𝜋</sub>\\[ 𝛾<sup>0</sup>𝑅<sub>𝑡+0</sub> + 𝛾<sup>1</sup>𝑅<sub>𝑡+1</sub>+ 𝛾<sup>2</sup>𝑅<sub>𝑡+2</sub> + ... | 𝑆<sub>𝑡</sub>=𝑠 \\]"
    ],
    [
      {
        "content": "model",
        "bg": "#F4F5F7"
      },
      "the agent's representation of the environment\n- optional: there are model-free agents\n- a model predicts what the environment will do next\n- transitions 𝑇 predict the next state\n\t- 𝑇<sub>𝑠𝑠'</sub><sup>𝑎</sup> = 𝐏(𝑆'=𝑠'|𝑆=𝑠,𝐴=𝑎)\n- rewards 𝑅 predicts the next reward\n\t- 𝑅<sub>𝑠</sub><sup>𝑎</sup> = 𝐄\\[𝑅|𝑆=𝑠,𝐴=𝑎\\]"
    ]
  ]
}
```
# RL Agent - Types

containing value function and/or policy function:
- <strong>value-based</strong> - an agent that stores the value function (policy is implicit, just readout the value function)
- <strong>policy-based</strong> - an agent that stores the policy (no value function)
- <strong>actor-critic</strong> - stores both the policy and reward

containing a model of the environment:
- <strong>model-free</strong> - policy and/or value function
- <strong>model-based</strong> - policy and/or value function

![[Reinforcement Learning (RL)/reinforcement-learning-agent-types.png|301]]
# RL - Dichotomies

```merge-table
{
  "rows": [
    [
      {
        "content": "Dichotomy",
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
        "content": "Reinforcement Learning\nvs\nPlanning",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "reinforcement learning\n- the environment is initially unknown\n- the agent interacts with the environment\n- the agent improves its policy\n\nplanning\n- the model of the environment is known\n- the agent performs computations with the model (without any external interaction)\n- the agent improves its policy\n- aka: reasoning and search"
    ],
    [
      {
        "content": "Exploration\nvs\nExploitation",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- exploration - explores unknown information about the environment which would give up rewards\n- exploitation - exploit known information about the environment to maximize reward"
    ],
    [
      {
        "content": "Prediction\nvs\nControl",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- prediction - given a policy, evaluate the future\n- control - find the best policy that optimizes the future rewards\n\nIn RL you solve prediction-problem in order to solve the control-problem"
    ]
  ]
}
```
# RL - Other
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# RL - Resources
- [Reinforcement Learning: An Introduction (2017)](http://incompleteideas.net/book/bookdraft2017nov5.pdf) \~ Richard S. Sutton and Andrew G. Barto
- [Reinforcement Learning: An Introduction (2018) 2nd Edition](http://incompleteideas.net/sutton/book/RLbook2018trimmed.pdf) \~ Richard S. Sutton and Andrew G. Barto
- [Hado Van Hasselt - YouTube Lectures](https://www.youtube.com/watch?v=ISk80iLhdfU&list=PLqYmG7hTraZBKeNJ-JE_eyJHZ7XgBoAyb&ab_channel=DeepMind)
- [David Silver - YouTube Lectures](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLqYmG7hTraZBiG_XpjnPrSNw-1XQaM_gB&ab_channel=DeepMind)
	- [Written Article](https://towardsdatascience.com/reinforcement-learning-an-introduction-to-the-concepts-applications-and-code-ced6fbfd882d)
- [Deep Reinforcement Learning: Pong from Pixels](http://karpathy.github.io/2016/05/31/rl/)
