---
title: "InfiniBand (IB)"
created: 2022-09-11T14:15:16.989-05:00
modified: 2025-10-21T14:38:39.767-05:00
parent: "[[Wired]]"
children: []
---
###### InfiniBand (IB)
````excerpt
- is a computer networking communications standard used in high-performance computing that features very high throughput and very low latency
- is both a [[1 - Physical Layer|Layer 1]] & [[2 - Data Link Layer|Layer 2]] protocol
````
^excerpt

# IB - Standards

```merge-table
{
  "rows": [
    [
      {
        "content": "SDR",
        "bg": "#F4F5F7"
      },
      "10Gbps connection that uses a CX4 connector. Very old equipment, but very cheap!"
    ],
    [
      {
        "content": "DDR",
        "bg": "#F4F5F7"
      },
      "DDR Infiniband is the second iteration of the standard. It operates at 20Gbps (16Gbps after throughput loss due to encoding) and uses either CX-4 or QSFP. Most DDR devices I've seen use CX-4. Personal opinion: CX-4 is such an ugly connector. Who designed that? Topspin switches are cheap and cool for learning Infiniband, and most of them operate on this standard."
    ],
    [
      {
        "content": "QDR",
        "bg": "#F4F5F7"
      },
      "Switches that operate to this standard usually provide connections rated at a throughput of 40Gbps (32Gbps after encoding loss) and a latency significantly lower than Ethernet's. The connection type for most 40Gb Infiniband is (QSFP+). A lot of newer Mellanox switches offer something they call VPI, which allows configuration on a port by port basis as to which protocol you'd like to use (Ethernet or Infiniband). I personally like this feature, because it allows for flexibility within my lab.\n\nBefore they were bought out by 100 different companies, there was a company called Voltaire that made QDR switches. If you're looking for the cheapest QDR switch you can find, that's probably a route worth exploring."
    ],
    [
      {
        "content": "FDR-10/FDR",
        "bg": "#F4F5F7"
      },
      "F stands for FAST. I run an SX6018 at home. It draws about 40W under a modest load and is the quietest IB switch I've ever owned."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
