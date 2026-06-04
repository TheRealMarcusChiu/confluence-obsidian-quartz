---
title: "Product Rule - Quotient Rule"
created: 2021-09-13T05:25:07.568-05:00
modified: 2023-08-27T21:19:06.875-05:00
parent: "[[Differential／Derivative Calculus - Methods／Techniques]]"
children: []
---
# Product Rule

If the two functions 𝑓(𝑥) and 𝑔(𝑥) are differentiable (<em>i.e.</em> the derivative exist) then the product is differentiable and
- (𝑓·𝑔)′ = 𝑓′𝑔 <font style="color: rgb(255,0,0);">+</font> 𝑓𝑔′

# Example

> [!expand]- Click here to expand...
> find derivative of
> - 𝑥<sup>2</sup>(1 - 𝑥)<sup>3</sup>
>
> we have:
> - 𝑓(𝑥) = 𝑥<sup>2</sup>
> - 𝑔(𝑥) = (1 - 𝑥)<sup>3</sup>
>
> differentiate those functions:
> - 𝑓'(𝑥) = 2𝑥
> - 𝑔'(𝑥) = -3(1 - 𝑥)<sup>2</sup>
>
> put together:
> - (𝑓𝑔)′ = 2𝑥(1 - 𝑥)<sup>3</sup> - 𝑥<sup>2</sup>3(1 - 𝑥)<sup>2</sup>
> - (𝑓𝑔)′ = (2𝑥(1 - 𝑥) - 𝑥<sup>2</sup>3)(1 - 𝑥)<sup>2</sup>
> - (𝑓𝑔)′ = 𝑥(2(1 - 𝑥) - 𝑥3)(1 - 𝑥)<sup>2</sup>
> - (𝑓𝑔)′ = 𝑥(2 - 2𝑥 - 3𝑥)(1 - 𝑥)<sup>2</sup>
> - (𝑓𝑔)′ = 𝑥(2 - 5𝑥)(1 - 𝑥)<sup>2</sup>
# Intuition

> [!expand]- Click here to expand...
> Consider the following function:
> - (𝑓·𝑔)(𝑥)
>
> (𝑓·𝑔)(𝑥) is equivalent to the area of a rectangle whose sides are 𝑓(𝑥) and 𝑔(𝑥).
>
> ![[Product Rule - Quotient Rule/product-rule-intuition-1.png|301]]
>
> Now imagine increasing 𝑥 by 𝑑𝑥, How much would 𝑑𝑓 increase by?
>
> ![[Product Rule - Quotient Rule/product-rule-intuition-2.png|301]]
>
> Thus:
> - $d(f·g) = \frac{df}{dx}g + f\frac{dg}{dx} + \frac{df}{dx}\frac{dg}{dx}$
> - $d(f·g) = \frac{df}{dx}g + f\frac{dg}{dx}$
# Quotient Rule

If the two functions 𝑓(𝑥) and 𝑔(𝑥) are differentiable (<em>i.e.</em> the derivative exist) then the quotient is differentiable and
- (𝑓/𝑔)′ = (𝑓′𝑔<font style="color: rgb(255,0,0);"> -</font> 𝑓𝑔′) / 𝑔<sup>2</sup>

# Example

> [!expand]- Click here to expand...
> find derivative of
> - 𝑥<sup>2</sup>/ (1 - 𝑥)<sup>3</sup>
>
> we have:
> - 𝑓(𝑥) = 𝑥<sup>2</sup>
> - 𝑔(𝑥) = (1 - 𝑥)<sup>3</sup>
>
> differentiate those functions:
> - 𝑓'(𝑥) = 2𝑥
> - 𝑔'(𝑥) = -3(1 - 𝑥)<sup>2</sup>
>
> put together:
> - (𝑓/𝑔)′ = \[2𝑥(1 - 𝑥)<sup>3</sup> + 𝑥<sup>2</sup>3(1 - 𝑥)<sup>2</sup>\] / (1 - 𝑥)<sup>6</sup>
> - (𝑓/𝑔)′ = \[(2𝑥(1 - 𝑥) + 𝑥<sup>2</sup>3)(1 - 𝑥)<sup>2</sup>\] / (1 - 𝑥)<sup>6</sup>
> - (𝑓/𝑔)′ = \[𝑥(2(1 - 𝑥) + 𝑥3)(1 - 𝑥)<sup>2</sup>\] / (1 - 𝑥)<sup>6</sup>
> - (𝑓/𝑔)′ = \[𝑥(2 - 2𝑥 + 3𝑥)(1 - 𝑥)<sup>2</sup>\] / (1 - 𝑥)<sup>6</sup>
> - (𝑓/𝑔)′ = 𝑥(2 + 𝑥)(1 - 𝑥)<sup>2</sup> / (1 - 𝑥)<sup>6</sup>
> - (𝑓/𝑔)′ = 𝑥(2 + 𝑥) / (1 - 𝑥)<sup>4</sup>
