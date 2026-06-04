---
title: "SPIRV-Cross - Transpiling Shading／Shader Languages"
created: 2021-09-03T22:30:04.476-05:00
modified: 2021-09-04T21:08:08.340-05:00
parent: "[[Shading／Shader Languages]]"
children: []
---
###### SPIRV-Cross ([https://github.com/KhronosGroup/SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross))
- is a practical tool and library for both:
	- performing reflection on [[Standard Portable Intermediate Representation (SPIR-V)|SPIR-V]]
	- disassembling SPIR-V back to high-level [[Shading／Shader Languages|shading languages]]

# Example
```bash
# 🌋 Compile shaders to SPIR-V binary
glslangValidator -V triangle.vert -o triangle.vert.spv
glslangValidator -V triangle.frag -o triangle.frag.spv

# ❎ HLSL
spirv-cross triangle.vert.spv --hlsl --shader-model 50 --set-hlsl-vertex-input-semantic 0 POSITION --set-hlsl-vertex-input-semantic 1 COLOR --output triangle.vert.hlsl
spirv-cross triangle.frag.spv --hlsl --shader-model 50 --set-hlsl-vertex-input-semantic 0 COLOR --output triangle.frag.hlsl

# ⚪ OpenGL ES 3.1
spirv-cross triangle.vert.spv --version 310 --es --output triangle.vert.glsl
spirv-cross triangle.frag.spv --version 310 --es --output triangle.frag.glsl

# 🤖 Metal
spirv-cross triangle.vert.spv --msl --output triangle.vert.msl
spirv-cross triangle.frag.spv --msl --output triangle.frag.msl
```
