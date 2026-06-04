---
title: "Cloud Computing／Service Models／Platforms (SaaS - FaaS - PaaS - IaaS - MaaS - PC)"
created: 2019-05-26T21:31:04.483-05:00
modified: 2025-02-11T13:12:52.761-06:00
parent: "[[Software／Fullstack Development]]"
children:
  - "[[Amazon Web Services (AWS)]]"
  - "[[Closed Room as a Service (CRaaS)]]"
  - "[[Cloudflare]]"
  - "[[Metal as a Service (MaaS)]]"
  - "[[Walled Garden as a Service (WGaaS)]]"
---
# Cloud Computing/Service Models

```merge-table
{
  "rows": [
    [
      {
        "content": "managed by customer",
        "bg": "green"
      },
      {
        "content": "<strong>Metal as a Service\n(MaaS)</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<strong>Private Cloud (PC)</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<strong>Infrastructure as a Service (IaaS)</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<strong>Container as a Service\n(CaaS)</strong>",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "<strong>Platform as a Service (PaaS)</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<strong>Function as a Service (FaaS)</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "<strong>Software as a Service (SaaS)</strong>",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "managed by provider",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "<strong>function</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>application</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>runtime</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>container</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green"
      },
      {
        "bg": "blue"
      },
      {
        "bg": "blue"
      },
      {
        "bg": "blue"
      }
    ],
    [
      {
        "content": "<strong>operating system</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>virtualization</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>Hardware</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green"
      },
      {
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      },
      {
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>Types</strong>",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "- VMware vSphere\n- OpenStack Nova\n- AWS EC2\n- Google Cloud Compute Engine\n- Azure VMs",
      "",
      "",
      "- OpenFaaS\n- OpenWhisk\n- Riff\n- Knative",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
