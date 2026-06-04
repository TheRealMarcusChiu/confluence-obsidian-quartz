---
title: "AI Chapter 10 - Classical Planning"
created: 2019-04-12T15:49:57.903-05:00
modified: 2026-05-17T12:53:18.454-05:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
## Sections
- <strong>Definition of Classical Planning</strong> - develops an expressive yet carefully constrained language for representing planning problems
- <strong>Algorithms for Planning as State-Space Search</strong> - forward and backward search algorithms while using heuristics that can be derived from the structure of the representation
- <strong>Planning Graphs</strong> - the data-structure planning graph can make the search for a plan more efficient
- <strong>Other Classical Planning Approaches</strong> - discuss other approaches to planning

## Introduction

this chapter covers fully observable, deterministic, static environments with single agents
chapters [[AI Chapter 11 - Planning and Acting in the Real World|11]] and 17 cover partially observable, stochastic, dynamic environments with multiple agents
- planning combines <font style="color: rgb(128,128,128);">search</font> and <font style="color: rgb(128,128,128);">logic</font>
- planning is an exercise of controlling combinatorial explosion

# Definition of Classical Planning
The problem-solving agent of Chapter 3 can find sequences of actions that result in a goal state. But it deals with atomic representations of states and thus needs good domain-specific heuristics to perform well. The hybrid propositional logical agent of Chapter 7 can find plans without domain-specific heuristics because it uses domain-independent heuristics based on the logical structure of the problem. But it relies on ground (variable-free) propositional inference, which means that it may be swamped when there are many actions and states. For example, in the wumpus world, the simple action of moving a step forward had to be repeated for all four agent orientations, T time steps, and n<sup>2</sup>current locations

in response to this, planning researchers have settled on a <strong>factored representation</strong> (where states of the world is represented by a collection of variables).
### <strong>Planning Domain Definition Language</strong> (PDDL)

allows us to express all 4Tn<sup>2</sup> actions with one action schema

can describe the 4 components of a search problem:
- 
	1. initial state
	2. actions available for each state
	3. results of each action
	4. goal test

sections:
- [[AI Chapter 10 - Classical Planning|state representation]]
- [[AI Chapter 10 - Classical Planning|action representation]]
- [[AI Chapter 10 - Classical Planning|states & actions - putting it together]]
- [[AI Chapter 10 - Classical Planning|example - the blocks world]]
- [[AI Chapter 10 - Classical Planning|complexity of classical planning]]

### <strong>State Representation</strong>

<strong>state</strong> is represented as <font style="color: rgb(128,128,128);">either</font> a:
- <strong>conjunction of <font style="color: rgb(51,153,102);">fluents</font></strong>, <font style="color: rgb(128,128,0);">which can be manipulated by <strong>logical inference</strong></font>
- <strong>set of <font style="color: rgb(51,153,102);">fluents</font></strong>, <font style="color: rgb(128,128,0);">which can be manipulated with <strong>set operations</strong></font>
- in either cases, the <font style="color: rgb(51,153,102);"><strong>fluents</strong> must be grounded</font>, functionless atoms (e.g. <em>Poor ∧ Unknown)</em>
	- for example, the following fluents are not allowed:
	- 
		- <em>At(x,y)</em> - because it's not grounded
		- <em>¬Poor</em> - because it's a negation
		- <em>At(Father(Fred), Sydney)</em> - because it uses a function symbol

### Action Representation

<strong>actions</strong> are represented by a set of <font style="color: rgb(0,51,102);"><strong>action schemas</strong></font> that implicit define the ACTIONS(s) and RESULT(s,a) functions needed to do a problem-solving search.
###### <strong>Action Schema</strong>

a set of ground (variable-free) actions can be represented by a single <strong><font style="color: rgb(128,128,128);">action schema</font></strong>

an <strong><font style="color: rgb(128,128,128);">action schema</font></strong> is a <em>most general unifier (MGU)</em> of the set of grounded actions

an <strong><font style="color: rgb(128,128,128);">action schema</font></strong> is a <em>lifted representation</em> (lifts the level of reasoning from propositional logic to a restricted subset of first-order logic)

for example, an <strong><font style="color: rgb(128,128,128);">action schema</font></strong> for flying a plane from one location to another:
```
// action schema
Action(Fly(p,from,to),
       PRECONDITION: At(p,from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to)
       EFFECT: ¬At(p,from) ∧ At(p,to))
```

an <font style="color: rgb(128,128,128);"><strong>action schema</strong></font> consists of:
- <strong>action name </strong>- a list of all variables used in the schema
- <strong>precondition </strong>- conjunction of literals (positive or negated atomic sentences)
- <strong>effect </strong>- conjunction of literals (positive or negative atomic sentences)

an <strong><font style="color: rgb(128,128,128);">action schema</font></strong> can have a mix of <font style="color: rgb(128,128,128);">variables</font> and/or <font style="color: rgb(128,128,128);">values/</font><font style="color: rgb(128,128,128);">objects</font>

we are free to choose whatever <font style="color: rgb(128,128,128);">values/objects</font> we want to instantiate the variables of the <strong><font style="color: rgb(128,128,128);">action schema</font></strong>. For example, here is one <strong><font style="color: rgb(128,128,128);">ground </font></strong><strong><font style="color: rgb(128,128,128);">action</font></strong> that results from substituting <font style="color: rgb(128,128,128);">values/objects</font> for all the variables of the <font style="color: rgb(128,128,128);"><strong>action schema</strong></font>:
```
// grounded action
Action(Fly(P1,SFO,JFK),
       PRECONDITION: At(P1,SFO) ∧ Plane(P1) ∧ Airport(SFO) ∧ Airport(JFK)
       EFFECT: ¬At(P1,SFO) ∧ At(P1,JFK))
```
### States & Actions - Putting it Together

an action <font style="color: rgb(128,128,128);"><em>a</em></font> is <strong>applicable</strong> in state <font style="color: rgb(128,128,128);">s</font> if the <em>preconditions</em> are satisfied by <em><font style="color: rgb(128,128,128);">s</font></em>

if an action <font style="color: rgb(128,128,128);"><em>a </em></font>has <font style="color: rgb(0,0,255);"><em>v </em></font><font style="color: rgb(0,0,255);">variables</font>, then, in a domain with <font style="color: rgb(255,102,0);"><em>k</em></font><font style="color: rgb(255,102,0);"> values/objects</font>, it takes <font style="color: rgb(128,128,128);">O(<font style="color: rgb(0,0,255);">v<font style="color: rgb(255,102,0);"><sup>k</sup></font></font>) </font>time in the worst case to find the applicable <em>grounded</em> actions of <font style="color: rgb(128,128,128);"><em>a</em></font>

sometimes we want to <strong>propositionalize </strong>a PDDL problem (replace each action schema with its set of ground actions) and then use a propositional solver such as SATPLAN to find a solution. However, this is impractical when <font style="color: rgb(0,0,255);"><em>v </em></font>and <font style="color: rgb(255,102,0);"><em>k </em></font>are large

The <strong>result </strong>of executing action <em><font style="color: rgb(128,128,128);">a </font></em>in state <em><font style="color: rgb(128,128,128);">s </font></em>is defined as a state <font style="color: rgb(128,128,128);"><em>s' </em></font>which is represented by:
1. the <em>set of fluents</em> formed by starting with <font style="color: rgb(128,128,128);">s</font>
2. removing the fluents that appear as negative literals in the action’s effects (what we call the <strong>delete list </strong>or DEL(<font style="color: rgb(128,128,128);"><em>a</em></font>))
3. adding the fluents that are positive literals in the action’s effects (what we call the <strong>add list </strong>or ADD(<font style="color: rgb(128,128,128);"><em>a</em></font>))

- <font style="color: rgb(128,128,128);"><em>RESULT(s,a) = (s − DEL(a)) ∪ ADD(a)</em></font>

A set of action schemas serves as a definition of a planning <font style="color: rgb(51,153,102);"><em>domain</em></font>. A specific <font style="color: rgb(128,0,128);"><em>problem </em></font>within the <font style="color: rgb(51,153,102);"><em>domain</em></font> is defined with the addition of an <strong>initial state</strong> and a <strong>goal</strong>
- the <strong>initial state </strong>is a conjunction of ground atoms. (as with all states, the closed-world assumption is used, which means that any atoms that are not mentioned are false.)
- the <strong>goal </strong>is just like a precondition: a conjunction of literals (positive or negative) that may contain variables, such as At (p, SFO ) ∧ Plane (p). Any variables are treated as existentially quantified, so this goal is to have any plane at SFO.

The <font style="color: rgb(128,0,128);">problem</font> is solved when we can find a sequence of actions that end in a <font style="color: rgb(255,102,0);">state </font><font style="color: rgb(128,128,128);">s </font>that <font style="color: rgb(0,0,255);">entails the goal <font style="color: rgb(128,128,128);"><em>g</em></font></font>, for example:
- the <font style="color: rgb(255,102,0);">state </font><font style="color: rgb(128,128,128);"><em>Rich ∧ Famous ∧ Miserable </em></font><font style="color: rgb(0,0,255);">entails the goal </font><font style="color: rgb(128,128,128);"><em>Rich ∧ Famous</em></font>
- the <font style="color: rgb(255,102,0);">state </font><font style="color: rgb(128,128,128);"><em>Plane(Plane1) ∧ At(Plane1,SFO) </em></font><font style="color: rgb(0,0,255);">entails the goal </font><font style="color: rgb(128,128,128);"><em>At(p,SFO) ∧ Plane(p)</em></font>

### Example - The Blocks World

![[AI Chapter 10 - Classical Planning/Screen Shot 2019-04-12 at 7.33.00 PM.png]]
### The Complexity of Classical Planning

2 types of decision problems:
- <strong>PlanSAT</strong> - is the question whether there exist any plan that solves a planning problem
- <strong>Bounded PlanSAT</strong> - asks whether there is a solution of length k or less (could be used to find an optimal plan)

# Algorithms for Planning as State-Space Search

the previous section discussed about the declarative representation of a planning action schemas. this representation allows us to search forward and backward:
- [[AI Chapter 10 - Classical Planning]]
- [[AI Chapter 10 - Classical Planning]]

In the forward search we choose actions that are <strong>applicable</strong>—those actions that could be the next step in the plan.
In backward search we want actions that are <strong>relevant</strong>—those actions that could be the last step in a plan leading up to the current goal state

neither forward nor backward search is efficient without good heuristic function, therefore we go over:
- [[AI Chapter 10 - Classical Planning]]
	- relaxing problem
	- subgoal independence

## Forward/Progression State-Space Search

reasons forward state-space search is <font style="color: rgb(255,0,0);">inefficient</font>:
- forward search is prone to exploring irrelevant actions
- planning problems often have large state spaces

relies on accurate domain-specific heuristic, to make it feasible
## Backward/Regression Relevant-States Search

in regression search or relevant-states search we start at the goal and apply the actions in reverse until we find a sequence of steps that reaches the initial state. we only consider actions that are <strong>relevant</strong> to the goal (or current state)

if a domain can be expressed in PDDL, then we can do regression search on it. Given a ground goal description g and a ground action a, the regression from g over a gives us a state description g'defined by

<font style="color: rgb(128,128,128);"><em>g'= (g − ADD(a)) ∪ Precond(a)</em></font>

That is, the effects that were added by action a need not have been true before, and also the preconditions must have held before, or else the action could not have been executed

To get the full advantage of backward search, we need to deal with partially uninstantiated actions and states, not just ground ones. For example, suppose the goal is to deliver a specific piece of cargo to SFO: At(C2,SFO). That suggests the action Unload(C2,p,SFO):
```
Action(Unload(C2,p',SFO),
  PRECOND: In(C2,p') ∧ At(p',SFO) ∧ Cargo(C2) ∧ Plane(p') ∧ Airport(SFO)
  EFFECT: At(C2,SFO) ∧ ¬In(C2,p')
```
## Figure for Both Forward and Backward Search
![[AI Chapter 10 - Classical Planning/Screen Shot 2019-04-12 at 7.40.13 PM.png]]
## Heuristics For Planning

neither <em>forward</em> nor <em>backward</em> search is efficient without good <em>heuristic function</em>

a <font style="color: rgb(128,128,128);"><strong><em>heuristic function </em></strong></font><font style="color: rgb(128,128,128);"><strong><em>h(s) </em></strong></font>estimates the distance from a state s to the goal and that if we can derive an <strong>admissible </strong><strong>heuristic</strong> for this distance—one that does not overestimate—then we can use A<sup>∗</sup>search to find optimal solutions. An admissible heuristic can be derived by defining a <strong>relaxed problem </strong>that is easier to solve. The exact cost of a solution to this easier problem then becomes the heuristic for the original problem

Planning uses a <strong>factored representation</strong> for states and action schemas (where states and actions of the world is represented by a collection of variables). That makes it possible to define good <font style="color: rgb(128,128,128);"><em>domain-independent heuristics</em></font> and for programs to automatically apply a good <font style="color: rgb(128,128,128);"><em>domain-independent heuristic</em></font> for a given problem
### Relaxed Problem

Think of a search problem as a graph where the <strong>nodes are states</strong> and the <strong>edges are actions</strong>. The problem is to find a path connecting the <font style="color: rgb(128,128,128);"><em>initial state</em></font> to a <font style="color: rgb(128,128,128);"><em>goal state</em></font>.

2 ways to <font style="color: rgb(128,128,128);"><strong>relax</strong></font> this problem to make it easier:
- <strong>[[AI Chapter 10 - Classical Planning|relaxing actions]]</strong>
- <strong><strong>[[AI Chapter 10 - Classical Planning|relaxing states]]</strong></strong>

<strong>Relaxing Actions</strong>
- <strong>ignore-preconditions heuristic</strong> - relax/drops all preconditions from actions
- <strong>ignore-selected-</strong><strong>preconditions heuristic</strong> - consider the sliding-block puzzle (8-puzzle or 15-puzzle) from Section 3.2. We could encode this as a planning problem involving tiles with a single schema Slide:
- <em>Action(Slide(t, s1, s2),
             PRECONDITION: On(t,s1) ∧ Tile(t) ∧ Blank(s2) ∧ Adjacent(s1,s2)</em>
  <font style="color: rgb(128,128,128);"><em>           EFFECT: On(t,s2) ∧ Blank(s1) ∧ ¬On(t,s1) ∧ ¬Blank(s2</em></font><font style="color: rgb(128,128,128);"><em>))</em></font>
  if we remove the preconditions Blank(s2) ∧ Adjacent(s1,s2) then any tile can move in one action to any space and we get the number-of-misplaced-tiles heuristic. If we remove Blank(s2) then we get the Manhattan-distance heuristic
- <strong>ignore-delete-lists </strong><strong>heuristic</strong> - assuming all goals and preconditions contain only positive literals, the length of the solution will serve as a good heuristic. For this to work we remove the [[AI Chapter 10 - Classical Planning|delete lists]] from all actions (i.e. removing all negative literals from effects)
- <strong>set-cover problem</strong> using relaxed actions - first we relax the actions by removing all preconditions and all effects except those that are literals in the goal. Then, we count the minimum number of actions required such that the union of those actions’ effects satisfies the goal

<strong>Relaxing States</strong>
- <strong><strong>state abstraction </strong></strong>(grouping multiple nodes together) - forming an abstraction of the state space that has fewer states, and thus is easier to search
	- decreases the number of states, by a many-to-one mapping from states in the ground representation of the problem to the abstract representation
- <strong>ignore some fluents</strong> - a form of state abstraction. for example, consider an air cargo problem with 10 airports, 50 planes, and 200 pieces of cargo. Each plane can be at one of 10 airports and each package can be either in one of the planes or unloaded at one of the airports. So there are 50<sup>10</sup>× 200<sup>50+10</sup>≈ 10<sup>155</sup>states. Now consider a particular problem in that domain in which it happens that all the packages are at just 5 of the airports, and all packages at a given airport have the same destination. Then a useful abstraction of the problem is to drop all the At fluents except for the ones involving one plane and one package at each of the 5 airports. Now there are only 5<sup>10</sup>× 5<sup>5+10</sup>≈ 10<sup>17</sup>states

### Key Idea in Defining Heuristics

key idea: is <strong>decomposition</strong> of goal into subgoals which contains 3 main steps:
1. divide problem into subproblems
2. solve each subproblem independently
3. combine the subproblems

###### (Max Estimate vs Sum Estimate) Heuristics for Subgoals

Suppose the goal is a set of fluents <strong><font style="color: rgb(128,128,128);">G</font></strong>, which we divide into disjoint subsets <font style="color: rgb(128,128,128);"><em>G<sub>1</sub>, ..., G<sub>n</sub></em></font>. We then find plans <font style="color: rgb(128,128,128);"><em>P<sub>1</sub>, ..., P<sub>n</sub></em></font>that solve the respective subgoals. What is an estimate of the cost of the plan for achieving all of <font style="color: rgb(128,128,128);"><strong>G</strong></font>? We can think of each Cost(P<sub>i</sub>) as a heuristic estimate:
- <strong>max estimate</strong> - we know that if we combine estimates by taking their maximum value, we always get an admissible heuristic. So <font style="color: rgb(128,128,128);"><em>max<sub>i</sub>COST(P<sub>i</sub>) </em></font>is admissible, and sometimes it could be that <font style="color: rgb(128,128,128);"><em>P<sub>1</sub></em></font>serendipitously achieves all the <font style="color: rgb(128,128,128);"><em>G<sub>i</sub></em></font>. But in most cases, in practice the estimate is too low
- <strong>sum estimate</strong> - could we sum the costs instead? For many problems that is a reasonable estimate, but it is not admissible. The best case is when we can determine that <font style="color: rgb(128,128,128);"><em>G<sub>i</sub></em></font>and <font style="color: rgb(128,128,128);"><em>G<sub>j</sub></em></font>are <strong>independent (subgoal independence assumption)</strong>. If the effects of <font style="color: rgb(128,128,128);"><em>P<sub>i</sub></em></font>leave all the preconditions and goals of <font style="color: rgb(128,128,128);"><em>P<sub>j</sub></em></font>unchanged, then the estimate <font style="color: rgb(128,128,128);"><em>C</em></font><font style="color: rgb(128,128,128);"><em>OST(P<sub>i</sub>) + COST(P<sub>j</sub>) </em></font>is admissible, and more accurate than the max estimate

###### <strong>Subgoal Independence A</strong><strong>ssumption</strong>
- an assumption that the cost of solving a conjunction of subgoals is approximated by the <strong>sum of the costs</strong> of solving each subgoal independently.
- the assumption can be <font style="color: rgb(51,153,102);"><strong><em>optimistic</em></strong></font> or <font style="color: rgb(128,0,0);"><strong><em>pessimistic</em></strong></font>:
	- It is <strong><font style="color: rgb(51,153,102);"><em>optimistic</em></font></strong> when there are negative interactions between the sub-plans for each subgoal—for example, when an action in one subplan deletes a goal achieved by another subplan
	- It is <strong><font style="color: rgb(128,0,0);"><em>pessimistic</em></font></strong>, and therefore <strong>inadmissible</strong>, when sub-plans contain redundant actions—for instance, two actions that could be replaced by a single action in the merged plan

# Planning Graphs

all heuristics suggested can suffer from <font style="color: rgb(128,0,0);">inaccuracies</font>

a <strong>planning graph</strong> data-structure can be used to give better heuristic estimates

a planning problem asks <font style="color: rgb(0,0,255);">“can we reach state <em><strong>G </strong></em>from state <em>S<sub>0</sub></em>”</font>. Suppose we are given a tree of all possible actions from the initial state to successor states, and their successors, and so on. If we indexed this tree appropriately, we could answer the planning question <font style="color: rgb(0,0,255);">“can we reach state </font><font style="color: rgb(0,0,255);"><em><strong>G </strong></em>from state <em>S<sub>0</sub></em></font><font style="color: rgb(0,0,255);">”</font> immediately, just by looking it up. Of course, the tree is of exponential size, so this approach is impractical. A<strong> planning graph</strong> is<strong> polynomial-size approximation</strong> to this planning problem tree. The planning graph can’t answer definitively whether <font style="color: rgb(128,128,128);"><em><strong>G </strong></em></font>is reachable from <font style="color: rgb(128,128,128);"><em>S<sub>0</sub></em></font>, but it can estimate how many steps it takes to reach <font style="color: rgb(128,128,128);"><em><strong>G</strong></em></font>. The estimate is always correct when it reports the goal is not reachable, and it never overestimates the number of steps, so it is an <font style="color: rgb(51,153,102);">admissible heuristic</font>

a planning graph is a directed graph organized into levels:
- first a level <font style="color: rgb(128,128,128);"><em>S<sub>0</sub></em></font>for the initial state, consisting of nodes representing each fluent that holds in <font style="color: rgb(128,128,128);"><em>S<sub>0</sub></em></font>
- then a level <font style="color: rgb(128,128,128);"><em>A<sub>0</sub></em></font>consisting of nodes for each ground action that might be applicable in <font style="color: rgb(128,128,128);"><em>S<sub>0</sub></em></font>
- then alternating levels <font style="color: rgb(128,128,128);"><em>S<sub>i</sub></em></font>followed by <font style="color: rgb(128,128,128);"><em>A<sub>i</sub></em></font> until we reach a termination condition

Roughly speaking, <font style="color: rgb(128,128,128);"><em>S<sub>i</sub></em></font> contains all the literals that could hold at time <font style="color: rgb(128,128,128);"><em>i</em></font>, depending on the actions executed at preceding time steps. If it is possible that either P or ¬P could hold, then both will be represented in <font style="color: rgb(128,128,128);"><em>S<sub>i</sub></em></font>. Also roughly speaking, <font style="color: rgb(128,128,128);"><em>A<sub>i</sub></em></font>contains all the actions that could have their preconditions satisfied at time <font style="color: rgb(128,128,128);"><em>i</em></font>. We say “roughly speaking” because the planning graph records only a restricted subset of the possible negative interactions among actions; therefore, a literal might show up at level <font style="color: rgb(128,128,128);"><em>S</em><sub><em>j</em></sub></font>when actually it could not be true until a later level, if at all. (A literal will never show up too late.) Despite the possible error, the level j at which a literal first appears is a good estimate of how difficult it is to achieve the literal from the initial state

Planning graphs work only for propositional planning problems—ones with no variables
### A Planning Problem & Its Planning Graph

![[AI Chapter 10 - Classical Planning/Screen Shot 2019-04-12 at 8.27.30 PM.png]]

Figure 10.7 shows a simple planning problem

Figure 10.8 shows its planning graph
- <strong>rectangular boxes</strong> represents <strong>non-persistence</strong> <strong>actions</strong>
	- a real action at level <font style="color: rgb(128,128,128);"><em>A<sub>i</sub></em></font>is connected to its preconditions at <font style="color: rgb(128,128,128);"><em>S<sub>i</sub></em></font>and its effects at <font style="color: rgb(128,128,128);"><em>S<sub>i+1</sub></em></font>.
- <strong>small square boxes</strong> represents (<strong>persistence actions </strong>or <strong>no-op</strong>) <strong>actions</strong>
	- a literal appears because an action caused it, but we also want to say that a literal can persist if no action negates it
- <strong>gray lines</strong> indicates (<strong>mutual exclusion</strong> or <strong>mutex</strong>) <strong>links</strong>
	- e.g. <em>Eat(Cake) is mutually exclusive with the persistence of either Have(Cake) or  </em><em>¬Eaten (Cake</em><em>)</em>
	- <em>e.g.</em> in level A<sub>0</sub> of figure 10.8, the <strong>non-persistence action</strong>, Eat(Cake), are connected to 2 <strong>persistence actions</strong> via <strong>mutex links</strong>

we alternate between state level S<sub>i</sub>and action level A<sub>i</sub>until the graph has <strong>leveled off</strong> - where two consecutive levels (S<sub>j-1</sub> and S<sub>j</sub>) are identical (e.g. the graph in Figure 10.8 levels off at S<sub>2</sub>)
###### Defining Mutex Links for <font style="color: rgb(51,153,102);">Actions</font> and <font style="color: rgb(128,0,0);">Literals</font>
mutex relation holds between <strong>two </strong><font style="color: rgb(51,153,102);"><strong>actions </strong></font>if any of the following three conditions holds:
- <strong>inconsistent effects</strong>
	- one action negates an effect of the other
	- for example, Eat(Cake) and the persistence of Have(Cake) have inconsistent effects because they disagree on the effect Have(Cake)
- <strong>interference</strong>
	- one of the effects of one action is the negation of a precondition of the other
	- for example Eat(Cake) interferes with the persistence of Have(Cake) by negating its precondition
- <strong>competing needs</strong>
	- one of the preconditions of one action is mutually exclusive with a precondition of the other
	- for example, Bake(Cake) and Eat(Cake) are mutex because they compete on the value of the Have(Cake) precondition

mutex relation holds between <strong>two </strong><font style="color: rgb(128,0,0);"><strong>literals </strong></font>at the same level if:
- one is the negation of the other
- <strong>inconsistent support</strong>
	- each possible pair of actions that could achieve the two literals is mutually exclusive
	- for example, Have(Cake) and Eaten(Cake) are mutex in S<sub>1</sub>because the only way of achieving Have(Cake), the persistence action, is mutex with the only way of achieving Eaten (Cake), namely Eat (Cake). In S<sub>2</sub>the two literals are not mutex, because there are new ways of achieving them, such as Bake(Cake) and the persistence of Eaten(Cake), that are not mutex

###### Planning Graphs - Heuristic Estimation

if any goal literal fails to appear in the final level of the graph, then the problem is unsolvable

<strong>level cost </strong>of goal literal g<sub>i</sub>- level at which g<sub>i</sub>first appears in the planning graph constructed from initial state s (e.g. In Figure 10.8, Have(Cake) has level cost 0 and Eaten(Cake) has level cost 1)

<strong>Serial Planning Graph</strong>
- a modification of the original planning graph
- serial planning graph produces better <strong>level costs</strong> estimates than original planning graph (because ordinary planning graphs allow several actions at each level and the heuristic counts just the level and not the number of actions)
- therefore in a serial planning graph we enforce at most one action can occur at any given time step; this is done by adding mutex links between every pair of non-persistence actions

3 Heuristic Estimates of the Cost of a Conjunction of Goals:
1. <strong>max-level heuristic</strong>
	- maximum level cost of any of the goals
	- <strong>admissible</strong>
	- not necessarily accurate
2. <strong>sum-level heuristic</strong>
	- sum of the level costs of the goals
	- can be <strong>inadmissible</strong>
	- works well in practice for problems that are largely decomposable
3. <strong>set-level heuristic</strong>
	1. level at which all the literals in the conjunctive goal appear in the planning graph without any pair of them being mutually exclusive
	2. <strong>admissible</strong>
	3. dominates the max-level heuristic
	4. works extremely well on tasks in which there is a good deal of interaction among sub-plans
	5. e.g. this heuristic gives the correct values of 2 for our original problem in Figure 10.8 and infinity for the problem without action Bake(Cake)

###### The GRAPHPLAN algorithm
The GRAPHPLAN algorithm (Figure 10.9) repeatedly adds a level to a planning graph with EXPAND-GRAPH. Once all the goals show up as non-mutex in the graph, GRAPHPLAN calls EXTRACT-SOLUTION to search for a plan that solves the problem. If that fails, it expands another level and tries again, terminating with failure when there is no reason to go on

![[AI Chapter 10 - Classical Planning/Screen Shot 2019-04-14 at 3.01.39 PM.png]]

if all the literals from the goal are present in S<sub>t</sub>, and none of them is mutex with any other. That means that a solution might exist

We can formulate EXTRACT-SOLUTION as a:
- <strong>Boolean Constraint Satisfaction Problem</strong> (CSP), where:
	- <strong>variables</strong> are the actions at each level
	- <strong>values</strong> for each variable are <em>in </em>or <em>out </em>of the plan
	- <strong>constraints</strong> are the mutexes and the need to satisfy each goal and precondition
- <strong>Backward Search Problem</strong>, where each state in the search contains a pointer to a level in the planning graph and a set of unsatisfied goals, where:

In the case where EXTRACT-SOLUTION fails to find a solution for a set of goals at a given level, we record the (level,goals) pair as a <strong>no-good</strong>. Whenever EXTRACT-SOLUTION is called again with the same level and goals, we can find the recorded no-good and immediately return failure rather than searching again

As soon as the graph itself and the no-goods have both <strong>leveled off</strong>, with no solution found, we can terminate with failure because there is no possibility of a subsequent change that could add a solution
# Other Classical Planning Approaches

Currently the most popular and effective approaches to fully automated planning are:
- Translating to a Boolean satisfiability (SAT) problem
- Forward state-space search with carefully crafted heuristics ([[AI Chapter 10 - Classical Planning|Section Algorithms for Planning as State-Space Search]])
- Search using a planning graph ([[AI Chapter 10 - Classical Planning|Section Planning Graphs]])

3 other influential approaches:
- planning as first-order logical deduction
	- Boolean Satisfiability
	- [[Situational Logic／Calculus|Situational Calculus]]
- planning as constraint satisfaction
- planning as plan refinement of partially ordered plans
