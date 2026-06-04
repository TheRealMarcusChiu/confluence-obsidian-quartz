---
title: "Ensemble Methods／Techniques"
created: 2020-06-02T13:58:22.458-05:00
modified: 2024-01-26T19:54:36.085-06:00
parent: "[[ML - Models]]"
children:
  - "[[Boosting (Additive Modeling)]]"
  - "[[Bootstrap Aggregation - Bagging]]"
  - "[[Random Forest]]"
---
###### Ensemble Methods/Techniques
````excerpt
- are techniques that create multiple models and then combine them to produce improved results
````
^excerpt

# Ensemble - Steps
1. construction of a dictionary 𝐷 = {𝑇<sub>1</sub>(𝑋), 𝑇<sub>2</sub>(𝑋), ..., 𝑇<sub>𝑀</sub>(𝑋)} of basis elements (weak learners) 𝑇<sub>𝑖</sub>(𝑋)
2. fitting a model 𝑓(𝑋) = 𝛴<sub>1≤𝑖≤𝑚</sub>\[𝛼<sub>𝑖</sub>·𝑇<sub>𝑖</sub>(𝑋)\]

# Ensemble - Types

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
        "content": "[[Linear Regression (LR) Models|Linear Regression]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- the ensemble consists of the coordinate functions 𝑇<sub>𝑖</sub>(𝑋) = 𝑋<sub>𝑖</sub>\n- the fitting is done by least squares"
    ],
    [
      {
        "content": "Voting & Averaging",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "1. create multiple (classification/continuous) regression models of dataset\n\t1. each base model can be created using either:\n\t\t1. different subsets of dataset and same algorithm\n\t\t2. same dataset with different algorithms\n\t\t3. any other method\n2. compute output for each model and combine results\n\t1. majority voting\n\t2. weighted voting\n\t3. simple averaging\n\t4. weighted averaging"
    ],
    [
      {
        "content": "Stacking",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "basic idea:\n- train machine learning algorithms with training dataset and then generate a new dataset with these models\n- then this new dataset is used as input for the combiner machine learning algorithm"
    ],
    [
      {
        "content": "[[Bootstrap Aggregation - Bagging|Bootstrapping Aggregation - Bagging]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "![[Bootstrap Aggregation - Bagging#^excerpt]]"
    ],
    [
      {
        "content": "[[Random Forest]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- a fancier version of bagging\n- the ensemble consists of trees grown to bootstrapped versions of the data, with additional randomization at each split\n- fitting simply averages"
    ],
    [
      {
        "content": "[[Boosting (Additive Modeling)]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "![[Boosting (Additive Modeling)#^excerpt]]\n- the ensemble is grown in an adaptive fashion, then simply averaged at the end"
    ]
  ]
}
```
# Ensemble - Comparisons

Single [[Decision Trees (DT)|Decision Tree]] \<  Bagging \< [[Random Forest]] \< Boosting
# Ensemble - Resources
- [https://www.toptal.com/machine-learning/ensemble-methods-machine-learning](https://www.toptal.com/machine-learning/ensemble-methods-machine-learning)
- [Trevor Hastie - History of Ensemble Methods](https://www.youtube.com/watch?v=wPqtzj5VZus&ab_channel=H2O.ai)
