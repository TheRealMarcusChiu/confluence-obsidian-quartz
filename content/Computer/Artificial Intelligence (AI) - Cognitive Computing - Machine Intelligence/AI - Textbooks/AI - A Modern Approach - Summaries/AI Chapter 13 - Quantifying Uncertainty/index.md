---
title: "AI Chapter 13 - Quantifying Uncertainty"
created: 2019-04-19T13:01:10.471-05:00
modified: 2026-05-24T20:22:43.189-05:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
## Sections
- Acting Under Uncertainty
- Basic Probability Notation
- Inference Using Full Joint Distributions
- Independence
- Bayes' Rule and Its Use

# Acting Under Uncertainty

trying to use <em>classical logic</em> (e.g. propositional and first-order logic) to cope with a domain like medical diagnosis <font style="color: rgb(255,0,0);">fails</font> for 3 main reasons:
- <strong>laziness</strong>: it is too much work to list the complete set of antecedents or consequents needed to ensure an exception-less rule and too hard to use such rules
- <strong>ignorance</strong> - lack of knowledge or information
	- <strong>theoretical ignorance</strong>: medical science has no complete theory for the domain
	- <strong>practical ignorance</strong>: even if we know all the rules, we might be uncertain about a particular patient because not all the necessary tests have been or can be run

classical logic has a<strong> qualification problem</strong> - the impossibility of listing all the preconditions required for a real-world action to have its intended effect

probability provides a way of summarizing the uncertainty that comes from our <strong>laziness</strong> and <strong>ignorance</strong>

classical logic statements are made with respect to the <strong>real world</strong>
probability statements are made with respect to a <strong>knowledge state</strong>, not to the <strong>real world</strong>
###### Uncertainty and Rational Decisions

Consider the A<sub>90</sub>plan for getting to the airport (<em>leaving home 90 minutes before the flight departs and driving at a reasonable speed</em>). Suppose it gives us a 97% chance of catching our flight. Does this mean it is a rational choice? Not necessarily: there might be other plans, such as A<sub>180</sub>, with higher probabilities. If it is vital not to miss the flight, then it is worth risking the longer wait at the airport. What about A<sub>1440</sub>, a plan that involves leaving home 24 hours in advance? In most circumstances, this is not a good choice, because although it almost guarantees getting there on time, it involves an intolerable wait—not to mention a possibly unpleasant diet of airport food.

To make such choices, an agent must have <strong>preferences</strong> between different <strong>outcomes</strong> (a completely specified state) of various plans.
###### Representing and Reasoning Preferences

<strong>utility theory</strong>
- used to represent preferences and reasoning with it
- utility means "the quality of being useful"
- the utility of a outcome/state is relative to an agent
- a utility function accounts for any set of preferences

###### Theory of Rational Decisions

<strong>decision theory</strong>
- <strong>decision-theory </strong>= <strong>probability-theory </strong>+ <strong>utility-theory</strong>
- fundamental idea of decision theory is that an agent is rational if and only if it chooses an action of maximum expected utility (MEU)
- <strong>maximum expected utility </strong><strong>(MEU)</strong> - choosing an action out of a set of all possible actions in current state that yields the highest expected utility (an average over all the possible outcomes of the action)
- a decision-theoretic agent’s belief state represents not just the possibilities for world states but also their probabilities

![[AI Chapter 13 - Quantifying Uncertainty/decision-theoretic agent.png|574x250]]
### [[Where Do Probabilities Come From？|Where Do Probabilities Come From?]]
# Basic Probability Notation
###### Probability Model
a <strong>probability model</strong> is defined by 3 components: its <strong><em>sample space</em></strong>, <strong><em>events</em></strong> within the sample space, and <strong><em>probabilities</em></strong> associated with each event
- <strong>sample space</strong> is a set of all possible worlds
	- the sample space of possible worlds are:
		- <strong>mutually exclusive </strong>- two distinct possible worlds cannot both be a single case in the sample space
		- <strong>exhaustive </strong>- any one possible world must be a case in the sample space
	- Ω (uppercase omega) - sample space
	- ω (lowercase omega) - an element or elements of the space (possible worlds)
- <strong>events</strong> is a subset of the sample space
	- an event is described as a <strong>propositional statement</strong> which is associated <strong>subset of all possible worlds</strong>
	- i.e. a propositional-event is a subset of all possible worlds where the proposition statement is held true
	- <strong>atomic event </strong>is an event with 1 possible world
		- is a complete specification of the state of the world about which the agent is uncertain
		- If the world is described by a set of random variables, an atomic event is a particular assignment of values to the random variables
- <strong>probability</strong> is a numerical value assigned to a given event
	- the probability of an event is the summation of all P(ω) where the proposition holds true in ω
	- for all events <font style="color: rgb(128,128,128);">φ</font>:<em><font style="color: rgb(128,128,128);"> P(φ) = \[ ΣP(ω) : ω∈φ \]</font></em><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">.</font></font>where <em><font style="color: rgb(128,128,128);">ω </font></em>is a possible world satisfying <font style="color: rgb(128,128,128);">φ</font>

a<strong> probability model </strong>associates a numerical probability <strong>P(ω) </strong>with each possible world, while adhering to the axioms of probability theory:
- <strong>0 ≤ P(ω) ≤ 1 for every </strong><strong>ω</strong> - every possible world has a probability between 0 and 1
- <strong>ΣP(ω</strong><strong>) = 1</strong> - the total probability of the set of possible worlds is 1

probabilistic assertions and queries are not usually about particular possible worlds, but about sets of them
### <strong>Unconditional and Conditional Probabilities</strong>
<strong>(unconditional </strong>or <strong>[[A Priori Proposition - A Posteriori Proposition|prior]]) probabilities</strong> - refer to degrees of belief in propositions in the <strong>absence</strong> of any other information or observed evidence(s)
<strong>(conditional </strong>or <strong>[[A Priori Proposition - A Posteriori Proposition|posterior]]) </strong><strong>probabilities</strong> - refer to degrees of belief in propositions in the <strong>presence</strong> of any other information or observed evidence(s)

relationship between prior and posterior probabilities see [[AI Chapter 13 - Quantifying Uncertainty]]

<strong>Conditional Implication </strong>vs <strong>Logical</strong> <strong>Implication</strong>

consider the following assertion: <em><font style="color: rgb(128,128,128);">P(cavity | toothache) = 0.6 </font></em>
- logical implication: <em>“Whenever </em><em>toothache is true, conclude that cavity is true with probability 0.6” <font style="color: rgb(255,0,0);">wrong semantics of the given assertion</font></em>
- conditional implication: <em>“Whenever </em><em>toothache is true and we have no further relevant information, conclude that cavity is true with probability 0.6” <font style="color: rgb(51,153,102);">correct semantics of the given assertion</font></em>
  the extra condition is important: e.g. if we had the further relevant information that the dentist found no cavities, we definitely would not want to conclude that cavity is true with probability 0.6; instead we need to use <em><font style="color: rgb(128,128,128);">P(cavity | toothache ∧ ¬cavity) = 0 </font></em>

###### Conditional Probability in terms of Unconditional Probabilities

<strong>posterior conditional probability</strong> is defined in terms of <strong>prior</strong> <strong>unconditional probabilities</strong> as follows

![[AI Chapter 13 - Quantifying Uncertainty/conditional prob represented with unconditional prob.png|150]]
- <font style="color: rgb(128,128,128);"><em>P(a | b)</em> </font>is a conditional probability
- <em><font style="color: rgb(128,128,128);">P(a ʌ b)</font></em> and <font style="color: rgb(128,128,128);"><em>P(b)</em></font> are prior unconditional probabilities

###### Product Rule

the formula above can be written in a different form called the <strong>product rule </strong>(also called<strong><strong> chain rule</strong></strong> when product rule is used more than once)<strong>![[AI Chapter 13 - Quantifying Uncertainty/product rule.png|190]]</strong>
### The Language of Propositions in Probability Assertions

propositions describing sets of possible worlds:
- are written in a notation that combines elements of propositional logic and constraint satisfaction notation
- it is a <strong>factored representation</strong>, in which a possible world is represented by a set of variable/value pairs

###### Random Variable & its Domain
every <strong>random variable</strong> has a <strong>domain</strong>—the set of possible values it can take on

domains can either be:
- finite or infinite (e.g. boolean is finite, integers and reals are infinite)
- discrete or continuous (e.g. integers are discrete, reals are continuous)
- nominal or ordinal? not sure...

elementary propositions can be combined in such the following example:
- The probability that the patient has a cavity, given that she is a teenager with no toothache, is 0.1
  
  <font style="color: rgb(128,128,128);"><em>P(cavity | ¬toothache ∧ teen ) = 0.</em><em>1</em></font>

###### Probability Distribution

probabilities of all the possible values of a random variable. We could write:
- P(Weather = sunny) = 0.6
- P(Weather = rain) = 0.1
- P(Weather = cloudy) = 0.29
- P(Weather = snow) = 0.01

but as an abbreviation we will allow
- <strong>P</strong>(Weather) = ⟨0.6, 0.1, 0.29, 0.01⟩

where the bold <strong>P </strong>indicates that the result is a vector of numbers, and where we assume a predefined ordering ⟨sunny,rain,cloudy,snow⟩ on the domain of Weather

<strong>P</strong> statement defines a <em><strong>probability distribution </strong></em>for the random variable Weather
###### Conditional Distribution
given: <strong>P</strong>(X|Y) gives the values of <strong>P</strong>(X=x<sub>i</sub>|Y=y<sub>j</sub>) for each possible i,j pair

<strong>P</strong> statement defines a <em><strong>conditional distribution</strong></em> for the random variable X given Y
###### Probability Density Function

a [[AI Chapter 13 - Quantifying Uncertainty|random variable]] of infinite domain <strong>cannot</strong> be represented as a [[AI Chapter 13 - Quantifying Uncertainty|probability distribution]]

instead, we can define the probability that a random variable takes on some value x as a <strong>parameterized function</strong> of x

for example, the sentence:

<em><strong>P</strong>(NoonTemp=x) = <strong>Uniform</strong><sub>\[18C,26C\]</sub>(x) </em>expresses the belief that the temperature at noon is <strong>distributed uniformly</strong> between 18 and 26 degrees Celsiusthe intuitive definition of <strong>P</strong>(x) is the probability that X falls within an arbitrarily small region beginning at x, divided by the width of the region: 

<font style="color: rgb(128,128,128);"><em><strong>P</strong>(x) = lim</em></font><font style="color: rgb(128,128,128);"><sub>dx→0</sub></font><em>P(x ≤ X ≤ x+dx)/dx</em>

for <font style="color: rgb(128,128,128);"><em>NoonTemp </em></font>we have:

<font style="color: rgb(128,128,128);"><em><strong>P</strong>(NoonTemp=x) = <strong>Uniform</strong><sub>\[18,26\]</sub>(x) = if 18≤x≤26: 1/8 Centigrade; otherwise: 0;</em></font>

in <font style="color: rgb(128,128,128);"><em>P(NoonTemp=20.18C) = 1/8 Centigrade</em></font>, note <font style="color: rgb(128,128,128);"><em>1/</em></font><font style="color: rgb(128,128,128);"><em>8 </em></font><font style="color: rgb(128,128,128);"><em>Centigrade</em></font> that is not a probability, it is a <strong><em>probability density</em></strong>. The probability that <font style="color: rgb(128,128,128);"><em>NoonTemp </em></font>is exactly 20.18C is zero, because 20.18C is a region of width 0
###### Joint Probability Distribution

<strong>joint probability distribution</strong> is a notation for distributions on multiple variables<strong>P</strong>(X,Y) denotes the probabilities of all combinations of the values of X and Y 

the [[AI Chapter 13 - Quantifying Uncertainty|product rules]] for all possible values of X and X can be written as a single equation:

<font style="color: rgb(128,128,128);"><em><strong>P</strong>(X,Y) </em>=<em> <strong>P</strong>(X|Y)<strong>P</strong>(X)</em></font>
###### Full Joint Probability Distribution

<strong>full joint probability distribution</strong> is a [[AI Chapter 13 - Quantifying Uncertainty|probability model]] that is completely determined by the joint distribution for all of the random variables

it can be used to find two other types of distributions: [[AI Chapter 13 - Quantifying Uncertainty|marginal distribution]] and [[AI Chapter 13 - Quantifying Uncertainty|conditional probability distribution]]

For example, if the variables are <font style="color: rgb(128,128,128);"><em>Cavity</em></font>, <font style="color: rgb(128,128,128);"><em>Toothache</em></font>, and <font style="color: rgb(128,128,128);"><em>Weather</em></font>, then the full joint distribution is given by <font style="color: rgb(128,128,128);"><em>P(Cavity, Toothache, Weather)</em></font><font style="color: rgb(128,128,128);"><em>.</em></font> given that the variables: Cavity has 2 possible values, Toothache having 2, and Weather having 4, the joint distribution can be represented as a 2 × 2 × 4 table with 16 entries

<strong>example full joint probability distribution</strong>

![[AI Chapter 13 - Quantifying Uncertainty/example full joint distribution.png|560]]
### Probability Axioms
###### <strong>AXIOM-1</strong>
first basic axiom of probability theory:

<font style="color: rgb(128,128,128);"><em>0 ≤ P(ω) ≤ 1 for every ω</em></font> - every possible world has a probability between 0 and 1
<em><font style="color: rgb(128,128,128);">ΣP(ω) = 1</font></em> - the total probability of the set of possible worlds is 1
###### <strong>AXIOM-2</strong>

for all <strong>propositional-events</strong> φ:

<font style="color: rgb(128,128,128);"><em>P(φ) = \[ ΣP(ω) : ω∈φ \]</em></font>

this is called [[AI Chapter 13 - Quantifying Uncertainty|marginalization]]
###### AXIOM-3

relationship between the <strong>probability of a proposition</strong> and the <strong>probability of its negation:</strong>

<em>P(¬a) = Σ<sub>ω∈¬a</sub>P(ω)
<em><font style="color: rgb(128,128,128);">P(¬a)</font></em> = Σ<sub>ω∈¬a</sub>P(ω) + Σ<sub>ω∈a</sub>P(ω) − Σ<sub>ω∈a</sub>P(ω)
<em><font style="color: rgb(128,128,128);">P(¬a) </font></em>= Σ<sub>ω∈Ω</sub>P(ω) − Σ<sub>ω∈a</sub>P(ω)
<em><font style="color: rgb(128,128,128);">P(¬a) </font></em>= 1 - P(a)</em>
###### <strong><strong>AXIOM-4</strong></strong>

<strong>inclusion–exclusion principle </strong>(Kolmogorov’s axioms):

<font style="color: rgb(128,128,128);"><em>P(a ∨ b) = P(a) + P(b) − P(a ∧ b)</em></font>
###### <strong><strong>AXIOM-5</strong></strong>

controversial axiom is that degrees of belief must be numbers, or at least act like numbers in that they must be:
- <strong>transitive</strong> - if belief in A is greater than belief in B, which is greater than belief in C, then belief in A must be greater than C
- <strong>comparable</strong> - the belief in A must be one of equal to, greater than, or less than belief in B

# Inference Using Full Joint Distributions

<strong>probabilistic inference</strong> - the computation of <font style="color: rgb(128,128,128);"><em>posterior probabilities</em></font> of <font style="color: rgb(128,128,128);"><em>query propositions</em></font> given <font style="color: rgb(128,128,128);"><em>observed evidence</em></font>

we use [[AI Chapter 13 - Quantifying Uncertainty|full joint distribution]] as the “knowledge base” from which answers to all questions may be derived & several useful techniques for manipulating equations involving probabilities
### Example Full Joint Distribution
<font style="color: rgb(128,128,128);"><em>![[AI Chapter 13 - Quantifying Uncertainty/example full joint distribution.png|650]]</em></font>

the figure above shows a 2×2×2 full-joint-distribution table, of a domain consisting of three Boolean variables: <font style="color: rgb(128,128,128);"><em>Toothache</em></font>, <font style="color: rgb(128,128,128);"><em>Cavity</em></font>, and <font style="color: rgb(128,128,128);"><em>Catch</em></font>
1. notice [[AI Chapter 13 - Quantifying Uncertainty]] holds: as the sum of all probabilities equals 1
2. notice [[AI Chapter 13 - Quantifying Uncertainty]] gives us a direct way to calculate the probability of any event/proposition: simply identify those possible worlds in which the proposition is true and add up their probabilities.
   
   for example, there are six possible worlds in which the event/proposition '<font style="color: rgb(128,128,128);"><em>cavity <font style="color: rgb(51,153,102);"><strong>∨</strong></font> toothache</em></font>' holds:
   <em>P(cavity <strong><font style="color: rgb(51,153,102);">∨</font></strong> toothache) = <em>P(cavity <font style="color: rgb(128,0,0);">ʌ</font> toothache <em><font style="color: rgb(128,128,128);"><em><em><em><font style="color: rgb(128,0,0);">ʌ</font> </em></em></em></font></em>catch) + <em>P(cavity <font style="color: rgb(128,0,0);">ʌ</font> toothache <em><font style="color: rgb(128,128,128);"><em><em><em><font style="color: rgb(128,0,0);">ʌ</font> </em></em></em></font></em>¬catch) + 
   <em><font style="color: rgb(128,128,128);">                                      P(cavity <font style="color: rgb(128,0,0);">ʌ</font> <em><font style="color: rgb(128,128,128);"><em><em>¬</em></em></font></em>toothache <font style="color: rgb(128,0,0);"><em><em><em><em>ʌ</em></em></em></em></font> catch) +</font></em></em></em></em><em><font style="color: rgb(128,128,128);"><em><em><em><em> P(cavity <font style="color: rgb(128,0,0);">ʌ</font> <em><font style="color: rgb(128,128,128);"><em><em>¬</em></em></font></em>toothache <em><em><em><em><font style="color: rgb(128,0,0);">ʌ</font> </em></em></em></em></em></em></em></em></font></em><font style="color: rgb(128,128,128);">¬catch) +</font> 
   <em><font style="color: rgb(128,128,128);">                                      P(<em><font style="color: rgb(128,128,128);"><em><em>¬</em></em></font></em>cavity <font style="color: rgb(128,0,0);">ʌ</font> toothache <font style="color: rgb(128,0,0);"><em><em><em><em>ʌ</em></em></em></em></font> catch) + <em>P(<em><font style="color: rgb(128,128,128);"><em><em>¬</em></em></font></em>cavity <font style="color: rgb(128,0,0);">ʌ</font> toothache <em><em><em><em><font style="color: rgb(128,0,0);">ʌ</font> </em></em></em></em>¬catch)</em></font></em><em><font style="color: rgb(128,128,128);">P(cavity <strong><font style="color: rgb(51,153,102);">∨</font></strong> toothache) = 0.108 + 0.012 + 0.072 + 0.008 + 0.016 + 0.064</font></em><em><font style="color: rgb(128,128,128);"><em><em>P(cavity <strong><font style="color: rgb(51,153,102);">∨</font></strong> toothache) </em>= 0.28</em></font></em>this is an example of using <em>marginalization rule</em> as explained below

###### <strong>Marginalization & Conditioning</strong>
- sum of all probabilities where a random variable has the value x (this process is called <strong>marginalization</strong> or <strong>summing out</strong>)
- e.g. <strong>marginal probability</strong> of <font style="color: rgb(128,128,128);">Cavity=</font>
  <em><font style="color: rgb(128,128,128);"><em>                              P(cavity <font style="color: rgb(128,0,0);">ʌ</font> <em><font style="color: rgb(128,128,128);"><em><em>¬</em></em></font></em>toothache <font style="color: rgb(128,0,0);"><em><em><em><em>ʌ</em></em></em></em></font> catch) + </em></font></em><em><font style="color: rgb(128,128,128);"><em><em><em><em>P(cavity <font style="color: rgb(128,0,0);">ʌ</font> <em><font style="color: rgb(128,128,128);"><em><em>¬</em></em></font></em>toothache <em><em><em><em><font style="color: rgb(128,0,0);">ʌ</font> </em></em></em></em></em></em></em></em></font></em><font style="color: rgb(128,128,128);">¬catch)</font>
  <font style="color: rgb(128,128,128);"><em>P(Cavity=cavity) = 0.108 + 0.012 + 0.072 + 0.008 </em></font>
  <font style="color: rgb(128,128,128);"><em><em>P(Cavity=cavity) </em>= 0.2</em></font>
<font style="color: rgb(128,128,128);">cavity</font>:
<em><font style="color: rgb(128,128,128);"><em><em>P(Cavity=cavity) = </em>P(cavity <font style="color: rgb(128,0,0);">ʌ</font> toothache <em><em><em><em><font style="color: rgb(128,0,0);">ʌ</font></em></em></em></em></em></font></em><font style="color: rgb(128,128,128);">catch) + </font><em><font style="color: rgb(128,128,128);">P(cavity <font style="color: rgb(128,0,0);">ʌ</font> toothache <em><em><em><em><font style="color: rgb(128,0,0);">ʌ</font> </em></em></em></em>¬catch) + </font></em>
- <strong>marginalization rule</strong> for any sets of variables Y and Z<font style="color: rgb(128,128,128);">P(Y</font><font style="color: rgb(128,128,128);">) = Σ<sub>z∈Z</sub>P(Y,z)</font> where <font style="color: rgb(128,128,128);">Σ</font><sub><font style="color: rgb(128,128,128);">z∈Z</font></sub>means the sum over all possible combinations of values of the set of variables <font style="color: rgb(128,128,128);">Z</font>
- <strong>conditioning rule</strong> - a variant of <em>marginalization rule</em> that involves <font style="color: rgb(128,128,128);"><strong>conditional probabilities</strong></font> instead of <font style="color: rgb(128,128,128);"><strong>joint probabilities</strong></font>, using the [[AI Chapter 13 - Quantifying Uncertainty|product rule]]
  <font style="color: rgb(128,128,128);">P(Y</font><font style="color: rgb(128,128,128);">) = Σ<sub>z∈Z</sub></font><font style="color: rgb(128,128,128);">P</font><font style="color: rgb(128,128,128);">(Y|z)P(z)</font>

###### Calculating Conditional Probabilities

conditional probabilities can be found by first using [[AI Chapter 13 - Quantifying Uncertainty]] and [[AI Chapter 13 - Quantifying Uncertainty|conditional probability]] (expressing conditional probabilities as un-conditional probabilities)

for example, to compute the probability of a cavity, given evidence of a toothache:
<font style="color: rgb(128,128,128);"><em>P(cavity|toothache) = P(cavity∧toothache) / P(toothache)</em></font><em>P(cavity|toothache) = (0.108 + 0.012)        / (0.108 + 0.012 + 0.016 + 0.</em><em>064)</em>
<em>P(cavity|toothache)</em> = 0.6

we can also compute the probability that there is no cavity, given a toothache:
<font style="color: rgb(128,128,128);"><em>P(<em>¬</em>cavity|toothache) = P(¬cavity∧toothache) / P(toothache)</em></font><font style="color: rgb(128,128,128);"><em>P(<em>¬</em>cavity|toothache) = (</em></font><font style="color: rgb(128,128,128);"><em>0.016 + 0.064</em></font><em>)         / (0.108 + 0.012 + 0.016 + 0.</em><em>064)</em><em>P(<em>¬</em>cavity|toothache)</em><font style="color: rgb(128,128,128);"> = 0.4</font>

<em>as you can see <font style="color: rgb(128,128,128);">P(cavity|toothache)</font> + <font style="color: rgb(128,128,128);">P(¬cavity|toothache)</font></em> = 1
###### <strong>Normalization Constant</strong>
- notice that <font style="color: rgb(128,128,128);"><em>1</em></font><font style="color: rgb(128,128,128);"><em>/P(Toothache=toothache) </em></font>remains constant, for all <em>[[AI Chapter 13 - Quantifying Uncertainty|values]]</em> of the <em>[[AI Chapter 13 - Quantifying Uncertainty|random variable]]</em> <font style="color: rgb(128,128,128);"><em>Cavity</em></font>. In fact, <font style="color: rgb(128,128,128);"><em>1</em></font><font style="color: rgb(128,128,128);"><em>/P(Toothache=toothache)</em></font> is the <strong>normalization </strong><strong>constant</strong> for the [[AI Chapter 13 - Quantifying Uncertainty|conditional distribution]] <font style="color: rgb(128,128,128);"><em>P(Cavity | ToothAche=toothache)</em></font>
- normalization constant is denoted as <strong>α</strong>

<font style="color: rgb(0,51,102);"><font style="color: rgb(0,0,0);">with <strong>α </strong>the preceding equations can be represented as one</font>:</font><em><strong>P</strong>(Cavity | toothache) = α <strong>P</strong>(Cavity, toothache)
<strong>P</strong>(Cavity | toothache) = α \[<strong>P</strong>(Cavity,toothache,catch) + <strong>P</strong>(Cavity,toothache,¬catch)\]
<strong>P</strong>(Cavity | toothache) = α \[⟨0.108,0.016⟩+⟨0.012,0.064⟩\]
<strong>P</strong>(Cavity | toothache) = α ⟨0.12,0.08⟩
<strong>P</strong>(Cavity | toothache) = ⟨0.6,0.4⟩</em>

<font style="color: rgb(128,128,128);">where: </font><em><em>α =</em> <em>1</em><em>/P(Toothache=toothache)</em></em>
###### General Inference Procedure
###### single variable general inference procedure
<font style="color: rgb(128,128,128);"><em><strong>P</strong>(X|<strong>e</strong>) = α <strong>P</strong>(X,<strong>e</strong>) = α <strong>Σ<sub>y</sub>P</strong>(X,<strong>e</strong>,<strong>y</strong>)</em></font>

<font style="color: rgb(128,128,128);">where:</font>

X - a single random variable
<strong>E</strong> - the list of evidence variables
<strong>e</strong> - the list of observed values
<strong>Y</strong> - the list of remaining unobserved variables
<font style="color: rgb(128,128,128);"><strong>y</strong> - the list of remaining unobserved values</font>

Given the full joint distribution to work with, the <font style="color: rgb(112,112,112);">single variable general inference procedure </font>can answer probabilistic queries for discrete variables
###### General Inference Procedure - Scaling Problem
It does not scale well, however: for a domain described by <font style="color: rgb(128,128,128);">n</font> Boolean variables, it requires:
- an input table of size O(2<sup>n</sup>)
- takes O(2<sup>n</sup>) time to process the table

The full joint distribution in tabular form is just not a practical tool for building reasoning systems. Instead, it should be viewed as the theoretical foundation on which more effective approaches may be built, just as truth tables formed a theoretical foundation for more practical algorithms like DPLL
# Independence
let us expand the <em>full joint distribution</em> in Figure 13.3 by adding a fourth random variable, <font style="color: rgb(128,128,128);">Weather</font>. The <em>full joint distribution</em> then becomes <font style="color: rgb(128,128,128);"><strong>P</strong>(Toothache, Catch, Cavity, Weather)</font>, which has 2×2×2×4=32 entries 

how does <font style="color: rgb(128,128,128);"><em>P(toothache, catch, cavity, cloudy) </em></font>and <font style="color: rgb(128,128,128);"><em>P(toothache, catch, cavity) </em></font>related?
- [[AI Chapter 13 - Quantifying Uncertainty|product rule]]: <font style="color: rgb(128,128,128);"><em>P(toothache, catch, cavity, cloudy) = P(cloudy | toothache, catch, cavity) P(toothache, catch, cavity)</em></font>
- it is safe to say that the weather does not influence the dental variables (this is called <strong>independence</strong>, <strong>marginal independence</strong>, and <strong>absolute independence</strong>)
- independence:<em> P(cloudy | toothache, catch, cavity) = P(cloudy)</em>
- product rule & independence: <font style="color: rgb(128,128,128);"><em>P(toothache, catch, cavity, cloudy) = P(cloudy) P(toothache, catch, cavity) </em></font>

In fact, we can write the general equation

<font style="color: rgb(128,128,128);"><em><strong>P</strong>(Toothache, Catch, Cavity, Weather) = <strong>P</strong>(Toothache, Catch, Cavity) <strong>P</strong>(Weather)</em></font>

Independence between propositions <font style="color: rgb(128,128,128);">a </font>and <font style="color: rgb(128,128,128);">b </font>can be written as

<font style="color: rgb(128,128,128);">P(a|b)=P(a) </font>or <font style="color: rgb(128,128,128);">P(b|a)=P(b) </font>or <font style="color: rgb(128,128,128);">P(a∧b)=P(a)P(b)</font>

Independence between variables <font style="color: rgb(128,128,128);">X </font>and <font style="color: rgb(128,128,128);">Y</font> can be written as

<font style="color: rgb(128,128,128);">P(X|Y)=P(X) </font>or <font style="color: rgb(128,128,128);">P(Y|X)=P(Y) </font>or <font style="color: rgb(128,128,128);">P(X,Y)=P(X)P(Y) </font>

<font style="color: rgb(128,128,128);"><em>![[AI Chapter 13 - Quantifying Uncertainty/examples of factoring a large joint distribution into smaller distributions.png|550x314]]</em></font>

If the complete set of variables can be divided into independent subsets, then the <em>full joint distribution</em> can be factored into separate joint distributions on those subsets.

For example, the full joint distribution on the outcome of <font style="color: rgb(128,128,128);">n </font>independent coin flips, <font style="color: rgb(128,128,128);">P(C<sub>1</sub>, . . . , C<sub>n</sub>)</font>, has 2<sup>n</sup>entries, but it can be represented as the product of <font style="color: rgb(128,128,128);">n </font>single-variable distributions <font style="color: rgb(128,128,128);">P(C<sub>i</sub>)</font>.
# Bayes' Rule and Its Use

the [[AI Chapter 13 - Quantifying Uncertainty|product rule]] can be written in 2 ways:
- P(a ∧ b) = P(a|b) P(b)
- P(a ∧ b) = P(b|a) P(a)

equating the two right-hand sides, we get (<strong>Bayes’ rule</strong>, <strong>Bayes’ law</strong>, or <strong>Bayes’ theorem</strong>):
- P(b|a) = P(a|b) P(b) / P(a)

general case of Bayes’ rule for multivalued variables written in <strong>P</strong> notation:
- <strong>P</strong>(Y|X) = <strong>P</strong>(X|Y) <strong>P</strong>(Y) / <strong>P</strong>(X)

a more general version conditionalized on some background evidence <strong>e:</strong>
- <strong>P</strong>(Y|X,<strong>e</strong>) = <strong>P</strong>(X|Y,<strong>e</strong>) <strong>P</strong>(Y|<strong>e</strong>) / <strong>P</strong>(X|<strong>e</strong>)

###### diagram of bayes' theorem

with: [[AI Chapter 13 - Quantifying Uncertainty|prior and posterior probabilities]] and [[AI Chapter 13 - Quantifying Uncertainty|normalization constant]]

![[AI Chapter 13 - Quantifying Uncertainty/bayes' theorem.jpg|400]]
### Example Use
 For example, a doctor knows that the disease meningitis causes the patient to have a stiff neck, say, 70% of the time. The doctor also knows some unconditional facts: the prior probability that a patient has meningitis is 1/50,000, and the prior probability that any patient has a stiff neck is 1%. Letting s be the proposition that the patient has a stiff neck and m be the proposition that the patient has meningitis, we have:
- P(s|m) = 0.7
- P(m) = 1/50000
- P(s) = 0.01
- P(m|s) = P(s|m)P(m) / P(s) = 0.7×1/50000 = 0.0014

That is, we expect less than 1 in 700 patients with a stiff neck to have meningitis
### Using Bayes’ Rule: Combining Evidence
###### What happens when we have two or more pieces of evidence?

for example, what can a dentist conclude if her nasty steel probe catches in the aching tooth of a patient?
<font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity | toothache ∧ catch)</em></font>

2 approaches in computing <em><font style="color: rgb(128,128,128);"><strong>P</strong>(Cavity | toothache ∧ catch):</font></em>
- using joint probabilities
- using conditional probabilities

<strong>using joint probabilities</strong>: If we know the full joint distribution (Figure 13.3), we can read off the answer:
<font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity | toothache ∧ catch</em></font><font style="color: rgb(128,128,128);"><em>)</em></font> = <font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity ∧ toothache ∧ catch)</em></font> / <em><font style="color: rgb(128,128,128);">P(</font><em><font style="color: rgb(128,128,128);">toothache ∧ catch)</font></em></em>
<font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity | toothache ∧ catch</em></font><font style="color: rgb(128,128,128);"><em>)</em></font> = <font style="color: rgb(128,128,128);">⟨</font><font style="color: rgb(128,128,128);"><em>P(cavity ∧ toothache ∧ catch), P(¬cavity ∧ toothache ∧ catch)⟩</em></font> / <em><font style="color: rgb(128,128,128);">P(</font><em><font style="color: rgb(128,128,128);">toothache ∧ catch)</font></em></em><font style="color: rgb(128,128,128);"><font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity | toothache ∧ catch</em></font><font style="color: rgb(128,128,128);"><em>) <font style="color: rgb(0,0,0);">=</font> </em></font>⟨0.108, 0.016</font><font style="color: rgb(128,128,128);">⟩ <font style="color: rgb(128,128,128);">α</font></font><font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity | toothache ∧ catch</em></font><font style="color: rgb(128,128,128);"><em>) </em></font>≈ <font style="color: rgb(128,128,128);">⟨</font><font style="color: rgb(128,128,128);">0.871, 0.129⟩</font>

We know, however, that this approach [[AI Chapter 13 - Quantifying Uncertainty|does not scale]] up to larger numbers of variables (e.g. <font style="color: rgb(128,128,128);">P(X | Y<sub>1</sub>, ..., Y<sub>n</sub>)</font>)

<strong>using conditional probabilities</strong>: We can try using Bayes’ rule to reformulate the problem to use conditional probabilities:
<font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cavity | toothache ∧ catch</em></font><font style="color: rgb(128,128,128);"><em>)</em></font> = <font style="color: rgb(128,128,128);">α <strong>P</strong>(toothache ∧ catch | Cavity) <strong>P</strong>(Cavity)</font>

For this reformulation to work, we need to know the conditional probabilities of the conjunction <font style="color: rgb(128,128,128);">toothache ∧ catch </font>for each value of <font style="color: rgb(128,128,128);">Cavity</font>

That might be feasible for just two evidence variables, but again it does not scale up. If there are n possible evidence variables (X rays, diet, oral hygiene, etc.), then there are 2<sup>n</sup>possible combinations of observed values for which we would need to know conditional probabilities

Since both of these approaches are not expandable, we have 2 other options:
1. approximate methods for evidence combination that, while giving incorrect answers, require fewer numbers to give any answer at all
2. find some additional assertions about the domain that will enable us to simplify the expressions

- 
	- <strong>conditional independence</strong>

###### Conditional Independence - Random Variables Becoming Independent Given Evidence
It would be nice if <font style="color: rgb(128,128,128);">Toothache </font>and <font style="color: rgb(128,128,128);">Catch </font>were independent, but they are not: if the probe catches in the tooth, then it is likely that the tooth has a cavity and that the cavity causes a toothache. These variables are independent, how- ever, given the presence or the absence of a cavity. Each is directly caused by the cavity, but neither has a direct effect on the other: toothache depends on the state of the nerves in the tooth, whereas the probe’s accuracy depends on the dentist’s skill, to which the toothache is irrelevant. Mathematically, this property is written as

<em><font style="color: rgb(128,128,128);">P(toothache ∧ catch | Cavity) = P(toothache | Cavity) P(catch | Cavity)</font></em>

![[AI Chapter 13 - Quantifying Uncertainty/random variables becoming independent given evidence.jpg|270]]

general definition of conditional independence of two variables X and Y , given a third variable Z, is
<strong>P</strong><font style="color: rgb(128,128,128);">(</font><font style="color: rgb(128,128,128);">X,Y</font><font style="color: rgb(128,128,128);">|</font><font style="color: rgb(128,128,128);">Z</font><font style="color: rgb(128,128,128);">) = </font><strong>P</strong><font style="color: rgb(128,128,128);">(</font><font style="color: rgb(128,128,128);">X</font><font style="color: rgb(128,128,128);">|</font><font style="color: rgb(128,128,128);">Z</font><font style="color: rgb(128,128,128);">) </font><strong>P</strong><font style="color: rgb(128,128,128);">(</font><font style="color: rgb(128,128,128);">Y</font><font style="color: rgb(128,128,128);">|</font><font style="color: rgb(128,128,128);">Z</font><font style="color: rgb(128,128,128);">)</font>

as with [[AI Chapter 13 - Quantifying Uncertainty|absolute independence]] the equivalent forms
- <font style="color: rgb(128,128,128);"><strong>P</strong>(X|Y,Z)=<strong>P</strong>(X|Z)</font> - knowing <font style="color: rgb(128,128,128);">Y</font> when given <font style="color: rgb(128,128,128);">Z</font> does not change to probability of <font style="color: rgb(128,128,128);">X</font>
- <font style="color: rgb(128,128,128);"><strong>P</strong>(Y|X,Z)=<strong>P</strong>(Y|Z) <font style="color: rgb(0,0,0);">- knowing <font style="color: rgb(128,128,128);">X</font> when given <font style="color: rgb(128,128,128);">Z</font> does not change to probability of <font style="color: rgb(128,128,128);">Y</font></font></font>

for n symptoms that are all conditionally independent given Cavity, the size of the representation grows as O(n) instead of O(2<sup>n</sup>). That means that <strong>conditional independence</strong> assertions can <strong>allow probabilistic systems to scale up</strong>; moreover, they are <strong>much more commonly available than absolute independence assertions </strong>
###### Naive Bayes Model or Bayesian classifier or Idiot Bayes Model

assumes the conditional independence of all effect variables, given a single cause variable, and grows linearly with the number of effects - the full joint distribution can be written as:

<font style="color: rgb(128,128,128);"><strong>P</strong>(Cause, Effect<sub>1</sub>, ..., Effect<sub>n</sub>) = <strong>P</strong>(Cause) ∏<sub>i</sub><sup>n</sup><strong>P</strong>(Effect<sub>i</sub>| Cause)</font>
