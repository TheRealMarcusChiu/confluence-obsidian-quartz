---
title: "Integral of： ∫x·e^-cx·dx = -[1／c2]·[e^(-𝑐𝑥)]·[𝑐𝑥 + 1]"
created: 2021-11-21T00:13:19.828-06:00
modified: 2021-11-21T04:39:05.803-06:00
parent: "[[Integral Examples]]"
children: []
---
Integrating <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥</font></code>
# Methods

> [!expand-ui]- Via Integration by Parts (𝑐=1)
> <code><font style="color: rgb(122,134,154);">∫𝑢·𝑑𝑣 = 𝑢·𝑣 - ∫𝑣·𝑑𝑢 </font></code><font style="color: rgb(122,134,154);"><font style="color: rgb(51,51,51);">\# see </font></font>[[Integration by Parts]]
> - <code><font style="color: rgb(122,134,154);">𝑢 = 𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">𝑑𝑣 = 𝑒<sup>-𝑥</sup>·𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">𝑑𝑢 = 𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">𝑣 = -𝑒<sup>-𝑥</sup></font></code>
>
> so integration by parts gives:
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑥</sup>·𝑑𝑥 = 𝑥·-𝑒<sup>-𝑥</sup> - ∫-𝑒<sup>-𝑥</sup>·𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑥</sup>·𝑑𝑥 = 𝑥·-𝑒<sup>-𝑥</sup> - 𝑒<sup>-𝑥</sup></font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑥</sup>·𝑑𝑥 = 𝑒<sup>-𝑥</sup>·(-𝑥 - 1)</font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑥</sup>·𝑑𝑥 = 𝑒<sup>-𝑥</sup>·(-𝑥 - 1)</font></code>

> [!expand-ui]- Via Integration by Parts (𝑐=?)
> <code><font style="color: rgb(122,134,154);">∫𝑢·𝑑𝑣 = 𝑢·𝑣 - ∫𝑣·𝑑𝑢 </font></code><font style="color: rgb(122,134,154);"><font style="color: rgb(51,51,51);">\# see </font></font>[[Integration by Parts]]
> - <code><font style="color: rgb(122,134,154);">𝑢 = 𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">𝑑𝑣 = 𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">𝑑𝑢 = 𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">𝑣 = -(1/𝑐)𝑒<sup>-𝑐𝑥</sup></font></code>
>
> so integration by parts gives:
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥 = 𝑥·-(1/𝑐)𝑒<sup>-𝑐𝑥</sup> - ∫-(1/𝑐)𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥 = 𝑥·-(1/𝑐)𝑒<sup>-𝑐𝑥</sup> - (1/𝑐)∫-𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥</font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥 = 𝑥·-(1/𝑐)𝑒<sup>-𝑐𝑥</sup> - (1/𝑐)(1/𝑐)𝑒<sup>-𝑐𝑥</sup></font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥 = 𝑥·-(𝑐/𝑐<sup>2</sup>)𝑒<sup>-𝑐𝑥</sup> - (1/𝑐<sup>2</sup>)𝑒<sup>-𝑐𝑥</sup></font></code>
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥</sup>·𝑑𝑥 = -(1/𝑐<sup>2</sup>)𝑒<sup>-𝑐𝑥</sup>·(𝑐𝑥 + 1)</font></code>
