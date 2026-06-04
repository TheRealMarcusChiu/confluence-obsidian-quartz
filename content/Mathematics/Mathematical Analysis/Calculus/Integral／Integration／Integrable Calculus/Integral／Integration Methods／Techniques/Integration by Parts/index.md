---
title: "Integration by Parts"
created: 2021-09-13T05:25:11.630-05:00
modified: 2026-05-21T04:16:57.692-05:00
parent: "[[Integral／Integration Methods／Techniques]]"
children: []
---
###### Integration by Parts
````excerpt
- is an [[Integral／Integration Methods／Techniques|integration technique]] by expanding the differential of a product of functions <code><font style="color: rgb(122,134,154);">𝑑(𝑢·𝑣)</font></code> and expressing the original integral in terms of a known integral <code><font style="color: rgb(122,134,154);">∫𝑣·𝑑𝑢</font></code>
````
^excerpt

# Definition/Intuition
Starts with [[Product Rule - Quotient Rule|product rule]]:
- <code><font style="color: rgb(122,134,154);">𝑑(𝑢·𝑣) = 𝑢·𝑑𝑣 + 𝑣·𝑑𝑢</font></code>

Next, integrate both sides:
- <code><font style="color: rgb(122,134,154);">∫𝑑(𝑢·𝑣) = ∫𝑢·𝑑𝑣 + ∫𝑣·𝑑𝑢</font></code>
- <code><font style="color: rgb(122,134,154);">𝑢·𝑣     = ∫𝑢·𝑑𝑣 + ∫𝑣·𝑑𝑢</font></code>

Rearranging yields:
- <code><font style="color: rgb(122,134,154);">∫𝑢·𝑑𝑣 = 𝑢·𝑣 - ∫𝑣·𝑑𝑢</font></code>

# Examples

> [!expand]- ∫𝑥·𝑐𝑜𝑠(𝑥)·𝑑𝑥
> consider integral <code><font style="color: rgb(122,134,154);">∫𝑥·𝑐𝑜𝑠(</font></code><code><font style="color: rgb(122,134,154);">𝑥)·</font></code><code><font style="color: rgb(122,134,154);">𝑑</font></code><code><font style="color: rgb(122,134,154);">𝑥</font></code> where:
> - <code><font style="color: rgb(122,134,154);">𝑢 = 𝑥</font></code>
> - 
> <code><font style="color: rgb(122,134,154);">𝑑𝑣 = 𝑐𝑜𝑠(𝑥)·𝑑𝑥
> </font></code>
> - 
> <code><font style="color: rgb(122,134,154);">𝑑𝑢 = 𝑑𝑥
> </font></code>
> - <code><font style="color: rgb(122,134,154);">𝑣 = 𝑠𝑖𝑛(𝑥)</font></code>
>
> so integration by parts gives:
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑐𝑜𝑠(𝑥)·𝑑𝑥 = 𝑥·𝑠𝑖𝑛(𝑥) - ∫𝑠𝑖𝑛(𝑥)·𝑑𝑥
>   </font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑐𝑜𝑠(𝑥)·𝑑𝑥 = 𝑥·𝑠𝑖𝑛(𝑥) - \[-𝑐𝑜𝑠(𝑥) ± 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡\]
>   </font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑐𝑜𝑠(𝑥)·𝑑𝑥 = 𝑥·𝑠𝑖𝑛(𝑥) + 𝑐𝑜𝑠(𝑥) ± 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡</font></code>
