---
title: "Temporal Key Integrity Protocol (TKIP)"
created: 2019-11-13T20:37:41.021-06:00
modified: 2019-11-13T22:35:54.953-06:00
parent: "[[Encryption - Algorithms]]"
children: []
---
<strong>Temporal Key Integrity Protocol (TKIP)</strong> is an [[Encryption|encryption]] protocol included as part of the IEEE 802.11i standard for [[2 - Wireless Local Area Network (WLAN)|wireless LANs (WLANs)]]. It was designed to provide more secure encryption than the notoriously weak [[Wired Equivalent Privacy (WEP)]], the original [[WiFi - Secure Access (WEP - WPA - WPA2 - WPA3)|WLAN security protocol]]

To be able to run on legacy WEP hardware with minor upgrades, TKIP uses [[Rivest Cipher (RC4)|RC4]] as its cipher

![[Temporal Key Integrity Protocol (TKIP)/TKIP.png]]
- Temp Key and MIC Key derived from the WEP key at the end of [[Extensible Authentication Protocol (EAP)|EAP]] authentication
- WPA can be seen as a wrapper for WEP
- RC4 Key is sender specific
- Each message uses different RC4 Key
- 48-bit IV as counter
- MIC is cryptographic (does not use CRC)
