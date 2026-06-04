---
title: "Cross-Validation - K-Fold Cross-Validation"
created: 2020-08-13T16:37:59.205-05:00
modified: 2024-09-03T22:34:40.852-05:00
parent: "[[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error]]"
children: []
---
###### Cross-Validation - K-Fold Cross-Validation
````excerpt
- used to tune [[ML - Model Parameters & Hyperparameters|hyperparameters]]
- used to estimate generalization/true error of a trained model when the given dataset is too small for a simple [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|train/test or train/validation split]] to yield accurate estimation of generalization error, because the mean-of-a-loss on a small test set may have too high variance
````
^excerpt

# Main Idea
- partition dataset into 𝑘 non-overlapping subsets
- on trial 𝑖, the 𝑖<sup>th</sup> subset is used as test/validation-set and the rest is used as training set
- the test-error is estimated by taking the average test error across the 𝑘 trials

problem is that there exist no unbiased estimators of the variance of such average error estimators (Bengio & Grandvalet 2004) but approximations are typically used
# Pseudocode
```
KFoldXV(𝐷,𝐴,𝐿,𝑘):
	split 𝐷 into 𝑘 mutually exclusive subsets 𝐷[𝑖] whose union is 𝐷
	for 𝑖 = 1 to 𝑘:
		𝑓[𝑖] = 𝐴(𝐷\𝐷[𝑖])
		for 𝑧[𝑗] in 𝐷[𝑖]:
			𝑒[𝑗] = 𝐿(𝑓[𝑖], 𝑧[𝑗])
	return 𝑒
```

where:
- 𝐷 - is the given dataset with elements {𝑧\[1\], ..., 𝑧\[𝑛\]}
- 𝐴 - the learning algorithm (a function that takes a dataset as input and outputs a learned function)
- 𝐿 - the loss function (a function that takes a learned function 𝑓 and an example 𝑧\[𝑖\]∊𝐷 as input and outputs a scalar∊ℝ)
- 𝑘 - the number of folds

# Resources
- [StatQuest](https://www.youtube.com/watch?v=fSytzGwwBVw)
