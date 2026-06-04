---
title: "Kernel Regression"
created: 2020-05-31T17:18:12.782-05:00
modified: 2021-12-18T19:25:11.421-06:00
parent: "[[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)]]"
children:
  - "[[Kernel Regression - Gasser-Muller Estimator (G-M KR)]]"
  - "[[Kernel Regression - Nadaraya-Watson Estimator (N-W KR)]]"
  - "[[Kernel Regression - Priestley-Chao Estimator (P-C KR)]]"
---
###### Kernel Regression (KR)
- a type of [[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|Kernel Distribution(Density/Mass) Estimation/Classification (KDE/KDC)]]
- a [[Non-Parametric Regression (NPR) Models|non-parametric]] regression technique in [[Statistics|statistics]] to estimate the conditional expectation of a random variable
- the objective is to find a non-linear relation between:
	- 𝑿 - one or more predictor variable(s)
	- 𝑌 - single response variable

# KR - Estimators
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# KR - Code Examples

> [!expand-ui]- R Code 1
> ```bash
> # NON-Parametric Kernel Regression 
> # using loess (Local Polynomial Regression Fitting)
> x <- runif(1000, min=-6, max=6)
> y <- sin(x) + rnorm(1000, mean=0, sd=0.3)
> plot(y~x, col="gray", cex=0.25)
> ## Try Different Spans
> ### span=0.75 - for each target point account for 75% of data
> lo.mod <- loess(y~x, degree=0, span=0.75)
> x.plot <- seq(from=-6, to=6, by=0.1)
> y.fit <- predict(lo.mod, newdata=x.plot)
> lines(y.fit~x.plot, type="l")
> ### span=0.1 - for each target point account for 10% of data
> lo.mod <- loess(y~x, degree=0, span=0.1)
> x.plot <- seq(from=-6, to=6, by=0.1)
> y.fit <- predict(lo.mod, newdata=x.plot)
> lines(y.fit~x.plot, type="l")
> ### span=0.025 - for each target point account for 2.5% of data
> lo.mod <- loess(y~x, degree=0, span=0.025)
> x.plot <- seq(from=-6, to=6, by=0.1)
> y.fit <- predict(lo.mod, newdata=x.plot)
> lines(y.fit~x.plot, type="l")
> ## Try Different degrees (0, 1, or 2)
> ### degree=0 - local (estimates mean) (performs badly on boundaries of data)
> lo.mod <- loess(y~x, degree=0, span=0.1)
> x.plot <- seq(from=-6, to=6, by=0.1)
> y.fit <- predict(lo.mod, newdata=x.plot)
> lines(y.fit~x.plot, type="l", col="blue")
> ### degree=1 - linear (estimates slope)
> lo.mod <- loess(y~x, degree=1, span=0.1)
> x.plot <- seq(from=-6, to=6, by=0.1)
> y.fit <- predict(lo.mod, newdata=x.plot)
> lines(y.fit~x.plot, type="l", col="green")
> ### degree=2 - polynomial (estimates acceleration)
> lo.mod <- loess(y~x, degree=2, span=0.1)
> x.plot <- seq(from=-6, to=6, by=0.1)
> y.fit <- predict(lo.mod, newdata=x.plot)
> lines(y.fit~x.plot, type="l", col="red")
> ```

> [!expand-ui]- R Code 2
> ```
> # Non-Parametric Regression (NPR)
> install.packages('np', dependencies = TRUE)
> library(np)
> x <- runif(1000, min=-2*pi, max=2*pi)
> y <- sin(x) + rnorm(1000, mean=0, sd=0.3)
> plot(y~x, col="gray")
> ## NPR Bandwidth Selection - include std errors
> bandwidth <- npregbw(formula=y~x, bws=0.25, bwtype="fixed", bandwidth.compute=FALSE)
> model <- npreg(bws=bandwidth, gradients=TRUE)
> ### or
> model <- npreg(y~x)
> ### Plot Method 1
> plot(model, plot.errors.method="asymptotic", plot.errors.style="band")
> points(y~x, col="gray", cex=.25)
> ### Plot Method 2
> plot(y~x, col="gray")
> plot.out <- plot(model, plot.errors.method="asymptotic", plot.errors.style="band", plot.behavior="data")
> y.eval <- fitted(plot.out$r1)
> x.eval <- plot.out$r1$eval[,1]
> y.se <- se(plot.out$r1)
> y.lower.ci <- y.eval + y.se[,1]
> y.upper.ci <- y.eval + y.se[,2]
> lines(y.eval~x.eval)
> lines(y.upper.ci~x.eval, lty=2)
> lines(y.lower.ci~x.eval, lty=2)
> ```
# Resources
- [Justin Esarey - Kernel Density Estimation & Kernel Regression](https://youtu.be/QSNN0no4dSI?t=5815)
