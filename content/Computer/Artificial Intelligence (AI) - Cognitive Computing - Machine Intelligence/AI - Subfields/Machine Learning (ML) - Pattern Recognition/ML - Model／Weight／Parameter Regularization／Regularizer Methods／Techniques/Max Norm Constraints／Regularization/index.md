---
title: "Max Norm Constraints／Regularization"
created: 2023-12-24T14:08:33.970-06:00
modified: 2023-12-25T11:33:42.152-06:00
parent: "[[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques]]"
children: []
---
###### Max Norm Constraints/Regularization
````excerpt
- is a [[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques|regularization method]] that enforces an absolute upper bound on the magnitude of the weight vector for every neuron and uses projected gradient descent to enforce the constraint
- In practice, this corresponds to performing the parameter update as normal and then enforcing the constraint by clamping the weight vector 𝑤⃗ of every neuron to satisfy ‖𝑤⃗‖<sub>2</sub>\<𝑐.
	- typical values of 𝑐 are on orders of 3 or 4
	- ‖·‖<sub>2</sub> is the [[L2／Euclidean Norm|L2 norm]]
- Some people report improvements when using this form of regularization
- One of its appealing properties is that the model cannot “explode” even when the learning rates are set too high because the updates are always bounded
````
^excerpt
