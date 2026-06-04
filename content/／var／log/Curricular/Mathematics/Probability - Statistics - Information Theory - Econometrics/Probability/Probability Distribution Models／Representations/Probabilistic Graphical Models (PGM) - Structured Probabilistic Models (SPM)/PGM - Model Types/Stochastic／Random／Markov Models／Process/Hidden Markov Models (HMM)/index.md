---
title: "Hidden Markov Models (HMM)"
created: 2021-09-13T05:26:59.852-05:00
modified: 2026-05-24T19:44:23.630-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children:
  - "[[HMM - Inference - Forward-Backward Algorithm]]"
  - "[[HMM - Inference - Viterbi Algorithm]]"
  - "[[HMM - Inference By Enumeration & Variable Elimination]]"
  - "[[HMM - Learning - Baum-Welch Algorithm]]"
  - "[[HMM - Learning - Maximum Likelihood Estimation (MLE)]]"
  - "[[Hierarchical Hidden Markov Model (HHMM)]]"
---
###### Hidden Markov Model (HMM)
````excerpt
- reading prerequisite: [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]]
- HMM is an extension of [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]] where the state-values are NOT fully observable
- HMMs are also considered as:
	- a type of [[PGM - Model Types|probabilistic graphical model]]
	- an extension of [[Naive Bayes Model - Bayes Model|Naive Bayes Models]] that model sequences
	- the simplest [[Dynamic Bayesian Networks (DBN)|Dynamic Bayesian Network]]
	- a sequential [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised]], [[ML - Generative／Joint vs Discriminative／Conditional Models|generative]] model
````
^excerpt

# HMM - Intro

![](https://www.youtube.com/watch?v=kqSzLo9fenk)
# HMM - Intuition & Components
- HMM is an extension of [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]] where the states are NOT fully observable. In other words, each state-value is decomposed into 2 parts:
	- 1 hidden-state 𝑌 - each hidden-state can have 1 of 𝑛 possible hidden-state-values {𝑠<sub>1</sub>, ..., 𝑠<sub>𝑛</sub>}
	- 1 observable-state 𝑋 - each observable-state can have 1 of 𝑚 possible observable-state-values {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑚</sub>}
- at current time 𝑡 the HMM is at some hidden-state-value 𝑠<sup>(𝑡)</sup>. This 𝑠<sup>(𝑡)</sup> is 1 of the 𝑛 possible hidden-state-values {𝑠<sub>1</sub>, ..., 𝑠<sub>𝑛</sub>}
	- 𝑠<sup>(𝑡)</sup>= 𝑠<sub>𝑖</sub> <font style="color: rgb(128,128,128);">\# where 𝑠<sub>𝑖</sub>∊{𝑠<sub>1</sub>, ..., 𝑠<sub>𝑛</sub>}</font>
- this is denoted as 𝑌<sup>(𝑡)</sup>=𝑠<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub><font style="color: rgb(128,128,128);">\# these 2 ways to represent the state-value of 𝑌<sup>(𝑡)</sup> will be useful as we go on</font>
- as the HMM moves to time 𝑡+1, it <font style="color: rgb(204,153,255);"><strong>RANDOMLY</strong></font> chooses the next hidden-state-value 𝑠<sup>(𝑡+1)</sup>denoted as:
	- 𝑌<sup>(𝑡+1)</sup>=𝑠<sup>(𝑡+1)</sup>=𝑠<sub>?</sub>
- based on the chosen 𝑠<sup>(𝑡+1)</sup> the HMM also <font style="color: rgb(153,204,255);"><strong>RANDOMLY</strong></font> chooses an observable-state-value 𝑥<sup>(𝑡+1)</sup>denoted as:
	- 𝑋<sup>(𝑡+1)</sup>=𝑥<sup>(𝑡+1)</sup>=𝑥<sub>?</sub>
- naturally this forms a sequence of (𝑋,𝑌) pairs as time progresses:
	- { ..., (𝑋<sup>(𝑡-1)</sup>,𝑌<sup>(𝑡-1)</sup>), (𝑋<sup>(𝑡)</sup>,𝑌<sup>(𝑡)</sup>), ...}
- the sequence of (𝑋,𝑌) pairs is the "recorded history" of state-values over time. However the only values we observe are the 𝑋s not 𝑌s
- this sequence can grow infinitely long
- the 𝑌s and 𝑋s are called time-variables, where:
	- each 𝑌 holds 1 hidden-state-value 𝑠<sub>?</sub>
	- each 𝑋 holds 1 observable-state-value 𝑥<sub>?</sub>

###### HMM - Required Components (<font style="color: rgb(204,153,255);">State Transition Matrix</font> & <font style="color: rgb(153,204,255);">Emission Matrix</font>)

> [!expand]- Click here to expand...
> at each time-step the <font style="color: rgb(204,153,255);">RANDOM</font> choice of next hidden-state-value 𝑠<sup>(𝑡+1)</sup><sub></sub>is characterized by a 𝑛x𝑛 [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|transition matrix]] 𝑇 where:
> - each entry 𝑇\[𝑖,𝑗\]:
> 	- contains a value between 0 and 1 (inclusive)
> 	- denotes the probability of transitioning from state 𝑠<sub>𝑖</sub>to 𝑠<sub>𝑗</sub><font style="color: rgb(128,128,128);">\# i.e. 𝐏(𝑌<sup>(𝑡+1)</sup>=𝑠<sup>(𝑡+1)</sup>=𝑠<sub>𝑗</sub>|𝑌<sup>(𝑡)</sup>=𝑠<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub>)</font>
> - each row of entries in 𝑇 must sum up to 1
>
> at each time-step the <font style="color: rgb(153,204,255);">RANDOM</font> choice of observable-state-value 𝑥<sup>(𝑡+1)</sup> is characterized by a 𝑛x𝑚 <font style="color: rgb(153,204,255);">emission matrix</font> 𝐸 where:
> - each entry 𝐸\[𝑗,𝑘\]:
> 	- contains a value between 0 and 1 (inclusive)
> 	- denotes the probability of observing value 𝑥<sub>𝑘</sub> when on state 𝑠<sub>𝑗</sub> <font style="color: rgb(128,128,128);">\# i.e. 𝐏(𝑋<sup>(t+1)</sup>=𝑥<sup>(t+1)</sup>=𝑥<sub>𝑘</sub></font><font style="color: rgb(128,128,128);">|𝑌<sup>(t+1)</sup>=𝑠<sup>(𝑡+1)</sup>=𝑠<sub>𝑗</sub>)</font>
>
> so far we have described a HMM that models a [[Stochastic／Random／Markov Models／Process|Markov Process]] with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|1st-Order Markov Assumption]]. Just like [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]], HMMs can be extended to model a:
> - Markov Processes with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|2nd-Order Markov Assumptions]]
> - Markov Processes with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Higher-Order Markov Assumptions]]
###### HMM - Optional Components (<font style="color: rgb(255,153,0);">Starting State Probabilities</font> & <font style="color: rgb(153,204,0);">Ending State Probabilities</font>)

> [!expand]- Click here to expand...
> if an application has a sequence with a definite <font style="color: rgb(255,153,0);">START</font> state 𝑌<sup>(1)</sup>=𝑌<sup>(𝑠𝑡𝑎𝑟𝑡)</sup>, it's [[Probability Distributions|probability distribution]] CANNOT be modeled with a <font style="color: rgb(204,153,255);">transition matrix</font>. This is because there is no previous state. We solve this by adding another component called <font style="color: rgb(255,153,0);">Starting State Probabilities</font>, which is characterized by a [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete probability distribution]] of 𝑛 discrete values (<font style="color: rgb(128,128,128);">one for each hidden-state-value 𝑠<sub>𝑗</sub> {𝑠</font><font style="color: rgb(128,128,128);"><sub>1</sub>, ..., 𝑠<sub>𝑛</sub></font><font style="color: rgb(128,128,128);">}</font>):
> - <font style="color: rgb(255,153,0);">𝐏(𝑌<sup>(1)</sup>=𝑠<sup>(1)</sup>=𝑠<sub>𝑗</sub>)</font> equals some probability <font style="color: rgb(128,128,128);">\# for 𝑗 = 1 to 𝑛</font>
>
> if an application has a sequence with a definite <font style="color: rgb(153,204,0);">END</font> state 𝑌<sup>(𝑇)</sup>=𝑌<sup>(𝑒𝑛𝑑)</sup>, we want to know the probability of a sequence ENDING at a particular state. This probability distribution CANNOT be modeled with a <font style="color: rgb(204,153,255);">transition matrix</font> because the matrix assumes the sequence continues for eternity. We need a separate component called <font style="color: rgb(153,204,0);">Ending State Probabilities</font>, which is characterized by a discrete probability distribution of 𝑛 discrete values (<font style="color: rgb(128,128,128);">one for each hidden-state-value 𝑠<sub>𝑗</sub> {𝑠</font><font style="color: rgb(128,128,128);"><sub>1</sub>, ..., 𝑠<sub>𝑛</sub></font><font style="color: rgb(128,128,128);">}</font>):
> - <font style="color: rgb(153,204,0);">𝐏(𝑌<sup>(𝑇)</sup>=𝑠<sup>(𝑇)</sup>=𝑠<sub>𝑗</sub>)</font> equals some probability <font style="color: rgb(128,128,128);">\# for 𝑗 = 1 to 𝑛</font>
# HMM - Visual/Graphical Representations

> [!expand]- Click here to expand...
> HMMs can be graphically represented in 3 ways:
> 1. finite graphical representation of the <font style="color: rgb(204,153,255);">transition matrix</font> 𝑇 (nodes as hidden-state-values & observable-state-values)
> 2. finite graphical representation of a sequence of time-variables 𝑋's (nodes as time-variables)
> 3. infinitely growing graphical representation of a sequence of time-variables 𝑋's (nodes as time-variables)
>
> ### HMM - Visual/Graphical Representations - Examples
> > [!tabs]
> >
> > === HMM (1ʳˢᵗ-Order Markov Assumption)
> >
> > given a HMM with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|FIRST-order markov assumption]] consisting of:
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "- 2 hidden-state-values {𝑠<sub>1</sub>, 𝑠<sub>2</sub>}\n- 3 observable-state-values {𝑥<sub>1</sub>, 𝑥<sub>2</sub>, 𝑥<sub>3</sub>}",
> >         "colspan": 2
> >       },
> >       null
> >     ],
> >     [
> >       {
> >         "content": [
> >           "2x2 transition matrix 𝑇",
> >           {
> >             "rows": [
> >               [
> >                 {
> >                   "content": "𝑇",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center",
> >                   "colspan": 2,
> >                   "rowspan": 2
> >                 },
> >                 null,
> >                 {
> >                   "content": "to",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center",
> >                   "colspan": 2
> >                 },
> >                 null
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "from",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "rowspan": 2
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7"
> >                 },
> >                 {
> >                   "content": "0.6",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.4",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7"
> >                 },
> >                 {
> >                   "content": "0.7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.3",
> >                   "align": "center"
> >                 }
> >               ]
> >             ]
> >           }
> >         ]
> >       },
> >       {
> >         "content": [
> >           "2x3 emission matrix 𝐸",
> >           {
> >             "rows": [
> >               [
> >                 {
> >                   "content": "𝐸",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center",
> >                   "colspan": 2,
> >                   "rowspan": 2
> >                 },
> >                 null,
> >                 {
> >                   "content": "observation",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center",
> >                   "colspan": 3
> >                 },
> >                 null,
> >                 null
> >               ],
> >               [
> >                 {
> >                   "content": "𝑥<sub>1</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>2</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>3</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "state",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center",
> >                   "rowspan": 2
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.1",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.2",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "1",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 }
> >               ]
> >             ]
> >           }
> >         ]
> >       }
> >     ]
> >   ]
> > }
> > ```
> >
> > this HMM can be graphically represented in the following ways:
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "Finite Graphical Representation of Transition Matrix 𝑇 and Emission Matrix 𝐸",
> >         "header": true,
> >         "bg": "#F4F5F7",
> >         "align": "center"
> >       },
> >       {
> >         "content": "Infinitely Growing Graphical Representation of a Sequence of Time-Variables",
> >         "header": true,
> >         "bg": "#F4F5F7",
> >         "align": "center"
> >       },
> >       {
> >         "content": "Finite Graphical Representation of a Sequence of Time-Variables",
> >         "header": true,
> >         "bg": "#F4F5F7",
> >         "align": "center"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "nodes as state-values (hidden & observed)",
> >         "align": "center"
> >       },
> >       {
> >         "content": "nodes as time-variables",
> >         "align": "center"
> >       },
> >       {
> >         "content": "nodes as time-variables",
> >         "align": "center"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "![[Hidden Markov Models (HMM)/hidden-markov-model-first-order-markov-assumption-graphical-representation-1.png|301]]",
> >         "align": "center",
> >         "rowspan": 2
> >       },
> >       "![[Hidden Markov Models (HMM)/hidden-markov-model-first-order-markov-assumption-representation-example-2.png|301]]",
> >       {
> >         "content": "![[Hidden Markov Models (HMM)/hidden-markov-model-first-order-markov-assumption-representation-example-3.png|301]]",
> >         "align": "center"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "𝑌<sup>(𝑡)</sup>=𝑠<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub><font style=\"color: rgb(128,128,128);\">where 𝑖∊{1,2} becaus</font><font style=\"color: rgb(128,128,128);\">e there are 2 hidden-state-values {𝑠<sub>1</sub>, 𝑠<sub>2</sub></font>}\n<font style=\"color: rgb(51,51,51);\">𝑋<sup>(𝑡)</sup>=𝑥<sup>(𝑡)</sup>=𝑥<sub>𝑖</sub></font>where 𝑖∊{1,2,3} because there are 2 observable-state-values {𝑥<sub>1</sub>, 𝑥<sub>2</sub>, 𝑥<sub>3</sub>}",
> >         "align": "center",
> >         "colspan": 2
> >       },
> >       null
> >     ],
> >     [
> >       {
> >         "content": "used as a graphical representation of a transition matrix 𝑇",
> >         "align": "center"
> >       },
> >       {
> >         "content": "used as a graphical representation of an ONGOING sequence of time-variables",
> >         "align": "center"
> >       },
> >       {
> >         "content": "used as graphical representation of a RECORDED sequence of time-variables or a segment of a larger sequence\n\nthe probability of a sequence can be calculated with the formula:\n\n𝐏(𝑠<sup>(1)</sup>)𝐏(𝑥<sup>(1)</sup>|𝑠<sup>(1)</sup>)·\\[𝛱<sub>2≤𝑖≤𝑇</sub> 𝐏(𝑠<sup>(𝑖)</sup>|𝑠<sup>(𝑖-1)</sup>)𝐏(𝑥<sup>(𝑖)</sup>|𝑠<sup>(𝑖)</sup>)\\]\n\n𝐏(𝑠<sup>(𝑖)</sup>|𝑠<sup>(𝑖-1)</sup>) is the probability going from state 𝑠<sup>(𝑖-1)</sup> to 𝑠<sup>(𝑖)</sup>which can be found in the <font style=\"color: rgb(204,153,255);\">transition matrix</font> 𝑇\n\n𝐏(𝑥<sup>(𝑖)</sup>|𝑠<sup>(𝑖)</sup>) is the probability of emitting while 𝑥<sup>(𝑖)</sup> in state 𝑠<sup>(𝑖)</sup> which can be found in <font style=\"color: rgb(153,204,255);\">emission matrix</font> 𝐸",
> >         "align": "center",
> >         "rowspan": 2
> >       }
> >     ],
> >     [
> >       {
> >         "content": "each <font style=\"color: rgb(204,153,255);\">pink arrow</font> is labelled with the probability of the [[Stochastic／Random／Markov Models／Process|Markov Process]] changing from one state to another state\n\nfor example, if the Markov Process is in state 𝑠<sub>2</sub>, then the probability it changes to state 𝑠<sub>1</sub> is 0.7, while the probability it remains in state 𝑠<sub>2</sub> is 0.3\n\nalso when the Markov Process is at state 𝑠<sub>2</sub> it emits 1 observable state value based on the <font style=\"color: rgb(153,204,255);\">emission matrix</font> 𝐸. In this case state 𝑠<sub>2</sub> will always emit 𝑥<sub>2</sub>",
> >         "align": "center"
> >       },
> >       {
> >         "content": "at current time 𝑡 the markov chain is at state 𝑠<sub>1</sub> (this is denoted as 𝑌<sup>(𝑡)</sup>=𝑠<sub>1</sub>). At next time-step 𝑡+1 the markov chain chooses the next state to be: (𝑠<sub>1</sub> with probability 0.6) and (𝑠<sub>2</sub> with probability 0.4). This random transition is denoted as 𝐏(𝑌<sup>(𝑡+1)</sup>|𝑌<sup>(𝑡)</sup>=𝑠<sub>1</sub>). Notice that 𝑌<sup>(𝑡-1)</sup>=𝑠<sub>2</sub> has nothing to do with choosing the next state, nor do any previous ones 𝑌<sup>(𝑡-2)</sup>, ...",
> >         "align": "center"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "PRO: fully represents <font style=\"color: rgb(204,153,255);\">transition matrix</font>\nCON: not able to represent a sequence",
> >         "align": "center"
> >       },
> >       {
> >         "content": "PRO: able to represent a sequence\nCON: can't represent any probabilities of <font style=\"color: rgb(204,153,255);\">transition matrix</font>",
> >         "align": "center",
> >         "colspan": 2
> >       },
> >       null
> >     ]
> >   ],
> >   "tableStyle": "width: 100.0%;"
> > }
> > ```
> >
> > === HMM (2ⁿᵈ-Order Markov Assumption)
> >
> > given a HMM with [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|SECOND-order markov assumption]] consisting of:
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "- 2 hidden-state-values {𝑠<sub>1</sub>, 𝑠<sub>2</sub>}\n- 3 observable-state-values {𝑥<sub>1</sub>, 𝑥<sub>2</sub>, 𝑥<sub>3</sub>}",
> >         "colspan": 2
> >       },
> >       null
> >     ],
> >     [
> >       {
> >         "content": [
> >           "2x2x2 transition matrix 𝑇 (flattened for visual)",
> >           {
> >             "rows": [
> >               [
> >                 {
> >                   "content": "pre",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "cur",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "next",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑇[p,c,n]\n𝐏(n|p,c)",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "rowspan": 5
> >                 },
> >                 {
> >                   "content": "pre",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "cur",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "next",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑇[p,c,n]\n𝐏(n|p,c)",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.5",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.5",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.3",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "1",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.6",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.4",
> >                   "align": "center"
> >                 }
> >               ]
> >             ]
> >           }
> >         ]
> >       },
> >       {
> >         "content": [
> >           "2x2x3 emission matrix 𝐸 (flattened for visual)",
> >           {
> >             "rows": [
> >               [
> >                 {
> >                   "content": "pre",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "cur",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "x",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝐸[p,c,x]\n𝐏(x|p,c)",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center",
> >                   "rowspan": 7
> >                 },
> >                 {
> >                   "content": "pre",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "cur",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "x",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝐸[p,c,x]\n𝐏(x|p,c)",
> >                   "header": true,
> >                   "bg": "#F4F5F7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.33",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.1",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.33",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.2",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>3</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.33",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>3</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0.7",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "1",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 }
> >               ],
> >               [
> >                 {
> >                   "content": "𝑠<sub>1</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>3</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "1",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑠<sub>2</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "𝑥<sub>3</sub>",
> >                   "align": "center"
> >                 },
> >                 {
> >                   "content": "0",
> >                   "align": "center"
> >                 }
> >               ]
> >             ]
> >           }
> >         ]
> >       }
> >     ]
> >   ]
> > }
> > ```
> >
> > this HMM can be graphically represented in the following ways:
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "Finite Graphical Representation of Transition Matrix 𝑇 and Emission Matrix 𝐸",
> >         "header": true,
> >         "bg": "#F4F5F7",
> >         "align": "center"
> >       },
> >       {
> >         "content": "Infinitely Growing Graphical Representation of a Sequence of Time-Variables",
> >         "header": true,
> >         "bg": "#F4F5F7",
> >         "align": "center"
> >       },
> >       {
> >         "content": "Finite Graphical Representation of a Sequence of Time-Variables",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "nodes as state-values (hidden & observed)",
> >         "align": "center"
> >       },
> >       {
> >         "content": "nodes as time-variables",
> >         "align": "center"
> >       },
> >       {
> >         "content": "nodes as time-variables",
> >         "align": "center"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "<strong>IS IT POSSIBLE?\nBELOW IS JUST A PLACEHOLDER</strong>\n\n![[Hidden Markov Models (HMM)/hidden-markov-model-second-order-markov-assumption-representation-example-2.png|301]]",
> >         "align": "center",
> >         "rowspan": 2
> >       },
> >       {
> >         "content": "![[Hidden Markov Models (HMM)/hidden-markov-model-second-order-markov-assumption-representation-example-2.png|301]]",
> >         "align": "center"
> >       },
> >       {
> >         "content": "![[Hidden Markov Models (HMM)/hidden-markov-model-second-order-markov-assumption-representation-example-3.png|301]]",
> >         "align": "center"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "𝑌<sup>(𝑡)</sup>=𝑠<sup>(𝑡)</sup>=𝑠<sub>𝑖</sub><font style=\"color: rgb(128,128,128);\">where 𝑖∊{1,2} becaus</font><font style=\"color: rgb(128,128,128);\">e there are 2 hidden-state-values {𝑠<sub>1</sub>, 𝑠<sub>2</sub></font>}\n<font style=\"color: rgb(51,51,51);\">𝑋<sup>(𝑡)</sup>=𝑥<sup>(𝑡)</sup>=𝑥<sub>𝑖</sub></font>where 𝑖∊{1,2,3} because there are 2 observable-state-values {𝑥<sub>1</sub>, 𝑥<sub>2</sub>, 𝑥<sub>3</sub>}",
> >         "align": "center",
> >         "colspan": 2
> >       },
> >       null
> >     ],
> >     [
> >       {
> >         "content": "used as a graphical representation of a <font style=\"color: rgb(204,153,255);\">transition matrix</font> 𝑇",
> >         "align": "center"
> >       },
> >       {
> >         "content": "used as a graphical representation of an ONGOING sequence of time-variables",
> >         "align": "center"
> >       },
> >       {
> >         "content": "used as graphical representation of a RECORDED sequence of time-variables or a segment of a larger sequence\n\nthe probability of a sequence can be calculated with the formula:\n\n𝐏(𝑠<sup>(1)</sup>)𝐏(𝑥<sup>(1)</sup>|𝑠<sup>(1)</sup>)·𝐏(𝑠<sup>(2)</sup>|𝑠<sup>(1)</sup>)𝐏(𝑥<sup>(2)</sup>|𝑠<sup>(2)</sup>,𝑠<sup>(1)</sup>)·\\[𝛱<sub>2≤𝑖≤𝑇</sub> 𝐏(𝑠<sup>(𝑖)</sup>|𝑠<sup>(𝑖-1)</sup>,𝑠<sup>(𝑖-2)</sup>)𝐏(𝑥<sup>(𝑖)</sup>|𝑠<sup>(𝑖)</sup>,𝑠<sup>(𝑖-1)</sup>)\\]",
> >         "align": "center",
> >         "rowspan": 2
> >       }
> >     ],
> >     [
> >       {
> >         "align": "center"
> >       },
> >       {
> >         "align": "center"
> >       }
> >     ]
> >   ],
> >   "tableStyle": "width: 100.0%;"
> > }
> > ```
# HMM - Training/Learning
- given an observation sequence or set of observation sequences, learn the components of the 𝐻𝑀𝑀
- training a 𝐻𝑀𝑀 means to learn the following probabilities:
	- <font style="color: rgb(204,153,255);">state transition matrix/function: 𝐏<sub>𝑡𝑟𝑎𝑛𝑠</sub>(𝑌<sup>(𝑡)</sup>=𝑠<sub>?</sub>|𝑌<sup>(𝑡-1)</sup>=𝑠<sub>?</sub>)</font>
	- <font style="color: rgb(153,204,255);">emission matrix/function: 𝐏<sub>𝑒𝑚𝑖𝑠𝑠</sub>(𝑋=𝑥<sub>?</sub>|𝑌=𝑠<sub>?</sub>)</font>
	- <font style="color: rgb(255,153,0);">starting state probabilities: 𝐏<sub>𝑠𝑡𝑎𝑟𝑡</sub>(𝑌<sup>(1)</sup>=𝑠<sub>?</sub>)</font> <font style="color: rgb(128,128,128);">\# optional</font>
	- <font style="color: rgb(153,204,0);">ending state probabilities: 𝐏<sub>𝑒𝑛𝑑</sub>(𝑌<sup>(𝑇)</sup>=𝑠<sub>?</sub>)</font> <font style="color: rgb(128,128,128);">\# optional</font>
- methods in learning the probabilities:
	- [[HMM - Learning - Maximum Likelihood Estimation (MLE)]]
	- [[HMM - Learning - Baum-Welch Algorithm]]

# HMM - Inference Problems

all inference problems can be solved via [[HMM - Inference By Enumeration & Variable Elimination]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Likelihood Problem 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given a trained 𝐻𝑀𝑀, an observation sequence {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>} and the corresponding hidden state sequence {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>}, determine likelihood of ([[Conditional Probability Distribution (CPD)|conditional probability]]):\n\t- 𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup><strong><font style=\"color: rgb(255,0,0);\">|</font></strong>𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>) = 𝛱<sub><font style=\"color: rgb(255,0,0);\">1</font>≤𝑖≤𝑇</sub>\\[<font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖)</sup>)<font style=\"color: rgb(51,51,51);\">\\]</font></font>\n\t\t- <font style=\"color: rgb(153,204,255);\">[[Growth／Asymptotic Complexity／Analysis (Time／Space／Memory Complexity)|time-complexity]]<font style=\"color: rgb(128,128,128);\"> = 𝑂(𝑇)</font></font>"
    ],
    [
      {
        "content": "Likelihood Problem 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given a trained 𝐻𝑀𝑀, an observation sequence {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>} and the corresponding hidden state sequence {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>}, determine likelihood of ([[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability]]):\n\t- <font style=\"color: rgb(128,0,0);\">𝐏(</font><font style=\"color: rgb(128,0,0);\">𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>,</font><font style=\"color: rgb(128,0,0);\">𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>)</font> = <font style=\"color: rgb(255,153,0);\">𝐏(𝑌=𝑠<sup>(1)</sup>)</font><font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(1)</sup>|𝑌=𝑠<sup>(1)</sup>)<font style=\"color: rgb(51,51,51);\">·</font></font>𝛱<sub><font style=\"color: rgb(255,0,0);\">2</font>≤𝑖≤𝑇</sub>\\[<font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖)</sup>)<font style=\"color: rgb(204,153,255);\">𝐏(𝑌=𝑠<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖-1)</sup>)</font></font>\\]·<font style=\"color: rgb(153,204,0);\">𝐏(𝑌=𝑠<sup>(𝑇)</sup>)</font>\n\t\t- <font style=\"color: rgb(153,204,0);\"><font style=\"color: rgb(128,128,128);\">multiplying by 𝐏(𝑌=𝑠<sup>(𝑇)</sup>) is optional</font></font>\n\t\t- <font style=\"color: rgb(153,204,0);\"><font style=\"color: rgb(128,128,128);\">time-complexity = 𝑂(𝑇) \\# however, each of the <font style=\"color: rgb(128,128,128);\">𝑇</font> steps are a constant larger than problem 1</font></font>"
    ],
    [
      {
        "content": "<strong>Likelihood Problem 3</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given a trained 𝐻𝑀𝑀 and an observation sequence {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>}, determine likelihood of:\n\t- <font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup></font><font style=\"color: rgb(0,128,0);\">)</font> = 𝛴<sub>𝑠<sup>(1)</sup>∊𝑌</sub> 𝛴<sub>𝑠<sup>(2)</sup>∊𝑌</sub> ... 𝛴<sub>𝑠<sup>(𝑇)</sup>∊𝑌</sub><font style=\"color: rgb(128,0,0);\">𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>,𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>)</font>\n\t- <font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup></font><font style=\"color: rgb(0,128,0);\">)</font> = 𝛴<sub>𝑠<sup>(1)</sup>∊𝑌</sub> 𝛴<sub>𝑠<sup>(2)</sup>∊𝑌</sub> ... 𝛴<sub>𝑠<sup>(𝑇)</sup>∊𝑌</sub> <strong>\\[</strong><font style=\"color: rgb(255,153,0);\">𝐏(𝑌=𝑠<sup>(1)</sup>)</font><font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(1)</sup>|𝑌=𝑠<sup>(1)</sup>)<font style=\"color: rgb(51,51,51);\">·</font></font>𝛱<sub><font style=\"color: rgb(255,0,0);\">2</font>≤𝑖≤𝑇</sub>\\[<font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖)</sup>)<font style=\"color: rgb(204,153,255);\">𝐏(𝑌=𝑠<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖-1)</sup>)</font></font>\\]·<font style=\"color: rgb(153,204,0);\">𝐏(𝑌=𝑠<sup>(𝑇)</sup>)</font><strong>\\]</strong>\n\t\t- <font style=\"color: rgb(128,128,128);\">multiplying by 𝐏(𝑌=𝑠</font><font style=\"color: rgb(128,128,128);\"><sup>(𝑇)</sup></font><font style=\"color: rgb(128,128,128);\">) is optional</font>\n\t\t- <font style=\"color: rgb(128,128,128);\">naive [[Probabilistic Inference - Inference by Enumeration Algorithm|enumeration]]'s </font><font style=\"color: rgb(128,128,128);\">time-complexity</font><font style=\"color: rgb(128,128,128);\"> = 𝑂(𝑇<font style=\"color: rgb(128,128,128);\">𝑛<sup>𝑇</sup></font>)</font>\n\t\t- <font style=\"color: rgb(128,128,128);\">[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination]]'s time-complexity =</font> <font style=\"color: rgb(128,128,128);\">𝑂(𝑇</font><font style=\"color: rgb(128,128,128);\">𝑛<sup>2</sup>) <font style=\"color: rgb(128,128,128);\">\\# see </font>[[BE／VE Algorithm - Complexity (Non-MAP vs MAP)|BE/VE Algorithm Complexity]]</font>\n- specialized methods in determining likelihood:\n\t- [[HMM - Inference - Forward-Backward Algorithm|Forward-Backward Algorithm]] will compute the probability that an HMM produced a given sequence of observations"
    ],
    [
      {
        "content": "Likelihood Problem 4",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given a trained 𝐻𝑀𝑀, an observation sequence {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>} and the corresponding hidden state sequence {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>}, determine likelihood of (conditional probability):\n\t- <font style=\"color: rgb(0,0,255);\">𝐏(</font><font style=\"color: rgb(0,0,255);\">𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>|𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>)</font> = <font style=\"color: rgb(128,0,0);\">𝐏(</font><font style=\"color: rgb(128,0,0);\">𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>,</font><font style=\"color: rgb(128,0,0);\">𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>)</font> / <font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>)</font>\n- Likelihood Problem 4 can be decomposed into 2 problems:\n\t- Likelihood Problem 2\n\t- Likelihood Problem 3"
    ],
    [
      {
        "content": "<strong>Decoding Problem</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given a trained 𝐻𝑀𝑀 and an observation sequence {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>}, determine the most likely hidden-state sequence {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>}\n\t- {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>} = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(1)</sup>∊𝑌</sub> ... 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(𝑇)</sup>∊𝑌</sub> <font style=\"color: rgb(0,0,255);\">𝐏(𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>|𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>) <font style=\"color: rgb(128,128,128);\">\\# Likelihood Problem 4</font></font>\n\t- {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>} = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(1)</sup>∊𝑌</sub> ... 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(𝑇)</sup>∊𝑌</sub> <font style=\"color: rgb(128,0,0);\">𝐏(𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>,𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>)<font style=\"color: rgb(51,51,51);\"> / </font><font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>)</font></font>\n\t- <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(34,34,34);\">{𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>} = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(1)</sup>∊𝑌</sub> ... </font><font style=\"color: rgb(34,34,34);\">𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(𝑇)</sup>∊𝑌</sub> <font style=\"color: rgb(128,0,0);\">𝐏(𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>,𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>) <font style=\"color: rgb(128,128,128);\">\\# 𝐏(𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑇)</sup>) is a constant</font></font></font></font>\n\t- {𝑠<sup>(1)</sup>, ..., 𝑠<sup>(𝑇)</sup>} = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(1)</sup>∊𝑌</sub> ... 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠<sup>(𝑇)</sup>∊𝑌</sub> <strong>\\[</strong><font style=\"color: rgb(255,153,0);\">𝐏(𝑌=𝑠<sup>(1)</sup>)</font><font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(1)</sup>|𝑌=𝑠<sup>(1)</sup>) <font style=\"color: rgb(51,51,51);\">· </font></font>𝛱<sub><font style=\"color: rgb(255,0,0);\">2</font>≤𝑖≤𝑇</sub>\\[<font style=\"color: rgb(153,204,255);\">𝐏(𝑋=𝑥<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖)</sup>)<font style=\"color: rgb(204,153,255);\">𝐏(𝑌=𝑠<sup>(𝑖)</sup>|𝑌=𝑠<sup>(𝑖-1)</sup>)</font></font>\\] · <font style=\"color: rgb(153,204,0);\">𝐏(𝑌=𝑠<sup>(𝑇)</sup>)</font><strong>\\]</strong> <font style=\"color: rgb(128,128,128);\">\\# multiplying by 𝐏(𝑌=𝑠</font><font style=\"color: rgb(128,128,128);\"><sup>(𝑇)</sup></font><font style=\"color: rgb(128,128,128);\">) is optional</font>\n\t\t- <font style=\"color: rgb(128,128,128);\">naive [[Probabilistic Inference - Inference by Enumeration Algorithm|enumeration]]'s </font><font style=\"color: rgb(128,128,128);\">time-complexity</font><font style=\"color: rgb(128,128,128);\"> = 𝑂(𝑇𝑛<sup>𝑇</sup>)</font>\n\t\t- <font style=\"color: rgb(128,128,128);\">[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination]]'s time-complexity =</font> <font style=\"color: rgb(128,128,128);\">𝑂(𝑇</font><font style=\"color: rgb(128,128,128);\">𝑛<sup>2</sup>) \\# see [[BE／VE Algorithm - Complexity (Non-MAP vs MAP)|BE/VE Algorithm Complexity]]</font>\n- specialized methods in decoding hidden-state sequence:\n\t- [[HMM - Inference - Viterbi Algorithm|Viterbi Algorithm]] will compute the sequence of hidden-state-values that best explains a given sequence of observations"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# HMM - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
- [[Hidden Markov Model (HMM) vs Naive Bayes Model|Naive Bayes Model vs Hidden Markov Model]]
- [[Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)]]
