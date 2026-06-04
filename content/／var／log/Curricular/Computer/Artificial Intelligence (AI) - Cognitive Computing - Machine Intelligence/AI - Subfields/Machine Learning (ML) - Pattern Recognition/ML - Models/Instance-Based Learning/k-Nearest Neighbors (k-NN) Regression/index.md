---
title: "k-Nearest Neighbors (k-NN) Regression"
created: 2020-04-05T02:04:48.281-05:00
modified: 2023-01-21T15:51:50.347-06:00
parent: "[[Instance-Based Learning]]"
children:
  - "[[Nearest-Neighbor Descent (NN-Descent)]]"
---
###### k-Nearest Neighbors (k-NN)
- is a [[ML - Probabilistic vs Non-Probabilistic|non-probabilistic]], [[Non-Parametric Regression (NPR) Models|non-parametric regression]]/[[Instance-Based Learning|instance-based]], [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised learning]] approach where the response of a data point is determined by the nature of its 𝑘 neighbors from the training set. It can be used in both classification and regression settings
- is a type of [[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|Kernel Density Estimation]] with a [[Uniform Distribution|uniform]] kernel with variable bandwidth to encompass 𝑘 nearest neighbors
- no real training stage
- in test time, given a test input 𝑥, we find the 𝑘 nearest neighbors to 𝑥 in the training set. then return the average of the corresponding 𝑦 values in the training set
- has a very high [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|capacity]]

# k-NN - Definition of Nearest

Nearest is based on either: [[Distance Measures／Metrics／Semi-Metrics／Functions|distance measure]] or [[Similarity Measures／Metrics／Semi-Metrics／Functions|similarity measure]]
# k-NN - Bias Variance Tradeoff
- higher the parameter 𝑘 → higher [[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression|bias]] & lower [[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression|variance]] (lower capacity)
- lower the parameter 𝑘 → higher variance & lower bias (higher capacity)

![[k-Nearest Neighbors (k-NN) Regression/k-nearest-neighbors.png]]
# k-NN - Weakness

one weakness is that it cannot learn that one feature is more discriminative than another (e.g. imagine we have a regression task with 𝒙 ∊ ℝ<sup>100</sup> drawn from an isotropic Gaussian distribution, but only a single variable 𝑥<sub>1</sub> is relevant to the output. Suppose further that this feature simply encodes the output directly, i.e. that 𝑦 = 𝑥<sub>1</sub> in all cases. Nearest neighbor regression will not be able to detect this simple pattern. The nearest neighbor of most points 𝒙 will be determined by the large number of features 𝑥<sub>2</sub> through 𝑥<sub>100</sub>, not by the lone feature 𝑥<sub>1</sub>. Thus the output on small training sets will essentially be random)
# k-NN - Types

training (fast):
- for each training example (𝑥, 𝑦) add to the list of training examples

prediction (slow):
1. given query instance 𝑥<sub>𝑞</sub>
2. 𝐾 = find 𝑘 instances from training examples that are "nearest" to 𝑥<sub>𝑞</sub> (nearest based on [[Distance Measures／Metrics／Semi-Metrics／Functions|distance measure]] or [[Similarity Measures／Metrics／Semi-Metrics／Functions|similarity measure]])
3. <font style="color: rgb(128,128,128);">replace from below</font>
4. return class 𝑣
```merge-table
{
  "rows": [
    [
      {
        "content": "TYPE",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "replace step 3 of prediction:",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Discrete",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑣 = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦∊𝑌</sub>𝛴\\[𝛿(𝑦, 𝑓(𝑥<sub>𝑖</sub>)\\] <font style=\"color: rgb(128,128,128);\">\\# for each training example 𝑥<sub>𝑖</sub> in 𝐾</font>"
    ],
    [
      {
        "content": "Continuous",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑣 = \\[𝛴𝑓(𝑥<sub>𝑖</sub>)\\] / 𝑘"
    ],
    [
      {
        "content": "Discrete Distance-Weighted",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑣 = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦∊𝑌</sub>𝛴\\[𝑤<sub>𝑖</sub> \\* 𝛿(𝑦, 𝑓(𝑥<sub>𝑖</sub>)\\]"
    ],
    [
      {
        "content": "Continuous Distance-Weighted",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑣 = \\[𝛴𝑤<sub>𝑖</sub> \\* 𝑓(𝑥<sub>𝑖</sub>)\\] / \\[𝛴𝑤<sub>𝑖</sub>\\]"
    ]
  ]
}
```

where 𝑤<sub>𝑖</sub>is some distance such as:
- 𝑤<sub>𝑖</sub>= 1 / (some other [[Distance Measures／Metrics／Semi-Metrics／Functions|distance measure]])
	- 𝑤<sub>𝑖</sub>= 1 / [[Distance Measures／Metrics／Semi-Metrics／Functions|𝑒𝑢𝑐𝑙𝑖𝑑𝑒𝑎𝑛-𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒]](𝑥<sub>𝑞</sub>, 𝑥<sub>𝑖</sub>)<sup>2</sup>
	- 𝑤<sub>𝑖</sub>= 1 / [[Distance Measures／Metrics／Semi-Metrics／Functions|𝑚𝑎𝑛ℎ𝑎𝑡𝑡𝑎𝑛-𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒]](𝑥<sub>𝑞</sub>, 𝑥<sub>𝑖</sub>)<sup>2</sup>
- 𝑤<sub>𝑖</sub>= (some other [[Similarity Measures／Metrics／Semi-Metrics／Functions|similarity measure]])

# Calculating Nearest Neighbor Efficiently
- Random Project Trees
- [[Nearest-Neighbor Descent (NN-Descent)]]

# Resources
- Interactive k-NN demo - [http://vision.stanford.edu/teaching/cs231n-demos/knn/](http://vision.stanford.edu/teaching/cs231n-demos/knn/)
