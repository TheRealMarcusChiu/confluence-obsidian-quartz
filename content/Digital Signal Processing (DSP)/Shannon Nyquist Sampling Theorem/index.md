---
title: "Shannon Nyquist Sampling Theorem"
created: 2025-08-22T15:06:35.891-05:00
modified: 2025-08-22T15:10:01.861-05:00
parent: "[[Digital Signal Processing (DSP)]]"
children: []
---
###### Shannon Nyquist Sampling Theorem
````excerpt
- if a signal contains no frequencies higher than 𝑓<sub>𝑚𝑎𝑥</sub> (its bandwidth), then it can be completely recovered from its samples, as long as it is sampled at a rate:
	- 𝑓<sub>𝑠</sub> ≥ 2 𝑓<sub>𝑚𝑎𝑥</sub>
- where:
	- 𝑓<sub>𝑠</sub> = sampling frequency (samples per second)
	- 𝑓<sub>𝑚𝑎𝑥</sub> = highest frequency present in the signal
- that minimum rate, 2 𝑓<sub>𝑚𝑎𝑥</sub>, is called the Nyquist rate
````
^excerpt
