---
title: "Negative Binomial Distribution vs Binomial Distribution"
created: 2021-11-08T00:20:39.148-06:00
modified: 2021-11-08T04:49:17.436-06:00
parent: "[[Probability Distribution - UPD Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Negative Binomial (Pascal) Distribution]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Binomial Distribution]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "- 𝐏(𝑋=𝑥; 𝑝,𝑘) = 𝐏{ the 𝑥<sup>𝑡ℎ</sup> Bernoulli trial results in the 𝑘<sup>𝑡ℎ</sup> success }\n- 𝐏(𝑋=𝑥; 𝑝,𝑘) = 𝐏{ (𝑘-1) successes in the first (𝑥-1) Bernoulli trials AND the last Bernoulli trial is success }\n- 𝐏(𝑋=𝑥; 𝑝,𝑘) = <font style=\"color: rgb(255,102,0);\">𝐏{ (𝑘-1) successes in the first (𝑥-1) trials }</font> <font style=\"color: rgb(0,128,0);\">𝐏{ the last trial is success }</font>\n- 𝐏(𝑋=𝑥; 𝑝,𝑘) = <font style=\"color: rgb(255,102,0);\">𝐏(𝐗=𝑘-1; 𝑝,𝑛=𝑥-1)</font> <font style=\"color: rgb(0,128,0);\">𝐏(𝑋=𝑥)<font style=\"color: rgb(122,134,154);\"> \\# where:</font></font>\n\t- \n\t\t- \n\t\t\t- \n\t\t\t\t- <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(255,102,0);\">𝐏(𝐗=𝑘-1; 𝑝,𝑛=𝑥-1)<font style=\"color: rgb(122,134,154);\"> is a Binomial Distribution</font></font></font>\n\t\t\t\t- <font style=\"color: rgb(0,128,0);\">𝐏(𝑋=𝑥)<font style=\"color: rgb(122,134,154);\"> is a Bernoulli Distribution</font></font>\n- 𝐏(𝑋=𝑥; 𝑝,𝑘) = <font style=\"color: rgb(255,102,0);\"><strong>\\[</strong>(𝑥-1) choose (𝑘-1)<strong>\\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘-1</sup></font><font style=\"color: rgb(0,128,0);\">𝑝</font>\n- 𝐏(𝑋=𝑥; 𝑝,𝑘) = <strong>\\[</strong>(𝑥-1) [choose](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023326) (𝑘-1)<strong>\\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘</sup>\n- 𝐏(𝑋=𝑥; 𝑝,𝑘) = <strong>\\[</strong>(𝑥-1)!/\\[(𝑘-1)!(𝑥-𝑘)!\\]<strong>\\]</strong> (1-𝑝)<sup>𝑥-𝑘</sup>𝑝<sup>𝑘</sup>",
      "- 𝐏(𝐗=𝑥; 𝑝,𝑛) = 𝐏{ exactly 𝑥 success in 𝑛 Bernoulli trials }\n- 𝐏(𝐗=𝑥; 𝑝,𝑛) = \\[[𝑛 choose 𝑥](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023326)\\] \\* prob-of-𝑥-success \\* prob-of-(𝑛-𝑥)-failures\n- 𝐏(𝐗=𝑥; 𝑝,𝑛) = \\[𝑛!/(𝑥!(𝑛-𝑥)!\\] (1-𝑝)<sup>𝑛-𝑥</sup>𝑝<sup>𝑥</sup>"
    ],
    [
      "Let 𝑋=𝑛\n- 𝐏(𝑋=𝑛; 𝑝,𝑘) = <strong>\\[</strong>(𝑛-1)!/\\[(𝑘-1)!(𝑛-𝑘)!\\]<strong>\\]</strong> (1-𝑝)<sup>𝑛-𝑘</sup>𝑝<sup>𝑘</sup>\n- 𝐏(𝑋=𝑛; 𝑝,𝑘) = (𝑘/𝑛) 𝐏(𝐗=𝑘; 𝑝,𝑛) <font style=\"color: rgb(122,134,154);\">\\# substitute Binomial Distribution</font>",
      "Let 𝐗=𝑘\n- 𝐏(𝐗=𝑘; 𝑝,𝑛) = \\[𝑛!/(𝑘!(𝑛-𝑘)!\\] (1-𝑝)<sup>𝑛-𝑘</sup>𝑝<sup>𝑘</sup>\n- 𝐏(𝐗=𝑘; 𝑝,𝑛) = (𝑛/𝑘) 𝐏(𝑋=𝑛; 𝑝,𝑘) <font style=\"color: rgb(122,134,154);\">\\# substitute Negative Binomial Distribution</font><font style=\"color: rgb(122,134,154);\"><sup></sup></font>"
    ],
    [
      "Example Bernoulli trials for NBD 𝑥=10 and 𝑘=4:\n- 🔲 ⬛️ 🔲 ⬛️ 🔲 ⬛️ 🔲 🔲 🔲 ⬛️\n- 🔲 🔲 ⬛️ ⬛️ 🔲 🔲 ⬛️ 🔲 🔲 ⬛️\n- ⬛️ 🔲 🔲 ⬛️ ⬛️ 🔲 🔲 🔲 🔲 ⬛️\n- 🔲 🔲 ⬛️ ⬛️ ⬛️ 🔲 🔲 🔲 🔲 ⬛️\n\nNOTE: that every tenth box is black (e.g. success)",
      "Example Bernoulli trials for BD 𝑛=10 and 𝑥=4:\n- 🔲 ⬛️ 🔲 ⬛️ 🔲 ⬛️ 🔲 🔲 ⬛️ 🔲\n- 🔲 🔲 ⬛️ ⬛️ 🔲 🔲 ⬛️ 🔲 🔲 ⬛️\n- ⬛️ 🔲 🔲 ⬛️ ⬛️ 🔲 🔲 🔲 ⬛️ 🔲\n- 🔲 🔲 ⬛️ ⬛️ ⬛️ ⬛️ 🔲 🔲 🔲 🔲\n\nNOTE: that the tenth box doesn't need to be black (e.g. success)"
    ]
  ]
}
```
