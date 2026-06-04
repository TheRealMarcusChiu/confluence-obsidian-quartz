---
title: "DE - Method of Integrating Factor"
created: 2021-09-13T05:25:09.626-05:00
modified: 2021-09-13T05:25:09.626-05:00
parent: "[[First-Order Differential Equations]]"
children: []
---
###### Method of Integrating Factor
- is used to solve a first-order differential equation that <font style="color: rgb(128,0,0);">CANNOT</font> be written in a Separable DE form
- though it can work on:
	- first-order separable differential equations
	- first-order constant coefficient differential equations

### Method of Integrating Factor

given a first-order differential equation

> [!indent]
> 𝑦' + 𝑃(𝑥)𝑦 = 𝑓(𝑥)

we want to find an equation 𝑦 or set of equations that satisfies the differential equation above

> [!indent]
> 𝑦 = \[ ∫\[𝜇(𝑥)𝑓(𝑥)\]𝑑𝑥 \] / 𝜇(𝑥)

where:

> [!indent]
> 𝜇(𝑥) = 𝑒<sup>∫𝑃(𝑥)𝑑𝑥</sup>

derivation:

> [!expand]- Click here to expand...
> we choose an integrating factor
>
> > [!indent]
> 𝜇(𝑥)
>
> we multiply the integrating factor with the differential equation
>
> > [!indent]
> <font style="color: rgb(128,0,0);">𝜇(𝑥)𝑦' + 𝜇(𝑥)𝑃(𝑥)𝑦</font> = 𝜇(𝑥)𝑓(𝑥)
>
> let us recall the product rule
>
> > [!indent]
> (𝑢𝑦)' = <font style="color: rgb(0,128,0);">𝑢'𝑦 + 𝑢𝑦'</font>
>
> which then we can say
>
> > [!indent]
> ∫𝑢'𝑦 + 𝑢𝑦' = ∫(𝑢𝑦)' = 𝑢𝑦
>
> we need to find a 𝜇(𝑥) such that <font style="color: rgb(128,0,0);">𝜇(𝑥)𝑦' + 𝜇(𝑥)𝑃(𝑥)𝑦</font> would have the same form as <font style="color: rgb(0,128,0);">𝑢𝑦' + 𝑢'𝑦</font>. So we want
>
> > [!indent]
> <font style="color: rgb(0,128,0);">𝑢</font> = 𝜇(𝑥)
> > <font style="color: rgb(51,51,51);"><font style="color: rgb(0,128,0);">𝑢'</font> = <font style="color: rgb(128,0,0);">𝜇(𝑥)𝑃(𝑥)</font></font>
>
> <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">we know that</font></font>
>
> > [!indent]
> 𝑑<font style="color: rgb(0,128,0);">𝑢</font>/𝑑𝑥 = <font style="color: rgb(0,128,0);">𝑢'</font>
>
> thus
>
> > [!indent]
> 𝑑<font style="color: rgb(128,0,0);">𝜇(𝑥)<font style="color: rgb(51,51,51);">/𝑑𝑥 = </font>𝜇(𝑥)𝑃(𝑥)</font>
>
> this is separable, giving us:
>
> > [!indent]
> 𝑑<font style="color: rgb(128,0,0);">𝜇(𝑥)<font style="color: rgb(51,51,51);">/</font>𝜇(𝑥) = 𝑃(𝑥)<font style="color: rgb(51,51,51);">𝑑𝑥</font></font>
>
> <font style="color: rgb(128,0,0);">then we could integrate both sides:</font>
> - ∫𝑑𝜇(𝑥)/𝜇(𝑥) = ∫𝑃(𝑥)𝑑𝑥
> - 𝑙𝑛\[𝜇(𝑥)\] = ∫𝑃(𝑥)𝑑𝑥
> - 𝑒<sup>𝑙𝑛\[𝜇(𝑥)\]</sup> = 𝑒<sup>∫𝑃(𝑥)𝑑𝑥</sup>
> - 𝜇(𝑥) = 𝑒<sup>∫𝑃(𝑥)𝑑𝑥</sup>
>
> if we choose 𝜇(𝑥) to be of form 𝑒<sup>∫𝑃(𝑥)𝑑𝑥</sup> then ∫\[<font style="color: rgb(128,0,0);">𝜇(𝑥)𝑦' + 𝜇(𝑥)𝑃(𝑥)𝑦</font>\]𝑑𝑥 is equal to 𝜇(𝑥)𝑦. Thus:
> - <font style="color: rgb(128,0,0);">𝜇(𝑥)𝑦' + 𝜇(𝑥)𝑃(𝑥)𝑦</font> = 𝜇(𝑥)𝑓(𝑥)
> - ∫\[<font style="color: rgb(128,0,0);">𝜇(𝑥)𝑦' + 𝜇(𝑥)𝑃(𝑥)𝑦</font>\]𝑑𝑥 = ∫\[𝜇(𝑥)𝑓(𝑥)\]𝑑𝑥
> - 𝜇(𝑥)𝑦 = ∫\[𝜇(𝑥)𝑓(𝑥)\]𝑑𝑥
> - 𝑦 = \[∫\[𝜇(𝑥)𝑓(𝑥)\]𝑑𝑥\] / 𝜇(𝑥)
>
> Thus:
> - 𝑦 = \[∫\[𝜇(𝑥)𝑓(𝑥)\]𝑑𝑥\] / 𝜇(𝑥)
>
> where:
> - 𝜇(𝑥) = 𝑒<sup>∫𝑃(𝑥)𝑑𝑥</sup>
### Resources
- [TheLazyEngineer - YouTube](https://www.youtube.com/watch?v=UwaZkX-6P84&list=PLee24bbe4wKTdWQY7qEkc4fjTUcfs7Zgc&index=9&ab_channel=TheLazyEngineer)
- [TheLazyEngineer - YouTube (Example 1)](https://www.youtube.com/watch?v=bP6kuyeqlk4&list=PLee24bbe4wKTdWQY7qEkc4fjTUcfs7Zgc&index=10&ab_channel=TheLazyEngineer)
