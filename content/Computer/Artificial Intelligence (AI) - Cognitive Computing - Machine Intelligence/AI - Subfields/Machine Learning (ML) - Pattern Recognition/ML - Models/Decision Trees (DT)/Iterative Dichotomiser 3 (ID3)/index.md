---
title: "Iterative Dichotomiser 3 (ID3)"
created: 2020-06-02T14:04:17.658-05:00
modified: 2024-10-09T10:10:58.740-05:00
parent: "[[Decision Trees (DT)]]"
children: []
---
###### Iterative Dichotomiser 3 (ID3)
````excerpt
- is an algorithm used to generate a [[Decision Trees (DT)|decision tree]] from a dataset
- is the precursor to the C4.5 algorithm
- utilizes [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|entropy]] and [[Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)|gain]] ideas from [[Information Theory - Mathematical Theory of Communication - Telecommunications|Information Theory]]
- is uses "greedy search"
````
^excerpt

# ID3 - Pseudocode \#1
1. Calculate the entropy/information-gain of every attribute 𝑎 of the data set 𝑆
2. Partition ("split") the set 𝑆 into subsets using the attribute for which the resulting entropy after splitting is minimized; or, equivalently, information gain is maximum.
3. Make a decision tree node containing that attribute
4. Recurse on subsets using the remaining attributes

# ID3 - Pseudocode \#2
```
function ID3(S, A) {
	if (all of S are labeled 1) return leaf 1
	if (all of S are labeled 0) return leaf 0
	if (A = ∅) return leaf with value = label majority in S
	else:
		j = argmax_{i∊A} Gain(S,i)
		T1 = ID3({(x,y) ∊ S : x_j = 1}, A\{j})
		T2 = ID3({(x,y) ∊ S : x_j = 0}, A\{j})
		return T.left(T2).right(T1);
}
```
# ID3 - Implementations of Gain Measure

> [!expand-ui]- Train Error
> Let:
> - $C(a) = min(a,1-a)$
>
> The training error before splitting on feature 𝑖 is shown below, since we took a majority vote among labels:
> - $C(𝐏_S(y=1))$
>
> Similarly, the error after splitting on feature 𝑖 is:
> - $C(𝐏_S(y=1|x_i=1))𝐏_S(x_i=1) + C(𝐏_S(y=1|x_i=0))𝐏_S(x_i=0)$
>
> Therefore, we can define 𝐺𝑎𝑖𝑛 to be the difference between the two:
> - $Gain(S,i) := C(𝐏_S(y=1)) - C(𝐏_S(y=1|x_i=1))𝐏_S(x_i=1) - C(𝐏_S(y=1|x_i=0))𝐏_S(x_i=0)$

> [!expand-ui]- Information Gain
> The information gain is the difference between the entropy of the label before and after the split, and is achieved by replacing the function 𝐶 in the previous expression by the entropy function:
> - $C(a) = -a \; log(a) - (1-a) \; log(1-a)$

> [!expand-ui]- Gini Index
> - $C(a) = 2a(1 - a)$
# ID3 - Pruning
```
GENERIC TREE PRUNING PROCEDURE
inputs:
	function 𝑓(𝑇,𝑚) which is the bound/estimate for the generalization error of a decision tree 𝑇, based on a sample of size 𝑚
    tree 𝑇

foreach node 𝑗 in a bottom-up walk on 𝑇 (from leaves to root):
	find 𝑇' which minimies 𝑓(𝑇',𝑚), where 𝑇' is any of the following:
		the current tree after replacing node 𝑗 with a leaf 1
		the current tree after replacing node 𝑗 with a leaf 0
		the current tree after replacing node 𝑗 with its left subtree
		the current tree after replacing node 𝑗 with its right subtree
		the current tree
	let T := T'
```
