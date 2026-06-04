---
title: "Bandwidth - Throughput - Link Speed - Forwarding Rate - Packets Per Second (pps) - Bit Rate - Line Rate - Wirespeed"
created: 2020-05-29T14:21:16.902-05:00
modified: 2020-05-29T14:40:27.728-05:00
parent: "[[Computer Network／Networking Terminology]]"
children: []
---
###### Bandwidth / Link Speed
- the THEORETICAL MAXIMUM amount of data that can be sent over a channel in a specific interval of time
- usually used to describe a channel
- two components of bandwidth:
	- download speed
	- upload speed

###### Throughput
- the ACTUAL amount of data that traveled through the channel (i.e. amount of bandwidth used)
- usually used to describe a specific communication session between 2 hosts

###### Bandwidth & Throughput
- both are affected by which protocol is being used, cpu performance of each host, tcp stack settings of each host, any qos/traffic-priority or overbooking in the links in between etc

###### Line Rate / Wirespeed
- just means that this device is supposed to be able to push traffic at the link speeds its interfaces uses (as in there is more cpu/asic performance than number of interfaces and linkspeeds they can use at once)
- "Line rate" on its own should be the same as "link speed"

###### Forwarding Rate / Packets Per Second (pps)

The thing here is that even if the packet/frame is over the cable forwarded at 10Gbps there will be some processing on the receiving end before this packet/frame can be forwarded to next hop (normally checksum, dstmac or dstip lookups etc).
###### Bitrate
- the main difference with the above pps is that bitrate can be high for large packets
- for example:
	- if you got a device that can do 100k pps the very same vendor (Cisco often cheats this way in datasheets) will then announce bitrates for the max packet size instead of minimum packet size.
	- That is (roughly) 100k pps with 1500 bytes packets is (give or take): 100.000 \* 1500 \* 8 = 1 200 000 000 = 1.2Gbps
	- While with 64 bytes packets the very same "forwarding rate" suddenly becomes this in "bit rate":
	- 100.000 \* 64 \* 8 = 51 200 000 = 51.2 Mbps
- In the above example I would not say that such device can achieve "wirespeed" for all packetsizes

In short all the mentioned terms speak about the same thing but depending on context there can be a twist to it :-)
