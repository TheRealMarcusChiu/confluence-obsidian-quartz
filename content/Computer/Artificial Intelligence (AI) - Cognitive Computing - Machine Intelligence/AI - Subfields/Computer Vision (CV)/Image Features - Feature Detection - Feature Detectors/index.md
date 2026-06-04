---
title: "Image Features - Feature Detection - Feature Detectors"
created: 2020-01-18T19:35:15.417-06:00
modified: 2025-09-07T23:30:44.420-05:00
parent: "[[Computer Vision (CV)]]"
children:
  - "[[Canny Edge Detector]]"
  - "[[Edge Detection (Sobel - Scharr - Laplacian)]]"
  - "[[Hough Transforms]]"
  - "[[Scale-Invariant Feature Transform (SIFT)]]"
---
a specific implementation of [[Features - Feature Functions - Feature Engineering - Feature-Based Models|Features - Feature Functions]] but used on images
- <strong>image feature</strong> is an interesting part of an image
- <strong>image feature detection</strong> is a low-level image processing operation that examines every pixel to see if there is a feature present at that pixel
- <strong>image feature detector</strong> is an implementation of image feature detection

# Image Feature Types
- edges
- corners / interest points
- blobs / regions or interest points
- ridges

# Image Feature Detectors - Basic Algorithms

```merge-table
{
  "rows": [
    [
      {
        "content": "Image Feature detector",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[Edge](https://en.wikipedia.org/wiki/Edge_detection)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[Corner](https://en.wikipedia.org/wiki/Corner_detection)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[Blob](https://en.wikipedia.org/wiki/Blob_detection)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Ridge",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Canny Edge Detector|Canny]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Edge Detection (Sobel - Scharr - Laplacian)|Sobel]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "Scharr",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "Laplacian",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Kayyali](https://en.wikipedia.org/w/index.php?title=Kayyali_operator&action=edit&redlink=1)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "Prewitt",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "Deriche",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "Differential",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "Roberts Cross",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Harris & Stephens / Plessey / Shi–Tomasi](https://en.wikipedia.org/wiki/Corner_detection#The_Harris_&_Stephens_/_Plessey_/_Shi%E2%80%93Tomasi_corner_detection_algorithms)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[SUSAN](https://en.wikipedia.org/wiki/Corner_detection#The_SUSAN_corner_detector)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "Hessian Feature Strength Measures",
        "bg": "#F4F5F7"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "Harris Operator",
        "bg": "#F4F5F7"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Shi & Tomasi](https://en.wikipedia.org/wiki/Corner_detection#The_Shi_and_Tomasi_corner_detection_algorithm)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Level Curve Curvature](https://en.wikipedia.org/wiki/Corner_detection#The_level_curve_curvature_approach)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[FAST](https://en.wikipedia.org/wiki/Features_from_accelerated_segment_test)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Laplacian of Gaussian (LoG)](https://en.wikipedia.org/wiki/Blob_detection#The_Laplacian_of_Gaussian)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Difference of Gaussians (DoG)](https://en.wikipedia.org/wiki/Difference_of_Gaussians)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Determinant of Hessian (DoH)](https://en.wikipedia.org/wiki/Blob_detection#The_determinant_of_the_Hessian)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Maximally Stable External Regions (MSER)](https://en.wikipedia.org/wiki/MSER)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Principal Curvature-Based Region (PCBR)](https://en.wikipedia.org/wiki/Principal_Curvature-Based_Region_Detector)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Grey-Level blobs](https://en.wikipedia.org/wiki/Blob_detection#Grey-level_blobs,_grey-level_blob_trees_and_scale-space_blobs)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Image Feature Detectors - Advanced Algorithms

```merge-table
{
  "rows": [
    [
      {
        "content": "Feature detector",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "What it Detects",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Hough Transforms|Hough Transform]]",
        "bg": "#F4F5F7"
      },
      "detecting simple shapes such as circles, lines etc in an image"
    ],
    [
      {
        "content": "[[Scale-Invariant Feature Transform (SIFT)]]",
        "bg": "#F4F5F7"
      },
      "robust feature matching across different views or conditions"
    ]
  ],
  "tableStyle": "width: 99.8073%;"
}
```
