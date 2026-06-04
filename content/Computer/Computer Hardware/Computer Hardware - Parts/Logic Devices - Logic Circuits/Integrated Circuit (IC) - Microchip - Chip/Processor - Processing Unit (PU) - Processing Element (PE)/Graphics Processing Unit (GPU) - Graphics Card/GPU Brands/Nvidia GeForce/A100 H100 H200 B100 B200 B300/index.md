---
title: "A100 H100 H200 B100 B200 B300"
created: 2025-10-15T23:31:05.896-05:00
modified: 2026-03-19T21:32:08.625-05:00
parent: "[[Nvidia GeForce]]"
children:
  - "[[H100 SXM5]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "GPU",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Architecture",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Memory Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bandwidth",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "FP64 TFLOPS (Vector)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "FP32 TFLOPS",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Tensor Core Perf (FP16 / FP8)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Interconnect",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Power (TDP)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Release",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes / Highlights",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "A100 (SXM)",
        "bg": "#F4F5F7"
      },
      "Ampere",
      "80 GB [[High Bandwidth Memory (HBM) HBM1／HBM2／HBM2E／HBM3／HBM3E／HBM4|HBM2e]]",
      "2.0 TB/s",
      "~19.5",
      "~156 (Tensor)",
      "~312 TFLOPS FP16",
      "NVLink 600 GB/s",
      "400W",
      "2020",
      "Baseline for data-centers; widely deployed, CUDA mature"
    ],
    [
      {
        "content": "H100 (SXM)",
        "bg": "#F4F5F7"
      },
      "Hopper",
      "80 GB HBM2e",
      "3.35 TB/s",
      "~34",
      "~67",
      "~1,979 TFLOPS FP16 / ~3,958 TFLOPS FP8",
      "NVLink 900 GB/s",
      "700W",
      "2023",
      "Excellent AI perf; FP8/FP16 mixed precision; 7 MIG slices"
    ],
    [
      {
        "content": "H200 (SXM)",
        "bg": "#F4F5F7"
      },
      "Hopper (refresh)",
      "141 GB HBM3e",
      "4.8 TB/s",
      "~34",
      "~67",
      "~2,000 TFLOPS FP16 / ~4,000 TFLOPS FP8 (est.)",
      "[[NVLink]] 900 GB/s",
      "700W",
      "2024",
      "Larger memory + 1.6× GPT-3 inference speed vs H100"
    ],
    [
      {
        "content": "B100",
        "bg": "#F4F5F7"
      },
      "Blackwell",
      "192 GB HBM3e",
      "~8 TB/s",
      "~30",
      "~1.8 PFLOPS (Tensor)",
      "~3.5 PFLOPS FP16 / ~7 PFLOPS FP8",
      "NVLink (Gen5)",
      "~700W",
      "2025",
      "Major perf jump; FP4/FP8 formats; energy efficiency focus"
    ],
    [
      {
        "content": "B200",
        "bg": "#F4F5F7"
      },
      "Blackwell",
      "192–384 GB HBM3e",
      "~8 TB/s",
      "~40",
      "~2.2 PFLOPS (Tensor)",
      "~4.5 PFLOPS FP16 / ~9 PFLOPS FP8",
      "[[NVLink]] / NVSwitch",
      "~1000W",
      "2025",
      "Flagship model; optimized for trillion-param models"
    ],
    [
      {
        "content": "B300",
        "bg": "#F4F5F7"
      },
      "Blackwell Ultra",
      "288 GB HBM3e",
      "8 TB/s",
      "~10",
      "~600",
      "~3.5 PFLOPS FP16 / ~7 PFLOPS FP8",
      "NVLink 5 (1.8 TB/s)",
      "~1,400W",
      "2026",
      "288GB VRAM handles 70B+ models on one chip; upgraded to CX-8 1.6T networking."
    ],
    [
      {
        "content": "AMD MI300X",
        "bg": "#F4F5F7"
      },
      "CDNA 3",
      "192 GB [[High Bandwidth Memory (HBM) HBM1／HBM2／HBM2E／HBM3／HBM3E／HBM4|HBM3]]",
      "5.3 TB/s",
      "~21",
      "~122",
      "~1.3 PFLOPS FP16 (BF16)",
      "Infinity Fabric",
      "~750W",
      "2024",
      "Competes with H100/H200; open ROCm stack; strong FP32 perf"
    ],
    [
      {
        "content": "AMD MI300A (APU)",
        "bg": "#F4F5F7"
      },
      "CDNA 3 + Zen 4",
      "128 GB HBM3",
      "5.3 TB/s",
      "~21",
      "~122",
      "~1.3 PFLOPS FP16",
      "Infinity Fabric",
      "~700",
      "2024",
      "Combines CPU + GPU on package (HPC focus)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
