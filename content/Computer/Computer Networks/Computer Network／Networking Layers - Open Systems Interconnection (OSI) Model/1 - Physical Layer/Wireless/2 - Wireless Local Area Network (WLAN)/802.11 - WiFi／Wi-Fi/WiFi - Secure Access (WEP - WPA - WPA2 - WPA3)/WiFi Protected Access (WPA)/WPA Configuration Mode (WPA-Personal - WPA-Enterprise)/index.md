---
title: "WPA Configuration Mode (WPA-Personal - WPA-Enterprise)"
created: 2019-11-13T20:51:50.452-06:00
modified: 2019-11-13T21:03:10.881-06:00
parent: "[[WiFi Protected Access (WPA)]]"
children: []
---
### WPA-Personal (WPA-PSK)
![[WPA Configuration Mode (WPA-Personal - WPA-Enterprise)/WPA-personal-home-network.jpg]]

This mode is appropriate for most home networks. When a password is set on a wireless router or an access point (AP), it must be entered by users when connecting to the Wi-Fi network.

On the PSK mode, wireless access can't be individually or centrally managed. One password applies to all users, and it should be manually changed on all the wireless clients once it is manually modified on the original wireless router or AP.

The password is stored on the wireless clients. Therefore, anyone on the computer can connect to the network and also see the password.

WPA-PSK works by configuring a [[2 - Wireless Local Area Network (WLAN)|WLAN]] passphrase or password of eight to 63 characters. Based on the password, [[WiFi - Distributed Systems (Access Points (AP))|access point]] (router) and connecting node credentials, a 256-character key is generated, shared and used by both devices for network traffic encryption and decryption. A connected user that provides correct credentials receives WLAN access. If implemented with [[Temporal Key Integrity Protocol (TKIP)]], WPA-PSK dynamically generates a 128-bit encryption key for each packet. Additionally, the [[Advanced Encryption Standard (AES)]] may be used instead of TKIP.

WPA-PSK does not require an authentication server (e.g. [[Remote Authentication Dial-In User Service (RADIUS)|RADIUS]] server) and manual user configuration. Thus, it is considered simpler and leaner than WPA Enterprise
### WPA-Enterprise (WPA-802.1x, RADIUS)

![[WPA Configuration Mode (WPA-Personal - WPA-Enterprise)/WPA-enterprise-business-network.jpg]]

This mode provides the security needed for wireless networks in business environments. It is more complicated to set up, and it offers individualized and centralized control over access to your Wi-Fi network. When users try to connect to the network, they need to present their login credentials.

This mode supports [[802.1X - EAPOL|802.1X]] [[Remote Authentication Dial-In User Service (RADIUS)|RADIUS]] [[Authentication (AuthN)|authentication]] and is appropriate in the cases where a RADIUS server is deployed. WPA-Enterprise should only be used when a RADIUS server is connected for client authentication.

Users never deal with the actual encryption keys. They are securely created and assigned per user session in the background after a user presents their login credentials. This prevents people from getting the network key from computers.
### Summary

WPA-Personal is a common method to secure wireless networks, and it is suitable for most home networks.
WPA-Enterprise provides the security needed for wireless networks in business environments where a RADIUS server is deployed.
