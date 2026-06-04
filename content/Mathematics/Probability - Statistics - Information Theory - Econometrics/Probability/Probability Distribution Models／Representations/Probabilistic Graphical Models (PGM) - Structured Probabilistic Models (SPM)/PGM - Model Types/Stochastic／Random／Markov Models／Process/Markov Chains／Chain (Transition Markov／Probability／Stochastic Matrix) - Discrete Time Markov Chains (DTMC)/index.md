---
title: "Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)"
created: 2021-09-13T05:27:03.972-05:00
modified: 2025-09-13T15:04:25.291-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children:
  - "[[Markov Chain Property - Detailed Balance／Balanced]]"
  - "[[Markov Chain Property - Ergodic]]"
  - "[[Markov Chain Property - Irreducible／Irreducibility／Regular & Reducible／Reducibility]]"
  - "[[Markov Chain Property - Periodic／Periodicity & Aperiodic／Aperiodicity]]"
  - "[[Markov Chain Property - Reversibility]]"
  - "[[Markov Chain Property - State Types (Transient／Positive／Null／Recurrent／Absorbing State)]]"
  - "[[Markov Chain Property - Stationary／Stable／Invariant／Steady-State／Limiting／Marginal Probability Distribution Vector]]"
  - "[[Markov Chain Property - Stochastic Matrix - Contains Eigenvalue 1 and all other Eigenvalues are Less than 1]]"
  - "[[Markov Chain Property - Time Homogenous／Heterogenous]]"
  - "[[Markov Chain Property - n-Step Transient-State Probability Distribution Vector]]"
---
###### Markov Chains
- is a discrete state-space [[Stochastic／Random／Markov Models／Process|Markov Model]] used to model data sequences
- is a one-dimensional [[Random Walk|random walk]] (see: [[Random Walk vs Markov Chain]])
- is foundation for more complex models, e.g:
	- [[Hidden Markov Models (HMM)|HMM]] - partially observable states
	- [[Markov Decision Process (MDP)|MDP]] - agent with actions and rewards
- is often represented by a <strong>Transition Matrix </strong>sometimes called <strong>Markov/Stochastic/Probability Matrix</strong>
- consists of 𝑛 state-values {𝑠<sub>1</sub>, ..., 𝑠<sub>𝑛</sub>}
- at current time 𝑡 the markov chain is at state-value 𝑠<sup>(𝑡)</sup> which is can 1 of the 𝑛 state-values 𝑠<sub>𝑖</sub>
- this is denoted as 𝑋<sup>(𝑡)</sup>=𝑠<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub>(these 2 ways to represent the state-value of 𝑋<sup>(𝑡)</sup> will be useful as we go on)
- as the markov chain moves to time 𝑡+1, it <font style="color: rgb(255,0,0);"><strong>RANDOMLY</strong></font> chooses the next state-value 𝑠<sub>𝑗</sub>(denoted as 𝑋<sup>(𝑡+1)</sup>=𝑠<sup>(𝑡+1)</sup>=𝑠<sub>𝑗</sub>)
- naturally this forms a sequence of 𝑋s { ..., 𝑋<sup>(𝑡-1)</sup>, 𝑋<sup>(𝑡)</sup>}
- the sequence of 𝑋s starting at beginning up to current time 𝑡 is the "recorded history" of state-values over time
- this sequence can grow infinitely long
- the 𝑋s are called time-variables, where each 𝑋 holds 1 state-value

![](https://www.youtube.com/watch?v=Ws63I3F7Moc)
# Markov Chains - Transition Markov/Probability/Stochastic Matrix

at each time-step the <font style="color: rgb(255,0,0);"><strong>RANDOM</strong></font> choice of next state-value 𝑠<sub>𝑗</sub>can be characterized by a 𝑛x𝑛 transition matrix 𝑇 where:
- each entry 𝑇\[𝑖,𝑗\]:
	- contains a value between 0 and 1 (inclusive)
	- denotes the probability of going from state 𝑠<sub>𝑖</sub>to 𝑠<sub>𝑗</sub><font style="color: rgb(128,128,128);">\# i.e. 𝐏(𝑋<sup>(𝑡+1)</sup>=𝑠<sub>𝑗</sub>|𝑋<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub>)</font>
- each row of entries in 𝑇 must sum up to 1

this transition matrix 𝑇 models a [[Stochastic／Random／Markov Models／Process|Markov Process]] having a [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|first-order markov assumption]]. We can model higher-order markov assumptions by increasing the dimension of 𝑇:
- [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|first-order markov assumption]] - 𝑇 is a 𝑛x𝑛 [[Matrix／Matrices|matrix]]. where each entry 𝑇\[𝑖,𝑗\] represents 𝐏(𝑋<sup>(𝑡+1)</sup>=𝑠<sub>𝑗</sub>|𝑋<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub>)
- [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|second-order markov assumption]] - 𝑇 is a 𝑛x𝑛x𝑛 [[Tensors|tensor]]. where each entry 𝑇\[𝑖,𝑗,𝑘\] represents 𝐏(𝑋<sup>(𝑡+1)</sup>=𝑠<sub>𝑘</sub>|𝑋<sup>(𝑡)</sup>=𝑠<sub>𝑗</sub>,𝑋<sup>(𝑡-1)</sup>=𝑠<sub>𝑖</sub>)
- and so on....

types of 𝑇:
- entries of 𝑇 either:
	- changes after each time-step (Markov Chain has [[Markov Chain Property - Time Homogenous／Heterogenous|time heterogenous]] property)
	- remains static after each time-step (Markov Chain has [[Markov Chain Property - Time Homogenous／Heterogenous|time homogenous]] property)
- right/left transition matrix
	- right transition matrix means each row sums to 1 (more common)
	- left transition matrix means each column sums to 1

stochastic matrix 𝑇 properties:
- 𝑇 has eigenvalue 1 and all eigenvalues are at most 1
- 𝑇<sup>𝑛</sup> is a stochastic matrix for all 𝑛
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Markov Chains - Visual/Graphical Representations
given a Markov Chain there are 3 graphical representations:
1. finite graphical representation of the transition matrix 𝑇 (nodes as state-values)
2. finite graphical representation of a sequence of time-variables 𝑋's (nodes as time-variables)
3. infinitely growing graphical representation of a sequence of time-variables 𝑋's (nodes as time-variables)

###### Visual/Graphical Representations Example:

> [!expand]- Click here to expand...
> given a Markov Chain with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|first-order markov assumption]] consisting of:
> - 2 state-values {𝑠<sub>1</sub>, 𝑠<sub>2</sub>}
> - 2x2 transition matrix 𝑇
>     ```merge-table
>     {
>       "rows": [
>         [
>           {
>             "content": "𝑇",
>             "header": true,
>             "bg": "#F4F5F7",
>             "align": "center",
>             "colspan": 2,
>             "rowspan": 2
>           },
>           null,
>           {
>             "content": "to",
>             "header": true,
>             "bg": "#F4F5F7",
>             "align": "center",
>             "colspan": 2
>           },
>           null
>         ],
>         [
>           {
>             "content": "𝑠<sub>1</sub>",
>             "header": true,
>             "bg": "#F4F5F7",
>             "align": "center"
>           },
>           {
>             "content": "𝑠<sub>2</sub>",
>             "header": true,
>             "bg": "#F4F5F7"
>           }
>         ],
>         [
>           {
>             "content": "from",
>             "header": true,
>             "bg": "#F4F5F7",
>             "align": "center",
>             "rowspan": 2
>           },
>           {
>             "content": "𝑠<sub>1</sub>",
>             "header": true,
>             "bg": "#F4F5F7",
>             "align": "center"
>           },
>           {
>             "content": "0.6",
>             "align": "center"
>           },
>           "0.4"
>         ],
>         [
>           {
>             "content": "𝑠<sub>2</sub>",
>             "header": true,
>             "bg": "#F4F5F7",
>             "align": "center"
>           },
>           {
>             "content": "0.7",
>             "align": "center"
>           },
>           "0.3"
>         ]
>       ]
>     }
>     ```
>
> this Markov Chain can be graphically represented in the following ways:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Finite Graphical Representation of Transition Matrix 𝑇",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Infinitely Growing Graphical Representation of a Sequence of Time-Variables",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Finite Graphical Representation of a Sequence of Time-Variables",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "nodes as state-values",
>         "align": "center"
>       },
>       {
>         "content": "nodes as time-variables",
>         "align": "center"
>       },
>       {
>         "content": "nodes as time-variables",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "![[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)/markov-chain-representation-example-1.png|301]]",
>         "align": "center",
>         "rowspan": 2
>       },
>       "![[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)/markov-chain-representation-example-2.png|301]]",
>       {
>         "content": "![[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)/markov-chain-representation-example-3.png|301]]",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝑋<sup>(𝑡)</sup>=𝑠<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub><font style=\"color: rgb(128,128,128);\">where 𝑖∊{1,2} becaus</font><font style=\"color: rgb(128,128,128);\">e there are 2 state-values {𝑠<sub>1</sub>, 𝑠<sub>2</sub></font><font style=\"color: rgb(128,128,128);\">}</font>",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       {
>         "content": "used as a graphical representation of a transition matrix 𝑇",
>         "align": "center"
>       },
>       {
>         "content": "used as a graphical representation of an ONGOING sequence of time-variables",
>         "align": "center"
>       },
>       {
>         "content": "used as graphical representation of a RECORDED sequence of time-variables or a segment of a larger sequence\n\nthe probability of a sequence can be calculated with the formula:\n\n𝐏(𝑠<sup>(1)</sup>)·\\[𝛱<sub>2≤𝑖≤𝑇</sub> 𝐏(𝑠<sup>(𝑖)</sup>|𝑠<sup>(𝑖-1)</sup>)\\]\n\nwhere 𝐏(𝑠<sup>(𝑖)</sup>|𝑠<sup>(𝑖-1)</sup>) is the probability going from state 𝑠<sup>(𝑖-1)</sup> to 𝑠<sup>(𝑖)</sup>which can be found in the transition matrix 𝑇",
>         "align": "center",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "each arrow is labelled with the probability of the [[Stochastic／Random／Markov Models／Process|Markov Process]] changing from one state to another state\n\nfor example, if the Markov Process is in state 𝑠<sub>1</sub>, then the probability it changes to state 𝑠<sub>2</sub> is 0.4, while the probability it remains in state 𝑠<sub>1</sub> is 0.6",
>         "align": "center"
>       },
>       {
>         "content": "at current time 𝑡 the markov chain is at state 𝑠<sub>1</sub> (this is denoted as 𝑋<sup>(𝑡)</sup>=𝑠<sub>1</sub>). At next time-step 𝑡+1 the markov chain chooses the next state to be: (𝑠<sub>1</sub> with probability 0.6) and (𝑠<sub>2</sub> with probability 0.4). This random transition is denoted as 𝐏(𝑋<sup>(𝑡+1)</sup>|𝑋<sup>(𝑡)</sup>=𝑠<sub>1</sub>). Notice that 𝑋<sup>(𝑡-1)</sup>=𝑠<sub>1</sub> has nothing to do with choosing the next state, nor do any previous ones 𝑋<sup>(𝑡-2)</sup>, ...",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "<font style=\"color: rgb(0,128,0);\">PRO: fully represents transition matrix</font>\n<font style=\"color: rgb(128,0,0);\">CON: not able to represent a sequence</font>",
>         "align": "center"
>       },
>       {
>         "content": "<font style=\"color: rgb(0,128,0);\">PRO: able to represent a sequence</font>\n<font style=\"color: rgb(128,0,0);\">CON: can't represent any probabilities of transition matrix</font>",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
# Resources
- [Coursera - Discrete Time Markov Chains (DTMC)](https://www.coursera.org/lecture/quantitative-model-checking/introduction-to-dtmcs-83cbb)
