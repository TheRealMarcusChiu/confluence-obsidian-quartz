---
title: "Gradient Descent／Ascent Algorithm - Data Preprocessing Tips"
created: 2023-07-16T19:06:20.038-05:00
modified: 2024-08-14T22:58:44.071-05:00
parent: "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
children: []
---
# Data Preprocessing Types Before Applying the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent Algorithm]]
- <strong>Mean Normalization / Zero Centering</strong> - transform features to have a [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] approximately equal to zero
- <strong>Feature Scaling</strong> - transform features to have a similar scale (get every feature into approximately a (-1,1) range)
	- <strong>Standard Deviation Normalization</strong> - transform features have a [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]] approximately equal to one
- <strong>Decorrelate Data / Data Decorrelation</strong> - transform features to have a [[Correlation|correlation]]  approximately equal to zero (see [[Principal Component Analysis (PCA)|PCA]])
- <strong>Whitening Data / Data Whitening (Mean+Std Normalization & Decorrelation)</strong> - changes the input data into white noise data
```merge-table
{
  "rows": [
    [
      {
        "content": "Original Data",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Mean Normalization",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Std Normalization",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Decorrelation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mean+Std Normalization",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Whitening (Everything)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips/original-data.png|150]]",
        "align": "center"
      },
      {
        "content": "![[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips/zero-centered-data.png|150]]",
        "align": "center"
      },
      {
        "content": "![[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips/std-normalization.png|150]]",
        "align": "center"
      },
      "![[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips/data-correlation.png|150]]",
      {
        "content": "![[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips/normalized-data.png|150]]",
        "align": "center"
      },
      {
        "content": "![[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips/whitening-data.png|150]]",
        "align": "center"
      }
    ]
  ]
}
```

> [!expand]- code used to generate graphs
> ```
> import numpy as np
> import matplotlib.pyplot as plt
>
> # Set the mean and standard deviation for X and Y axes
> mean_x = 2
> std_x = 2
>
> mean_y = 5
> std_y = 0.5
>
> # Set the correlation coefficient
> corr_coeff = 0.0
>
> # Generate correlated normal distribution data
> cov_matrix = np.array([[std_x**2, corr_coeff * std_x * std_y], [corr_coeff * std_x * std_y, std_y**2]])
> x, y = np.random.multivariate_normal([mean_x, mean_y], cov_matrix, 1000).T
>
> # Plot the data
> plt.scatter(x, y, alpha=0.6)
> plt.xlabel('X')
> plt.ylabel('Y')
> plt.title('Correlated Normal Distribution')
> plt.axhline(y=0, color='black', linewidth=0.5)  # Add zero-axis border for Y
> plt.axvline(x=0, color='black', linewidth=0.5)  # Add zero-axis border for X
> plt.grid(True, linestyle='--', linewidth=0.5)
>
> # Set the x-axis and y-axis limits symmetrically around zero
> max_range = np.max(np.abs(np.concatenate([x, y])))
> plt.xlim(-8, 8)
> plt.ylim(-8, 8)
>
> plt.show()
> ```
# Preprocessing for Image Data

see: [[Image Data Preprocessing]]
