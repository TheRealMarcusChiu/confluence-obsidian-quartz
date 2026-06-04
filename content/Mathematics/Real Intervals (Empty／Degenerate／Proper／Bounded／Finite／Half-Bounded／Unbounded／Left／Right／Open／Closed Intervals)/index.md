---
title: "Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)"
created: 2021-09-13T05:25:47.050-05:00
modified: 2023-09-09T08:52:09.195-05:00
parent: "[[Mathematics]]"
children: []
---
A (<strong>real</strong>) <strong>interval</strong> is a [[Set Theory|set]] of [[Numbers Classes／Classification of Numbers|real numbers]] that contains all real numbers lying between any two numbers of the set
# Intervals - Classification

The intervals of real numbers can be classified into the eleven different types listed below, where a and b are real numbers, and 𝑎 \< 𝑏:
- <strong>Empty Interval</strong>: \[𝑏,𝑎\]=(𝑏,𝑎)=\[𝑏,𝑎)=(𝑏,𝑎\]=(𝑎,𝑎)=\[𝑎,𝑎)=(𝑎,𝑎\]={}=∅
- <strong>Degenerate Interval</strong>: \[a,a\]={𝑎} is any [set consisting of a single real number](https://en.wikipedia.org/wiki/Singleton_set)
- <strong>Proper Intervals</strong> - is a real interval that is neither <em>empty</em> nor <em>degenerate</em> and has infinitely many elements
	- <strong>Bounded/Finite Intervals</strong> -
		- <strong>Open Interval</strong>: (𝑎,𝑏)={𝑥 | 𝑎\<𝑥\<𝑏}
		- <strong>Closed Interval</strong>: \[𝑎,𝑏\]={𝑥 | 𝑎≤𝑥≤𝑏}
		- <strong>Left-Closed, Right-Open Interval</strong>: \[𝑎,𝑏)={𝑥 | 𝑎≤𝑥\<𝑏}
		- <strong>Left-Open, Right-Closed Interval</strong>: (𝑎,𝑏\]={𝑥 | 𝑎\<𝑥≤𝑏}
	- <strong>Half-Bounded Intervals </strong>- intervals that are bounded at only one end
		- <strong>Left-Bounded & Right-Unbounded Intervals</strong>:
			- <strong>Left-Open Interval</strong>: (𝑎,+∞)={𝑥 | 𝑥\>𝑎}
			- <strong>Left-Closed Interval</strong>: \[𝑎,∞)={𝑥 | 𝑥≥𝑎}
		- <strong>Left-Unbounded & Right-Bounded Intervals</strong>:
			- <strong>Right-Open Interval</strong>: (-∞,𝑏)={𝑥 | 𝑥\<𝑏}
			- <strong>Right-Closed Interval</strong>: (-∞,𝑏\]={𝑥 | 𝑥≤𝑏}
	- <strong>Unbounded Interval</strong> at both ends (simultaneously open and closed): (-∞,+∞)=ℝ

# Intervals - Terminology
- <strong>open interval</strong> does not include its endpoints, and is indicated with parentheses. (0,1)
- <strong>closed interval</strong> is an interval which includes all its limit points, and is denoted with square brackets. \[0,1\]
- <strong>half-open interval</strong> includes only one of its endpoints, and is denoted by mixing the notations for open and closed intervals. (0,1\] and \[0,1)
- <strong>left-bounded interval </strong>is an interval where all its elements are larger than some real number
- <strong>right-bounded interval </strong>is an interval where all its elements are smaller than some real number
- <strong>bounded/finite interval</strong> is an interval that is both left-bounded and right-bounded (empty set is bounded)
- <strong>unbounded interval </strong>is any interval that is not a bounded interval (the set of all reals is the only interval that is unbounded at both ends)
	- <strong>half-bounded interval</strong> is an interval that either left-bounded or right-bounded
- <strong>diameter</strong> (<strong>length</strong>, <strong>width</strong>, <strong>measure</strong>, <strong>range</strong>, or <strong>size</strong>) of interval is equal to the absolute difference between the endpoints:
	- diameter of a bounded interval is 𝑏-𝑎
	- diameter of unbounded intervals is +∞
	- diameter of empty interval is 0 or undefined
- <strong>radius</strong> is half the diameter
- <strong>centre</strong> (<strong>midpoint</strong>)
	- centre of a bounded interval is (<em>𝑎</em> + <em>𝑏</em>)/2
	- centre of unbounded intervals is undefined
	- centre of empty interval is undefined
- <strong>interior</strong> of an interval 𝐼 is the largest open interval that is contained in 𝐼; it is also the set of points in 𝐼 which are not endpoints of 𝐼
- <strong>closure</strong> of an interval 𝐼 is the smallest closed interval that contains 𝐼; which is also the set 𝐼 augmented with its finite endpoints
- <strong>interval enclosure</strong> or <strong>interval span</strong> of some set 𝑋 of real numbers, is the unique interval that contains 𝑋 and does not properly contain any other interval that also contains 𝑋
- <strong>subinterval</strong> of interval 𝐽 is some interval 𝐼 such that: 𝐼 is a [subset](https://en.wikipedia.org/wiki/Subset) of 𝐽
- <strong>proper subinterval</strong> of interval 𝐽 is some interval 𝐼 such that: 𝐼 is a [proper subset](https://en.wikipedia.org/wiki/Proper_subset) of 𝐽

# Note on Conflicting Terminology

The terms <em><strong>segment</strong></em> and <em><strong>interval</strong></em> have been employed in the literature in two essentially opposite ways, resulting in ambiguity when these terms are used. The <em>Encyclopedia of Mathematics</em> defines <em>interval</em> (without a qualifier) to exclude both endpoints (i.e., open interval) and <em>segment</em> to include both endpoints (i.e., closed interval), while Rudin's <em>Principles of Mathematical Analysis</em> calls sets of the form \[<em>a</em>, <em>b</em>\] <em>intervals</em> and sets of the form (<em>a</em>, <em>b</em>) <em>segments</em> throughout. These terms tend to appear in older works; modern texts increasingly favor the term <em>interval</em> (qualified by <em>open</em>, <em>closed</em>, or <em>half-open</em>), regardless of whether endpoints are included
