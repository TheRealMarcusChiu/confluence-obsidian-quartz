---
title: "Back Propagation (BP)"
created: 2020-06-02T13:37:48.502-05:00
modified: 2026-05-14T23:49:41.370-05:00
parent: "[[(Reverse Mode／Accumulation - Top-Down - Adjoint Mode) Automatic Differentiation]]"
children:
  - "[[Visualizing Back Propagation on Composite Functions]]"
---
###### Back-Propagation/Backpropagation (Backprop BP)
````excerpt
- is the term from the [[Artificial Neural Networks (ANN)|neural network]] literature for [[(Reverse Mode／Accumulation - Top-Down - Adjoint Mode) Automatic Differentiation|reverse-mode differentiation]]
- is a [[Gradient Computation Algorithms - Algorithms Computing Gradients|gradient computation algorithm]]
- is an efficient way to compute the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|gradient]] of a [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|loss function 𝐿(𝜃)]] with respect to the [[ML - Model Parameters & Hyperparameters|weights/parameters 𝜃]] of a[[Composite Functions - Function Composition|composite function]] (e.g. [[Artificial Neural Networks (ANN)|artificial neural network]])
- the gradients computed by BP can be used for the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]]
````
^excerpt

# BP - Visualizing Back Propagation
- [[Visualizing Back Propagation on Composite Functions|Visualizing Gradient Descent & Back Propagation on Composite Functions]]

# BP - Patterns in Backward Flow

```merge-table
{
  "rows": [
    [
      "Example backpropagation of composition function:\n- 𝐿 = 2 \\* \\[3\\*-4 + max(2,-1)\\]\n\n![[Back Propagation (BP)/backpropagation-gradient-flow-patterns.drawio.png|400]]",
      "- <strong>add gate</strong> - gradient broadcaster\n- <strong>multiply gate</strong> - gradient amplifier/attenuator\n- <strong>max gate</strong> - gradient router"
    ]
  ]
}
```
# Resources
- [http://neuralnetworksanddeeplearning.com/chap2.html](http://neuralnetworksanddeeplearning.com/chap2.html)
- [3Brown1Blue - Intuition](https://www.youtube.com/watch?v=Ilg3gGewQ5U)
- [3Brown1Blue - Calculus](https://www.youtube.com/watch?v=tIeHLnjs5U8)
