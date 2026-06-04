---
title: "2-Time Slice Bayesian Networks (2TBN)"
created: 2021-09-13T05:26:46.117-05:00
modified: 2021-09-13T05:26:46.117-05:00
parent: "[[Dynamic Bayesian Networks (DBN)]]"
children: []
---
###### 2-Time Slice Bayesian Networks (2TBN)
- a subpart of [[Dynamic Bayesian Networks (DBN)]] over a Bayesian Fragment where a timeslice 𝑡 is [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] of all non-descendants {0, 𝑡-2} when given timeslice 𝑡-1
- let:
	- 𝑿 denote the variables in timeslice 𝑡-1
	- 𝑿' denote the variables in timeslice 𝑡
- then 2TBN defines a conditional probability distribution:
	- 𝐏(𝑿'|𝑿) = ∏<sub>𝑋'∊𝑿'</sub>𝐏(𝑋'|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋'))

### Example
###### Template Transition Model

as you can see there are dependencies BETWEEN and WITHIN each time slice

![[2-Time Slice Bayesian Networks (2TBN)/template-transition-model.png|500]]

𝐏(𝑊',𝑉',𝐿',𝐹',𝑂'|𝑊,𝑉,𝐿,𝐹) = 𝐏(𝑊'|𝑊) 𝐏(𝑉'|𝑊,𝑉) 𝐏(𝐿'|𝑉,𝐿) 𝐏(𝐹'|𝑊,𝐹) 𝐏(𝑂'|𝐿',𝐹')
- inter-time-slice edges - 𝐏(𝐹'|𝑊,𝐹) -
- intra-time-slice edges - 𝐏(𝑂'|𝐿',𝐹') - a dependency that is fairly rapidly acting

###### Ground Bayesian Network
![[2-Time Slice Bayesian Networks (2TBN)/ground-bayesian-network.png|350]]
