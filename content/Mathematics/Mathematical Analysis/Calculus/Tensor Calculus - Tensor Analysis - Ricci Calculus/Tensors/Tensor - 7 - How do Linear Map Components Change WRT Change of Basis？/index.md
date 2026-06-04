---
title: "Tensor - 7 - How do Linear Map Components Change WRT Change of Basis？"
created: 2023-08-01T23:04:47.859-05:00
modified: 2023-08-02T20:15:29.403-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
> [!expand]- Detailed
> ```merge-table
> {
>   "rows": [
>     [
>       "$L(e_j) = \\sum_{i=1}^n L^i_j e_i$"
>     ],
>     [
>       "- $ẽ_j = \\sum_{i=1}^n F^i_j e_i$\n- $e_j = \\sum_{i=1}^n B^i_j ẽ_i$"
>     ]
>   ]
> }
> ```
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- $L(ẽ_i) = L(ẽ_i)$\n- $L(ẽ_i) = L(\\sum_{k=1}^n F^k_i e_k)$\n- $L(ẽ_i) = \\sum_{k=1}^n F^k_i L(e_k)$\n- $L(ẽ_i) = \\sum_{k=1}^n F^k_i \\sum_{j=1}^n L^j_k e_j$\n- $L(ẽ_i) = \\sum_{k=1}^n \\sum_{j=1}^n F^k_i L^j_k e_j$\n- $L(ẽ_i) = \\sum_{k=1}^n \\sum_{j=1}^n F^k_i L^j_k \\sum_{t=1}^n B^t_j ẽ_t$\n- $L(ẽ_i) = \\sum_{k=1}^n \\sum_{j=1}^n \\sum_{t=1}^n F^k_i L^j_k B^t_j ẽ_t$\n- $\\sum_{t=1}^n L˜^t_iẽ_t = \\sum_{k=1}^n \\sum_{j=1}^n \\sum_{t=1}^n F^k_i L^j_k B^t_j ẽ_t$",
>       "Einstein's notation:\n- $L(ẽ_i) = L(ẽ_i)$\n- $L(ẽ_i) = L(F^j_i e_i)$\n- $L(ẽ_i) = F^j_i L(e_i)$\n- $L(ẽ_i) = F^j_i L^k_j e_k$\n- $L(ẽ_i) = F^j_i L^k_j B^t_k ẽ_t$\n- $L˜^t_i ẽ_t = F^j_i L^k_j B^t_k ẽ_t$\n- $L˜^t_i = F^j_i L^k_j B^t_k$\n- $L˜^t_i = B^t_k L^k_j F^j_i$"
>     ],
>     [
>       "Thus",
>       ""
>     ],
>     [
>       "- $L˜^t_i = \\sum_{k=1}^n \\sum_{j=1}^n F^k_i L^j_k B^t_j$\n- $L˜ = BLF$",
>       ""
>     ]
>   ]
> }
> ```

> [!expand]- Simple (using vector-covector pairs)
> Given:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Linear Map Definition",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Basis Vectors",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Basis Covectors",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- 𝐿 = 𝐿˜<sup>𝑖</sup><sub>𝑗</sub> 𝑒̃<sub>𝑖</sub>𝜀̃<sup>𝑗</sup>\n- 𝐿 = 𝐿<sup>𝑖</sup><sub>𝑗</sub> 𝑒<sub>𝑖</sub>𝜀<sup>𝑗</sup>",
>       "- $ẽ_j = F^i_j e_i$\n- $e_j = B^i_j ẽ_i$",
>       "- $𝜀̃^i = B^i_j 𝜀^j$\n- $𝜀^i = F^i_j 𝜀̃^j$"
>     ]
>   ]
> }
> ```
>
> Then
>
> ```merge-table
> {
>   "rows": [
>     [
>       "Then start with the definition of linear map 𝐿:\n- 𝐿 = 𝐿<sup>𝑖</sup><sub>𝑗</sub> 𝑒<sub>𝑖</sub>𝜀<sup>𝑗</sup>\n\nNext, transform all the basis vectors and basis covectors individually\n- 𝐿 = 𝐿<sup>𝑖</sup><sub>𝑗</sub> 𝐵<sup>𝑘</sup><sub>𝑖</sub>𝑒̃<sub>𝑘</sub>𝐹<sup>𝑗</sup><sub>𝑙</sub>𝜀̃<sup>𝑙</sup>\n- 𝐿 = (𝐵<sup>𝑘</sup><sub>𝑖</sub>𝐿<sup>𝑖</sup><sub>𝑗</sub>𝐹<sup>𝑗</sup><sub>𝑙</sub>)<sub></sub>𝑒̃<sub>𝑘</sub>𝜀̃<sup>𝑙</sup>\n- 𝐿 = (    𝐿˜<sup>𝑘</sup><sub>𝑙</sub>)<sub></sub>𝑒̃<sub>𝑘</sub>𝜀̃<sup>𝑙</sup>\n\nThus:\n- 𝐿<sup>𝑘</sup><sub>𝑙</sub> = 𝐹<sup>𝑘</sup><sub>𝑖</sub>𝐿˜<sup>𝑖</sup><sub>𝑗</sub>𝐵<sup>𝑗</sup><sub>𝑙</sub>\n- 𝐿˜ = 𝐵𝐿𝐹",
>       "Then start with the definition of linear map 𝐿:\n- 𝐿 = 𝐿˜<sup>𝑖</sup><sub>𝑗</sub> 𝑒̃<sub>𝑖</sub>𝜀̃<sup>𝑗</sup>\n\nNext, transform all the basis vectors and basis covectors individually\n- 𝐿 = 𝐿˜<sup>𝑖</sup><sub>𝑗</sub> 𝐹<sup>𝑘</sup><sub>𝑖</sub>𝑒<sub>𝑘</sub>𝐵<sup>𝑗</sup><sub>𝑙</sub>𝜀<sup>𝑙</sup>\n- 𝐿 = (𝐹<sup>𝑘</sup><sub>𝑖</sub>𝐿˜<sup>𝑖</sup><sub>𝑗</sub>𝐵<sup>𝑗</sup><sub>𝑙</sub>)<sub></sub>𝑒<sub>𝑘</sub>𝜀<sup>𝑙</sup>\n- 𝐿 = (    𝐿<sup>𝑘</sup><sub>𝑙</sub>)<sub></sub>𝑒<sub>𝑘</sub>𝜀<sup>𝑙</sup>\n\nThus:\n- 𝐿<sup>𝑘</sup><sub>𝑙</sub> = 𝐹<sup>𝑘</sup><sub>𝑖</sub>𝐿˜<sup>𝑖</sup><sub>𝑗</sub>𝐵<sup>𝑗</sup><sub>𝑙</sub>\n- 𝐿 = 𝐹𝐿˜𝐵"
>     ]
>   ]
> }
> ```

> [!expand]- Another Way
> Given:
> - basis 𝑒 = {𝑒<sub>1</sub>, ..., 𝑒<sub>𝑛</sub>}
> - basis 𝑓 = {𝑓<sub>1</sub>, ..., 𝑓<sub>𝑛</sub>}
> - matrix 𝐹 = \[𝑓\] = \[𝑓<sub>1</sub> ... 𝑓<sub>𝑛</sub>\] where 𝑓<sub>𝑖</sub> are columns expressed in 𝑒
>
> Then:
> - 𝑣<sub>𝑒</sub> = 𝐹 𝑣<sub>𝑓</sub>
> - 𝑣<sub>𝑓</sub> = 𝐹<sup>-1</sup> 𝑣<sub>𝑒</sub>
>
> Hence if:
> - 𝑇∊𝐿(ℝ<sup>𝑛</sup>) and matrix 𝐴<sub>𝑒</sub> is a realization of transformation 𝑇 expressed in basis 𝑒
>
> What is the realization matrix 𝐴<sub>𝑓</sub>expressed in basis 𝑓?
> - by definition:
> 	- 𝑦<sub>𝑓</sub> = 𝐴<sub>𝑓</sub>𝑥<sub>𝑓</sub>
> 	- 𝑦<sub>𝑒</sub> = 𝐴<sub>𝑒</sub>𝑥<sub>𝑒</sub>
> - then:
> 	- 𝑦<sub>𝑓</sub> = 𝐹<sup>-1</sup>𝑦<sub>𝑒</sub>
> 	- 𝑦<sub>𝑓</sub> = 𝐹<sup>-1</sup>𝐴<sub>𝑒</sub>𝑥<sub>𝑒</sub>
> 	- 𝑦<sub>𝑓</sub> = 𝐹<sup>-1</sup>𝐴<sub>𝑒</sub>𝐹𝑥<sub>𝑓</sub>
> 	- 𝐴<sub>𝑓</sub>𝑥<sub>𝑓</sub> = 𝐹<sup>-1</sup>𝐴<sub>𝑒</sub>𝐹𝑥<sub>𝑓</sub>
> - thus:
> 	- 𝐴<sub>𝑓</sub> = 𝐹<sup>-1</sup>𝐴<sub>𝑒</sub>𝐹
````
^excerpt
