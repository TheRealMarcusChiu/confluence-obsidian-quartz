---
title: "Radix-2 Cooley-Tukey Algorithm (FFT Implementation)"
created: 2025-08-17T00:52:39.073-05:00
modified: 2025-08-17T00:57:28.097-05:00
parent: "[[Cooley-Tukey FFT]]"
children: []
---
###### Radix-2 Cooley-Tukey Algorithm (FFT Implementation)
````excerpt
- is a specific instance of the [[Cooley-Tukey FFT|Cooley-Tukey algorithm]] where the input is repeatedly divided by <strong>2</strong> at each step
- is a divide and conquer algorithm that works by breaking down the DFT into smaller DFTs of size 2, which are simple to compute. Thus, it is particularly efficient when the input size is a power of 2 (e.g., 2, 4, 8, 16, etc)
````
^excerpt

# Implementation
```
class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }
  add(other) {
    return new Complex(this.re + other.re, this.im + other.im);
  }
  sub(other) {
    return new Complex(this.re - other.re, this.im - other.im);
  }
  mul(other) {
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    );
  }
}

// Recursive Radix-2 Cooley–Tukey FFT
function fft(input) {
  const N = input.length;
  if (N <= 1) return input;

  // Split into even and odd
  const evens = fft(input.filter((_, i) => i % 2 === 0));
  const odds  = fft(input.filter((_, i) => i % 2 !== 0));

  // Combine
  const result = new Array(N);
  for (let k = 0; k < N / 2; k++) {
    // twiddle factor W_N^k = e^(-2πik/N)
    const angle = (-2 * Math.PI * k) / N;
    const twiddle = new Complex(Math.cos(angle), Math.sin(angle));

    const t = twiddle.mul(odds[k]);
    result[k]       = evens[k].add(t);
    result[k + N/2] = evens[k].sub(t);
  }

  return result;
}

// Example: FFT of [1, 2, 3, 4]
const input = [1, 2, 3, 4].map(x => new Complex(x, 0));
const output = fft(input);

console.log("FFT Result:");
output.forEach((c, i) =>
  console.log(`X[${i}] = ${c.re.toFixed(3)} + ${c.im.toFixed(3)}i`)
);
```
