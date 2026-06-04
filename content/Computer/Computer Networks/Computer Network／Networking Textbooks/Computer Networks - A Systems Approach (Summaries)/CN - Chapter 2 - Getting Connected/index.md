---
title: "CN - Chapter 2 - Getting Connected"
created: 2019-03-17T00:10:33.866-05:00
modified: 2019-12-03T11:00:42.124-06:00
parent: "[[Computer Networks - A Systems Approach (Summaries)]]"
children:
  - "[[Carrier Sense Multiple Access]]"
  - "[[network - error detection and correction]]"
  - "[[network - reliable delivery]]"
  - "[[network encoding]]"
  - "[[network framing]]"
---
### Important Terms
- <strong>bandwidth</strong> - width of a frequency band
- <strong>data rate</strong> - number of bits per second
- <strong>attenuate</strong> - the weakening of signals with distance from origin
- <strong>spread spectrum</strong> - spread the signal over a wider frequency band to minimize the impact of interference from other devices
	- <strong>frequency hopping spread spectrum (FHSS)</strong> - is a <em>spread spectrum</em> technique that involves transmitting at different frequencies over time
	- <strong>direct sequence spread spectrum (DSSS)</strong> - adds redundancy for greater tolerance of interference
- <strong>endpoint classes</strong>
	- base station
	- mobile - often relies on <em>base station</em> mediator for communication

## <strong>5 problems in Connecting Nodes</strong>
- [[network encoding]] - bits onto transmission medium
- [[network framing|framing]] - portray sequence of bits into a complete message
- [[network - error detection and correction|error detecting and correcting]] - detecting errors in data and possibly correct it
- [[network - reliable delivery|reliable delivery]] - making sure data was received
- [[Carrier Sense Multiple Access]] - sharing a single link

## <strong>Connecting a Local Network</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Connection Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "[[Wired|Wired Implementations]]",
      "- [[802.3 - Ethernet|Ethernet (802.3)]]"
    ],
    [
      "[[Wireless|Wireless Implementations]]",
      "- [[802.15 - Bluetooth|Bluetooth (802.15.1)]] - link peripheral to a computer\n- [WiFi (802.11)](http://doc.marcuschiu.com/log-page/5b0db0cd154cee0e194971fd)[[802.11 - WiFi／Wi-Fi|802.11 - WiFi/Wi-Fi]]- link a computer to a wired base\n- [[Cellular Network|Cellular Networks]] - link a mobile phone to a wired tower"
    ]
  ],
  "tableStyle": "width: 62.0223%;"
}
```
