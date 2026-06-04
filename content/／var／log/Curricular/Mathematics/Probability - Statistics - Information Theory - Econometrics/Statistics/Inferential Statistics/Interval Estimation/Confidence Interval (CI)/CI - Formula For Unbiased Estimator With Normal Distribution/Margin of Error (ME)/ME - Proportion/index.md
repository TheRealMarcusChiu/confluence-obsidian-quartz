---
title: "ME - Proportion"
created: 2021-09-13T05:29:19.555-05:00
modified: 2021-09-13T05:29:19.555-05:00
parent: "[[Margin of Error (ME)]]"
children: []
---
### Margin of Error (ME) for Proportion

𝑀𝐸 = 𝑧 · 𝑠𝑞𝑟𝑡\[𝑝(1 - 𝑝) / 𝑛\]

where:
- 𝑧 - z-score
- 𝑝 - is the proportion
- 𝑛 - is the number of samples

### Rearrange for 𝑛

𝑛 = (𝑧/𝑀𝐸)<sup>2</sup> 𝑝(1 - 𝑝)
### Example Use Case

> [!expand]- Click here to expand...
> the margin of error we desire is 𝑀𝐸 = 0.02, and for 95% confidence we use 𝑍 = 1.96. probability of success 𝑝 = 0.5.
>
> What should be the size of our [Monte Carlo study](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=10945892)?
>
> first how did we get 𝑍 = 1.96 from 95% confidence?
> - 𝛼 = 1 - 0.95 = 0.05
> - 0.05 / 2 = 0.025
> - 1 - 0.025 = 0.975
> - in Standard Normal Distribution, the area = 0.975 when 𝑥 = 1.96
>
> therefore, 𝑍 = 1.96
> - 𝑛 = (𝑍/𝑀𝐸)<sup>2</sup> 𝑝(1 - 𝑝)
> - 𝑛 = (1.96/0.02)<sup>2</sup> 0.5(1 - 0.5)
> - 𝑛 = (1.96/0.02)<sup>2</sup> / 4
> - 𝑛 = 2401
>
> therefore our Monte Carlo study should be of size 2401
