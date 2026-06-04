---
title: "Image Moments"
created: 2020-01-18T22:09:49.518-06:00
modified: 2023-06-02T23:05:25.702-05:00
parent: "[[Computer Vision (CV)]]"
children:
  - "[[Rotation Moment Invariants for Recognition of Symmetric Objects]]"
---
# Moment Types

see [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|Raw Moments - Moments About the Origin/Zero - Central/Mean Moments - Moments About The Mean - (Zeroth/First/Second/Third/Fourth/kth/nth) -  of a Probability Density Function]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Moment Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Invariant To",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Function",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Raw Moment (<strong>𝑀<sub>𝑖𝑗</sub></strong>)",
        "bg": "#F4F5F7"
      },
      "",
      "𝑀<sub>𝑖𝑗</sub> = 𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub>𝑥<sup>𝑖</sup>𝑦<sup>𝑗</sup><em>Intensity</em>(𝑥,𝑦)"
    ],
    [
      {
        "content": "Central Moment (<strong>𝑢<sub>𝑖𝑗</sub></strong>)",
        "bg": "#F4F5F7"
      },
      "- translation",
      "𝑢<sub>𝑖𝑗</sub> = 𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub>(𝑥 - 𝐶<sub>𝑥</sub>)<sup>𝑖</sup>(𝑦 - 𝐶<sub>𝑦</sub>)<sup>𝑗</sup><em>Intensity</em>(𝑥,𝑦)\n\nwhere 𝐶<sub>𝑥</sub> and 𝐶<sub>𝑦</sub> are centroids:\n- <strong>𝐶<sub>𝑥</sub></strong> = <font style=\"color: rgb(128,0,0);\">𝑀<sub>10</sub></font>/<font style=\"color: rgb(0,128,0);\">𝑀<sub>00</sub></font> = <font style=\"color: rgb(128,0,0);\">𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub>𝑥·<em>Intensity</em>(𝑥,𝑦)</font> / <font style=\"color: rgb(0,128,0);\">𝛴<sub>x</sub>𝛴<sub>𝑦</sub><em>Intensity</em>(𝑥,𝑦)</font>\n- <strong>𝐶<sub>𝑦</sub></strong> = <font style=\"color: rgb(128,0,0);\">𝑀<sub>01</sub></font>/<font style=\"color: rgb(0,128,0);\">𝑀</font><sub><font style=\"color: rgb(0,128,0);\">00</font></sub>= <font style=\"color: rgb(128,0,0);\">𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub>𝑦·<em>Intensity</em>(𝑥,𝑦)</font> / <font style=\"color: rgb(0,128,0);\">𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub><em>Intensity</em>(𝑥,𝑦)</font>"
    ],
    [
      {
        "content": "Normalized Central Moment (<strong>𝑛<sub>𝑖𝑗</sub></strong>)",
        "bg": "#F4F5F7"
      },
      "- translation\n- scale",
      "- 𝑛<sub>𝑖𝑗</sub> = <font style=\"color: rgb(128,0,0);\">\\[𝑢</font><font style=\"color: rgb(128,0,0);\"><sub>𝑖𝑗</sub></font><font style=\"color: rgb(128,0,0);\">\\]</font> / <font style=\"color: rgb(0,128,0);\">\\[𝑢</font><font style=\"color: rgb(0,128,0);\"><sub>00</sub><sup>(𝑖+𝑗)/2+1</sup>\\]</font>\n- 𝑛<sub>𝑖𝑗</sub> = <font style=\"color: rgb(128,0,0);\">\\[𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub>(𝑥 - 𝐶<sub>𝑥</sub>)<sup>𝑖</sup>(𝑦 - 𝐶<sub>𝑦</sub>)<sup>𝑗</sup><em>Intensity</em>(𝑥,𝑦)</font><font style=\"color: rgb(128,0,0);\">\\]</font> / <font style=\"color: rgb(0,128,0);\">\\[𝛴<sub>𝑥</sub>𝛴<sub>𝑦</sub><em>Intensity</em>(𝑥,𝑦)\\]<sup>(𝑖+𝑗)/2+1</sup></font>"
    ],
    [
      {
        "content": "Hu Moments (ℎ<sub>1</sub>, .., ℎ<sub>7</sub>)",
        "bg": "#F4F5F7"
      },
      "- translation\n- scale\n- rotation\n- reflection",
      "- ℎ<sub>1</sub> = 𝑛<sub>20</sub> + 𝑛<sub>02</sub>\n- ℎ<sub>2</sub> = (𝑛<sub>20</sub> - 𝑛<sub>02</sub>)<sup>2</sup> + 4𝑛<sub>11</sub><sup>2</sup>\n- ℎ<sub>3</sub> = (𝑛<sub>30</sub> - 3𝑛<sub>12</sub>)<sup>2</sup> + (3𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\n- ℎ<sub>4</sub> = (𝑛<sub>30</sub> - 𝑛<sub>12</sub>)<sup>2</sup> + (𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\n- ℎ<sub>5</sub> = (𝑛<sub>30</sub> - 3𝑛<sub>12</sub>)(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)\\[(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)<sup>2</sup> - 3(𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\\] + (3𝑛<sub>21</sub> - 𝑛<sub>03</sub>)(𝑛<sub>21</sub> + 𝑛<sub>03</sub>)\\[3(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)<sup>2</sup> - (𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\\]\n- ℎ<sub>6</sub> = (𝑛<sub>20</sub> + 𝑛<sub>02</sub>)\\[(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)<sup>2</sup> - (𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\\] + 4𝑛<sub>11</sub>(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)(𝑛<sub>21</sub> + 𝑛<sub>03</sub>)\n- ℎ<sub>7</sub> = (3𝑛<sub>21</sub> - 𝑛<sub>03</sub>)(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)\\[(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)<sup>2</sup> - 3(𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\\] - (𝑛<sub>30</sub> - 3𝑛<sub>12</sub>)(𝑛<sub>21</sub> + 𝑛<sub>03</sub>)\\[3(𝑛<sub>30</sub> + 𝑛<sub>12</sub>)<sup>2</sup> - (𝑛<sub>21</sub> + 𝑛<sub>03</sub>)<sup>2</sup>\\]\n\nHu Moments is a set of 7 numbers calculated using central moments that are invariant to image transformations. The first 6 moments have been proven to be invariant to translation, scale, rotation, and reflection. While the 7th moment’s sign changes for image reflection"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Coding Moments With OpenCV
- [https://www.learnopencv.com/shape-matching-using-hu-moments-c-python/](https://www.learnopencv.com/shape-matching-using-hu-moments-c-python/)
- [https://docs.opencv.org/master/d5/d45/tutorial_py_contours_more_functions.html](https://docs.opencv.org/master/d5/d45/tutorial_py_contours_more_functions.html)
