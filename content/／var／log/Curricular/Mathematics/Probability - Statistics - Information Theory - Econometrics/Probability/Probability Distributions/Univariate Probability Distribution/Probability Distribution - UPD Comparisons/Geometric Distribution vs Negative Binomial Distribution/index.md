---
title: "Geometric Distribution vs Negative Binomial Distribution"
created: 2021-11-08T00:32:56.397-06:00
modified: 2021-11-08T03:57:23.176-06:00
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
        "content": "[[Negative Binomial (Pascal) Distribution]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- 𝐏(𝑋=𝑥; 𝑝) = 𝐏{the 1<sup>𝑠𝑡</sup> success occurs on the 𝑥<sup>𝑡ℎ</sup> bernoulli trial}\n- 𝐏(𝑋=𝑥; 𝑝) = (1−𝑝)<sup>𝑥−1</sup>𝑝",
      "- 𝐏(𝑋=𝑥) = 𝐏{ the 𝑥<sup>𝑡ℎ</sup> trial results in the 𝑘<sup>𝑡ℎ</sup> success }\n- 𝐏(𝑋=𝑥) = 𝐏{ (𝑘-1) successes in the first (𝑥 - 1) trials AND the last trial is success }\n- 𝐏(𝑋=𝑥) = <font style=\"color: rgb(255,102,0);\">𝐏{ (𝑘-1) successes in the first (𝑥 - 1) trials}</font> <font style=\"color: rgb(0,128,0);\">𝐏{ the last trial is success }</font>\n- 𝐏(𝑋=𝑥) = <font style=\"color: rgb(255,102,0);\"><strong>\\[</strong>(𝑥-1) choose (𝑘-1)<strong>\\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘-1</sup></font><font style=\"color: rgb(0,128,0);\">𝑝</font>\n- 𝐏(𝑋=𝑥) = <strong>\\[</strong>(𝑥-1) [choose](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023326) (𝑘-1)<strong>\\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘</sup>\n- 𝐏(𝑋=𝑥) = <strong>\\[</strong>(𝑥-1)!/\\[(𝑘-1)!(𝑥-𝑘)!\\]<strong>\\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘</sup>"
    ],
    [
      "- 𝐏(𝑋=𝑥; 𝑝) = (1−𝑝)<sup>𝑥−1</sup>𝑝",
      "- 𝐏(𝑋=𝑥; 𝑝,𝑘=1) = <strong>\\[</strong>(𝑥-1)!/\\[(1-1)!(𝑥-1)!\\]<strong>\\]</strong> (1-𝑝)<sup>𝑥-1</sup>𝑝<sup>1</sup>\n- 𝐏(𝑋=𝑥; 𝑝,𝑘=1) = <strong>\\[</strong>(𝑥-1)!/(𝑥-1)!<strong>\\]</strong> (1-𝑝)<sup>𝑥-1</sup>𝑝\n- 𝐏(𝑋=𝑥; 𝑝,𝑘=1) = (1-𝑝)<sup>𝑥-1</sup>𝑝"
    ]
  ]
}
```
