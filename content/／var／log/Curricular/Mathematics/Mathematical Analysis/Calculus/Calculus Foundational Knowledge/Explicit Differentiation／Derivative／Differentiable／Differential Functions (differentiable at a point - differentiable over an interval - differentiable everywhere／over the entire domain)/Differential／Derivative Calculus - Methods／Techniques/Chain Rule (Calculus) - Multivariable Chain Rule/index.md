---
title: "Chain Rule (Calculus) - Multivariable Chain Rule"
created: 2021-09-13T05:25:07.138-05:00
modified: 2023-12-18T22:01:36.558-06:00
parent: "[[Differential／Derivative Calculus - Methods／Techniques]]"
children: []
---
# Chain Rule - Intuition

Given <font style="color: rgb(128,128,128);">𝒽(𝑥)</font> = <font style="color: rgb(51,153,102);">𝑓(</font><font style="color: rgb(255,153,0);">𝑔(𝑥)</font><font style="color: rgb(51,153,102);">)</font>, then

> [!indent]
> ![[Chain Rule (Calculus) - Multivariable Chain Rule/chain-rule.png|301]]

# Example

Suppose we want to compute the derivative of a [[Composite Functions - Function Composition|composite function]] <font style="color: rgb(128,128,128);">𝒽(𝑥)</font>

<font style="color: rgb(128,128,128);">𝒽(𝑥)</font> = <font style="color: rgb(51,153,102);">(</font><font style="color: rgb(255,153,0);">5 - 6𝑥</font><font style="color: rgb(51,153,102);">)<sup>5</sup></font>
- <font style="color: rgb(255,153,0);">𝑔(𝑥) = <font style="color: rgb(255,153,0);">5 - 6</font><font style="color: rgb(255,153,0);">𝑥</font></font>
- <font style="color: rgb(51,153,102);">𝑓(𝑥) = <font style="color: rgb(51,153,102);">𝑥<sup>5</sup></font></font>
- <font style="color: rgb(128,0,128);">𝑔'(𝑥) = -6</font>
- <font style="color: rgb(0,204,255);">𝑓'(𝑥) = 5𝑥<sup>4</sup></font>

Apply chain rule
- 𝑑/𝑑𝑥\[<font style="color: rgb(128,128,128);">𝒽(𝑥)</font>\] = 𝑑/𝑑𝑥\[<font style="color: rgb(51,153,102);">𝑓(</font><font style="color: rgb(255,153,0);">𝑔(𝑥)</font><font style="color: rgb(51,153,102);">)</font>\]
- 𝑑/𝑑𝑥\[<font style="color: rgb(128,128,128);">𝒽(𝑥)</font>\] = <font style="color: rgb(0,204,255);">𝑓'(<font style="color: rgb(255,153,0);">𝑔(𝑥)</font>) </font>\*<font style="color: rgb(0,204,255);"> <font style="color: rgb(128,0,128);">𝑔'(𝑥)</font></font>
- 𝑑/𝑑𝑥\[<font style="color: rgb(128,128,128);">𝒽(𝑥)</font>\] = <font style="color: rgb(0,204,255);">5(<font style="color: rgb(255,153,0);">5 - 6</font><font style="color: rgb(255,153,0);">𝑥</font>)</font><sup>4</sup> \* <font style="color: rgb(128,0,128);">-6</font>
- 𝑑/𝑑𝑥\[<font style="color: rgb(128,128,128);">𝒽(𝑥)</font>\] = -30(5 - 6𝑥)<sup>4</sup>

# Multivariable Chain Rule
- $\frac{d}{dt}f(\overrightarrow{v}(t)) = \nabla f(\overrightarrow{v}(t)) · \overrightarrow{v'}(t)$

where:
- 𝑓 is a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]]
- 𝛻𝑓 is the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|gradient]] vector of 𝑓
- 𝑣̅(𝑡) is a [[Vector-Valued Functions - Vector Fields|vector-valued function]] (can be a vector of size 1)
- · is the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]]

This is similar to the definition of a [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|directional derivative]]
# Examples

> [!expand-ui]- Scalar-Valued Function of 1 Variable
> Given a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]] 𝑓 that takes one variable 𝑥 where it is dependent on 𝑡:
> - $\frac{d}{dt} f(x(t)) = \begin{bmatrix} \frac{𝛿f}{𝛿x} \end{bmatrix} · \begin{bmatrix} \frac{𝛿x}{𝛿t} \end{bmatrix}$
> - $\frac{d}{dt} f(x(t)) = \frac{𝛿f}{𝛿x}\frac{𝛿x}{𝛿t}$

> [!expand-ui]- Scalar-Valued Function of 2 Variables
> Given a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]] 𝑓 that takes two variables 𝑥 and 𝑦 where they are dependent on 𝑡:
> - $\frac{d}{dt} f(x(t), y(t)) = \begin{bmatrix} \frac{𝛿f}{𝛿x} \\ \frac{𝛿f}{𝛿y} \\ \end{bmatrix} · \begin{bmatrix} \frac{𝛿x}{𝛿t} \\ \frac{𝛿y}{𝛿t} \\ \end{bmatrix}$
> - $\frac{d}{dt} f(x(t), y(t)) = \frac{𝛿f}{𝛿x}\frac{𝛿x}{𝛿t} + \frac{𝛿f}{𝛿y}\frac{𝛿y}{𝛿t}$
>
> ![[Chain Rule (Calculus) - Multivariable Chain Rule/multivariable-chain-rule-example.png|600x157]]
> [[multivariable-chain-rule-example.drawio]]
