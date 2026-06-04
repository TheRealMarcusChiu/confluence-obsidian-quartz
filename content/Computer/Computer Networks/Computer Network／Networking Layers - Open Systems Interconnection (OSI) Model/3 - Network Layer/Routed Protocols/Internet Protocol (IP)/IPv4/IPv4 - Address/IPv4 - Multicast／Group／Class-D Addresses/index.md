---
title: "IPv4 - Multicast／Group／Class-D Addresses"
created: 2019-11-17T21:58:52.293-06:00
modified: 2021-10-05T02:38:55.784-05:00
parent: "[[IPv4 - Address]]"
children: []
---
````excerpt
# Multicast/Group/Class-D Address Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Group Address Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Address Range",
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
      "<strong>Local Scope Addresses</strong>",
      "<strong>224.0.0.X</strong>\n\n<font style=\"color: rgb(128,128,128);\">11100000.0.0.X</font>",
      "- addresses are used on a local link\n- Time-To-Live (TTL) of 1\n- 224.0.0.1 - all hosts\n- 224.0.0.2 - all multicast routers\n- 224.0.0.5 - all [[Open Shortest Path First (OSPF)|OSPF]]\n- 224.0.0.6 - all [[Open Shortest Path First (OSPF)|OSPF]] DR (Designated Router)"
    ],
    [
      "<strong>GLOP</strong>",
      "<strong>233.X.X.0 - 233.X.X.255</strong>\n\n<font style=\"color: rgb(128,128,128);\">11101001.X.X.0 - <font style=\"color: rgb(128,128,128);\">11101001.X.X.255</font></font>",
      "- [[Autonomous System (AS) - Domain|Autonomous System (AS)]]'s ID number ASN is inserted in middle octets \"X.X\""
    ],
    [
      "<strong>Transient Addresses - Global Range</strong>",
      "224.0.1.0 - 238.255.255.255",
      "- 224.2.X.X in the <em>multicast backbone (Mbone)</em>"
    ],
    [
      "<strong>Transient Addresses - Site-Local Scope</strong>",
      "239.253.0.0/16",
      ""
    ],
    [
      "<strong>Transient Addresses - Organization Local Scope</strong>",
      "239.192.0.0/14",
      ""
    ]
  ],
  "tableStyle": "width: 99.9156%;"
}
```
````
^excerpt
