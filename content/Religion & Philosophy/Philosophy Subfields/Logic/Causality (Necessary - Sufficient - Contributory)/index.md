---
title: "Causality (Necessary - Sufficient - Contributory)"
created: 2021-09-13T04:44:23.870-05:00
modified: 2025-10-11T12:15:36.690-05:00
parent: "[[Logic]]"
children:
  - "[[Causality／Causation vs Dependence vs Correlation vs Relationships vs Association vs Laws]]"
  - "[[Retrocausality - Reverse／Backwards Causality／Causation]]"
---
###### Causality
````excerpt
- causality is efficacy, by which one process or state, a cause, contributes to the production of another process or state, an effect, where the cause is partly responsible for the effect, and the effect is partly dependent on the cause
- "we should not confuse relationships & laws with causes" \~ [VSauce](https://youtu.be/_WHRWLnVm_M?t=395)
````
^excerpt

# Causality Types
- <strong>Deterministic Causality</strong> - if 𝐴 causes 𝐵, then 𝐴 must always be followed by 𝐵 ([[Deterministic CPD]])
- <strong>Non-Deterministic Causality</strong> - if 𝐴 causes 𝐵, then 𝐴 is followed by 𝐵 with some [[Probability|probability]] ([[Conditional Probability Distribution (CPD)|Conditional Probability Distribution]])

# Causality Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Causality Types",
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
        "content": "Necessary Cause",
        "bg": "#F4F5F7"
      },
      "- if 𝑋 is a necessary cause of 𝑌, then the presence of 𝑌 necessarily implies the prior occurrence of 𝑋\n- the presence of 𝑋 does not imply that 𝑌 will occur"
    ],
    [
      {
        "content": "Sufficient Cause",
        "bg": "#F4F5F7"
      },
      "- if 𝑋 is a sufficient cause of 𝑌, then the presence of 𝑋 necessarily implies the subsequent occurrence of 𝑌\n- the presence of 𝑌 does not imply the prior occurrence of 𝑋, because another cause 𝑍 may alternatively cause 𝑌"
    ],
    [
      {
        "content": "Contributory Cause",
        "bg": "#F4F5F7"
      },
      "- if 𝑋 is a contributory cause of 𝑌, then presence of 𝑋 must increase the likelihood of 𝑌\n\t- a contributory cause is a sufficient cause, if the likelihood is 100%\n\t- a contributory cause may also be necessary"
    ],
    [
      {
        "content": "INUS Condition\n[J. L. Mackie](https://en.wikipedia.org/wiki/J._L._Mackie)",
        "bg": "#F4F5F7"
      },
      "an effect 𝑌 can be caused by a number of distinct clusters of causes, where each cluster is a <em>Sufficient</em> but <em>Unnecessary</em> cause of effect 𝑌\n- (𝐴&𝐵&𝐶 or 𝐷&𝐸&𝐹 or 𝐺&𝐻&𝐼) ↔ 𝑌\n\nwhich should be read as both:\n- all (𝐴&𝐵&𝐶 or 𝐷&𝐸&𝐹 or 𝐺&𝐻&𝐼) are followed by 𝑌\n- all 𝑌 are preceded by (𝐴&𝐵&𝐶 or 𝐷&𝐸&𝐹 or 𝐺&𝐻&𝐼)\n\nTherefore, 𝐴 is an <em>Insufficient</em> but <em>Necessary</em> part of a cluster which is itself <em>Unnecessary</em> but <em>Sufficient</em> (INUS) condition for 𝑌\n\n> [!expand]- example INUS condition\n> example INUS condition:\n> - short circuits is an INUS condition for fire\n> - (short-circuits&oxygen&inflammable-material?.. or ?&? or ...) ↔ fire\n>\n> explanation:\n> - short circuits is an <em>Insufficient</em> part because it cannot cause the fire on its own (other conditions such as oxygen, inflammable material, etc. should be present)\n> - short circuits is a <em>Necessary</em> part because, without it, the rest of the conditions are not sufficient for the fire\n> - short circuits is a part of the cluster that is <em>Sufficient</em> cause for fire (the whole includes oxygen, the presence of inflammable material, etc.)\n> - short circuits is a part of the cluster that is <em>Unnecessary</em> cause for fire since some other cluster of conditions, for example, an arsonist with gasoline, can produce the fire"
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
