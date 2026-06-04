---
title: "Instance-Based Learning"
created: 2020-06-02T15:33:12.626-05:00
modified: 2022-10-03T03:05:33.920-05:00
parent: "[[ML - Models]]"
children:
  - "[[Locally Weighted Regression]]"
  - "[[k-Nearest Neighbors (k-NN) Regression]]"
---
###### Instance-Based Learning
- is a family of learning algorithms that, instead of performing explicit generalization, compares new problem instances with instances seen in training, which have been stored in memory
- a type of [[Non-Parametric Regression (NPR) Models|non-parametric regression]] algorithm

# Instance-Based Learning - Advantages & Disadvantages

<strong>ADVANTAGE:</strong> the ability to model complex target functions by a collection of less complex local approximations and the fact that information present in the training examples is never lost (because the examples themselves are stored explicitly). The main practical difficulties include efficiency of labeling new instances (all processing is done at query time rather than in advance), difficulties in determining an appropriate distance metric for retrieving "related" instances (especially when examples are represented by complex symbolic descriptions), and the negative impact of irrelevant features on the distance metric

<strong>DISADVANTAGE:</strong> one disadvantage of instance-based approaches is that the cost of classifying new instances can be high. This is due to the fact that nearly all computation takes place at classification time rather than when the training examples are first encountered. Therefore, techniques for efficiently indexing training examples are a significant practical issue in reducing the computation required at query time. A second disadvantage to many instance-based approaches, especially nearest-neighbor approaches, is that they typically consider all attributes of the instances when attempting to retrieve similar training examples from memory. If the target concept depends on only a few of the many available attributes, then the instances that are truly most "similar" may well be a large distance apart
# Instance-Based Learning - Types

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
      }
    ],
    [
      {
        "content": "[[k-Nearest Neighbors (k-NN) Regression]]",
        "bg": "#F4F5F7"
      },
      "- based on the y values of each k-nearest training examples\n- is an instance-based algorithm for approximating real-valued or discrete-valued target functions, assuming instances correspond to points in an n-dimensional Euclidean space. The target function value for a new query is estimated from the known values of the k nearest training examples"
    ],
    [
      {
        "content": "[[Locally Weighted Regression]]",
        "bg": "#F4F5F7"
      },
      "- local approximation of the target function is constructed for each query instance\n- a generalization of [[k-Nearest Neighbors (k-NN) Regression]] which is an explicit local approximation to the target function\n  is constructed for each query instance. The local approximation to the target function may be based on a variety of functional forms such as constant, linear, or quadratic functions or on spatially localized kernel functions"
    ],
    [
      {
        "content": "[[Radial Basis Function (RBF) Networks]]",
        "bg": "#F4F5F7"
      },
      "- a type of [[Artificial Neural Networks (ANN)|artificial neural network]] constructed from spatially localized kernel functions. These can be seen as a blend of instance-based approaches (spatially localized influence of each kernel function) and neural network approaches (a global approximation to the target function is formed at training time rather than a local approximation at query time)\n- [[Radial Basis Function (RBF) Networks|RBF Networks]] have been used successfully in applications such as interpreting visual scenes, in which the assumption of spatially local influences is well-justified"
    ],
    [
      {
        "content": "Case-Base Reasoning",
        "bg": "#F4F5F7"
      },
      "- instances are represented by complex logical descriptions rather than points in a [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean Space]]. Given these complex symbolic descriptions of instances, a rich variety of methods have been proposed for mapping from the training examples to target function values for new instances. Case-based reasoning methods have been used in applications such as modeling legal reasoning and for guiding searches in complex manufacturing and transportation planning problems"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
