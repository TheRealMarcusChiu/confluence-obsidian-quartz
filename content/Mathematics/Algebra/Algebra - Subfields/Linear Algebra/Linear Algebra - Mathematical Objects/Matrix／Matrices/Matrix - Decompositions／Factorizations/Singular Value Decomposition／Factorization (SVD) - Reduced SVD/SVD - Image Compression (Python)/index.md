---
title: "SVD - Image Compression (Python)"
created: 2021-09-13T05:25:51.724-05:00
modified: 2021-09-13T05:25:51.724-05:00
parent: "[[Singular Value Decomposition／Factorization (SVD) - Reduced SVD]]"
children: []
---
### Code
```
from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
import os
plt.rcParams['figure.figsize'] = [16, 8]

A = imread('dog.jpg')
X = np.mean(A, -1)  # convert RGB to grayscale

img = plt.imshow(X)
img.set_cmap('gray')
plt.axis('off')
plt.show()

U, S, VT = np.linalg.svd(X, full_matrices=False)
S = np.diag(S)

j = 0
for r in (5, 20, 100):
	# construct approximate image
	Xapprox = U[:,:r] @ S[0:r,:r] @ VT[:r,:]
	plt.figure(j+1)
	j += 1
	img = plt.imshow(Xapprox)
	img.set_cmap('gray')
	plt.axis('off')
	plt.title('r = ' + str(r))
	plt.show()

plt.figure(1)
plt.semilogy(np.diag(S))
plt.title('Singular Values')
plt.show()

plt.figure(2)
plt.plot(np.cumsum(np.diag(S)) / np.sum(np.diag(s)))
plt.title('Singular Values: Cumulative Sum')
plt.show()
```
### Resources

![](https://www.youtube.com/watch?v=H7qMMudo3e8&list=PLMrJAkhIeNNSVjnsviglFoY2nXildDCcv&index=6)
