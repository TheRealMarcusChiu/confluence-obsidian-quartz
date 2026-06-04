---
title: "cmake"
created: 2019-10-30T16:23:25.381-05:00
modified: 2019-12-31T18:06:26.741-06:00
parent: "[[2 - Build Tools／Systems]]"
children: []
---
<strong>cmake</strong> stands for <strong>Cross-platform Make</strong>
### <strong>The Configure and Generate Steps</strong>

no matter how you run cmake, it performs 2 steps:
- <strong>configure</strong> step
- <strong>generate</strong> step

### Commands
- cmake \[options\] \<path-to-source\>
- cmake \[options\] \<path-to-existing-build\>
- cmake \[options\] -S \<path-to-source\> -B \<path-to-build\>

### Specifying Cmake Which Generator to Use
- for a list of available generators, run
  cmake --help
- to specify a generator use -G option followed by the generator
  cmake -G "Visual Studio 15 2017"

### Intro Tutorial
- download: [https://github.com/TheRealMarcusChiu/CMakeDemo](https://github.com/TheRealMarcusChiu/CMakeDemo)
- mkdir build
- cmake -S . -B build
