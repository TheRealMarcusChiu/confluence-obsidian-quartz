---
title: "Inverse Problem & Bayes' Theorem"
created: 2021-09-13T05:28:34.009-05:00
modified: 2021-09-13T05:28:34.009-05:00
parent: "[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)]]"
children: []
---
- <strong>Inverse Problem </strong>- inferring the causes of a particular effect
- <strong>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Theorem]]</strong> - can be used to address the inverse problem

# Forward & Inverse Problems
- <strong>forward problem ([[Logical Reasoning (Deductive／Deduction - Inductive／Induction - Abductive／Abduction - Analogical)|deduction]])</strong> is predicting the effects of a particular cause. A forward problem is often well-posed
- <strong>inverse problem ([[Logical Reasoning (Deductive／Deduction - Inductive／Induction - Abductive／Abduction - Analogical)|abduction]])</strong> is finding the causes of a particular effect. Most of the time it’s ill-posed

![[Inverse Problem & Bayes' Theorem/forward-inverse-problem.png]]
# Solving Inverse Problems Using Bayes’ Theorem

When you have many possible hypotheses for the causes of a particular effect, the problem of finding the correct one becomes probabilistic in nature. This makes Bayes’ theorem a perfect tool for solving an inverse problem. What you have to do is collect evidence and apply Bayes’ theorem to update the probability of each hypothesis:

![[Inverse Problem & Bayes' Theorem/bayes-theorem-hypothesis-2.png]]

A job whose description is almost synonymous with “solving inverse problems” is that of a detective. The job requires investigating cases where there is an observed effect (usually a crime) of an unknown origin. To solve a case means to find its <em>most likely</em> origin. So, in this section, I am going to show how you can use Bayes’ theorem for solving an inverse problem with a toy detective example.
## Example

Imagine that you’re a detective and you’re investigating a case of a gas station robbery. After interviewing a few witnesses, you’re certain about the following:
1. The robber was wearing a brown t-shirt
2. He had a goatee
3. He escaped on a motorcycle

Lucky for you, there are only 3 suspects:
1. Jon
2. Bob
3. Tim

So, you build a hypothesis for each of them:
- Hypothesis-1: Jon robbed the bank
- Hypothesis-2: Bob robbed the bank
- Hypothesis-3: Tim robbed the bank

For convenience, I’m going to label the three hypotheses simply “Jon”, “Bob”, and “Tim”.
### Example probabilities

Because you initially don’t know anything about the suspects, you assign them equal prior probabilities:
- P(Jon) = 1/3
- P(Bob) = 1/3
- P(Tim) = 1/3

Your goal is to use Bayes’ theorem to update those priors with the 3 pieces of evidence you collected from the witness interviews. In order to get the posterior probabilities, you need to know how the 3 hypotheses predict each piece of evidence. In other words, you need the values of the conditional probabilities:
- P(Goatee |  Jon)
- P(Motorcycle |Tim)
- P(Brown t-shirt | Tim)
- etc

Normally, estimating a conditional probability like P(Goatee |  Jon) is difficult. You would need to take into account information like:
- whether Jon has a goatee now
- if not, analyze his face to see if there are any  recent shaving marks (in case he shaved after the day of the robbery to cover himself)

But, because this is a toy example, I can assign any values to those probabilities I want:

![[Inverse Problem & Bayes' Theorem/conditional-probabilities-suspects.png]]

If the posterior probability term represents the solution of an inverse problem, the likelihood term represents the solution of a forward problem. It is the probability of observing the effect you are trying to explain if the hypothesis whose posterior probability you’re calculating is true. This is an important point because it shows the relationship between forward and inverse problems.

Alright, now all the information necessary for calculating the posterior probabilities is available. If you have any difficulties following the next steps, check my post [The Anatomy Of Bayes’ Theorem](https://www.probabilisticworld.com/anatomy-bayes-theorem/) where I explained the theory and the intuition of Bayesian calculations.
## Calculating the Posterior Probabilities

So, initially the sample space is uniform because each hypothesis has the same probability:

![[Inverse Problem & Bayes' Theorem/sample-space-suspects-prior.png]]

To calculate a posterior probability like P(Bob | Goatee), you need the values of the prior probability, likelihood, and evidence terms. The first two are already available and the evidence term is the sum of the prior probability\*likelihood pairs for all hypotheses:
- P(Goatee) = P(Goatee | Jon) \* P(Jon) + P(Goatee | Bob) \* P(Bob) + P(Goatee | Tim) \* P(Tim)

Here’s the actual calculation of P(Bob | Goatee):

![[Inverse Problem & Bayes' Theorem/posterior-probability-example.png]]

Applying this to the remaining two hypotheses gives you the following posterior probabilities:
- P(Jon | Goatee) = 0.17
- P(Bob | Goatee) = 0.74
- P(Tim | Goatee) = 0.09

And the new sample space is:

![[Inverse Problem & Bayes' Theorem/sample-space-suspects-posterior.png]]

A big difference compared to the prior sample space! The reason the odds turned so much in favor of Bob is that the likelihood term P(Goatee | Bob) was much larger compared to that of the other suspects. Intuitively, the fact that there was a high probability that Bob had a goatee during the robbery increases the chance that Bob was the robber, given that you know the robber had a goatee.
### Re-Updating the New Priors

Here’s the cool part: these posterior probabilities become the new prior probabilities which the next piece of evidence can update. For example, here’s how you calculate P(Bob | Motorcycle):

![[Inverse Problem & Bayes' Theorem/posterior-probability-example-2.png]]

Here are the values of the new posterior probabilities:
- P(Jon | Motorcycle) = 0.16
- P(Bob | Motorcycle) = 0.79
- P(Tim | Motorcycle) = 0.05

Not a huge shift this time, although P(Bob) still increased at the expense of the other two hypotheses. Notice the prior probabilities P(Jon), P(Bob), and P(Tim) used in the calculation were no longer equal to 1/3, but to their respective posterior probabilities calculated in the previous step.

Applying the same procedure to the last piece of evidence yields the posterior probabilities:
- P(Jon | Brown t-shirt) = 0.19
- P(Bob | Brown t-shirt) = 0.76
- P(Tim | Brown t-shirt) = 0.05

And the final sample space looks like this:

![[Inverse Problem & Bayes' Theorem/sample-space-suspects-posterior-final.png]]

The odds slightly shifted back to Jon, but Bob is still the big “favorite” for being the robber. This is a big increase from to the initial probability of 1/3 (while the other two suspects now seem unlikely robber candidates).
# Summary

Every time you attempt to infer what caused an observed effect, you’re solving an inverse problem. You encounter inverse problems in physics, chemistry, geology, neuroscience, economics, and probably in every other scientific field in one form or another.

It’s difficult to solve inverse problems because they are often ill-posed and there are many (often infinitely many) possible causes of the very same effect.

Bayes’ theorem is a powerful method for addressing inverse problems by using evidence to update the probability of each possible cause.

Bayesian methods don’t automatically eliminate the difficulties of solving inverse problems. However, even though the solutions are probabilistic and not exact, it allows you to get arbitrarily close to an exact solution. You just have to continue collecting evidence and updating the probabilities of rival hypotheses.
