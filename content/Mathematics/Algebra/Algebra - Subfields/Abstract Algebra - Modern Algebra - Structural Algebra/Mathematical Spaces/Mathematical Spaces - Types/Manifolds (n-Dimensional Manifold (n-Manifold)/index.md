---
title: "Manifolds (n-Dimensional Manifold (n-Manifold)"
created: 2022-06-25T19:29:04.708-05:00
modified: 2025-10-03T00:03:32.040-05:00
parent: "[[Mathematical Spaces - Types]]"
children:
  - "[[Differentiable／Differential Manifold]]"
  - "[[Intrinsic Dimension／Dimensionality - Embedding Dimension／Dimensionality]]"
  - "[[Manifold Hypothesis]]"
  - "[[Riemannian Manifolds - Riemannian Spaces]]"
  - "[[Tangent Spaces - Tangent Vectors]]"
---
###### Manifolds (n-Dimensional Manifold (n-Manifold)
````excerpt
- is a curved surface that looks flat when you zoom in close enough
- is a [[Topological Spaces|topological space]] that locally resembles [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]] near each point
- more precisely, an n-dimensional manifold, or n-manifold for short, is a [[Topological Spaces|topological space]] with the property that each point has an open [[Mathematical Space (Neighborhoods)|neighborhood]] that is homeomorphic to an [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|open subset]] of n-dimensional [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]]
````
^excerpt

# Manifolds - Introduction

An n-dimensional topological manifold 𝑀 is a topological Hausdorff space with a countable base that is locally [[Homeomorphic／Homeomorphisms - Topological Isomorphism ／ Topologically Isomorphic - Bicontinuous Function|homeomorphic]] to ℝ<sup>𝑛</sup>. This means that for every point 𝑝 in 𝑀, there is an [[Topological Spaces (Neighborhoods of a Point／Set)|open neighborhood]] 𝑈 of 𝑝 and a [[Homeomorphic／Homeomorphisms - Topological Isomorphism ／ Topologically Isomorphic - Bicontinuous Function|homeomorphism]] 𝜑: 𝑈 → 𝑉 which maps the set 𝑈 onto an [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|open set]] 𝑉⊂ℝ<sup>𝑛</sup>. Additionally:
- The mapping 𝜑: 𝑈→𝑉 is called a <font style="color: rgb(122,134,154);"><strong><em>chart</em></strong></font> or [[Coordinate Systems|coordinate system]]
- The set 𝑈 is the [[Functions (Domain - Codomain - Preimage - Image - Range)|domain]] or local coordinate neighborhood of the chart
- The [[Functions (Domain - Codomain - Preimage - Image - Range)|image]] of the point 𝑝∈𝑈, denoted by 𝜑(𝑝)∈ℝ<sup>𝑛</sup>, is called the coordinates or local coordinates of 𝑝 in the chart
- A set of charts, {𝜑<sub>𝛼</sub>|𝛼∈ℕ}, with domains 𝑈<sub>𝛼,</sub> is called the atlas of 𝑀 if ⋃<sub>𝛼∈ℕ</sub>𝑈<sub>𝛼</sub>= 𝑀

For example

```merge-table
{
  "rows": [
    [
      "![[Manifolds (n-Dimensional Manifold (n-Manifold)/manifold-chart-transition-maps.png|350]]",
      "Two intersecting patches (green and purple with cyan/teal as the intersection) on a manifold with different charts (continuous 1-1 mappings) to ℝ<sup>𝑛</sup> Euclidean space. Notice that the intersection of the patches has a smooth 1-1 mapping in ℝ<sup>𝑛</sup> Euclidean space, making it a [[Differentiable／Differential Manifold|differential manifold]]\n\nThe mapping between the intersecting parts of 𝑈<sub>𝛼</sub> and 𝑈<sub>𝛽</sub> in their respective chart coordinates called a <em><font style=\"color: rgb(122,134,154);\"><strong>transition map</strong></font></em>, given by 𝜏<sub>𝛼𝛽</sub>= 𝜑<sub>𝛽</sub>∘𝜑<sub>𝛼</sub><sup>−1</sup> and 𝜏<sub>𝛽𝛼</sub> = 𝜑<sub>𝛼</sub>∘𝜑<sub>𝛽</sub><sup>−1</sup> (their domain is restricted to either 𝜑<sub>𝛼</sub>(𝑈<sub>𝛼</sub>∩𝑈<sub>𝛽</sub>) or 𝜑<sub>𝛽</sub>(𝑈<sub>𝛼</sub>∩𝑈<sub>𝛽</sub>), respectively), ∘ denotes [[Composite Functions - Function Composition|function composition]].\n\nThese transition functions are important because depending on their differentiability, they define a new class of <strong>[[Differentiable／Differential Manifold|differentiable manifolds]]</strong> (denoted by 𝐶<sup>𝑘</sup> if they are 𝑘-times continuously differentiable). The most important one for our conversation is transition maps that are infinitely differentiable, which we call <strong>[[Smooth Manifolds|smooth manifolds]]</strong>.\n\nOnce we have smooth manifolds, we can do things like [[Calculus|calculus]]. Performing analysis on a manifold embedded in a high-dimensional space could be a major pain in the butt, but analysis in a lower-dimensional Euclidean space is easy (relatively)!"
    ]
  ],
  "tableStyle": "width: 88.5273%;"
}
```
# Manifolds - Examples

> [!expand-ui]- Euclidean Space as a Manifold
> Standard [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]] in ℝ<sup>𝑛</sup> is, of course, a <em>manifold</em> itself. It requires a single chart that is just the identity function, which also makes up its atlas

> [!expand-ui]- A 1D Manifold with Multiple Charts
> TODO: [https://bjlkeng.io/posts/manifolds/#:~:text=Euclidean%20Space%20is%20a%20Manifold](https://bjlkeng.io/posts/manifolds/#:~:text=Euclidean%20Space%20is%20a%20Manifold)

> [!expand-ui]- Stereographic Projections for 𝑆ⁿ
> TODO: [https://bjlkeng.io/posts/manifolds/#:~:text=Euclidean%20Space%20is%20a%20Manifold](https://bjlkeng.io/posts/manifolds/#:~:text=Euclidean%20Space%20is%20a%20Manifold)
# Manifolds - Categorizations

```merge-table
{
  "rows": [
    [
      {
        "content": "Generic Families",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Specific Dimensions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Special Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Other Categories",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "> [!expand]- Click here to expand...\n> - Euclidean space (ℝ<sup>𝑛</sup>)\n> - [<em>n</em>-sphere](https://en.wikipedia.org/wiki/N-sphere) (𝑆<sup>𝑛</sup>)\n> - [<em>n</em>-torus](https://en.wikipedia.org/wiki/N-torus) (𝑇<sup>𝑛</sup>)\n> - [Real projective space](https://en.wikipedia.org/wiki/Real_projective_space) (𝑅𝑃<sup>𝑛</sup>)\n> - [Complex projective space](https://en.wikipedia.org/wiki/Complex_projective_space) (𝐶𝑃<sup>𝑛</sup>)\n> - [Quaternionic projective space](https://en.wikipedia.org/wiki/Quaternionic_projective_space) (𝐻𝑃<sup>𝑛</sup>)\n> - [Flag manifold](https://en.wikipedia.org/wiki/Flag_manifold)\n> - [Grassmann manifold](https://en.wikipedia.org/wiki/Grassmann_manifold)\n> - [Stiefel manifold](https://en.wikipedia.org/wiki/Stiefel_manifold)",
      "> [!expand]- Click here to expand...\n> ###### 1-Manifolds\n> - [Circle](https://en.wikipedia.org/wiki/Circle) (𝑆<sup>1</sup> = 𝑇<sup>1</sup>)\n> - [Long line](https://en.wikipedia.org/wiki/Long_line_(topology))\n> - [Real line](https://en.wikipedia.org/wiki/Real_line) (ℝ<sup>1</sup>)\n> - [Real projective line](https://en.wikipedia.org/wiki/Real_projective_line) (𝑅𝑃<sup>1</sup>≅ 𝑆<sup>1</sup>)\n>\n> ###### 2-Manifolds\n> - [Cylinder](https://en.wikipedia.org/wiki/Cylinder_(geometry)) (𝑆<sup>1</sup> × ℝ)\n> - [Klein bottle](https://en.wikipedia.org/wiki/Klein_bottle) (𝑅𝑃<sup>2</sup> \\# 𝑅𝑃<sup>2</sup>)\n> - [Klein quartic](https://en.wikipedia.org/wiki/Klein_quartic) (a genus 3 surface)\n> - [Möbius strip](https://en.wikipedia.org/wiki/M%C3%B6bius_strip)\n> - [Real projective plane (𝑅𝑃<sup>2</sup>)](https://en.wikipedia.org/wiki/Real_projective_plane)\n> - [Sphere (𝑆<sup>2</sup>)](https://en.wikipedia.org/wiki/Sphere)\n> - [Surface of genus g](https://en.wikipedia.org/wiki/Genus_of_topological_surface)\n> - [Torus (𝑇<sup>2</sup>)](https://en.wikipedia.org/wiki/Torus)\n> \t- [Double torus](https://en.wikipedia.org/wiki/Double_torus)\n>\n> ###### 3-Manifolds\n> - [3-sphere (𝑆<sup>3</sup>)](https://en.wikipedia.org/wiki/3-sphere)\n> - [3-torus (𝑇<sup>3</sup>)](https://en.wikipedia.org/wiki/Torus#n-dimensional_torus)\n> - [Poincaré homology sphere](https://en.wikipedia.org/wiki/Poincar%C3%A9_homology_sphere)\n> - [SO(3)](https://en.wikipedia.org/wiki/SO(3)) ≅ 𝑅𝑃<sup>3</sup>\n> - [Solid Klein bottle](https://en.wikipedia.org/wiki/Solid_Klein_bottle)\n> - [Solid torus](https://en.wikipedia.org/wiki/Solid_torus)\n> - [Whitehead manifold](https://en.wikipedia.org/wiki/Whitehead_manifold)\n> - [Meyerhoff manifold](https://en.wikipedia.org/wiki/Meyerhoff_manifold)\n> - [Weeks manifold](https://en.wikipedia.org/wiki/Weeks_manifold)\n>\n> ###### 4-Manifolds\n> - [Complex projective plane](https://en.wikipedia.org/wiki/Complex_projective_plane)\n> - [Del Pezzo surface](https://en.wikipedia.org/wiki/Del_Pezzo_surface)\n> - [E<sub>8</sub> manifold](https://en.wikipedia.org/wiki/E8_manifold)\n> - [Enriques surface](https://en.wikipedia.org/wiki/Enriques_surface)\n> - [Exotic ℝ<sup>4</sup>](https://en.wikipedia.org/wiki/Exotic_R4)\n> - [Hirzebruch surface](https://en.wikipedia.org/wiki/Hirzebruch_surface)\n> - [K3 surface](https://en.wikipedia.org/wiki/K3_surface)",
      "> [!expand]- Click here to expand...\n> ###### Manifolds Related to Spheres\n> - [Brieskorn manifold](https://en.wikipedia.org/wiki/Brieskorn_manifold)\n> - [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere)\n> - [Homology sphere](https://en.wikipedia.org/wiki/Homology_sphere)\n> - [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere)\n> - [Lens space](https://en.wikipedia.org/wiki/Lens_space)\n> - [Spherical 3-manifold](https://en.wikipedia.org/wiki/Spherical_3-manifold)\n>\n> ###### Special classes of Riemannian Manifolds\n> - [Einstein manifold](https://en.wikipedia.org/wiki/Einstein_manifold)\n> \t- [Ricci-flat manifold](https://en.wikipedia.org/wiki/Ricci-flat_manifold)\n> - [<em>G</em><sub>2</sub> manifold](https://en.wikipedia.org/wiki/G2_manifold)\n> - [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold)\n> \t- [Calabi–Yau manifold](https://en.wikipedia.org/wiki/Calabi%E2%80%93Yau_manifold)\n> \t- [Hyperkähler manifold](https://en.wikipedia.org/wiki/Hyperk%C3%A4hler_manifold)\n> - [Quaternionic Kähler manifold](https://en.wikipedia.org/wiki/Quaternionic_K%C3%A4hler_manifold)\n> - [Riemannian symmetric space](https://en.wikipedia.org/wiki/Riemannian_symmetric_space)\n> - [Spin(7) manifold](https://en.wikipedia.org/wiki/Spin(7)_manifold)",
      "> [!expand]- Click here to expand...\n> ###### Manifolds definable by a particular choice of atlas\n> - [Affine manifold](https://en.wikipedia.org/wiki/Affine_manifold)\n> - [Analytic manifold](https://en.wikipedia.org/wiki/Analytic_manifold)\n> - [Complex manifold](https://en.wikipedia.org/wiki/Complex_manifold)\n> - [Differentiable (smooth) manifold](https://en.wikipedia.org/wiki/Differentiable_manifold)\n> - [Piecewise linear manifold](https://en.wikipedia.org/wiki/Piecewise_linear_manifold)\n> - [Lipschitz manifold](https://en.wikipedia.org/wiki/Lipschitz_manifold)\n> - [Topological manifold](https://en.wikipedia.org/wiki/Topological_manifold)\n>\n> ###### Manifolds with additional structure\n> - [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold)\n> - [Almost symplectic manifold](https://en.wikipedia.org/wiki/Almost_symplectic_manifold)\n> - [Calibrated manifold](https://en.wikipedia.org/wiki/Calibrated_manifold)\n> - [Complex manifold](https://en.wikipedia.org/wiki/Complex_manifold)\n> - [Contact manifold](https://en.wikipedia.org/wiki/Contact_manifold)\n> - [CR manifold](https://en.wikipedia.org/wiki/CR_manifold)\n> - [Finsler manifold](https://en.wikipedia.org/wiki/Finsler_manifold)\n> - [Hermitian manifold](https://en.wikipedia.org/wiki/Hermitian_manifold)\n> - [Hyperkähler manifold](https://en.wikipedia.org/wiki/Hyperk%C3%A4hler_manifold)\n> - [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold)\n> - [Lie group](https://en.wikipedia.org/wiki/Lie_group)\n> - [Pseudo-Riemannian manifold](https://en.wikipedia.org/wiki/Pseudo-Riemannian_manifold)\n> - [Riemannian manifold](https://en.wikipedia.org/wiki/Riemannian_manifold)\n> - [Sasakian manifold](https://en.wikipedia.org/wiki/Sasakian_manifold)\n> - [Spin manifold](https://en.wikipedia.org/wiki/Spin_manifold)\n> - [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold)\n>\n> ###### Infinite-dimensional manifolds\n> - [Banach manifold](https://en.wikipedia.org/wiki/Banach_manifold)\n> - [Fréchet manifold](https://en.wikipedia.org/wiki/Fr%C3%A9chet_manifold)\n> - [Hilbert manifold](https://en.wikipedia.org/wiki/Hilbert_manifold)"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [The Bright Side of Mathematics - Lecture Series](https://www.youtube.com/playlist?list=PLBh2i93oe2qvRGAtgkTszX7szZDVd6jh1)
