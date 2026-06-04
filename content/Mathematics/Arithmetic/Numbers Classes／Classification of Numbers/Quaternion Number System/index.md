---
title: "Quaternion Number System"
created: 2023-04-01T20:03:50.481-05:00
modified: 2024-01-07T20:57:36.099-06:00
parent: "[[Numbers Classes／Classification of Numbers]]"
children: []
---
###### Quaternions
````excerpt
- the quaternion number system extends the [[Complex Numbers System|complex numbers]]
- is a type of hypercomplex number systems
- was first described by the Irish mathematician William Rowan Hamilton in 1843
- Hamilton defined a quaternion as the quotient of two directed lines in a 2D space, or, equivalently, as the quotient of two vectors
- multiplication of quaternions is non-[[Commutativity／Commutative|commutative]]
````
^excerpt

# Quaternions - Syntax

Quaternions are generally represented in the form
- 𝑎 + 𝑏𝑖 + 𝑐𝑗 + 𝑑𝑘

where:
- 𝑎, 𝑏, 𝑐, and 𝑑 are real numbers
- 1, 𝑖, 𝑗, and 𝑘 are the [[Basis Vectors|basis vectors]] or basis elements

# Quaternion - Multiplication Table

```merge-table
{
  "rows": [
    [
      {
        "content": {
          "rows": [
            [
              {
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "1",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "𝑖",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "𝑗",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "𝑘",
                "header": true,
                "bg": "#F4F5F7"
              }
            ],
            [
              {
                "content": "1",
                "header": true,
                "bg": "#F4F5F7"
              },
              "1",
              "𝑖",
              "𝑗",
              "𝑘"
            ],
            [
              {
                "content": "𝑖",
                "header": true,
                "bg": "#F4F5F7"
              },
              "𝑖",
              "−1",
              "𝑘",
              "-𝑗"
            ],
            [
              {
                "content": "𝑗",
                "header": true,
                "bg": "#F4F5F7"
              },
              "𝑗",
              "−𝑘",
              "−1",
              "𝑖"
            ],
            [
              {
                "content": "𝑘",
                "header": true,
                "bg": "#F4F5F7"
              },
              "𝑘",
              "𝑗",
              "−𝑖",
              "-1"
            ]
          ]
        }
      },
      "The left column shows the pre-multiplier\nThe top row shows the post-multiplier\n\nFor example:\n- 𝑖𝑗 = 𝑘\n- 𝑗𝑖 = -𝑘"
    ]
  ]
}
```
# Quarternion - History & Formula

Hamilton knew that complex numbers could be interpreted as points in a plane, and he was looking for a way to do the same for points in three-dimensional space. Points in space can be represented by their coordinates, which are triples of numbers, and for many years he had known how to add and subtract triples of numbers. However, for a long time, he had been stuck on the problem of multiplication and division. He could not figure out how to calculate the quotient of the coordinates of two points in space. Ferdinand Georg Frobenius later proved in 1877 that for a division algebra over the real numbers to be finite-dimensional and associative, it cannot be 3-dimensional, and there are only three such division algebras:
- real numbers - 1 dimension
- complex numbers - 2 dimensions
- quaternions - 4 dimensions

The great breakthrough in quaternions finally came on Monday 16 October 1843 when he came up with the following formula for the quaternions:
- 𝑖<sup>2</sup> = 𝑗<sup>2</sup> = 𝑘<sup>2</sup> = 𝑖𝑗𝑘 = -1
