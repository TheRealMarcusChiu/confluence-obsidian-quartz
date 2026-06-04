---
title: "Conditional Independence - (Decomposition, Contraction, Weak Union, Intersection) Rule"
created: 2021-09-13T05:28:38.759-05:00
modified: 2021-09-13T05:28:38.759-05:00
parent: "[[Probability Independence (Marginal Independence - Conditional Independence)]]"
children: []
---
see: [[Probability Independence (Marginal Independence - Conditional Independence)|Conditional Independence]]
###### decomposition rule: <font style="color: rgb(128,0,0);">𝑋⊥𝑌,𝑊 |</font><font style="color: rgb(128,0,0);">𝑍</font> ⇒ <font style="color: rgb(0,128,0);">𝑋⊥𝑌 |𝑍</font>

> [!expand]- proof
> from 𝑋⊥𝑌,𝑊|𝑍 we get:
> - 𝐏(𝑋,𝑌,𝑊|𝑍) = 𝐏(𝑋|𝑍)𝐏(𝑌,𝑊|𝑍)
>
> marginalize over 𝑊
> - ∑<sub>𝑊</sub>𝐏(𝑋,𝑌,𝑊|𝑍) = ∑<sub>𝑊</sub>𝐏(𝑋|𝑍)𝐏(𝑌,𝑊|𝑍)
> - 𝐏(𝑋,𝑌|𝑍) =𝐏(𝑋|𝑍)𝐏(𝑌|𝑍)
>
> thus
> - <font style="color: rgb(0,128,0);">𝑋</font><font style="color: rgb(0,128,0);">⊥</font><font style="color: rgb(0,128,0);">𝑌 |</font><font style="color: rgb(0,128,0);">𝑍</font>
###### contraction rule: <font style="color: rgb(128,0,0);">(𝑋⊥𝑌 |𝑍)∧(𝑋⊥𝑊 |𝑌,𝑍)</font> ⇒ <font style="color: rgb(0,128,0);">𝑋⊥𝑌,𝑊 |𝑍</font>

> [!expand]- proof
> by [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]:
> - 𝐏(𝑋,𝑌,𝑊 |𝑍) = 𝐏(𝑋|𝑌,𝑊,𝑍)𝐏(𝑌,𝑊 |𝑍)
>
> using the independence property 𝑋⊥𝑊 |𝑌,𝑍 we get:
> - 𝐏(𝑋,𝑌,𝑊 |𝑍) = 𝐏(𝑋|𝑌,𝑍) 𝐏(𝑌,𝑊 |𝑍)
>
> now use the independence property 𝑋⊥𝑌 |𝑍 to get:
> - 𝐏(𝑋,𝑌,𝑊 |𝑍) = 𝐏(𝑋|𝑍)𝐏(𝑌,𝑊 |𝑍)
>
> thus
> - <font style="color: rgb(0,128,0);">𝑋⊥𝑌,𝑊 |𝑍</font>
###### weak union rule: <font style="color: rgb(128,0,0);">𝑋⊥𝑌,𝑊 |</font><font style="color: rgb(128,0,0);">𝑍</font> ⇒ <font style="color: rgb(0,128,0);">𝑋⊥𝑌|𝑍,𝑊</font>

> [!expand]- proof
> by [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]]:
> - 𝐏(𝑋,𝑌 |𝑊,𝑍) = 𝐏(𝑋|𝑌,𝑊,𝑍)𝐏(𝑌 |𝑊,𝑍)
>
> using the independence property 𝑋⊥𝑌,𝑊 |𝑍 we get:
> - 𝐏(𝑋,𝑌 |𝑊,𝑍) = 𝐏(𝑋|𝑍)𝐏(𝑌 |𝑊,𝑍)
>
> using the decomposition property, we have 𝑋⊥𝑌,𝑊 |𝑍 ⇒ 𝑋⊥𝑊 |𝑍 which gives us 𝐏(𝑋|𝑍) = 𝐏(𝑋|𝑊,𝑍). Thus
> - 𝐏(𝑋,𝑌 |𝑊,𝑍) = 𝐏(𝑋|𝑍)𝐏(𝑌 |𝑊,𝑍)
> - 𝐏(𝑋,𝑌 |𝑊,𝑍) = 𝐏(𝑋|𝑊,𝑍)𝐏(𝑌 |𝑊,𝑍)
>
> thus
> - <font style="color: rgb(0,128,0);">𝑋</font><font style="color: rgb(0,128,0);">⊥</font><font style="color: rgb(0,128,0);">𝑌|</font><font style="color: rgb(0,128,0);">𝑍</font><font style="color: rgb(0,128,0);">,</font><font style="color: rgb(0,128,0);">𝑊</font>
###### intersection rule:<font style="color: rgb(128,0,0);font-weight: bold;"> (𝑋⊥𝑌∣𝑍,𝑊)∧(𝑋⊥𝑊∣𝑌,𝑍)</font> ⇒ <font style="color: rgb(0,128,0);font-weight: bold;">𝑋⊥𝑌,𝑊∣𝑍</font>

> [!expand]- Click here to expand...
> given the 2 independence properties (𝑋⊥𝑌∣𝑍,𝑊)∧(𝑋⊥𝑊∣𝑌,𝑍), we have
> - 𝐏(𝑋∣𝑍,𝑊) = 𝐏(𝑋∣𝑌,𝑍,𝑊) = 𝐏(𝑋∣𝑌,𝑍)
>
> Applying [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Rule]] to the first and last term of the above equation, we get:
> - 𝐏(𝑋,𝑊∣𝑍) / 𝐏(𝑊∣𝑍) = 𝐏(𝑋,𝑌∣𝑍) / 𝐏(𝑌∣𝑍)
>
> Thus,
> - 𝐏(𝑋,𝑊∣𝑍)𝐏(𝑌∣𝑍) =𝐏(𝑋,𝑌∣𝑍)𝐏(𝑊∣𝑍)
>
> Summing over 𝑊, we get:
> - ∑<sub>𝑊</sub>𝐏(𝑋,𝑊∣𝑍)𝐏(𝑌∣𝑍) = ∑<sub>𝑊</sub>𝐏(𝑋,𝑌∣𝑍)𝐏(𝑊∣𝑍)
>
> Thus,
> - 𝐏(𝑋∣𝑍)𝐏(𝑌∣𝑍) = 𝐏(𝑋,𝑌∣𝑍)
>
> This proves that 𝑋⊥𝑌 |𝑍
>
> Given 𝑋⊥𝑌 |𝑍 and (𝑋⊥𝑊 |𝑌,𝑍), we can now apply the contraction property to get <font style="color: rgb(0,128,0);">𝑋⊥𝑌,𝑊 |𝑍</font>
### Resource
- [https://math.stackexchange.com/questions/855002/what-does-the-decomposition-weak-union-and-contraction-rule-mean-for-conditiona](https://math.stackexchange.com/questions/855002/what-does-the-decomposition-weak-union-and-contraction-rule-mean-for-conditiona)
