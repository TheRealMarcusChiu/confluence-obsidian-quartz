---
title: "Dropout - Dilution - DropConnect (ANN)"
created: 2023-12-24T12:48:42.601-06:00
modified: 2023-12-25T12:08:00.600-06:00
parent: "[[ANN - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques]]"
children: []
---
###### Dropout - Dilution - DropConnect
````excerpt
- is a [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques|regularization method]] for [[Artificial Neural Networks (ANN)|artificial neural networks]] that prevents [[Artificial Neural Networks (ANN)|t]]hem from [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|overfitting]]
- the key idea is to randomly drop units (along with their connections) from the neural network during training. This prevents units from co-adapting too much.
- introduced by Hinton et al. in 2012
````
^excerpt

# Dropout Introduction

```merge-table
{
  "rows": [
    [
      "[[Deep Learning|Deep learning]] [[Artificial Neural Networks (ANN)|neural networks]] are likely to quickly [[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression|overfit]] a training dataset with few examples.\n\nEnsembles of neural networks with different model configurations are known to reduce overfitting but require the additional computational expense of training and maintaining multiple models.\n\nA single model can be used to simulate having a large number of different network architectures by randomly dropping out nodes during training. This is called dropout and offers a very computationally cheap and remarkably effective regularization method to reduce overfitting and improve generalization error in deep neural networks of all kinds.\n\nDropout is a [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques|regularization method]] that approximates training a large number of neural networks with different architectures in parallel\n\nIn the simplest case, each unit is retained with a fixed probability 𝑝 independent of other units, where 𝑝 can be chosen using a validation set or can simply be set at 0.5, which seems to be close to optimal for a wide range of networks and tasks. For the input units, however, the optimal probability of retention is usually closer to 1 than to 0.5.\n\nDropout is not used after training when predicting with the fit network.\n\nIf a unit is retained with probability 𝑝 during training, the outgoing weights of that unit are multiplied by 𝑝 at test time.",
      "![[Dropout - Dilution - DropConnect (ANN)/1.png|500]]\n\n![[Dropout - Dilution - DropConnect (ANN)/2.png|500]]"
    ]
  ],
  "tableStyle": "width: 78.6029%;"
}
```
# Dropout Neural Network Model Description

Consider a neural network with 𝐿 hidden layers. Let:
- 𝑙∈{1, ..., 𝐿} index the hidden layers of the network
- 𝐳<sup>(𝑙)</sup> is the vector input into layer 𝑙
- 𝐲<sup>(𝑙)</sup> is the vector output from layer 𝑙 (𝐲<sup>(0)</sup> = 𝐱 is the input)
- 𝑊<sup>(𝑙)</sup> and 𝑏<sup>(𝑙)</sup> are the weights and biases at layer 𝑙
```merge-table
{
  "rows": [
    [
      {
        "content": "Standard Feed-Forward Operation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Feed-Forward Operation with Dopout",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- $z_i^{(l+1)} = W_i^{(l+1)}𝐲^l + b_i^{(l+1)}$\n- $y_i^{(l+1)} = f(z_i^{(l+1)})$\n\nwhere:\n- 𝑓 is any [[Activation Functions (AF)|activation function]]",
      "- $f_j^{(l)} \\sim \\text{Bernoulli}(p)$\n- $\\tilde{𝐲}^{(l)} = 𝐫^{(l)}·𝐲^{(l)}$\n- $z_i^{(l+1)} = W_i^{(l+1)}\\tilde{𝐲}^{(l)} + b_i^{(l+1)}$\n- $y_i^{(l+1)} = f(z_i^{(l+1)})$"
    ],
    [
      {
        "content": "![[Dropout - Dilution - DropConnect (ANN)/dropout-comparison-models.png|500]]",
        "align": "center",
        "colspan": 2
      },
      null
    ]
  ]
}
```
# Dropout Effect on Features
![[Dropout - Dilution - DropConnect (ANN)/dropout-effect-on-features.png|500]]
# Dropout Effect on Sparsity
![[Dropout - Dilution - DropConnect (ANN)/dropout-effect-on-sparsity.png|500]]

In a good sparse model, there should only be a few highly activated units for any data case. Moreover, the average activation of any unit across data cases should be low.
# Comparisons with Other Regularization Methods
- Dropout is more effective than other standard computationally inexpensive regularizers, such as weight decay, filter norm constraints, and sparse activity regularization
- Dropout may also be combined with other forms of regularization to yield further improvement
- Although dropout alone gives significant improvements, using dropout along with [[Max Norm Constraints／Regularization|max norm regularization]], large decaying learning rates, and high momentum provides a significant
  boost over just using dropout.

# Resources
- [https://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf](https://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
