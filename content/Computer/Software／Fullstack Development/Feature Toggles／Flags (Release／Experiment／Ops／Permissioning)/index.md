---
title: "Feature Toggles／Flags (Release／Experiment／Ops／Permissioning)"
created: 2020-12-26T12:21:20.791-06:00
modified: 2021-10-29T20:24:43.057-05:00
parent: "[[Software／Fullstack Development]]"
children: []
---
see: [[Feature Toggle Pattern]]
# Feature Toggle Types

feature toggle categorization dimensions:
- longevity - how long the feature toggle will live
- dynamism - how dynamic the toggling decision must be
- who will manage the feature toggle

![[Feature Toggles／Flags (Release／Experiment／Ops／Permissioning)/feature-toggle-categories.png|400]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Release Toggles",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- allow incomplete and un-tested code paths to be shipped to production as latent code which may never be turned on\n- are transitionary by nature. They should generally not stick around much longer than a week or two"
    ],
    [
      {
        "content": "Experiment Toggles",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- are used to perform multivariate or A/B testing\n- this technique is commonly used to make data-driven optimizations\n- highly dynamic\n- needs to remain in place long enough to generate statistically significant results"
    ],
    [
      {
        "content": "Ops Toggles",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- are used to control operational aspects of systems' behavior\n- introduced when rolling out a new feature that has unclear performance implications so that the system operators can disable or degrade it in production if needed\n- relatively short-lived\n- however, it may be long-lived \"kill-switches\" that allows system operators to gracefully disable/degrade non-vital functionality when the system is enduring unusually high load (manually-managed Circuit Breaker)\n- purpose of these flags is to allow operators to quickly react to production issues they need to be re-configured extremely quickly - needing to roll out a new release in order to flip an Ops Toggle is unlikely to make an Operations person happy"
    ],
    [
      {
        "content": "Permissioning Toggles",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- used to change the features or product experience that certain users receive (e.g., premium users)\n- highly dynamic"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [https://martinfowler.com/articles/feature-toggles.html](https://martinfowler.com/articles/feature-toggles.html)
