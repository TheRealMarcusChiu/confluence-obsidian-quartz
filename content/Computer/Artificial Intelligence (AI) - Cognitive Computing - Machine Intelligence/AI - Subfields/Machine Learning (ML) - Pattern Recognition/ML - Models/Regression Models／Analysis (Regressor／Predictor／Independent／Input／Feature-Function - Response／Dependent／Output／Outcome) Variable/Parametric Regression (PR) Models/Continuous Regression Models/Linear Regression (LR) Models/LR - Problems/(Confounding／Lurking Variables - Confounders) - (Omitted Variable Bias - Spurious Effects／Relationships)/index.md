---
title: "(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)"
created: 2020-09-28T16:43:28.037-05:00
modified: 2023-08-31T15:24:50.799-05:00
parent: "[[LR - Problems]]"
children: []
---
<strong>omitted variable bias</strong> occurs when a [[Ordinary Least Squares (OLS) Regression|regression model]] leaves out relevant independent variables, which are known as <strong>confounding variables</strong>. This forces the model to attribute the effects of omitted variables to variables that are in the model, which biases the coefficient estimates
# Conditions that Cause Omitted Variable Bias
- the omitted variable 𝑍 must [[Correlation|correlate]] with the dependent variable 𝑌
- the omitted variable 𝑍 must correlate with at least one independent variable 𝑋 in the regression model
- that one independent variable 𝑋 must correlate with the dependent variable 𝑌

![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias.png|301]]
# Effects of Omitted Variable Bias

The effect of 𝑋 can be either:
- overestimated
- underestimated
- masked
- sign reversed

> [!tabs]
>
> === overestimated
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| \> 0 and |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| \> 0 then the true effect of 𝑋 is overestimated
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-overestimated-2.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-overestimated.png|301]]
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| \> 0 and |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| \> 0 then the true effect of 𝑋 is overestimated
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-overestimated-4.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-overestimated-3.png|301]]
>
> === underestimated
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| \< |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| then the true effect of 𝑋 is underestimated
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-masked.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-masked-2.png|301]]
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| \< |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| then the true effect of 𝑋 is underestimated
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-underestimated-2.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-underestimated.png|301]]
>
> === masked
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| = |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| then the true effect of 𝑋 is masked
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-masked.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-masked-2.png|301]]
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| = |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| then the true effect of 𝑋 is masked
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-underestimated-2.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-underestimated.png|301]]
>
> === changed sign
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| \> |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| then the true effect of 𝑋 is sign changed
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-masked.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-masked-2.png|301]]
>
> when true effect of |𝐸𝑓𝑓𝑒𝑐𝑡(𝑍)| \> |𝐸𝑓𝑓𝑒𝑐𝑡(𝑋)| then the true effect of 𝑋 is sign changed
>
> ![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-underestimated-2.png|301]]![[(Confounding／Lurking Variables - Confounders) - (Omitted Variable Bias - Spurious Effects／Relationships)/confounding-variable-and-omitted-variable-bias-effect-underestimated.png|301]]

# How to Detect Omitted Variable Bias

We know that for omitted variable bias to exist, an independent variable must correlate with the residuals. Consequently, we can [[Residual Plot - Partial Residual Plot|plot the residuals]] by the variables in our model. If we see a relationship in the plot, rather than random scatter, it both tells us that there is a problem and points us towards the solution
