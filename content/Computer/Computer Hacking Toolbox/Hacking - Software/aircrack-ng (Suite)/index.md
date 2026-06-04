---
title: "aircrack-ng (Suite)"
created: 2019-03-16T02:59:13.256-05:00
modified: 2026-05-21T13:55:54.483-05:00
parent: "[[Hacking - Software]]"
children:
  - "[[aircrack-ng - Commands]]"
  - "[[aircrack-ng - Deauth User(s)]]"
  - "[[airgraph-ng]]"
  - "[[airmon-ng]]"
  - "[[airodump-ng]]"
---
###### aircrack-ng
````excerpt
- is a complete suite of tools to assess [[802.11 - WiFi／Wi-Fi|WiFi]] network security
````
^excerpt

# Main Features

```merge-table
{
  "rows": [
    [
      {
        "content": "aircrack-ng",
        "bg": "#F4F5F7"
      },
      "Cracks [[Wired Equivalent Privacy (WEP)|WEP]] keys using the [Fluhrer, Mantin, and Shamir (FMS) attack](https://en.wikipedia.org/wiki/Fluhrer,_Mantin_and_Shamir_attack), PTW, Korek, dictionary attacks, and [[WiFi Protected Access (WPA)|WPA]]/[[WiFi Protected Access 2 (WPA2)|WPA2]]-PSK using dictionary attacks."
    ],
    [
      {
        "content": "airdecap-ng",
        "bg": "#F4F5F7"
      },
      "Decrypts WEP or WPA encrypted capture files with a known key."
    ],
    [
      {
        "content": "[[airmon-ng]]",
        "bg": "#F4F5F7"
      },
      "Places different cards in monitor mode."
    ],
    [
      {
        "content": "aireplay-ng",
        "bg": "#F4F5F7"
      },
      "Packet injector ([[Linux]], and [[Windows]] with [CommView](https://en.wikipedia.org/wiki/CommView) drivers)."
    ],
    [
      {
        "content": "[[airodump-ng]]",
        "bg": "#F4F5F7"
      },
      "[Packet sniffer](https://en.wikipedia.org/wiki/Packet_sniffer): Places air traffic into [pcap](https://en.wikipedia.org/wiki/Pcap) or IVS files and shows information about networks."
    ],
    [
      {
        "content": "airtun-ng",
        "bg": "#F4F5F7"
      },
      "Virtual tunnel interface creator."
    ],
    [
      {
        "content": "packetforge-ng",
        "bg": "#F4F5F7"
      },
      "Creates encrypted packets for injection."
    ],
    [
      {
        "content": "ivstools",
        "bg": "#F4F5F7"
      },
      "Tools to merge and convert."
    ],
    [
      {
        "content": "airbase-ng",
        "bg": "#F4F5F7"
      },
      "Incorporates techniques for attacking client, as opposed to Access Points."
    ],
    [
      {
        "content": "airdecloak-ng",
        "bg": "#F4F5F7"
      },
      "Removes WEP cloaking from pcap files."
    ],
    [
      {
        "content": "airolib-ng",
        "bg": "#F4F5F7"
      },
      "Stores and manages ESSID and password lists and compute Pairwise Master Keys."
    ],
    [
      {
        "content": "airserv-ng",
        "bg": "#F4F5F7"
      },
      "Allows to access the wireless card from other computers."
    ],
    [
      {
        "content": "buddy-ng",
        "bg": "#F4F5F7"
      },
      "The helper server for easside-ng, run on a remote computer."
    ],
    [
      {
        "content": "easside-ng",
        "bg": "#F4F5F7"
      },
      "A tool for communicating to an access point, without the WEP key."
    ],
    [
      {
        "content": "tkiptun-ng",
        "bg": "#F4F5F7"
      },
      "WPA/TKIP attack tool."
    ],
    [
      {
        "content": "wesside-ng",
        "bg": "#F4F5F7"
      },
      "Automatic tool for WEP key recovery."
    ]
  ]
}
```
# Installation

> [!expand]- ubuntu
> sudo apt install aircrack-ng

> [!expand]- linux
> [https://www.aircrack-ng.org/doku.php?id=install_aircrack](https://www.aircrack-ng.org/doku.php?id=install_aircrack)
>
> Aircrack-ng is a complete suite of tools to assess WiFi network security.
>
> It focuses on different areas of WiFi security:
> - Monitoring: Packet capture and export of data to text files for further processing by third party tools.
> - Attacking: Replay attacks, deauthentication, fake access points and others via packet injection.
> - Testing: Checking WiFi cards and driver capabilities (capture and injection)
> - Cracking: WEP and WPA PSK (WPA 1 and 2)
>
> 1. first we need /sys/class/ieee80211, if you don’t have it:
> 	- go to [http://linuxwireless.org/download/compat-wireless-2.6/](http://linuxwireless.org/download/compat-wireless-2.6/)
> 	- search for compat-wireless-2010-06-26-pc.tar or anything of the like
> 	- extract it
> 	- go into the folder where the MakeFile is located
> 	- type these commands: make unload make load
> 2. first we need to set our Network as monitor mode (default: promiscuous mode) ifconfig down iwconfig mode monitor ifconfig up
> 	- Mac’s builtin NIC doesn’t support monitor mode
> 	- follow \_setup\_mac.txt for monitor mode workaround
> 	- currently, aircrack-ng has limited support for Mac
> 3. install/update aircrack-ng on mac using brew on terminal brew install aircrack-ng
> 4. verify air stuff has been install type air in terminal then press TAB twice
>    
>    it should display something like this
>    
>    <span style="white-space: pre-wrap"><code>airbase-ng     (Executable link, 88kB)</code><br><code>aircrack-ng    (Executable link, 112kB)</code><br><code>airdecap-ng    (Executable link, 41kB)</code><br><code>airdecloak-ng  (Executable link, 30kB)</code><br><code>airdriver-ng   (Executable link, 109kB)  </code><br><code>aireplay-ng    (Executable link, 111kB)  </code><br><code>airmon-ng                (Executable link, 28kB)</code><br><code>airodump-ng              (Executable link, 105kB)</code><br><code>airodump-ng-oui-update   (Executable link, 1.3kB)</code><br><code>airserv-ng               (Executable link, 25kB)</code><br><code>airtun-ng                (Executable link, 58kB)</code></span>

> [!expand]- macOS
> Work around for \_setup.txt’s set Network to monitor mode in Mac
>
> Create symlink to airport
> ```
> sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
> ```
>
> To search for active channels nearby that you can sniff, run this:
> ```
> sudo airport en1 -s
> ```
>
> Example of sniffing in monitor mode
> ```
> sudo airport en1 sniff 1
> ```
>
> This sniffs on channel 1 and saves a pcap capture file to /tmp/airportSniffXXXXXX.pcap (where XXXXXX will vary)
>
> You can view this with:
> ```
> tcpdump -r <filename>
> opening it in wireshark
> ```
>
> The aircrack-ng suite has limited Mac OS X support. Currently it only supports the following tools: aircrack-ng, packetforge-ng, ivstools and makeivs. Any program which requires opening a wireless interface is not supported.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://www.aircrack-ng.org/](https://www.aircrack-ng.org/)
