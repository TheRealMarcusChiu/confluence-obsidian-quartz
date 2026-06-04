---
title: "Docker Network／Driver Types"
created: 2024-07-09T12:22:49.666-05:00
modified: 2026-05-15T18:17:40.329-05:00
parent: "[[Docker]]"
children: []
---
![](https://www.youtube.com/watch?v=bKFMS5C4CG0)![](https://www.youtube.com/watch?v=fBRgw5dyBd4)
# Docker Network/Driver Types

> [!expand-ui]- Bridge (Created - Default)
> ```
> > ip address show
> 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
>     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>     inet 127.0.0.1/8 scope host lo
>        valid_lft forever preferred_lft forever
>     inet6 ::1/128 scope host
>        valid_lft forever preferred_lft forever
> 2: ens18: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
>     link/ether 42:dc:a8:22:d2:da brd ff:ff:ff:ff:ff:ff
>     altname enp0s18
>     inet 192.168.86.33/24 metric 100 brd 192.168.86.255 scope global dynamic ens18
>        valid_lft 50998sec preferred_lft 50998sec
>     inet6 fe80::40dc:a8ff:fe22:d2da/64 scope link
>        valid_lft forever preferred_lft forever
> ```
>
> Install and run Docker
>
> Running <code><font style="color: rgb(122,134,154);">ip address show</font></code> will display the newly created docker bridge
> ```
> > ip address show
> 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
>     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>     inet 127.0.0.1/8 scope host lo
>        valid_lft forever preferred_lft forever
>     inet6 ::1/128 scope host
>        valid_lft forever preferred_lft forever
> 2: ens18: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
>     link/ether 42:dc:a8:22:d2:da brd ff:ff:ff:ff:ff:ff
>     altname enp0s18
>     inet 192.168.86.33/24 metric 100 brd 192.168.86.255 scope global dynamic ens18
>        valid_lft 86303sec preferred_lft 86303sec
>     inet6 fe80::40dc:a8ff:fe22:d2da/64 scope link
>        valid_lft forever preferred_lft forever
> 3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
>     link/ether 02:42:63:cf:28:6f brd ff:ff:ff:ff:ff:ff
>     inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
>        valid_lft forever preferred_lft forever
> ```
>
> We can also see the newly created bridge via the following command
> ```
> > sudo docker network ls
> NETWORK ID     NAME      DRIVER    SCOPE
> 9ccdf048b3f1   bridge    bridge    local
> fec399e1fccc   host      host      local
> 5be639893dfe   none      null      local
> ```
>
> Run some containers
> ```
> sudo docker run -itd --rm --name container-1 busybox
> sudo docker run -itd --rm --name container-2 busybox
> sudo docker run -itd --rm --name container-3 nginx
> ```
>
> By default, for each container, a virtual-ethernet is created and is attached to the Docker bridge.
> ```
> > ip address show
> 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
>     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>     inet 127.0.0.1/8 scope host lo
>        valid_lft forever preferred_lft forever
>     inet6 ::1/128 scope host
>        valid_lft forever preferred_lft forever
> 2: ens18: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
>     link/ether 42:dc:a8:22:d2:da brd ff:ff:ff:ff:ff:ff
>     altname enp0s18
>     inet 192.168.86.33/24 metric 100 brd 192.168.86.255 scope global dynamic ens18
>        valid_lft 85774sec preferred_lft 85774sec
>     inet6 fe80::40dc:a8ff:fe22:d2da/64 scope link
>        valid_lft forever preferred_lft forever
> 3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
>     link/ether 02:42:63:cf:28:6f brd ff:ff:ff:ff:ff:ff
>     inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
>        valid_lft forever preferred_lft forever
>     inet6 fe80::42:63ff:fecf:286f/64 scope link
>        valid_lft forever preferred_lft forever
> 5: veth110a28b@if4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
>     link/ether 9e:e8:e3:36:1b:5d brd ff:ff:ff:ff:ff:ff link-netnsid 0
>     inet6 fe80::9ce8:e3ff:fe36:1b5d/64 scope link
>        valid_lft forever preferred_lft forever
> 7: vethae9e271@if6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
>     link/ether 1e:65:8b:10:e3:dc brd ff:ff:ff:ff:ff:ff link-netnsid 1
>     inet6 fe80::1c65:8bff:fe10:e3dc/64 scope link
>        valid_lft forever preferred_lft forever
> 9: veth1c3386e@if8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
>     link/ether 1e:49:e5:4e:80:d7 brd ff:ff:ff:ff:ff:ff link-netnsid 2
>     inet6 fe80::1c49:e5ff:fe4e:80d7/64 scope link
>        valid_lft forever preferred_lft forever
> ```
>
> The following command displays the virtual-ethernet interfaces and which bridge it is connected to:
> ```
> > bridge link
> 5: veth110a28b@if4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 master docker0 state forwarding priority 32 cost 2
> 7: vethae9e271@if6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 master docker0 state forwarding priority 32 cost 2
> 9: veth1c3386e@if8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 master docker0 state forwarding priority 32 cost 2
> ```
>
> The following command allows us to view the IP address assigned to each container that's attached to the bridge:
> ```
> > sudo docker inspect bridge
> ...
>         "Containers": {
>             "54e598fbd1dcb8aed76410d14d849d8d8146c6c6663a538722c3c277288eecdd": {
>                 "Name": "container-1",
>                 "EndpointID": "8fd2786621c95940d5e9c146925bd880f11d319a2d761f044b8320982c518de3",
>                 "MacAddress": "02:42:ac:11:00:02",
>                 "IPv4Address": "172.17.0.2/16",
>                 "IPv6Address": ""
>             },
>             "88f104b2effcac8a82e95d3e820506b918a323f0b11b61165377ea92ab15ee08": {
>                 "Name": "container-2",
>                 "EndpointID": "f7cb30e12a2b1166409195e13212fedb03c7faebe61ad8de462b8a915896281b",
>                 "MacAddress": "02:42:ac:11:00:03",
>                 "IPv4Address": "172.17.0.3/16",
>                 "IPv6Address": ""
>             },
>             "ac5678bb0ffd672ff0f3dca6eabaff3e4af44046a9b6efad5bc698dc47d442f6": {
>                 "Name": "container-3",
>                 "EndpointID": "bc24b53470f140619938094dd8a9ba13bd2deb8d397a2f2a31fccb959d548660",
>                 "MacAddress": "02:42:ac:11:00:04",
>                 "IPv4Address": "172.17.0.4/16",
>                 "IPv6Address": ""
>             }
>         },
> ...
> ```
>
> Let's shell into container-1
> ```
> > sudo docker exec -it container-1 sh
> / # ip add
> 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
>     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>     inet 127.0.0.1/8 scope host lo
>        valid_lft forever preferred_lft forever
> 4: eth0@if5: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
>     link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff
>     inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
>        valid_lft forever preferred_lft forever
> ```
>
> container-1 can ping any other container on the same docker bridge
> ```
> / # ping 172.17.0.3
> PING 172.17.0.3 (172.17.0.3): 56 data bytes
> 64 bytes from 172.17.0.3: seq=0 ttl=64 time=0.064 ms
> 64 bytes from 172.17.0.3: seq=1 ttl=64 time=0.075 ms
> ^C
> --- 172.17.0.3 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.064/0.069/0.075 ms
> ```
>
> container-1 can also ping the internet
> ```
> / # ping google.com
> PING google.com (142.250.113.139): 56 data bytes
> 64 bytes from 142.250.113.139: seq=0 ttl=104 time=15.904 ms
> 64 bytes from 142.250.113.139: seq=1 ttl=104 time=22.491 ms
> ^C
> --- google.com ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 15.904/19.197/22.491 ms
> ```
>
> this works because we can inspect the default gateway of container-1 which is the bridge
> ```
> / # ip route
> default via 172.17.0.1 dev eth0
> 172.17.0.0/16 dev eth0 scope link  src 172.17.0.2
> ```
>
> How to reach any services inside a container requires manual exposing of them ports:
> ```
> sudo docker stop container-3
> sudo docker run -itd --rm -p 80:80 --name container-3 nginx
> ```
>
> open in browser <code><font style="color: rgb(122,134,154);">http://IP\_ADDRESS\_OF\_COMPUTER\_RUNNING\_DOCKER:80</font></code>

> [!expand-ui]- User-Defined Bridge
> ```
> sudo docker network create network-name-here
> ```
>
> This creates a new bridge
> ```
> > ip address show
> 14: br-46993259cefe: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
>     link/ether 02:42:d0:a1:cb:dd brd ff:ff:ff:ff:ff:ff
>     inet 172.18.0.1/16 brd 172.18.255.255 scope global br-46993259cefe
>        valid_lft forever preferred_lft forever
> ```
> ```
> > sudo docker network ls
> NETWORK ID     NAME                DRIVER    SCOPE
> 9ccdf048b3f1   bridge              bridge    local
> fec399e1fccc   host                host      local
> 46993259cefe   network-name-here   bridge    local
> 5be639893dfe   none                null      local
> ```
>
> Let's add containers to this new user-defined bridge
> ```
> sudo docker run -itd --rm --network network-name-here --name container-11 busybox
> sudo docker run -itd --rm  --network network-name-here --name container-12 busybox
> sudo docker run -itd --rm  --network network-name-here --name container-13 nginx
> ```
>
> Containers in user-defined bridges are DNS resolved:
> ```
> > sudo docker exec -it container-11 sh
>
> / # ping container-11
> PING container-11 (172.18.0.2): 56 data bytes
> 64 bytes from 172.18.0.2: seq=0 ttl=64 time=0.049 ms
> 64 bytes from 172.18.0.2: seq=1 ttl=64 time=0.118 ms
> ^C
> --- container-11 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.049/0.083/0.118 ms
>
> / # ping container-12
> PING container-12 (172.18.0.3): 56 data bytes
> 64 bytes from 172.18.0.3: seq=0 ttl=64 time=0.358 ms
> 64 bytes from 172.18.0.3: seq=1 ttl=64 time=0.185 ms
> ^C
> --- container-12 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.185/0.271/0.358 ms
>
> / # ping container-13
> PING container-13 (172.18.0.4): 56 data bytes
> 64 bytes from 172.18.0.4: seq=0 ttl=64 time=0.159 ms
> 64 bytes from 172.18.0.4: seq=1 ttl=64 time=0.186 ms
> ^C
> --- container-13 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.159/0.172/0.186 ms
> ```

> [!expand-ui]- Host (Created)
> The container deployed as host network, shares the network with the actual host:
> ```
> sudo docker stop container-3
> sudo docker run -itd --rm --network host --name container-3 nginx
> ```
>
> Downside is no isolation

> [!expand-ui]- MACVLAN
> The container deployed as MACVLAN network, will be connected directly to the host's network
> ```
> > sudo docker network create -d macvlan \
>   --subnet 192.168.86.0/24 \ # subnet of host's network
>   --gateway 192.168.86.1 \   # gateway of host's network
>   -o parent=ens18 \          # name of the network interface conntected to host's network
>   my-macvlan
> > sudo docker network ls
> NETWORK ID     NAME                DRIVER    SCOPE
> 9ccdf048b3f1   bridge              bridge    local
> fec399e1fccc   host                host      local
> 89f0e20ab0fc   my-macvlan          macvlan   local
> 5be639893dfe   none                null      local
> ```
>
> Deploy containers under this new MACVLAN network
> ```
> sudo docker stop container-1 container-2 container-3
> sudo docker run -itd --rm --network my-macvlan --ip 192.168.86.201 --name container-1 busybox
> sudo docker run -itd --rm --network my-macvlan --ip 192.168.86.202 --name container-2 busybox
> sudo docker run -itd --rm --network my-macvlan --ip 192.168.86.203 --name container-3 nginx
> ```
>
> Containers can ping each other
> ```
> > sudo docker exec -it container-1 sh
> / # ping 192.168.86.1
> PING 192.168.86.1 (192.168.86.1): 56 data bytes
> 64 bytes from 192.168.86.1: seq=0 ttl=64 time=12.300 ms
> 64 bytes from 192.168.86.1: seq=1 ttl=64 time=4.390 ms
> 64 bytes from 192.168.86.1: seq=2 ttl=64 time=4.420 ms
> ^C
> --- 192.168.86.1 ping statistics ---
> 3 packets transmitted, 3 packets received, 0% packet loss
> round-trip min/avg/max = 4.390/7.036/12.300 ms
>
> / # ping 192.168.86.201
> PING 192.168.86.201 (192.168.86.201): 56 data bytes
> 64 bytes from 192.168.86.201: seq=0 ttl=64 time=0.078 ms
> 64 bytes from 192.168.86.201: seq=1 ttl=64 time=0.097 ms
> ^C
> --- 192.168.86.201 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.078/0.087/0.097 ms
>
> / # ping 192.168.86.202
> PING 192.168.86.202 (192.168.86.202): 56 data bytes
> 64 bytes from 192.168.86.202: seq=0 ttl=64 time=0.171 ms
> 64 bytes from 192.168.86.202: seq=1 ttl=64 time=0.103 ms
> ^C
> --- 192.168.86.202 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.103/0.137/0.171 ms
>
> / # ping 192.168.86.203
> PING 192.168.86.203 (192.168.86.203): 56 data bytes
> 64 bytes from 192.168.86.203: seq=0 ttl=64 time=0.095 ms
> 64 bytes from 192.168.86.203: seq=1 ttl=64 time=0.109 ms
> ^C
> --- 192.168.86.203 ping statistics ---
> 2 packets transmitted, 2 packets received, 0% packet loss
> round-trip min/avg/max = 0.095/0.102/0.109 ms
> ```
>
> However host can't ping the containers
> ```
> > ping 192.168.86.201
> PING 192.168.86.201 (192.168.86.201) 56(84) bytes of data.
> ^C
> --- 192.168.86.201 ping statistics ---
> 2 packets transmitted, 0 received, 100% packet loss, time 1004ms
> ```
>
> But you could access the NGINX port 80 automatically:
> - open in browser [http://192.168.86.203:80](http://192.168.86.203:80)

> [!expand-ui]- ?
> create a new sub-interface
> ```
> > sudo docker network create -d macvlan \
>   --subnet 192.168.86.0/24 \ # subnet of host's network
>   --gateway 192.168.86.1 \   # gateway of host's network
>   -o parent=ens18.20 \       # name of the network interface connected to host's network
>   my-something
> ```
>
> display newly created sub-interface
> ```
> ip add show
> ...
> ```

> [!expand-ui]- IPVLAN (L2)
> Similar to MACVLAN however instead of containers having their own MAC address they will use the same MAC address as its host
> ```
> > sudo docker network create -d ipvlan \
>   --subnet 192.168.86.0/24 \ # subnet of host's network
>   --gateway 192.168.86.1 \   # gateway of host's network
>   -o parent=ens18 \          # name of the network interface connected to host's network
>   my-ipvlan
> ```
>
> Deploy containers under this new IPVLAN network
> ```
> sudo docker stop container-1 container-2 container-3
> sudo docker run -itd --rm --network my-ipvlan --ip 192.168.86.201 --name container-1 busybox
> sudo docker run -itd --rm --network my-ipvlan --ip 192.168.86.202 --name container-2 busybox
> sudo docker run -itd --rm --network my-ipvlan --ip 192.168.86.203 --name container-3 nginx
> ```
>
> check if container has same MAC address as host:
> ```
> > ip address show
> ...
> 2: ens18: <BROADCAST,MULTICAST,PROMISC,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
>     link/ether 42:dc:a8:22:d2:da brd ff:ff:ff:ff:ff:ff
> ...
> ```
> ```
> > sudo docker exec -it container-1 sh
> / # ip add show
> ...
> 30: eth0@if2: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
>     link/ether 42:dc:a8:22:d2:da brd ff:ff:ff:ff:ff:ff
> ...
> ```

> [!expand-ui]- IPVLAN (L3)
> Connecting to the host (the host acts like a router)
> ```
> > sudo docker network create -d ipvlan \
>   --subnet 192.168.13.0/24 \ # completely new subnet
>   -o parent=ens18 \          # name of the network interface connected to host's network
>   -o ipvlan_mode=l3 \
>   --subnet 192.168.14.0/24 \ # completely new subnet
>   my-ipvlan
> ```
>
> Deploy containers under this new IPVLAN network
> ```
> sudo docker stop container-1 container-2 container-3
> sudo docker run -itd --rm --network my-ipvlan --ip 192.168.13.101 --name container-1 busybox
> sudo docker run -itd --rm --network my-ipvlan --ip 192.168.13.102 --name container-2 busybox
> sudo docker run -itd --rm --network my-ipvlan --ip 192.168.14.103 --name container-3 nginx
> ```
>
> Inspect containers and their assigned IP addresses
> ```
> > sudo docker inspect my-ipvlan
> ...
> "Containers": {
>             "4ec542a704e75d40f9d5b034434f05a5cd912540ca9c1e005995083006784614": {
>                 "Name": "container-1",
>                 "EndpointID": "acc9f414e9757fb289ed8f4095b0cc1e8aec899b4e227616771df6bffaa4b0be",
>                 "MacAddress": "",
>                 "IPv4Address": "192.168.13.101/24",
>                 "IPv6Address": ""
>             },
>             "6d2bd84a6ca49237db56362f729ebe5999646cecda0a3eab323de2d825e571de": {
>                 "Name": "container-2",
>                 "EndpointID": "9a6c6dbdb53d5e7f3776a00a170c01a25584ddea038402dcf847bc47dae9992b",
>                 "MacAddress": "",
>                 "IPv4Address": "192.168.13.102/24",
>                 "IPv6Address": ""
>             },
>             "c3ef4dbcbc4dbd675479341b508bc5400ced524dc6afe16815c40ac5d0b6efe9": {
>                 "Name": "container-3",
>                 "EndpointID": "d80995130162cbc77b1c797ba8fd5cb837acf6a4c8c0c56f0ad75dc8a95836af",
>                 "MacAddress": "",
>                 "IPv4Address": "192.168.14.103/24",
>                 "IPv6Address": ""
>             }
> },
> ...
> ```

> [!expand-ui]- Overlay Network
> TODO

> [!expand-ui]- None (Created)
> This network is already created:
> ```
> > sudo docker network ls
> NETWORK ID     NAME        DRIVER    SCOPE
> 9ccdf048b3f1   bridge      bridge    local
> fec399e1fccc   host        host      local
> 5be639893dfe   none        null      local <--------
> ```
>
> Deploy containers under this NONE network
> ```
> sudo docker stop container-1 container-2 container-3
> sudo docker run -itd --rm --network none --name container-1 busybox
> ```
>
> Enter into busybox
> ```
> > sudo docker exec -it container-1 sh
> / # ip address show
> 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
>     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>     inet 127.0.0.1/8 scope host lo
>        valid_lft forever preferred_lft forever
> ```
