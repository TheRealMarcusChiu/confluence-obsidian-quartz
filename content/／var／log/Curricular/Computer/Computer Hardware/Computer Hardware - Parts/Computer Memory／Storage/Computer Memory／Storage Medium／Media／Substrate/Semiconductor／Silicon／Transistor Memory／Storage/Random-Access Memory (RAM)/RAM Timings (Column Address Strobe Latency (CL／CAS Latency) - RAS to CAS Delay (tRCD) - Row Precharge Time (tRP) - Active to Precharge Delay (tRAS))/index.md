---
title: "RAM Timings (Column Address Strobe Latency (CL／CAS Latency) - RAS to CAS Delay (tRCD) - Row Precharge Time (tRP) - Active to Precharge Delay (tRAS))"
created: 2025-10-16T14:03:12.062-05:00
modified: 2025-10-16T14:08:09.223-05:00
parent: "[[Random-Access Memory (RAM)]]"
children: []
---
###### RAM Timings & Latency
````excerpt
- wth
````
^excerpt

# Timings Explained

```merge-table
{
  "rows": [
    [
      {
        "content": "Timing",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Full Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "What It Controls",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>CL / CAS Latency</strong>",
        "bg": "#F4F5F7"
      },
      "<em>Column Address Strobe Latency</em>",
      "Time between the [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|memory controller]] requesting data and the RAM outputting it",
      "<strong>Read delay</strong> — biggest factor in responsiveness"
    ],
    [
      {
        "content": "<strong>tRCD</strong>",
        "bg": "#F4F5F7"
      },
      "<em>RAS to CAS Delay</em>",
      "Time between selecting a row (RAS) and selecting a column (CAS)",
      "<strong>Activation delay</strong> before accessing data"
    ],
    [
      {
        "content": "<strong>tRP</strong>",
        "bg": "#F4F5F7"
      },
      "<em>Row Precharge Time</em>",
      "Time needed to close one row before opening another",
      "<strong>Switching delay</strong> between memory rows"
    ],
    [
      {
        "content": "<strong>tRAS</strong>",
        "bg": "#F4F5F7"
      },
      "<em>Active to Precharge Delay</em>",
      "Minimum time a row must stay open to complete an operation",
      "<strong>Write completion delay</strong>"
    ]
  ]
}
```
# Timings Example

So for <strong>CL30-38-38-96</strong>, that means

```merge-table
{
  "rows": [
    [
      {
        "content": "Timing",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Value (cycles)",
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
        "content": "<strong>CAS Latency</strong>",
        "bg": "#F4F5F7"
      },
      "30 cycles",
      "Time to read data"
    ],
    [
      {
        "content": "<strong>tRCD</strong>",
        "bg": "#F4F5F7"
      },
      "38 cycles",
      "Row open delay"
    ],
    [
      {
        "content": "<strong>tRP</strong>",
        "bg": "#F4F5F7"
      },
      "38 cycles",
      "Row close delay"
    ],
    [
      {
        "content": "<strong>tRAS</strong>",
        "bg": "#F4F5F7"
      },
      "96 cycles",
      "Row active duration"
    ]
  ]
}
```
