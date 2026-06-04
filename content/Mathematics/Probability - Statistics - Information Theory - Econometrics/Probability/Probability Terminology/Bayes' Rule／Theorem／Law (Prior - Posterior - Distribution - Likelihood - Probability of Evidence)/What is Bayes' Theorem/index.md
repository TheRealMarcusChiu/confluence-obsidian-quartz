---
title: "What is Bayes' Theorem"
created: 2021-09-13T05:28:36.391-05:00
modified: 2021-09-13T05:28:36.391-05:00
parent: "[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)]]"
children: []
---
original article: [https://www.probabilisticworld.com/what-is-bayes-theorem/](https://www.probabilisticworld.com/what-is-bayes-theorem/)
# Events & Probabilities
- <strong>events</strong> - one way to think about an event is an <em>outcome</em>, or a set of outcomes, of some general <em>process</em>
- <strong>probabilities</strong> - the probability of an event is a number that, intuitively speaking, represents the <em>uncertainty</em> associated with the event’s occurrence

![[What is Bayes' Theorem/probability-rain.png]]
# Conditional Probabilities
- <strong>conditional probabilities</strong> expresses the probability that Event-1 will occur when you (assume or know) that Event-2 has already occurred

![[What is Bayes' Theorem/conditional-probability-rain.png]]
# Bayes’ Theorem Connects Probabilities & Conditional Probabilities

The British statistician [Thomas Bayes](https://en.wikipedia.org/wiki/Thomas_Bayes) first discovered Bayes’ theorem and that’s why it’s named after him. So, let’s finally look at the mathematical statement it makes:

![[What is Bayes' Theorem/bayes-theorem-with-description.png]]

The equation consists of four parts and the traditional terminology used for referring to them is:
- <strong>P(Event-1)</strong> - Prior probability
- <strong>P(Event-2)</strong> - Evidence
- <strong>P(Event-2 | Event-1)</strong> - Likelihood
- <strong>P(Event-1 | Event-2)</strong> - Posterior probability

In words, Bayes’ Theorem asserts that:
> the <em>posterior probability</em> of Event-1, given Event-2, can be calculated by multiplying the <em>likelihood</em> and the <em>prior probability</em> terms and dividing their product by the <em>evidence</em> term.
## Prior Probability

The prior probability of an event (often simply called the prior) is its probability calculated from some prior information about the event.

The word prior can be somewhat misleading. It’s not immediately clear what the probability is supposed to be <em>prior to.</em> A simple way to to describe it would be as the probability of the event calculated from all the information related to the event that is <em>already known</em>. In the weather example, the prior probability of rain was given as P(“Rain”) = 0.6. This could come (for instance) from the prior knowledge that 60% of the days on the same date have been rainy for the past 100 years.

Here is another way to look at it. A prior probability is always prior with respect to some piece of information that you <em>left out</em> from the calculations. In this example, the information left out when calculating P(“Rain”) = 0.6 is basically<em> everything</em>, except for the past rain frequency for the current date.
## Evidence

You started with the prior P(“Rain”) = 0.6 but now you have new information you can use for more accurately (re-)estimating the same probability. The evidence term in Bayes’ theorem refers to the <em>overall probability</em> of this new piece of information.

In the current example, the information used for updating P(“Rain”) was the current weather conditions, so the evidence would be P(“Windy & Cloudy”). That is, the probability of having windy and cloudy weather, <em>regardless of</em> whether the day turns out to be rainy. You can think about it as the <em>average</em> probability of one event across all possibilities for the other events.

Notice that, outside Bayesian tradition, the word “evidence” is most commonly used to refer to the piece of information itself, and not to its probability. This is a good reminder to not be too literal about these terms.
## Likelihood

Unlike the previous two terms of the equation, the likelihood represents a conditional probability. In the weather example, this is the probability of having a windy and cloudy morning, given that it ends up raining at least once throughout that day:
- P(“Windy & Cloudy” | “Rain”).

An intuitive way to think about it is as the degree to which the first event is consistent with the second event. That is, the likelihood represents how strongly you expect that the morning will be windy and cloudy, assuming that the day is going to be rainy.
## Posterior Probability

The posterior probability (often simply called the posterior) is <em>the</em> conditional probability you calculate when using Bayes’ theorem. It represents the <em>updated prior probability</em> after taking into account some new piece of information. As prior probability is always relative, so is the posterior probability of an event. What this means is that the posterior probability becomes the new prior probability which you can then update using some other piece of information. And the cycle goes on. As [Dennis Lindley](https://en.wikipedia.org/wiki/Dennis_Lindley) put it:
> Today’s posterior is tomorrow’s prior.

In the weather example, the posterior probability was P(“Rain” | “Windy & Cloudy”): the conditional probability that can convince you to take an umbrella on your way out.
