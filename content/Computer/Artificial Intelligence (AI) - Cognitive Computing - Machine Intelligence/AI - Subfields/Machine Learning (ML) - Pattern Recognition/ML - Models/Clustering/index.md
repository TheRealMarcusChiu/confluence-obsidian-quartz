---
title: "Clustering"
created: 2020-06-02T14:06:17.201-05:00
modified: 2021-11-02T01:31:51.202-05:00
parent: "[[ML - Models]]"
children:
  - "[[Clustering - Algorithm Comparisons]]"
  - "[[Hard Clustering]]"
  - "[[Soft Clustering]]"
---
###### Clustering
- is an unsupervised learning finding patterns in unlabeled data

# Clustering - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Algorithms",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Hard Clustering]]",
        "bg": "#F4F5F7"
      },
      "- assigns an instance to 1 cluster\n- clusters do not overlap\n- element either belongs to a cluster or it does not",
      "- [[Hierarchical Clustering]]\n- [[k-Means Clustering]]",
      "- each point/instance is given a \"hard\" assignment to exactly one cluster-center\n- does not allow uncertainty in cluster-center/class-membership\n- does not allow point/instance to belong to more than one cluster-center"
    ],
    [
      {
        "content": "[[Soft Clustering]]",
        "bg": "#F4F5F7"
      },
      "- assigns probabilities that an instance belongs to each cluster\n- clusters may overlap\n- strength of association between clusters and instances",
      "- [[EM - Clustering]]\n- [[Fuzzy C-Means (FCM) Clustering]]",
      ""
    ]
  ]
}
```
# Clustering - Other
- [[Community Detection vs Clustering]]
- [[Clustering - Algorithm Comparisons]]
