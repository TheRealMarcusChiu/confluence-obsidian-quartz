---
title: "Raspberry Pi - Router"
created: 2019-04-10T16:06:47.198-05:00
modified: 2020-06-01T21:27:30.289-05:00
parent: "[[Raspbian - Raspberry Pi]]"
children: []
---
install the following packages
```
sudo apt-get update
sudo apt-get install hostapd isc-dhcp-server iptables-persistent vim
```
### Setup DHCP Server
<font style="color: rgb(255,0,0);">sudo vim /etc/dhcp/dhcpd.conf</font>

find lines that say
```
option domain-name "example.org";
option domain-name-servers ns1.example.org, ns2.example.org;
```

comment them out like below
```
# option domain-name "example.org";
# option domain-name-servers ns1.example.org, ns2.example.org;
```

find lines that say
```
# If this DHCP server is the official DHCP server for the local
# network, the authoritative directive should be uncommented.
#authoritative;
```

and uncomment it out like below
```
# If this DHCP server is the official DHCP server for the local
# network, the authoritative directive should be uncommented.
authoritative;
```

then scroll to the bottom and add the following lines
```
subnet 192.168.42.0 netmask 255.255.255.0 {
  range 192.168.42.10 192.168.42.50;
  option broadcast-address 192.168.42.255;
  option routers 192.168.42.1;
  default-lease-time 600;
  max-lease-time 7200;
  option domain-name "local";
  option domain-name-servers 8.8.8.8, 8.8.4.4;
}	
```

save the file

<font style="color: rgb(255,0,0);">sudo vim /etc/default/isc-dhcp-server</font>

find the lines
```
INTERFACESv4=""
INTERFACESv6=""
```

modify it like below
```
INTERFACESv4="wlan0"
# INTERFACESv6=""
```

save the file
### Setup wlan0 for Static IP
<font style="color: rgb(255,0,0);">sudo vim /etc/network/interfaces</font>

make it look like below
```
...
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet static
  address 192.168.42.1
  netmask 255.255.255.0
...
```

save the file

assign a static IP address to the WiFi adapter by running

<font style="color: rgb(255,0,0);">sudo ifconfig wlan0 192.168.42.1</font>
### Configure Access Point
<font style="color: rgb(255,0,0);">sudo vim /etc/hostapd/hostapd.conf</font>

modify the <strong>ssid=</strong> and <strong>wpa\_passphrase=</strong> as necessary
```
interface=wlan0
ssid=Pi_AP
country_code=US
hw_mode=g
channel=6
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=Raspberry
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
wpa_group_rekey=86400
ieee80211n=1
wme_enabled=1
```

save the file

<font style="color: rgb(255,0,0);">sudo vim /etc/default/hostapd</font>

find the line and replace like below
```
DAEMON_CONF="/etc/hostapd/hostapd.conf"
```

save the file

<font style="color: rgb(255,0,0);">sudo vim /etc/init.d/hostapd</font>

find the line and replace like below
```
DAEMON_CONF=/etc/hostapd/hostapd.conf
```

save the file
### Configure Network Address Translation
<font style="color: rgb(255,0,255);"><font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">Setup IP Forwarding</font></font></font>

<font style="color: rgb(255,0,0);">sudo vim /etc/sysctl.conf</font>

scroll to bottom and add the following line (this would start IP forwarding on bootup)
```
net.ipv4.ip_forward=1
```

save the file

run the following command to activate it immediately

<font style="color: rgb(255,0,0);">sudo sh -c "echo 1 \> /proc/sys/net/ipv4/ip\_forward"</font>

<font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">Network Translation between ethernet port eth0 and the wifi adaptor wlan0</font></font>
```
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT	
```

<font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">to check what's in the iptables</font></font>

<font style="color: rgb(255,0,0);">sudo iptables -t nat -S</font>

<font style="color: rgb(255,0,0);">sudo iptables -S</font>

<font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">to make this happen on reboot run:</font></font>

<font style="color: rgb(255,0,0);">sudo sh -c "iptables-save \> /etc/iptables/rules.v4"</font>
### <font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">Finishing Up</font></font>
<font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">start servers</font></font>

<font style="color: rgb(255,0,0);">sudo systemctl restart isc-dhcp-server</font><font style="color: rgb(255,0,0);">sudo systemctl restart hostapd</font>

<font style="color: rgb(255,0,0);"><font style="color: rgb(0,0,0);">check status of servers</font></font>

sudo systemctl status isc-dhcp-server
sudo systemctl status hostapd
