---
title: "Self-Organizing Gaussian Grids (SOG)"
created: 2025-09-13T14:09:05.738-05:00
modified: 2025-09-13T14:19:18.026-05:00
parent: "[[3D Gaussian Splatting (3DGS) File Formats]]"
children: []
---
###### Self-Organizing Gaussian Grids
````excerpt
- is a technique for compressing [[3D Gaussian Splatting (3DGS)]] scenes
- it reorganizes thee high-dimensional attributes into locally smooth 2D grids, allowing standard image compression techniques to achieve high compression ratios
- it uses a Parallel Linear Assignment Sorting (PLAS) algorithm to sort Gaussian splat properties, grouping similar attributes spatially to create structured 2D "attribute images" from the initial noisy data
````
^excerpt

# SOG - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Unbundled SOG",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bundled SOG",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- means\\_l.webp\n- means\\_u.webp\n- meta.json\n- quats.webp\n- scales.webp\n- sh0.webp\n- shN\\_centroids.webp\n- shN\\_labels.webp",
      "- file\\_name.sog"
    ]
  ]
}
```
# SOG - How to Create

Given a [[3DGS Polygon File Format (PLY)|PLY]] file convert to SOG
- [https://github.com/playcanvas/splat-transform](https://github.com/playcanvas/splat-transform) - newer but fails at [SegFault Bug](https://github.com/playcanvas/splat-transform/issues/49)
- [https://github.com/playcanvas/sogs](https://github.com/playcanvas/sogs) - deprecated but still works as of Sept 2025

# Resources
- [https://fraunhoferhhi.github.io/Self-Organizing-Gaussians/](https://fraunhoferhhi.github.io/Self-Organizing-Gaussians/)
- [https://github.com/fraunhoferhhi/Self-Organizing-Gaussians?tab=readme-ov-file](https://github.com/fraunhoferhhi/Self-Organizing-Gaussians?tab=readme-ov-file)
