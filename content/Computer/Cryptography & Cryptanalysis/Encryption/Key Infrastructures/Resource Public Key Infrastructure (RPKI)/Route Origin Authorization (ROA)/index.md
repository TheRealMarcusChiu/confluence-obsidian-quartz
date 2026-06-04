---
title: "Route Origin Authorization (ROA)"
created: 2019-11-22T14:26:29.773-06:00
modified: 2022-11-26T02:56:21.073-06:00
parent: "[[Resource Public Key Infrastructure (RPKI)]]"
children:
  - "[[ROA - Examples]]"
---
###### Route Origin Authorization (ROA)
````excerpt
- signed document mapping a certain network-prefix to a specific [AS](http://confluence.marcuschiu.com/display/NOT/Autonomous+System+%28AS%29+-+Domain)
- is a cryptographically signed object that states which [Autonomous System (AS)](http://confluence.marcuschiu.com/display/NOT/Autonomous+System+%28AS%29+-+Domain) is authorized to originate a certain prefix
````
^excerpt

# ROA Components

```merge-table
{
  "rows": [
    [
      {
        "content": "ROA Component",
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
        "content": "[[Autonomous System (AS) - Domain|AS Number]]",
        "bg": "#F4F5F7"
      },
      "the [[Autonomous System (AS) - Domain|AS Number]] that is authorized"
    ],
    [
      {
        "content": "[[IPv4 - Address Classes (now obsolete)|network-prefix]]",
        "bg": "#F4F5F7"
      },
      "the [[IPv4 - Address Classes (now obsolete)|network-prefix]] that may be originated from the AS"
    ],
    [
      {
        "content": "Maximum Length",
        "bg": "#F4F5F7"
      },
      "the Maximum Length specifies the length of the most specific IP prefix that the AS is authorized to advertise. When it is not set, the AS is only authorized to advertise exactly the prefix specified. Any more specific announcement of the prefix will be considered unauthorized. This is a way to enforce aggregation and prevent hijacking through the announcement of a more specific prefix."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# ROA Examples

refer to: [[ROA - Examples]]
