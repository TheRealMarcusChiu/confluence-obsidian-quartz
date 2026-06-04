---
title: "Convolution - Convolution Integral"
created: 2023-12-12T11:46:06.145-06:00
modified: 2023-12-14T11:45:43.427-06:00
parent: "[[Transformations - Properties／Types]]"
children: []
---
###### Convolution - Convolution Integral
````excerpt
- is a [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|mathematical operation]] on two functions (𝑓 and 𝑔) that produces a third function (𝑓∗𝑔)
- the inverse of the convolution operation is known as deconvolution
````
^excerpt

# Definition

It is defined as the integral of the product of the two functions after one is reflected about the y-axis and shifted:
- $(f*g)(t) := \int_{-∞}^∞ f(𝜏)g(t-𝜏)d𝜏$
- $(f*g)(t) := \int_{-∞}^∞ f(t-𝜏)g(𝜏)d𝜏$

At each 𝑡, the convolution formula can be described as the area under the function 𝑓(𝜏) weighted by the function 𝑔(-𝜏) shifted by the amount 𝑡. As 𝑡 changes, the weighting function 𝑔(𝑡−𝜏) emphasizes different parts of the input function 𝑓(𝜏); If t is a positive value, then 𝑔(𝑡-𝜏) is equal to 𝑔(-𝜏) that slides or is shifted along the 𝜏-axis toward the right (toward +∞) by the amount of 𝑡, while if 𝑡 is a negative value, then 𝑔(𝑡-𝜏) is equal to 𝑔(-𝜏) that slides or is shifted toward the left (toward -∞) by the amount of |𝑡|.
# Visual Explanation

```merge-table
{
  "rows": [
    [
      "1. Express each function in terms of a dummy variable 𝜏.\n2. Reflect on one of the functions: 𝑔(𝜏) → 𝑔(−𝜏).\n3. Add a time offset 𝑡, which allows 𝑔(−𝜏) to slide along the 𝜏-axis. If 𝑡 is a positive value, then 𝑔(𝑡−𝜏) is equal to 𝑔(−𝜏) that slides or is shifted along the 𝜏-axis toward the right (toward +∞) by the amount of 𝑡. If 𝑡 is a negative value, then 𝑔(𝑡−𝜏) is equal to 𝑔(−𝜏) that slides or is shifted toward the left (toward -∞) by the amount of |𝑡|.\n4. Start 𝑡 at −∞ and slide it to +∞. Wherever the two functions intersect, find the integral of their product. In other words, at time 𝑡, compute the area under the function 𝑓(𝜏) weighted by the weighting function 𝑔(𝑡−𝜏).\n\nThe resulting [waveform](https://en.wikipedia.org/wiki/Waveform) (not shown here) is the convolution of functions 𝑓 and 𝑔.\n\nIf 𝑓(𝑡) is a [[Dirac Delta Distribution Function - Unit Impluse|unit impulse]], the result of this process is simply 𝑔(𝑡). Formally:\n- $\\int_{-∞}^∞ 𝛿(𝜏)g(t-𝜏)d𝜏 = g(t)$",
      "![[Convolution - Convolution Integral/convolution-visual-example-1.png|301]]"
    ],
    [
      "In this example, the red-colored \"pulse\",  𝑔(𝜏), is an even function ( 𝑔(−𝜏) = 𝑔(𝜏) ), so convolution is equivalent to correlation. A snapshot of this \"movie\" shows functions 𝑔(𝑡−𝜏) and 𝑓(𝜏) (in blue) for some value of parameter 𝑡, which is arbitrarily defined as the distance along the 𝜏 axis from the point 𝜏=0 to the center of the red pulse. The amount of yellow is the area of the product 𝑓(𝜏)⋅𝑔(𝑡−𝜏), computed by the convolution/correlation integral. The movie is created by continuously changing 𝑡 and recomputing the integral. The result (shown in black) is a function of 𝑡, but is plotted on the same axis as 𝜏, for convenience and comparison.",
      "![[Convolution - Convolution Integral/convolution-visual-example-2.gif|400]]"
    ],
    [
      "In this depiction, 𝑓(𝜏) could represent the response of a [resistor-capacitor circuit](https://en.wikipedia.org/wiki/Resistor-capacitor_circuit) to a narrow pulse that occurs at 𝜏=0. In other words, if 𝑔(𝜏)=𝛿(𝜏), the result of convolution is just 𝑓(𝑡). But when 𝑔(𝜏) is the wider pulse (in red), the response is a \"smeared\" version of 𝑓(𝑡). It begins at 𝑡=−0.5, because we defined 𝑡 as the distance from the 𝜏=0 axis to the <em>center</em> of the wide pulse (instead of the leading edge).",
      "![[Convolution - Convolution Integral/convolution-visual-example-3.gif|400]]"
    ]
  ],
  "tableStyle": "width: 75.9559%;"
}
```
# Resources
- [https://en.wikipedia.org/wiki/Convolution](https://en.wikipedia.org/wiki/Convolution)
- [Khan Academy](https://www.khanacademy.org/math/differential-equations/laplace-transform/convolution-integral/v/introduction-to-the-convolution)
- [https://lpsa.swarthmore.edu/Convolution/Convolution2.html](https://lpsa.swarthmore.edu/Convolution/Convolution2.html)
