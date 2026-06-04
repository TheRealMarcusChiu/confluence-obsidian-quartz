---
title: "Situational Logic／Calculus"
created: 2021-09-13T04:44:29.757-05:00
modified: 2021-09-13T04:44:29.757-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children: []
---
designed for representing and reasoning about dynamical domains
 used for planning problems. see [[AI Chapter 11 - Planning]]

<strong>Simple Shopping Problem</strong>

"Get a quart of milk and a bunch of bananas and a variable-speed cordless drill."
# <strong>Problem Formalization</strong>

a planning problem is represented in situational calculus by logical sentences that describe the 3 main parts of a problem:
1. <strong>initial state</strong> - an arbitrary logical sentence about a situation s<sub>0</sub>
   <em>at(home, s<sub>0</sub>) ∧ -have(milk, s<sub>0</sub>) ∧ -have(bananas, s<sub>0</sub>) ∧ -have(drill, s<sub>0</sub>)</em>
2. <strong>goal state</strong> - a logical query asking for suitable situations
   <em>∃s \[at(home, s) ∧ have(milk, s) ∧ have(bananas, s) ∧ have(drill, s)\]</em>
3. <strong>operators</strong> - a set of descriptions of actions, using the action representation described in first-order logic
   a successor-state axiom for buy(milk) action:
   <em>∀a,s have(milk,result(a,s)) ↔ \[(a = buy(milk) ∧ at(supermarket, s) ∨ (have(milk, s) ∧ a ≠ drop(Milk))\]</em>

situational calculus basic idea: actions transform states.
- <strong>result(a,s)</strong> - names the situation resulting from executing action a in situation s
- <strong>result(l,s)</strong> - names the situation resulting from executing a sequence of actions l starting in situation s

- <strong>∀s r</strong><strong>esult(\[\],s) = s </strong>- executing no action from any situation remains the same situation
- <strong>∀a,p,s result(\[a|p\],s) = result(p,result(a,s)) </strong>

a solution to the <em>shopping problem</em> is a plan <em>p </em>that when applied to the start state s<sub>0</sub> yields a situation satisfying the goal query. In other words, a <em>p </em>such that

<em>at(home, result(p, s<sub>0</sub>)) ∧ have(milk, result(p, s<sub>0</sub>)) ∧ have(bananas, result(p, s<sub>0</sub>)) ∧ have(drill, result(p, s<sub>0</sub>))</em>

if we hand this query to ASK, we end up with a solution such as

<em>p = \[go(supermarket), buy(milk), buy(banana), go(hardware\_store), buy(drill), go(home)\]</em>

To make planning practical we need to do two things:
1. restrict the language with which we define problems, therefore there are fewer possible solutions to search through
2. use a special-purpose algorithm called a planner rather than a general-purpose theorem prover (e.g. <em>resolution theorem prover</em> of [[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|propositional]] and [[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|first-order]] logic) to search for a solution

# <strong>Representations for Planning</strong>

STRIPS language - the "classical" approach to describe states and operators that most planners use today
### Representations for States and Goals

in STRIPS language:
- states are represented as conjunctions of function-free ground literals
  <em>at(home, s0) ∧ -have(milk, s0) ∧ -have(bananas, s0) ∧ -have(drill, s0)</em>
- goals are represented as conjunctions of literals
  <em>at(home, s) ∧ have(milk, s) ∧ have(bananas, s) ∧ have(drill, s)</em>
- goals can also contain variables
  goal of being at a store that sells milk:
  <em>at(X) ∧ sells(X,milk)</em>

one must distinguish clearly between:
- <strong>a goal given to a planner</strong> - asks for a sequence of actions that makes the goal true if executed
- <strong>a query given to a theorem prover</strong> - asks whether the query sentence is true given the truth of the sentences in the knowledge base

### Representations for Actions/Operators

in STRIPS language, actions/operators consist of 3 components:
- <strong>action description</strong> - what an agent actually returns to the environment in order to do something. within the planner it serves only as a name for a possible action
- <strong>precondition</strong> <strong>(possibility axiom)</strong> - is a conjunction of atoms (positive literal) that says what must be true before the operator can be applied
- <strong>effect (effect axiom)</strong> - the effect of an operator is a conjunction of literals (positive and/or negative) that describes how the situation changes when the operator is applied

example of STRIPS action/operator for going from one place to another:
```
op(action: go(there), 
   precondition: at(here) and path(here, there),
   effect: at(there) and -at(here))
```

<strong>action/operator schema</strong> - an operator with variables
<strong>applicable</strong> - an action/operator o is applicable in a state s if there is some way to instantiate the variables in o so that every one of the preconditions of o is true in s
### Searching Through Situation Space

situation space planner - searches through the space of possible situations
progression planner - search forward from the initial situation to goal situation
regression planner - search backward from goal situation to initial situation
### Searching Through Plan Space

<strong>plan space planner</strong> - start with an incomplete plan (partial plan), then expand the partial plan until it results in a complete plan that solves the problem. the solution is the final plan, the path taken to reach it is irrelevant

operators of this search on plans:
- adding a step
- imposing an ordering that puts one step before another
- instantiating a previously unbound variable
- etc

2 categories of (operations on plans):
- refinement operators
	- take partial plan and add constraints to it
	- eliminate a subset of plans from it
	- never add new plans to it
- modification operator
	- anything that is not a refinement operator
	- this chapter only use refinement operators

### Representations for Plans (for searching through plan space)

if we are going to search through a space of plans, we need to be able to represent plans.
```
initial state:
- no literals

goal state:
- RightShoeOn and LeftShoeOn

4 operators:
- Op(ACTION:RightShoe, PRECONDITION:RightSockOn, EFFECT:RightShoeOn)
- Op(ACTION:RightSock, EFFECT:RightSockOn)
- Op(ACTION:LeftShoe, PRECONDITION:LeftSockOn, EFFECT:LeftShoeOn)
- Op(ACTION:LeftSock, EFFECT:LeftSockOn)
```

<strong>principle of least commitment</strong> - one should only make choices about things that you currently care about
<strong>partial order planner</strong> - some steps are ordered and other steps are unordered
<strong>total order planner</strong> - plans consist of a sequence of steps
<strong>linearization of plan P</strong> - a totally ordered plan that is derived from a plan P by adding ordering constraints
<strong>fully initiated plans</strong> - plans in which every variable is bound to a constant
###### Plan Consists of 4 Components:
- <strong>set of plan steps</strong> - each step is one of the operators for the problem
- <strong>set of step ordering constraints</strong> - each ordering constraint is of the form S<sub>i</sub> ≺ S<sub>j</sub> (S<sub>i</sub> before S<sub>j</sub>) which means that step S<sub>i</sub> must occur sometime before step S<sub>j</sub>
- <strong>set of variable binding constraints</strong> - each variable constraint is of the form v = x, where v is a variable in some step, and x is either a constant or another variable
- <strong>set of (causal links/protection intervals)</strong> - causal link is of form S<sub>i</sub> →c S<sub>j</sub> (S<sub>i</sub> achieves c for S<sub>j</sub>) causal links serve to record the purpose(s) of steps in the plan: here a purpose of S<sub>i</sub> is to achieve the precondition c of S<sub>j</sub>
```
Plan(STEPS: { S1: Op(ACTION:Start),
              S2: Op(ACTION:Finish, PRECONDITION:RightShoeOn and LeftShoeOn)}
     ORDERINGS: {S1 ≺ S2},
     BINDINGS: {},
     LINKS: {})
```
### ![[Situational Logic／Calculus/figure 11.4.png]]

![[Situational Logic／Calculus/figure 11.5.png]]
### Solutions

<strong>solution</strong> - is a plan that an agent can execute and guarantees achievement of the goal
<strong>complete plan</strong> - every precondition of every step is achieved by some other step. a step achieves a condition is one of the effects of the step, and if no other step can possibly cancel out the condition. Formally, step S<sub>i</sub> achieves a precondition c of the step S<sub>j</sub> if:
- S<sub>i</sub> ≺ S<sub>j</sub> and c G EFFECTS(S<sub>i</sub>)
- there is no step S<sub>k</sub> such that (¬c) G EFFECTS(S<sub>k</sub>), where S<sub>i</sub> ≺ S<sub>k</sub> ≺ S<sub>j</sub> in some linearization of the plan

<strong>consistent plan</strong> - a plan with no <font style="color: rgb(255,0,0);">contradictions</font> to the <strong><font style="color: rgb(0,128,0);"><em>ordering constraints</em></font></strong> nor <strong><font style="color: rgb(51,102,255);"><em>variable binding constraints</em></font></strong>. a contradiction occurs when:
- <strong><font style="color: rgb(0,128,0);">ordering constraint</font></strong> <font style="color: rgb(255,0,0);">contradiction</font>
	- <em>both S<sub>i</sub> ≺ S<sub>j</sub> and S<sub>j</sub> ≺ S<sub>i</sub></em>
- <strong><font style="color: rgb(51,102,255);">variable binding constraint</font></strong> <font style="color: rgb(255,0,0);">contradiction</font>
	- <em>both v=A and v=B hold (for 2 different constants A and B)</em>

# A Partial-Order Planning Example (Getting Milk, Banana, and Drill, and Back Home)
```
initial state:
op(ACTION:start, 
   EFFECT: at(home) ʌ sells(hardware-store,drill) ʌ sells(supermarket, milk) ʌ sells(supermarket, banana))

goal state:
op(ACTION:finish,
   PRECONDITION: have(drill) ʌ have(milk) ʌ have(banana) ʌ at(home))

actions/operators:
op(ACTION:go(There),
   PRECONDITION: at(Here),
   EFFECT: at(There) ʌ ¬at(Here))
op(ACTION: buy(X),
   PRECONDITION: at(Store) ʌ sells(Store,X),
   EFFECT: have(x))
```

In Figure 11.6 shows a diagram of the initial plan for this problem

![[Situational Logic／Calculus/11.6.png]]

In Figure 11.7 (top), we have selected three Buy actions to achieve three of the preconditions of the Finish action.
- the bold arrows in the figure are causal links. For example, the leftmost causal link in the figure means that the step Buy(Drill) was added in order to achieve the Finish step's Have(Drill) precondition. The planner will make sure that this condition is maintained by protecting it: if a step might delete the Have(Drill) condition, then it will not be inserted between the Buy(Drill) step and the Finish step.
- the light arrows in the figure show ordering constraints. By definition, all actions are constrained to come after the Start action. Also, all causes are constrained to come before their effects, so you can think of each bold arrow as having a light arrow underneath it

In Figure 11.7 (bottom) shows the situation after the planner has chosen to achieve the Sells preconditions by linking them to the initial state.

![[Situational Logic／Calculus/11.7.png]]

In Figure 11.8, we extend the plan by choosing 2 Go actions to get us to the hardware store and supermarket, thus achieving the At preconditions of the Buy actions

![[Situational Logic／Calculus/11.8.png|457x250]]

In Figure 11.9, the planner tries to achieve the preconditions of Go(HWS) and Go(SM) by linking them to the At(Home) condition in the initial state
- this result in a problem. the step Go(HWS) adds the condition At(HWS), but it also delete the condition At(Home). So if agent goes to hardware store it can no longer go from home to supermarket. and if agent goes to supermarket it could no longer go from home to hardware store
- we reached a dead end

![[Situational Logic／Calculus/11.10.png|458x250]]

In Figure 11.10(a) shows a threat: the causal link S<sub>1</sub> →s S<sub>2</sub> is threatened by a new step S<sub>3</sub> because one effect of S<sub>3</sub> is to delete c. the way to resolve the threat is to add ordering constraints to make sure that S<sub>3</sub> does not intervene between S<sub>1</sub> and S<sub>2</sub>
- <strong>demotion</strong> - S<sub>3</sub> placed before S<sub>1</sub> (see figure 11.10 (b))
- <strong>promotion</strong> - S<sub>3</sub> placed after S<sub>2</sub> (see figure 11.10 (c))

![[Situational Logic／Calculus/11.10.png]]

In Figure 11.9 there is no way to resolve the threat (neither demotion nor promotion) that each Go step imposes on the other
In Figure 11.11 shows a different way to achieve the At(x) precondition of the Go(SM) step, this time by adding a causal link from Go(HWS) to Go(SM). In other words, the plan is to go from home to the hardware store and then to the supermarket. This introduces another threat. Unless the plan is further refined, it will allow the agent to go from the hardware store to the supermarket without first buying the drill (which was why it went to the hardware store in the first place). However much this might resemble human behavior, we would prefer our planning agent to avoid such forgetfulness. Technically, the Go(SM) step threatens the At(HWS) precondition of the Buy(Drill) step, which is protected by a causal link. The threat is resolved by constraining Go(SM) to come after Buy(Drill).

![[Situational Logic／Calculus/11.11.png|400x250]]

In Figure 11.12 shows the complete solution plan, with the steps redrawn to reflect the ordering constraints on them. The result is an almost totally ordered plan; the only ambiguity is that Buy(Milk) and Buy(Bananas) can come in either order

![[Situational Logic／Calculus/11.12.png|309x250]]
# A Partial-Order Planning (POP) Algorithm

Partial-Order Planning Algorithm
- is written as a nondeterministic algorithm, using choose and fail rather than explicit loops
- is a <strong>regression planner</strong> (starts with goals and works backwards)
- is <strong>sound</strong> - every plan POP returns is in fact a solution
- is <strong>complete</strong> - if there is a solution, POP will find it

algorithm
- starts with a minimal partial plan
- on each step extends the plan by choosing some operator that achieves a precondition c of a step Sneed
- it records the causal link of the newly achieved precondition
- then resolves any threats to causal links (either demotion or promotion)
- the new step may threaten an existing causal link or an existing step may threaten the new causal link
- if at any point the algorithm fails to find a relevant operator or fails to resolve a threat, it backtracks to a previous choice point
- the selection of a step and precondition in SELECT-SUBGOAL is not a candidate for backtracking, because every precondition needs to be considered eventually, and the handling of preconditions is commutative (handling c<sub>1</sub> and then c<sub>2</sub> leads to exactly the same set of possible plans as handling c<sub>2</sub> and then c<sub>1</sub>) so we can pick a precondition and move ahead without worrying about backtracking. (the pick we make affects only the speed and not the possibility of finding a solution

![[Situational Logic／Calculus/11.13.png|400]]
# Planning With Partially Instantiated Operators

the algorithm above POP does not deal with variable binding constraints, which entails keeping track of binding lists and unifying the right expressions at the right time

However, in RESOLVE-THREATS, should an operator that has the effect, say, ¬At(x) be considered a threat to the condition At(Home)? This is a possible threat

3 main approaches to dealing with possible threats:
- resolve now with an equality constraint
- resolve now with an inequality constraint
- resolve later

a step S<sub>i</sub> achieves a precondition c of the step S<sub>j</sub> if:
1. S<sub>i</sub> ≺ S<sub>j</sub> and S<sub>i</sub> has an effect that necessarily unifies with c
2. there is no step S<sub>k</sub> such that S<sub>i</sub> ≺ S<sub>k</sub> ≺ S<sub>j</sub> in some linearization of the plan such that S<sub>k</sub> has an effect that possibly unifies with ¬c

# Knowledge Engineering For Planning

the methodology for solving problems with the planning approach is very much like the general knowledge engineering guidelines:
- decide what to talk about
- decide on a vocabulary of conditions (literals), operators, and objects
- encode operators for the domain
- encode a description of the specific problem instance
- pose problems to the planner and get back plans

### The Blocks World
- <strong>what to talk about</strong>: This domain consists of a set of cubic blocks sitting on a table. The blocks can be stacked, but only one block can fit directly on top of another. A robot arm can pick up a block and move it to another position, either on the table or on top of another block. The arm can only pick up one block at a time, so it cannot pick up a block that has another one on it. The goal will always be to build one or more stacks of blocks, specified in terms of what blocks are on top of what other blocks. For example, a goal might be to make two stacks, one with block A on B, and the other with C on D
- <strong>vocabulary</strong>: The objects in this domain are the blocks and the table. They are represented by constants. We will use On(b, x) to indicate that block b is on x, where x is either another block or the table. The operator for moving block b from a position on top of x to a position on top y will be Move(b,x,y). Now one of the preconditions on moving b is that no other block is on it. In first-order logic this would be ¬∃x On(x,b) or alternatively x∀ ¬On(x,b). But our language does not allow either of these forms, so we have to think of something else. The trick is to invent a predicate to represent the fact that no block is on b, and then make sure the operators properly maintain this predicate. We will use Clear(x) to mean that nothing is on x.
- <strong>operators</strong>: The operator Move moves a block b from x to y if both b and y are clear, and once the move is made, x becomes clear but y is clear no longer. The formal description of Move is as follows:
    ```
    Op(ACTION: Move(b, x, y),
       PRECONDITION: On(b,x) ʌ Clear(b) ʌ Clear(y),
       EFFECT: On(b,y) ʌ Clear(x) ʌ ¬On(b,x) ʌ ¬Clear(y))
    ```

Unfortunately, this operator does not maintain Clear properly when x or y is the table. When x = Table, this operator has the effect Clear(Table), but the table should not become clear, and when y = Table, it has the precondition Clear(Table), but the table does not have to be clear to move a block onto it. To fix this, we do two things. First, we introduce another operator to move a block b from x to the table:
    ```
    Op(ACTION: MoveToTable(b,x),
       PRECONDITION: On(b,x) ʌ Clear(b),
       EFFECT: On(b,Table) ʌ Clear(x) ʌ ¬On(b,x))
    ```

Second, we take the interpretation of Clear(x) to be "there is a clear space on x to hold a block." Under this interpretation, Clear(Table) will always be part of the initial situation, and it is proper that Move(b, Table, y) has the effect Clear(Table). The only problem is that nothing prevents the planner from using Move(b,x, Table) instead of MoveToTable(b,x). We could either live with this problem - it will lead to a larger-than-necessary search space, but will not lead to incorrect answers — or we could introduce the predicate Block and add Block(b) ʌ Block(y) to the precondition of Move.

Finally, there is the problem of spurious operations like Move(B, C, C), which should be a no-op, but which instead has contradictory effects. It is common to ignore problems like this, because they tend not to have any effect on the plans that are produced. To really fix the problem, we need to be able to put inequalities in the precondition: b ≠ x ≠ y.
