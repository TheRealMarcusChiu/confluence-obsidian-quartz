---
title: "Interactions Effects"
created: 2020-10-12T14:17:38.481-05:00
modified: 2020-10-12T14:19:35.221-05:00
parent: "[[Parametric Regression (PR) Analysis]]"
children: []
---
###### Interactions Effects
- interaction effects occur when the effect of one regressor depends on the value of another regressor
- for example, the relationship between condiments and enjoyment probably depends on the food-type:
	- enjoyment = condiment + food-type
<br>
- in simple models we assess the relationship between each independent variable and the dependent variable. This kind of an effect is called a main effect. However, it can be a mistake to assess only main effects
- in more complex study areas, the independent variables might interact with each other. Interaction effects indicate that a third variable influences the relationship between an independent and dependent variable

convert
- enjoyment = condiment + food-type

to
- enjoyment = 𝜃·condiment + 𝜃·food-type + 𝜃·condiment\*food-type

where:
- condiment\*food-type - is the interacting term

When you have statistically significant interaction effects, you can’t interpret the main effects without considering the interactions
### Interacting Effect Order
- 2-way interaction
- 3-way interaction
- N-way interaction

### Resources
- [https://statisticsbyjim.com/regression/interaction-effects/](https://statisticsbyjim.com/regression/interaction-effects/)
