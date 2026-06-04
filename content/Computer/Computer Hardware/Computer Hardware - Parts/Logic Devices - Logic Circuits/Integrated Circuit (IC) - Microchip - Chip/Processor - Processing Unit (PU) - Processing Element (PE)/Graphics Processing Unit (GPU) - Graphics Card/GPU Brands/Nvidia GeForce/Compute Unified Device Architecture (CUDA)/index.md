---
title: "Compute Unified Device Architecture (CUDA)"
created: 2021-08-13T16:31:28.163-05:00
modified: 2025-10-02T13:11:26.799-05:00
parent: "[[Nvidia GeForce]]"
children:
  - "[[CUDA - C++]]"
  - "[[CUDA Ubuntu Installation]]"
---
###### Compute Unified Device Architecture (CUDA)
````excerpt
- is a [[Parallel - Algorithms／Computing／Programming／Systems|parallel computing]] platform and API that allows the software to use certain types of [[Graphics Processing Unit (GPU) - Graphics Card|graphics processing units (GPUs)]] for general-purpose processing, an approach called general-purpose computing on GPUs (GPGPU)
- is a software layer that gives direct access to the GPU's virtual instruction set and parallel computational elements, for the execution of compute kernels
- one of [[Nvidia]]'s proprietary technologies
````
^excerpt

# CPU Core vs CUDA Core

A single CUDA core is analogous to a CPU core, with the primary difference being that it is less sophisticated but implemented in much greater numbers. A common gaming CPU has anywhere between 2 and 16 cores, but CUDA cores number in the hundreds, even in the lowliest of modern Nvidia GPUs. Meanwhile, high-end cards now have thousands of them

![[Compute Unified Device Architecture (CUDA)/cuda-cores.jpg]]
# Memory Hierarchy
![[Compute Unified Device Architecture (CUDA)/cuda-memory-hierarchy.png|500]]
# Compute Capability (or SM Versions)

```merge-table
{
  "rows": [
    [
      {
        "content": "SM Major Revision Number",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "NVIDIA GPU Architecture",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "9",
        "bg": "#F4F5F7"
      },
      "NVIDIA Hopper GPU Architecture"
    ],
    [
      {
        "content": "8",
        "bg": "#F4F5F7"
      },
      "NVIDIA Ampere GPU Architecture"
    ],
    [
      {
        "content": "7",
        "bg": "#F4F5F7"
      },
      "NVIDIA Volta GPU Architecture"
    ],
    [
      {
        "content": "6",
        "bg": "#F4F5F7"
      },
      "NVIDIA Pascal GPU Architecture"
    ],
    [
      {
        "content": "5",
        "bg": "#F4F5F7"
      },
      "NVIDIA Maxwell GPU Architecture"
    ],
    [
      {
        "content": "3",
        "bg": "#F4F5F7"
      },
      "NVIDIA Kepler GPU Architecture"
    ]
  ]
}
```

SM Versions vs CUDA Versions

```merge-table
{
  "rows": [
    [
      {
        "content": "Thing",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Meaning",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "CUDA Version",
        "bg": "#F4F5F7"
      },
      "Software toolkit for programming CUDA"
    ],
    [
      {
        "content": "Compute Capability",
        "bg": "#F4F5F7"
      },
      "Hardware feature set of a GPU’s SMs"
    ],
    [
      {
        "content": "Link",
        "bg": "#F4F5F7"
      },
      "Newer GPUs (higher SM) require newer CUDA versions (e.g. RTX 4090 (SM 8.9) → needs CUDA ≥ 11.8)"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
