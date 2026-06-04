---
title: "Classical (Statistical Inference - Inferential Statistics)"
created: 2021-09-13T05:26:32.018-05:00
modified: 2023-09-01T14:01:37.407-05:00
parent: "[[Inferential Statistics - Paradigms]]"
children: []
---
# Classical Inference - Definition

The <strong>Classical Inference/Definition</strong> of a probability of an event is calculated by conceptually breaking down the possibility/sample space into a set of outcomes such that:
- Every possibility corresponds to 1 outcome within the set of outcomes
- Every outcome is equally likely (via the [[Principle of Indifference - Principle of Insufficient Reasoning|principle of indifference]])
- Every outcome is mutually exclusive

With that, the probability of an event is defined as the number of outcomes favorable to the event, divided by the total number of possible outcomes.
# Classical Inference -  Example

You roll a fair die and want to calculate the probability of rolling an odd number. Because the die is fair, it’s equally likely to end up with any of its 6 sides facing up. Breaking down the possibility space to these 6 outcomes satisfies the requirement of the definition:
- They cover all possibilities, assuming the die can’t remain stable on an edge or a vertex
- All outcomes are equally likely
- The outcomes are mutually exclusive (you can’t get two numbers as the outcome of a single roll)

The outcomes that are favorable to the event “roll an odd number” are 1, 3, and 5. This is 3 out of the 6 outcomes, so the probability of rolling an odd number is 3/6 (or 0.5)
# Ways of Breaking Down the Possibility Space

There are different ways to break down the possibility space, all of which satisfy the definition.

For example, instead of breaking down a die roll into 6 possible outcomes, you can break it down to 2 or 3:
- odd vs. even number
- less than 4 vs. greater than or equal to 4
- {1, 2}, {3, 4}, {5, 6}

The level at which you break down the possibility space depends on the type of event. The important thing to consider is if your event (and only your event) can be covered completely by a subset of your possibility space.

The first breakdown (odd vs. even) would still work for calculating the probability of rolling an odd number. But the other two wouldn’t because the possible outcomes are only partly consistent with the event. So, neither would be completely favorable or unfavorable.
# Classical Inference - Shortfall

The classical definition isn’t exactly wrong. Actually, it is completely consistent with the mathematical definition, but it is limited. It’s only defined for finite sample spaces that can be conceptually broken down into EQUALLY likely outcomes.
