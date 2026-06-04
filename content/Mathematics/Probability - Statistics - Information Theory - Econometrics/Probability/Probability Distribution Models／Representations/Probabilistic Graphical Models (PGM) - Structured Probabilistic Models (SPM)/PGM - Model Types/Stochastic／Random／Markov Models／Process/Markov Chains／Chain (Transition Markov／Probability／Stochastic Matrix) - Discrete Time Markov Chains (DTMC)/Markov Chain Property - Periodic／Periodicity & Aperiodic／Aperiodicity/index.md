---
title: "Markov Chain Property - Periodic／Periodicity & Aperiodic／Aperiodicity"
created: 2021-09-13T05:27:05.914-05:00
modified: 2022-06-20T01:24:03.005-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Aperiodic",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Periodic",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] is <strong>aperiodic</strong> if for all 𝑎 ∊ {𝑠𝑡𝑎𝑡𝑒-𝑠𝑝𝑎𝑐𝑒}:\n- 𝑔𝑐𝑑{𝑡 : 𝑃(𝑋<sub>𝑡</sub>=𝑎|𝑋<sub>0</sub>=𝑎) \\> 0} = 1\n\nIn other words, the [[Greatest／Highest Common Divisor／Denominator／Factor (GCD - GCF - HCF)|greatest common denominator]] of all 𝑡's is 1, where each 𝑡 satisfies:\n- 𝑃(𝑋<sub>𝑡</sub>=𝑎|𝑋<sub>0</sub>=𝑎) \\> 0\n\nTherefore, 𝑡 is aperiodic",
      "a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chain]] is <strong>periodic</strong> if for all 𝑎 ∊ {𝑠𝑡𝑎𝑡𝑒-𝑠𝑝𝑎𝑐𝑒}:\n- 𝑔𝑐𝑑{𝑡 : 𝑃(𝑋<sub>𝑡</sub>=𝑎|𝑋<sub>0</sub>=𝑎) \\> 0} \\> 1"
    ],
    [
      "![[Markov Chain Property - Periodic／Periodicity & Aperiodic／Aperiodicity/markov-chain-example-aperiodic.png|301]]",
      "below shows a periodic Markov chain, where the [[Greatest／Highest Common Divisor／Denominator／Factor (GCD - GCF - HCF)|GCD]] is 2.\n\nAssume we start at state 𝑎. at this point 𝑡=0 which is even:\n- 𝑡 is always EVEN at states: 𝑎, 𝑐, 𝑒\n- 𝑡 is always ODD at states: 𝑏, 𝑑, 𝑓\n\n![[Markov Chain Property - Periodic／Periodicity & Aperiodic／Aperiodicity/markov-chain-example.png|301]]"
    ]
  ],
  "tableStyle": "width: 70.8175%;"
}
```
