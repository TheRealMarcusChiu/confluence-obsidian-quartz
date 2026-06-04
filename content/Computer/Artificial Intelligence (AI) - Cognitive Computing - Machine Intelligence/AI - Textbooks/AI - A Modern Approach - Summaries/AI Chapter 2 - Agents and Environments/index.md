---
title: "AI Chapter 2 - Agents and Environments"
created: 2019-03-15T14:44:31.946-05:00
modified: 2023-12-18T18:17:36.324-06:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
- rationality only concerns with the end decisions that are made, not the thought process behind them
- "brains are to intelligent, as wings are to flight" This is often quoted to posit the practicality in building intelligent agents should not be "exactly" the same as a brain. As flight does not imitate the mechanics of wings but takes advantage of aerodynamics. However, I am not a proponent of this proposition. I believe the imitation of brains lead superior intelligent agents.

# Environment Properties
- <strong>fully-observable/accessible</strong> v <strong>partially-observable/in-accessible</strong>
	- accessible - agent has complete state of the environment
	- in-accessible -
- <strong>deterministic</strong> v <strong>non-deterministic/stochastic</strong> v <strong>strategic</strong>
	- deterministic - next state of environment is completely determined by the current state and the agent's action
	- strategic - environment is deterministic except for the actions of other agents
- <strong>episodic</strong> v <strong>non-episodic/sequential</strong>
	- episodic - in an episodic environment, the agent's experience is divided into "episodes." Each episode consists of the agent perceiving and then acting. The quality of its action depends just on the episode itself, because subsequent episodes do not depend on what actions occur in previous episodes. Episodic environments are much simpler because the agent does not need to think ahead only on the episode itself
- <strong>static</strong> v <strong>dynamic</strong> v <strong>semi-dynamic</strong>
	- static - environment is unchanging
	- dynamic - environment is changing
	- semi-dynamic - environment does not change with time but the agent's performance score does
- <strong>discrete</strong> v <strong>continuous</strong>
	- discrete - environment provided fixed number of distinct percepts, actions, and/or environment states
	- continuous - environment has a continuous number of distinct percepts, actions, and/or environment states
- <strong>single-agent</strong> v <strong>multi-agent</strong>
	- single - agent operating alone in an environment
- <strong>known</strong> v <strong>unknown</strong>
	- known - the agent knows the rules of the environment

# 4 types of Agents
- <strong>simple reflex agents</strong>
	- uses (if condition then action)
	- environments need to be fully-observable
- <strong>agents that keep track of the world</strong>
	- agents have internal states
	- uses (if condition then action)
	- environments can be partially-observable
- <strong>goal-based agents</strong>
	- does not use (if condition then action)
	- but actions are chosen based on reaching towards goal
	- agent actions are towards a goal
- <strong>utility-based agents</strong>
	- a goal-based agent with a metric to assist the agent in moving toward the goal faster
- 2 kinds of agents can be built based on [[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|propositional logic]]:
	- inference-based - use inference algorithms to keep track of the world and deduce hidden properties
	- circuit-based - represents propositions as bits in registers and updates them using signal propagation in logical circuits
