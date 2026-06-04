---
title: "BE／VE Algorithm - Operator Types"
created: 2021-09-13T05:28:22.095-05:00
modified: 2021-09-13T05:28:22.095-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
````excerpt
<strong>𝛱 product-combination</strong> - merges 2 factors into 1 factor

> [!expand]- Click here to expand...
> 𝐹(𝐴,𝐵)𝐹(𝐵,𝐶) = 𝐹(𝐴,𝐵,𝐶)
>
> ![[BE／VE Algorithm - Operator Types/factor-product-combination.png]]<strong>𝛴 sum-marginalization</strong> - "sum out" a variable over ALL values in that variable's domain

> [!expand]- Click here to expand...
> 𝛴<sub>𝑐∊𝐶</sub>𝐹(𝐴,𝐵,𝐶=𝑐) = 𝐹(𝐴,𝐵)
>
> ![[BE／VE Algorithm - Operator Types/factor-summation.png|301]]<strong>𝑚𝑎𝑥 max-marginalization</strong> - "max-out" a variable over ALL values in that variable's domain

> [!expand]- Click here to expand...
> 𝑚𝑎𝑥<sub>𝑐∊𝐶</sub>𝐹(𝐴,𝐵,𝐶=𝑐) = 𝐹(𝐴,𝐵)
>
> ![[BE／VE Algorithm - Operator Types/factor-maximization.png|301]]

<strong>𝛴 evidence-instantiation/<strong>reduction</strong></strong> - over SINGLE value in variable domain (used for variable instantiation when given evidence)

> [!expand]- Click here to expand...
> 𝐹(𝐴,𝐵,𝐶=𝑐1) = 𝐹(𝐴,𝐵)
>
> ![[BE／VE Algorithm - Operator Types/factor-reduction-instantiation .png|301]]
````
^excerpt
