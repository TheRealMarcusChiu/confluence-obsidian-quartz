---
title: "LP - Absolute Values"
created: 2021-09-13T05:26:18.710-05:00
modified: 2021-09-13T05:26:18.710-05:00
parent: "[[LP - Ways Structuring Problem]]"
children: []
---
Absolute Values in:
- [[LP - Absolute Values]]
- [[LP - Absolute Values]]

# <strong>Constraint Functions</strong>

Linear constraints are of the form:
<span style="white-space: pre-wrap"><code>a1 x1 + a2 x2 + a3 x3 + ... ≤ maximum</code><br><code>a1 x1 + a2 x2 + a3 x3 + ... ≥ minimum</code></span>

Where minimum and maximum are constants.

lp\_solve can only handle these kind of Linear equations. So what if absolute values must be formulated:
<span style="white-space: pre-wrap"><code>abs(a1 x1 + a2 x2 + a3 x3) = 0</code><br><code>abs(a1 x1 + a2 x2 + a3 x3) ≤ maximum</code><br><code>abs(a1 x1 + a2 x2 + a3 x3) ≥ minimum</code></span>

###### = 0 (or \<= 0)

This is the easiest case. If abs(X) must be equal to zero, then this can only be fulfilled if X is zero. So the condition can also be written as:
<span style="white-space: pre-wrap"><code>a1 x1 + a2 x2 + a3 x3 = 0</code></span>

###### \<= maximum

> [!expand]- Click here to expand...
> This is a bit more complicated, but still quite easy.
>
> Let's first represent a1 x1 + a2 x2 + a3 x3 by X. So the condition becomes:
> <span style="white-space: pre-wrap"><code>abs(X) ≤ maximum</code></span>
>
> What is in fact abs(X) ?
>
> It is X if X is positive or 0 and it is -X if X is negative.
>
> This also implies that maximum is always bigger than or equal to zero. Else the constraint would always be impossible (mathematical impossible with real numbers).
>
> The geometric representation of this is:
> <span style="white-space: pre-wrap"><code>----+===============+----</code><br><code>-maximum    0    +maximum</code></span>
>
> The section between -maximum and +maximum fulfills the constraint.
>
> So if X is positive, the restriction becomes:
> <span style="white-space: pre-wrap"><code> X ≤ maximum</code></span>
>
> If X is negative, the restriction becomes:
> <span style="white-space: pre-wrap"><code>-X ≤ maximum</code></span>
>
> And the fortunate thing is that if we need the one restriction that the other is always redundant. If X is positive, then -X is negative and thus always less than maximum (which is always positive, remember) and thus the second equation is then redundant. If X is negative, then it is always less than maximum (which is always positive, remember) and thus the first equation is then redundant. This can also be seen easily from the graphical representation. So just add the following two equations:
> <span style="white-space: pre-wrap"><code> X ≤ maximum</code><br><code>-X ≤ maximum</code></span>
>
> And the abs(X) ≤ maximum condition is fulfilled.
>
> And what if the condition is
> <span style="white-space: pre-wrap"><code>abs(X) + Y ≤ maximum</code></span>
>
> With Y any linear combination.
>
> It is easy to see that the same reasoning can be used to become:
> <span style="white-space: pre-wrap"><code> X + Y ≤ maximum</code><br><code>-X + Y ≤ maximum</code></span>
>
> With the original definition of X this becomes:
> <span style="white-space: pre-wrap"><code> a1 x1 + a2 x2 + a3 x3 + Y ≤ maximum</code><br><code>-a1 x1 - a2 x2 - a3 x3 + Y ≤ maximum</code></span>
###### \>= minimum

> [!expand]- Click here to expand...
> Let's first represent a1 x1 + a2 x2 + a3 x3 by X. So the condition becomes:
> <span style="white-space: pre-wrap"><code>abs(X) ≥ minimum</code></span>
>
> What is in fact abs(X) ?
>
> It is X if X is positive or 0 and it is -X if X is negative.
>
> This also implies that minimum should always be bigger than zero. Else the constraint would always be fulfilled and there is no point in having the constraint.
>
> The geometric representation of this is:
> <span style="white-space: pre-wrap"><code>====+---------------+====</code><br><code>-minimum    0    +minimum</code></span>
>
> The section <strong>not</strong> between -minimum and +minimum fulfills the constraint.
>
> So if X is positive, the restriction becomes:
> <span style="white-space: pre-wrap"><code> X ≥ minimum</code></span>
>
> If X is negative, the restriction becomes:
> <span style="white-space: pre-wrap"><code>-X ≥ minimum</code></span>
>
> Unfortunately, the trick as for a maximum cannot be used here. If X is positive, then -X is not greater than minimum, in contrary ...
>
> It can also be seen from the graphical representation that this restriction is discontinue. This has as effect that it is not possible to convert this into a set of linear equations.
>
> A possible approach to overcome this is making use of integer variables. In particular by using a binary variable B:
> <span style="white-space: pre-wrap"><code> X + M \* B ≥ minimum</code><br><code>-X + M \* (1 - B) ≥ minimum</code></span>
>
> M is a large enough constant. See later.
> The binary variable B takes care of the discontinuity. It can be either 0 or 1. With M large enough, this makes one or the other constraint obsolete.
>
> If B is 0, then the equations can be written as:
> <span style="white-space: pre-wrap"><code> X ≥ minimum</code><br><code>-X + M ≥ minimum</code></span>
>
> So in this case, the restriction X ≥ minimum is active. X must be positive and larger than minimum. With M large enough, the second constraint is always fulfilled.
>
> If B is 1, then the equations can be written as:
> <span style="white-space: pre-wrap"><code> X + M ≥ minimum</code><br><code>-X ≥ minimum</code></span>
>
> So in this case, the restriction -X ≥ minimum is active. X must be negative and -X be larger than minimum. With M large enough, the first constraint is always fulfilled.
>
> It is important to use a realistic value for M. Don't use for example 1e30 for it. This creates numerical instabilities and even if not then tolerances will give problem. Because of tolerances, B may not be zero, but actually for example 1e-20. This multiplied with 1e30 gives not zero, but 1e10! This results in X + 1e10 ≥ minimum instead of X ≥ minimum. Not what was mathematically formulated!
>
> So how big must M be?
> Well, we can make a prediction.
> Either -X + M ≥ minimum (X ≥ minimum) or X + M ≥ minimum (X ≤ -minimum) must always be TRUE.
> That comes to -abs(X) + M ≥ minimum.
> Or M ≥ minimum + abs(X)
>
> If we can predict how large X can become (absolutely), then we can predict a maximum value needed for M for this to work. If abs(X) cannot be larger than maximum, then M can be minimum+maximum.
>
> In most cases, it is possible to determine a reasonable upper bound for X.
>
> In lp-format, the needed equations are:
> <span style="white-space: pre-wrap"><code>X + M \* B ≥ minimum;</code><br><code>X + M \* B ≤ M - minimum;</code><br><code></code><br><code>B ≤ 1;</code><br><code></code><br><code>int B;</code></span>
>
> And what if the condition is
> <span style="white-space: pre-wrap"><code>abs(X) + Y ≥ minimum</code></span>
>
> With Y any linear combination.
>
> It is easy to see that the same reasoning can be used to become:
> <span style="white-space: pre-wrap"><code> X + M \* B + Y ≥ minimum</code><br><code>-X + M \* (1 - B) + Y ≥ minimum</code></span>
>
> With M ≥ minimum - Y + abs(X)
>
> In lp-format:
> <span style="white-space: pre-wrap"><code>X + M \* B + Y ≥ minimum;</code><br><code>X + M \* B - Y ≤ M - minimum</code><br><code></code><br><code>B ≤ 1;</code><br><code></code><br><code>int B;</code></span>
# <strong>Objective Function</strong>

The objective function is of the form:
<span style="white-space: pre-wrap"><code>min or max: a1 x1 + a2 x2 + a3 x3 + ...</code></span>

What if there is an absolute value in the objective:
<span style="white-space: pre-wrap"><code>abs(a1 x1 + a2 x2 + a3 x3) + a4 x4 + a5 x5</code></span>

Let's first represent a1 x1 + a2 x2 + a3 x3 by X and a4 x4 + a5 x5 by Y. Then the objective becomes:
<span style="white-space: pre-wrap"><code>abs(X) + Y</code></span>

Depending on the sign before the abs and the objective direction, there is an easy and a harder way to solve this.
###### minimization and sign is positive or maximization and sign is negative
<span style="white-space: pre-wrap"><code>min: abs(X) + Y</code><br><code>or</code><br><code>max: -abs(X) + Y</code></span>

> [!expand]- Click here to expand...
> In these two situations, abs(X) will be as small as possible, ideally zero. We can use that fact. Add one variable X' and two constraints to the model:
> <span style="white-space: pre-wrap"><code> X ≤ X'</code><br><code>-X ≤ X'</code></span>
>
> And replace in the objective abs(X) with X':
> <span style="white-space: pre-wrap"><code>min: X' + Y</code><br><code>or</code><br><code>max: -X' + Y</code></span>
>
> That is all. So how does this work? There are 3 cases to consider:
> ###### X \> 0
>
> In this case, -X is negative and the second constraint -X ≤ X' is always fulfilled because X' is implicitly ≥ 0. The first constraint X ≤ X' is however different. Because X is positive, X' must be at least as large as X. But because X' is in the objective in such a way that is tends to be as small as possible, X' will be equal to X. So X' is abs(X) in this case.
> ###### X \< 0
>
> In this case, X is negative and the first constraint X ≤ X' is always fulfilled because X' is implicitly ≥ 0. The second constraint -X ≤ X' is however different. Because X is negative (-X positive), X' must be at least as large as -X. But because X' is in the objective in such a way that is tends to be as small as possible, X' will be equal to -X. So X' is abs(X) in this case.
> ###### X = 0
>
> In this case, both constraints are always fulfilled because X' is implicitly ≥ 0. Because X' is in the objective in such a way that is tends to be as small as possible, X' will be equal to X, in this case 0. So X' is abs(X).
>
> So in all cases, X' equals abs(X)
>
> With the original definition of X and Y this becomes:
> <span style="white-space: pre-wrap"><code>min: X' + a4 x4 + a5 x5</code><br><code>or</code><br><code>max: -X' + a4 x4 + a5 x5</code><br><code></code><br><code> a1 x1 + a2 x2 + a3 x3 ≤ X'</code><br><code>-a1 x1 - a2 x2 - a3 x3 ≤ X'</code></span>
###### minimization and sign is negative or maximization and sign is positive
<span style="white-space: pre-wrap"><code>min: -abs(X) + Y</code><br><code>or</code><br><code>max: abs(X) + Y</code></span>

> [!expand]- Click here to expand...
> This is a different story. abs(X) now tends to be as large as possible. So the previous trick cannot be used now.
>
> A possible approach to overcome this is making use of integer variables. In particular by using a binary variable B and adding a variable X'. Add following constraints to the model:
> <span style="white-space: pre-wrap"><code> X + M \* B ≥ X'</code><br><code>-X + M \* (1 - B) ≥ X'</code><br><code> X ≤ X'</code><br><code>-X ≤ X'</code></span>
>
> And replace in the objective abs(X) with X':
> <span style="white-space: pre-wrap"><code>min: -X' + Y</code><br><code>or</code><br><code>max: X' + Y</code></span>
>
> That is all. So how does this work? In fact this is a combination of a maximum and minimum constraint on an absolute expression. X' represents the absolute expression and is used in the objective.
>
> M is a large enough constant. See later.
> The binary variable B can be either 0 or 1. With M large enough, this makes one or the other constraint obsolete.
>
> If B is 0, then the equations can be written as:
> <span style="white-space: pre-wrap"><code> X ≥ X'</code><br><code>-X + M ≥ X'</code><br><code> X ≤ X'</code><br><code>-X ≤ X'</code></span>
>
> So in this case, the restriction X ≥ X' is active. X must be positive and larger than X'. With M large enough, the second constraint is always fulfilled. The third constraint says that X ≤ X'. The forth constraint is always fulfilled. In fact the first and third constraint have as result that X' equals X, which is positive in this case.
>
> If B is 1, then the equations can be written as:
> <span style="white-space: pre-wrap"><code> X + M ≥ X'</code><br><code>-X ≥ X'</code><br><code> X ≤ X'</code><br><code>-X ≤ X'</code></span>
>
> So in this case, the restriction -X ≥ X' is active. X must be negative and -X be larger than X'. With M large enough, the first constraint is always fulfilled. The third constraint is always fulfilled. The forth constraint says that -X \< X'. In fact the second and forth constraint have as result that X' equals -X, which is positive in this case.
>
> It is important to use a realistic value for M. Don't use for example 1e30 for it. This creates numerical instabilities and even if not then tolerances will give problem. Because of tolerances, B may not be zero, but actually for example 1e-20. This multiplied with 1e30 gives not zero, but 1e10! This results in X + 1e10 ≥ X' instead of X ≥ X'. Not what was mathematically formulated!
>
> So how big must M be?
> Well, we can make a prediction.
> Either -X + M ≥ X' (X ≥ X') or X + M ≥ X' (X ≤ -X') must always be TRUE.
> That comes to -abs(X) + M ≥ X'.
> or -abs(X) + M ≥ abs(X).
> Or M ≥ 2 \* abs(X)
>
> If we can predict how large X can become (absolutely), then we can predict a maximum value needed for M for this to work. If abs(X) cannot be larger than maximum, then M can be 2 \* maximum.
>
> In most cases, it is possible to determine a reasonable upper bound for X.
>
> In lp-format, the needed equations are:
> <span style="white-space: pre-wrap"><code>max: X' + Y;</code><br><code></code><br><code> X + M \* B - X' ≥ 0;</code><br><code> X + M \* B + X' ≤ M;</code><br><code> X ≤ X'</code><br><code>-X ≤ X'</code><br><code></code><br><code>B ≤ 1;</code><br><code></code><br><code>int B;</code></span>
