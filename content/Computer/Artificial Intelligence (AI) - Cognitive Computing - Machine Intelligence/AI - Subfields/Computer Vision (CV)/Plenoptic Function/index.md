---
title: "Plenoptic Function"
created: 2025-09-02T20:28:53.501-05:00
modified: 2025-09-02T20:34:55.220-05:00
parent: "[[Computer Vision (CV)]]"
children: []
---
###### Plenoptic Function
````excerpt
- is a concept in computer graphics and vision that describes all the light rays visible at every point in 3D space, for every possible direction
- it is a foundational concept for technologies like image-based rendering and [[Light Fields|light field]] photography, as it serves as a complete representation of a scene's luminous environment
````
^excerpt

# 5D to 7D

The five dimensions that define the function are:
- three dimensions of space (𝑥,𝑦,𝑧) - he position of any point in the 3D world where a light ray is being measured
- two dimensions of direction (𝜃,𝜙) - the direction of the light ray passing through that point in space, typically represented by two angles

This is a simplified static version of the function. For dynamic scenes, the function is expanded to seven dimensions to include time and wavelength.

𝐿(𝑥,𝑦,𝑧,𝜃,𝜙), can be thought of as a field that stores the radiance (intensity) of light flowing along every possible ray.
# Relation to Light Fields

A limitation of the 5D plenoptic function is that capturing or storing it in its entirety is impractical. However, in empty space outside of an object's convex hull, the radiance of a light ray remains constant along its path. This redundancy allows for a dimensionality reduction, which leads to the concept of the 4D light field.

<strong>The 4D Light Field:</strong> This reduced function represents all the light rays in empty space. It is commonly parameterized by how rays intersect two parallel planes, often labeled (𝑢,𝑣) and (𝑠,𝑡). This makes it possible to capture a light field using an array of cameras or a plenoptic camera, which can then be used to reconstruct novel views.
# Applications

The plenoptic function and the light field derived from it are fundamental to several advanced imaging technologies, including:
- <strong>Image-based rendering (IBR):</strong> The process of generating new views of a scene from a set of existing images. IBR algorithms essentially sample and reconstruct the plenoptic function.
- <strong>Light field photography:</strong> Used in plenoptic cameras (like those formerly made by Lytro) to capture the directional information of light, allowing for post-capture refocusing and perspective shifts.
- <strong>Novel view synthesis (NVS):</strong> A technique that uses captured image data to synthesize new, unseen views of a scene, a central problem in computer vision.
- <strong>Virtual and augmented reality:</strong> Generating realistic 3D scenes for immersive experiences requires a comprehensive understanding and representation of the light flowing through the environment.
