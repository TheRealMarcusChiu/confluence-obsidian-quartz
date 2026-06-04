---
title: "Probability - Kolmogorov's Axioms"
created: 2021-09-13T05:26:32.184-05:00
modified: 2023-09-01T14:29:29.537-05:00
parent: "[[Probability Definition]]"
children: []
---
# Kolmogorov’s Axioms on Probabilities

All properties of [[Probability|probabilities]] follow from these 3 statements:

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>P(event) ≥ 0</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The probability of any event is a number greater than or equal to 0"
    ],
    [
      {
        "content": "<strong>P(event-that-exists-in-Sample-Space) = 1</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The probability that at least one of the possible events in the sample space of a random process will occur is equal to 1. The sample space covers all possible events, and it is certain that at least one event will occur. Therefore, the probability of the entire sample space has to be equal to 1."
    ],
    [
      {
        "content": "<strong>ΣP(event) for all possible events in Sample Space</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "From a set of non-overlapping events, the probability that at least one event will occur is equal to the sum of the probabilities of the individual events in the set. This one will require the most clarification, even though it’s actually much simpler than it sounds. Non-overlapping events are events that cannot occur at the same time (like simultaneously flipping both heads and tails). Consider the following example. What is the probability of rolling an even number with a six-sided die? In this case, the outcomes that correspond to the event of rolling an even number are rolling 2, 4, or 6. Notice that they are completely non-overlapping because you cannot roll any pair of numbers simultaneously. Then, according to this axiom, the probability of rolling an even number is: P(Even) = P(2) + P(4) + P(6)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [https://en.wikipedia.org/wiki/Probability_axioms](https://en.wikipedia.org/wiki/Probability_axioms)
