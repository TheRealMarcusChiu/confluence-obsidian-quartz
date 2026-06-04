---
title: "Transformations - Properties／Types"
created: 2023-07-07T09:58:40.104-05:00
modified: 2025-10-02T23:54:45.904-05:00
parent: "[[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms]]"
children:
  - "[[Affine (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Affinity]]"
  - "[[Analytic Functions]]"
  - "[[Arithmetic (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Assignment Operators]]"
  - "[[Associativity／Associative]]"
  - "[[Bilinear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[C0 Functions - C1 Functions - C2 Functions - Ck Functions]]"
  - "[[Closed Property]]"
  - "[[Commutativity／Commutative]]"
  - "[[Comparison Operators]]"
  - "[[Complex-Valued Function (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Conformal ／ Angle-Preserving (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Continuous／Continuity (Mathematics)]]"
  - "[[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Convex Combination]]"
  - "[[Convolution - Convolution Integral]]"
  - "[[Distributivity／Distributive]]"
  - "[[Even Function - Odd Function]]"
  - "[[Explicit Functions - Implicit Functions]]"
  - "[[Finitary Relation (k-ary relation)]]"
  - "[[Finitary／k-ary (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence]]"
  - "[[Hadamard Product - Element-Wise Product - Entrywise Product - Schur Product]]"
  - "[[Homogeneous Function (Homogeneity of Degree k - Degree of Homogeneity)]]"
  - "[[Homography - Projectivity - Projective Collineation (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Idempotent]]"
  - "[[Identity／Neutral Element - Right／Left Identity Element]]"
  - "[[Invertibility／Invertible／Inverse Element - Right／Left Inverse Element]]"
  - "[[Isogonal (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Isometry／Rigid／Euclidean (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism]]"
  - "[[Logical Operators]]"
  - "[[Moments／Moment (Mathematics)]]"
  - "[[Monotonic／Monotone Function]]"
  - "[[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)]]"
  - "[[Multilinear／Multi-Linear k-Linear Map (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Operator Norm]]"
  - "[[Partial Function - Total Function]]"
  - "[[Pointwise Functions／Operations／Operators]]"
  - "[[Positive／Negative Semi Definite／Definiteness Indefinite Functions]]"
  - "[[Proper Rigid (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Rototranslation]]"
  - "[[Real-Valued Function (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
  - "[[Transformations - Number of Input／Output Types (Multi／Single-Variable／Variate／Vector-Valued Functions)]]"
  - "[[Unit Step Function - Heavyside Step Function]]"
---
see [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|Transformations/Operations/Operators/Mappings/Maps/Functions/Morphisms]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Condition Number]]
- [Constant](https://en.wikipedia.org/wiki/Constant_function)
- [Identity](https://en.wikipedia.org/wiki/Identity_function)
- [Linear](https://en.wikipedia.org/wiki/Linear_map)
- [Polynomial](https://en.wikipedia.org/wiki/Polynomial)
- [Rational](https://en.wikipedia.org/wiki/Rational_function)
- [Algebraic](https://en.wikipedia.org/wiki/Algebraic_function)
- [Analytic](https://en.wikipedia.org/wiki/Analytic_function)
- [Smooth](https://en.wikipedia.org/wiki/Smooth_function)
- [Continuous](https://en.wikipedia.org/wiki/Continuous_function)
- [Measurable](https://en.wikipedia.org/wiki/Measurable_function)
```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "# Parameters Needed",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "2D Space",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "3D Space",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Proper Rigid (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Rototranslation|Proper Rigid Transformations]]",
        "bg": "#F4F5F7"
      },
      "- rotation + translation",
      {
        "content": "3",
        "align": "center"
      },
      {
        "content": "6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Isometry／Rigid／Euclidean (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|Isometry/Rigid/Euclidean Transformations]]",
        "bg": "#F4F5F7"
      },
      "- rotation + translation + reflection\n- conserves [[L2／Euclidean Distance Metric|Euclidean distance]] between 2 points before and after transformation",
      {
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|Linear Transformation]]",
        "bg": "#F4F5F7"
      },
      "- rotation + translation + reflection + dilation + shear + projection + etc\n- conserves linearity (i.e. conserves vector addition and scalar multiplication)",
      {
        "content": "4",
        "align": "center"
      },
      {
        "content": "9",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Affine (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Affinity|Affine Transformation]]",
        "bg": "#F4F5F7"
      },
      "- linear transformation + translation",
      {
        "content": "6",
        "align": "center"
      },
      {
        "content": "12",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|Continuous Transformation]]",
        "bg": "#F4F5F7"
      },
      "- TODO",
      "",
      ""
    ],
    [
      {
        "content": "Continuous (Bounded) Transformation",
        "bg": "#F4F5F7"
      },
      "- conserves the topological structure",
      {
        "align": "center"
      },
      {
        "align": "center"
      }
    ]
  ]
}
```
