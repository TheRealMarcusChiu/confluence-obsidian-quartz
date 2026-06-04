---
title: "ML - Model Types／Classifications／Categorizations"
created: 2020-01-19T14:21:30.913-06:00
modified: 2024-08-21T18:34:18.853-05:00
parent: "[[Machine Learning (ML) - Pattern Recognition]]"
children:
  - "[[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)]]"
  - "[[ML - Generative／Joint vs Discriminative／Conditional Models]]"
  - "[[ML - Lazy Learning vs Eager Learning]]"
  - "[[ML - Linear Models vs Non-Linear Models]]"
  - "[[ML - Parametric vs Non-Parametric]]"
  - "[[ML - Probabilistic vs Non-Probabilistic]]"
---
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Model Type/Class/Category</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Description</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Example [[ML - Models|Model]]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Regression Models／Analysis (Regressor／Predictor／Independent／Input／Feature-Function - Response／Dependent／Output／Outcome) Variable|Regression Algorithms]]",
        "bg": "#F4F5F7"
      },
      "is concerned with modeling the relationship between variables. This process is iteratively refined using a measure of the error in the predictions made by the model",
      "- [[Ordinary Least Squares (OLS) Regression|Linear Regression]]\n- [[Logistic (Logit) Regression Model|Logistic Regression]]\n- Stepwise Regression\n- Multivariate Adaptive Regression Splines (MARS)\n- Locally Estimated Scatterplot Smoothing (LOESS)"
    ],
    [
      {
        "content": "[[Instance-Based Learning|Instance-Based Algorithms]]\n\nMemory-Based\n\nWinner-Take-All",
        "bg": "#F4F5F7"
      },
      "uses training data as part of the model\n\nsuch methods have 2 steps:\n- build up a representation/database of training data\n- defining similarity measures to compare new data to the database in order to find the best match and make a prediction",
      "- [[k-Nearest Neighbors (k-NN) Regression|k-Nearest Neighbor (kNN)]]\n- Learning Vector Quantization (LVQ)\n- Self-Organizing Map (SOM)\n- Locally Weighted Learning (LWL)\n- [[Support Vector Machines (SVM)]]"
    ],
    [
      {
        "content": "Regularization Algorithms",
        "bg": "#F4F5F7"
      },
      "is an extension of another method (typically regression methods) that penalizes models based on their complexity, favoring simpler models that are also better at generalizing",
      "- [[Ridge Regression]]\n- Least Absolute Shrinkage and Selection Operator (LASSO)\n- Elastic Net\n- Least-Angle Regression (LARS)"
    ],
    [
      {
        "content": "[[Decision Trees (DT)|Decision Tree Algorithms]]",
        "bg": "#F4F5F7"
      },
      "constructs a model of decisions made based on actual values of attributes in the data.\n\nDecisions fork in tree structures until a prediction decision is made for a given record. Decision trees are trained on data for classification and regression problems.",
      "- [[Classification and Regression Tree (CART) - Regression Tree|Classification and Regression Tree (CART)]]\n- [[Iterative Dichotomiser 3 (ID3)|Iterative Dichotomizer 3 (ID3)]]\n- C4.5 and C5.0 (different versions of a powerful approach)\n- Chi-squared Automatic Interaction Detection (CHAID)\n- Decision Stump\n- M5\n- Conditional Decision Trees"
    ],
    [
      {
        "content": "Bayesian Algorithms",
        "bg": "#F4F5F7"
      },
      "applies [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Theorem]] for problems such as classification and regression",
      "- [[Naive Bayes Model - Bayes Model|Naive Bayes]]\n- Averaged One-Dependence Estimators (AODE)\n- [[Bayesian Networks (BN)|Bayesian Network (BN)]]"
    ],
    [
      {
        "content": "[[Clustering|Clustering Algorithms]]",
        "bg": "#F4F5F7"
      },
      "are concerned with using the inherent structures in the data to best organize the data into groups of maximum commonality",
      "- [[k-Means Clustering|k-Means]]\n- k-Medians\n- [k-Medoids](https://en.wikipedia.org/wiki/K-medoids)\n- [[EM - Clustering|Expectation Maximization (EM)]]\n- [[Hierarchical Clustering]]"
    ],
    [
      {
        "content": "Association Rule Learning Algorithms",
        "bg": "#F4F5F7"
      },
      "extract rules that best explain observed relationships/associations between variables in large multidimensional datasets",
      "- Apriori algorithm\n- Eclat algorithm"
    ],
    [
      {
        "content": "[[Artificial Neural Networks (ANN)|Artificial Neural Network Algorithms]]",
        "bg": "#F4F5F7"
      },
      "a class of pattern matching that are commonly used for regression and classification problems but are really an enormous subfield comprised of hundreds of algorithms and variations for all manner of problem types",
      "- [[Perceptrons (Artificial Neurons)|Perceptron]]\n- [[Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)|Multilayer Perceptrons (MLP)]]\n- [[Back Propagation (BP)|Back-Propagation]]\n- Stochastic [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]]\n- Hopfield Network\n- [[Radial Basis Function (RBF) Networks|Radial Basis Function Network (RBFN)]]"
    ],
    [
      {
        "content": "[[Deep Learning]] Algorithms",
        "bg": "#F4F5F7"
      },
      "[Deep Learning](https://machinelearningmastery.com/what-is-deep-learning/) methods are a modern update to Artificial Neural Networks concerned with building much larger and more complex neural networks",
      "- [[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN|Convolutional Neural Networks (CNN)]]\n- [[Recurrent Neural Networks (RNN)|Recurrent Neural Networks (RNNs)]]\n- [[Gated Recurrent Neural Networks (Gated RNN)|Long Short-Term Memory Networks (LSTMs)]]\n- [[Autoencoders (AE)|Auto-Encoders]]\n- [[Deep Boltzmann Machines (DBM)]]\n- [[Deep Belief Networks (DBN)]]"
    ],
    [
      {
        "content": "[[Feature Dimensional／Dimensionality Reduction|Dimensionality Reduction Algorithms]]",
        "bg": "#F4F5F7"
      },
      "like clustering methods, dimensionality reduction seeks and exploits the inherent structure in the data, but in this case in an unsupervised manner or in order to summarize or describe data using less information.\n\nThis can be useful to visualize dimensional data or to simplify data which can then be used in a supervised learning method",
      "- [[Principal Component Analysis (PCA)]]\n- Principal Component Regression (PCR)\n- Partial Least Squares Regression (PLSR)\n- Sammon Mapping\n- Multidimensional Scaling (MDS)\n- Projection Pursuit\n- [[Linear／Normal Discriminant／Discriminative Analysis (LDA／NDA)|Linear Discriminant Analysis (LDA)]]\n- [[Quadratic Discriminant／Discriminative Analysis (QDA)|Quadratic Discriminant Analysis (QDA)]]\n- Mixture Discriminant Analysis (MDA)\n- Flexible Discriminant Analysis (FDA)"
    ],
    [
      {
        "content": "[[Ensemble Methods／Techniques|Ensemble Algorithms]]",
        "bg": "#F4F5F7"
      },
      "are composed of multiple models that are independently trained and whose predictions are combined in some way to make the overall prediction",
      "- Boosting\n- Bootstrapped Aggregation (Bagging)\n- [[Random Forest]]\n- [[Adaptive Boost／Boosting (AdaBoosting)|AdaBoost]]\n- Weighted Average (Blending)\n- Stacked Generalization (Stacking)\n- Gradient Boosting Machines (GBM)\n- Gradient Boosted Regression Trees (GBRT)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
