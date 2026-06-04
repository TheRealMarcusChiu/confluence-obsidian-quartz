---
title: "Features - Feature Functions - Feature Engineering - Feature-Based Models"
created: 2020-09-09T16:58:00.978-05:00
modified: 2022-01-02T06:08:00.621-06:00
parent: "[[ML - Models]]"
children:
  - "[[Feature Dimensional／Dimensionality Reduction]]"
---
- <strong>Feature</strong> is an interesting part of the larger raw data
- <strong>Feature Function</strong> is a function that extracts a particular feature from the larger raw data
- <strong>Feature Engineering</strong> is the process of using domain knowledge to extract <em>features</em> from raw data and creating <em>feature functions</em>
- <strong>Feature-Based Model</strong> is a model constructed out of <em>features</em>

# Features in Specific Domains
- Computer Vision's [[Image Features - Feature Detection - Feature Detectors]]
- NLP's [[Information Retrieval (IR) - Information Extraction (IE)]]

# Feature Functions 𝑓<sub>𝑖</sub>(𝑦,𝒙)

𝑓<sub>𝑖</sub>: 𝑿×𝑌 → scalar or nominal
- inputs:
	- 𝑿=𝒙: observed data
	- 𝑌=𝑦: target value
- outputs either:
	- scalar variable
	- [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] variable (e.g. {0,1}, {0, 1, 2}, etc)

feature function properties:

> [!expand]- feature function expectation
> empirical expectation of a feature function 𝑓<sub>𝑖</sub>:
> - 𝐄<sub>𝑒𝑚𝑝𝑖𝑟𝑖𝑐𝑎𝑙</sub>\[𝑓<sub>𝑖</sub>\] = 𝛴<sub>(𝑦,𝒙)∊𝑑𝑎𝑡𝑎</sub>\[𝑓<sub>𝑖</sub>(𝑦,𝒙)\]
>
> model expectation of a feature function 𝑓<sub>𝑖</sub>:
> - 𝐄<sub>𝑚𝑜𝑑𝑒𝑙</sub>\[𝑓<sub>𝑖</sub>\] = 𝛴<sub>(𝑦,𝒙)∊𝑿×𝑌</sub>\[𝐏(𝑦,𝒙)·𝑓<sub>𝑖</sub>(𝑦,𝒙)\]
# Feature Conversions - To Numerical
- [[Feature Conversion - Text Embeddings／Embedding|Feature Conversion - Text Embeddings/Embedding]]

# Feature-Based Models

feature-based models:
- have a set of 𝑛 <em>feature functions</em> {𝑓<sub>1</sub>, ..., 𝑓<sub>𝑛</sub>}
- will assign a weight 𝜃<sub>𝑖</sub> to each <em>feature function</em> 𝑓<sub>𝑖</sub>:
	- a <font style="color: rgb(0,128,0);">POSITIVE</font> weight says a particular observation 𝒙 <font style="color: rgb(0,128,0);">MATCHES</font> a particular class 𝑦
	- a <font style="color: rgb(128,0,0);">NEGATIVE</font> weight says a particular observation 𝒙 <font style="color: rgb(128,0,0);">DOES </font><font style="color: rgb(128,0,0);">NOT MATCH</font> a particular class 𝑦

some feature-based model types:
- [[Logistic (Logit) Regression Model]]
- [[Linear Regression (LR) Models]]

# Feature-Based Models - Choosing the Right Features

see: [[Feature Dimensional／Dimensionality Reduction|Feature Dimensional/Dimensionality Reduction]]
# Feature-Based Linear Models - As Probabilistic Model

make a probabilistic model from the linear combination:
- 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>𝑖</sub>𝑓<sub>𝑖</sub>(𝑦,𝒙)\]

since 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>𝑖</sub>𝑓<sub>𝑖</sub>(𝑦,𝒙)\] can be negative, we need to constrain it above 0. Thus we take the exponential:
- 𝑒<sup>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>𝑖</sub>𝑓<sub>𝑖</sub>(𝑦,𝒙)\]</sup>

next we normalize it
- 𝐏(𝑌=𝑦|𝑿=𝒙) = 𝑒<sup>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>𝑖</sub>𝑓<sub>𝑖</sub>(𝑦,𝒙)\]</sup>/ \[ 𝛴<sub>𝑦'∊𝑌</sub>\[𝑒<sup>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝜃<sub>𝑖</sub>𝑓<sub>𝑖</sub>(𝑦',𝒙)\]</sup>\] \]

# Resources
- [NLP - YouTube](https://www.youtube.com/watch?v=7-7MlBdy3EE&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&index=40&ab_channel=MausamJain)
