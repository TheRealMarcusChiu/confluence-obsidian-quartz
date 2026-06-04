---
title: "Fluent Calculus"
created: 2021-09-13T04:44:27.677-05:00
modified: 2021-09-13T04:44:27.677-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children: []
---
forming more complex states and events by combining primitive ones. fluent calculus reifies combinations of fluents, not just individual fluents.
### Fluent Calculus - Syntax

2 events (𝑒<sub>1</sub> and 𝑒<sub>2</sub>) happening at same time are represented in the following ways:
- 𝑒<sub>1</sub> ◦ 𝑒<sub>2</sub>
- 𝐵𝑜𝑡ℎ(𝑒<sub>1</sub>, 𝑒<sub>2</sub>)

for example, to say <code><font style="color: rgb(128,128,128);">someone walked</font></code> and <code><font style="color: rgb(128,128,128);">chewed gum </font></code>at the same time:
- ∃𝑝,𝑖 \[𝑝 ∈ People\] ʌ \[𝑖 ∈ Time\] ʌ \[<code><font style="color: rgb(128,128,128);">Walk</font></code>(𝑝) ◦ <code><font style="color: rgb(128,128,128);">ChewGum</font></code>(𝑝)\]

the ◦ function is commutative and associative
