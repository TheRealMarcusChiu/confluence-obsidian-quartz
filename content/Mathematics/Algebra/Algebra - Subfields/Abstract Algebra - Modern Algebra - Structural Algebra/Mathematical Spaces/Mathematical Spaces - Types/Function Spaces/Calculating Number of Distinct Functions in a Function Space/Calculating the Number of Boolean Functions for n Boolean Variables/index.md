---
title: "Calculating the Number of Boolean Functions for n Boolean Variables"
created: 2021-09-13T05:29:26.848-05:00
modified: 2023-07-03T16:37:32.066-05:00
parent: "[[Calculating Number of Distinct Functions in a Function Space]]"
children: []
---
### How many semantically different boolean functions are there for 𝑛 boolean variables?
###### Answer

2<sup>([[Permutations - Combinations - Total Combination|𝑡𝑜𝑡𝑎𝑙-𝑐𝑜𝑚𝑏𝑖𝑛𝑎𝑡𝑖𝑜𝑛]])</sup>= 2<sup>(2<sup>𝑛</sup>)</sup>
###### Intuition

for 𝑛=2 boolean variables: 𝐴 and 𝐵

2<sup>(2<sup>𝑛</sup>)</sup>= 2<sup>(2<sup>2</sup>)</sup> = 2<sup>(4)</sup> = 16 total functions 𝐹<sub>𝑖</sub>'s

```merge-table
{
  "rows": [
    [
      {
        "content": "𝐴",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐵",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>1</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>2</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>3</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>4</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>5</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>6</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>7</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>8</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>9</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>10</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>11</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>12</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>13</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>14</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹<sub>15</sub>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ],
    [
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ],
    [
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ],
    [
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "0",
        "bg": "red"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      },
      {
        "content": "1",
        "bg": "green"
      }
    ]
  ]
}
```
