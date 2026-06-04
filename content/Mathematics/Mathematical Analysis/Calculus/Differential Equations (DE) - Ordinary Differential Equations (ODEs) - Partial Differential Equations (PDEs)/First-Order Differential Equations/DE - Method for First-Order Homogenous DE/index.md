---
title: "DE - Method for First-Order Homogenous DE"
created: 2021-09-13T05:25:09.360-05:00
modified: 2021-09-13T05:25:09.360-05:00
parent: "[[First-Order Differential Equations]]"
children: []
---
###### Method for First-Order Homogenous Differential Equations
- solves first-order differential equations that is neither separable nor linear but is homogenous
- idea is to turn a (<em>non-linear non-separable homogenous differential equation</em>) into a (separable one)

### Method

given a first-order homogenous differential equation
- 𝑑𝑦/𝑑𝑥 = 𝐹(𝑦/𝑥)

let 𝑣 = 𝑦/𝑥, thus:
- 𝑦 = 𝑣𝑥
- (𝑑/𝑑𝑥)𝑦 = (𝑑/𝑑𝑥)𝑣𝑥
- (𝑑𝑦/𝑑𝑥) = (𝑑/𝑑𝑥)𝑣𝑥
- (𝑑𝑦/𝑑𝑥) = (𝑣𝑥)'
- (𝑑𝑦/𝑑𝑥) = 𝑣 + 𝑥·(𝑑𝑣/𝑑𝑥) <font style="color: rgb(128,128,128);">\# </font>[[Product Rule - Quotient Rule|product rule]]

now substitute \[𝑣 = 𝑦/𝑥\] and \[(𝑑𝑦/𝑑𝑥) = 𝑣 + 𝑥·(𝑑𝑣/𝑑𝑥)\] into differential equation
- 𝑑𝑦/𝑑𝑥 = 𝐹(𝑦/𝑥)
- 𝑣 + 𝑥·(𝑑𝑣/𝑑𝑥) = 𝐹(𝑣)
- 𝑥·(𝑑𝑣/𝑑𝑥) = 𝐹(𝑣) - 𝑣
- 𝑥/𝑑𝑥 = \[𝐹(𝑣) - 𝑣\] / 𝑑𝑣

then integrate both sides

replace 𝑣 with 𝑦/𝑥 and then solve for 𝑦
