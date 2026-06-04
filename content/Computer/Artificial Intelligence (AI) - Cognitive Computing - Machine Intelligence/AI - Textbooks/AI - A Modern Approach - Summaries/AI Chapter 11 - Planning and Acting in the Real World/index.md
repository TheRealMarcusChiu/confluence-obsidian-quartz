---
title: "AI Chapter 11 - Planning and Acting in the Real World"
created: 2019-04-12T15:49:47.149-05:00
modified: 2026-05-17T12:53:43.129-05:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
## Sections
- <strong>Time, Schedules, and Resources</strong> - extends the classical language for planning to talk about actions with durations and resource constraints
- <strong>Hierarchical Planning</strong> - describes methods for constructing plans that are organized hierarchically. This allows human experts to communicate to the planner what they know about how to solve the problem. Hierarchy also lends itself to efficient plan construction because the planner can solve a problem at an abstract level before delving into details
- <strong>Planning and Acting in Non-deterministic Domains</strong> - presents agent architectures that can handle uncertain environments and interleave deliberation with execution, and gives some examples of real-world systems.
- <strong>Multi-Agent Planning</strong> - shows how to plan when the environment contains other agents

# Time, Schedules, and Resources
The <strong>[[AI Chapter 10 - Classical Planning|classical planning]]</strong> representation talks about <font style="color: rgb(128,128,128);"><em>what to do</em></font> and <font style="color: rgb(128,128,128);"><em>in </em></font><font style="color: rgb(128,128,128);"><em>what order</em></font>, but the representation cannot talk about
- <strong>temporal ordering constraints</strong> - <em>when </em>an action should occur (before and/or after a specified time and/or specific action(s))
- <strong>resource constraints</strong> - describes the resources needed for an action to be executed
- the available resources - described below

###### Representing Temporal Constraints, Resource Constraints, and the Available Resources

each <strong>action</strong> is represented by:
- a duration
- a set of temporal ordering constraints (action(s) that must be completed before this action can be executed)
- a set of resource constraints

each <strong>resource</strong> is represented by 3 things:
- the type of resource (e.g. bolts, wrenches, or pilots)
- the number of that resource available at start
- whether that resource is:
	- <strong>consumable </strong>- e.g. the bolts are no longer available for use
	- <strong>reusable </strong>- e.g. a pilot is occupied during a flight but is available again when the flight is over
	- <strong>sharable</strong>

resources can be produced by actions

a <strong>solution</strong> must satisfy all the <strong>temporal ordering constraints</strong> of actions and <strong>resource constraints</strong>
###### <strong>Example Scheduling Problem (Assembly of 2 Cars)</strong>

the <strong>Assembly of 2 Cars </strong>problem consists of:
- <strong>resources</strong>: 4 types of resources and number of each type available at the start:
    ```merge-table
    {
      "rows": [
        [
          {
            "content": "resource type",
            "header": true,
            "bg": "#F4F5F7"
          },
          {
            "content": "number available",
            "header": true,
            "bg": "#F4F5F7"
          },
          {
            "content": "consumable or reusable",
            "header": true,
            "bg": "#F4F5F7"
          }
        ],
        [
          "engine hoist",
          "1",
          "reusable"
        ],
        [
          "wheel station",
          "1",
          "reusable"
        ],
        [
          "lug nuts",
          "500",
          "consumable"
        ],
        [
          "inspector",
          "2",
          "reusable"
        ]
      ]
    }
    ```
- <strong>ordering & resource constraints</strong>: 2 jobs, each of form \[AddEngine, AddWheels, Inspect\] and their individual action durations and its resource constraints
    ```merge-table
    {
      "rows": [
        [
          {
            "content": "action",
            "header": true,
            "bg": "#F4F5F7"
          },
          {
            "content": "duration units",
            "header": true,
            "bg": "#F4F5F7"
          },
          {
            "content": "resource constraints",
            "header": true,
            "bg": "#F4F5F7"
          }
        ],
        [
          "AddEngine1",
          "30",
          "1 engine hoist"
        ],
        [
          "AddEngine2",
          "60",
          "1 engine hoist"
        ],
        [
          "AddWheels1",
          "30",
          "1 wheel station and 40 lug nuts"
        ],
        [
          "AddWheels2",
          "15",
          "1 wheel station and 40 lug nuts"
        ],
        [
          "Inspect1",
          "10",
          "1 inspector"
        ],
        [
          "Inspect2",
          "10",
          "1 inspector"
        ]
      ]
    }
    ```

###### Solving Example Scheduling Problem<strong> (Assembly of Two Cars) - <font style="color: rgb(255,0,0);">WITHOUT</font> Resource Constraint</strong>

first we consider just the scheduling problem with only ordering constraints (ignoring resource constraints)

the goal is to minimize <strong>makespan</strong> (plan duration), in other words we must find the earliest start times for all the actions consistent with the ordering constraints

a set of ordering constraints can be represented as a directed graph (e.g. see figure 11.2)we can then apply the <strong>critical path method </strong>(CPM) to this graph to determine the possible start and end times of each action

a <strong>path </strong>through a graph is a linearly ordered sequence of actions beginning with <em>Start </em>and ending with <em>Finish</em> (e.g. Figure 11.2 contains 2 paths)

a <strong>critical path </strong>is the path with the longest total duration of actions

<strong>ES(x)</strong> - earliest start time of action x
<strong>LS(x)</strong> - latest start time of action x
<strong>slack </strong>of an action x is the quantity <em>LS(x) - ES(x)</em><strong>schedule</strong> - together the <em>ES </em>and <em>LS </em>times for all the actions constitute a schedule for the problem

for example, in Figure 11.2
- the whole plan will take 85 minutes
- each action in the top path has 15 minutes of slack
- each action in the critical path has no slack

![[AI Chapter 11 - Planning and Acting in the Real World/Screen Shot 2019-04-14 at 9.59.05 PM.png]]

The following formulas serve as a definition for ES and LS. A and B are actions, and A ≺ B means that A comes before B:
- <em>ES(Start) = 0</em>
- <em>ES(B) = max<sub>A≺B</sub>ES(A) + Duration(A)</em>
- <em>LS(Finish) = ES(Finish)</em>
- <em>LS(A) = min<sub>B≻A</sub>LS(B) − Duration(A)</em>

The idea is that we start by assigning ES(Start) to be 0. Then, as soon as we get an action B such that all the actions that come immediately before B have ES values assigned, we set ES(B) to be the maximum of the earliest finish times of those immediately preceding actions, where the earliest finish time of an action is defined as the earliest start time plus the duration. This process repeats until every action has been assigned an ES value. The LS values are computed in a similar manner, <font style="color: rgb(0,51,102);">working</font> backward from the Finish action

The complexity of the CPM algorithm is just O(Nb), where N is the number of actions and b is the maximum branching factor into or out of an action
###### Solving Example Scheduling Problem<strong> (Assembly of Two Cars) - <font style="color: rgb(255,0,0);">WITH</font> Resource Constraint</strong>

the introduction of resource constraints turns the scheduling problem from easy to NP-hard

Figure 11.3 shows the solution with the fastest completion time, 115 minutes

![[AI Chapter 11 - Planning and Acting in the Real World/with resource constraint.png|623x250]]

<strong>minimum slack </strong><strong>algorithm</strong>: on each iteration, schedule for the earliest possible start whichever unscheduled action has all its predecessors scheduled and has the least slack; then update the ES and LS times for each affected action and repeat. The heuristic resembles the minimum-remaining-values (MRV) heuristic in [[Constraint Satisfaction Problems (CSP)|constraint satisfaction problems]]. It often works well in practice, but for our assembly problem it yields a 130 minute solution, not the 115 minute solution of Figure 11.3
# Hierarchical Planning

<strong>hierarchical decomposition</strong> - the process of dividing a system into subsystems and thus reducing the number of activities at the next lower level
###### example hierarchical planning
> A reasonable plan for the Hawaii vacation might be:
> - Go to San Francisco airport
> - take Hawaiian Airlines flight 11 to Honolulu
> - do vacation stuff for two weeks
> - take Hawaiian Airlines flight 12 back to San Francisco
> - go home
> 
> 
> 
> Given such a plan, the action “Go to San Francisco airport” can be viewed as a planning task in itself, with a solution such as:
> - Drive to the long-term parking lot
> - park
> - take the shuttle to the terminal
> 
> 
> 
> Each of these actions, in turn, can be decomposed further, until we reach the level of actions that can be executed without deliberation to generate the required motor control sequences

in this example, planning can occur both before and during the execution of the plan
###### High-Level Actions
<strong>hierarchical task networks</strong><strong> (HTN)</strong> <strong>planning</strong> - the basic formulation of <em>hierarchical decomposition</em>in [[AI Chapter 10 - Classical Planning|classical planning (Chapter 10)]], we assumed full observability and determinism and the availability of a set of actions, now called <strong>primitive actions</strong>, with standard precondition–effect schemas

<strong>high-level plan</strong> (HLP) - a sequence of high-level actions<strong>high-level action</strong> (HLA) - an action that has one or more possible <em>refinements</em>
<strong>refinements </strong>- a sequences of action(s) - a mix of <em>high-level</em> and <em>primitive</em> actions
<strong><strong>primitive action</strong></strong> - has no <em>refinements</em>

<strong>example of refinements in figure 11.4</strong>

<strong>![[AI Chapter 11 - Planning and Acting in the Real World/refinements.png|500]]</strong>
- Figure 11.4 TOP: the action “Go to San Francisco airport,” represented formally as Go (Home, SFO), might have 2 possible refinements
- Figure 11.4 BOTTOM: recursive refinement for navigation in the vacuum world: to get to a destination, take a step, and then go to the destination

<strong>implementation </strong>of a high-level action - a high-level action that only contains primitive actions
<strong>implementation</strong> of a high-level plan - a concatenation of implementations of each HLA in the sequence

if a HLA that has exactly one implementation, we can compute the preconditions and effects of the HLA and then treat the HLA exactly as if it were a primitive action itself
###### Searching For Primitive Solutions
HTN planning is often formulated with a single “top level” action called Act, where the aim is to find an implementation of Act that achieves the goal 

the approach leads to a simple algorithm (<strong>hierarchical forward planning search</strong>): repeatedly choose an HLA in the current plan and replace it with one of its refinements, until the plan achieves the goal
possible implementations of this algorithm:
- breadth-first search (shown in figure 11.5)
- depth-first search
- iterative deepening

![[AI Chapter 11 - Planning and Acting in the Real World/breeadth-first search.png|500]]

<strong>Benefits of Hierarchical Search</strong>

Suppose that a planning problem has a solution with <font style="color: rgb(128,128,128);">d </font>primitive actions.

For a nonhierarchical, forward state-space planner with <font style="color: rgb(128,128,128);">b </font>allowable actions at each state, the cost is <font style="color: rgb(128,128,128);">O(b<sup>d</sup>)</font>, as explained in [[AI Chapter 3 - Solving Problems by Searching|Chapter 3]].

For an HTN planner, let us suppose a very regular refinement structure:
- each nonprimitive action has <font style="color: rgb(128,128,128);">r </font>possible refinements, each into <font style="color: rgb(128,128,128);">k </font>actions at the next lower level.
- we want to know how many different refinement trees there are with this structure.
- now, if there are <font style="color: rgb(128,128,128);">d </font>actions at the primitive level, then the number of levels below the root is <font style="color: rgb(128,128,128);">log<sub>k</sub>(d)</font>
- so the number of internal refinement nodes is <font style="color: rgb(128,128,128);">1 + k + k<sup>2</sup>+ · · · + k<sup>log<sub>k</sub>(d−</sup><sup>1)</sup> = (d − 1)/(k − 1)</font>.
- each internal node has <font style="color: rgb(128,128,128);">r </font>possible refinements, so <font style="color: rgb(128,128,128);">r<sup>(d−1)/(k−1)</sup></font>possible regular decomposition trees could be constructed
- examining this formula, we see that keeping <font style="color: rgb(128,128,128);">r </font>small and <font style="color: rgb(128,128,128);">k </font>large can result in huge savings

###### Searching For Abstract Solutions

<strong>downward refinement property </strong>for HLA descriptions - every high-level action that “claims” to achieve the goal does in fact achieve the goal (i.e. it must have at least one implementation that does achieve the goal)

a problem arises when the HLA has multiple implementations. How can we describe the effects of an high-level action that can be implemented in many different ways?

One safe answer (at least for problems where all preconditions and goals are positive) is to include only the positive effects that are achieved by every implementation of the HLA and the negative effects of any implementation. Then the downward refinement property would be satisfied. Unfortunately, this semantics for HLAs is much too conservative. Consider again the HLA <font style="color: rgb(128,128,128);">Go(Home,SFO)</font>, which has two refinements, and suppose, for the sake of argument, a simple world in which one can always drive to the airport and park, but taking a taxi requires Cash as a precondition. In that case, <font style="color: rgb(128,128,128);">Go(Home,SFO</font><font style="color: rgb(128,128,128);">)</font> doesn’t always get you to the airport. In particular, it fails if Cash is false, and so we cannot assert <font style="color: rgb(128,128,128);">At(Agent,SFO) </font>as an effect of the HLA. This makes no sense, however; if the agent didn’t have Cash, it would drive itself. Requiring that an effect hold for every implementation is equivalent to assuming that someone else—an adversary—will choose the implementation. It treats the HLA’s multiple outcomes exactly as if the HLA were a nondeterministic action, as in Section 4.3. For our case, the agent itself will choose the implement

<strong>demonic nondeterminism </strong>- where an adversary makes the choices
<strong>angelic nondeterminism </strong>- where the agent itself makes the choices

<strong>angelic semantics</strong> - the <em>reachable set</em> of an HLA

<strong>reachable set</strong> of a HLA - given a <font style="color: rgb(128,128,128);">state </font><font style="color: rgb(128,128,128);">s</font>, the <em>reachable set</em> for an <font style="color: rgb(128,128,128);">HLA </font><font style="color: rgb(128,128,128);">h</font>, written as <font style="color: rgb(128,128,128);">R</font><font style="color: rgb(128,128,128);">EACH(s,h)</font>, is the set of states reachable by any of the HLA’s implementations

The key idea is that the agent can choose which element of the reachable set it ends up in when it executes the HLA; thus, an HLA with multiple refinements is more “powerful” than the same HLA with fewer refinements

<strong>reachable set</strong> of a sequence of HLAs - for example, the reachable set of a sequence \[h1, h2\] is the union of all the reachable sets obtained by applying h2 in each state in the reachable set of h1:

![[AI Chapter 11 - Planning and Acting in the Real World/reachable set of a sequence of HLAs.png|500]]

The notion of reachable sets yields a straightforward algorithm:
- search among high-level plans/actions, looking for one whose reachable set intersects the goal
- once that happens, the algorithm can commit to that abstract plan, knowing that it works
- focus on refining the plan further

<strong>examples of reachable sets</strong>

![[AI Chapter 11 - Planning and Acting in the Real World/Schematic examples of reachable sets.png|500]]

###### Representation of Effects of HLA

effects of a HLA - is the reachable set for each possible previous state

as with the classical action schemas of Chapter 10, we represent the changes made to each fluent. Think of a fluent as a state variable.

a <strong>primitive action</strong> can either:
- add a variable
- delete a variable
- leave it unchanged
- flipping a variable to its opposite (with conditional effects (see Section 11.3.1))

a <strong>high-level action</strong> (HLA) under angelic semantics can do more:
- it can control the value of a variable, setting it to true or false depending on which implementation is chosen
- in fact, an HLA can have nine different effects on a variable:
	- if the variable starts out true, it can always keep it true, always make it false, or have a choice
	- if the variable starts out false, it can always keep it false, always make it true, or have a choice
	- and the three choices for each case can be combined arbitrarily, making nine

<strong><font style="color: rgb(255,0,0);">TODO page 431 of 3<sup>rd</sup> Edition PDF</font></strong>
# Planning and Acting in Non-Deterministic Domains

In this section we extend planning to handle partially observable, nondeterministic, and unknown environments

[[AI Chapter 4 - Informed Search & Hill-Climbing|Chapter 4]] extended search in similar ways, and the methods here are also similar:
- <strong>sensorless planning </strong>or <strong>conformant planning</strong> - for environments with no observations
- <strong>contingency planning </strong>- for partially observable and nondeterministic environments
- <strong>online planning </strong>and <strong>replanning</strong> - for unknown environments

While the concepts are similar to Chapter 4, there are significant differences because planners deal with <strong>factored representations</strong> rather than <strong>atomic representations</strong>

<strong><strong><font style="color: rgb(255,0,0);">TODO page 434 of 3<sup>rd</sup> Edition PDF</font></strong></strong>
# Multi-Agent PlanningWhen there are multiple agents in the environment, each agent faces a <strong>multiagent planning problem </strong>in which it tries to achieve its own goals with the help or hindrance of others

An agent with multiple effectors that can operate concurrently needs to do <strong>multi-effector planning </strong>which manages several effectors simultaneously while handling positive and negative interactions among the effectorsWhen the effectors are physically decoupled into detached units —as in a fleet of delivery robots in a factory— multi-effector planning becomes <strong>multibody planning</strong>. A multibody problem is still a “standard” single-agent problem as long as the relevant sensor information collected by each body can be pooled—either centrally or within each body—to form a common estimate of the world state that then informs the execution of the overall plan; in this case, the multiple bodies act as a single body

When communication constraints make this impossible, we have what is sometimes called a <strong>decentralized planning </strong><strong>problem</strong>; this is perhaps a misnomer, because the planning phase is centralized but the execution phase is at least partially decoupled. In this case, the subplan constructed for each body may need to include explicit communicative actions with other bodies. For example, multiple reconnaissance robots covering a wide area may often be out of radio contact with each other and should share their findings during times when communication is feasible

<strong>multi-body vs multi-agent</strong>

both multi-body and multi-agent planning has shared goals, however, the multibody and multiagent cases are quite different:
- n a multi-body team
	- a single entity is doing the planning, there is really only one goal, which all the bodies necessarily share
	- a single plan dictates which body will go where on the court and which body will hit the ball.
- in a multi-agent team
	- the bodies are distinct agents that do their own planning, they may still share identical goals (e.g. 2 human tennis players who form a doubles team share the goal of winning the match)
	- each agent decides what to do; without some method for <strong>coordination</strong> (e.g. both agents may decide to cover the same part of the court and each may leave the ball for the other to hit)

The clearest case of a multiagent problem, is when the agents have different goals. In tennis, the goals of two opposing teams are in direct conflict, leading to the zero-sum game of Chapter 5

Finally, some systems are a <strong>mixture of centralized and multiagent planning</strong>. For example, a delivery company may do centralized, offline planning for the routes of its trucks and planes each day, but leave some aspects open for autonomous decisions by drivers and pilots who can respond individually to traffic and weather situations. Also, the goals of the company and its employees are brought into alignment, to some extent, by the payment of incentives (salaries and bonuses)—a sure sign that this is a true multiagent system

<strong>obstacles in multi-agent planning</strong>
- issues of representing and planning for multiple simultaneous actions
- issues of cooperation, coordination, and competition

###### Planning With Multiple Simultaneous Actions

for the time being, let the term <strong>multi-actor</strong> settings cover: <font style="color: rgb(128,128,128);">multi-effector</font>, <font style="color: rgb(128,128,128);">multi-body</font>, and <font style="color: rgb(128,128,128);">multi-agent</font> settings

The goal of this section is to define transition models, correct plans, and efficient planning algorithms for the <em>multi-actor</em> setting

<strong><font style="color: rgb(255,0,0);">TODO page 445 of 3<sup>rd</sup> Edition PDF</font></strong>

<strong>Planning With Multiple Agents: Cooperation and Coordination </strong>
######
