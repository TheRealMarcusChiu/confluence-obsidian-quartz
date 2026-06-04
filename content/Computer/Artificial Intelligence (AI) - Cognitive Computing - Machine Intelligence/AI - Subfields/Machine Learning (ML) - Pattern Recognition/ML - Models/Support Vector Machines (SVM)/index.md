---
title: "Support Vector Machines (SVM)"
created: 2020-08-14T16:15:37.223-05:00
modified: 2021-08-14T21:33:23.718-05:00
parent: "[[ML - Models]]"
children:
  - "[[Linear SVM (SVM Without Kernel)]]"
  - "[[Non-Linear SVM (SVM With Kernels)]]"
  - "[[SVM - Code]]"
  - "[[Support Vector Machines (SVM)﻿ as Quadratic Programming]]"
---
###### Support Vector Machines (SVM) - Support Vector Classifier/Regression - Large/Maximal Margin Classifier/Regression
- is a [[ML - Parametric vs Non-Parametric|non-parametric]], [[Instance-Based Learning|instance-based]], [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative-typed]], [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised learning]] model
- used mainly for classification problems (sometimes regression)
- has [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|capacity]] to learn [[ML - Linear Models vs Non-Linear Models|linear models]] and complex [[ML - Linear Models vs Non-Linear Models|non-linear models]]

###### Support Vector Classifier
- is a hyperplane that linearly separates data into 2 categories

# SVM - Model Types
> [!tabs]
>
> === Linear vs Non-Linear
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "[[Linear SVM (SVM Without Kernel)|Linear SVM]]\n[[Linear SVM (SVM Without Kernel)|(SVM Without Kernel)]]",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       "- when data are 1 dimensional then the <em>Support Vector Classifier</em> is a point (a flat affine of 0 dimensional subspace)\n- when data are 2 dimensional then the <em>Support Vector Classifier</em> is a line (a flat affine of 1 dimensional subspace)\n- when data are 3 dimensional then the <em>Support Vector Classifier</em> is a plane (a flat affine of 2 dimensional subspace)\n- when data are 𝑛 dimensional then the <em>Support Vector Classifier</em> is a hyperplane (a flat affine of 𝑛-1 dimensional subspace)\n\nmain idea:\n- start data at 𝑛 dimension\n- find a (hard-margin-classifier or soft-margin-classifier) that separates the 2 categories"
>     ],
>     [
>       {
>         "content": "[[Non-Linear SVM (SVM With Kernels)|Non-Linear SVM]]\n[[Non-Linear SVM (SVM With Kernels)|(SVM With Kernel)]]",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       "When there is no obvious linear classifier that separates data in a nice way Non-Linear SVM works by transforming data into a high dimensional space then finding the <em>Support Vector Classifier</em>\n\nmain idea:\n- start data at 𝑛 dimension\n- transform data into 𝑛+𝑘 dimension (using kernel functions)\n- find a (hard-margin-classifier or soft-margin-classifier) that separates the 2 categories"
>     ]
>   ],
>   "tableStyle": "width: 99.9012%;"
> }
> ```
>
> === Hard-Margin vs Soft-Margin
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Hard-Margin SVM",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       "- super sensitive to outliers\n- does not work when groups overlap\n- considers only the edge between groups and computes the midpoint"
>     ],
>     [
>       {
>         "content": "Soft-Margin SVM",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       "- less sensitive to outliers\n- works when groups overlap"
>     ]
>   ]
> }
> ```

# SVM - Model Examples

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Hard Margin",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Soft Margin",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Linear",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "![[Support Vector Machines (SVM)/maximal-margin classifier.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Support Vector Machines (SVM)/soft-margin classifier-or-support-vector-classifier.png|301]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "Non-Linear",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "![[Support Vector Machines (SVM)/support-vector-machines.png|301]]\ntransform data to higher dimension\n![[Support Vector Machines (SVM)/support vector machines 2.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Support Vector Machines (SVM)/support-vector-machines-soft-margin.png|301]]\ntransform data to higher dimension\n![[Support Vector Machines (SVM)/support vector machines-2-soft-margin.png|301]]",
        "align": "center"
      }
    ]
  ]
}
```
# SVM - Multi-class Classification

one-vs-all method - by training 𝑘 SVM problems (similar to [[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]])
# SVM - Other
- [[Logistic Regression vs Linear SVM vs Non-Linear SVM]]
- [[Support Vector Machines (SVM)﻿ as Quadratic Programming]]

# Resources
- [StatQuest - SVM](https://www.youtube.com/watch?v=efR1C6CvhmE)
- [Support Vector Machines - Intuition Article](https://blog.statsbot.co/support-vector-machines-tutorial-c1618e635e93)
- [Caltech - Video Lecture](https://www.youtube.com/watch?v=eHsErlPJWUU&list=PLCA2C1469EA777F9A&index=14&ab_channel=caltech)
- [Andrew Ng's Video Lecture](https://www.coursera.org/lecture/machine-learning/optimization-objective-sHfVT)
- [Machine Learning Mastery - SVM](https://machinelearningmastery.com/support-vector-machines-for-machine-learning/)
