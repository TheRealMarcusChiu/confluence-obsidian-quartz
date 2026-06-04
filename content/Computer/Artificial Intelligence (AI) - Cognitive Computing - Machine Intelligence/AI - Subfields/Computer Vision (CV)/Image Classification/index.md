---
title: "Image Classification"
created: 2023-01-21T11:59:17.021-06:00
modified: 2023-01-21T12:06:04.647-06:00
parent: "[[Computer Vision (CV)]]"
children: []
---
###### Image Classification
````excerpt
- a core task of [[Computer Vision (CV)|computer vision]]
- refers to the task of extracting information classes from a multiband raster image
````
^excerpt

# Image Classification - Challenges
1. <strong>semantic gap</strong> - an image is a tensor of integers between \[0, 255\] (i.e. 800x600x3 3 channels RGB)
2. <strong>viewpoint variation</strong> - all pixels change when the camera moves
3. <strong>illumination</strong> - all pixels change when the light source changes
4. <strong>background clutter</strong> - some pixels changes when the background of the subject changes
5. <strong>occlusion</strong> - parts of the subject are covered
6. <strong>deformation</strong> - the subject can take various forms
7. <strong>intraclass variation</strong> - the subject contains many subclasses
8. <strong>context</strong> - the environment may modify the subject
