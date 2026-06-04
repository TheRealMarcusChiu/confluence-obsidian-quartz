---
title: "AMD EPYC Processors"
created: 2024-09-22T23:03:02.717-05:00
modified: 2025-10-14T12:13:13.038-05:00
parent: "[[Zen 1,2,3,4,5 + Microarchitecture Processors]]"
children: []
---
###### AMD EPYC Processors
````excerpt
- server CPUs
````
^excerpt

# EPYC Lineup

```merge-table
{
  "rows": [
    [
      {
        "content": "Gen",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Year",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Codename",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Product line",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Cores",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Socket",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Memory",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "1st",
      "2017",
      "[Naples](https://en.wikipedia.org/wiki/Naples)",
      "7001 series",
      "32 × [Zen](https://en.wikipedia.org/wiki/Zen_(first_generation))",
      {
        "content": "[SP3](https://en.wikipedia.org/wiki/Socket_SP3) ([LGA](https://en.wikipedia.org/wiki/Land_grid_array))",
        "rowspan": 4
      },
      {
        "content": "[DDR4](https://en.wikipedia.org/wiki/DDR4_SDRAM)",
        "rowspan": 4
      }
    ],
    [
      "2nd",
      "2019",
      "[Rome](https://en.wikipedia.org/wiki/Rome)",
      "7002 series",
      "64 × [Zen 2](https://en.wikipedia.org/wiki/Zen_2)"
    ],
    [
      {
        "content": "3rd",
        "rowspan": 2
      },
      "2021",
      "[Milan](https://en.wikipedia.org/wiki/Milan)",
      {
        "content": "7003 series",
        "rowspan": 2
      },
      {
        "content": "64 × [Zen 3](https://en.wikipedia.org/wiki/Zen_3)",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "2022",
        "rowspan": 2
      },
      "[Milan](https://en.wikipedia.org/wiki/Milan)-X"
    ],
    [
      {
        "content": "4th",
        "rowspan": 5
      },
      "[Genoa](https://en.wikipedia.org/wiki/Genoa)",
      {
        "content": "9004 series",
        "rowspan": 3
      },
      {
        "content": "96 × [Zen 4](https://en.wikipedia.org/wiki/Zen_4)",
        "rowspan": 2
      },
      {
        "content": "[SP5](https://en.wikipedia.org/wiki/Socket_SP5) (LGA)",
        "rowspan": 3
      },
      {
        "content": "[DDR5](https://en.wikipedia.org/wiki/DDR5_SDRAM)",
        "rowspan": 8
      }
    ],
    [
      {
        "content": "2023",
        "rowspan": 3
      },
      "[Genoa](https://en.wikipedia.org/wiki/Genoa)-X"
    ],
    [
      "[Bergamo](https://en.wikipedia.org/wiki/Bergamo)",
      "128 × [Zen 4c](https://en.wikipedia.org/wiki/Zen_4c)"
    ],
    [
      "[Siena](https://en.wikipedia.org/wiki/Siena)",
      "8004 series",
      "64 × [Zen 4c](https://en.wikipedia.org/wiki/Zen_4c)",
      "[SP6](https://en.wikipedia.org/wiki/Socket_SP6) (LGA)"
    ],
    [
      "2024",
      "[Raphael](https://en.wikipedia.org/wiki/Raphael)",
      "4004 series",
      "16 × [Zen 4](https://en.wikipedia.org/wiki/Zen_4)",
      "[AM5](https://en.wikipedia.org/wiki/Socket_AM5) (LGA)"
    ],
    [
      {
        "content": "5th",
        "rowspan": 3
      },
      {
        "content": "2024",
        "rowspan": 2
      },
      "[Turin](https://en.wikipedia.org/wiki/Turin)",
      {
        "content": "9005 series",
        "rowspan": 2
      },
      "128 × [Zen 5](https://en.wikipedia.org/wiki/Zen_5)",
      {
        "content": "[SP5](https://en.wikipedia.org/wiki/Socket_SP5) (LGA)",
        "rowspan": 2
      }
    ],
    [
      "Turin Dense",
      "192 × [Zen 5c](https://en.wikipedia.org/wiki/Zen_5c)"
    ],
    [
      "2025",
      "[Grado](https://en.wikipedia.org/wiki/Grado,_Friuli_Venezia_Giulia)",
      "4005 series",
      "16 × [Zen 5](https://en.wikipedia.org/wiki/Zen_5)",
      "[AM5](https://en.wikipedia.org/wiki/Socket_AM5) (LGA)"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```

> [!expand-ui]- First generation Epyc (Naples)
> The first generation was composed of only the 7001 series SKUs, all using the same MCM topology with four <em>[Zeppelin](https://en.wikipedia.org/wiki/Zen_(first_generation))</em> dies interconnected on the MCM. Each SOC die contributes its two DDR4 memory channels, 32 external PCIe 3.0 lanes, two 4-core core complexes and associated I/O interfaces like 4 SATA ports or several USB ports.
> ### EPYC 7001 series
>
> Common features:
> - [SP3](https://en.wikipedia.org/wiki/Socket_SP3) socket
> - [Zen](https://en.wikipedia.org/wiki/Zen_(first_generation)) microarchitecture
> - [GloFo](https://en.wikipedia.org/wiki/GlobalFoundries) [14 nm process](https://en.wikipedia.org/wiki/14_nm_process)
> - [MCM](https://en.wikipedia.org/wiki/Multi-chip_module) with four [System-on-a-chip](https://en.wikipedia.org/wiki/System_on_a_chip) (SOC) dies, two core complexes (CCX) per SOC die<sup>[\[30\]](https://en.wikipedia.org/wiki/Epyc#cite_note-zensoc-30)</sup>
> - [Eight-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture) DDR4-2666 (the 7251 model is limited to DDR4-2400)
> - 128 PCIe 3.0 lanes per socket, 64 of which are used for [Infinity Fabric](https://en.wikipedia.org/wiki/Infinity_Fabric) inter-processor links in 2P platforms
> - 7xx1<strong>P</strong> series models are limited to uniprocessor operation (<em>1P</em>, single-socket)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Model",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "[Cores](https://en.wikipedia.org/wiki/Multi-core_processor)\n([threads](https://en.wikipedia.org/wiki/Thread_(computing)))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Chip-\nlets](https://en.wikipedia.org/wiki/Multi-chip_module)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Core\nconfig",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Clock rate](https://en.wikipedia.org/wiki/Clock_rate)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "[Cache size](https://en.wikipedia.org/wiki/Cache_(computing))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null,
>       {
>         "content": "Socket",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Scaling",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[TDP](https://en.wikipedia.org/wiki/Thermal_design_power)\n(W)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\ndate",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\nprice",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "Embedded\noptions",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "Base\n(GHz)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Boost\n(GHz)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L2](https://en.wikipedia.org/wiki/L2_cache)\nper core",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L3](https://en.wikipedia.org/wiki/L3_cache)\nper CCX",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Total",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "7251",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 (16)",
>         "rowspan": 2
>       },
>       {
>         "content": "4<sup>[\\[30\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-zensoc-30)</sup>",
>         "align": "center",
>         "rowspan": 12
>       },
>       {
>         "content": "8 × 1",
>         "rowspan": 2
>       },
>       "2.1",
>       "2.9",
>       {
>         "content": "512 KB",
>         "rowspan": 12
>       },
>       "4 MB",
>       "36 MB",
>       {
>         "content": "SP3",
>         "rowspan": 12
>       },
>       "2P",
>       "120",
>       "Jun 2017",
>       "$475",
>       "7251"
>     ],
>     [
>       {
>         "content": "7261",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.5",
>       "2.9",
>       "8 MB",
>       "68 MB",
>       "2P",
>       "155/170",
>       "Jun 2018",
>       "$570",
>       "7261"
>     ],
>     [
>       {
>         "content": "7281",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "16 (32)",
>         "rowspan": 4
>       },
>       {
>         "content": "8 × 2",
>         "rowspan": 4
>       },
>       "2.1",
>       "2.7",
>       "4 MB",
>       "40 MB",
>       "2P",
>       {
>         "content": "155/170",
>         "rowspan": 3
>       },
>       {
>         "content": "Jun 2017",
>         "rowspan": 3
>       },
>       "$650",
>       "7281"
>     ],
>     [
>       {
>         "content": "7301",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.2",
>       "2.7",
>       {
>         "content": "8 MB",
>         "rowspan": 3
>       },
>       {
>         "content": "72 MB",
>         "rowspan": 3
>       },
>       "2P",
>       "$800",
>       "7301"
>     ],
>     [
>       {
>         "content": "7351(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.4",
>       "2.9",
>       "2P (1P)",
>       "$1100 ($750)",
>       "7351(735P)"
>     ],
>     [
>       {
>         "content": "7371",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "3.1",
>       "3.8",
>       "2P",
>       "200",
>       "Nov 2018",
>       "$1550",
>       "7371"
>     ],
>     [
>       {
>         "content": "7401(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "24 (48)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 3",
>         "rowspan": 2
>       },
>       "2.0",
>       "3.0",
>       {
>         "content": "8 MB",
>         "rowspan": 2
>       },
>       {
>         "content": "76 MB",
>         "rowspan": 2
>       },
>       "2P (1P)",
>       "155/170",
>       {
>         "content": "Jun 2017",
>         "rowspan": 2
>       },
>       "$1850 ($1075)",
>       "7401(740P)"
>     ],
>     [
>       {
>         "content": "7451",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.3",
>       "3.2",
>       "2P",
>       "180",
>       "$2400",
>       "7451"
>     ],
>     [
>       {
>         "content": "7501",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "32 (64)",
>         "rowspan": 4
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 4
>       },
>       "2.0",
>       "3.0",
>       {
>         "content": "8 MB",
>         "rowspan": 4
>       },
>       {
>         "content": "80 MB",
>         "rowspan": 4
>       },
>       "2P",
>       "155/170",
>       {
>         "content": "Jun 2017",
>         "rowspan": 2
>       },
>       "$3400",
>       "7501"
>     ],
>     [
>       {
>         "content": "7551(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.0",
>       "3.0",
>       "2P (1P)",
>       "180",
>       "$3400 ($2100)",
>       "7551(755P)"
>     ],
>     [
>       {
>         "content": "7571",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.2",
>       "3.0",
>       "2P",
>       "200",
>       "Nov 2018",
>       "OEM/[AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services)",
>       "--"
>     ],
>     [
>       {
>         "content": "7601",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.2",
>       "3.2",
>       "2P",
>       "180",
>       "Jun 2017",
>       "$4200",
>       "7601"
>     ]
>   ],
>   "tableStyle": "text-align: left;"
> }
> ```

> [!expand-ui]- Second generation Epyc (Rome)
> In November 2018, AMD announced Epyc 2 at their Next Horizon event, the second generation of Epyc processors codenamed "Rome" and based on the Zen 2 [microarchitecture](https://en.wikipedia.org/wiki/Microarchitecture).<sup>[\[40\]](https://en.wikipedia.org/wiki/Epyc#cite_note-42)</sup> The processors feature up to eight [7 nm](https://en.wikipedia.org/wiki/7_nm_process)-based "chiplet" processors with a 14 nm-based [IO](https://en.wikipedia.org/wiki/Input/output) chip providing 128 [PCIe 4.0](https://en.wikipedia.org/wiki/PCI_Express#PCI_Express_4.0) lanes in the center interconnected via [Infinity Fabric](https://en.wikipedia.org/wiki/HyperTransport#Infinity_Fabric). The processors support up to 8 channels of [DDR4](https://en.wikipedia.org/wiki/DDR4_SDRAM) RAM up to 4 [TB](https://en.wikipedia.org/wiki/Terabyte), and introduce support for PCIe 4.0. These processors have up to 64 cores with 128 [SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreading) threads per socket.<sup>[\[41\]](https://en.wikipedia.org/wiki/Epyc#cite_note-43)</sup> The 7 nm "Rome" is manufactured by [TSMC](https://en.wikipedia.org/wiki/TSMC).<sup>[\[24\]](https://en.wikipedia.org/wiki/Epyc#cite_note-anandtech-24)</sup> It was released on August 7, 2019.<sup>[\[42\]](https://en.wikipedia.org/wiki/Epyc#cite_note-44)</sup> It has 39.5 billion transistors.<sup>[\[43\]](https://en.wikipedia.org/wiki/Epyc#cite_note-45)</sup>
>
> In April 2020, AMD launched three new SKUs using Epyc's 7nm Rome platform. The three processors introduced were the eight-core Epyc 7F32, the 16-core 7F52 and the 24-core 7F72, featuring base clocks up to 3.7 GHz (up to 3.9 GHz with boost) within a TDP range of 180 to 240 watts. The launch was supported by [Dell EMC](https://en.wikipedia.org/wiki/Dell_EMC), [Hewlett Packard Enterprise](https://en.wikipedia.org/wiki/Hewlett_Packard_Enterprise), [Lenovo](https://en.wikipedia.org/wiki/Lenovo), [Supermicro](https://en.wikipedia.org/wiki/Supermicro), and [Nutanix](https://en.wikipedia.org/wiki/Nutanix).<sup>[\[44\]](https://en.wikipedia.org/wiki/Epyc#cite_note-46)</sup>
> ### EPYC 7002 series
>
> Common features:
> - [SP3](https://en.wikipedia.org/wiki/Socket_SP3) socket
> - [TSMC](https://en.wikipedia.org/wiki/TSMC) [7 nm process](https://en.wikipedia.org/wiki/7_nm_process) for the compute dies, [GloFo](https://en.wikipedia.org/wiki/GlobalFoundries) [14 nm process](https://en.wikipedia.org/wiki/14_nm_process) for the I/O die
> - [MCM](https://en.wikipedia.org/wiki/Multi-chip_module) with one <em>I/O Die</em> (IOD) and multiple <em>Core Complex Dies</em> (CCD) for compute, two core complexes (CCX) per CCD chiplet
> - [Eight-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture) DDR4-3200
> - 128 PCIe 4.0 lanes per socket, 64 of which are used for [Infinity Fabric](https://en.wikipedia.org/wiki/Infinity_Fabric) inter-processor links in 2P platforms
> - 7002<strong>P</strong> series models are limited to uniprocessor operation (<em>1P</em>, single-socket)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Model",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "[Cores](https://en.wikipedia.org/wiki/Multi-core_processor)\n([threads](https://en.wikipedia.org/wiki/Thread_(computing)))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Chiplets](https://en.wikipedia.org/wiki/Multi-chip_module)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Core\nconfig<sup>[\\[i\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-47)</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Clock rate",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "[Cache](https://en.wikipedia.org/wiki/Cache_(computing))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null,
>       {
>         "content": "Socket",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Scaling",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[TDP](https://en.wikipedia.org/wiki/Thermal_design_power)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\ndate",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\nprice",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "Base\n(GHz)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Boost\n(GHz)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L2](https://en.wikipedia.org/wiki/L2_cache)\nper core",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L3](https://en.wikipedia.org/wiki/L3_cache)\nper CCX",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Total",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "7232P",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 (16)",
>         "rowspan": 4
>       },
>       {
>         "content": "2 + IOD",
>         "rowspan": 2
>       },
>       "4 × 2",
>       "3.1",
>       "3.2",
>       {
>         "content": "512 KB",
>         "rowspan": 21
>       },
>       "8 MB",
>       {
>         "content": "36 MB",
>         "align": "right"
>       },
>       {
>         "content": "SP3",
>         "rowspan": 21
>       },
>       "1P",
>       {
>         "content": "120 W",
>         "rowspan": 2
>       },
>       {
>         "content": "Aug 7, 2019",
>         "rowspan": 3
>       },
>       "$450"
>     ],
>     [
>       {
>         "content": "7252",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "4 × 2",
>       "3.1",
>       "3.2",
>       {
>         "content": "16 MB",
>         "rowspan": 3
>       },
>       {
>         "content": "68 MB",
>         "align": "right"
>       },
>       {
>         "content": "2P",
>         "rowspan": 3
>       },
>       "$475"
>     ],
>     [
>       {
>         "content": "7262",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "4 + IOD",
>         "rowspan": 2
>       },
>       "8 × 1",
>       "3.2",
>       "3.4",
>       "132 MB",
>       "155 W",
>       "$575"
>     ],
>     [
>       {
>         "content": "7F32",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "8 × 1",
>       "3.7",
>       "3.9",
>       "132 MB",
>       "180 W",
>       "Apr 14, 2020<sup>[\\[45\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-Fepycs-48)</sup>",
>       "$2100"
>     ],
>     [
>       {
>         "content": "7272",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "12 (24)",
>       "2 + IOD",
>       "4 × 3",
>       "2.9",
>       "3.2",
>       "16 MB",
>       {
>         "content": "70 MB",
>         "align": "right"
>       },
>       "2P",
>       "120 W",
>       "Aug 7, 2019",
>       "$625"
>     ],
>     [
>       {
>         "content": "7282",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "16 (32)",
>         "rowspan": 3
>       },
>       "2 + IOD",
>       "4 × 4",
>       "2.8",
>       "3.2",
>       {
>         "content": "16 MB",
>         "rowspan": 3
>       },
>       {
>         "content": "72 MB",
>         "align": "right"
>       },
>       "2P",
>       "120 W",
>       {
>         "content": "Aug 7, 2019",
>         "rowspan": 2
>       },
>       "$650"
>     ],
>     [
>       {
>         "content": "7302(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "4 + IOD",
>       "8 × 2",
>       "3.0",
>       "3.3",
>       "136 MB",
>       "2P (1P)",
>       "155 W",
>       "$978 ($825)"
>     ],
>     [
>       {
>         "content": "7F52",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "8 + IOD",
>       "16 × 1",
>       "3.5",
>       "3.9",
>       "264 MB",
>       "2P",
>       "240 W",
>       "Apr 14, 2020<sup>[\\[45\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-Fepycs-48)</sup>",
>       "$3100"
>     ],
>     [
>       {
>         "content": "7352",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "24 (48)",
>         "rowspan": 3
>       },
>       {
>         "content": "4 + IOD",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 3",
>         "rowspan": 2
>       },
>       "2.3",
>       "3.2",
>       {
>         "content": "16 MB",
>         "rowspan": 3
>       },
>       {
>         "content": "140 MB",
>         "rowspan": 2
>       },
>       "2P",
>       "155 W",
>       {
>         "content": "Aug 7, 2019",
>         "rowspan": 2
>       },
>       "$1350"
>     ],
>     [
>       {
>         "content": "7402(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.8",
>       "3.35",
>       "2P (1P)",
>       "180 W",
>       "$1783 ($1250)"
>     ],
>     [
>       {
>         "content": "7F72",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "6 + IOD",
>       "12 × 2",
>       "3.2",
>       "3.7",
>       "204 MB",
>       "2P",
>       "240 W",
>       "Apr 14, 2020<sup>[\\[45\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-Fepycs-48)</sup>",
>       "$2450"
>     ],
>     [
>       {
>         "content": "7452",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "32 (64)",
>         "rowspan": 4
>       },
>       {
>         "content": "4 + IOD",
>         "rowspan": 3
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 3
>       },
>       "2.35",
>       "3.35",
>       {
>         "content": "16 MB",
>         "rowspan": 4
>       },
>       {
>         "content": "144 MB",
>         "rowspan": 3
>       },
>       "2P",
>       "155 W",
>       {
>         "content": "Aug 7, 2019",
>         "rowspan": 4
>       },
>       "$2025"
>     ],
>     [
>       {
>         "content": "7502(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.5",
>       "3.35",
>       "2P (1P)",
>       "180 W",
>       "$2600 ($2300)"
>     ],
>     [
>       {
>         "content": "7542",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.9",
>       "3.4",
>       {
>         "content": "2P",
>         "rowspan": 2
>       },
>       "225 W",
>       "$3400"
>     ],
>     [
>       {
>         "content": "7532",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "8 + IOD",
>       "16 × 2",
>       "2.4",
>       "3.3",
>       "272 MB",
>       "200 W",
>       "$3350"
>     ],
>     [
>       {
>         "content": "7552",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "48 (96)",
>         "rowspan": 2
>       },
>       "6 + IOD",
>       "12 × 4",
>       "2.2",
>       "3.3",
>       {
>         "content": "16 MB",
>         "rowspan": 2
>       },
>       "216 MB",
>       {
>         "content": "2P",
>         "rowspan": 2
>       },
>       "200 W",
>       {
>         "content": "Aug 7, 2019",
>         "rowspan": 2
>       },
>       "$4025"
>     ],
>     [
>       {
>         "content": "7642",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "8 + IOD",
>       "16 × 3",
>       "2.3",
>       "3.3",
>       "280 MB",
>       "225 W",
>       "$4775"
>     ],
>     [
>       {
>         "content": "7662",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "64 (128)",
>         "rowspan": 4
>       },
>       {
>         "content": "8 + IOD",
>         "rowspan": 4
>       },
>       {
>         "content": "16 × 4",
>         "rowspan": 4
>       },
>       "2.0",
>       "3.3",
>       {
>         "content": "16 MB",
>         "rowspan": 4
>       },
>       {
>         "content": "288 MB",
>         "rowspan": 4
>       },
>       "2P",
>       "225 W",
>       {
>         "content": "Aug 7, 2019",
>         "rowspan": 3
>       },
>       "$6150"
>     ],
>     [
>       {
>         "content": "7702(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.0",
>       "3.35",
>       "2P (1P)",
>       "200 W",
>       "$6450 ($4425)"
>     ],
>     [
>       {
>         "content": "7742",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.25",
>       "3.4",
>       {
>         "content": "2P",
>         "rowspan": 2
>       },
>       "225 W",
>       "$6950"
>     ],
>     [
>       {
>         "content": "7H12",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.6",
>       "3.3",
>       "280 W",
>       "Sep 18, 2019",
>       "---"
>     ]
>   ],
>   "tableStyle": "text-align: left;"
> }
> ```

> [!expand-ui]- Third generation Epyc (Milan)
> At the HPC-AI Advisory Council in the United Kingdom in October 2019, AMD stated specifications for Milan, Epyc chips based on the [Zen 3](https://en.wikipedia.org/wiki/Zen_3) microarchitecture.<sup>[\[46\]](https://en.wikipedia.org/wiki/Epyc#cite_note-alcorn-49)</sup> Milan chips will use [Socket SP3](https://en.wikipedia.org/wiki/Socket_SP3), with up to 64 cores on package, and support eight-channel [DDR4](https://en.wikipedia.org/wiki/DDR4_SDRAM) [RAM](https://en.wikipedia.org/wiki/Random_access_memory) and 128 [PCIe 4.0](https://en.wikipedia.org/wiki/PCI_Express#PCI_Express_4.0) lanes.<sup>[\[46\]](https://en.wikipedia.org/wiki/Epyc#cite_note-alcorn-49)</sup> It also announced plans for the subsequent generation of chips, codenamed Genoa, that will be based on the Zen 4 microarchitecture and use [Socket SP5](https://en.wikipedia.org/wiki/Socket_SP5).<sup>[\[46\]](https://en.wikipedia.org/wiki/Epyc#cite_note-alcorn-49)</sup>
>
> Milan CPUs were launched by AMD on March 15, 2021.<sup>[\[47\]](https://en.wikipedia.org/wiki/Epyc#cite_note-50)</sup>
>
> Milan-X CPUs were launched March 21, 2022.<sup>[\[6\]](https://en.wikipedia.org/wiki/Epyc#cite_note-:0-6)</sup> They use 3D V-Cache technology to increase the maximum L3 cache per socket capacity from 256 MB to 768 MB.<sup>[\[48\]](https://en.wikipedia.org/wiki/Epyc#cite_note-51)</sup><sup>[\[49\]](https://en.wikipedia.org/wiki/Epyc#cite_note-52)</sup><sup>[\[50\]](https://en.wikipedia.org/wiki/Epyc#cite_note-53)</sup>
> ### EPYC 7003 series
>
> Common features:
> - [SP3](https://en.wikipedia.org/wiki/Socket_SP3) socket
> - [Zen 3](https://en.wikipedia.org/wiki/Zen_3) microarchitecture
> - [TSMC](https://en.wikipedia.org/wiki/TSMC) [7 nm process](https://en.wikipedia.org/wiki/7_nm_process) for the compute and cache dies, [GloFo](https://en.wikipedia.org/wiki/GlobalFoundries) [14 nm process](https://en.wikipedia.org/wiki/14_nm_process) for the I/O die
> - [MCM](https://en.wikipedia.org/wiki/Multi-chip_module) with one <em>I/O Die</em> (IOD) and multiple <em>Core Complex Dies</em> (CCD) for compute, one core complex (CCX) per CCD chiplet
> - [Eight-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture) DDR4-3200
> - 128 PCIe 4.0 lanes per socket, 64 of which are used for [Infinity Fabric](https://en.wikipedia.org/wiki/Infinity_Fabric) inter-processor links in 2P platforms
> - 7003<strong>X</strong> series models include 64 MiB L3 cache dies [stacked](https://en.wikipedia.org/wiki/Three-dimensional_integrated_circuit) on top of the compute dies (<em>3D V-Cache</em>)
> - 7003<strong>P</strong> series models are limited to uniprocessor operation (<em>1P</em>, single-socket)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Model",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "[Cores](https://en.wikipedia.org/wiki/Multi-core_processor)\n([threads](https://en.wikipedia.org/wiki/Thread_(computing)))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Chiplets](https://en.wikipedia.org/wiki/Multi-chip_module)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Core\nconfig\n<sup>[\\[i\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-54)</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Clock rate",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "[Cache size](https://en.wikipedia.org/wiki/Cache_(computing))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null,
>       {
>         "content": "Socket",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Scaling",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       },
>       {
>         "content": "[TDP](https://en.wikipedia.org/wiki/Thermal_design_power)\ndefault (range)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\nprice",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "Base\n(GHz)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Boost\n(GHz)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L2](https://en.wikipedia.org/wiki/L2_cache)\nper core",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L3](https://en.wikipedia.org/wiki/L3_cache)\nper CCX",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Total",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "7203(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 (16)",
>         "rowspan": 2
>       },
>       {
>         "content": "2 + IOD",
>         "align": "right"
>       },
>       "2 × 4",
>       "2.8",
>       "3.4",
>       {
>         "content": "512 KB",
>         "rowspan": 23
>       },
>       {
>         "content": "32 MB",
>         "rowspan": 2
>       },
>       {
>         "content": "68 MB",
>         "align": "right"
>       },
>       {
>         "content": "SP3",
>         "rowspan": 23
>       },
>       "2P (1P)",
>       "120 W (120-150)",
>       "$348 ($338)"
>     ],
>     [
>       {
>         "content": "72F3",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right"
>       },
>       "8 × 1",
>       "3.7",
>       "4.1",
>       "260 MB",
>       "2P",
>       "180 W (165-200)",
>       "$2468"
>     ],
>     [
>       {
>         "content": "7303(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "16 (32)",
>         "rowspan": 5
>       },
>       {
>         "content": "2 + IOD",
>         "align": "right"
>       },
>       "2 × 8",
>       "2.4",
>       "3.4",
>       {
>         "content": "32 MB",
>         "rowspan": 4
>       },
>       {
>         "content": "72 MB",
>         "align": "right"
>       },
>       "2P (1P)",
>       "130 W (120-150)",
>       "$604 ($594)"
>     ],
>     [
>       {
>         "content": "7313(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "4 + IOD",
>         "align": "right",
>         "rowspan": 2
>       },
>       {
>         "content": "4 × 4",
>         "rowspan": 2
>       },
>       "3.0",
>       "3.7",
>       {
>         "content": "136 MB",
>         "rowspan": 2
>       },
>       "2P (1P)",
>       "155 W (155-180)",
>       "$1083 ($913)"
>     ],
>     [
>       {
>         "content": "7343",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "3.2",
>       "3.9",
>       {
>         "content": "2P",
>         "rowspan": 3
>       },
>       "190 W (165-200)",
>       "$1565"
>     ],
>     [
>       {
>         "content": "73F3",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right"
>       },
>       {
>         "content": "8 × 2",
>         "rowspan": 2
>       },
>       "3.5",
>       "4.0",
>       "264 MB",
>       "240 W (225-240)",
>       "$3521"
>     ],
>     [
>       {
>         "content": "7373X",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8* + IOD",
>         "align": "right"
>       },
>       "3.05",
>       "3.8",
>       "96 MB",
>       "776 MB",
>       "240 W (225-<strong>280</strong>)",
>       "$4185"
>     ],
>     [
>       {
>         "content": "7413",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "24 (48)",
>         "rowspan": 4
>       },
>       {
>         "content": "4 + IOD",
>         "align": "right",
>         "rowspan": 2
>       },
>       {
>         "content": "4 × 6",
>         "rowspan": 2
>       },
>       "2.65",
>       "3.6",
>       {
>         "content": "32 MB",
>         "rowspan": 3
>       },
>       {
>         "content": "140 MB",
>         "rowspan": 2
>       },
>       "2P",
>       "180 W (165-200)",
>       "$1825"
>     ],
>     [
>       {
>         "content": "7443(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.85",
>       "4.0",
>       "2P (1P)",
>       "200 W (165-200)",
>       "$2010 ($1337)"
>     ],
>     [
>       {
>         "content": "74F3",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right"
>       },
>       {
>         "content": "8 × 3",
>         "rowspan": 2
>       },
>       "3.2",
>       "4.0",
>       "268 MB",
>       {
>         "content": "2P",
>         "rowspan": 2
>       },
>       "240 W (225-240)",
>       "$2900"
>     ],
>     [
>       {
>         "content": "7473X",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8* + IOD",
>         "align": "right"
>       },
>       "2.8",
>       "3.7",
>       "96 MB",
>       "780 MB",
>       "240 W (225-<strong>280</strong>)",
>       "$3900"
>     ],
>     [
>       {
>         "content": "7453",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "28 (56)",
>       {
>         "content": "4 + IOD",
>         "align": "right"
>       },
>       "4 × 7",
>       "2.75",
>       "3.45",
>       "16 MB",
>       {
>         "content": "78 MB",
>         "align": "right"
>       },
>       "2P",
>       "225 W (225-240)",
>       "$1570"
>     ],
>     [
>       {
>         "content": "7513",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "32 (64)",
>         "rowspan": 4
>       },
>       {
>         "content": "4 + IOD",
>         "align": "right"
>       },
>       "4 × 8",
>       "2.6",
>       "3.65",
>       {
>         "content": "32 MB",
>         "rowspan": 3
>       },
>       "144 MB",
>       "2P",
>       "200 W (165-200)",
>       "$2840"
>     ],
>     [
>       {
>         "content": "7543(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 3
>       },
>       "2.8",
>       "3.7",
>       {
>         "content": "272 MB",
>         "rowspan": 2
>       },
>       "2P (1P)",
>       "225 W (225-240)",
>       "$3761 ($2730)"
>     ],
>     [
>       {
>         "content": "75F3",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.95",
>       "4.0",
>       {
>         "content": "2P",
>         "rowspan": 2
>       },
>       {
>         "content": "280 W (225-<strong>280</strong>)",
>         "rowspan": 2
>       },
>       "$4860"
>     ],
>     [
>       {
>         "content": "7573X",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8* + IOD",
>         "align": "right"
>       },
>       "2.8",
>       "3.6",
>       "96 MB",
>       "784 MB",
>       "$5590"
>     ],
>     [
>       {
>         "content": "7R13<sup>[\\[51\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-7R13-55)</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "48 (96)",
>         "rowspan": 2
>       },
>       {
>         "content": "6 + IOD",
>         "align": "right"
>       },
>       "6 × 8",
>       "2.65",
>       "3.7",
>       {
>         "content": "32 MB",
>         "rowspan": 2
>       },
>       "216 MB",
>       "TBD",
>       "TBD",
>       "OEM/AWS"
>     ],
>     [
>       {
>         "content": "7643(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right"
>       },
>       "8 × 6",
>       "2.3",
>       "3.6",
>       "280 MB",
>       "2P (1P)",
>       "225 W (225-240)",
>       "$4995 ($2722)"
>     ],
>     [
>       {
>         "content": "7663",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "56 (112)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 7",
>         "rowspan": 2
>       },
>       {
>         "content": "2.0",
>         "rowspan": 2
>       },
>       {
>         "content": "3.5",
>         "rowspan": 2
>       },
>       {
>         "content": "32 MB",
>         "rowspan": 2
>       },
>       {
>         "content": "284 MB",
>         "rowspan": 2
>       },
>       "2P",
>       "240 W (225-240)",
>       "$6366"
>     ],
>     [
>       {
>         "content": "7663P",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "1P",
>       "240 W (225-<strong>280</strong>)",
>       "$3139"
>     ],
>     [
>       {
>         "content": "7713(P)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "64 (128)",
>         "rowspan": 3
>       },
>       {
>         "content": "8 + IOD",
>         "align": "right",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 8",
>         "rowspan": 3
>       },
>       "2.0",
>       "3.675",
>       {
>         "content": "32 MB",
>         "rowspan": 2
>       },
>       {
>         "content": "288 MB",
>         "rowspan": 2
>       },
>       "2P (1P)",
>       "225 W (225-240)",
>       "$7060 ($5010)"
>     ],
>     [
>       {
>         "content": "7763",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.45",
>       "3.4",
>       {
>         "content": "2P",
>         "rowspan": 2
>       },
>       {
>         "content": "280 W (225-<strong>280</strong>)",
>         "rowspan": 2
>       },
>       "$7890"
>     ],
>     [
>       {
>         "content": "7773X",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8* + IOD",
>         "align": "right"
>       },
>       "2.2",
>       "3.5",
>       "96 MB",
>       "800 MB",
>       "$8800"
>     ]
>   ],
>   "tableStyle": "text-align: left;"
> }
> ```

> [!expand-ui]- Fourth generation Epyc (Genoa, Bergamo and Siena)
> On November 10, 2022, AMD launched the fourth generation of Epyc server and data center processors based on the [Zen 4](https://en.wikipedia.org/wiki/Zen_4) microarchitecture, codenamed Genoa.<sup>[\[52\]](https://en.wikipedia.org/wiki/Epyc#cite_note-56)</sup> At their launch event, AMD announced that [Microsoft](https://en.wikipedia.org/wiki/Microsoft) and [Google](https://en.wikipedia.org/wiki/Google) would be some of Genoa's customers.<sup>[\[53\]](https://en.wikipedia.org/wiki/Epyc#cite_note-57)</sup> Genoa features between 16 and 96 cores with support for [PCIe 5.0](https://en.wikipedia.org/wiki/PCI_Express#PCI_Express_5.0) and [DDR5](https://en.wikipedia.org/wiki/DDR5_SDRAM). There was also an emphasis by AMD on Genoa's energy efficiency, which according to AMD CEO [Lisa Su](https://en.wikipedia.org/wiki/Lisa_Su), means "lower total cost of ownership" for enterprise and cloud datacenter clients.<sup>[\[54\]](https://en.wikipedia.org/wiki/Epyc#cite_note-58)</sup> Genoa uses AMD's new [SP5](https://en.wikipedia.org/wiki/Socket_SP5) (LGA 6096) socket.<sup>[\[55\]](https://en.wikipedia.org/wiki/Epyc#cite_note-59)</sup>
>
> On June 13, 2023, AMD introduced Genoa-X with 3D V-Cache technology for technical computing performance and Bergamo (9734, 9754 and 9754S) for cloud native computing.<sup>[\[56\]](https://en.wikipedia.org/wiki/Epyc#cite_note-60)</sup>
>
> On September 18, 2023, AMD introduced the low power Siena lineup of processors, based on the [Zen 4c](https://en.wikipedia.org/wiki/Zen_4c) microarchitecture. Siena supports up to 64 cores on the new SP6 socket, which is currently only used by Siena processors. Siena uses the same I/O die as Bergamo, however certain features, such as dual socket support, are removed, and other features are reduced, such as the change from 12 channel memory support to 6 channel memory support.<sup>[\[57\]](https://en.wikipedia.org/wiki/Epyc#cite_note-61)</sup>
>
> In May 2024, AMD launched the Raphael lineup of processors, based on the Zen4 microarchitecture. Raphael support up to 16 cores on the AM5 socket.
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Model",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Fab](https://en.wikipedia.org/wiki/Semiconductor_device_fabrication)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Cores](https://en.wikipedia.org/wiki/Multi-core_processor)\n([Threads](https://en.wikipedia.org/wiki/Thread_(computing)))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Chiplets](https://en.wikipedia.org/wiki/Multi-chip_module)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Core\nconfig<sup>[\\[i\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-62)</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Clock rate](https://en.wikipedia.org/wiki/Clock_rate)\n([GHz](https://en.wikipedia.org/wiki/Hertz))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "[Cache](https://en.wikipedia.org/wiki/CPU_cache) (MB)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null,
>       {
>         "content": "[Socket](https://en.wikipedia.org/wiki/CPU_socket)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Socket\ncount",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[PCIe 5.0](https://en.wikipedia.org/wiki/PCI_Express)\nlanes",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Memory\nsupport](https://en.wikipedia.org/wiki/Memory_controller)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[TDP](https://en.wikipedia.org/wiki/Thermal_design_power)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\ndate",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Price\n(USD)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "Base",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Boost",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L1](https://en.wikipedia.org/wiki/CPU_cache#Multi-level_caches)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L2](https://en.wikipedia.org/wiki/CPU_cache#Multi-level_caches)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[L3](https://en.wikipedia.org/wiki/CPU_cache#Multi-level_caches)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "[DDR5](https://en.wikipedia.org/wiki/DDR5_SDRAM) ECC",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "<strong>Entry Level (Zen 4 cores)</strong>",
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "[4124P](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4124p.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N5](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 8
>       },
>       "4 (8)",
>       {
>         "content": "1 × CCD\n1 × I/OD",
>         "rowspan": 4
>       },
>       "1 × 4",
>       "3.8",
>       {
>         "content": "5.1",
>         "rowspan": 2
>       },
>       "0.256",
>       "4",
>       "16",
>       {
>         "content": "[AM5](https://en.wikipedia.org/wiki/Socket_AM5)",
>         "rowspan": 8
>       },
>       {
>         "content": "1P",
>         "rowspan": 8
>       },
>       {
>         "content": "24",
>         "rowspan": 8
>       },
>       {
>         "content": "DDR5-5200\n[dual-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture)",
>         "rowspan": 8
>       },
>       {
>         "content": "65 W",
>         "rowspan": 3
>       },
>       {
>         "content": "May 21, 2024",
>         "rowspan": 8
>       },
>       "$149"
>     ],
>     [
>       {
>         "content": "[4244P](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4244p.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "6 (12)",
>       "1 × 6",
>       "3.8",
>       "0.384",
>       "6",
>       "32",
>       "$229"
>     ],
>     [
>       {
>         "content": "[4344P](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4344p.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 (16)",
>         "rowspan": 2
>       },
>       {
>         "content": "1 × 8",
>         "rowspan": 2
>       },
>       "3.8",
>       "5.3",
>       {
>         "content": "0.5",
>         "rowspan": 2
>       },
>       {
>         "content": "8",
>         "rowspan": 2
>       },
>       "32",
>       "$329"
>     ],
>     [
>       {
>         "content": "[4364P](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4364p.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "4.5",
>       "5.4",
>       "32",
>       "105 W",
>       "$399"
>     ],
>     [
>       {
>         "content": "[4464P](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4464p.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "12 (24)",
>         "rowspan": 2
>       },
>       {
>         "content": "2 × CCD\n1 × I/OD",
>         "rowspan": 4
>       },
>       {
>         "content": "2 × 6",
>         "rowspan": 2
>       },
>       "3.7",
>       "5.4",
>       {
>         "content": "0.768",
>         "rowspan": 2
>       },
>       {
>         "content": "12",
>         "rowspan": 2
>       },
>       "64",
>       "65 W",
>       "$429"
>     ],
>     [
>       {
>         "content": "[4484PX](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4484px.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "4.4",
>       "5.6",
>       "128",
>       "120 W",
>       "$599"
>     ],
>     [
>       {
>         "content": "[4564P](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4564p.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "16 (32)",
>         "rowspan": 2
>       },
>       {
>         "content": "2 × 8",
>         "rowspan": 2
>       },
>       "4.5",
>       "5.7",
>       {
>         "content": "1",
>         "rowspan": 2
>       },
>       {
>         "content": "16",
>         "rowspan": 2
>       },
>       "64",
>       "170 W",
>       {
>         "content": "$699",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "[4584PX](https://www.amd.com/en/products/processors/server/epyc/4004-series/amd-epyc-4584px.html)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "4.2",
>       "5.7",
>       "128",
>       "120 W"
>     ],
>     [
>       {
>         "content": "Low Power & Edge (Zen 4c cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "[8024P](https://www.amd.com/en/products/cpu/amd-epyc-8024p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N5](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 12
>       },
>       {
>         "content": "8 (16)",
>         "rowspan": 2
>       },
>       {
>         "content": "1 × CCD\n1 × I/OD",
>         "rowspan": 2
>       },
>       {
>         "content": "2 × 4",
>         "rowspan": 2
>       },
>       "2.4",
>       {
>         "content": "3.0",
>         "rowspan": 8
>       },
>       {
>         "content": "0.5",
>         "rowspan": 2
>       },
>       {
>         "content": "8",
>         "rowspan": 2
>       },
>       {
>         "content": "32",
>         "rowspan": 2
>       },
>       {
>         "content": "[SP6](https://en.wikipedia.org/wiki/Socket_SP6)",
>         "rowspan": 12
>       },
>       {
>         "content": "1P",
>         "rowspan": 12
>       },
>       {
>         "content": "96",
>         "rowspan": 12
>       },
>       {
>         "content": "DDR5-4800\n[six-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture)",
>         "rowspan": 12
>       },
>       "90 W",
>       {
>         "content": "Sep 18, 2023",
>         "rowspan": 12
>       },
>       "$409"
>     ],
>     [
>       {
>         "content": "[8024PN](https://www.amd.com/en/products/cpu/amd-epyc-8024pn)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.05",
>       "80 W",
>       "$525"
>     ],
>     [
>       {
>         "content": "[8124P](https://www.amd.com/en/products/cpu/amd-epyc-8124p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "16 (32)",
>         "rowspan": 2
>       },
>       {
>         "content": "2 × CCD\n1 × I/OD",
>         "rowspan": 4
>       },
>       {
>         "content": "4 × 4",
>         "rowspan": 2
>       },
>       "2.45",
>       {
>         "content": "1",
>         "rowspan": 2
>       },
>       {
>         "content": "16",
>         "rowspan": 2
>       },
>       {
>         "content": "64",
>         "rowspan": 4
>       },
>       "125 W",
>       "$639"
>     ],
>     [
>       {
>         "content": "[8124PN](https://www.amd.com/en/products/cpu/amd-epyc-8124pn)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.0",
>       "100 W",
>       "$790"
>     ],
>     [
>       {
>         "content": "[8224P](https://www.amd.com/en/products/cpu/amd-epyc-8224p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "24 (48)",
>         "rowspan": 2
>       },
>       {
>         "content": "4 × 6",
>         "rowspan": 2
>       },
>       "2.55",
>       {
>         "content": "1.5",
>         "rowspan": 2
>       },
>       {
>         "content": "24",
>         "rowspan": 2
>       },
>       "160 W",
>       "$855"
>     ],
>     [
>       {
>         "content": "[8224PN](https://www.amd.com/en/products/cpu/amd-epyc-8224pn)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.0",
>       "120 W",
>       "$1,015"
>     ],
>     [
>       {
>         "content": "[8324P](https://www.amd.com/en/products/cpu/amd-epyc-8324p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "32 (64)",
>         "rowspan": 2
>       },
>       {
>         "content": "4 × CCD\n1 × I/OD",
>         "rowspan": 6
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 2
>       },
>       "2.65",
>       {
>         "content": "2",
>         "rowspan": 2
>       },
>       {
>         "content": "32",
>         "rowspan": 2
>       },
>       {
>         "content": "128",
>         "rowspan": 6
>       },
>       "180 W",
>       "$1,895"
>     ],
>     [
>       {
>         "content": "[8324PN](https://www.amd.com/en/products/cpu/amd-epyc-8324pn)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.05",
>       "130 W",
>       "$2,125"
>     ],
>     [
>       {
>         "content": "[8434P](https://www.amd.com/en/products/cpu/amd-epyc-8434p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "48 (96)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 6",
>         "rowspan": 2
>       },
>       "2.5",
>       "3.1",
>       {
>         "content": "3",
>         "rowspan": 2
>       },
>       {
>         "content": "48",
>         "rowspan": 2
>       },
>       "200 W",
>       "$2,700"
>     ],
>     [
>       {
>         "content": "[8434PN](https://www.amd.com/en/products/cpu/amd-epyc-8434pn)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.0",
>       "3.0",
>       "155 W",
>       "$3,150"
>     ],
>     [
>       {
>         "content": "[8534P](https://www.amd.com/en/products/cpu/amd-epyc-8534p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "64 (128)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 8",
>         "rowspan": 2
>       },
>       "2.3",
>       {
>         "content": "3.1",
>         "rowspan": 2
>       },
>       {
>         "content": "4",
>         "rowspan": 2
>       },
>       {
>         "content": "64",
>         "rowspan": 2
>       },
>       "200 W",
>       "$4,950"
>     ],
>     [
>       {
>         "content": "[8534PN](https://www.amd.com/en/products/cpu/amd-epyc-8534pn)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.0",
>       "175 W",
>       "$5,450"
>     ],
>     [
>       {
>         "content": "Mainstream Enterprise (Zen 4 cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "[9124](https://www.amd.com/en/products/cpu/amd-epyc-9124)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N5](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 6
>       },
>       "16 (32)",
>       {
>         "content": "4 × CCD\n1 × I/OD",
>         "rowspan": 4
>       },
>       "4 × 4",
>       "3.0",
>       "3.7",
>       "1",
>       "16",
>       {
>         "content": "64",
>         "rowspan": 2
>       },
>       {
>         "content": "[SP5](https://en.wikipedia.org/wiki/Socket_SP5)",
>         "rowspan": 6
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 5
>       },
>       {
>         "content": "128",
>         "rowspan": 6
>       },
>       {
>         "content": "DDR5-4800\n[twelve-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture)",
>         "rowspan": 6
>       },
>       "200 W",
>       {
>         "content": "Nov 10, 2022",
>         "rowspan": 6
>       },
>       "$1,083"
>     ],
>     [
>       {
>         "content": "[9224](https://www.amd.com/en/products/cpu/amd-epyc-9224)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "24 (48)",
>         "rowspan": 2
>       },
>       "4 × 6",
>       "2.5",
>       "3.7",
>       {
>         "content": "1.5",
>         "rowspan": 2
>       },
>       {
>         "content": "24",
>         "rowspan": 2
>       },
>       "200 W",
>       "$1,825"
>     ],
>     [
>       {
>         "content": "[9254](https://www.amd.com/en/products/cpu/amd-epyc-9254)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "4 × 6",
>       "2.9",
>       "4.15",
>       {
>         "content": "128",
>         "rowspan": 2
>       },
>       "220 W",
>       "$2,299"
>     ],
>     [
>       {
>         "content": "[9334](https://www.amd.com/en/products/cpu/amd-epyc-9334)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "32 (64)",
>         "rowspan": 3
>       },
>       "4 × 8",
>       "2.7",
>       "3.9",
>       {
>         "content": "2",
>         "rowspan": 3
>       },
>       {
>         "content": "32",
>         "rowspan": 3
>       },
>       "210 W",
>       "$2,990"
>     ],
>     [
>       {
>         "content": "[9354](https://www.amd.com/en/products/cpu/amd-epyc-9354)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 2
>       },
>       {
>         "content": "3.25",
>         "rowspan": 2
>       },
>       {
>         "content": "3.75",
>         "rowspan": 2
>       },
>       {
>         "content": "256",
>         "rowspan": 2
>       },
>       {
>         "content": "280 W",
>         "rowspan": 2
>       },
>       "$3,420"
>     ],
>     [
>       {
>         "content": "[9354P](https://www.amd.com/en/products/cpu/amd-epyc-9354p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "1P",
>       "$2,730"
>     ],
>     [
>       {
>         "content": "Performance Enterprise (Zen 4 cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "[9174F](https://www.amd.com/en/products/cpu/amd-epyc-9174f)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N5](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 6
>       },
>       {
>         "content": "16 (32)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 6
>       },
>       {
>         "content": "8 × 2",
>         "rowspan": 2
>       },
>       "4.1",
>       "4.4",
>       {
>         "content": "1",
>         "rowspan": 2
>       },
>       {
>         "content": "16",
>         "rowspan": 2
>       },
>       "256",
>       {
>         "content": "[SP5](https://en.wikipedia.org/wiki/Socket_SP5)",
>         "rowspan": 6
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 6
>       },
>       {
>         "content": "128",
>         "rowspan": 6
>       },
>       {
>         "content": "DDR5-4800\n[twelve-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture)",
>         "rowspan": 6
>       },
>       {
>         "content": "320 W",
>         "rowspan": 5
>       },
>       "Nov 10, 2022",
>       "$3,850"
>     ],
>     [
>       {
>         "content": "[9184X](https://www.amd.com/en/products/cpu/amd-epyc-9184x)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "3.55",
>       "4.2",
>       "768",
>       "Jun 13, 2023",
>       "$4,928"
>     ],
>     [
>       {
>         "content": "[9274F](https://www.amd.com/en/products/cpu/amd-epyc-9274f)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "24 (48)",
>       "8 × 3",
>       "4.05",
>       "4.3",
>       "1.5",
>       "24",
>       {
>         "content": "256",
>         "rowspan": 2
>       },
>       {
>         "content": "Nov 10, 2022",
>         "rowspan": 2
>       },
>       "$3,060"
>     ],
>     [
>       {
>         "content": "[9374F](https://www.amd.com/en/products/cpu/amd-epyc-9374f)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "32 (64)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 2
>       },
>       "3.85",
>       "4.3",
>       {
>         "content": "2",
>         "rowspan": 2
>       },
>       {
>         "content": "32",
>         "rowspan": 2
>       },
>       "$4,860"
>     ],
>     [
>       {
>         "content": "[9384X](https://www.amd.com/en/products/cpu/amd-epyc-9384x)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "3.1",
>       "3.9",
>       "768",
>       "Jun 13, 2023",
>       "$5,529"
>     ],
>     [
>       {
>         "content": "[9474F](https://www.amd.com/en/products/cpu/amd-epyc-9474f)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "48 (96)",
>       "8 × 6",
>       "3.6",
>       "4.1",
>       "3",
>       "48",
>       "256",
>       "360 W",
>       "Nov 10, 2022",
>       "$6,780"
>     ],
>     [
>       {
>         "content": "High Performance Computing (Zen 4 cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "[9454](https://www.amd.com/en/products/cpu/amd-epyc-9454)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N5](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 9
>       },
>       {
>         "content": "48 (96)",
>         "rowspan": 2
>       },
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 5
>       },
>       {
>         "content": "8 × 6",
>         "rowspan": 2
>       },
>       {
>         "content": "2.75",
>         "rowspan": 2
>       },
>       {
>         "content": "3.8",
>         "rowspan": 2
>       },
>       {
>         "content": "3",
>         "rowspan": 2
>       },
>       {
>         "content": "48",
>         "rowspan": 2
>       },
>       {
>         "content": "256",
>         "rowspan": 5
>       },
>       {
>         "content": "[SP5](https://en.wikipedia.org/wiki/Socket_SP5)",
>         "rowspan": 9
>       },
>       "1P/2P",
>       {
>         "content": "128",
>         "rowspan": 9
>       },
>       {
>         "content": "DDR5-4800\n[twelve-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture)",
>         "rowspan": 9
>       },
>       {
>         "content": "290 W",
>         "rowspan": 2
>       },
>       {
>         "content": "Nov 10, 2022",
>         "rowspan": 8
>       },
>       "$5,225"
>     ],
>     [
>       {
>         "content": "[9454P](https://www.amd.com/en/products/cpu/amd-epyc-9454p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "1P",
>       "$4,598"
>     ],
>     [
>       {
>         "content": "[9534](https://www.amd.com/en/products/cpu/amd-epyc-9534)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "64 (128)",
>         "rowspan": 3
>       },
>       {
>         "content": "8 × 8",
>         "rowspan": 3
>       },
>       "2.45",
>       "3.7",
>       {
>         "content": "4",
>         "rowspan": 3
>       },
>       {
>         "content": "64",
>         "rowspan": 3
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 2
>       },
>       "280 W",
>       "$8,803"
>     ],
>     [
>       {
>         "content": "[9554](https://www.amd.com/en/products/cpu/amd-epyc-9554)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "3.1",
>         "rowspan": 2
>       },
>       {
>         "content": "3.75",
>         "rowspan": 2
>       },
>       {
>         "content": "360 W",
>         "rowspan": 2
>       },
>       "$9,087"
>     ],
>     [
>       {
>         "content": "[9554P](https://www.amd.com/en/products/cpu/amd-epyc-9554p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "1P",
>       "$7,104"
>     ],
>     [
>       {
>         "content": "[9634](https://www.amd.com/en/products/cpu/amd-epyc-9634)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "84 (168)",
>       {
>         "content": "12 × CCD\n1 × I/OD",
>         "rowspan": 4
>       },
>       "12 × 7",
>       "2.25",
>       "3.7",
>       "5.25",
>       "84",
>       {
>         "content": "384",
>         "rowspan": 3
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 2
>       },
>       "290 W",
>       "$10,304"
>     ],
>     [
>       {
>         "content": "[9654](https://www.amd.com/en/products/cpu/amd-epyc-9654)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "96 (192)",
>         "rowspan": 3
>       },
>       {
>         "content": "12 × 8",
>         "rowspan": 3
>       },
>       {
>         "content": "2.4",
>         "rowspan": 2
>       },
>       {
>         "content": "3.7",
>         "rowspan": 2
>       },
>       {
>         "content": "6",
>         "rowspan": 3
>       },
>       {
>         "content": "96",
>         "rowspan": 3
>       },
>       {
>         "content": "360 W",
>         "rowspan": 2
>       },
>       "$11,805"
>     ],
>     [
>       {
>         "content": "[9654P](https://www.amd.com/en/products/cpu/amd-epyc-9654p)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "1P",
>       "$10,625"
>     ],
>     [
>       {
>         "content": "[9684X](https://www.amd.com/en/products/cpu/amd-epyc-9684x)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "2.55",
>       "3.7",
>       "1152",
>       "1P/2P",
>       "400 W",
>       "Jun 13, 2023",
>       "$14,756"
>     ],
>     [
>       {
>         "content": "Cloud (Zen 4c cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "[9734](https://www.amd.com/en/products/cpu/amd-epyc-9734)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N5](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 3
>       },
>       "112 (224)",
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 3
>       },
>       "16 × 7",
>       "2.2",
>       "3.0",
>       "7",
>       "112",
>       {
>         "content": "256",
>         "rowspan": 3
>       },
>       {
>         "content": "[SP5](https://en.wikipedia.org/wiki/Socket_SP5)",
>         "rowspan": 3
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 3
>       },
>       {
>         "content": "128",
>         "rowspan": 3
>       },
>       {
>         "content": "DDR5-4800\n[twelve-channel](https://en.wikipedia.org/wiki/Multi-channel_memory_architecture#Dual-channel_architecture)",
>         "rowspan": 3
>       },
>       "340 W",
>       {
>         "content": "Jun 13, 2023",
>         "rowspan": 3
>       },
>       "$9,600"
>     ],
>     [
>       {
>         "content": "[9754S](https://www.amd.com/en/products/cpu/amd-epyc-9754S)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "128 (128)",
>       {
>         "content": "16 × 8",
>         "rowspan": 2
>       },
>       {
>         "content": "2.25",
>         "rowspan": 2
>       },
>       {
>         "content": "3.1",
>         "rowspan": 2
>       },
>       {
>         "content": "8",
>         "rowspan": 2
>       },
>       {
>         "content": "128",
>         "rowspan": 2
>       },
>       {
>         "content": "360 W",
>         "rowspan": 2
>       },
>       "$10,200"
>     ],
>     [
>       {
>         "content": "[9754](https://www.amd.com/en/products/cpu/amd-epyc-9754)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       "128 (256)",
>       "$11,900"
>     ]
>   ],
>   "tableStyle": "text-align: center;"
> }
> ```

> [!expand-ui]- Fifth generation Epyc (Grado, Turin and Turin Dense)
> The fifth generation of Epyc processors were showcased by AMD at Computex 2024 on June 3. Named the Epyc 9005 series, it will come in two variants:<sup>[\[58\]](https://en.wikipedia.org/wiki/Epyc#cite_note-63)</sup>
> - [Zen 5](https://en.wikipedia.org/wiki/Zen_5) based, up to 128 cores and 256 threads, built on [TSMC](https://en.wikipedia.org/wiki/TSMC) [N4X](https://en.wikipedia.org/wiki/5_nm_process) process
> - [Zen 5c](https://en.wikipedia.org/wiki/Zen_5c) based, up to 192 cores and 384 threads, built on [TSMC](https://en.wikipedia.org/wiki/TSMC) [N3E](https://en.wikipedia.org/wiki/3_nm_process) process
>
> Both variants are officially referred to under the <em>Turin</em> codename by AMD, although the nickname of "Turin Dense" has also been used to refer to the Zen 5c based CPUs.<sup>[\[59\]](https://en.wikipedia.org/wiki/Epyc#cite_note-64)</sup>
>
> Turin Dense support the x2AVIC CPU feature
>
> Both of these processor series will be socket-compatible with the SP5 socket used by Genoa and Bergamo. Epyc 9005 series were launched on October 10, 2024, at AMD's Advancing AI event 2024.<sup>[\[60\]](https://en.wikipedia.org/wiki/Epyc#cite_note-65)</sup>
>
> In May 2025, AMD announced the Epyc 4005 series of processors, codenamed Grado. They are based on the Zen 5 microarchitecture and support up to 16 cores.<sup>[\[61\]](https://en.wikipedia.org/wiki/Epyc#cite_note-66)</sup> Unlike the 9005 series, these processors are [Socket AM5](https://en.wikipedia.org/wiki/Socket_AM5) compatible.
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Model",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Fab](https://en.wikipedia.org/wiki/Semiconductor_device_fabrication)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Cores](https://en.wikipedia.org/wiki/Multi-core_processor)\n([Threads](https://en.wikipedia.org/wiki/Thread_(computing)))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Chiplets](https://en.wikipedia.org/wiki/Multi-chip_module)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Core\nconfig<sup>[\\[i\\]](https://en.wikipedia.org/wiki/Epyc#cite_note-67)</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Clock rate](https://en.wikipedia.org/wiki/Clock_rate)\n([GHz](https://en.wikipedia.org/wiki/Hertz))",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "[Cache](https://en.wikipedia.org/wiki/CPU_cache) (MB)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null,
>       {
>         "content": "[Socket](https://en.wikipedia.org/wiki/CPU_socket)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Socket\ncount",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[PCIe 5.0](https://en.wikipedia.org/wiki/PCI_Express)\nlanes",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Memory\nsupport](https://en.wikipedia.org/wiki/Memory_controller)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "[Thermal design power](https://en.wikipedia.org/wiki/Thermal_design_power)\n(TDP)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Release\ndate",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Release price\n(USD)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       }
>     ],
>     [
>       {
>         "content": "Base",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Boost",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "L1\nPer Core",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "L2\nPer Core",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "L3\nShared",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "<strong>Turin Dense (Zen 5c cores)</strong>",
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       "9645",
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N3E](https://en.wikipedia.org/wiki/3_nm_process)",
>         "rowspan": 5
>       },
>       "96 (192)",
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 2
>       },
>       "8 × 12",
>       "2.3",
>       {
>         "content": "3.7",
>         "rowspan": 5
>       },
>       {
>         "content": "80 KB",
>         "rowspan": 5
>       },
>       {
>         "content": "1 MB",
>         "rowspan": 5
>       },
>       {
>         "content": "256 MB",
>         "rowspan": 2
>       },
>       {
>         "content": "SP5",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 5
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 5
>       },
>       {
>         "content": "128\n\n(160 in 2-socket systems)",
>         "rowspan": 5
>       },
>       {
>         "content": "DDR5-6000\ntwelve-channel",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 5
>       },
>       "320 W",
>       {
>         "content": "10 Oct, 2024",
>         "rowspan": 5
>       },
>       "$11048"
>     ],
>     [
>       "9745",
>       "128 (256)",
>       "8 × 16",
>       "2.4",
>       "400 W",
>       "$12141"
>     ],
>     [
>       "9825",
>       "144 (288)",
>       "12 × CCD\n1 × I/OD",
>       "12 × 12",
>       "2.2",
>       "384 MB",
>       "390 W",
>       "$13006"
>     ],
>     [
>       "9845",
>       "160 (320)",
>       "10 × CCD\n1 × I/OD",
>       "10 × 16",
>       "2.1",
>       "320 MB",
>       "390 W",
>       "$13564"
>     ],
>     [
>       "9965",
>       "192 (384)",
>       "12 × CCD\n1 × I/OD",
>       "12 × 16",
>       "2.25",
>       "384 MB",
>       "500 W",
>       "$14813"
>     ],
>     [
>       {
>         "content": "Turin (Zen 5 cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       "9015",
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N4X](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 22
>       },
>       "8 (16)",
>       {
>         "content": "2 × CCD\n1 × I/OD",
>         "rowspan": 3
>       },
>       "2 × 4",
>       "3.6",
>       "4.1",
>       {
>         "content": "80 KB",
>         "rowspan": 22
>       },
>       {
>         "content": "1 MB",
>         "rowspan": 22
>       },
>       {
>         "content": "64 MB",
>         "rowspan": 3
>       },
>       {
>         "content": "SP5",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 22
>       },
>       {
>         "content": "1P/2P",
>         "rowspan": 7
>       },
>       {
>         "content": "128\n\n(160 in 2-socket systems)",
>         "rowspan": 7
>       },
>       {
>         "content": "DDR5-6000\ntwelve-channel",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 22
>       },
>       "125 W",
>       {
>         "content": "10 Oct, 2024",
>         "rowspan": 22
>       },
>       "$527"
>     ],
>     [
>       "9115",
>       "16 (32)",
>       {
>         "content": "2 × 8",
>         "rowspan": 2
>       },
>       "2.6",
>       "4.1",
>       "125 W",
>       "$726"
>     ],
>     [
>       "9135",
>       "16 (32)",
>       "3.65",
>       "4.3",
>       "200 W",
>       "$1214"
>     ],
>     [
>       "9175F",
>       "16 (32)",
>       "16 × CCD\n1 × I/OD",
>       "16 × 1",
>       "4.2",
>       "5.0",
>       "512 MB",
>       "320 W",
>       "$4256"
>     ],
>     [
>       "9255",
>       "24 (48)",
>       "4 × CCD\n1 × I/OD",
>       "4 × 6",
>       "3.25",
>       "4.3",
>       "128 MB",
>       "200 W",
>       "$2495"
>     ],
>     [
>       "9275F",
>       "24 (48)",
>       "8 × CCD\n1 × I/OD",
>       "8 × 3",
>       "4.1",
>       "4.8",
>       "256 MB",
>       "320 W",
>       "$3439"
>     ],
>     [
>       "9335",
>       "32 (64)",
>       "4 × CCD\n1 × I/OD",
>       "4 × 8",
>       "3.0",
>       "4.4",
>       "128 MB",
>       "210 W",
>       "$3178"
>     ],
>     [
>       "9355P",
>       "32 (64)",
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 3
>       },
>       {
>         "content": "8 × 4",
>         "rowspan": 3
>       },
>       "3.55",
>       "4.4",
>       {
>         "content": "256 MB",
>         "rowspan": 3
>       },
>       "1P",
>       "128",
>       "280 W",
>       "$2998"
>     ],
>     [
>       "9355",
>       "32 (64)",
>       "3.55",
>       "4.4",
>       {
>         "content": "1P/2P",
>         "rowspan": 3
>       },
>       {
>         "content": "128\n\n(160 in 2-socket systems)",
>         "rowspan": 3
>       },
>       "280 W",
>       "$3694"
>     ],
>     [
>       "9375F",
>       "32 (64)",
>       "3.8",
>       "4.8",
>       "320 W",
>       "$5306"
>     ],
>     [
>       "9365",
>       "36 (72)",
>       "6 × CCD\n1 × I/OD",
>       "6 × 6",
>       "3.4",
>       "4.3",
>       "192 MB",
>       "300 W",
>       "$4341"
>     ],
>     [
>       "9455P",
>       "48 (96)",
>       {
>         "content": "8 × CCD\n1 × I/OD",
>         "rowspan": 7
>       },
>       {
>         "content": "8 × 6",
>         "rowspan": 3
>       },
>       "3.15",
>       "4.4",
>       {
>         "content": "256 MB",
>         "rowspan": 7
>       },
>       "1P",
>       "128",
>       "300 W",
>       "$4819"
>     ],
>     [
>       "9455",
>       "48 (96)",
>       "3.15",
>       "4.4",
>       {
>         "content": "1P/2P",
>         "rowspan": 3
>       },
>       {
>         "content": "128\n\n(160 in 2-socket systems)",
>         "rowspan": 3
>       },
>       "300 W",
>       "$5412"
>     ],
>     [
>       "9475F",
>       "48 (96)",
>       "3.65",
>       "4.8",
>       "400 W",
>       "$7592"
>     ],
>     [
>       "9535",
>       "64 (128)",
>       {
>         "content": "8 × 8",
>         "rowspan": 4
>       },
>       "2.4",
>       "4.3",
>       "300 W",
>       "$8992"
>     ],
>     [
>       "9555P",
>       "64 (128)",
>       "3.2",
>       "4.4",
>       "1P",
>       "128",
>       "360 W",
>       "$7983"
>     ],
>     [
>       "9555",
>       "64 (128)",
>       "3.2",
>       "4.4",
>       {
>         "content": "1P/2P",
>         "rowspan": 3
>       },
>       {
>         "content": "128\n\n(160 in 2-socket systems)",
>         "rowspan": 3
>       },
>       "360 W",
>       "$9826"
>     ],
>     [
>       "9575F",
>       "64 (128)",
>       "3.3",
>       "5.0",
>       "400 W",
>       "$11791"
>     ],
>     [
>       "9565",
>       "72 (144)",
>       {
>         "content": "12 × CCD\n1 × I/OD",
>         "rowspan": 3
>       },
>       "12 × 6",
>       "3.15",
>       "4.3",
>       {
>         "content": "384 MB",
>         "rowspan": 3
>       },
>       "400 W",
>       "$10468"
>     ],
>     [
>       "9655P",
>       "96 (192)",
>       {
>         "content": "12 × 8",
>         "rowspan": 2
>       },
>       "2.5",
>       "4.5",
>       "1P",
>       "128",
>       "400 W",
>       "$10811"
>     ],
>     [
>       "9655",
>       "96 (192)",
>       "2.5",
>       "4.5",
>       {
>         "content": "1P/2P",
>         "rowspan": 2
>       },
>       {
>         "content": "128 (160 in 2-socket systems)",
>         "rowspan": 2
>       },
>       "400 W",
>       "$11852"
>     ],
>     [
>       "9755",
>       "128 (256)",
>       "16 × CCD\n1 × I/OD",
>       "16 × 8",
>       "2.7",
>       "4.1",
>       "512 MB",
>       "500 W",
>       "$12984"
>     ],
>     [
>       {
>         "content": "Grado (Zen 5 cores)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left",
>         "colspan": 17
>       },
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       "4245P",
>       {
>         "content": "[TSMC](https://en.wikipedia.org/wiki/TSMC)\n[N4X](https://en.wikipedia.org/wiki/5_nm_process)",
>         "rowspan": 6
>       },
>       "6 (12)",
>       {
>         "content": "1 × CCD\n1 × I/OD",
>         "rowspan": 2
>       },
>       "1 × 6",
>       "3.9",
>       "5.4",
>       {
>         "content": "80 KB",
>         "rowspan": 6
>       },
>       {
>         "content": "1 MB",
>         "rowspan": 6
>       },
>       {
>         "content": "32 MB",
>         "rowspan": 2
>       },
>       {
>         "content": "AM5",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 6
>       },
>       {
>         "content": "1P",
>         "rowspan": 6
>       },
>       {
>         "content": "28",
>         "rowspan": 6
>       },
>       {
>         "content": "DDR5-5600\ndual-channel",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 6
>       },
>       {
>         "content": "65 W",
>         "rowspan": 4
>       },
>       {
>         "content": "13 May, 2025",
>         "rowspan": 6
>       },
>       "$239"
>     ],
>     [
>       "4345P",
>       "8 (16)",
>       "1 × 8",
>       "3.8",
>       "5.5",
>       "$329"
>     ],
>     [
>       "4465P",
>       "12 (24)",
>       {
>         "content": "2 × CCD\n1 × I/OD",
>         "rowspan": 4
>       },
>       "2 × 6",
>       "3.4",
>       {
>         "content": "5.4",
>         "rowspan": 2
>       },
>       {
>         "content": "64 MB",
>         "rowspan": 3
>       },
>       "$399"
>     ],
>     [
>       "4545P",
>       {
>         "content": "16 (32)",
>         "rowspan": 3
>       },
>       {
>         "content": "2 × 8",
>         "rowspan": 3
>       },
>       "3.0",
>       "$549"
>     ],
>     [
>       "4565P",
>       {
>         "content": "4.3",
>         "rowspan": 2
>       },
>       {
>         "content": "5.7",
>         "rowspan": 2
>       },
>       {
>         "content": "170 W",
>         "rowspan": 2
>       },
>       "$589"
>     ],
>     [
>       "4585PX",
>       "128 MB",
>       "$699"
>     ]
>   ],
>   "tableStyle": "text-align: center;"
> }
> ```
