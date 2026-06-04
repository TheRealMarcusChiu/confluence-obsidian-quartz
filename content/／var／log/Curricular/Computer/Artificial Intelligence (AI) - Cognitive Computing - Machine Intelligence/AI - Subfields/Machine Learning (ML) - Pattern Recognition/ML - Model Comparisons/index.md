---
title: "ML - Model Comparisons"
created: 2020-11-04T17:13:36.467-06:00
modified: 2021-08-14T16:07:10.835-05:00
parent: "[[Machine Learning (ML) - Pattern Recognition]]"
children:
  - "[[Histogram vs KDE]]"
  - "[[Linear Discriminant Analysis (LDA) vs Quadratic Discriminant Analysis (QDA)]]"
  - "[[Linear Regression vs Gaussian Regression]]"
  - "[[Logistic Regression (LR) vs Linear Discriminant Analysis (LDA)]]"
  - "[[Logistic Regression vs Linear SVM vs Non-Linear SVM]]"
---
# ML Models - List

see: [[ML - Models]]
# ML Model - Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

> [!expand]- linear regression
> ###### Input/Output
> - input 𝑥: real-valued features
> - output 𝑦: Guassian Distribution
>
> ###### Input/Output Relation
> - 𝑦 = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑛</sub>𝑥<sub>𝑛</sub>
>
> ###### Model Parameter 𝜃
> - 𝜃 = {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑛</sub>}
>
> ###### Solving 𝜃
> - 
> > [!expand]- maximum likelihood estimate
> > - 𝜃<sub>𝑀𝐿𝐸</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐏(𝑦|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>)
> > - 𝜃<sub>𝑀𝐿𝐸</sub> = (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑌
> >
> > where {𝑋,𝑌} are training data
>
> ###### Graphical Model
> ![[ML - Model Comparisons/linear-regression.png|301]]

> [!expand]- logistic regression
> ###### Input/Output
> - input 𝑥: real-valued features
> - output 𝑝: Bernoulli Distribution
>
> ###### Input/Output Relation
> - 𝑦 = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑛</sub>𝑥<sub>𝑛</sub>
> - 𝑝 = 1 / \[1 + 𝑒𝑥𝑝(-𝑦)\]
> - 
> > [!expand]- Click here to expand...
> > - 𝐏(𝑦=1|𝑥) = 𝑝
> > - 𝐏(𝑦=0|𝑥) = 1 - 𝑝
> > - 𝑙𝑜𝑔(𝑝/(1-𝑝)) = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑛</sub>𝑥<sub>𝑛</sub>
> > - 𝑙𝑜𝑔(𝑝/(1-𝑝)) = 𝑦
> > - 𝑝/(1-𝑝) = 𝑒𝑥𝑝(𝑦)
> > - 𝑝 = (1-𝑝)𝑒𝑥𝑝(𝑦)
> > - 𝑝 = 𝑒𝑥𝑝(𝑦) - 𝑝·𝑒𝑥𝑝(𝑦)
> > - 𝑝 + 𝑝·𝑒𝑥𝑝(𝑦) = 𝑒𝑥𝑝(𝑦)
> > - 𝑝 \[1 + 𝑒𝑥𝑝(𝑦)\] = 𝑒𝑥𝑝(𝑦)
> > - 𝑝 = 𝑒𝑥𝑝(𝑦) / \[1 + 𝑒𝑥𝑝(𝑦)\]
> > - <font style="color: rgb(128,128,128);">\# multiply by 𝑒𝑥𝑝(𝑦) / 𝑒𝑥𝑝(𝑦)</font>
> > - 𝑝 = 1 / \[1 + 𝑒𝑥𝑝(-𝑦)\]
>
> ###### Model Parameter 𝜃
> - 𝜃 = {𝜃<sub>1</sub>, ..., 𝜃<sub>𝑛</sub>}
>
> ###### Solving 𝜃
> - no closed form solution
> - 
> > [!expand]- gradient descent
> > TODO
>
> ###### Graphical Model
> ![[ML - Model Comparisons/sigmoid.png|301]]
> ###### Advantages
> - correlated features 𝑥 don't lead to problems (contrast to naive bayes)
> - well calibrated probability (contrast to SVM)
> 	- 𝐏(𝑌<sub>𝑖</sub>=1|𝑋<sub>𝑖</sub>) = 𝑝<sub>𝑖</sub>, ∀ instances {𝑋<sub>𝑖</sub>,𝑌<sub>𝑖</sub>}
> 	- → 𝐄\[𝛴𝑝<sub>𝑖</sub>\] = 𝛴𝑌<sub>𝑖</sub> <font style="color: rgb(128,128,128);">\# number of "𝑌=1"</font>
> - not sensitive to unbalanced training data
> 	- 𝑌<sub>𝑖</sub> = 1, if 𝐏(𝑌<sub>𝑖</sub>=1|𝑋<sub>𝑖</sub>) \> 𝐏(𝑌=1)
> 	- 𝑌<sub>𝑖</sub> = 0, otherwise

> [!expand]- multinomial logistic regression
> ###### Input/Output
> - input 𝑥: real-valued features, 𝑛-𝑑𝑖𝑚𝑒𝑛𝑠𝑖𝑜𝑛𝑎𝑙
> - output 𝑝<sub>𝑐</sub>: Multinoulli Distribution, 𝑚-𝑑𝑖𝑚𝑒𝑛𝑠𝑖𝑜𝑛𝑎𝑙
>
> ###### Input/Output Relation
> - 𝑦<sub>𝑐</sub> = 𝜃<sub>𝑐,0</sub> + 𝜃<sub>𝑐,1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑐,𝑛</sub>𝑥<sub>𝑛</sub><font style="color: rgb(128,128,128);">\# weighted sum for class 𝑐</font>
> - 𝑝<sub>𝑐</sub> = 𝑒𝑥𝑝(-𝑦<sub>𝑐</sub>) / 𝛴<sub>𝑐'∊𝑎𝑙𝑙-𝑐𝑙𝑎𝑠𝑠𝑒𝑠</sub>\[𝑒𝑥𝑝(-𝑦<sub>𝑐'</sub>)\] <font style="color: rgb(128,128,128);">\# proability of class 𝑐</font>
>
> ###### Model Parameter 𝜃
> - 𝜃 = {𝜃<sub>1,1</sub>, ..., 𝜃<sub>1,𝑛</sub>, 𝜃<sub>2,1</sub>, ...,𝜃<sub>2,𝑛</sub>, ......, 𝜃<sub>𝑚,𝑛</sub>}
>
> ###### Solving 𝜃
> - no closed form solution
> - 
> > [!expand]- gradient descent
> > TODO
>
> ###### Graphical Model
> ![[ML - Model Comparisons/multinomial-logistic-regression.png|301]]

> [!expand]- log-linear model
> log-linear model is a structured logistic regression
> - structured: allows non-numerical input and output by defining 𝑘 feature functions
> - special case: logistic regression where 𝑘 = (𝑛: number of input values)
>
> ###### Input/Output
> - input 𝑥: real-valued features, 𝑛-𝑑𝑖𝑚𝑒𝑛𝑠𝑖𝑜𝑛𝑎𝑙
> - output 𝑝<sub>𝑐</sub>: Multinoulli Distribution, 𝑚-𝑑𝑖𝑚𝑒𝑛𝑠𝑖𝑜𝑛𝑎𝑙
>
> ###### Input/Output Relation
> - 𝑦 = 𝑤<sub>0</sub> + 𝑤<sub>1</sub>𝐹<sub>1</sub>(𝒙,𝑦) + ... + 𝑤<sub>𝑘</sub>𝐹<sub>𝑘</sub>(𝒙,𝑦)<font style="color: rgb(128,128,128);">\# weighted sum of 𝑘 features</font>
> - 𝐏(𝑌=𝑦|𝒙) = 𝑒𝑥𝑝(-𝑦) / 𝛴<sub>𝑦'∊𝑌</sub>\[𝑒𝑥𝑝(-𝑦')\] <font style="color: rgb(128,128,128);">\# proability of 𝑌=𝑦</font>
>
> ###### Model Parameter 𝜃
> - 𝜃 = {𝑤<sub>0</sub>, 𝑤<sub>1</sub>,..., 𝑤<sub>𝑘</sub>}
>
> ###### Solving 𝜃
> - TODO
>
> ###### Graphical Model
> ![[ML - Model Comparisons/log-linear-model.png|400]]

> [!expand]- linear-chain CRF
> linear-chain CRF is a specific structure of [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field]]
>
> is a log-linear model where:
> - the length 𝐿 of output 𝑦 can be varying
> - the form of feature function is the sum of "low-level feature functions":
> 	- 𝐹<sub>𝑗</sub>(𝒙,𝑦) = 𝛴<sub>1≤𝑖≤𝐿</sub>𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>,𝒙,𝑖)
> > [!list-indent-undo]
> > > [!indent]
> > > ![[ML - Model Comparisons/linear-chain-crf.png|301]]
>
> ###### Example: [[Part of Speech (PoS)]] Tagging
> - input (observed) 𝒙: word sequence
> - output (hidden) 𝒚: PoS tag sequence
>
> ![[ML - Model Comparisons/linear-chain-crf-part-of-peech-tagging.png|350]]
> - 𝒙 = {He, sat, on, the, mat}
> - 𝒚 = {pronoun, verb, preposition, article, noun}
>
> with CRF we hope:
> - 𝐏({pron, v, prep, art, n}|{He, sat, on, the, mat}) \> 𝐏(⟨PoS Tags⟩|{He, sat, on, the, mat}), ∀⟨PoS Tag Sequence⟩ ≠ {pron, v, prep, art, n}
>
> CRF
> - 𝒚 = 𝑤<sub>0</sub> + 𝑤<sub>1</sub>𝐹<sub>1</sub>(𝒙,𝒚) + ... + 𝑤<sub>𝑘</sub>𝐹<sub>𝑘</sub>(𝒙,𝒚) <font style="color: rgb(128,128,128);">\# weighted sum of 𝑘 features</font>
> - 𝐏(𝒀=𝒚|𝒙) = 𝑒𝑥𝑝(-𝒚) / 𝛴<sub>𝒚'∊𝒀</sub>\[𝑒𝑥𝑝(-𝒚')\] <font style="color: rgb(128,128,128);">\# proability of 𝒀=𝒚</font>
>
> where:
> - 𝐹<sub>𝑗</sub>(𝒙,𝒚) = 𝛴<sub>1≤𝑖≤𝐿</sub>𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>,𝒙,𝑖)
>
> An example of low-level feature function 𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>,𝒙,𝑖):
> - "The 𝑖<sup>th</sup> word in 𝒙 is capitalized, and PoS tag 𝑦<sub>𝑖</sub> = proper noun" \[TRUE(1) or FALSE(0)\]
>
> If 𝑤<sub>𝑗</sub> positively large, given 𝒙 and other condition fixed, then 𝒚 is more probable if 𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>,𝒙,𝑖) is activated
> ###### CRF Training
>
> stochastic gradient ascent
> - partial derivative of conditional log-likelihood:
> 	- 𝒚 = 𝑤<sub>0</sub> + 𝑤<sub>1</sub>𝐹<sub>1</sub>(𝒙,𝒚) + ... + 𝑤<sub>𝑘</sub>𝐹<sub>𝑘</sub>(𝒙,𝒚)
> 	- 𝐏(𝒀=𝒚|𝒙) = 𝑒𝑥𝑝(-𝒚) / 𝛴<sub>𝒚'∊𝒀</sub>\[𝑒𝑥𝑝(-𝒚')\]
> 	- 𝛿𝑙𝑜𝑔𝐏(𝒀=𝒚|𝒙) / 𝛿𝑤<sub>𝑗</sub> = 𝐹<sub>𝑗</sub>(𝒙,𝒚) - 𝛴<sub>𝒚'∊𝒀</sub>\[𝐹<sub>𝑗</sub>(𝒙,𝒚')𝐏(𝒀=𝒚|𝒙)\]
> - update weight by:
> 	- 𝑤<sub>𝑗</sub>← 𝑤<sub>𝑗</sub> + 𝛼 \[𝛿𝑙𝑜𝑔𝐏(𝒀=𝒚|𝒙) / 𝛿𝑤<sub>𝑗</sub>\]
>
> NOTE: if 𝑗<sup>th</sup> feature function is not activated by this training example:
> - we don't need to update it
> - usually only a few weights need to be updated in each iteration
>
> ###### CRF Testing
>
> for 1-best derivation:
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝐏(𝒀=𝒚|𝒙)
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝐏(𝒀=𝒚|𝒙)
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝑒𝑥𝑝(-𝒚) / 𝛴<sub>𝒚'∊𝒀</sub>\[𝑒𝑥𝑝(-𝒚')\]
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝑒𝑥𝑝(-𝒚)
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝑤<sub>𝑗</sub>·𝐹<sub>𝑗</sub>(𝒙,𝒚)\]
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝑤<sub>𝑗</sub>·𝛴<sub>1≤𝑖≤𝐿</sub>𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>,𝒙,𝑖)\]
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦<sub>0</sub>, ..., 𝑦<sub>𝐿</sub></sub>𝛴<sub>0≤𝑗≤𝑘</sub>\[𝑤<sub>𝑗</sub>·𝛴<sub>1≤𝑖≤𝐿</sub>𝑓<sub>𝑗</sub>(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>,𝒙,𝑖)\]
> - 𝒚' = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦<sub>0</sub>, ..., 𝑦<sub>𝐿</sub></sub>𝛴<sub>1≤𝑖≤𝐿</sub>𝑔(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>)<font style="color: rgb(128,128,128);"> \# given {𝑤<sub>𝑗</sub>} and 𝒙</font>
>
> for 1-best derivation:
> - precompute 𝑔(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>) as a table for each 𝑖
> - perform dynamic programming to find the best sequence 𝒚:
> 	- 𝑠𝑐𝑜𝑟𝑒({𝑦<sub>0</sub>, ..., 𝑦<sub>𝑖</sub>}) ← 𝑚𝑎𝑥<sub>𝑦<sub>𝑖-1</sub></sub>(𝑠𝑐𝑜𝑟𝑒({𝑦<sub>0</sub>, ..., 𝑦<sub>𝑖-1</sub>}), 𝑔(𝑦<sub>𝑖-1</sub>,𝑦<sub>𝑖</sub>))
>
> ![[ML - Model Comparisons/example-pos-tagging-dynamic-programming.png|500]]
>
> complexity
> - 𝑂(𝑀<sup>2</sup>𝐿𝑘)
>
> where:
> - 𝑀 - build a table
> - 𝐿 - number of elements in sequence
> - 𝑘 - number of feature functions
