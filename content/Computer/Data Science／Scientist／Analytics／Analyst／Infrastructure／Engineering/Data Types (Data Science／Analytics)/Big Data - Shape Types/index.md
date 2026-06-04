---
title: "Big Data - Shape Types"
created: 2020-11-02T13:45:34.452-06:00
modified: 2020-11-02T13:59:47.147-06:00
parent: "[[Data Types (Data Science／Analytics)]]"
children: []
---
big data vary in shape. these call for different approaches

```merge-table
{
  "rows": [
    [
      {
        "content": "Wide Data",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Tall Data",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Wide & Tall Data",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Big Data - Shape Types/big-data-shape-types-wide.png|150]]",
        "align": "center"
      },
      {
        "content": "![[Big Data - Shape Types/big-data-shape-types-tall.png|150]]",
        "align": "center"
      },
      {
        "content": "![[Big Data - Shape Types/big-data-shape-types-tall-and-wide.png|150]]",
        "align": "center"
      }
    ],
    [
      "- thousands/millions of variables\n- hundreds of samples",
      "- tens/hundreds of variables\n- thousands/millions of samples",
      "- thousands/millions of variables\n- millions/billions of samples"
    ],
    [
      "- we have too many variables; prone to overfitting\n- need to remove variables, or regularize, or both",
      "- sometimes simple models (linear) don't suffice\n- we have enough samples to fit non-linear models with many interactions, and not too many variables",
      "tricks of the trade:\n- exploit sparsity\n- random projections/hashing\n- variable screening\n- subsample rows\n- divide and recombine\n- [[MapReduce (MR)|MapReduce]]\n- ADMM (divide & conquer)"
    ],
    [
      "- Screening and FDR\n- Lasso\n- SVM\n- Stepwise LR Model Building",
      "- GLM\n- Random Forests\n- Boosting\n- Deep Learning",
      ""
    ]
  ],
  "tableStyle": "width: 77.7985%;"
}
```
