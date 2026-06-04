---
title: "Logistic Regression vs Linear SVM vs Non-Linear SVM"
created: 2020-11-04T17:16:49.717-06:00
modified: 2020-11-04T17:19:46.536-06:00
parent: "[[ML - Model Comparisons]]"
children: []
---
- [[Logistic (Logit) Regression Model|Logistic Regression Models]] - classifies along with probabilities
- [[Support Vector Machines (SVM)]] - classifies without probabilities

### When to Use (Linear SVM - Non-Linear SVM - Logistic Regression)
- 𝑛 - number of training examples
- 𝑘 - number of features

if 𝑘 is large (relative to 𝑛) (e.g. 𝑘≥𝑛, 𝑘=10,000, 𝑛=10-1000)
- use logistic regression or SVM without a kernel (linear kernel)

if 𝑘 is small, 𝑛 is intermediate (e.g. 𝑘=1-1000, 𝑛=10-10,000)
- use Non-Linear SVM with Gaussian kernel

if 𝑘 is small, 𝑛 is large (e.g. 𝑘=1-1000, 𝑛=50,000+)
- create/add more feature, then use logistic regression or SVM without a kernel
- bc SVM is slow when number of training examples are large

[[Artificial Neural Networks (ANN)|neural network]] likely to work well for most of these settings, but may be slower to train
