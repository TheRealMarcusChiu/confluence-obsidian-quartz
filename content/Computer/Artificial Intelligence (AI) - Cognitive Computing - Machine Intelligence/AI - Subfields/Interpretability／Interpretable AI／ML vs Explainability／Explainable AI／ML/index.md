---
title: "Interpretability／Interpretable AI／ML vs Explainability／Explainable AI／ML"
created: 2021-12-31T21:23:33.428-06:00
modified: 2025-09-02T16:06:56.882-05:00
parent: "[[AI - Subfields]]"
children:
  - "[[Local Interpretable Model-Agnostic Explanations (LIME)]]"
  - "[[Mechanistic Interpretability (Mech Interp - Mechinterp - MI) Research]]"
  - "[[SHapley Additive exPlanations (SHAP)]]"
---
# Interpretability vs Explainability
- <strong>Interpretability</strong> - is the extent to which a cause and effect can be observed within a system. Or, to put it another way, it is the extent to which you are able to predict what is going to happen, given a change in input or algorithmic parameters. It’s being able to look at an algorithm and go yep, I can see what’s happening here.
- <strong>Explainability</strong> - is the extent to which the internal mechanics of a machine or deep learning system can be explained in human terms

Interpretability is about being able to discern the mechanics without necessarily knowing why. Explainability is being able to quite literally explain what is happening.
# Interpretability & Explainability - Techniques and Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "Algorithmic Generalization",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Pay Attention to Feature Importance",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Leave One Column Out (LOCO)",
        "bg": "#F4F5F7"
      },
      "- substitutes “missing” for a variable and recomputes the model’s prediction. The idea is that if the score changes a lot, the variable that was left out must be really important"
    ],
    [
      {
        "content": "Permutation Impact/Importance (PI)",
        "bg": "#F4F5F7"
      },
      "- substitutes a variable with a randomly selected value and recomputes the model's prediction"
    ],
    [
      {
        "content": "[[Local Interpretable Model-Agnostic Explanations (LIME)]]",
        "bg": "#F4F5F7"
      },
      "- fits a new linear model in a local neighborhood around a given applicant’s real data values and the real model’s score for those synthetic values. It then uses this new, linear approximation of the actual model to explain how the more complex model behaves. Essentially, you’re taking a very complex model and pretending it’s simple so you can explain it"
    ],
    [
      {
        "content": "[[SHapley Additive exPlanations (SHAP)]]",
        "bg": "#F4F5F7"
      },
      "- is a game theoretic approach to explain the output of any machine learning model"
    ],
    [
      {
        "content": "Deep Learning Important Features (DeepLIFT)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Layer-wise Relevance Propagation",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Interpretability & Explainability - Problems
- interpretability and explainability add an additional step to the developmental process

# Interpretability & Explainability - Resources
- [https://thegradient.pub/explain-yourself/](https://thegradient.pub/explain-yourself/)
