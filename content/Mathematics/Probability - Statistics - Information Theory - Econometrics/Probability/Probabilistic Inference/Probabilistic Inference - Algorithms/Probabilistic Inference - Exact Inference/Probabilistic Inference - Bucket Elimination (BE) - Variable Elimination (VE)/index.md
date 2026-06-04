---
title: "Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)"
created: 2021-09-13T05:28:21.195-05:00
modified: 2021-12-11T05:13:13.798-06:00
parent: "[[Probabilistic Inference - Exact Inference]]"
children:
  - "[[BE／VE Algorithm - Complexity (Non-MAP vs MAP)]]"
  - "[[BE／VE Algorithm - Operator Types]]"
  - "[[BE／VE Algorithm - Solving Belief-Updating Query]]"
  - "[[BE／VE Algorithm - Solving Conditional Posterior Query]]"
  - "[[BE／VE Algorithm - Solving MAP Query]]"
  - "[[BE／VE Algorithm - Solving MPE Query]]"
  - "[[BE／VE Algorithm - Solving Prior Query]]"
---
````excerpt
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]

<strong>[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Bucket Elimination (BE) Algorithm - Variable Elimination (VE) Algorithm]]</strong>
- a type of [[Probabilistic Inference - Exact Inference|exact probabilistic inference algorithm]]
- is an extension of the [[Probabilistic Inference - Inference by Enumeration Algorithm|Inference by Enumeration algorithm]] that pushes the summation operators into the factor product and eliminates variable summation operators by generating new factors (which makes it a type of [[Dynamic Programming (DP)|dynamic programming]])
- induces a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|cluster tree]] on which [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] is performed, thus it is a type of specialized [[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm|belief propagation algorithm]] over trees
- each run of BE/VE only solves one [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic query]] such as 𝐏(𝑄|𝐄=𝐞) at a time. Extensions of BE/VE include:
	- [[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm|Bucket Tree Elimination (BTE) Algorithm]] - used to solve 𝐏(𝑄|𝐄=𝐞) for all 𝑄∊{all variables}

# BE/VE Algorithm - Solving Probabilistic Queries

> [!expand]- Click here to expand...
> ###### BE/VE Algorithm - Operator Types
>
> > [!expand]- Click here to expand...
> > ![[BE／VE Algorithm - Operator Types#^excerpt]]
> ###### <strong>[[BE／VE Algorithm - Solving Belief-Updating Query|BE/VE Solving Prior Query - Probability of Evidence Query]]: </strong>𝐏(𝐐=𝐪) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝐐=𝐪, <strong>𝐇</strong>=<strong>𝐡</strong>) \]
>
> > [!expand]- Click here to expand...
> > answering [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic queries]] often involves the summation/marginalization of [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probabilities]]
> >
> > for example, given a [[PGM - Gibbs Distribution|Gibbs Distribution]] of a [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability]] <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵,𝐶)</font>, the computation of a probabilistic query <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵</font><font style="color: rgb(128,128,128);">)</font> is as follows
> > - <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵) = 𝛴<sub>𝑐∊𝐶</sub> 𝐏(𝐴,𝐵,𝐶)</font><font style="color: rgb(128,128,128);"> <font style="color: rgb(51,51,51);">\# because [[Marginal Probability Distribution|marginal probability rule]]</font></font>
> >
> > however, storing a full joint probability in table-formis not practical because it takes 𝑂(𝑘<sup>𝑛</sup>) space, where:
> > - 𝑛 is the number of variable
> > - 𝑘 is the max cardinality of each variable
> >
> > to solve this problem, we often encode the full joint probability into a [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical model]]. They require much less space but they still retain the ability to represent the full joint probability.
> >
> > When using a probabilistic graphical model the full joint probability is FACTORIZED
> >
> > how it is FACTORIZED depends on the type of model used:
> > - for [[Bayesian Networks (BN)|Bayesian Networks]], a [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|full joint probability is FACTORIZED into a product of conditional probabilities]]
> > 	- 𝑃(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝛱<sub><sub>𝑋<sub>𝑖</sub>∈𝐗</sub></sub> \[ 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)) \]
> > - for [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks]], a [[Markov Networks／Nets - Markov Random Fields (MRF)|full joint probability is FACTORIZED into a product of potential functions]]
> > 	- 𝑃(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝛱<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ (1/𝘡) \* 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]
> >
> > Let's say the full joint probability <font style="color: rgb(128,128,128);">𝐏(</font><font style="color: rgb(128,128,128);">𝐴,𝐵,𝐶</font><font style="color: rgb(128,128,128);">)</font> is FACTORIZED as so
> > - <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵,𝐶) = 𝐹<sub>1</sub>(𝐴,𝐵)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵,𝐶)</font>
> >
> > therefore the query becomes
> > - <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵) = 𝛴<sub>𝑐∊𝐶</sub> 𝐹<sub>1</sub>(𝐴,𝐵)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵,𝐶)</font>
> > - <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵) = 𝐹<sub>1</sub>(𝐴,𝐵) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵,𝐶)</font>
> >
> > At this point, everything we have done so far is the same as [[Probabilistic Inference - Inference by Enumeration Algorithm|inference by enumeration]]. Inference by Enumeration takes the resulting formula and enumerates through each summation one-by-one. In Variable Elimination we exploit the fact that many of these computations are repetitions and instead of computing them from scratch every time we systematically order it these computations (similar to [[Dynamic Programming (DP)|Dynamic Programming]]). Variable Elimination have the following steps below:
> > 1. move all irrelevant terms outside of the innermost summation <font style="color: rgb(128,128,128);">𝛴</font><font style="color: rgb(128,128,128);"><sub>𝑖∊𝐼</sub></font> (this includes the new terms created in step 2/3)
> > 2. compute the innermost summation <font style="color: rgb(128,128,128);">𝛴</font><font style="color: rgb(128,128,128);"><sub>𝑖∊𝐼</sub></font>and replace it with the resulting new factor <font style="color: rgb(128,128,128);">𝑚</font><font style="color: rgb(128,128,128);"><sub>𝑖</sub></font><font style="color: rgb(128,128,128);">(all terms within summation minus term 𝑖</font><font style="color: rgb(128,128,128);">)<font style="color: rgb(51,51,51);"> the computation is a 2 step process:</font></font>
> > 	1. combination step - compute product 𝛱 of all factors within innermost summation (see example in [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]])
> > 	2. marginalization step - compute summation <font style="color: rgb(0,51,102);">𝛴 </font>of the resulting product (see example in [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]) this is the new factor
> > 3. repeat steps 1 to 2 until all summations <font style="color: rgb(128,128,128);">𝛴</font><font style="color: rgb(128,128,128);"><sub>𝑖∊𝐼</sub></font>are replaced
> >
> > for example,
> > - <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵) = 𝐹<sub>1</sub>(𝐴,𝐵) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵,𝐶)</font>
> > - <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵) = 𝐹<sub>1</sub>(𝐴,𝐵) 𝑚<sub>𝑐</sub>(𝐴,𝐵)</font>
> >
> > and that's basically it!
> >
> > NOTE: the elimination algorithm has no benefit if the innermost term includes all variables, that is, 𝑋<sub>𝑖</sub> is dependent on all the other variables (e.g. 𝐏(𝑋<sub>𝑖</sub>|𝑎𝑙𝑙-𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠-𝑚𝑖𝑛𝑢𝑠-𝑋<sub>𝑖</sub>)). However, in most problems, the number of variables in the innermost term is less than the total number of variables
> ###### <strong>[[BE／VE Algorithm - Solving Belief-Updating Query|BE/VE Solving Belief Updating Query]]: 𝐏(𝑄𝑖=𝑞𝑖|𝐄=𝐞) = \[𝛴<sub>𝐡∊𝐇</sub> 𝐏(𝑄𝑖=𝑞𝑖, 𝐇=𝐡, 𝐄=𝐞)\] / 𝐏(𝐄=𝐞)</strong>
>
> > [!expand]- Click here to expand...
> > What if we want to compute a conditional probabilistic query <font style="color: rgb(128,128,128);">𝐏(𝐴|𝐵=𝑏</font><font style="color: rgb(128,128,128);">)</font>, given a [[PGM - Gibbs Distribution|Gibbs Distribution]] of the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability]] <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵,𝐶)</font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">?</font></font>
> >
> > steps are similar to computing Prior Probabilistic Query except there is an additional step that instantiates the given evidence variables as shown below in step 5
> > 1. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) = </font><font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵)</font> / <font style="color: rgb(0,128,0);">𝐏(𝐵)</font> \# because [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]</font>
> > 2. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) =</font> <font style="color: rgb(128,0,0);">\[ 𝛴<sub>𝑐∊𝐶</sub>𝐏(𝐴,𝐵=𝑏,𝐶) \]</font> / <font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(128,0,0);">𝛴<sub>𝑐∊𝐶</sub>𝐏(𝐴,𝐵=𝑏,𝐶)</font><font style="color: rgb(0,128,0);"> \]</font> \# because [[Marginal Probability Distribution|marginal probability rule]]</font>
> > 3. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) =</font> <font style="color: rgb(128,0,0);">\[ 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font> / <font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(128,0,0);">𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶)</font><font style="color: rgb(0,128,0);"> \]</font> \# factorize full joint probability</font>
> > 4. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴,𝐵=𝑏) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴,𝐵=𝑏) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶)</font><font style="color: rgb(0,128,0);"> \]</font></font><font style="color: rgb(128,128,128);">\# move all irrelevant terms as far left</font></font></font>
> > 5. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶) \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶)</font><font style="color: rgb(0,128,0);"> \]</font> <font style="color: rgb(255,0,0);">\# instantiate given evidences</font></font></font></font></font></font></font>
> > 6. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(255,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝑚<sub>𝑐</sub>(𝐴) \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝛴</font><sub><font style="color: rgb(0,128,0);">𝑎∊𝐴</font></sub><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝑚<sub>𝑐</sub>(𝐴)</font> <font style="color: rgb(0,128,0);">\]</font> \# compute new term 𝑚<sub>𝑐</sub> for the innermost summation</font></font></font></font></font></font></font></font></font></font>
> > 7. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(255,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝑚<sub>𝑐</sub>(𝐴) \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝑚<sub>𝑎</sub>() \]</font> \# compute new term 𝑚<sub>𝑎</sub> for the innermost summation</font></font></font></font></font></font></font></font></font></font></font></font></font></font>
> ###### <strong><strong>[[BE／VE Algorithm - Solving Conditional Posterior Query|BE/VE Solving Conditional Posterior Query]]: 𝐏(𝐐=𝐪|𝐄=𝐞) = \[𝛴<sub>𝐡∊𝐇</sub> 𝐏(𝐐=𝐪, 𝐇=𝐡, 𝐄=𝐞)\] / 𝐏(𝐄=𝐞)</strong></strong>
>
> > [!expand]- Click here to expand...
> > What if we want to compute a conditional probabilistic query <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐶|𝐵=𝑏</font><font style="color: rgb(128,128,128);">)</font>, given a [[PGM - Gibbs Distribution|Gibbs Distribution]] of the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability]] <font style="color: rgb(128,128,128);">𝐏(𝐴,𝐵,𝐶)</font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">?</font></font>
> > 1. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) = </font><font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵,𝐶)</font> / <font style="color: rgb(0,128,0);">𝐏(𝐵)</font> \# because [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]</font>
> > 2. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) =</font> <font style="color: rgb(128,0,0);">\[𝐏(𝐴,𝐵=𝑏,𝐶) \]</font> / <font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(0,128,0);">𝛴<sub>𝑐∊𝐶</sub>𝐏(𝐴,𝐵=𝑏,𝐶)</font><font style="color: rgb(0,128,0);"> \]</font> \# because [[Marginal Probability Distribution|marginal probability rule]]</font>
> > 3. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) =</font> <font style="color: rgb(128,0,0);">\[𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font> / <font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(0,128,0);">𝛴<sub>𝑐∊𝐶</sub><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶)</font></font><font style="color: rgb(0,128,0);"> \]</font> \# factorize full joint probability</font>
> > 4. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴,𝐵=𝑏) <font style="color: rgb(0,128,0);">𝛴<sub>𝑐∊𝐶</sub></font>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶)</font><font style="color: rgb(0,128,0);"> \]</font></font><font style="color: rgb(128,128,128);">\# move all irrelevant terms as far left</font></font></font>
> > 5. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶) \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝛴<sub>𝑎∊𝐴</sub></font><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) <font style="color: rgb(0,128,0);">𝛴<sub>𝑐∊𝐶</sub></font>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶)</font><font style="color: rgb(0,128,0);"> \]</font> <font style="color: rgb(255,0,0);">\# instantiate given evidences</font></font></font></font></font></font></font>
> > 6. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(255,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴)<font style="color: rgb(128,0,0);">𝐹</font><sub>2</sub><font style="color: rgb(128,0,0);">(𝐴,𝐶)𝐹</font><sub>3</sub><font style="color: rgb(128,0,0);">(𝐶)</font>\]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝛴</font><sub><font style="color: rgb(0,128,0);">𝑎∊𝐴</font></sub><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝑚<sub>𝑐</sub>(𝐴)</font> <font style="color: rgb(0,128,0);">\]</font> \# compute new term 𝑚<sub>𝑐</sub> for the innermost summation</font></font></font></font></font></font></font></font></font></font>
> > 7. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(255,0,0);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐏(𝐴,𝐶|𝐵=𝑏) =</font> </font></font><font style="color: rgb(128,0,0);">\[ </font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴)<font style="color: rgb(128,0,0);">𝐹</font><sub>2</sub><font style="color: rgb(128,0,0);">(𝐴,𝐶)𝐹</font><sub>3</sub><font style="color: rgb(128,0,0);">(𝐶)</font> \]</font> / </font><font style="color: rgb(128,128,128);"><font style="color: rgb(0,128,0);">\[ 𝑚<sub>𝑎</sub>() \]</font> \# compute new term 𝑚<sub>𝑎</sub> for the innermost summation</font></font></font></font></font></font></font></font></font></font></font></font></font></font>
> > 8. etc
> ###### [[BE／VE Algorithm - Solving MPE Query|BE/VE Solving MPE Query]]: 𝑀𝑃𝐸(𝐐=?|𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub> \[ 𝐏(𝐐=𝐪, 𝐄=𝐞) \]
>
> > [!expand]- Click here to expand...
> > <font style="color: rgb(0,51,102);">MPE seeks an assignment to ALL variables that has the maximal probability given evidence</font>
> >
> > What if we want to compute [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|𝑀𝑃𝐸]]<font style="color: rgb(128,128,128);">(𝑎𝑙𝑙-𝑛𝑜𝑛-𝑒𝑣𝑖𝑑𝑒𝑛𝑐𝑒-𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠|𝐵=𝑏)<font style="color: rgb(0,0,0);">, given a </font>[[PGM - Gibbs Distribution|Gibbs Distribution]]<font style="color: rgb(0,0,0);"> of the </font>[[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability]]𝐏(𝐴,𝐵,𝐶)<font style="color: rgb(51,51,51);">?</font></font>
> >
> > <font style="color: rgb(255,0,0);">steps are similar as computing <strong>Belief Updating Query</strong>, except instead of</font> [[BE／VE Algorithm - Operator Types|sum-marginalize operators (𝛴)]] <font style="color: rgb(255,0,0);">we use</font> [[BE／VE Algorithm - Operator Types|sum-marginalize operator (𝑚𝑎𝑥)]]
> >
> > if a function/factor is a constant, we have 2 options:
> > - when computing the MAP value/probability: we place it directly in the first bucket
> > - when computing just the MAP tuple: we can remove it
> >
> > ###### Example
> > 1. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub>𝑚𝑎𝑥<sub>𝐶</sub>𝐏(𝐴,𝐶|𝐵=𝑏)
> > 2. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub>𝑚𝑎𝑥<sub>𝐶</sub><font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵=𝑏,<font style="color: rgb(128,0,0);">𝐶</font>)</font><font style="color: rgb(128,128,128);"> / </font><font style="color: rgb(0,128,0);">𝐏(𝐵=𝑏)</font><font style="color: rgb(128,128,128);"> \# because </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]
> > 3. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> 𝑚𝑎𝑥<sub>𝐶</sub><font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵=𝑏<font style="color: rgb(128,0,0);">,</font><font style="color: rgb(128,0,0);">𝐶</font>)</font><font style="color: rgb(128,128,128);">\# because 𝐏(𝐵=𝑏) is constant</font>
> > 4. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> 𝑚𝑎𝑥<sub>𝐶</sub><font style="color: rgb(128,0,0);">\[ 𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font><font style="color: rgb(128,128,128);"> \# sinc</font><font style="color: rgb(128,128,128);">e 𝐏(𝐴,𝐵=𝑏,𝐶) is a Gibbs Distirbution,</font><font style="color: rgb(128,128,128);"> factorize full joint probability</font>
> > 5. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> 𝑚𝑎𝑥<sub>𝐶</sub><font style="color: rgb(128,0,0);">\[ </font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶) \]</font></font><font style="color: rgb(128,128,128);"> <font style="color: rgb(255,0,0);">\# instantiate given evidences</font></font></font></font>
> > 6. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub><font style="color: rgb(128,0,0);">\[ </font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) <font style="color: rgb(51,51,51);">𝑚𝑎𝑥<sub>𝐶</sub></font> \[ 𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶) \] \]</font></font><font style="color: rgb(128,128,128);"><font style="color: rgb(255,0,0);"> <font style="color: rgb(128,128,128);">\# move all irrelevant terms as far left</font></font></font></font></font>
> > 7. 𝑀𝑃𝐸(𝐴,𝐶|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub><font style="color: rgb(128,0,0);">\[ </font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) <font style="color: rgb(0,0,255);">𝑚<sub>𝑐</sub>(𝐴)</font> \]</font></font><font style="color: rgb(128,128,128);"> \# compute new term 𝑚<sub>𝑐</sub> for the innermost summation</font></font></font>
> > 8. etc
> ###### [[BE／VE Algorithm - Solving MAP Query|BE/VE Solving MAP Query]]: 𝑀𝐴𝑃(𝐐=?|𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub> \[ 𝛴<sub>𝐡∊𝐇</sub> \[ 𝐏(𝐐=𝐪, 𝐇=𝐡, 𝐄=𝐞) \] \]
>
> > [!expand]- Click here to expand...
> > <font style="color: rgb(0,51,102);">MAP seeks an assignment to a SUBSET of variables that has the maximal probability given evidence</font>
> >
> > What if we want to compute [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|𝑀𝐴𝑃]]<font style="color: rgb(128,128,128);">(𝐴|𝐵=𝑏)<font style="color: rgb(0,0,0);">, given a </font>[[PGM - Gibbs Distribution|Gibbs Distribution]]<font style="color: rgb(0,0,0);"> of the </font>[[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability]]𝐏(𝐴,𝐵,𝐶)<font style="color: rgb(51,51,51);">?</font></font>
> >
> > <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(255,0,0);">is a combination of [[BE／VE Algorithm - Solving Conditional Posterior Query|BE/VE Algorithm - Solving Conditional Posterior Query]] and [[BE／VE Algorithm - Solving MPE Query|BE/VE Algorithm - Solving MPE Query]]:</font></font></font>
> > - <font style="color: rgb(255,0,0);">[[BE／VE Algorithm - Operator Types|sum-marginalize operators (𝛴)]] eliminates non-MAP variables</font>
> > - <font style="color: rgb(255,0,0);">[[BE／VE Algorithm - Operator Types|max-marginalize operators (𝑚𝑎𝑥)]] eliminates MAP variables</font>
> >
> > if a function/factor is a constant, we have 2 options:
> > - when computing the MAP value/probability: we place it directly in the first bucket
> > - when computing just the MAP tuple: we can remove it
> >
> > ###### Example
> > 1. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub>𝐏(𝐴|𝐵=𝑏)
> > 2. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub><font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵=𝑏)</font><font style="color: rgb(128,128,128);"> / </font><font style="color: rgb(0,128,0);">𝐏(𝐵=𝑏)</font><font style="color: rgb(128,128,128);"> \# because </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]
> > 3. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub><font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵=𝑏)</font><font style="color: rgb(128,128,128);">\# because 𝐏(𝐵=𝑏) is constant</font>
> > 4. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> <font style="color: rgb(128,0,0);">\[ 𝛴<sub>𝑐∊𝐶</sub>𝐏(𝐴,𝐵=𝑏,𝐶) \]</font><font style="color: rgb(128,128,128);"> \# because</font>[[Marginal Probability Distribution|marginal probability rule]]
> > 5. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> <font style="color: rgb(128,0,0);">\[ 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>1</sub>(𝐴,𝐵=𝑏)𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font><font style="color: rgb(128,128,128);"> \# sinc</font><font style="color: rgb(128,128,128);">e 𝐏(𝐴,𝐵=𝑏,𝐶) is a Gibbs Distirbution,</font><font style="color: rgb(128,128,128);"> factorize full joint probability</font>
> > 6. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> <font style="color: rgb(128,0,0);">\[ </font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴,𝐵=𝑏) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐵=𝑏,𝐶) \]</font></font><font style="color: rgb(128,128,128);">\# move all irrelevant terms as far left</font></font></font>
> > 7. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> <font style="color: rgb(128,0,0);">\[ </font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝛴<sub>𝑐∊𝐶</sub>𝐹<sub>2</sub>(𝐴,𝐶)𝐹<sub>3</sub>(𝐶) \]</font></font><font style="color: rgb(128,128,128);"> <font style="color: rgb(255,0,0);">\# instantiate given evidences</font></font></font></font>
> > 8. 𝑀𝐴𝑃(𝐴|𝐵=𝑏) = 𝑚𝑎𝑥<sub>𝐴</sub> <font style="color: rgb(128,0,0);">\[ </font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐹<sub>1</sub>(𝐴) 𝑚<sub>𝑐</sub>(𝐴) \]</font></font><font style="color: rgb(128,128,128);"> \# compute new term 𝑚<sub>𝑐</sub> for the innermost summation</font></font></font>
````
^excerpt

# BE/VE Algorithm - Choosing Elimination Orderings

> [!expand]- Click here to expand...
> The algorithm with variable elimination order 𝐈 has exponential time complexity based on:
> - [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]] of the [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition / clique tree]] = (size of the largest clique) - 1
>
> A “good” variable elimination order will make the treewidth small. Its definition is one less than the smallest achievable value of the cardinality of the largest elimination clique, ranging over all possible elimination ordering. However, finding such k as well as the “best” elimination ordering is NP-hard. As such there are heuristics one may follow to better optimize performance by order:
>
> see: [[Pseudo Tree - Minimal／Minimum (Height／Depth - Induced-Width - Tree-Width)|Pseudo Tree - Minimal/Minimum (Height/Depth - Induced-Width - Tree-Width)]]
# BE/VE Algorithm - Complexity

> [!expand]- Click here to expand...
> see: [[BE／VE Algorithm - Complexity (Non-MAP vs MAP)|BE/VE Algorithm - Complexity (Non-MAP vs MAP)]]
# BE/VE Algorithm - In Specific Probabilistic Graphical Models
- [[BN - Exact Inference - Inference By Enumeration & Variable Elimination|Bayesian Networks]]
- [[MN／MRF - Exact Inference - Inference by Enumeration & Variable Elimination|Markov Networks - Markov Random Fields]]
- [[HMM - Inference By Enumeration & Variable Elimination|Hidden Markov Models]]

# BE/VE Algorithm - Variants
- [[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm|Bucket/Clique/Junction/Cluster Tree Elimination/Propagation - Collect & Distribute Algorithm]]
- [[Probabilistic Inference - Mini-Cluster／Bucket Elimination|Mini-Cluster/Bucket Elimination]] - computes an upper-bound estimation in a much faster way by bounding the size of buckets

# Other Resources
- [https://ermongroup.github.io/cs228-notes/inference/ve/](https://ermongroup.github.io/cs228-notes/inference/ve/)
