---
title: "Markov Chain Property - Ergodic (Definition #2)"
created: 2025-09-15T01:59:04.790-05:00
modified: 2026-05-15T18:20:59.321-05:00
parent: "[[Markov Chain Property - Ergodic]]"
children: []
---
Based on: [https://www.youtube.com/watch?v=VCb2AMN87cg](https://www.youtube.com/watch?v=VCb2AMN87cg)
# Definition

𝑋(𝑡) is ergodic if time-average = ensemble-average

```merge-table
{
  "rows": [
    [
      {
        "content": "Time Average",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Ensemble Average",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[Markov Chain Property - Ergodic (Definition #2)/01-time-average.png]]$\\overline{X} = lim_{T \\rightarrow ∞} \\overline{X}_{T}$",
      "![[Markov Chain Property - Ergodic (Definition #2)/02-ensemble-average.png]]$\\langle X \\rangle = lim_{N \\rightarrow ∞} \\langle X \\rangle_{N}$"
    ]
  ]
}
```
# Birkhoff's Equality
- state variable 𝜔\[𝑡\] - configuration at time 𝑡
- state space 𝛺 - set of all possible configurations
- probability density function 𝑃(𝜔)
- observable 𝑥(𝑡) = 𝑓(𝜔\[𝑡\])
- dynamic 𝜔\[𝑡\] → 𝜔\[𝑡+1\]

If 𝜔\[𝑡\] eventually visits all of 𝛺 regardless of 𝜔\[0\], then Birkhoff's equality holds:
- $\underbrace{ lim_{T \rightarrow ∞} \frac{1}{T} \int_o^T f(\omega [t]) dt }_\text{average along a long trajectory} = \underbrace{ \int_𝛺 f(\omega)P(\omega) d\omega }_\text{average over all possible states}$

# Ergodics Examples

> [!expand-ui]- Trivial Sampling
> Trivial sampling: 𝑥<sub>𝑛</sub>(𝑡) \~ 𝑋 for all 𝑛 and 𝑡
>
> No dynamic dependence on initial condition.
>
> time-average and ensemble-average are constructed identically.
>
> ![[Markov Chain Property - Ergodic (Definition #2)/06-ergodic-example-1.png]]

> [!expand-ui]- Autoregressive Process
> Autoregressive process:$x_n(t+1) = \phi x_n(t) + \epsilon(t)$
>
> with:$|\phi| < 1$
>
> This process have weak path dependence. Forgets initial condition over time
>
> ![[Markov Chain Property - Ergodic (Definition #2)/07-ergodic-example-2.png]]
# Ergodic Non-Examples

> [!expand-ui]- Non-Example #1
> Initial time-step a bag contains 1 red ball and 1 green ball. At each following time-step randomly pick one ball in bag, then add that ball and a copy of it back into the bag.
>
> ![[Markov Chain Property - Ergodic (Definition #2)/08-ergodic-non-example-1a.png|301]]
>
> This has strong path dependence - as early times steps strongly affects "ball fraction" and slowly wears off over time.
>
> Below shows an ensemble of 5 independent runs in which the 5 time averages are NOT equal. Only the green time-average is equal to the ensemble-average which equals 0.5.
>
> ![[Markov Chain Property - Ergodic (Definition #2)/09-ergodic-non-example-1b.png]]

> [!expand-ui]- Non-Example #2
> Random multiplicative growth ("equation of life")$x_n(t+1) = \begin{cases} 1.5x_n(t) & \text{if $p = 0.5$} \\ 0.6x_n(t) & \text{if $p = 0.5$} \\ \end{cases}$
>
> The ensemble-average clearly goes up over time, while almost all the individual time-averages goes down.
>
> ![[Markov Chain Property - Ergodic (Definition #2)/11-ergodic-non-example-2b.png]]
