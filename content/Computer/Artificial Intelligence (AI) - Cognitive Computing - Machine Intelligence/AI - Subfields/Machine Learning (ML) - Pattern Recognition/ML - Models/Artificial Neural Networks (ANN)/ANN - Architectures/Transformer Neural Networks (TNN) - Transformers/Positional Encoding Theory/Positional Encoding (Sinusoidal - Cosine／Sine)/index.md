---
title: "Positional Encoding (Sinusoidal - Cosine／Sine)"
created: 2023-12-21T00:07:21.564-06:00
modified: 2023-12-23T12:45:15.137-06:00
parent: "[[Positional Encoding Theory]]"
children: []
---
###### Positional Encoding
````excerpt
- describes the location or position of an entity in a sequence so that each position is assigned a unique representation
````
^excerpt

# Definition

```merge-table
{
  "rows": [
    [
      "The positional encoding vector (𝑝<sub>𝑡</sub>∊ℝ<sup>𝑑</sup>) of a token at position 𝑡 of a text document is defined as:\n- $\\overrightarrow{p_t} = \\begin{bmatrix} sin(w_1t) \\\\ cos(w_1t) \\\\ sin(w_2t) \\\\ cos(w_2t) \\\\ \\vdots    \\\\ sin(w_{d/2}t) \\\\ cos(w_{d/2}t) \\\\ \\end{bmatrix}$\n\nwhere:\n- $w_k = \\frac{1}{10000^{2k/d}}$\n- 𝑑 be the encoding dimension",
      "![[Positional Encoding (Sinusoidal - Cosine／Sine)/positional_encoding.png]]\n\nThe 129-dimensional positional encoding for a sentence with a maximum length of 50. Each row represents the embedding vector 𝑝<sub>𝑡</sub>."
    ]
  ],
  "tableStyle": "width: 89.1176%;"
}
```
# Sinusoidal Positional Encoding - Properties

> [!expand-ui]- Allows the Model to Attend Relative Positions
> The sinusoidal positional encoding allows the model to attend relative positions, since:
> - 𝑝<sub>𝑡+𝛼</sub> can be represented as a linear function of 𝑝<sub>𝑡</sub>
>
> for any given fixed offset 𝛼.
>
> Proof:
>
> > [!expand]- Click here to expand...
> > Assume that there exists a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] 2×2 matrix 𝑀 such that:
> > - $\begin{bmatrix} sin(w_k(t+𝛼)) \\ cos(w_k(t+𝛼)) \\ \end{bmatrix} = M \begin{bmatrix} sin(w_kt) \\ cos(w_kt) \\ \end{bmatrix}$
> >
> > We want to find 𝑚<sub>11</sub>, 𝑚<sub>12</sub>, 𝑚<sub>21</sub>, 𝑚<sub>22</sub> such that:
> > - $\begin{bmatrix} sin(w_k(t+𝛼)) \\ cos(w_k(t+𝛼)) \\ \end{bmatrix} = \begin{bmatrix} m_{11} & m_{12} \\ m_{21} & m_{22} \\ \end{bmatrix} \begin{bmatrix} sin(w_kt) \\ cos(w_kt) \\ \end{bmatrix}$
> >
> > By applying the addition theorem:
> > - $\begin{bmatrix} sin(w_kt)cos(w_k𝛼) + cos(w_kt)sin(w_k𝛼) \\ cos(w_kt)cos(w_k𝛼) - sin(w_kt)sin(w_k𝛼) \\ \end{bmatrix} = \begin{bmatrix} m_{11} & m_{12} \\ m_{21} & m_{22} \\ \end{bmatrix} \begin{bmatrix} sin(w_kt) \\ cos(w_kt) \\ \end{bmatrix}$
> >
> > Which results in the following two equations:
> > - $sin(w_kt)cos(w_k𝛼) + cos(w_kt)sin(w_k𝛼) = m_{11}sin(w_kt) + m_{12}cos(w_kt)$
> > - $cos(w_kt)cos(w_k𝛼) - sin(w_kt)sin(w_k𝛼) = m_{21}sin(w_kt) + m_{22}cos(w_kt)$
> >
> > By solving the above equations we get:
> > - $m_{11} = cos(w_k𝛼)$
> > - $m_{12} = sin(w_k𝛼)$
> > - $m_{21} = -sin(w_k𝛼)$
> > - $m_{22} = cos(w_k𝛼)$
> >
> > Thus the final linear transformation matrix 𝑀 is:
> > - $M_{k,𝛼} = \begin{bmatrix} cos(w_k𝛼)  & sin(w_k𝛼) \\ -sin(w_k𝛼) & cos(w_k𝛼) \\ \end{bmatrix}$
> >
> > The final transformation does not depend on 𝑡. Note this is similar to the [[Rotational Matrix|rotation matrix]].

> [!expand-ui]- Symmetrical ad Decays Nicely with Time
> The [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]] of position embeddings for all time-steps
>
> ![[Positional Encoding (Sinusoidal - Cosine／Sine)/time-steps_dot_product.png|500]]
# FAQ
- [[Why Positional Encodings and (Semantic Encodings ／ Word Embeddings) Added Together Instead of Concatenated|Why Positional Encodings and (Semantic Encodings / Word Embeddings) Added Together Instead of Concatenated]]

# Resources
- [https://kazemnejad.com/blog/transformer_architecture_positional_encoding/](https://kazemnejad.com/blog/transformer_architecture_positional_encoding/)
- [https://machinelearningmastery.com/a-gentle-introduction-to-positional-encoding-in-transformer-models-part-1/](https://machinelearningmastery.com/a-gentle-introduction-to-positional-encoding-in-transformer-models-part-1/)
