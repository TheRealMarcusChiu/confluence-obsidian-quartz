---
title: "Real User Monitoring (RUM) vs Synthetic Monitoring (STM)"
created: 2021-03-27T12:25:24.842-05:00
modified: 2021-03-27T14:05:47.226-05:00
parent: "[[Logs／Logging & Monitoring & Metrics & Traces／Tracing & Analytics - Other]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Real User Monitoring (RUM)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Synthetic Monitoring (STM)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "captures and analyzes transactions of a website or application",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "monitors real users",
        "align": "center"
      },
      {
        "content": "monitors synthetic users",
        "align": "center"
      }
    ],
    [
      {
        "content": "no control over user actions",
        "align": "center"
      },
      {
        "content": "complete control over simulated user actions",
        "align": "center"
      }
    ],
    [
      {
        "content": "requires user traffic",
        "align": "center"
      },
      {
        "content": "does not require user traffic",
        "align": "center"
      }
    ],
    [
      {
        "content": "getting a gauge of performance is difficult, since it relies solely on user traffic which is random",
        "align": "center"
      },
      {
        "content": "easy to gauge performance, as user traffic can be simulated and controlled",
        "align": "center"
      }
    ],
    [
      {
        "content": "helps with understanding long-term trends",
        "align": "center"
      },
      {
        "content": "helps diagnose and solve shorter-term performance problems",
        "align": "center"
      }
    ],
    [
      "also known as:\n- passive monitoring\n- real user measurement\n- real user metrics\n- end-user experience monitoring",
      "also known as:\n- active monitoring\n- synthetic transaction monitoring (STM)"
    ]
  ],
  "tableStyle": "width: 79.0112%;"
}
```
