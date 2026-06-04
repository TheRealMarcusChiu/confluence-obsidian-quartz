---
title: "Why Positional Encodings and (Semantic Encodings ／ Word Embeddings) Added Together Instead of Concatenated"
created: 2023-12-21T14:32:28.601-06:00
modified: 2025-10-10T11:27:19.448-05:00
parent: "[[Positional Encoding Theory]]"
children: []
---
# TLDR;
- summation (in contrast to concatenation) saves the model’s parameters
- (semantic encoding / [[Word Embeddings／Embedding|word embeddings]]) and [[Positional Encoding Theory|positional encoding]] as assumed to be [[Subspaces|subspaces]] that are [[Orthogonal／Orthogonality - Orthogonal Sets - Orthogonal Complement|orthogonal]] to each other

# Explanation

In [[Attention Mechanisms|attention]], we take two word embeddings (𝑥 and 𝑦):
- pass 𝑥 through a Query transformation matrix (𝑄)
- pass 𝑦 through a Key transformation matrix (𝐾)

and compare their similarity via the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]] between 𝑄𝑥 and 𝐾𝑦, which we write as:
- (𝑄𝑥)<sup>T</sup>(𝐾𝑦) = <font style="color: rgb(255,102,0);">𝑥<sup>T</sup>𝑄<sup>T</sup>𝐾𝑦</font>

So equivalently we just need to learn one joint Query-Key transformation (𝑄<sup>T</sup>𝐾) that transforms 𝑦 into a new space in which we can compare 𝑥.

By adding positional encodings 𝑒 and 𝑓 to 𝑥 and 𝑦, respectively, we essentially change the dot product to
- (𝑄(𝑥+𝑒))<sup>T</sup>(𝐾(𝑦+𝑓)) = (𝑄𝑥+𝑄𝑒)<sup>T</sup>(𝐾𝑦+𝐾𝑓)
- (𝑄(𝑥+𝑒))<sup>T</sup>(𝐾(𝑦+𝑓)) = (𝑄𝑥)<sup>T</sup>𝐾𝑦 + (𝑄𝑥)<sup>T</sup>𝐾𝑓 + (𝑄𝑒)<sup>T</sup>𝐾𝑦 + (𝑄𝑒)<sup>T</sup>𝐾𝑓
- (𝑄(𝑥+𝑒))<sup>T</sup>(𝐾(𝑦+𝑓)) = <font style="color: rgb(255,102,0);">𝑥<sup>T</sup>𝑄<sup>T</sup>𝐾𝑦</font> + <font style="color: rgb(51,153,102);">𝑥<sup>T</sup>𝑄<sup>T</sup>𝐾𝑓</font> + <font style="color: rgb(51,204,204);">𝑒<sup>T</sup>𝑄<sup>T</sup>𝐾𝑦</font> + <font style="color: rgb(204,153,255);">𝑒<sup>T</sup>𝑄<sup>T</sup>𝐾𝑓</font>

where:
- <font style="color: rgb(255,102,0);">𝑥<sup>T</sup>𝑄<sup>T</sup>𝐾𝑦</font> original term asks the question "<em>How much attention should we pay to word 𝑥 given word 𝑦</em>"
- <font style="color: rgb(51,153,102);">𝑥<sup>T</sup>𝑄<sup>T</sup>𝐾𝑓</font> asks "<em>How much attention should we pay to word 𝑥 given the position 𝑓 of the word 𝑦</em>"
- <font style="color: rgb(51,204,204);">𝑒<sup>T</sup>𝑄<sup>T</sup>𝐾𝑦</font> asks "<em>How much attention should we pay to 𝑦 given the position 𝑒 of the word 𝑥</em>"
- <font style="color: rgb(204,153,255);">𝑒<sup>T</sup>𝑄<sup>T</sup>𝐾𝑓</font> asks "<em>How much attention should we pay to the position 𝑒 of word 𝑥 given the position 𝑓 of word 𝑦</em>"
