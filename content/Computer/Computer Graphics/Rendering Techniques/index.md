---
title: "Rendering Techniques"
created: 2019-12-24T23:23:12.727-06:00
modified: 2025-08-08T14:59:23.114-05:00
parent: "[[Computer Graphics]]"
children:
  - "[[Ray Tracing]]"
---
# Rendering Techniques

```merge-table
{
  "rows": [
    [
      {
        "content": "Rasterization",
        "bg": "#F4F5F7"
      },
      "- is the task of taking an image described in a vector graphics format (shapes) and converting it into a raster image (a series of pixels, dots or lines, which, when displayed together, create the image which was represented via shapes)"
    ],
    [
      {
        "content": "[[Ray Tracing]]",
        "bg": "#F4F5F7"
      },
      "- eye-based - starting at eye\n- light-based - starting at light source(s)"
    ],
    [
      {
        "content": "Ray Marching",
        "bg": "#F4F5F7"
      },
      "- rays are traversed iteratively, effectively dividing each ray into smaller ray segments, sampling some function at each step where rays are traversed iteratively, effectively dividing each ray into smaller ray segments, sampling some function at each step"
    ],
    [
      {
        "content": "Recursive Ray Tracing",
        "bg": "#F4F5F7"
      },
      "when a ray hits a surface, it can generate up to three new types of rays: reflection, refraction, and shadow:\n- a reflection ray is traced in the mirror-reflection direction. The closest object it intersects is what will be seen in the reflection\n- refraction rays traveling through transparent material work similarly, with the addition that a refractive ray could be entering or exiting a material\n- a shadow ray is traced toward each light. If any opaque object is found between the surface and the light, the surface is in shadow and the light does not illuminate it"
    ],
    [
      {
        "content": "Ray Casting",
        "bg": "#F4F5F7"
      },
      "trace rays from the eye, one per pixel, and find the closest object blocking the path of that ray. Think of an image as a screen-door, with each square in the screen being a pixel. This is then the object the eye sees through that pixel. Using the material properties and the effect of the lights in the scene, this algorithm can determine the [shading](https://en.wikipedia.org/wiki/Shading) of this object. The simplifying assumption is made that if a surface faces a light, the light will reach that surface and not be blocked or in shadow. The shading of the surface is computed using traditional 3D computer graphics shading models"
    ],
    [
      {
        "content": "Scanline Rendering",
        "bg": "#F4F5F7"
      },
      "is an algorithm for visible surface determination that works on a row-by-row basis rather than a polygon-by-polygon or pixel-by-pixel basis"
    ],
    [
      {
        "content": "Photon Mapping",
        "bg": "#F4F5F7"
      },
      "is another method that uses both light-based and eye-based ray tracing; in an initial pass, energetic photons are traced along rays from the light source so as to compute an estimate of radiant flux as a function of 3-dimensional space (the eponymous photon map itself). In a subsequent pass, rays are traced from the eye into the scene to determine the visible surfaces, and the photon map is used to estimate the illumination at the visible surface points. The advantage of photon mapping versus bidirectional path tracing is the ability to achieve significant reuse of photons, reducing computation, at the cost of statistical bias"
    ],
    [
      {
        "content": "Path Tracing",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Lumen",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
