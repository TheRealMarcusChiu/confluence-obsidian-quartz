---
title: "Zen 1,2,3,4,5 + Microarchitecture Processors"
created: 2022-09-12T04:59:32.667-05:00
modified: 2025-10-14T12:39:16.174-05:00
parent: "[[AMD Processors／CPUs]]"
children:
  - "[[AMD Athlon]]"
  - "[[AMD EPYC Processors]]"
  - "[[Ryzen]]"
  - "[[Zen Ryzen Threadripper (PRO)]]"
---
###### Zen 1,2,3,4,5 + Microarchitecture Processors
````excerpt
- Zen is the codename for a family of computer processor [[Computer Organization - Microarchitecture (µarch - uarch)|microarchitectures]] from AMD, first launched in February 2017
- used in several [[AMD Processors／CPUs|AMD processors]]:
	- Ryzen (desktop and mobile)
	- Ryzen Threadripper (workstation/high-end desktop)
	- Epyc (server)
````
^excerpt

# Zen - Processor Naming Conventions

the naming system includes the following:

```merge-table
{
  "rows": [
    [
      {
        "content": "Lineups/Brand-Names",
        "bg": "#F4F5F7"
      },
      "e.g. [[Ryzen]], [[Zen Ryzen Threadripper (PRO)|Ryzen Threadripper]], [[AMD Athlon|Athlon]], [[AMD EPYC Processors|EPYC]]"
    ],
    [
      {
        "content": "Ryzen Tiers",
        "bg": "#F4F5F7"
      },
      "e.g. 3, 5, 7, 9"
    ],
    [
      {
        "content": "4-Digit SKU Number",
        "bg": "#F4F5F7"
      },
      "- the first digit marks the series, there are a total of 6 series (e.g. 1000, 2000, 3000, 4000, 5000, and 6000)\n- the second digit is a performance identifier; the higher, the better"
    ],
    [
      {
        "content": "Suffix",
        "bg": "#F4F5F7"
      },
      "- \n> [!expand]- Click here to expand...\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       {\n>         \"content\": \"G\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"Has integrated AMD Radeon Vega Graphics\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"GE\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"Has integrated AMD Radeon Vega Graphics but lower TDP\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"X\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"Higher-clocked desktop processor\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"XT\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"Higher-clocked desktop processor with higher performance than X\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"S\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"Low TDP desktop processor with integrated AMD Radeon Vega Graphics\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"H\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"High-performance mobile processors with integrated AMD Radeon Vega Graphics\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"HS\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"High-performance laptop processors with integrated AMD Radeon Vega Graphics and lower TDP\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"U\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"Lower TDP and lower-clocked mobile processors\",\n>         \"align\": \"left\"\n>       }\n>     ],\n>     [\n>       {\n>         \"content\": \"AF\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\",\n>         \"align\": \"left\"\n>       },\n>       {\n>         \"content\": \"First-gen Zen SKUs with 12nm process upgrade\",\n>         \"align\": \"left\"\n>       }\n>     ]\n>   ]\n> }\n> ```"
    ]
  ]
}
```

Other:
- AMD used the last Zen 3 architecture for two series — 4000 and 5000
- 4000 series was entirely an APU lineup, and available only in laptops and OEM systems, unlike the 5000 series
- The Zen 3 Plus-based 6000 series is again laptop-only

# Zen - Athlon, Pro, Embedded, Threadripper, EPYC, and FX-Series Processors
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

> [!expand-ui]- AMD Pro processors
> AMD Pro is actually an umbrella brand for several series of AMD processors meant for the enterprise market. Ryzen, Threadripper, and Athlon all have their own Pro series offerings. AMD promises a focus on security with these processors. Security features include AMD Memory Guard for real-time encryption of system memory and AMD Shadow Stack hardware-level protection against control-flow attacks. There are also more implementations from OEMs and some OS-level features in Windows 10. You also get enterprise-grade support.

> [!expand-ui]- AMD embedded processors
> AMD also offers embedded solutions for a variety of low-power and space-constrained applications. AMD’s Epyc and Ryzen platforms both have embedded versions. Epyc has three embedded chip series — 3000 series for affordable server applications, the 7001 series based on Zen architecture, and the 7002 series based on Zen 2. There’s no Zen 3 embedded Epyc series yet. Ryzen gets multiple embedded CPU lineups, with the most prominent ones being the performance-focused R-series and the low-power G-series.
