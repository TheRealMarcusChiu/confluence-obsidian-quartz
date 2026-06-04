---
title: "Exponentiation by Squaring"
created: 2023-03-22T19:36:32.637-05:00
modified: 2023-03-22T20:12:38.327-05:00
parent: "[[Mathematical Formulas]]"
children: []
---
###### Exponentiation by Squaring
- is a method used for computing the power of a number to a given exponent
- the method is based on the observation that if we square a number and halve the exponent, the result is the same as if we just raised the number to the original exponent. This means that we can compute the power of a number using fewer operations than if we just used repeated multiplication

# General Algorithm

The exponentiation by squaring algorithm works as follows:
- If the exponent is negative, return 1/base
- If the exponent is 0, return 1
- If the exponent is 1, return the base
- If the exponent is even, compute the result of raising the base to the exponent/2 using exponentiation by squaring, and then square the result
- If the exponent is odd, compute the result of raising the base to (exponent - 1)/2 using exponentiation by squaring, and then multiply the result by itself and the base

By using this algorithm, we can compute the power of a number to a given exponent in logarithmic time, which is much faster than using repeated multiplication. This makes it particularly useful for large exponents or for modular exponentiation in cryptography
```
public number calculate(number base, number exponent) {
	if (exponent < 0)
		return calculate(1/base, -exponent);
	if (exponent == 0)
		return 1;
	if (exponent == 1)
		return base;
	if (exponent is even)
		return calculate(base * base, exponent/2);
	if (exponent is odd)
		return base * calculate(base * base, (exponent-1)/2);
}
```
