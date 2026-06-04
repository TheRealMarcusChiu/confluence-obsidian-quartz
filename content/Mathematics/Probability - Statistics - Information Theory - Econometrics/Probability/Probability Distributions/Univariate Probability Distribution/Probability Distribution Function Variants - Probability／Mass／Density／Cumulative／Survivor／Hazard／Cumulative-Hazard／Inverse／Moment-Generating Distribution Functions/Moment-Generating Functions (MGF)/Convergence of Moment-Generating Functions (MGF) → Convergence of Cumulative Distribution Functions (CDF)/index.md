---
title: "Convergence of Moment-Generating Functions (MGF) → Convergence of Cumulative Distribution Functions (CDF)"
created: 2023-09-19T13:37:45.573-05:00
modified: 2023-09-19T14:08:52.897-05:00
parent: "[[Moment-Generating Functions (MGF)]]"
children: []
---
# Convergence of [[Moment-Generating Functions (MGF)]] → Convergence of [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|Cumulative Distribution Functions (CDF)]]
[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|That is, let 𝑋1, 𝑋2, ... be a sequence of random variables, each with:]]
- $MGF_{X_i}(t)$
- $CDF_{X_i}(x)$

If both:
- $lim_{i \to ∞} M_{X_i}(t) = M_X(t) \;\; \text{ ∀ } t \text{ in a neighborhood of } 0$
- $M_X(t) \;\; \text{is an MGF}$

Then:
- there exists a random variable 𝑋 with CDF 𝐹<sub>𝑋</sub>(𝑥) where:
	- $lim_{i \to ∞} F_{X_i}(x) = F_X(x)$
- and this random variable 𝑋 has moments determined by MGF 𝑀<sub>𝑋</sub>(𝑡)

# Example

> [!expand-ui]- Binomial Converges to Poisson
> Show that a [[Binomial Distribution|binomial distribution]] will converge into a [[Poisson Distribution|Poisson distribution]].
>
> Bin(𝑛,𝑝) can be approximated by Pois(𝜆) using 𝜆=𝑛𝑝.
>
> Let:
> - 𝑋 = Bin(𝑛,𝑝)
> - 𝑌 \~ Pois(𝑛𝑝)
>
> Then:
> - 𝑃(𝑋=𝑥) ≈ 𝑃(𝑌=𝑥) for large 𝑛 and small 𝑝
>
> ### Let's show MGFs converge
> ###### First a lemma:
>
> If:
> - $a_n \;\; \xrightarrow[n \to ∞]{} \;\; a$
>
> Then:
> - $[1 + a_n/n]^n \;\; \xrightarrow[n \to ∞]{} \;\; e^a$
>
> ###### Reminder:
> - see [[Moment-Generating Function - Binomial Distribution]]
> $M_X(t) = [1 - p + pe^t]^n$
> - see Moment-Generating Function - Poisson Distribution
> $M_Y(t) = e^{𝜆(e^t - 1)}$
>
> ### PROOF
> - $M_X(t) = [1 - p + pe^t]^n$
> - $M_X(t) = [1 + p * (e^t - 1)]^n$
> - $M_X(t) = [1 + p * (n/n) * (e^t - 1)]^n$
> - $M_X(t) = [1 + pn * (e^t - 1)/n]^n$
> - $M_X(t) = [1 + 𝜆 * (e^t - 1)/n]^n$
>
> Now let 𝑎<sub>𝑛</sub> = (𝑒<sup>𝑡</sup> - 1)𝜆
> - $M_X(t) = [1 + a_n/n]^n$
>
> Then as 𝑛 goes to ∞
> - $M_X(t) = [1 + a_n/n]^n \;\; \xrightarrow[n \to ∞]{} \;\; e^a$
>
> where:
> - $a = lim_{n \to ∞}(e^t - 1)𝜆$
>
> Then:
> - $M_X(t) \;\; \xrightarrow[n \to ∞]{} \;\; exp{(e^t - 1)𝜆}$
>
> This is 𝑀<sub>𝑌</sub>(𝑡) the MGF for Poisson
>
> So:
> - $M_X(t) \;\; \xrightarrow[n \to ∞]{} M_Y(t)$
>
> Therefore:
> - $Bin(n,p) \;\; \xrightarrow[n \to ∞]{} Pois(𝜆)$
>
> where:
> - 𝑝 = 𝜆/𝑛
