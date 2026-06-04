---
title: "Machine Learning (ML) - Pattern Recognition"
created: 2019-08-21T23:33:17.202-05:00
modified: 2026-02-10T15:46:12.149-06:00
parent: "[[AI - Subfields]]"
children:
  - "[[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression]]"
  - "[[ML - Model (Which to Choose)]]"
  - "[[ML - Model Comparisons]]"
  - "[[ML - Model Parameters & Hyperparameters]]"
  - "[[ML - Model Types／Classifications／Categorizations]]"
  - "[[ML - Model Variable Types]]"
  - "[[ML - Models]]"
  - "[[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques]]"
  - "[[ML - Performance Measure]]"
  - "[[ML - Tasks／Problems]]"
  - "[[ML - Textbooks]]"
  - "[[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Pattern Recognition",
        "bg": "#F4F5F7"
      },
      "is the engineering application of various algorithms for the purpose of recognition of patterns in data"
    ],
    [
      {
        "content": "Machine Learning",
        "bg": "#F4F5F7"
      },
      "- constructs algorithms that can learn from data, identify patterns and make decisions\n- components of ML:\n\t- a pattern exists\n\t- the pattern cannot be pinned mathematically\n\t- data exists"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# ML - 4 Components
- a computer program is said to learn from experience 𝐸 with respect to some class of tasks 𝑇 and performance measure 𝑃, if its performance at tasks in 𝑇, as measured by 𝑃, improves with experience 𝐸
- a computer program is said to learn if its performance 𝑃 in task 𝑇 increases with experience 𝐸
```merge-table
{
  "rows": [
    [
      {
        "content": "[[ML - Tasks／Problems|Tasks (𝑇)]]",
        "bg": "#F4F5F7"
      },
      "is the type of problem to solve"
    ],
    [
      {
        "content": "[[ML - Models|Model (𝑀)]]\n\nAlgorithm/Estimator/Predictor",
        "bg": "#F4F5F7"
      },
      "is used to learn task 𝑇 (used over [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training-set]])\n- similar to:\n\t- [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|(Point/Parameter - Predictor/Model Target Function/Distribution) Estimation/Estimator/Estimate]]\n\t- [[Probability Distribution Models／Representations|Probability Distribution Models/Representations]]\n- [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|ML - Training/Validation/Test Data/Set - Training/Validation/Test Error]]\n- [[ML - Model Types／Classifications／Categorizations|ML - Model Types/Classifications/Categorizations]]\n- [[ML - Model (Which to Choose)]]\n- [[ML - Model Comparisons]]\n- [[ML - Model Variable Types]]\n- [[ML - Model Parameters & Hyperparameters]]\n- [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques|ML - Model/Weight/Parameter Regularization/Regularizer Methods/Techniques]]"
    ],
    [
      {
        "content": "[[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|Experience (𝐸)]]",
        "bg": "#F4F5F7"
      },
      "is the type of [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training-set]] used by model 𝑀 (e.g. unsupervised learning, supervised learning, etc)"
    ],
    [
      {
        "content": "[[ML - Performance Measure|Performance Measure (𝑃)]]",
        "bg": "#F4F5F7"
      },
      "is a method used to evaluate the trained model (used over [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|test-set]])\n- [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|Objective Function/Criterion - Cost/Loss/Error Function - Expected Cost/Loss/Error]]\n\t- [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|Model - Performance/Accuracy/Evaluation/Goodness-of-Fit Measures/Metrics/Analysis]]\n- [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|Estimator & Predictor/Model (Bias - Variance - Irreducible/Bayes/Noise) Error - Predictor/Model Capacity/Complexity - Generalization (Underfit - Goodfit - Overfit)]]\n\t- [[Double Descent]]\n- [[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression|ML - Diagnosing Model Bias/Underfit vs Variance/Overfit - Linear Regression]]"
    ]
  ]
}
```
# ML - 4 Components Example

Let's decompose [[Ordinary Least Squares (OLS) Regression|Linear Regression]](i.e. linear regression is to find weights 𝜽 that reduce MSE over test-set when the algorithm experiences the training-set)

```merge-table
{
  "rows": [
    [
      {
        "content": "Task (𝑇)",
        "bg": "#F4F5F7"
      },
      "to predict 𝑦 from 𝒙 by outputting 𝑦̂ = 𝜽<sup>𝑇</sup>𝒙"
    ],
    [
      {
        "content": "Model (𝑀)",
        "bg": "#F4F5F7"
      },
      "[[Ordinary Least Squares (OLS) Regression]] is the algorithm used"
    ],
    [
      {
        "content": "Experience (𝐸)",
        "bg": "#F4F5F7"
      },
      "a supervised set of (𝒙, 𝑦) tuples as [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training-set]] (labeled with 𝑦)"
    ],
    [
      {
        "content": "Performance Measure (𝑃)",
        "bg": "#F4F5F7"
      },
      "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error (MSE)]] over the [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|test set]]"
    ]
  ]
}
```
# Resources
- [[ML - Textbooks]]
- [Andrew Ng's Course](https://www.coursera.org/learn/machine-learning/home/welcome)
- [Neural Networks for Machine Learning — Geoffrey Hinton](https://www.youtube.com/playlist?list=PLLssT5z_DsK_gyrQ_biidwvPYCRNGI3iv)
- [CalTech - Learning from Data](http://youtube.com/watch?v=VeKeFIepJBU&list=PLCA2C1469EA777F9A&index=1&ab_channel=caltech)
- [Google's Crash Course](https://developers.google.com/machine-learning/crash-course/)
- [ML Cheatsheet](https://ml-cheatsheet.readthedocs.io/en/latest/index.html)
- [https://github.com/eriklindernoren/ML-From-Scratch](https://github.com/eriklindernoren/ML-From-Scratch)
- [https://explained.ai/](https://explained.ai/)
