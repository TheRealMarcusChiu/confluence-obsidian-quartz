---
title: "Geometric Distribution vs Binomial Distribution"
created: 2021-11-07T23:14:41.166-06:00
modified: 2021-11-07T23:22:09.510-06:00
parent: "[[Probability Distribution - UPD Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Geometric Distribution]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Binomial Distribution]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝐏(𝑋=𝑥; 𝑝) = (1−𝑝)<sup>𝑥−1</sup>𝑝",
      "𝐏(𝐗=𝑥; 𝑛,𝑝) = [𝑛!/𝑥!(𝑛-𝑥)!] * 𝑝<sup>𝑥</sup> * (1-𝑝)<sup>(𝑛-𝑥)</sup>"
    ],
    [
      "- 𝐏(𝑋=𝑛; 𝑝) = (1−𝑝)<sup>𝑛−1</sup>𝑝",
      "- 𝐏(𝐗=1; 𝑛,𝑝) = \\[𝑛!/1!(𝑛-1)!\\] \\* 𝑝<sup>1</sup> \\* (1-𝑝)<sup>(𝑛-1)</sup>\n- 𝐏(𝐗=1; 𝑛,𝑝) = 𝑛 (1-𝑝)<sup>𝑛-1</sup>𝑝\n- 𝐏(𝐗=1; 𝑛,𝑝) = 𝑛 𝐏(𝑋=𝑛; 𝑝)"
    ],
    [
      "order matters → lower probability",
      "order does not matter → higher probability"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```
