---
title: "Sandboxxxx"
created: 2025-12-11T00:47:42.127-06:00
modified: 2025-12-11T01:22:59.675-06:00
parent: "[[RL Chapters]]"
children: []
---
According to the question the weights 𝐰 are initialized as:
- $𝐰 = \langle 1, 1, 1, 1, 1, 1, 5 \rangle$

According to the question, we update weights 𝐰 using semi-gradient TD(0):
- $𝐰 \leftarrow 𝐰 + \alpha [R + \gamma \hat{v}(S',𝐰) - \hat{v}(S,𝐰)] \nabla \hat{v}(S,𝐰)$

According to the question, 𝛼=0.1 𝛾=0.95 𝑅=0, thus:
- $𝐰 \leftarrow 𝐰 + 0.1 * [0.95 * \hat{v}(S',𝐰) - \hat{v}(S,𝐰)] \nabla \hat{v}(S,𝐰)$

According to the question, the diagram contains 6 states/nodes, thus 𝑣̂(𝑆,𝐰) is defined as:
- $\hat{v}(s_1,𝐰) = w_0 + 2 w_1$
- $\hat{v}(s_2,𝐰) = w_0 + 2 w_2$
- $\hat{v}(s_3,𝐰) = w_0 + 2 w_3$
- $\hat{v}(s_4,𝐰) = w_0 + 2 w_4$
- $\hat{v}(s_5,𝐰) = w_0 + 2 w_5$
- $\hat{v}(s_6,𝐰) = 2 w_0 + w_6$

According to the question, each transition/arrow is denoted as 1 training example in the batch. Thus they are a total of 6 training examples.
1. 𝑠<sub>1</sub> → 𝑠<sub>6</sub>
2. 𝑠<sub>2</sub> → 𝑠<sub>6</sub>
3. 𝑠<sub>3</sub> → 𝑠<sub>6</sub>
4. 𝑠<sub>4</sub> → 𝑠<sub>6</sub>
5. 𝑠<sub>5</sub> → 𝑠<sub>6</sub>
6. 𝑠<sub>6</sub> → 𝑠<sub>6</sub>

So given training example \#1 (𝑠<sub>1</sub> → 𝑠<sub>6</sub>) the update becomes:
- $𝐰 \leftarrow 𝐰 + 0.1 * [0.95 * (2 w_0 + w_6) - (w_0 + 2 w_1)] \nabla (w_0 + 2 w_1)$

Since this is a batch update, 𝐰 will NOT be updated until all training examples have been processed:
- $0.1 * [0.95 * (2 * 1 + 5) - (1 + 2 * 1)] \nabla (w_0 + 2 w_1)$
- $0.365 * \nabla (w_0 + 2 w_1)$
- $0.365 * [1, 2, 0, 0, 0, 0, 0]$
- $[0.365, 0.730, 0, 0, 0, 0, 0]$

Do this for the rest of the training samples, add them up and update the weight vector 𝐰 accordingly.
