---
title: "Computer Organization - Microarchitecture (µarch - uarch)"
created: 2019-07-13T22:20:05.951-05:00
modified: 2025-07-11T17:49:52.919-05:00
parent: "[[Computer Architecture]]"
children:
  - "[[Harvard Architecture]]"
  - "[[Modified Harvard Architecture]]"
  - "[[Nvidia Microarchitectures]]"
  - "[[Processing in Memory (PIM) - Memory-Centric Computing - Near-Data Computing - Computational RAM - In-Memory Computation]]"
  - "[[RDNA (microarchitecture)]]"
  - "[[Systolic Arrays - Wavefront Processors]]"
  - "[[Von Neumann Architecture／Model - Princeton Architecture - Stored-Program Computer]]"
---
###### Computer Organization - Microarchitecture (µarch - uarch)
````excerpt
- sometimes abbreviated as <em>µarch</em> or <em>uarch</em>
- is the way a given [[Instruction Set Architecture (ISA)|instruction set architecture]] is implemented in a particular [[Processor - Processing Unit (PU) - Processing Element (PE)|processor]]
````
^excerpt

# Computer Organization - Classes

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Classes</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>SISD </strong>(Single Instruction Stream, Single Data Stream)",
        "bg": "#F4F5F7"
      },
      "refers to the traditional [[Von Neumann Architecture／Model - Princeton Architecture - Stored-Program Computer|von Neumann architecture]] where a single sequential [[Processor - Processing Unit (PU) - Processing Element (PE)|processing unit (PU)]] operates on a single stream of data",
      {
        "content": "![[Computer Organization - Microarchitecture (µarch - uarch)/1.png|301]]",
        "rowspan": 5
      }
    ],
    [
      {
        "content": "<strong>SIMD</strong> (Single Instruction Stream, Multiple Data Streams)",
        "bg": "#F4F5F7"
      },
      "performs the same operation on multiple data items simultaneously (used in [[Graphics Processing Unit (GPU) - Graphics Card|GPU]]s)"
    ],
    [
      {
        "content": "<strong>MISD</strong> (Multiple Instruction Streams, Single Data Stream)",
        "bg": "#F4F5F7"
      },
      "employs multiple PUs to execute different instructions on a single stream of data. This type of parallelism is not so common but can be found in pipelined architectures such as [[Systolic Arrays - Wavefront Processors|systolic arrays]]"
    ],
    [
      {
        "content": "<strong>MIMD</strong> (Multiple Instruction Streams, Multiple Data Streams)",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(0,51,102);\">uses multiple PUs to execute different instructions on different data streams</font>"
    ],
    [
      {
        "content": "<strong>SIMT</strong> (Single Instruction Stream,\nMultiple Threads)",
        "bg": "#F4F5F7"
      },
      "is SIMD combined with [[Multiprocessor - Multicore - Hyper-Threading - Process & Thread - Multi-Programming／Tasking／Processing／Threading - Parallel - Distributed - Concurrency - Asynchronous|multi-threading]] (i.e. each PU can take on multiple data streams)"
    ]
  ],
  "tableStyle": "width: 99.9174%;"
}
```
# Computer Organization - Class Implementations
see [[Processor - Processing Unit (PU) - Processing Element (PE)]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
