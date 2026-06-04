---
title: "Thread (Protocol)"
created: 2026-05-27T10:58:42.549-05:00
modified: 2026-05-27T11:46:44.717-05:00
parent: "[[？ - Mixed／Other Layers]]"
children: []
---
###### Thread (Protocol)
````excerpt
- doesn't fit into a single layer; it is a protocol stack that occupies the bottom layers of the OSI model (i.e. layers 1 to 4)
- it is designed to be "[[7 - Application Layer|application-layer]] agnostic," meaning it doesn't define what the application does (like controlling a light or a thermostat), but rather how the data gets from point A to point B
````
^excerpt

# How Thread maps to the OSI model

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>OSI Layer</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Thread Stack Components</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Function</strong>",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[4 - Transport Layer|Layer 4: Transport]]",
        "bg": "#F4F5F7"
      },
      "[[Universal／User Datagram Protocol (UDP)|UDP]]",
      "- UDP used for lightweight, low-latency communication"
    ],
    [
      {
        "content": "[[3 - Network Layer|Layer 3: Network]]",
        "bg": "#F4F5F7"
      },
      "[[IPv6]] / 6LoWPAN / RPL",
      "- IPv6 provides addressing\n- 6LoWPAN compresses packets\n- RPL manages mesh routing"
    ],
    [
      {
        "content": "[[2 - Data Link Layer|Layer 2: Data Link]]",
        "bg": "#F4F5F7"
      },
      "IEEE 802.15.4 MAC",
      "- handles data framing, error detection, and reliable delivery over the air"
    ],
    [
      {
        "content": "[[1 - Physical Layer|Layer 1: Physical]]",
        "bg": "#F4F5F7"
      },
      "IEEE 802.15.4 PHY",
      "- the raw radio transmission on the 2.4 GHz spectrum"
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```
# Other
- [[Smart Home Automation - Network／Application Protocols (Wi-Fi - Bluetooth - Zigbee - Z-Wave - Matter - Thread)|Smart Home Automation - Network/Application Protocols (Wi-Fi - Bluetooth - Zigbee - Z-Wave - Matter - Thread)]]
