---
title: "Poisson vs Exponential"
created: 2021-09-13T05:27:37.068-05:00
modified: 2023-08-30T12:25:16.915-05:00
parent: "[[Probability Distribution - UPD Comparisons]]"
children: []
---
comparing:
- [[Poisson Distribution]]
- [[Exponential Distribution]]

# Deriving Exponential Distribution From Poisson Distribution
Consider the sequence of rare events, where the number of occurrences during time 𝑡 has Poisson distribution with a parameter 𝜆 [[Proportionality (Directly - Inversely) - Coefficient of Proportionality Constant|inversely proportional]] to 𝑡 (i.e. 𝑡 = 1/<em>𝜆</em>)

Given a [mean](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2657987) number of events (𝜆) that happen within unit time, the number of events (𝑥) occurring within that unit time has Poisson Distribution and can be described using Poisson's [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function]]
- 𝐏(𝑋=𝑥) = 𝑒<sup>−𝜆</sup>(𝜆<sup>𝑥</sup>/𝑥!) for 𝑥 = 0, 1, 2, ...

###### PROBLEM

We want to show that the times between rare events are Exponential, using only Poisson Distribution
###### SOLUTION

Consider event 𝐴:
- 𝐴 = “the time 𝑇 until the next event occurring is greater than 𝑡”
- 𝐴 = “no events occur within the time interval \[0, 𝑡\]”

now consider random variable 𝑋 which is the number of events during the time interval \[0, 𝑡\].

This 𝑋 has Poisson distribution with parameter 𝜆'=𝜆𝑡:
- 𝜆 = average number of events happening per time unit
- 𝑡 = number of time units
- 𝜆' = 𝜆𝑡 = average number of events happening in time interval \[0, 𝑡\]

Thus, the probability of 0 events occurring during the time interval \[0, 𝑡\] is described below
- 𝐏(𝑋=0) = 𝑒<sup>-𝜆𝑡</sup> \[(𝜆𝑡)<sup>0</sup> / 0!\]
- 𝐏(𝑋=0) = 𝑒<sup>-𝜆𝑡</sup>

This probability is equivalent to the probability of event 𝐴 happening
- 𝐏(𝑋 = 0) = 𝐏{event 𝐴 occurs}

Then we can compute the 𝐶𝐷𝐹 of 𝑇 as
- 𝐶𝐷𝐹<sub>𝑇</sub>(𝑡) = 1 - 𝐏(𝑇 \> 𝑡)
- 𝐶𝐷𝐹<sub>𝑇</sub>(𝑡) = 1 - 𝐏(event 𝐴 occurs)
- 𝐶𝐷𝐹<sub>𝑇</sub>(𝑡) = 1 - 𝐏(𝑋 = 0)
- 𝐶𝐷𝐹<sub>𝑇</sub>(𝑡) = 1 - 𝑒<sup>-𝜆𝑡</sup>

And here we recognize the Exponential 𝐶𝐷𝐹. Therefore, the time until the next arrival has Exponential distribution

Take the derivative of 𝐶𝐷𝐹<sub>𝑇</sub>(𝑡) to obtain the [[Exponential Distribution|exponential probability density function]]
- 𝑝𝑑𝑓<sub>𝑇</sub>(𝑡) = 𝐶𝐷𝐹<sub>𝑇</sub>'(𝑡)
- 𝑝𝑑𝑓<sub>𝑇</sub>(𝑡) = (1 - 𝑒<sup>-𝜆𝑡</sup>)'
- 𝑝𝑑𝑓<sub>𝑇</sub>(𝑡) = 0 - (-𝜆𝑒<sup>-𝜆𝑡</sup>)
- 𝑝𝑑𝑓<sub>𝑇</sub>(𝑡) = 𝜆𝑒<sup>-𝜆𝑡</sup>
