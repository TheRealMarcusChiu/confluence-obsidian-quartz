---
title: "Transpose - What Does it Have to Do With Matrices？"
created: 2024-01-10T13:47:20.435-06:00
modified: 2024-01-10T21:03:54.079-06:00
parent: "[[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation]]"
children: []
---
If the linear transformation 𝐿:𝑉→𝑊 is represented by a matrix 𝐴, then the [[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation|transpose]] of this linear transformation 𝐿<sup>T</sup>:𝑊\*→𝑉\* is represented by the [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|transpose of matrix]][[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|𝐴]][[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|denoted as (𝐴T)]].

BUT WHY?
# Explanation
###### SETUP

Let:
- 𝐿:𝑉→𝑊 be a linear transformation
- 𝑒<sub>𝑣</sub> = {𝑒<sub>𝑣1</sub>, 𝑒<sub>𝑣2</sub>, ..., 𝑒<sub>𝑣𝑛</sub>} be the basis vectors for vector space 𝑉
- 𝑒<sub>𝑤</sub> = {𝑒<sub>𝑤1</sub>, 𝑒<sub>𝑤2</sub>, ..., 𝑒<sub>𝑤𝑚</sub>} be the basis vectors for vector space 𝑊

Thus:
- $[L]_{e_v}^{e_w} = A$

Let:
- 𝐿<sup>T</sup>:𝑊\*→𝑉\* be the transpose of 𝐿
- 𝑒<sub>𝑣</sub>\* = {𝑒<sub>𝑣1</sub>\*, 𝑒<sub>𝑣2</sub>\*, ..., 𝑒<sub>𝑣𝑛</sub>\*} be the basis vectors for the dual vector space 𝑉\*
- 𝑒<sub>𝑤</sub>\* = {𝑒<sub>𝑤1</sub>\*,  𝑒<sub>𝑤2</sub>\*, ..., 𝑒<sub>𝑤𝑚</sub>\*} be the basis vectors for the dual vector space 𝑊\*

where:
- $e_{vi}^*(e_{vj}) = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i ≠ j \\ \end{cases}$
- $e_{wi}^*(e_{wj}) = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i ≠ j \\ \end{cases}$

Then:
- $[L^T]_{e_{w}^*}^{e_{v}^*} = A^T$

###### STATEMENT TO PROVE

Given a matrix 𝐴 that represents a linear transformation 𝐿:𝑉→𝑊, show how the resulting transpose of 𝐿 is simply represented by flipping matrix 𝐴 around its diagonal.
###### PROOF

If 𝑣\*∊𝑉\*, then:
- 𝑣\* = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑣\*(𝑒<sub>𝑣𝑖</sub>) 𝑒<sub>𝑣𝑖</sub>\*\] <font style="color: rgb(122,134,154);">\# the vector 𝑣\* can be represented as a linear combination of 𝑉\* basis vectors {𝑒<sub>𝑣1</sub>\*, 𝑒<sub>𝑣2</sub>\*, ..., 𝑒<sub>𝑣𝑛</sub>\*}</font>

Since 𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*) ∊ V\* then:
- 𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*)(𝑒<sub>𝑣𝑖</sub>) 𝑒<sub>𝑣𝑖</sub>\*\] <font style="color: rgb(122,134,154);">\# replace 𝑣\* with 𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*)</font>
- 𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[<font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font><font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font><font style="color: rgb(255,102,0);">)</font> 𝑒<sub>𝑣𝑖</sub>\*\]  <font style="color: rgb(122,134,154);">\# 𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*)(𝑒<sub>𝑣𝑖</sub>) = 𝑒<sub>𝑤𝑗</sub>\*(𝐿(𝑒<sub>𝑣𝑖</sub>)) by definition of [[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation|transpose]]</font>
	- <font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font> = 𝛴<sub>1≤𝑘≤𝑚</sub>\[𝐴<sub>𝑘𝑖</sub> 𝑒<sub>𝑤𝑘</sub>\] <font style="color: rgb(122,134,154);">\# by definition of matrix 𝐴 the basis vector 𝑒<sub>𝑣𝑖</sub>gets mapped to a linear combination of 𝑊's basis vectors {𝑒<sub>𝑤1</sub>, 𝑒<sub>𝑤2</sub>, ..., 𝑒<sub>𝑤𝑚</sub>}</font>
	- <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font><font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font><font style="color: rgb(255,102,0);">)</font> = <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font>𝛴<sub>1≤𝑘≤𝑚</sub>\[𝐴<sub>𝑘𝑖</sub> 𝑒<sub>𝑤𝑘</sub>\]<font style="color: rgb(255,102,0);">)</font> <font style="color: rgb(122,134,154);">\# given a dual basis vector </font><font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*</font><font style="color: rgb(122,134,154);">∊𝑊\* let it consume both sides</font>
	- <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font><font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font><font style="color: rgb(255,102,0);">)</font> = 𝛴<sub>1≤𝑘≤𝑚</sub>\[𝐴<sub>𝑘𝑖</sub> <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(<font style="color: rgb(51,51,51);">𝑒</font></font><sub>𝑤𝑘</sub><font style="color: rgb(255,102,0);">)<font style="color: rgb(51,51,51);">\] <font style="color: rgb(122,134,154);">\# since 𝑒<sub>𝑤𝑗</sub>\* is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] </font></font></font>
	- <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font><font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font><font style="color: rgb(255,102,0);">)</font><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"> = </font></font>\[𝐴<sub>1𝑖</sub> <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(<font style="color: rgb(51,51,51);">𝑒</font></font><sub>𝑤1</sub><font style="color: rgb(255,102,0);">)<font style="color: rgb(51,51,51);">\] + ... + </font></font>\[𝐴<sub>𝑗𝑖</sub> <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(<font style="color: rgb(51,51,51);">𝑒</font></font><sub>𝑤𝑗</sub><font style="color: rgb(255,102,0);">)<font style="color: rgb(51,51,51);">\] + ... + </font></font>\[𝐴<sub>𝑚𝑖</sub> <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(<font style="color: rgb(51,51,51);">𝑒</font></font><sub>𝑤𝑚</sub><font style="color: rgb(255,102,0);">)<font style="color: rgb(51,51,51);">\]</font></font>
	- <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font><font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font><font style="color: rgb(255,102,0);">)</font><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"> = </font></font>\[𝐴<sub>1𝑖</sub>\*0<font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">\] + ... + </font></font>\[𝐴<sub>𝑗𝑖</sub><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">\*1\] + ... + </font></font>\[𝐴<sub>𝑚𝑖</sub><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">\*0\]</font></font>
	- <font style="color: rgb(255,102,0);">𝑒<sub>𝑤𝑗</sub>\*(</font><font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font><font style="color: rgb(255,102,0);">)</font><font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);"> = </font></font>𝐴<sub>𝑗𝑖</sub>
- 𝐿<sup>T</sup>(𝑒<sub>𝑤𝑗</sub>\*) = 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝐴<sub>𝑗𝑖</sub> 𝑒<sub>𝑣𝑖</sub>\*\] <font style="color: rgb(122,134,154);">\# the basis vector 𝑒<sub>𝑤𝑗</sub>\* gets mapped to a linear combination of 𝑉\*'s basis vectors {𝑒<sub>𝑣1</sub>\*, 𝑒<sub>𝑣2</sub>\*, ..., 𝑒<sub>𝑣𝑛</sub>\*}</font>

Which is the reverse of the given:
- <font style="color: rgb(51,153,102);">𝐿(𝑒<sub>𝑣𝑖</sub>)</font> = 𝛴<sub>1≤𝑘≤𝑚</sub>\[𝐴<sub>𝑘𝑖</sub> 𝑒<sub>𝑤𝑘</sub>\]

# Resources
- [Dr Peyam - Transpose Definition](https://www.youtube.com/watch?v=DA0cnhpSFok&list=PLJb1qAQIrmmCs0fJDQnXgeuyFR8iQDwLV&index=4)
