---
title: "Mean Absolute Deviation vs. Root Mean Square Deviation (Standard Deviation)"
created: 2023-09-16T12:48:25.659-05:00
modified: 2023-09-17T00:45:08.908-05:00
parent: "[[Mean Deviation]]"
children: []
---
###### [[Mean Absolute Deviation]] vs. [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|Root Mean Square Deviation (Standard Deviation)]]

The statistic should be ‘efficient’ in the sense of having the smallest probable error as an estimate of the population parameter

When drawing repeated large samples from a normally distributed population, the standard deviation of their individual mean deviations is 14% higher than the standard deviations of their individual standard deviations
```
# create a population of 1 million drawn from a standard normal distribution
pop_data = rnorm(1000000, 0, 1)

# obtain the population statistics
pop_sd = sd(pop_data)   # ~0.9998773
pop_mad = mad(pop_data) # ~0.9982555

# draw repeated large samples from population and caculate the sample statistics
sam_sd_s = NA
sam_mad_s = NA
for (i in 0:10000) {
  sam_data = sample(pop_data, 1000)
  sam_sd = sd(sam_data)
  sam_mad = mad(sam_data)
  sam_sd_s[i] = sam_sd
  sam_mad_s[i] = sam_mad
}

# display the sample distributions for both statistics
binwidth = 0.0125
set.seed(42)
p1 <- hist(sam_sd_s,
           breaks = seq(0.85, 1.15 + binwidth, by = binwidth),
           xlim = c(0.85, 1.15))
p2 <- hist(sam_mad_s,
           breaks = seq(0.85, 1.15 + binwidth, by = binwidth),
           xlim = c(0.85, 1.15))
plot(p1, col=rgb(0,0,1,1/4))
plot(p2, col=rgb(1,0,0,1/4), add=T)
```

![[Mean Absolute Deviation vs. Root Mean Square Deviation (Standard Deviation)/sd-vs-mad.png|700x329]]

In general, our observed distributions tend to be
longer­tailed, having more extreme scores, than would be expected under ideal assumptions. Because we
square the deviations from average to produce SD, but not MD, such longer­tailed distributions tend to
‘explode’ the variation in SD (Huber 1981). The act of squaring makes each unit of distance from the
mean exponentially (rather than additively) greater, and the act of square­rooting the sum of squares does
not completely eliminate this bias. In practice, of course, this fact is often obscured by the widespread
deletion of ‘outliers’ (Barnett and Lewis 1978). <strong>In fact, our use of SD rather than MD forms part of the</strong>
<strong>pressure on analysts to ignore any extreme values</strong>
# Resources
- [[04_standard_deviation_vs_absolute_deviation_230829_115120 2.pdf]]
