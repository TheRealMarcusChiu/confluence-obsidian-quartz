---
title: "Shading／Shader Languages"
created: 2021-09-03T19:42:49.996-05:00
modified: 2023-05-04T09:24:51.604-05:00
parent: "[[Computer Languages - Graphics & UI]]"
children:
  - "[[High Level Shading／Shader Language (HLSL)]]"
  - "[[Metal Shading／Shader Language (MSL)]]"
  - "[[OpenGL ES Shading Language (ESSL)]]"
  - "[[OpenGL Shading／Shader Language (GLSL)]]"
  - "[[SPIRV-Cross - Transpiling Shading／Shader Languages]]"
  - "[[Standard Portable Intermediate Representation (SPIR-V)]]"
  - "[[Three.js Shading Language (TSL)]]"
  - "[[WebGPU Shading／Shader Language (WGSL)]]"
---
###### Shading/Shader Languages
````excerpt
- is a [[Computer Languages - Graphics & UI|graphics programming language]] adapted to programming shader effects (characterizing surfaces, volumes, and objects)
- such language forms usually consist of special data types, like "vector", "matrix", "color" and "normal"
- the shader language world is fragmented, but every language here is similar enough to [[C]] that one can easily switch between them
````
^excerpt

# What are Shaders
- [[(Vertex - Fragment／Graphic／Pixel - Compute) Shaders|(Vertex - Fragment/Graphic/Pixel - Compute) Shaders]]

# Shader Languages - Low Level

```merge-table
{
  "rows": [
    [
      {
        "content": "Shader Language",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Graphics API Platform",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Standard Portable Intermediate Representation (SPIR-V)]]",
        "bg": "#F4F5F7"
      },
      "[[Vulkan]]"
    ]
  ]
}
```
# Shader Languages - High Level

```merge-table
{
  "rows": [
    [
      {
        "content": "Shader Language",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Graphics API / Platform",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[OpenGL Shading／Shader Language (GLSL)|OpenGL Shading/Shader Language (GLSL)]]",
        "bg": "#F4F5F7"
      },
      "[[OpenGL Family|OpenGL]]"
    ],
    [
      {
        "content": "[[OpenGL ES Shading Language (ESSL)]]",
        "bg": "#F4F5F7"
      },
      "[[OpenGL for Embedded Systems (OpenGL ES)|OpenGL ES]]"
    ],
    [
      {
        "content": "[[WebGPU Shading／Shader Language (WGSL)|WebGPU Shading/Shader Language (WGSL)]]",
        "bg": "#F4F5F7"
      },
      "[[JavaScript - WebGPU|WebGPU]]"
    ],
    [
      {
        "content": "[[Metal Shading／Shader Language (MSL)|Metal Shading/Shader Language (MSL)]]",
        "bg": "#F4F5F7"
      },
      "[[Metal]]"
    ],
    [
      {
        "content": "[[High Level Shading／Shader Language (HLSL)|High Level Shading/Shader Language (HLSL)]]",
        "bg": "#F4F5F7"
      },
      "[[Direct3D]]"
    ]
  ]
}
```
# Transpiling Between High-Level Shader Languages

see: [[SPIRV-Cross - Transpiling Shading／Shader Languages|SPIRV-Cross - Transpiling Shading/Shader Languages]]
