---
title: "Gradient Computation Algorithms - Algorithms Computing Gradients"
created: 2023-07-16T17:56:20.421-05:00
modified: 2024-09-12T12:02:21.765-05:00
parent: "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
children:
  - "[[Automatic／Auto／Algorithmic／Computational Differentiation (Autodiff - AD)]]"
  - "[[Batch Gradient Estimation - Stochastic Gradient Estimation - Mini-Batch Gradient Estimation]]"
  - "[[Exploding Gradient Problem]]"
  - "[[Vanishing Gradient Problem]]"
---
###### Gradient Computation Algorithms - Algorithms Computing Gradients
````excerpt
- is any algorithm that computes the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|gradient]] of a [[Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)|differentiable function]] (often the [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|loss function]])
- the gradients computed can be used for the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]]
````
^excerpt

# Gradient Computation - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Numerical Differentiation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- estimate gradients by approximating derivatives using small perturbations in the input\n- this approach involves evaluating the function multiple times to calculate the difference quotient"
    ],
    [
      {
        "content": "Symbolic Differentiation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- involves using symbolic manipulation to derive exact expressions for the gradients\n- this technique is especially useful when dealing with functions with known mathematical forms\n- can be performed manually or using computer algebra systems (CAS) like SymPy"
    ],
    [
      {
        "content": "[[Automatic／Auto／Algorithmic／Computational Differentiation (Autodiff - AD)|Automatic Differentiation (AD)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is a technique that automatically computes derivatives by applying the chain rule of calculus\n- is widely used in deep learning frameworks and provides exact gradients efficiently by evaluating the function and its derivatives in a forward and backward pass"
    ]
  ]
}
```
# Gradient Computation - Types Comparisons
- Symbolic Differentiation faces the difficulty of converting a computer program into a single mathematical expression and can lead to inefficient code
- Numerical differentiation (the method of finite differences) can introduce round-off errors in the discretization process and cancellation

Both symbolic and numerical differentiation:
- have problems with calculating higher derivatives, where complexity and errors increase
- are slow at computing partial derivatives of a function with respect to many inputs, as is needed for gradient-based optimization algorithms

Automatic differentiation solves all of these problems.
# Gradient Computation - Other Types
- <strong>[[Batch Gradient Estimation - Stochastic Gradient Estimation - Mini-Batch Gradient Estimation|Batch Gradient Estimation]]</strong> - approximates the true gradients using the <strong>ENTIRE</strong> training set
- <strong>[[Batch Gradient Estimation - Stochastic Gradient Estimation - Mini-Batch Gradient Estimation|Stochastic Gradient Estimation]]</strong> - approximates the true gradients using a <strong>SINGLE</strong> element of the training set
- <strong>[[Batch Gradient Estimation - Stochastic Gradient Estimation - Mini-Batch Gradient Estimation|Mini-Batch Gradient Estimation]]</strong> - approximates the true gradients using a <strong>SUBSET</strong> of the training set
- <strong>Hessian Matrix Approximation</strong> - the [[Hessian／Hesse Matrix|Hessian matrix]] contains second-order derivatives and provides additional information about the curvature of the loss function. Techniques like finite differences, the Gauss-Newton method, or the Levenberg-Marquardt algorithm can be used to approximate the Hessian matrix and compute gradients more accurately.

# Gradient Computation - Problems
- [[Vanishing Gradient Problem]]
- [[Exploding Gradient Problem]]
