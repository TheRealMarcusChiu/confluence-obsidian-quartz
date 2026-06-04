---
title: "Classification and Regression Tree (CART) - Regression Tree"
created: 2020-10-25T14:13:12.613-05:00
modified: 2024-09-03T22:30:52.590-05:00
parent: "[[Decision Trees (DT)]]"
children: []
---
###### Classification and Regression Tree (CART) - Regression Tree
````excerpt
- introduced by [Leo Breiman](https://en.wikipedia.org/wiki/Leo_Breiman) to refer to [[Decision Trees (DT)|Decision Tree]] algorithms that can be used for classification or regression predictive modeling problems
````
^excerpt

# CART - Model Representation

CART Model is a [[Graph Theory - Terminology|binary tree]]
# CART - Model Learning/Training

the model is built through a process known as binary recursive partitioning, which is an iterative process that splits the data into partitions or branches, and then continues splitting each partition into smaller groups as the method moves to each branch

this involves REPEATING the following processes:
1. selecting an input variable among all input variables
2. selecting a split/cut point on that variable

Both are selected by a [[Greedy／Local-Search Algorithms|greedy algorithm]] that minimizes the [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|cost function]] (e.g. [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|sum of squared residuals]]). It is repeated until a predefined stopping criterion is met (e.g. such a minimum number of training instances assigned to each leaf node of the tree)
# CART - Model Tree Pruning

cost complexity pruning (similar to [[Adjusted R²／R-Square (Adjusted Coefficient of Determination)|Adjusted R-Squared]]):
- 𝑇𝑟𝑒𝑒 𝑆𝑐𝑜𝑟𝑒 = 𝑆𝑆𝑅 + 𝛼·𝑇

where:
- 𝑆𝑆𝑅 - is the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|sum of squared residuals]]
- 𝛼 - is a [[ML - Model Parameters & Hyperparameters|hyperparameter]] (tuned by [[Cross-Validation - K-Fold Cross-Validation|cross-validation]])
- 𝑇 - is the total number of leaves/terminal-nodes

# CART - Resources
- [https://machinelearningmastery.com/classification-and-regression-trees-for-machine-learning/](https://machinelearningmastery.com/classification-and-regression-trees-for-machine-learning/)
- [StatQuest - Regression Tree - Intro](https://www.youtube.com/watch?v=g9c66TUylZ4&ab_channel=StatQuestwithJoshStarmer)
- [StatQuest - Regression Tree - Pruning](https://www.youtube.com/watch?v=D0efHEJsfHo&ab_channel=StatQuestwithJoshStarmer)
