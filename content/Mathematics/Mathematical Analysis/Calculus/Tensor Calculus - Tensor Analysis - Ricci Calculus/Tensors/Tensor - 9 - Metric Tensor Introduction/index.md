---
title: "Tensor - 9 - Metric Tensor Introduction"
created: 2023-08-02T00:02:50.451-05:00
modified: 2023-08-02T12:39:15.046-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
Metric Tensors
- are invariant to change of basis
- measures: length & angle

###### Length

> [!expand]- Click here to expand...
> - ||𝑣||<sup>2</sup> = 𝑣·𝑣
> - ||𝑣||<sup>2</sup> = (𝑣<sup>1</sup>𝑒<sub>1</sub>+ 𝑣<sup>2</sup>𝑒<sub>2</sub>)·(𝑣<sup>1</sup>𝑒<sub>1</sub>+ 𝑣<sup>2</sup>𝑒<sub>2</sub>)
> - ||𝑣||<sup>2</sup> = (𝑣<sup>1</sup>·𝑣<sup>1</sup>)(𝑒<sub>1</sub>·𝑒<sub>1</sub>) + 2(𝑣<sup>1</sup>·𝑣<sup>2</sup>)(𝑒<sub>2</sub>·𝑒<sub>2</sub>) + (𝑣<sup>2</sup>·𝑣<sup>2</sup>)(𝑒<sub>2</sub>·𝑒<sub>2</sub>)
>
> ```merge-table
> {
>   "rows": [
>     [
>       "$g_{e_i} = \\begin{bmatrix} e_1·e_1 & e_1·e_2\\\\ e_2·e_1 & e_2·e_2 \\end{bmatrix}_{e_i}$",
>       "$g_{ẽ_i} = \\begin{bmatrix} ẽ_1·ẽ_1 & ẽ_1·ẽ_2\\\\ ẽ_2·ẽ_1 & ẽ_2·ẽ_2 \\end{bmatrix}_{ẽ_i}$"
>     ],
>     [
>       "- ||𝑣||<sup>2</sup> = 𝑣<sup>𝑖</sup>𝑣<sup>𝑗</sup>(𝑒<sub>𝑖</sub>·𝑒<sub>𝑗</sub>) = 𝑣<sup>𝑖</sup>𝑣<sup>𝑗</sup>𝑔<sub>𝑖𝑗</sub>\n- (𝑒<sub>𝑖</sub>·𝑒<sub>𝑗</sub>) = 𝑔<sub>𝑖𝑗</sub>",
>       "- ||𝑣||<sup>2</sup> = 𝑣̃<sup>𝑖</sup>𝑣̃<sup>𝑗</sup>(𝑒̃<sub>𝑖</sub>·𝑒̃<sub>𝑗</sub>) = 𝑣̃<sup>𝑖</sup>𝑣̃<sup>𝑗</sup>𝑔̃<sub>𝑖𝑗</sub>\n- (𝑒̃<sub>𝑖</sub>·𝑒̃<sub>𝑗</sub>) = 𝑔̃<sub>𝑖𝑗</sub>"
>     ]
>   ]
> }
> ```
###### Angles

> [!expand]- Click here to expand...
> ###### Say we have Unit Vectors
>
> ```merge-table
> {
>   "rows": [
>     [
>       "![[Tensor - 9 - Metric Tensor Introduction/metric-tensor-angle.drawio.png|225]]\n[[metric-tensor-angles.drawio]]",
>       "- 𝑒̃<sub>1</sub> = 𝑒<sub>1</sub>\n- 𝑒̃<sub>2</sub> = 𝑐𝑜𝑠(𝜃)·𝑒<sub>1</sub> + 𝑠𝑖𝑛(𝜃)·𝑒<sub>2</sub>\n\nthree possible combinations:\n- 𝑒̃<sub>1</sub>·𝑒̃<sub>1</sub> = 𝑒<sub>1</sub>·𝑒<sub>1</sub>= 1\n- 𝑒̃<sub>1</sub>·𝑒̃<sub>2</sub> = 𝑒<sub>1</sub>· (𝑐𝑜𝑠(𝜃)·𝑒<sub>1</sub> + 𝑠𝑖𝑛(𝜃)·𝑒<sub>2</sub>)\n\t- = 𝑐𝑜𝑠(𝜃)(𝑒<sub>1</sub>·𝑒<sub>1</sub>) + 𝑠𝑖𝑛(𝜃)(𝑒<sub>1</sub>·𝑒<sub>2</sub>)\n\t- = 𝑐𝑜𝑠(𝜃)\n- 𝑒̃<sub>2</sub>·𝑒̃<sub>2</sub> = (𝑐𝑜𝑠(𝜃)·𝑒<sub>1</sub> + 𝑠𝑖𝑛(𝜃)·𝑒<sub>2</sub>) · (𝑐𝑜𝑠(𝜃)·𝑒<sub>1</sub> + 𝑠𝑖𝑛(𝜃)·𝑒<sub>2</sub>)\n\t- = 𝑐𝑜𝑠(𝜃)<sup>2</sup>(𝑒<sub>1</sub>·𝑒<sub>1</sub>) + 𝑠𝑖𝑛(𝜃)<sup>2</sup>(𝑒<sub>2</sub>·𝑒<sub>2</sub>) + 2·𝑠𝑖𝑛(𝜃)·𝑐𝑜𝑠(𝜃)(𝑒<sub>1</sub>·𝑒<sub>2</sub>)\n\t- = 𝑐𝑜𝑠(𝜃)<sup>2</sup> + 𝑠𝑖𝑛(𝜃)<sup>2</sup>\n\t- = 1"
>     ]
>   ]
> }
> ```
>
> Thus:
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- 𝑒<sub>1</sub>·𝑒<sub>1</sub> = 1\n- 𝑒<sub>1</sub>·𝑒<sub>2</sub> = 0\n- 𝑒<sub>2</sub>·𝑒<sub>2</sub> = 1",
>       "- 𝑒̃<sub>1</sub>·𝑒̃<sub>1</sub> = 1\n- 𝑒̃<sub>1</sub>·𝑒̃<sub>2</sub> = 𝑐𝑜𝑠(𝜃)\n- 𝑒̃<sub>2</sub>·𝑒̃<sub>2</sub> = 1"
>     ],
>     [
>       "$g_{e_i} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}_{e_i}$",
>       "$g_{ẽ_i} = \\begin{bmatrix} 1 & cos(𝜃) \\\\ cos(𝜃) & 1 \\end{bmatrix}_{ẽ_i}$"
>     ]
>   ]
> }
> ```
> ###### Say We Have Arbitrary Vectors
>
> ```merge-table
> {
>   "rows": [
>     [
>       "![[Tensor - 9 - Metric Tensor Introduction/metric-tensors-angles-2.drawio.png|301]]\n[[metric-tensor-angles-2.drawio]]",
>       "First, define 2 new basis vectors {𝑒̃<sub>1</sub>, 𝑒̃<sub>2</sub>}:\n- 𝑒̃<sub>1</sub>·𝑒̃<sub>1</sub> = 1\n- 𝑒̃<sub>1</sub>·𝑒̃<sub>2</sub> = 𝑐𝑜𝑠(𝜃)\n- 𝑒̃<sub>2</sub>·𝑒̃<sub>2</sub> = 1\n\nThe metric tensor (𝑣·𝑤) is computed as:\n- (𝑣·𝑤) = (𝑎·𝑒̃<sub>1</sub>)·(𝑏·𝑒̃<sub>2</sub>)\n\t- = 𝑎𝑏·(𝑒̃<sub>1</sub>·𝑒̃<sub>2</sub>)\n\t- = 𝑎𝑏·𝑐𝑜𝑠(𝜃)\n\t- = ||𝑣||·||𝑤||·𝑐𝑜𝑠(𝜃)\n\nThus:\n- $\\frac{v·w}{||v|| \\; ||w||} = cos(𝜃)$"
>     ]
>   ]
> }
> ```
>
> The angle between 2 vectors can be computed entirely by the metric tensor
> - (𝑣·𝑤) = (𝑣<sup>1</sup>·𝑒<sub>1</sub> + 𝑣<sup>2</sup>·𝑒<sub>2</sub>) · (𝑤<sup>1</sup>·𝑒<sub>1</sub> + 𝑤<sup>2</sup>·𝑒<sub>2</sub>)
> 	- = (𝑣<sup>1</sup>·𝑒<sub>1</sub> + 𝑣<sup>2</sup>·𝑒<sub>2</sub>) · (𝑤<sup>1</sup>·𝑒<sub>1</sub> + 𝑤<sup>2</sup>·𝑒<sub>2</sub>)
> 	- = 𝑣<sup>1</sup>𝑤<sup>1</sup>(𝑒<sub>1</sub>·𝑒<sub>1</sub>) + 𝑣<sup>1</sup>𝑤<sup>2</sup>(𝑒<sub>1</sub>·𝑒<sub>2</sub>) + 𝑣<sup>2</sup>𝑤<sup>1</sup>(𝑒<sub>2</sub>·𝑒<sub>1</sub>) + 𝑣<sup>2</sup>𝑤<sup>2</sup>(𝑒<sub>2</sub>·𝑒<sub>2</sub>)
> 	- = 𝑣<sup>1</sup>𝑤<sup>1</sup>𝑔<sub>1</sub><sub>1</sub> + 𝑣<sup>1</sup>𝑤<sup>2</sup>𝑔<sub>1</sub><sub>2</sub> + 𝑣<sup>2</sup>𝑤<sup>1</sup>𝑔<sub>21</sub> + 𝑣<sup>2</sup>𝑤<sup>2</sup>𝑔<sub>2</sub><sub>2</sub>
> 	- = 𝑣<sup>𝑖</sup>𝑤<sup>𝑗</sup>𝑔<sub>𝑖𝑗</sub>
###### Lengths & Angles Summary
- 𝑣·𝑣  = ||𝑣||<sup>2</sup>                 = 𝑣<sup>𝑖</sup>𝑣<sup>𝑗</sup> 𝑔<sub>𝑖𝑗</sub>
- 𝑤·𝑤 = ||𝑤||<sup>2</sup>                = 𝑤<sup>𝑖</sup>𝑤<sup>𝑗</sup> 𝑔<sub>𝑖𝑗</sub>
- 𝑣·𝑤  = ||𝑣|| ||𝑤|| 𝑐𝑜𝑠(𝜃) = 𝑣<sup>𝑖</sup>𝑤<sup>𝑗</sup> 𝑔<sub>𝑖𝑗</sub>
- $\frac{v·w}{||v|| \; ||w||} = cos(𝜃)$

###### Components of a Metric Tensor
- 𝑔<sub>𝑖𝑗</sub> = 𝑒<sub>𝑖</sub>·𝑒<sub>𝑗</sub> = 𝑒<sub>𝑗</sub>·𝑒<sub>𝑖</sub>= 𝑔<sub>𝑗𝑖</sub>

Thus the metric tensor is a symmetric matrix
###### Metric Tensor Algebraic Properties
- 𝑔: 𝑉⨯𝑉 → ℝ
- multiplication
	- 𝑎·(𝑣<sup>𝑖</sup>𝑤<sup>𝑗</sup>𝑔<sub>𝑖𝑗</sub>) = (𝑎·𝑣<sup>𝑖</sup>)𝑤<sup>𝑗</sup>𝑔<sub>𝑖𝑗</sub> = 𝑣<sup>𝑖</sup>(𝑎·𝑤<sup>𝑗</sup>)𝑔<sub>𝑖𝑗</sub>
	- 𝑎·𝑔(𝑣,𝑤) = 𝑔(𝑎·𝑣,𝑤) = 𝑔(𝑣,𝑎·𝑤) <font style="color: rgb(122,134,154);">\# simplified</font>
- addition
	- 𝑔(𝑣+𝑢,𝑤) = 𝑔(𝑣,𝑤) + 𝑔(𝑢,𝑤)
	- 𝑔(𝑣,𝑤+𝑢) = 𝑔(𝑣,𝑤) + g(𝑣,𝑢)
- symmetric
	- 𝑔(𝑣,𝑤) = 𝑔(𝑤,𝑣)
- positive definite
	- 𝑔(𝑣,𝑣) = ||𝑣||<sup>2</sup> ≥ 0

Metric Tensors are a type of bilinear form with 2 additional properties:
- symmetric
- positive definite
````
^excerpt
