---
title: "Application Programming Interface (API) - Software Development Kit (SDK)"
created: 2019-12-21T11:36:02.348-06:00
modified: 2022-02-14T21:15:24.359-06:00
parent: "[[Application Binary Interface (ABI) vs Application Programming Interface (API)]]"
children:
  - "[[API - 3ʳᵈ Party]]"
  - "[[API - Network-Level]]"
  - "[[API - Security]]"
---
API is always SDK, SDK is NOT always API
- <strong>Application Programming Interface (API)</strong> is a set of operations that a developer can use to access the backend of a server. You use the API by calling it from your device to the Cloud (a bunch of servers connected to the Internet) running the service
	- Networked API -
	- Non-Networked API -
- <strong>Software Development Kit (SDK)</strong> is a group of tools, including pieces of code, that gets embedded into a service. The SDK contains APIs and so, it calls on the API when necessary to execute tasks. The result is the developer calls the SDK locally and the SDK calls the API remotely

# API Types

```merge-table
{
  "rows": [
    [
      {
        "content": "API Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Network Level",
        "bg": "#F4F5F7"
      },
      "![[API - Network-Level#^excerpt]]"
    ],
    [
      {
        "content": "Application Level",
        "bg": "#F4F5F7"
      },
      "- <strong>[[JavaScript - Native - V8 Engine - Web／Browser APIs|JavaScript - Native - V8 Engine - Web/Browser APIs]]</strong> - client-side application-level APIs built in to browsers\n- ![[API - 3ʳᵈ Party#^excerpt]]"
    ],
    [
      {
        "content": "Language Type",
        "bg": "#F4F5F7"
      },
      "- <strong>Language-Dependent API</strong> - only available in one programming language\n- <strong>Language-Independent API</strong> - not restricted to one programming language"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# API Other
- [[Interface Definition／Description Language & Libraries (IDL)|Interface Definition/Description Language & Libraries (IDL)]]
- [[API Design Patterns (API-DP)]]
- [[API - Security]]

# SDK Types
- TODO
