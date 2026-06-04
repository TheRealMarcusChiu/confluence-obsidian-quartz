---
title: "Versioning Scheme - Qualifiers (SNAPSHOT - MILESTONE (M) - RELEASE CANDIDATE (RC) - General Availability (GA) ／ RELEASE)"
created: 2022-02-20T17:55:18.437-06:00
modified: 2022-02-20T18:18:46.634-06:00
parent: "[[Versioning Schemes]]"
children: []
---
# Spring Reactor Versioning Scheme Example
- <strong>Artifacts</strong> follow the versioning scheme of <code><font style="color: rgb(122,134,154);">MAJOR.MINOR.PATCH/REVISION-QUALIFIER</font></code>
- <strong>Bill of Materials (BOM)</strong> follows an inspired CalVer scheme of <code><font style="color: rgb(122,134,154);">YYYY.MINOR.PATCH/REVISION-QUALIFIER</font></code>

# MAJOR.MINOR.PATCH/REVISION

see [[Semantic Versioning (MAJOR.MINOR.PATCH／REVISION)|Semantic Versioning (MAJOR.MINOR.PATCH/REVISION)]]
# YYYY

Is the year of the first (General Availability / Release) in a given release cycle
# QUALIFIERS

```merge-table
{
  "rows": [
    [
      {
        "content": "SNAPSHOT or BUILD-SNAPSHOT",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Is the current development release"
    ],
    [
      {
        "content": "###### M\\[<em>number</em>\\] (M1, ..., M9)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Marks a significant stage in the release process"
    ],
    [
      {
        "content": "###### RC\\[<em>number</em>\\] (RC1, ..., RC9)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Is the last step before building the final release"
    ],
    [
      {
        "content": "###### RELEASE or GA or <em>No Qualifier</em>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Marks the end of the release process. Usually the only production-ready artifact."
    ]
  ]
}
```
