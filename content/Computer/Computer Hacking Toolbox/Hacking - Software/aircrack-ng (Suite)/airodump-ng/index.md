---
title: "airodump-ng"
created: 2023-04-15T08:00:53.800-05:00
modified: 2023-04-21T16:22:32.675-05:00
parent: "[[aircrack-ng (Suite)]]"
children:
  - "[[airodump-ng - With GPS Coordinates]]"
---
###### airodump-ng
````excerpt
- is used for packet capture, capturing raw 802.11 frames
- it is particularly suitable for collecting WEP IVs (Initialization Vector) or WPA handshakes for the intent of using them with aircrack-ng
- if you have a GPS receiver connected to the computer, airodump-ng is capable of logging the coordinates of the found access points
- additionally, airodump-ng writes out several files containing the details of all access points and clients seen, which can be used for scripting, or creating custom tools
````
^excerpt

# Prerequisites

Before using <em>airodump-ng</em>, put the wireless interface into [[NIC Modes (Normal／Promiscuous／Monitor Mode)|monitor mode]].

See [[airmon-ng]]
# Commands
```
sudo airodump-ng wlan0mon
```
# Interaction

Since revision r1648, <em>[[airodump-ng]]</em> can receive and interpret keystrokes while running. The following list describes the currently assigned keys and supposed actions.
- <strong>\[a\]</strong>: Select active areas by cycling through these display options: AP+STA; AP+STA+ACK; AP only; STA only
- <strong>\[d\]</strong>: Reset sorting to defaults (Power)
- <strong>\[i\]</strong>: Invert sorting algorithm
- <strong>\[m\]</strong>: Mark the selected AP or cycle through different colors if the selected AP is already marked
- <strong>\[r\]</strong>: (De-)Activate real-time sorting - applies sorting algorithm every time the display will be redrawn
- <strong>\[s\]</strong>: Change column to sort by, which currently includes: First seen; BSSID; PWR level; Beacons; Data packets; Packet rate; Channel; Max. data rate; Encryption; Strongest Ciphersuite; Strongest Authentication; ESSID
- <strong>\[SPACE\]</strong>: Pause display redrawing/ Resume redrawing
- <strong>\[TAB\]</strong>: Enable/Disable scrolling through the AP list
- <strong>\[UP\]</strong>: Select the AP prior to the currently marked AP in the displayed list if available
- <strong>\[DOWN\]</strong>: Select the AP after the currently marked AP if available

If an AP is selected or marked, all the connected stations will also be selected or marked with the same color as the corresponding Access Point.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://www.aircrack-ng.org/doku.php?id=airodump-ng](https://www.aircrack-ng.org/doku.php?id=airodump-ng)
