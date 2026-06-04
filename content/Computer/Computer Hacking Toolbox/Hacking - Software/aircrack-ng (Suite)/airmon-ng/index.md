---
title: "airmon-ng"
created: 2021-08-14T09:40:10.459-05:00
modified: 2023-04-17T13:47:32.091-05:00
parent: "[[aircrack-ng (Suite)]]"
children: []
---
###### airmon-ng
- this script can be used to enable monitor mode on wireless interfaces. It may also be used to go back from monitor mode to managed mode

## Usage Examples

> [!expand-ui]- Check the status and/or listing of Wireless Interfaces
> ```
> ~# airmon-ng
> PHY	Interface	Driver		Chipset
>
> phy0	wlan0		ath9k_htc	Atheros Communications, Inc. AR9271 802.11n
> ```

> [!expand-ui]- Checking for Interfering Processes
> When putting a card into monitor mode, it will automatically check for interfering processes. It can also be done manually by running the following command:
> ```
> ~# airmon-ng check
> Found 5 processes that could cause trouble.
> If airodump-ng, aireplay-ng or airtun-ng stops working after
> a short period of time, you may want to kill (some of) them!
>
>   PID Name
>   718 NetworkManager
>   870 dhclient
>  1104 avahi-daemon
>  1105 avahi-daemon
>  1115 wpa_supplicant
> ```

> [!expand-ui]- Killing Interfering Processes
> This command stops network managers and then kills interfering processes left:
> ```
> ~# airmon-ng check kill
> Killing these processes:
>
>   PID Name
>   870 dhclient
>  1115 wpa_supplicant
> ```

> [!expand-ui]- Enable Monitor Mode
> > [!info]
> > It is very important to kill the network managers before putting a card in monitor mode!
> ```
> ~# airmon-ng start wlan0
> Found 5 processes that could cause trouble.
> If airodump-ng, aireplay-ng or airtun-ng stops working after
> a short period of time, you may want to kill (some of) them!
>
>   PID Name
>   718 NetworkManager
>   870 dhclient
>  1104 avahi-daemon
>  1105 avahi-daemon
>  1115 wpa_supplicant
>
> PHY	Interface	Driver		Chipset
>
> phy0	wlan0		ath9k_htc	Atheros Communications, Inc. AR9271 802.11n
> 		(mac80211 monitor mode vif enabled for [phy0]wlan0 on [phy0]wlan0mon)
> 		(mac80211 station mode vif disabled for [phy0]wlan0)
> ```
>
> As you can see, it created a monitor mode interface called wlan0mon and it notified there are a few processes that will interfere with the tools.

> [!expand-ui]- Disable Monitor Mode
> ```
> ~# airmon-ng stop wlan0mon
> PHY	Interface	Driver		Chipset
>
> phy0	wlan0mon	ath9k_htc	Atheros Communications, Inc. AR9271 802.11n
> 		(mac80211 station mode vif enabled on [phy0]wlan0)
> 		(mac80211 monitor mode vif disabled for [phy0]wlan0mon)
> ```
>
> Don't forget to restart the network manager. It is usually done with the following command:
> ```
> sudo service NetworkManager restart
> ```
# Resources
- [https://www.aircrack-ng.org/doku.php?id=airmon-ng](https://www.aircrack-ng.org/doku.php?id=airmon-ng)
