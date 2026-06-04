---
title: "Pairwise Independence／Independent vs Mutual／Collective Independence ／ Mutually Independent"
created: 2024-01-17T18:13:14.696-06:00
modified: 2024-01-17T23:03:55.171-06:00
parent: "[[Probability Independence]]"
children: []
---
Much of the confusion lies in mixing up:
- <strong>pairwise independence</strong> & <strong>pairwise disjoint</strong>
- <strong>mutual independence</strong> & <strong>mutual exclusion</strong>

Pairwise disjoint and mutual exclusion are just properties of comparing sets, NOT probability (however mutual exclusion can find itself creeping into probability).

Mutual independence and pairwise independence on the other hand deals with probability.
# Definitions
1. The events in a collection 𝐶 = {𝐸1, 𝐸2, ...} are called <strong>pairwise independent</strong> if ANY TWO events in 𝐶 are [[Probability Independence|independent]] of each other
	- 𝐏(𝐸𝑖|𝐸𝑗) = 𝐏(𝐸𝑖) for every possible pair 𝑖≠𝑗
2. The events in a collection 𝐶 = {𝐸1, 𝐸2, ...} are called <strong>mutual independence</strong> (or <strong>collective independence</strong>) if each event in 𝐶 is [[Probability Independence|independent]] of ANY COMBINATION of the other events in 𝐶
	- 𝐏(𝐸𝑖|ANY COMBINATION OF 𝐶\\𝐸𝑖) = 𝐏(𝐸𝑖) for every 𝐸𝑖 in 𝐶
	- in others:
		- 𝐏(𝐸1|𝐸2,𝐸3) = 𝐏(𝐸1)
		- 𝐏(𝐸1|𝐸4,𝐸5,𝐸6) = 𝐏(𝐸1)
		- etc

NOTE: the notation 𝐏(𝐸1|𝐸4,𝐸5,𝐸6) = 𝐏(𝐸1|𝐸4∩𝐸5∩𝐸6).
# Implications
- <strong>mutual independence</strong> implies <strong>pairwise independence</strong>
- <strong>pairwise independence</strong> does not imply <strong>mutual independence</strong>

# Example

Now the trivial example of tossing 2 FAIR coins. It's sample space 𝛺:
- 𝛺 = {(H,H), (H,T), (T,H), (T,T)}

Now let's define the 3 events:
- event 𝐸1 = {(H,H), (H,T)}
- event 𝐸2 = {(H,H), (T,H)}
- event 𝐸3 = {(H,H), (T,T)}

The probability of each event:
- 𝐏(𝐸1) = 0.5 \# because |𝐸1|/|𝛺| = 2/4
- 𝐏(𝐸2) = 0.5
- 𝐏(𝐸3) = 0.5

Now let's define the collection:
- collection 𝐶 = {𝐸1, 𝐸2, 𝐸3}

## Pairwise Independent

Are the events in 𝐶 are <strong>pairwise independent</strong>? We need to figure out 𝐏(𝐸𝑖) = 𝐏(𝐸𝑖|𝐸𝑗) for all 𝑖 and 𝑗.

Let's focus on whether 𝐏(𝐸2) = 𝐏(𝐸2|𝐸1):
- Let's compute 𝐏(𝐸2|𝐸1)
- In other words, given 𝐸1 what percentage of 𝐸1 is also in 𝐸2?
- event 𝐸1 = {(H,H), (H,T)} and only (H,H) is in event 𝐸2. Thus:
- 𝐏(𝐸2|𝐸1) = |{(H,H)}|/|𝐸1| = 1/2 = 0.5
- 𝐏(𝐸2|𝐸1) can also be computed as: 𝐏(𝐸2|𝐸1) = 𝐏(𝐸2∩𝐸1) / 𝐏(𝐸1) which is still 0.5
- 𝐏(𝐸2|𝐸1) = 0.5 which is equal to 𝐏(𝐸2)

Now do this for every possible pair and you will see that all events in events in 𝐶 are <strong>pairwise independent</strong>.
## Mutual Independence

Are the events in 𝐶 are <strong>mutually independent</strong>? As we all know it is not. But why?

Let's compute 𝐏(𝐸2|𝐸1,𝐸3) and see if it equals 𝐏(𝐸2):
- 𝐏(𝐸2|𝐸1,𝐸3) = 𝐏(𝐸2,𝐸1,𝐸3) / 𝐏(𝐸1,𝐸3)
	- 𝐏(𝐸2,𝐸1,𝐸3) = 1/4 \# because the intersection of those events is just {(H,H)}
	- 𝐏(𝐸1,𝐸3) = 1/4 \# because the intersection of those events is just {(H,H)}
- 𝐏(𝐸2|𝐸1,𝐸3) = 1

Thus:
- 𝐏(𝐸2|𝐸1,𝐸3) ≠ 𝐏(𝐸2)

Thus, the events in 𝐶 are NOT <strong>mutually independent</strong>.
