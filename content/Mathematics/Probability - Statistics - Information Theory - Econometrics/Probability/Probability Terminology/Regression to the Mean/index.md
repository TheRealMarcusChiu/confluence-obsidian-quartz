---
title: "Regression to the Mean"
created: 2021-09-13T05:28:31.227-05:00
modified: 2021-09-13T05:28:31.227-05:00
parent: "[[Probability Terminology]]"
children: []
---
<strong>Regression to the Mean</strong> is all about how data evens out. It basically states that if a variable is extreme the first time you measure it, it will be closer to the average the next time you measure it. In technical terms, it describes how a random variable that is outside the norm eventually tends to return to the norm. For example, your odds of winning on a slot machine stay the same. You might hit a “winning streak” which is, technically speaking, a set of random variables outside the norm. But play the machine long enough, and the random variables will regress to the mean (i.e. “return to normal”) and you’ll end up losing!
## Real Life Example

The [Sports Illustrated](http://www.si.com/) jinx is an excellent example of regression to the mean. The jinx states that whoever appears on the cover of SI is going to have a poor following year (or years). But the “jinx” is actually regression towards the mean. Most players have good games, and they have bad games. A winning streak is usually just that: a lucky streak. And it leads to being on the cover of SI. But it’s statistically likely to be followed by a fall back to average performance.
## Why Does Regression to the Mean Happen?

Regression to the mean usually happens because of [sampling error](https://www.statisticshowto.datasciencecentral.com/probability-and-statistics/sampling-in-statistics/#Serror). A good sampling technique is to randomly sample from the population. If you don’t (i.e. if you asymmetrically sample), then your results may be abnormally high or low for the average and therefore would regress back to the mean. Regression to the mean can also happen because you take a very small, unrepresentative [sample](https://www.statisticshowto.datasciencecentral.com/sample/)(say, the highest 1 percent of the population or the lowest ten percent).
## Formula for the Percent of Regression to the Mean

You can use the following formula to find the percent for any set of data:
<span style="white-space: pre-wrap"><code>Percent of Regression to the Mean = 100(1-r)</code></span>

where: r is the [[Correlation - Correlation Coefficient|correlation coefficient]]

Why 1-r?

Note: In order to understand this discussion you should be very familiar with r, the correlation coefficient.

The percent of regression to the mean takes into account the correlation between the variables. Take two extremes:
- If r=1 (i.e. perfect correlation), then 1-1 = 0 and the regression to the mean is zero. In other words, if your data has perfect correlation, it will never regress to the mean.
- With an r of zero, there is 100 percent regression to the mean. In other words, data with an r of zero will <em>always</em> regress to the mean.
