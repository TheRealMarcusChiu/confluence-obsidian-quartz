---
title: "Probability vs Fuzzy Set／Logic"
created: 2021-09-13T05:26:32.369-05:00
modified: 2022-04-11T03:58:44.036-05:00
parent: "[[Probability Definition]]"
children: []
---
[[Fuzzy／Uncertain Set Theory|fuzzy sets]]/[[Fuzzy Logic|fuzzy logic]] are not just a clever disguise for [[Probability|probability]]/statistical models:
- <strong>probability</strong> - is the degree of belief (observed value is either true or false)
- <strong>fuzzy</strong> - is the degree of truth (truth is fuzzy, no longer black-and-white)

# Example

Let the set of all liquids be the universe of objects, and let fuzzy subset 𝐿 = {all drinkable liquids}. Suppose you were in a desert thirsting for a drink and you came upon two bottles:
- 𝐴 labeled with membership = 0.91
- 𝐵 labeled with probability = 0.91

Confronted with this pair of bottles and given that you must drink from the one that you choose, which would you choose to drink from first? Most readers familiar with the basic ideas of fuzzy sets, when presented with this experiment, immediately see that while 𝐴 could contain, say, swamp water, it would not (discounting the possibility of a Machiavellian fuzzy modeler) contain liquids such as hydrochloric acid. That is, a membership of 0.91 means that the contents of 𝐴 are “fairly similar” to perfectly drinkable liquids (pure water). On the other hand, the probability that 𝐵 is drinkable = 0.91 means that over a long run of experiments, the contents of 𝐵 are expected to be drinkable in about 91% of the trials; and the other 9%? In these cases, the contents will be unsavory (indeed, possibly deadly)-about one chance in ten. Thus most subjects will opt for a chance to drink swamp water and will choose bottle 𝐴.

Another facet of this example concerns the idea of observation. Continuing then, suppose that we examine the contents of 𝐴 and 𝐵, and discover that 𝐴 contains beer, while 𝐵 contains hydrochloric acid. After observation then, the membership value for 𝐴 will be unchanged, whilst the probability value for 𝐵 clearly drops from 0.91 to 0.0.

Finally, what would be the effect of changing the numerical information in this example? Suppose that the membership and probability values were both 0.5-would this influence your choice? Almost certainly it would. In this case, many observers would switch to bottle B, since it offers a 50% chance of being drinkable, whereas a membership value this low would presumably indicate a liquid unsuitable for drinking (this depends, of course, entirely on the MF of the fuzzy set 𝐿)
