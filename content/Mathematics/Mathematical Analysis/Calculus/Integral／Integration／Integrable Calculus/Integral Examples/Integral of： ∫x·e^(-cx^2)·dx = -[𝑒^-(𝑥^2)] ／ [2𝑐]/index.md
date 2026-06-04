---
title: "Integral of： ∫x·e^(-cx^2)·dx = -[𝑒^-(𝑥^2)] ／ [2𝑐]"
created: 2021-11-21T04:21:35.934-06:00
modified: 2021-11-21T04:38:00.891-06:00
parent: "[[Integral Examples]]"
children: []
---
Integrating <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥^2</sup>·𝑑𝑥</font></code>
# Methods

> [!expand-ui]- Substitution (𝑐=1)
> Take the integral of:
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑥^2</sup>·𝑑𝑥</font></code>
>
> For the integrand <code><font style="color: rgb(122,134,154);">𝑥·𝑒<sup>-𝑥^2</sup></font></code>, substitute 𝑢 = -𝑥<sup>2</sup> and 𝑑𝑢 = -2𝑥·𝑑𝑥
> - <font style="color: rgb(122,134,154);font-family: SFMono-Medium , "SF Mono" , "Segoe UI Mono" , "Roboto Mono" , "Ubuntu Mono" , Menlo , Courier , monospace;letter-spacing: 0.0px;">-(1/2)∫𝑒</font><sup>𝑢</sup><font style="color: rgb(122,134,154);font-family: SFMono-Medium , "SF Mono" , "Segoe UI Mono" , "Roboto Mono" , "Ubuntu Mono" , Menlo , Courier , monospace;letter-spacing: 0.0px;">·𝑑𝑢</font>
> - <code><font style="color: rgb(122,134,154);">-(1/2)𝑒<sup>𝑢</sup></font></code>
> - <font style="color: rgb(122,134,154);font-family: SFMono-Medium , "SF Mono" , "Segoe UI Mono" , "Roboto Mono" , "Ubuntu Mono" , Menlo , Courier , monospace;letter-spacing: 0.0px;">-(<code><font style="color: rgb(122,134,154);">𝑒<sup>𝑢</sup></font></code>/2)</font>
>
> Un-substitute
> - <code><font style="color: rgb(122,134,154);">-(<font style="color: rgb(122,134,154);">𝑒<sup>-𝑥^2</sup></font>/2)</font></code>

> [!expand-ui]- Substitution (𝑐=?)
> Take the integral of:
> - <code><font style="color: rgb(122,134,154);">∫𝑥·𝑒<sup>-𝑐𝑥^2</sup>·𝑑𝑥</font></code>
>
> For the integrand <code><font style="color: rgb(122,134,154);">𝑥·𝑒<sup>-𝑐𝑥^2</sup></font></code>, substitute 𝑢 = -𝑐𝑥<sup>2</sup> and 𝑑𝑢 = -2𝑐𝑥·𝑑𝑥
> - <font style="color: rgb(122,134,154);">-(1/2𝑐)∫𝑒<sup>𝑢</sup>·𝑑𝑢</font>
> - <code><font style="color: rgb(122,134,154);">-(1/2𝑐)𝑒<sup>𝑢</sup></font></code>
> - <font style="color: rgb(122,134,154);">-(<code>𝑒<sup>𝑢</sup></code>/2𝑐)</font>
>
> Un-substitute
> - <code><font style="color: rgb(122,134,154);">-(𝑒<sup>-𝑥^2</sup>/2𝑐)</font></code>
