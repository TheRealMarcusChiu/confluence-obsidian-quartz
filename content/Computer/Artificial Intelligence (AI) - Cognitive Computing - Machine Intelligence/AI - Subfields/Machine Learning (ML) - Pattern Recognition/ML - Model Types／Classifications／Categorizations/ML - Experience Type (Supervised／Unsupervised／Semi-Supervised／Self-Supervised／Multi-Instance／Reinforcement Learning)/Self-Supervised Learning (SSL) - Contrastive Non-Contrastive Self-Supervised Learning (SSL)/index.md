---
title: "Self-Supervised Learning (SSL) - Contrastive Non-Contrastive Self-Supervised Learning (SSL)"
created: 2022-06-25T19:14:26.910-05:00
modified: 2026-01-04T12:06:14.449-06:00
parent: "[[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)]]"
children: []
---
###### Self-Supervised Learning (SSL) - Contrastive Non-Contrastive Self-Supervised Learning (SSL)
````excerpt
- learns from unlabeled sample data
- usually considered as a subset of [[Unsupervised Learning|unsupervised learning]]
````
^excerpt

# SSL - Types

For a binary classification task, training data can be divided into positive examples and negative examples. Positive examples are those that match the target. For example, if you're learning to identify birds, the positive training data are those pictures that contain birds. Negative examples are those that do not

```merge-table
{
  "rows": [
    [
      {
        "content": "Contrastive SSL",
        "bg": "#F4F5F7"
      },
      "- Contrastive SSL uses both positive and negative examples\n- Contrastive learning's loss function minimizes the distance between positive samples while maximizing the distance between negative samples"
    ],
    [
      {
        "content": "Non-contrastive SSL",
        "bg": "#F4F5F7"
      },
      "- Non-contrastive SSL uses only positive examples\n- Counterintuitively, NCSSL converges on a useful local minimum rather than reaching a trivial solution, with zero loss. For the example of binary classification, it would trivially learn to classify each example as positive\n- Effective NCSSL requires an extra predictor on the online side that does not back-propagate on the target side"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# SSL - Use Cases
- [[Contrastive Reinforcement Learning (CRL)]]
