---
title: "Ada Lovelace (Microarchitecture)"
created: 2022-12-18T00:47:44.249-06:00
modified: 2022-12-18T00:57:09.101-06:00
parent: "[[Nvidia Microarchitectures]]"
children: []
---
###### Ada Lovelace (Microarchitecture)
- is the codename for an [[Nvidia Microarchitectures|Nvidia Microarchitecture]]
- successor to the Ampere microarchitecture
- officially announced on September 20, 2022
- use TSMC's new 5 nm "4N" process

# Ada Lovelace - Chip Comparisons

```merge-table
{
  "rows": [
    [
      {
        "content": "Chip",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "AD102",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "AD103",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "AD104",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "AD106",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "AD107",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Transistors",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "76.3B",
        "align": "center"
      },
      {
        "content": "45.9B",
        "align": "center"
      },
      {
        "content": "35.8B",
        "align": "center"
      },
      {
        "content": "TBA",
        "align": "center",
        "colspan": 2,
        "rowspan": 13
      },
      null
    ],
    [
      {
        "content": "Die size",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "608 mm<sup>2</sup>",
        "align": "center"
      },
      {
        "content": "378.6 mm<sup>2</sup>",
        "align": "center"
      },
      {
        "content": "295 mm<sup>2</sup>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Transistor density",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "125.5 MTr/mm<sup>2</sup>",
        "align": "center"
      },
      {
        "content": "121.1 MTr/mm<sup>2</sup>",
        "align": "center"
      },
      {
        "content": "121.4 MTr/mm<sup>2</sup>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Graphics Processing Clusters (GPC)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "12",
        "align": "center"
      },
      {
        "content": "7",
        "align": "center"
      },
      {
        "content": "?",
        "align": "center"
      }
    ],
    [
      {
        "content": "Streaming Multiprocessors (SM)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "144",
        "align": "center"
      },
      {
        "content": "80",
        "align": "center"
      },
      {
        "content": "60",
        "align": "center"
      }
    ],
    [
      {
        "content": "[CUDA cores](https://en.wikipedia.org/wiki/Unified_shader_model)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "18432",
        "align": "center"
      },
      {
        "content": "10240",
        "align": "center"
      },
      {
        "content": "7680",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Texture mapping units](https://en.wikipedia.org/wiki/Texture_mapping_unit)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "576",
        "align": "center"
      },
      {
        "content": "320",
        "align": "center"
      },
      {
        "content": "240",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Render output units](https://en.wikipedia.org/wiki/Render_output_unit)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "192",
        "align": "center"
      },
      {
        "content": "112",
        "align": "center"
      },
      {
        "content": "80",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Tensor cores](https://en.wikipedia.org/wiki/Deep_learning_super_sampling#Architecture)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "576",
        "align": "center"
      },
      {
        "content": "320",
        "align": "center"
      },
      {
        "content": "240",
        "align": "center"
      }
    ],
    [
      {
        "content": "[RT cores](https://en.wikipedia.org/wiki/Nvidia_RTX)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "144",
        "align": "center"
      },
      {
        "content": "80",
        "align": "center"
      },
      {
        "content": "60",
        "align": "center"
      }
    ],
    [
      {
        "content": "L1 [cache](https://en.wikipedia.org/wiki/Cache_(computing)#Examples_of_hardware_caches) (KB)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "128 per SM",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "L2 cache (MB)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "96",
        "align": "center"
      },
      {
        "content": "64",
        "align": "center"
      },
      {
        "content": "48",
        "align": "center"
      }
    ],
    [
      {
        "content": "[SKU(s)](https://en.wikipedia.org/wiki/Stock_keeping_unit)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "RTX 4090\nRTX 6000 Ada\nL40",
        "align": "center"
      },
      {
        "content": "RTX 4080",
        "align": "center"
      },
      {
        "content": "RTX 4070\nRTX 4070 Ti",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
# Products Using Ada Lovelace

GeForce 40 series
- GeForce RTX 4070 (AD104)
- GeForce RTX 4070 Ti (AD104)
- GeForce RTX 4080 (AD103)
- GeForce RTX 4090 (AD102)

Nvidia Workstation GPUs (formerly Quadro)
- NVIDIA RTX 6000 Ada Generation Graphics Card (AD102)

Nvidia Data Center GPUs (formerly Tesla)
- Nvidia L40 (AD102)
