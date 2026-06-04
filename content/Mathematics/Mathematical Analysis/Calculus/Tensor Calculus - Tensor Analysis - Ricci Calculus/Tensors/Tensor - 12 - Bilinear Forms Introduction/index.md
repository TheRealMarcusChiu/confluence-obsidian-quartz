---
title: "Tensor - 12 - Bilinear Forms Introduction"
created: 2023-08-02T01:05:58.680-05:00
modified: 2023-08-02T20:42:11.199-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
METRIC TENSOR ALGEBRAIC PROPERTIES
- 𝑔: 𝑉⨯𝑉 → ℝ
- 𝑎·𝑔(𝑣,𝑤) = 𝑔(𝑎·𝑣,𝑤) = 𝑔(𝑣,𝑎·𝑤) <font style="color: rgb(122,134,154);">\# simplified</font>
- 𝑔(𝑣+𝑢,𝑤) = 𝑔(𝑣,𝑤) + 𝑔(𝑢,𝑤)
- 𝑔(𝑣,𝑤+𝑢) = 𝑔(𝑣,𝑤) + g(𝑣,𝑢)
- 𝑔(𝑣,𝑤) = 𝑔(𝑤,𝑣)
- 𝑔(𝑣,𝑣) = ||𝑣||<sup>2</sup> ≥ 0

BILINEAR FORM DEFINITION
- 𝐵: 𝑉⨯𝑉 → ℝ
- 𝑎·𝐵(𝑣,𝑤) = 𝐵(𝑎·𝑣,𝑤) = 𝐵(𝑣,𝑎·𝑤)
- 𝐵(𝑣+𝑢,𝑤) = 𝐵(𝑣,𝑤) + 𝐵(𝑢,𝑤)
- 𝐵(𝑣,𝑤+𝑢) = 𝐵(𝑣,𝑤) + 𝐵(𝑣,𝑢)

thus bilinear forms are (0,2)-tensors:
- $\tilde{\mathcal{B}}_{ij} = F^k_i F^l_j \mathcal{B}_{kl}$
- $\mathcal{B}_{ij} = B^k_i B^l_j \tilde{\mathcal{B}}_{kl}$

FORMS are functions that take vectors as input and output a field
- the linear form takes in 1 vector
- the bilinear forms take in 2 vectors

BILINEAR FORMS
- are linear combinations of covector-covector pairs
	- $\mathcal{B} = \mathcal{B}_{ij} 𝜀^i 𝜀^j$

###### How do Bilinear Form components Change WRT change of Basis?

see: [[Tensor - 13 - How do Bilinear Form Components Change WRT Change of Basis]]
###### Why a row of rows?
- $\begin{bmatrix} 𝛼_1 & 𝛼_2 \end{bmatrix} \otimes \begin{bmatrix} 𝛽_1 & 𝛽_2 \end{bmatrix}$
- $\begin{bmatrix} \begin{bmatrix} 𝛼_1 & 𝛼_2 \end{bmatrix} 𝛽_1 & \begin{bmatrix} 𝛼_1 & 𝛼_2 \end{bmatrix} 𝛽_2 \end{bmatrix}$
- $\begin{bmatrix} \begin{bmatrix} 𝛼_1𝛽_1 & 𝛼_2𝛽_1 \end{bmatrix} & \begin{bmatrix} 𝛼_1𝛽_2 & 𝛼_2𝛽_2 \end{bmatrix} \end{bmatrix}$

Bilinear Forms V⨯𝑉 → ℝ:
- $\mathcal{B}(v,w) → \mathcal{B}_{ij} v^i w^j = \begin{bmatrix} v^1 & v^2 \end{bmatrix} \begin{bmatrix} \mathcal{B}_{11} & \mathcal{B}_{12} \\ \mathcal{B}_{21} & \mathcal{B}_{22} \end{bmatrix} \begin{bmatrix} w^1 \\ w^2 \end{bmatrix}$
- $\mathcal{B}(v,w) → \begin{bmatrix} \begin{bmatrix} \mathcal{B}_{11} & \mathcal{B}_{12} \end{bmatrix} \begin{bmatrix} \mathcal{B}_{21} & \mathcal{B}_{22} \end{bmatrix} \end{bmatrix} \begin{bmatrix} v^1 \\ v^2 \end{bmatrix} \begin{bmatrix} w^1 \\ w^2 \end{bmatrix}$
- $\mathcal{B}(v,w) → \begin{bmatrix} \begin{bmatrix} \mathcal{B}_{11} & \mathcal{B}_{12} \end{bmatrix} v^1 + \begin{bmatrix} \mathcal{B}_{21} & \mathcal{B}_{22} \end{bmatrix} v^2 \end{bmatrix} \begin{bmatrix} w^1 \\ w^2 \end{bmatrix}$
- $\mathcal{B}(v,w) → \begin{bmatrix} \begin{bmatrix} \mathcal{B}_{11}v^1 & \mathcal{B}_{12}v^1 \end{bmatrix} + \begin{bmatrix} \mathcal{B}_{21}v^2 & \mathcal{B}_{22}v^2 \end{bmatrix} \end{bmatrix} \begin{bmatrix} w^1 \\ w^2 \end{bmatrix}$
- $\mathcal{B}(v,w) → \begin{bmatrix} \mathcal{B}_{11}v^1 + \mathcal{B}_{21}v^2 & \mathcal{B}_{12}v^1 + \mathcal{B}_{22}v^2 \end{bmatrix} \begin{bmatrix} w^1 \\ w^2 \end{bmatrix}$
- $\mathcal{B}(v,w) → \mathcal{B}_{11}v^1w^1 + \mathcal{B}_{21}v^2w^1 + \mathcal{B}_{12}v^1w^2 + \mathcal{B}_{22}v^2w^2$
- $\mathcal{B}(v,w) → \mathcal{B}_{ij}v^iw^j$

###### Basis of a Bilinear Form

{𝜀<sup>1</sup>𝜀<sup>1</sup>,  𝜀<sup>1</sup>𝜀<sup>2</sup>,  𝜀<sup>2</sup>𝜀<sup>1</sup>,  𝜀<sup>2</sup>𝜀<sup>2</sup>} is one possible basis for bilinear form 𝐵: ℝ<sup>2</sup>→ℝ where:
- $𝜀^1𝜀^1 = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix}1 & \begin{bmatrix} 1 & 0 \end{bmatrix}0 \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} & \begin{bmatrix} 0 & 0 \end{bmatrix} \end{bmatrix}$
- $𝜀^1𝜀^2 = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix}0 & \begin{bmatrix} 1 & 0 \end{bmatrix}1 \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} 0 & 0 \end{bmatrix} & \begin{bmatrix} 1 & 0 \end{bmatrix} \end{bmatrix}$
- $𝜀^2𝜀^1 = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} 0 & 1 \end{bmatrix}1 & \begin{bmatrix} 0 & 1 \end{bmatrix}0 \end{bmatrix} = \begin{bmatrix} \begin{bmatrix} 0 & 1 \end{bmatrix} & \begin{bmatrix} 0 & 0 \end{bmatrix} \end{bmatrix}$

Thus
- 𝐵 = 𝐵<sup>1</sup><sub>1</sub>𝜀<sup>1</sup>𝜀<sup>1</sup>+ 𝐵<sup>1</sup><sub>2</sub>𝜀<sup>1</sup>𝜀<sup>2</sup> + 𝐵<sup>2</sup><sub>1</sub>𝜀<sup>2</sup>𝜀<sup>1</sup> + 𝐵<sup>2</sup><sub>2</sub>𝜀<sup>2</sup>𝜀<sup>2</sup>
- 𝐵 = 𝐵<sup>𝑖</sup><sub>𝑗</sub> 𝜀<sup>𝑖</sup>𝜀<sup>𝑗</sup> <font style="color: rgb(122,134,154);">\# Einstein's notation</font>

Thus: bilinear forms can be written as linear combinations of covector-covector pairs
###### How is a Basis 𝜀<sup>𝑖</sup>𝜀<sup>𝑗</sup> a Bilinear Form (That Eats 2 Vectors and Outputs a Scalar)?

```merge-table
{
  "rows": [
    [
      "Given:\n- 𝐵 = 𝐵<sup>𝑖</sup><sub>𝑗</sub> 𝜀<sup>𝑖</sup>𝜀<sup>𝑗</sup>\n- 𝑣 = 𝑣<sup>𝑘</sup>𝑒<sub>𝑘</sub>\n- 𝑤 = 𝑤<sup>𝑙</sup>𝑒<sub>𝑙</sub>\n\nLet 𝐵 eat a vectors 𝑣 and 𝑤:\n- 𝐵(𝑣,𝑤) = 𝐵(𝑣,𝑤)\n- 𝐵(𝑣,𝑤) = 𝐵<sup>𝑖</sup><sub>𝑗</sub> 𝜀<sup>𝑖</sup>𝜀<sup>𝑗</sup>(𝑣<sup>𝑘</sup>𝑒<sub>𝑘</sub>𝑤<sup>𝑙</sup>𝑒<sub>𝑙</sub>)\n- 𝐵(𝑣,𝑤) = 𝐵<sup>𝑖</sup><sub>𝑗</sub>𝑣<sup>𝑘</sup>𝑤<sup>𝑙</sup>𝜀<sup>𝑖</sup>(𝑒<sub>𝑘</sub>) 𝜀<sup>𝑗</sup>(𝑒<sub>𝑙</sub>)\n- 𝐵(𝑣,𝑤) = 𝐵<sup>𝑖</sup><sub>𝑗</sub>𝑣<sup>𝑘</sup>𝑤<sup>𝑙</sup>𝛿<sup>𝑖</sup><sub>𝑘</sub>𝛿<sup>𝑗</sup><sub>𝑙</sub>\n- 𝐵(𝑣,𝑤) = 𝐵<sup>𝑖</sup><sub>𝑗</sub>𝑣<sup>𝑖</sup>𝑤<sup>𝑗</sup><font style=\"color: rgb(122,134,154);\">\\# 𝐵<sup>𝑖</sup><sub>𝑗</sub>𝑣<sup>𝑖</sup>𝑤<sup>𝑗</sup>is a scalar</font>",
      "- $B(v,w) = \\begin{bmatrix} \\begin{bmatrix} B^1_1 & B^1_2 \\end{bmatrix} & \\begin{bmatrix} B^2_1 & B^2_2 \\end{bmatrix} \\end{bmatrix} \\begin{bmatrix} v^1 \\\\ v^2 \\end{bmatrix} \\begin{bmatrix} w^1 \\\\ w^2 \\end{bmatrix}$\n- $B(v,w) = \\begin{bmatrix} \\begin{bmatrix} B^1_1 & B^1_2 \\end{bmatrix} v^1 + \\begin{bmatrix} B^2_1 & B^2_2 \\end{bmatrix} v^2 \\end{bmatrix} \\begin{bmatrix} w^1 \\\\ w^2 \\end{bmatrix}$\n- $B(v,w) = \\begin{bmatrix} \\begin{bmatrix} B^1_1v^1 & B^1_2v^1 \\end{bmatrix} + \\begin{bmatrix} B^2_1v^2 & B^2_2v^2 \\end{bmatrix} \\end{bmatrix} \\begin{bmatrix} w^1 \\\\ w^2 \\end{bmatrix}$\n- $B(v,w) = \\begin{bmatrix} B^1_1v^1 + B^2_1v^2 & B^1_2v^1 + B^2_2v^2 \\end{bmatrix} \\begin{bmatrix} w^1 \\\\ w^2 \\end{bmatrix}$\n- $B(v,w) = (B^1_1v^1 + B^2_1v^2)w^1 + (B^1_2v^1 + B^2_2v^2)w^2$\n- $B(v,w) = B^1_1v^1w^1 + B^2_1v^2w^1 + B^1_2v^1w^2 + B^2_2v^2w^2$\n\nWhich is a scalar\n- $B(v,w) = B^i_jv^iw^j$"
    ]
  ]
}
```
````
^excerpt
