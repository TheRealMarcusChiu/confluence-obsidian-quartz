---
title: "Modal Logic"
created: 2021-09-13T04:44:28.059-05:00
modified: 2021-09-13T04:44:28.059-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children:
  - "[[Modal Operators]]"
---
designed to allow <strong>[[AI Chapter 12 - Knowledge Representation|referential opacity]] logic</strong> into knowledge base.

regular logic is concerned with <strong>single modality</strong> (the modality of truth), allowing us to express "P is true"

modal logic includes<strong> modal operators</strong> that takes sentences (rather than terms) as arguments (e.g. "A knows P" is represented with notation <strong>K</strong><em><sub>A</sub>P</em> where <strong>K</strong> is the <strong>modal operator</strong> for knowledge, <sub><font style="color: rgb(0,51,102);">A</font></sub> is the agent, and P is a sentence).

<strong>syntax</strong> of modal logic is the same as first-order logic, with the addition that sentences can also be formed with <strong>modal operators</strong>

<strong>semantics</strong> of modal logic is more complicated. In first-order logic a model contains a set of objects and an interpretation that maps each name to the appropriate object, relation, or function. In modal logic we want to be able to consider both the possibility that Superman's secret identity is Clark and that it isn't. Therefore, in modal logic a model consists of a collection of <strong>possible worlds</strong> (instead of 1 true world). The worlds are connected in a graph by <strong>accessibility relations</strong> (one relation for each modal operator). We say that world w<sub>1</sub>is accessible from world w<sub>0</sub>with respect to the modal operator <strong>K</strong><sub>A</sub>if everything in w<sub>1</sub> is consistent with what A knows in w<sub>0</sub>, and we write this as Acc(<strong>K</strong><sub>A</sub>, w<sub>0</sub>, w<sub>1</sub>)

Figure 12.4 shows accessibility as an arrow between possible worlds

![[Modal Logic/12.4.png]]

A knowledge atom <strong>K</strong><em><sub>A</sub>P </em>is true in world w if and only if P is true in every world accessible from w. The truth of more complex sentences is derived by recursive application of this rule and the normal rules of first-order logic. That means that modal logic can be used to reason about nested knowledge sentences: what one agent knows about another agent’s knowledge.

For example, we can say that, even though Lois doesn’t know whether Superman’s secret identity is Clark Kent, she does know that Clark knows:

<strong>K</strong><sub><em>Lois</em></sub>\[<strong>K</strong><em><sub>Clark</sub>Identity(Superman, Clark) </em>∨ <strong>K</strong><em><sub>Clark</sub></em><em> ¬Identity(Superman, Clark</em><em>)</em>\]

In TOP-LEFT of figure 12.4 we represent the scenario where it is common knowledge that Superman knows his own identity, and neither he nor Lois has seen the weather report. So in w0 the worlds w0 and w2 are accessible to Superman; maybe rain is predicted, maybe not. For Lois all four worlds are accessible from each other; she doesn’t know anything about the report or if Clark is Superman. But she does know that Superman knows whether he is Clark, because in every world that is accessible to Lois, either Superman knows I, or he knows ¬I. Lois does not know which is the case, but either way she knows Superman knows.

In the TOP-RIGHT of figure 12.4 we represent the scenario where it is common knowledge that Lois has seen the weather report. So in w4 she knows rain is predicted and in w6 she knows rain is not predicted. Superman does not know the report, but he knows that Lois knows, because in every world that is accessible to him, either she knows R or she knows ¬R.

In the BOTTOM of figure 12.4 we represent the scenario where it is common knowledge that Superman knows his identity, and Lois might or might not have seen the weather report. We represent this by combining the two top scenarios, and adding arrows to show that Superman does not know which scenario actually holds. Lois does know, so we don’t need to add any arrows for her. In w0 Superman still knows I but not R, and now he does not know whether Lois knows R. From what Superman knows, he might be in w0 or w2, in which case Lois does not know whether R is true, or he could be in w4, in which case she knows R, or w6, in which case she knows ¬R.
###### Modal Logic's Tricky Interplay of Quantifiers and Knowledge

for example, the English sentence “Bond knows that someone is a spy” is ambiguous.

The first reading is that "there is a particular someone who Bond knows is a spy":

∃x <strong>K</strong><em><sub>Bond</sub>Spy(x</em><em>)</em>

which in modal logic means that there is an x that, in all accessible worlds, Bonds knows the same x to be a spy

The second reading is that "Bond just knows that there is at least one spy":<strong>K</strong><sub>Bond</sub><em>∃x Spy(x)</em>

which in modal logic means that in each accessible world there is an x that is a spy, but it need not be the same x in each world
###### Modal Logic - Writing Axioms With Modal Operators

assert that agents are able to draw deductions; "if an agent knows P and knows that P implies Q, then the agent knows Q":

(<strong>K</strong><sub><em>a</em></sub><em>P</em> ∧ <strong>K</strong><em><sub>a</sub>(P ⇒ Q)) </em>⇒ <strong>K</strong><sub><em>a</em></sub><em>Q</em>

assert that every agent knows every proposition P is either true or false:

<strong>K</strong><em><sub>a</sub>(P <em>v </em>¬P)</em>

knowledge is justified true belief:

<strong>K</strong><em><sub>a</sub>P ⇒ P</em>

if an agent knows something then they know that they know it:

<strong>K</strong><em><sub>a</sub>P ⇒ </em><strong>K</strong><em><sub>a</sub>(<strong>K</strong><em><sub>a</sub>P)</em></em>

we can define similar axioms for belief (often denoted by <strong>B</strong>) and other modal operators.

one problem with modal logic is that it assumes <strong>logical omniscience</strong> on the part of agents (that is, if an agent knows a set of axioms, then it knows all consequences of those axioms).
