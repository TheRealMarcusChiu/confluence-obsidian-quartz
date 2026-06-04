---
title: "WiFi - Secure Access (WEP - WPA - WPA2 - WPA3)"
created: 2019-03-16T19:40:19.360-05:00
modified: 2023-04-13T23:09:17.940-05:00
parent: "[[802.11 - WiFi／Wi-Fi]]"
children:
  - "[[Wi-Fi Protected Setup (WPS)]]"
  - "[[WiFi Protected Access (WPA)]]"
  - "[[WiFi Protected Access 2 (WPA2)]]"
  - "[[Wired Equivalent Privacy (WEP)]]"
---
[https://www.howtogeek.com/167783/htg-explains-the-difference-between-wep-wpa-and-wpa2-wireless-encryption-and-why-it-matters/](https://www.howtogeek.com/167783/htg-explains-the-difference-between-wep-wpa-and-wpa2-wireless-encryption-and-why-it-matters/)
# Secure Access Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Certification",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Authentication (AuthN)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Encryption]] & Integrity",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Wired Equivalent Privacy (WEP)]]",
        "bg": "#F4F5F7"
      },
      "[[Rivest Cipher (RC4)]]",
      "[[Rivest Cipher (RC4)]]"
    ],
    [
      {
        "content": "[[WiFi Protected Access (WPA)]]",
        "bg": "#F4F5F7"
      },
      "[[WPA Configuration Mode (WPA-Personal - WPA-Enterprise)]]:\n- WPA-Personal - uses a pre-shared key (PSK)\n- WPA-Enterprise - IEEE 802.1X with [[Extensible Authentication Protocol (EAP)]]",
      "encryption options:\n- <strong>[[Temporal Key Integrity Protocol (TKIP)|TKIP]]</strong> (itself also based on [[Rivest Cipher (RC4)|RC4]]) with [[Secure／Keyed Cryptographic Hash Function|Message Integrity Check (MIC)]]\n- plain [[Advanced Encryption Standard (AES)|AES]]"
    ],
    [
      {
        "content": "[[WiFi Protected Access 2 (WPA2)]]",
        "bg": "#F4F5F7"
      },
      "[[WPA Configuration Mode (WPA-Personal - WPA-Enterprise)]]:\n- WPA-Personal - uses a pre-shared key (PSK)\n- WPA-Enterprise - uses IEEE 802.1X with [[Extensible Authentication Protocol (EAP)]]",
      "<strong>AES-CCMP</strong> (<strong>AES</strong>-<strong>C</strong>ounter Mode + <strong>C</strong>BC-<strong>M</strong>AC) <strong>P</strong>rotocol\n- [[Advanced Encryption Standard (AES)|AES]] - [[Block Cipher - Modes of Operation|Counter Mode]]\n- [[Block Cipher - Modes of Operation|Cipher Block Chaining]] - [[Secure／Keyed Cryptographic Hash Function|Message Authentication Code (MAC)]]"
    ],
    [
      {
        "content": "WiFi Protected Access 3 (WPA3)",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Wi-Fi Protected Setup (WPS)]]",
        "bg": "#F4F5F7"
      },
      "N/A",
      "N/A"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Secure Access Ranking

list ranking the current Wi-Fi security methods available on any modern (post-2006) router, ordered from best to worst:
- WPA3
- WPA2 + [[Advanced Encryption Standard (AES)|AES]]
- WPA + AES
- WPA + TKIP/AES (TKIP is there as a fallback method)
- WPA + TKIP
- WEP
- WPS
- Open Network (no security at all)
