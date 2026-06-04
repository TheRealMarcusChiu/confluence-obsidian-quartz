---
title: "ML - Parametric vs Non-Parametric"
created: 2019-08-21T23:01:29.592-05:00
modified: 2021-08-14T15:53:36.752-05:00
parent: "[[ML - Model Types／Classifications／Categorizations]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Parametric",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Non-Parametric",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "simple",
        "header": true,
        "bg": "#F4F5F7"
      },
      "learns a function described by a finite amount of parameters",
      "learns a function with no limit of parameters"
    ],
    [
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Assumptions can greatly simplify the learning process, but can also limit what can be learned. Algorithms that simplify the function to a known form are called <strong>parametric machine learning algorithms</strong>\n\nthese algorithms involve two steps:\n1. select a form/model for the function\n2. learn the coefficients for the function from the training data",
      "Algorithms that do not make strong assumptions about the form of the mapping function are called <strong>non-parametric machine learning algorithms</strong>. By not making assumptions, they are free to learn any functional form from the training data\n\n<em>Non-parametric models</em> differ from parametric models in that the model structure is not specified <em>a priori</em> but is instead determined from data. The term <em>non-parametric</em> is not meant to imply that such models completely lack parameters but that the number and nature of the parameters are flexible and not fixed in advance"
    ],
    [
      {
        "content": "benefits",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Simpler</strong>: These methods are easier to understand and interpret results.\n- <strong>Speed</strong>: Parametric models are very fast to learn from data.\n- <strong>Less Data</strong>: They do not require as much training data and can work well even if the fit to the data is not perfect",
      "- <strong>Flexibility</strong>: Capable of fitting a large number of functional forms.\n- <strong>Power</strong>: No assumptions (or weak assumptions) about the underlying function.\n- <strong>Performance</strong>: Can result in higher performance models for prediction"
    ],
    [
      {
        "content": "limitations",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Constrained</strong>: By choosing a functional form these methods are highly constrained to the specified form.\n- <strong>Limited Complexity</strong>: The methods are more suited to simpler problems.\n- <strong>Poor Fit</strong>: In practice the methods are unlikely to match the underlying mapping function",
      "- <strong>More data</strong>: Require a lot more training data to estimate the mapping function.\n- <strong>Slower</strong>: A lot slower to train as they often have far more parameters to train.\n- <strong>Overfitting</strong>: More of a risk to overfit the training data and it is harder to explain why specific predictions are made"
    ],
    [
      {
        "content": "[[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|Bias-Variance]] Trade-Off",
        "header": true,
        "bg": "#F4F5F7"
      },
      "generally have:\n- higher bias\n- lower variance",
      "generally have:\n- lower bias\n- higher variance"
    ],
    [
      {
        "content": "Probability",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Parametric Probability Distribution Models]]",
      "[[Non-Parametric Probability Distribution Models]]"
    ],
    [
      {
        "content": "Example Algorithms",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- [[Artificial Neural Networks (ANN)]]\n- [[Perceptrons (Artificial Neurons)|Perceptron]]\n- [[Parametric Regression (PR) Models|Parametric Regression/Classification Models]]\n- [[Linear／Normal Discriminant／Discriminative Analysis (LDA／NDA)|Linear Discriminant Analysis (LDA)]]\n- [[Naive Bayes Model - Bayes Model|Naive Bayes]]",
      "- [[Artificial Neural Networks (ANN)]]\n- [[Decision Trees (DT)|Decision Trees]] (e.g. CART and C4.5)\n- [Non-Parametric Regression](https://en.wikipedia.org/wiki/Nonparametric_regression) and [Semi-Parametric Regression](https://en.wikipedia.org/wiki/Semiparametric_regression) methods have been developed based on [kernels](https://en.wikipedia.org/wiki/Kernel_(statistics)), [splines](https://en.wikipedia.org/wiki/Spline_(mathematics)), and [wavelets](https://en.wikipedia.org/wiki/Wavelet)\n\t- [[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|Kernel Distribution Estimation (KDE)]]:\n\t\t- [[Histogram]] - KDE with bandwidth = 0\n\t\t- [[k-Nearest Neighbors (k-NN) Regression|k-Nearest Neighbors]] - KDE with uniform kernel\n\t\t- [[Support Vector Machines (SVM)]] - KDE with a [[Kernel Functions (Similarity Functions)|Gaussian kernel]]\n- [Data Envelopment Analysis](https://en.wikipedia.org/wiki/Data_envelopment_analysis) provides efficiency coefficients similar to those obtained by [[Bivariate／Multivariate Analysis Descriptive Statistics|Multivariate Analysis]] without any distributional assumption"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
