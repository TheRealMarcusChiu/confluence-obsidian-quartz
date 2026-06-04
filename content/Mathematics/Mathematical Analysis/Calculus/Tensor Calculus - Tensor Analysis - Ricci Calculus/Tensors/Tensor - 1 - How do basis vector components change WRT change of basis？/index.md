---
title: "Tensor - 1 - How do basis vector components change WRT change of basis？"
created: 2023-08-01T22:55:48.584-05:00
modified: 2023-08-01T22:57:21.678-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
We define:
- old basis: {𝑒<sub>1</sub>, 𝑒<sub>2</sub>}
- new basis: {𝑒̃<sub>1</sub>, 𝑒̃<sub>2</sub>}

We define:
- forward transform: old basis → new basis
	- 
	    ```merge-table
	    {
	      "rows": [
	        [
	          "- 𝑒̃<sub>1</sub> = 𝑎·𝑒<sub>1</sub>+ 𝑏·𝑒<sub>2</sub>\n- 𝑒̃<sub>2</sub> = 𝑐·𝑒<sub>1</sub>+ 𝑑·𝑒<sub>2</sub>",
	          "$\\begin{bmatrix} e_1 & e_2 \\end{bmatrix} \\begin{bmatrix} a & c \\\\ b & d \\end{bmatrix} = \\begin{bmatrix} ẽ_1 & ẽ_2 \\end{bmatrix}$"
	        ]
	      ]
	    }
	    ```
- backward transform: new basis → old basis
	- 
	    ```merge-table
	    {
	      "rows": [
	        [
	          "- 𝑒<sub>1</sub> = 𝑎·𝑒̃<sub>1</sub>+ 𝑏·𝑒̃<sub>2</sub>\n- 𝑒<sub>2</sub> = 𝑐·𝑒̃<sub>1</sub>+ 𝑑·𝑒̃<sub>2</sub>",
	          "$\\begin{bmatrix} ẽ_1 & ẽ_2 \\end{bmatrix} \\begin{bmatrix} e & g \\\\ f & h \\end{bmatrix} = \\begin{bmatrix} e_1 & e_2 \\end{bmatrix}$"
	        ]
	      ]
	    }
	    ```

Forward transform is the inverse of Backward transform
- $\begin{bmatrix} e_1 & e_2 \end{bmatrix} \begin{bmatrix} a & c \\ b & d \end{bmatrix} = \begin{bmatrix} ẽ_1 & ẽ_2 \end{bmatrix}$
- $\begin{bmatrix} ẽ_1 & ẽ_2 \end{bmatrix} \begin{bmatrix} e & g \\ f & h \end{bmatrix} \begin{bmatrix} a & c \\ b & d \end{bmatrix} = \begin{bmatrix} ẽ_1 & ẽ_2 \end{bmatrix}$

Thus
- $ẽ_j = \sum_{i=1}^n F_{ij} e_i$
- $e_j = \sum_{i=1}^n B_{ij} ẽ_i$

Confirming the inverse behavior of the above equations
- $e_j = \sum_{i=1}^n B_{ij} ẽ_i$
- $e_j = \sum_{i=1}^n B_{ij} \sum_{k=1}^n F_{ki} e_k$
- $e_j = \sum_{k=1}^n \sum_{i=1}^n B_{ij} F_{ki} e_k$
- $e_j = \sum_{k=1}^n 𝛿_{jk} e_k$

Thus 𝛿<sub>𝑖𝑗</sub> is the [[Kronecker Delta Function／Symbol|kronecker delta function]]:
- $𝛿_{jk} = \sum_{i=1}^n B_{ij} F_{ki}$
````
^excerpt
