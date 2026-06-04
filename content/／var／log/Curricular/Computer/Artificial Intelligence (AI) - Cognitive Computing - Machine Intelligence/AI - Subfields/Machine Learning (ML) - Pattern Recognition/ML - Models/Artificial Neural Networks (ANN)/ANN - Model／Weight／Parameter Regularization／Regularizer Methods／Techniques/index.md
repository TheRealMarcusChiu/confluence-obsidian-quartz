---
title: "ANN - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques"
created: 2024-08-18T02:24:17.094-05:00
modified: 2024-08-18T02:28:49.771-05:00
parent: "[[Artificial Neural Networks (ANN)]]"
children:
  - "[[Dropout - Dilution - DropConnect (ANN)]]"
---
# General [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques|ML Regularization Techniques]]
```dataview
LIST
FROM ""
WHERE file.folder = [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques]].file.folder + "/" + [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques]].file.name
```

# ANN Specific Regularization Techniques
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Regularization Methods Comparisons on MNIST

```merge-table
{
  "rows": [
    [
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Test Classification Error %",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "L2",
        "bg": "#F4F5F7"
      },
      "1.62"
    ],
    [
      {
        "content": "L2 + L1 applied towards the end of training",
        "bg": "#F4F5F7"
      },
      "1.60"
    ],
    [
      {
        "content": "L2 + KL-sparsity",
        "bg": "#F4F5F7"
      },
      "1.55"
    ],
    [
      {
        "content": "[[Max Norm Constraints／Regularization|Max-Norm]]",
        "bg": "#F4F5F7"
      },
      "1.35"
    ],
    [
      {
        "content": "[[Dropout - Dilution - DropConnect (ANN)|Dropout]] + L2",
        "bg": "#F4F5F7"
      },
      "1.25"
    ],
    [
      {
        "content": "[[Dropout - Dilution - DropConnect (ANN)|Dropout]] + [[Max Norm Constraints／Regularization|Max-Norm]]",
        "bg": "#F4F5F7"
      },
      "1.05"
    ]
  ]
}
```

From [Dropout: A Simple Way to Prevent Neural Networks from Overfitting](https://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
