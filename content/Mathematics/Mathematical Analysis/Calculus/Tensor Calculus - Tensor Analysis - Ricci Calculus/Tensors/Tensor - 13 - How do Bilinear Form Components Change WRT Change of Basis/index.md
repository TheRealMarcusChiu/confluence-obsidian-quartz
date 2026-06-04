---
title: "Tensor - 13 - How do Bilinear Form Components Change WRT Change of Basis"
created: 2023-08-02T12:44:07.146-05:00
modified: 2023-08-02T21:00:04.260-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
> [!expand]- Detailed
> Given
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- $ẽ_j = F^i_j e_i$\n- $e_j = B^i_j ẽ_i$",
>       "- $𝜀̃_i = B^i_j 𝜀_j$\n- $𝜀_i = F^i_j 𝜀̃_j$",
>       ""
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
>       "- $\\mathcal{B} = \\mathcal{B}_{kl} 𝜀^k 𝜀^l$\n- $\\mathcal{B} = \\mathcal{B}_{kl} (F^k_i 𝜀̃^i) (F^l_j 𝜀̃^j)$\n- $\\mathcal{B} = (F^k_i F^l_j \\mathcal{B}_{kl}) 𝜀̃^i 𝜀̃^j$\n- $\\mathcal{B} = (\\tilde{\\mathcal{B}}_{ij}) 𝜀̃^i 𝜀̃^j$\n\nThus\n- $\\tilde{\\mathcal{B}} = F^k_i F^l_j \\mathcal{B}_{kl}$",
>       "- $\\mathcal{B} = \\tilde{\\mathcal{B}}_{kl} 𝜀̃^k 𝜀̃^l$\n- $\\mathcal{B} = \\tilde{\\mathcal{B}}_{kl} (B^k_i 𝜀^i) (B^l_j 𝜀^j)$\n- $\\mathcal{B} = (B^k_i B^l_j \\tilde{\\mathcal{B}}_{kl}) 𝜀^i 𝜀^j$\n- $\\mathcal{B} = {\\mathcal{B}}_{ij} B^k_i 𝜀^i 𝜀^j$\n\nThus\n- ${\\mathcal{B}}_{ij} = B^k_i B^l_j \\tilde{\\mathcal{B}}_{kl}$"
>     ]
>   ]
> }
> ```
> ###### The bilinear map consumes 2 vectors and outputs a scalar
>
> Given
> - $\mathcal{B} = \mathcal{B}_{ij} 𝜀^i 𝜀^j$
> - $v = v^k e_k$
> - $w = w^l e_l$
>
> Then
> - $s = \mathcal{B}(v,w)$
> - $s = \mathcal{B}_{ij} 𝜀^i 𝜀^j (v^k e_k , w^l e_l)$
> - $s = \mathcal{B}_{ij} 𝜀^i(v^k e_k) 𝜀^j(w^l e_l)$
> - $s = \mathcal{B}_{ij} v^k w^l 𝜀^i(e_k) 𝜀^j(e_l)$
> - $s = \mathcal{B}_{ij} v^k w^l 𝛿^i_k 𝛿^j_l$
> - $s = \mathcal{B}_{ij} v^i w^j$

> [!expand]- Simple (using covector-covector pairs)
> Given
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Bilinear Map Definition",
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
>       "- $\\mathcal{B} = \\tilde{\\mathcal{B}}_{ij} 𝜀̃^i 𝜀̃^j$\n- $\\mathcal{B} = \\mathcal{B}_{ij} 𝜀^i 𝜀^j$",
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
>       "Then start with the definition of bilinear form 𝐵:\n- $\\mathcal{B} = \\mathcal{B}_{ij} 𝜀^i 𝜀^j$\n\nNext, transform all the basis vectors and basis covectors individually\n- $\\mathcal{B} = \\mathcal{B}_{ij} F^i_k 𝜀̃^k F^j_l 𝜀̃^l$\n- $\\mathcal{B} = \\mathcal{B}_{ij} F^i_k F^j_l 𝜀̃^k 𝜀̃^l$\n\nThus:\n- $\\tilde{\\mathcal{B}}_{kl} = \\mathcal{B}_{ij} F^i_k F^j_l$",
>       "Then start with the definition of bilinear form 𝐵:\n- $\\mathcal{B} = \\tilde{\\mathcal{B}}_{ij} 𝜀̃^i 𝜀̃^j$\n\nNext, transform all the basis vectors and basis covectors individually\n- $\\mathcal{B} = \\tilde{\\mathcal{B}}_{ij} B^i_k 𝜀^k B^j_l 𝜀^l$\n- $\\mathcal{B} = \\tilde{\\mathcal{B}}_{ij} B^i_k B^j_l 𝜀^k 𝜀^l$\n\nThus\n- $\\mathcal{B}_{kl} = \\tilde{\\mathcal{B}}_{ij} B^i_k B^j_l$"
>     ]
>   ]
> }
> ```
````
^excerpt
