---
title: "AI Chapter 12 - Knowledge Representation"
created: 2019-04-11T20:07:31.415-05:00
modified: 2026-05-24T20:23:59.413-05:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
### Textbook Summaries about Knowledge Representations
- [[Knowledge Representation, Reasoning, and the Design of Intelligent Agents - The Answer-Set Programming Approach - Summaries]]

# Sections
- <strong>Ontological Engineering</strong> - introduces the idea of a general ontology, which organizes everything in the world into a hierarchy of categories
- <strong>Categories and Objects</strong> - covers the basic categories of objects, substances, and measures
- <strong>Actions, Situations, and Events</strong> - discusses representations of actions, and explains the general notion of events (space-time chunks)
- <strong>Mental Events and Mental Objects</strong> - discusses the knowledge about beliefs
- <strong>Reasoning Systems for Categories</strong> -
- <strong>Reasoning With Default Information</strong> -
- <strong>Truth Maintenance Systems</strong> -
- <strong>The Internet Shopping World</strong> - brings all knowledge together into an example

# Ontological Engineering

<strong>ontological engineering</strong> - representing abstract concepts (e.g. actions, time, physical objects, and beliefs
<strong>upper ontology</strong> - a general framework of concepts

have to handle exceptions and uncertainty

2 major characteristics of general-purpose ontologies that distinguish them from special-purpose ontologies:
- a general purpose ontology can be applicable in any special purpose domain (with the addition of domain-specific axioms)
- different areas of knowledge must be unified because reasoning and problem solving involves several areas simultaneously (e.g. circuitry requires knowledge domains of time, electrical connectivity, and physical layout. The sentences describing time should be capable of being combined with sentences describing physical layout and electrical connectivity)

# Categories and Objects

categories are an important aspect of general knowledge reasoning

<strong>strict kind categories</strong> - an object is a triangle iff it is a polygon with 3 sides
<strong>natural kind categories</strong> - have no clear cut definition

there are 2 choices for <strong>representing categories</strong> in first-order logic:
- <strong>predicates</strong> (e.g. basketball(X))
- <strong>objects</strong> (e.g. <strong>reify</strong> the category as an object, basketballs. and thus allows us to say member(X, basketballs) "X is a member of the category basketballs")

categories can belong to sub-categories

<strong>taxonomy/taxonomic hierarchy</strong> - organization of categories and its subclasses
<strong>inheritance</strong> - an object or sub-category <strong>inherits</strong> the properties of the upper category

<strong>disjoint</strong> - 2 or more categories are disjoint if they have no members in common
<strong>exhaustive decomposition</strong> - for example, if an animal is not male then it must be female
<strong>partition</strong> - a disjoint exhaustive decomposition
```
Disjoint({Animals, Vegetables})
ExhaustiveDecomposition({Americans,Canadians,Mexicans},NorthAmericans)
Partition({Males,Females}, Animals)
```
### <strong>Physical Composition</strong>

the idea that one object can be part of another
```
part_of(bucharest, romania)
part_of(romania, eastern_europe)
part_of(eastern_europe, europe)
part_of(europe, earth)

part_of(x,y) ʌ part_of(y,z) → part_of(x,z)
part_of(x,x)

```

<strong>composite objects</strong> - characterized by structural relations among parts

<strong>measurements</strong> - objects have height, mass, cost, and so on. the values that we assign for these properties are called <strong>measures</strong>
### Substances vs Objects

<strong>individualization</strong> - division into distinct objects

Suppose I have some butter and an aardvark. I can say I have one aardvark, but there is no obvious number of butter. Any part of butter object is also a butter object. However if we cut an aardvark in half we don't get 2 aardvarks unfortunately

<strong>count nouns</strong> - nouns that can be counted
<strong>mass nouns</strong> - nouns that cannot be counted

<strong>intrinsic properties</strong> - properties that belong to the very substance of the object, rather than the object as a whole (e.g. density, boiling point, flavor, color, ownership, etc)
<strong>extrinsic properties</strong> - properties that are not retained under subdivision (e.g. weight, length, shape, function, etc)

a class of objects that includes in its definition <strong><em>only</em> intrinsic properties</strong> is then a substance or a <strong>mass noun</strong>
a class of objects that includes in its definition <strong><em>any</em> extrinsic properties</strong> is a <strong>count noun</strong>
# Actions, Situations, and Events

reasoning about results of actions is central to a knowledge-based agent. propositional logic gave us an example of the wumpus world that describes how actions affect the environment. the problem with propositional logic is the need to have different copies of the action description for each time the action might be executed. this section uses first-order logic to avoid that problem

one way to avoid multiple copies of axioms is to simply quantify over time, to say:

<em><font style="color: rgb(128,128,128);"> "for all time t, such-and-such is the result at time t+1 of doing action at time t"</font></em>

this approach is called [[Situational Logic／Calculus|situation calculus]] and involves the following ontology:
- <strong>situations</strong> - are logical terms consisting of the initial situation (S<sub>0</sub>) and all situations that are generated by applying an action to a situation.
	- the function <font style="color: rgb(128,128,128);"><em>Result(a,s)</em></font> gives the resulting situation when action <font style="color: rgb(128,128,128);"><em>a</em></font> is applied to situation <font style="color: rgb(128,128,128);"><em>s</em></font>
- <strong>fluents</strong> - are functions and predicates that vary from one situation to the next, such as the location of the agent or the aliveness of the wumpus
- <strong>atemporal/eternal</strong> predicate and functions are also allowed (e.g. predicate <em>Gold(G<sub>1</sub>)</em> and function <em>LeftLegof(Wumpus)</em>)

<strong>frame problem</strong> - representing all things that stay the same. finding an efficient solution to the frame problem is a must
<strong>frame axioms</strong> - say what stays the same. if there are F fluent axioms and A actions, then we will need O(AF) frame axioms. On the other hand if each action has at most E effects (where E is typically much less than F) then we should be able to represent what happens with a much smaller knowledge base of size O(AE). this is the <strong>representational frame problem</strong>. 
<strong>inferential frame problem</strong> - projects the results of a t-step sequence of actions in time O(Et), rather than O(At) or O(AEt)
<strong>qualification problem</strong> - ensuring all necessary conditions for an action's success have been specified. there is no complete solution
### Solving the Representational Frame Problem

axioms are called successor-state axioms of form
```
SUCCESSOR-STATE AXIOM:
Action is possible -> (fluent is true in result state <-> (Action's effect made it true) v (It was true before and action left it alone))
```

TODO page 332 of AI: A Modern Approach 2nd Edition
### Solving the Inferential Frame Problem

TODO page 333 of AI: A Modern Approach 2nd Edition
### Time and Event Calculus

[situation calculus](http://confluence.marcuschiu.com/display/NOT/Situational+Logic) works well on a single agent performing instantaneous, discrete actions. However, when actions have duration and overlaps with each other, <strong>event calculus</strong> should be used.

<strong>event calculus</strong>
- is based on points in time rather than situations
- in event calculus, fluents (functions or predicates that vary from one situation or time to the next) hold at points in time rather than at situations
- designed to reason over intervals of time
- an event calculus axiom says that a fluent is true at a point in time if the fluent was initiated by an event at some time in the past and was not terminated by an intervening event
- the INITIATES and TERMINATES relations plays a similar role to the RESULT relation in situation calculus
	- INITIATES(e,f,t) means that event e at time t cause fluent f to be true
	- TERMINATES(w,f,t) means that event w at time t causes fluent f to be false
- HAPPENS(e,t) means event e happens at time t
- CLIPPED(f,t1,t2) means fluent f is terminated at sometime between time t1 and t2
- this gives us functionality similar to situational calculus but with ability to talk about time points and intervals (e.g. HAPPENS(turn\_off(light\_switch\_1), 1:00) meaning "light switch was turned off at 1:00")
- extensions of event calculus to address problems of indirect effects, events with duration, concurrent events, continuously changing events, nondeterministic effects, causal constraints, etc

### Generalized Events

generalized event - is composed from aspects of some "space-time chunk"

for example WWII is an event that took place at various points in space-time. it can be broken down into <strong>subevents</strong>:
```
subevent(battle_of_britian, world_war_ii)
subevent(world_war_ii, twentieth_century)
```

<strong>intervals</strong> - are chunks of space-time that include all of space between 2 time points

<strong>Period(e)</strong> - denotes the smallest interval enclosing the event e
<strong>Duration(i)</strong> - the length of time occupied by an interval

then we can say
```
Duration(Period(world_war_ii)) > Years(5)
```

Like any other sort of object, generalized events can be grouped into categories (e.g. World War II belongs to the categories of Wars

To say civil war occured in England in the 1640s:
```
∃w w∈CivilWars ʌ SubEvent(w,1640s) ʌ In(Location(w) England)
```
### Processes

<strong>discrete events</strong> - events that have definite structure
<strong>liquid events</strong> or <strong>process categories</strong> - any subinterval of a process is also a member of the same process category - processes of continuous non-change
```
// Marcus was flying at some time yesterday
E(Flying(Marcus), Yesterday)

// Stuart was working today during lunch hour
T(Working(Stuart), TodayLunchHour)
```

<strong>temporal substances</strong> - liquid events
<strong>spatial substances</strong> - things like butter
### <strong>Time Intervals</strong>

2 kinds of time intervals: <strong>moments</strong> and <strong>extended intervals </strong>(only moments have zero duration)
```
Partition({Moments, ExtendedIntervals}, Intervals)
i ∈ Moments ⇔ Duration(i) = Seconds(0)
```

Next we invent a time scale and associate points on that scale with moments, giving us ab- solute times. The time scale is arbitrary; we measure it in seconds and say that the moment at midnight (GMT) on January 1, 1900, has time 0. The functions Begin and End pick out the earliest and latest moments in an interval, and the function Time delivers the point on the time scale for a moment. The function Duration gives the difference between the end time and the start time.
```
Interval(i) ⇒ Duration(i)=(Time(End(i)) − Time(Begin(i)))
Time(Begin(AD1900)) = Seconds(0)
Time(Begin(AD2001)) = Seconds(3187324800)
Time(End(AD2001))= Seconds(3218860800)
Duration(AD2001) = Seconds(31536000)
```

To make these numbers easier to read, we also introduce a function Date, which takes six arguments (hours, minutes, seconds, day, month, and year) and returns a time point:
```
Time(Begin(AD2001)) = Date(0, 0, 0, 1, Jan, 2001)
Date(0, 20, 21, 24, 1, 1995) = Seconds(3000000000)
```

Two intervals Meet if the end time of the first equals the start time of the second. The com- plete set of interval relations, as proposed by Allen (1983), is shown graphically in Figure 12.2 and logically below:
```
Meet(i,j)     ⇔ End(i) = Begin(j)
Before(i,j)   ⇔ End(i) < Begin(j)
After(j,i)    ⇔ Before(i,j)
During(i,j)   ⇔ Begin(j) < Begin(i) < End(i) < End(j)
Overlap(i,j)  ⇔ Begin(i) < Begin(j) < End(i) < End(j)
Begins(i,j)   ⇔ Begin(i) = Begin(j)
Finishes(i,j) ⇔ End(i) = End(j)
Equals(i,j)   ⇔ Begin(i) = Begin(j) ∧ End(i) = End(j)
```

These all have their intuitive meaning, with the exception of Overlap: we tend to think of overlap as symmetric (if i overlaps j then j overlaps i), but in this definition, Overlap(i,j) only holds if i begins before j. To say that the reign of Elizabeth II immediately followed that of George VI, and the reign of Elvis overlapped with the 1950s, we can write the following:
```
Meets(ReignOf(GeorgeVI), ReignOf(ElizabethII))
Overlap (Fifties, ReignOf(Elvis))
Begin(Fifties) = Begin(AD1950)
End(Fifties) = End(AD1959)
```
### Fluents and Objects

physical objects can be viewed as <strong>[[AI Chapter 12 - Knowledge Representation|generalized events]],</strong> that a physical object is a chunk of space-time.

For example, USA can be thought of as an event that began in 1776 as a union of 13 states and is still in progress today as a union of 50 states. To describe changing properties of USA we use fluents (e.g. <em>Population(USA)</em>).

<em>President(USA)</em> denotes a single object that consist of different people at different times.

To say that George Washington was president throughout 1790:
```
T(Equals(President(USA), GeorgeWashington), AD1790)
```

We use the function symbol Equals rather than the standard logical predicate =, because we cannot have a predicate as an argument to T, and because the interpretation is not that GeorgeWashington and President(USA) are logically identical in 1790; logical identity is not something that can change over time. The identity is between the subevents of each object that are defined by the period 1790.
# Mental Events and Mental Objects
The agents we have constructed so far have beliefs and can deduce new beliefs. Yet none of them has any knowledge about beliefs or about deduction. Knowledge about one’s own knowledge and reasoning processes is useful for controlling inference

<strong>propositional attitudes</strong> - the attitude an agent has towards mental objects (e.g. Believes, Knows, Wants, Intends, and Informs). These propositional attitudes do not behave like normal predicates

for example, to assert that Lois knows that Superman can fly:
```
Knows(Lois, CanFly(Superman))
```

one issue, is that if "<em>Superman is Clark Kent is true</em>", then the <strong><font style="color: rgb(128,128,128);">inferential rules</font></strong> concludes that "<em>Lois knows that Clark can fly</em>" (this is an example of <strong>referential transparency</strong>). But in reality Lois doesn't actually know that clark can fly
```
Superman = Clark

(Superman = Clark) and (Knows(Lois, CanFly(Superman)) ⊨ Knows(Lois, CanFly(Clark))
```
###### <strong>referential transparency</strong>
- an expression always evaluates to the same result in any context
- e.g. if agent knows that 2+2=4 and 4\<5, then agent should know that 2+2\<5
- built into inferential rules of most formal logic languages

###### <strong>referential opacity</strong>
- not referential transparent
- we want referential opacity for <em><strong>propositional attitudes</strong></em> because terms do matter and not all agents know which terms are co-referential
- not directly possible in most formal logic languages (except Modal Logic)

### Modal Logic

designed to allow <strong>referential opacity</strong> into knowledge base.

regular logic is concerned with <strong>single modality</strong> (the modality of truth), allowing us to express "P is true"

modal logic includes<strong> modal operators</strong> that takes sentences (rather than terms) as arguments (e.g. "A knows P" is represented with notation <strong>K</strong><em><sub>A</sub>P</em> where <strong>K</strong> is the <strong>modal operator</strong> for knowledge, <sub><font style="color: rgb(0,51,102);">A</font></sub> is the agent, and P is a sentence).

<strong>syntax</strong> of modal logic is the same as first-order logic, with the addition that sentences can also be formed with <strong>modal operators</strong>

<strong>semantics</strong> of modal logic is more complicated. In first-order logic a model contains a set of objects and an interpretation that maps each name to the appropriate object, relation, or function. In modal logic we want to be able to consider both the possibility that Superman's secret identity is Clark and that it isn't. Therefore, in modal logic a model consists of a collection of <strong>possible worlds</strong> (instead of 1 true world). The worlds are connected in a graph by <strong>accessibility relations</strong> (one relation for each modal operator). We say that world w<sub>1</sub>is accessible from world w<sub>0</sub>with respect to the modal operator <strong>K</strong><sub>A</sub>if everything in w<sub>1</sub> is consistent with what A knows in w<sub>0</sub>, and we write this as Acc(<strong>K</strong><sub>A</sub>, w<sub>0</sub>, w<sub>1</sub>)

Figure 12.4 shows accessibility as an arrow between possible worlds

![[AI Chapter 12 - Knowledge Representation/12.4.png|500]]

A knowledge atom <strong>K</strong><em><sub>A</sub>P </em>is true in world w if and only if P is true in every world accessible from w. The truth of more complex sentences is derived by recursive application of this rule and the normal rules of first-order logic. That means that modal logic can be used to reason about nested knowledge sentences: what one agent knows about another agent’s knowledge.

For example, we can say that, even though Lois doesn’t know whether Superman’s secret identity is Clark Kent, she does know that Clark knows:

<strong>K</strong><sub><em>Lois</em></sub>\[<strong>K</strong><em><sub>Clark</sub>Identity(Superman, Clark) </em>∨ <strong>K</strong><em><sub>Clark</sub></em><em> ¬Identity(Superman, Clark</em><em>)</em>\]

In TOP-LEFT of figure 12.4 we represent the scenario where it is common knowledge that Superman knows his own identity, and neither he nor Lois has seen the weather report. So in w0 the worlds w0 and w2 are accessible to Superman; maybe rain is predicted, maybe not. For Lois all four worlds are accessible from each other; she doesn’t know anything about the report or if Clark is Superman. But she does know that Superman knows whether he is Clark, because in every world that is accessible to Lois, either Superman knows I, or he knows ¬I. Lois does not know which is the case, but either way she knows Superman knows.

In the TOP-RIGHT of figure 12.4 we represent the scenario where it is common knowledge that Lois has seen the weather report. So in w4 she knows rain is predicted and in w6 she knows rain is not predicted. Superman does not know the report, but he knows that Lois knows, because in every world that is accessible to him, either she knows R or she knows ¬R.

In the BOTTOM of figure 12.4 we represent the scenario where it is common knowledge that Superman knows his identity, and Lois might or might not have seen the weather report. We represent this by combining the two top scenarios, and adding arrows to show that Superman does not know which scenario actually holds. Lois does know, so we don’t need to add any arrows for her. In w0 Superman still knows I but not R, and now he does not know whether Lois knows R. From what Superman knows, he might be in w0 or w2, in which case Lois does not know whether R is true, or he could be in w4, in which case she knows R, or w6, in which case she knows ¬R.
###### Modal Logic's Tricky Interplay of Quantifiers and Knowledge

for example, the English sentence “Bond knows that someone is a spy” is ambiguous.

The first reading is that "there is a particular someone who Bond knows is a spy":

∃x <strong>K</strong><em><sub>Bond</sub>Spy(x</em><em>)</em>

which in modal logic means that there is an x that, in all accessible worlds, Bonds knows the same x to be a spy

The second reading is that "Bond just knows that there is at least one spy":

<strong>K</strong><sub>Bond</sub><em>∃x Spy(x)</em>

which in modal logic means that in each accessible world there is an x that is a spy, but it need not be the same x in each world
###### Modal Logic - Writing Axioms With Modal Operators

assert that agents are able to draw deductions; "if an agent knows P and knows that P implies Q, then the agent knows Q":

(<strong>K</strong><sub><em>a</em></sub><em>P</em> ∧ <strong>K</strong><em><sub>a</sub>(P ⇒ Q)) </em>⇒ <strong>K</strong><sub><em>a</em></sub><em>Q</em>

assert that every agent knows every proposition P is either true or false:

<strong>K</strong><em><sub>a</sub>(P <em>v </em>¬P)</em>

knowledge is justified true belief:

<strong>K</strong><em><sub>a</sub>P ⇒ P</em>

if an agent knows something then they know that they know it:

<strong>K</strong><em><sub>a</sub>P ⇒ </em><strong>K</strong><em><sub>a</sub>(<strong>K</strong><em><sub>a</sub>P)</em></em>

we can define similar axioms for belief (often denoted by <strong>B</strong>) and other modal operators.

one problem with modal logic is that it assumes <strong>logical omniscience</strong> on the part of agents (that is, if an agent knows a set of axioms, then it knows all consequences of those axioms).
# Reasoning Systems for Categories

2 families of systems designed for organizing and reasoning with categories:
- <strong>[[AI Chapter 12 - Knowledge Representation|semantic networks]]</strong> - utilizing graphs and algorithms for inferring properties of an object on the basis of its category membership
- <strong>[[AI Chapter 12 - Knowledge Representation|description logics]]</strong> - provides a formal language for constructing and combining category definitions and algorithms for deciding subset and superset relationships between categories

### Semantic Networks
A typical graphical notation displays object or category names in ovals or boxes, and connects them with labeled links. For example, Figure 12.5 has a MemberOf link between Mary and FemalePersons, corresponding to the logical assertion Mary ∈ FemalePersons; similarly, the SisterOf link between Mary and John corresponds to the assertion SisterOf(Mary, John). We can connect categories using SubsetOf links, and so on. It is such fun drawing bubbles and arrows that one can get carried away. For example, we know that persons have female persons as mothers, so can we draw a HasMother link from Persons to FemalePersons? The answer is no, because HasMother is a relation between a person and his or her mother, and categories do not have mothers.

For this reason, we have used a special notation (the double-boxed link) in Figure 12.5. This link asserts that
```
∀x x∈Persons ⇒ [∀y HasMother(x,y) ⇒ y∈FemalePersons]
```

We might also want to assert that persons have two legs (the singly-boxed link) in Figure 12.5
```
∀x x∈Persons ⇒ Legs(x,2)
```

As before, we need to be careful not to assert that a category has legs; the single-boxed link in Figure 12.5 is used to assert properties of every member of a category.

![[AI Chapter 12 - Knowledge Representation/12.5.png|550]]

semantic network notation makes it convenient to perform inheritance reasoning. However, inheritance becomes complicated when an object can belong to more than one category or when a category can be a subset of more than one other category; this is called <strong>multiple inheritance</strong>
###### <strong>Semantic Networks - Default Values</strong>

semantic network also has the ability to represent <strong>default values</strong> for categories. we say the default value is <strong>overridden</strong> by the more specific value (e.g. figure 12.5 John has 1 leg even though he is a person and all persons have 2 legs)
###### Drawbacks of Semantic Networks
- one drawback of semantic network notation (compared to first-order logic) is that links between nodes/bubbles represent only binary relations. 
  for example, to represent the following sentence in semantic networks is shown in figure 12.6 by reifying the proposition itself as an event belonging to an appropriate event category
    ```
    Fly(Shankar, NewYork, NewDelhi, Yesterday)
    ```

> [!list-indent-undo]
> > [!indent]
> > ![[AI Chapter 12 - Knowledge Representation/12.6.png|600]]
- another drawback for this simple version of semantic networks, is that it still leaves out the full first-order logic such as representing negation, disjunction, nested function symbols, and existential quantification.

### Description Logics

syntax of [[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|first-order logic]] makes it easy to say things about objects

<strong>description logics</strong>
- are notations that make it easier to describe definitions and properties of categories
- evolved from [[AI Chapter 12 - Knowledge Representation|semantic networks]] in response to pressure to formalizing what networks mean while retaining emphasis on taxonomic structure
- the principle inference tasks of description logics are:
	- <strong>subsumption</strong> - checking if one category is a subset of another by comparing their definitions
	- <strong>classification</strong> - checking whether an object belongs to a category
	- <strong>consistency</strong> - some description logic system includes consistency of a category definition (whether the membership criteria are logically satisfiable)

the CLASSIC language (Borgida et al., 1989) is a typical description logic

syntax of CLASSIC descriptions shown in figure 12.7

![[AI Chapter 12 - Knowledge Representation/12.7.png|450]]

for example, to say "bachelors are unmarried adult males":
```
Bachelor = And(Unmarried, Adult, Male).
```

the equivalent in first-order logic:
```
Bachelor(x) ⇔ Unmarried(x) ʌ Adult(x) ʌ Male(x)
```

any description in CLASSIC description logic can be translated into an equivalent first-order logic sentence. but some are more straightforward in CLASSIC description logic. for example, to describe the set of men with at least 3 sons who are all unemployed and married to doctors, and at most 2 daughters who are all professors in physics or math departments:
```
And(Man, AtLeast(3,Son), AtMost(2,Daughter),
    All(Son, And(Unemployed, Married, All(Spouse, Doctor))),
    All(Daughter, And(Professor, Fills(Department, Physics, Math))))
```
###### Description Logic - Its Tractability and its Drawbacks

the most important aspect of description logics is their emphasis on <font style="color: rgb(128,128,128);"><strong>tractability </strong></font><font style="color: rgb(128,128,128);"><strong>of inference</strong></font>.

a problem instance is solved by describing it and then asking if it is <font style="color: rgb(128,128,128);"><em><strong>subsumed</strong></em></font> by one of several possible solution categories. In standard first-order logic systems, predicting the solution time is often impossible. It is frequently left to the user to engineer the representation to detour around sets of sentences that seem to be causing the system to take several weeks to solve a problem. Description logics, on the other hand, is to ensure that <font style="color: rgb(128,128,128);"><em><strong>subsumption</strong></em></font>-testing can be solved in time polynomial in the size of the descriptions

this sounds wonderful in principle, until one realizes that it can only have one of<strong><em><font style="color: rgb(128,128,128);"> 2 consequences</font></em></strong>:
- either hard problems cannot be stated at all
- or they require exponentially large descriptions

However, the tractability results do shed light on what sorts of constructs cause problems and thus help the user to understand how different representations behave. For example, description logics usually lack negation and disjunction. Each forces first- order logical systems to go through a potentially exponential case analysis in order to ensure completeness. CLASSIC allows only a limited form of disjunction in the Fills and OneOf constructs, which permit disjunction over explicitly enumerated individuals but not over descriptions. With disjunctive descriptions, nested definitions can lead easily to an exponential number of alternative routes by which one category can subsume another
# Reasoning With Default Information

2 examples that violate the <font style="color: rgb(128,128,128);"><strong>[[Logic|monotonicity]]</strong></font> property of logic (and thus are <em>non-monotonic</em>):
- [[AI Chapter 12 - Knowledge Representation|semantic networks]] we saw that property inherited by all members of a category in a semantic network could be overridden by more specific information for a subcategory
- in <font style="color: rgb(128,128,128);"><strong><em>closed-world assumption</em></strong></font>:
	- if a proposition <font style="color: rgb(128,128,128);"><em>α </em></font>is not mentioned in <font style="color: rgb(128,128,128);"><em>KB </em></font>then: 
<font style="color: rgb(128,128,128);"><em>KB ⊨ ¬α</em></font>
- 
	- but when <font style="color: rgb(128,128,128);"><em>α</em></font> is mentioned then: 
<em><font style="color: rgb(128,128,128);">KB ∧ α ⊨ α</font></em>

failures of monotonicity are widespread in commonsense reasoning

2 types of non-monotonic logics:
- <strong>[[AI Chapter 12 - Knowledge Representation|circumscription]]</strong>
- <strong>[[AI Chapter 12 - Knowledge Representation|default logic]]</strong>

### Circumscription

a more powerful and precise version of the <strong><font style="color: rgb(128,128,128);"><em>closed world assumption</em></font></strong>

<strong>circumscription</strong> can be viewed as an example of a model <em><strong><font style="color: rgb(128,128,128);">preference </font></strong></em><em><strong><font style="color: rgb(128,128,128);">logic</font></strong></em>. In such logics, a sentence is entailed (with default status) if it is true in all preferred models of the KB, as opposed to the requirement of truth in all models in classical logic. For <strong><font style="color: rgb(128,128,128);">circumscription</font></strong>, one model is preferred to another if it has fewer abnormal objects

for example, to assert the default rule that birds fly, we introduce a predicate <font style="color: rgb(128,128,128);"><em>Abnormal1(x)</em></font> and write
```
Bird(x) ʌ ¬Abnormal1(x) ⇒ Flies(x)

or in prolog syntax

flies(X) :- bird(X), not abnormal(X).
```

if we say that <font style="color: rgb(128,128,128);"><em>Abnormal1 </em></font>is to be <strong>circumscribed</strong>, a circumscriptive reasoner is entitled to assume <font style="color: rgb(128,128,128);"><em>¬Abnormal1(x</em><em>)</em> </font>unless <font style="color: rgb(128,128,128);"><em>Abnormal1(x) </em></font>is known to be true. This allows the conclusion <font style="color: rgb(128,128,128);"><em>Flies(Tweety) </em></font>to be drawn from the premise <font style="color: rgb(128,128,128);"><em>Bird(Tweety)</em></font>, but the conclusion no longer holds if <font style="color: rgb(128,128,128);"><em>Abnormal1(Tweety) </em></font>is asserted

Let us see how this idea works in the context of multiple inheritance in semantic networks. The standard example for which multiple inheritance is problematic is called the “<em><font style="color: rgb(128,128,128);"><strong>Nixon diamond</strong></font></em>.” It arises from the observation that Richard Nixon was both a Quaker (and hence by default a pacifist) and a Republican (and hence by default not a pacifist). We can write this as follows:
```
Republican(Nixon) ∧ Quaker(Nixon)
Republican(x) ∧ ¬Abnormal2(x) ⇒ ¬Pacifist(x) Quaker(x) ∧ ¬Abnormal3(x) ⇒ Pacifist(x)
```

If we circumscribe <font style="color: rgb(128,128,128);"><em>Abnormal2</em></font> and <font style="color: rgb(128,128,128);"><em>Abnormal3</em></font>, there are two preferred models: one in which <font style="color: rgb(128,128,128);"><em>Abnormal2(Nixon) </em></font>and <font style="color: rgb(128,128,128);"><em>Pacifist(Nixon</em><em>)</em> </font>hold and one in which <font style="color: rgb(128,128,128);"><em>Abnormal3(Nixon) </em></font>and <font style="color: rgb(128,128,128);"><em>¬Pacifist(Nixon) </em></font>hold. Thus, the circumscriptive reasoner remains properly agnostic as to whether Nixon was a pacifist. If we wish, in addition, to assert that religious beliefs take precedence over political beliefs, we can use a formalism called <strong>prioritized circumscription </strong>to give preference to models where <font style="color: rgb(128,128,128);"><em>Abnormal3 </em></font>is minimized.
### Default Logic

<strong>default logic</strong> is a formalism in which default rules can be written to generate contingent, nonmonotonic conclusions

a default rule looks like this:

<strong><em><font style="color: rgb(128,128,128);">Bird(x) : Flies(x) / Flies(x)</font></em></strong>

this rules means that if <font style="color: rgb(128,128,128);"><em>Bird(x)</em></font> is true, and if <em><font style="color: rgb(128,128,128);">Flies(x)</font></em> is <em><strong>consistent</strong></em> (causing no contradiction) with knowledge base, then <em><font style="color: rgb(128,128,128);">Flies(x)</font></em> may be concluded by default.

default rule has the form:

<strong><font style="color: rgb(128,128,128);"><em>P: J<sub>1</sub>, ..., J<sub>n</sub> / C</em></font></strong>

where:
- <font style="color: rgb(128,128,128);"><em>P</em></font> is called the prerequisite
- <font style="color: rgb(128,128,128);"><em>C</em></font> is the conclusion
- <em><font style="color: rgb(128,128,128);">J<sub>i</sub></font></em> are the justifications (if any one of them is proven false, then conclusion cannot be drawn).

Any variable that appears in <em><font style="color: rgb(128,128,128);">J<sub>i</sub></font></em> and <font style="color: rgb(128,128,128);"><em>C</em></font> must also appear in <font style="color: rgb(128,128,128);"><em>P</em></font>

the <em>Nixon-diamond</em> example can be represented in <strong><font style="color: rgb(128,128,128);"><em>default logic</em></font></strong> with <font style="color: rgb(128,128,128);"><em>1 fact</em></font> and <font style="color: rgb(128,128,128);"><em>2 default rules</em></font>:

<strong><em><font style="color: rgb(128,128,128);">Republican(Nixon) ∧ Quaker(Nixon)           \# fact</font></em></strong>
<strong><em><font style="color: rgb(128,128,128);">Republican(x) : ¬Pacifist(x) / ¬Pacifist(x)   \# default rule</font></em></strong>
<strong><em><font style="color: rgb(128,128,128);">Quaker(x) : Pacifist(x) / Pacifist(x)              \# default rule</font></em></strong>
# Truth Maintenance Systems

inferences drawn by the knowledge representation system will have only default status, rather than being absolutely certain. Inevitably, some of these inferred "facts" will turn out to be wrong and will have the be retracted in the face of new information. this process is called <strong>belief revision</strong>
###### The Difficulty of Belief Revisioning

suppose that a knowledge base <font style="color: rgb(128,128,128);"><em>KB </em></font>contains a sentence <font style="color: rgb(128,128,128);"><em>P</em> </font><em>(perhaps a default conclusion recorded by a forward-chaining algorithm, or perhaps just an incorrect assertion</em>) and we want to execute <font style="color: rgb(128,128,128);">T</font><font style="color: rgb(128,128,128);">ELL(KB, ¬P</font><font style="color: rgb(128,128,128);">)</font>. To avoid creating a contradiction, we must first execute <font style="color: rgb(128,128,128);">R</font><font style="color: rgb(128,128,128);">ETRACT(KB, P</font><font style="color: rgb(128,128,128);">)</font>. This sounds easy enough. Problems arise, however, if any additional sentences were inferred from <em><font style="color: rgb(128,128,128);">P </font></em>and asserted in the <em><font style="color: rgb(128,128,128);">KB</font></em>. For example, the implication <font style="color: rgb(128,128,128);"><em>P ⇒ Q </em></font>might have been used to add <em><font style="color: rgb(128,128,128);">Q</font></em>. The obvious “solution”—retracting all sentences inferred from <font style="color: rgb(128,128,128);"><em>P</em></font>—fails because such sentences may have other justifications besides <font style="color: rgb(128,128,128);"><em>P</em></font>. For example, if <font style="color: rgb(128,128,128);"><em>R </em></font>and <em><font style="color: rgb(128,128,128);">R ⇒ Q </font></em>are also in the <font style="color: rgb(128,128,128);"><em>KB</em></font>, then <font style="color: rgb(128,128,128);"><em>Q </em></font>does not have to be removed after all.
###### <strong>Truth Maintenance Systems </strong>(TMSs)
- are designed to handle the <font style="color: rgb(128,128,128);">difficulty of belief revisioning</font>
- types of TMSs:
	- [[AI Chapter 12 - Knowledge Representation]]
	- [[AI Chapter 12 - Knowledge Representation|assumption-based truth maintenance system (ATMS)]]

###### justification-based truth maintenance system (JTMS)
- each sentence in the knowledge base is annotated with a <strong>justification</strong> consisting of the set of sentences from which it was inferred
	- for example, <em>if the knowledge base already contains P ⇒ Q, then TELL(P) will cause Q to be added with the justification {P, P ⇒ Q</em><em>}</em>
- a sentence can have any number of <em>justifications</em>
- justifications make retraction efficient. Given the call RETRACT(P), the JTMS will delete exactly those sentences for which P is a member of every justification
	- So:
		- if a sentence Q had the single justification {P, P ⇒ Q}, it would be <font style="color: rgb(128,0,0);">removed</font>
		- if it had the additional justification {P, P ∨ R ⇒ Q}, it would still be <font style="color: rgb(128,0,0);">removed</font>
		- but if it also had the justification {R, P ∨ R ⇒ Q}, then it would be <font style="color: rgb(51,153,102);">spared</font>
	- In this way, the time required for retraction of P depends only on the number of sentences derived from P rather than on the number of other sentences added since P entered the knowledge base

###### assumption-based truth maintenance system (ATMS)
- are efficient in context-switching between hypothetical worlds

###### JTMS vs ATMS
In a JTMS, the maintenance of justifications allows you to move quickly from one state to another by making a few retractions and assertions, but at any time only one state is represented. An ATMS represents all the states that have ever been considered at the same time. Whereas a JTMS simply labels each sentence as being in or out, an ATMS keeps track, for each sentence, of which assumptions would cause the sentence to be true. In other words, each sentence has a label that consists of a set of assumption sets. The sentence holds just in those cases in which all the assumptions in one of the assumption sets hold 

TMSs also provide a mechanism for generating <strong>explanations</strong> - an explanation of a sentence P is a set of sentences E such that E entails P
# The Internet Shopping World

TODO page 482 of AI: A Modern Approach - 3rd Edition
