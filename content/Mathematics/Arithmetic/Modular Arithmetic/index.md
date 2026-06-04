---
title: "Modular Arithmetic"
created: 2022-04-05T17:44:31.844-05:00
modified: 2022-04-05T21:28:52.487-05:00
parent: "[[Arithmetic]]"
children: []
---
# Congruence

For a positive integer 𝑛, the integers 𝑎 and 𝑏 are congruent 𝑚𝑜𝑑 𝑛 if their remainders when divided by 𝑛 are the same.
> [!info]
> 52 ≡ 24 (𝑚𝑜𝑑 7)
>
> As we can see above, 52 and 24 are congruent (𝑚𝑜𝑑 7) because:
> - 52 (𝑚𝑜𝑑 7) = 3
> - 24 (𝑚𝑜𝑑 7) = 3
>
> Note that = is different from ≡
# Properties of Addition in Modular Arithmetic
- If 𝑎 + 𝑏 = 𝑐, then 𝑎 (𝑚𝑜𝑑 𝑁) + 𝑏 (𝑚𝑜𝑑 𝑁) ≡ 𝑐 (𝑚𝑜𝑑 𝑁)
- If 𝑎 ≡ 𝑏 (𝑚𝑜𝑑 𝑁), then 𝑎 + 𝑘 ≡ 𝑏 + 𝑘 (𝑚𝑜𝑑 𝑁) for any integer 𝑘
- If 𝑎 ≡ 𝑏 (𝑚𝑜𝑑 𝑁) and 𝑐 ≡ 𝑑 (𝑚𝑜𝑑 𝑁), then 𝑎 + 𝑐 ≡ 𝑏 + 𝑑 (𝑚𝑜𝑑 𝑁)
- If 𝑎 ≡ 𝑏 (𝑚𝑜𝑑 𝑁), then -𝑎 ≡ −𝑏 (𝑚𝑜𝑑 𝑁)

# Properties of Multiplication in Modular Arithmetic
- If 𝑎⋅𝑏 = 𝑐, then 𝑎(𝑚𝑜𝑑 𝑁) ⋅ 𝑏(𝑚𝑜𝑑 𝑁) ≡ 𝑐(𝑚𝑜𝑑 𝑁).
- If 𝑎 ≡ 𝑏 (𝑚𝑜𝑑 𝑁), then 𝑘𝑎 ≡ 𝑘𝑏 (𝑚𝑜𝑑 𝑁) for any integer 𝑘
- If 𝑎 ≡ 𝑏 (𝑚𝑜𝑑 𝑁) and 𝑐 ≡ 𝑑 (𝑚𝑜𝑑 𝑁), then 𝑎𝑐 ≡ 𝑏𝑑 (𝑚𝑜𝑑 𝑁)

# Properties of Exponentiation in Modular Arithmetic
- If 𝑎 ≡ 𝑏 (𝑚𝑜𝑑 𝑁), then 𝑎<sup>𝑘</sup> ≡ 𝑏<sup>𝑘</sup> (𝑚𝑜𝑑 𝑁) for any positive integer 𝑘

# Properties of Division in Modular Arithmetic
- If 𝑔𝑐𝑑(𝑘,𝑁) = 1 and 𝑘𝑎 ≡ 𝑘𝑏 (𝑚𝑜𝑑 𝑁), then 𝑎  ≡ 𝑏 (𝑚𝑜𝑑 𝑁)

# Resources
- [https://brilliant.org/wiki/modular-arithmetic/#modular-arithmetic-exponentiation](https://brilliant.org/wiki/modular-arithmetic/#modular-arithmetic-exponentiation)
