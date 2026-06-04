---
title: "Regularization - Parameter Weight Decay"
created: 2020-08-13T15:20:10.067-05:00
modified: 2023-12-24T14:36:00.118-06:00
parent: "[[ML - Model／Weight／Parameter Regularization／Regularizer Methods／Techniques]]"
children: []
---
###### Regularization - Parameter Weight Decay

regularization is a preference for smaller weights/[[ML - Model Parameters & Hyperparameters|parameter]] values
- 𝐽(𝜃) = 𝑀𝑆𝐸(𝑡𝑟𝑎𝑖𝑛𝑖𝑛𝑔-𝑠𝑒𝑡) + 𝜆·𝛺(𝜃)

where:
- 𝐽(𝜃) is the cost function or objective function
- 𝑀𝑆𝐸(𝑡𝑟𝑎𝑖𝑛𝑖𝑛𝑔-𝑠𝑒𝑡) is the mean square error function ([[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|cost-function / objective-function]])
- 𝛺(𝜃) regularizer function <font style="color: rgb(128,128,128);">(usually 𝛺(𝜃) = 𝜃<sup>𝑇</sup><font style="color: rgb(128,128,128);">𝜃</font>)</font>
- 𝜆 controls the power of regularizer over 𝑀𝑆𝐸(𝑡𝑟𝑎𝑖𝑛𝑖𝑛𝑔-𝑠𝑒𝑡)
	- smaller 𝜆 or 𝜆 = 0 imposes no preference and may lead to overfitting
	- larger 𝜆 forces weights to become smaller, which may lead to underfitting
	- medium 𝜆 good fit
