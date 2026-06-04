---
title: "aircrack-ng - Commands"
created: 2021-08-20T22:33:56.509-05:00
modified: 2021-08-20T22:39:42.701-05:00
parent: "[[aircrack-ng (Suite)]]"
children: []
---
<strong>Check status and/or listing wireless interfaces</strong>
<code>sudo airmon-ng</code><strong>Debugging</strong>
<code>sudo airmon-ng --verbose</code><strong>Check for interfering processes</strong>
<code>sudo airmon-ng check</code><strong>Kill interfering processes</strong>
<code>sudo airmon-ng check kill</code><strong>Set NIC into monitor mode</strong>
<code>sudo airmon-ng start wifi0 9</code><strong>Set NIC into monitor mode on channel 9</strong>
<code>sudo airmon-ng start wifi0</code><strong>Set NIC into managed mode</strong>
<code>sudo airmon-ng stop wifi0</code><strong>Restart network manager</strong>
<code>sudo service network-manager restart</code><strong>Set channel of NIC</strong>
<code>sudo airodump-ng --channel 11 wlan0mon</code><strong>Test injection of NIC (ensure NIC is in monitor mode and target channel)</strong>
<code>sudo aireplay-ng --test wlan0mon</code><strong>Find MAC address of the AccessPoints</strong>
<code>sudo airodump-ng \<NIC name\></code>
<code>sudo airport \<NIC name\> -s</code>
