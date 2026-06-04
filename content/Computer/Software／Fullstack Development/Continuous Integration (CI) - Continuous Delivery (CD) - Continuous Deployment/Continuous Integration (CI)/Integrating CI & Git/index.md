---
title: "Integrating CI & Git"
created: 2019-12-16T18:18:00.109-06:00
modified: 2021-07-12T16:39:35.869-05:00
parent: "[[Continuous Integration (CI)]]"
children: []
---
# Tips Integrating CI & Git
- ###### store large files outside your repo
	- use an External [[Data Storage - Types|Storage System]] or [[Binary／Artifact Repository Manager (BRM - ARM)|Binary/Artifact Repository Manager (BRM - ARM)]] (e.g. Artifactory, Nexus, Archiva, etc)
	- <strong>Git Large File Support (Git LFS)</strong> - is an extension that stores pointers to large files in your repository, instead of storing the files themselves. The files themselves are stored on a remote server
- ###### use shallow clones for CI
	- with shallow clones, only the current snapshot of your repo will be pulled down
<font style="color: rgb(128,128,128);">git clone --depth 1 \[remote-repository-url\]</font>
- ###### cache the repo on build agents
	- repo caching only benefits you if you're using agents that persist from build to build

shallow clones + repo caching, divided by persistent vs. [elastic agents](https://confluence.atlassian.com/bamboo/about-elastic-bamboo-289277118.html), equals an interesting web of factors. Here’s a little matrix to help you strategize:

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Shallow Clones",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Repo Caching",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "persistent agents",
        "rowspan": 3
      },
      "No Changes",
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      }
    ],
    [
      "Simple Changes",
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      }
    ],
    [
      "Auto-Merging",
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      }
    ],
    [
      {
        "content": "elastic agents",
        "rowspan": 3
      },
      "No Changes",
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      }
    ],
    [
      "Simple Changes",
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      }
    ],
    [
      "Auto-Merging",
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "align": "center"
      }
    ]
  ]
}
```
