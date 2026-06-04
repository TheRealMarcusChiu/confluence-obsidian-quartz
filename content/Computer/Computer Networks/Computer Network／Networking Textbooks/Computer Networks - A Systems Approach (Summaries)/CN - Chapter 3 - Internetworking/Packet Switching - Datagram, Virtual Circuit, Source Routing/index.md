---
title: "Packet Switching - Datagram, Virtual Circuit, Source Routing"
created: 2019-03-17T00:29:27.666-05:00
modified: 2019-12-03T11:20:23.428-06:00
parent: "[[CN - Chapter 3 - Internetworking]]"
children: []
---
[[Network Switch|switches]] are multi-input, multi-output (MIMO) devices that transfers packets from an input-port to one or more outgoing ports

[[Router|routers]] on the other-hand does [[Forwarding|packet forwarding]]
### Packet Switching Methods

there are 3 approaches a switch decides on which output link to place each packet on:

```merge-table
{
  "rows": [
    [
      {
        "content": "Approach",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<strong>datagram</strong>",
      "- <em>connectionless</em> approach\n- route of packet is determined by the gateways that participate inthe delivery process"
    ],
    [
      "<strong>virtual circuit</strong>",
      "- <em>connection-oriented</em> approach"
    ],
    [
      "<strong>source routing</strong>",
      "- less common, but still useful\n- route of packet is predetermined by sender where the gateways must adhere to"
    ]
  ]
}
```
## <strong>Datagram</strong>

> [!expand]- Click here to expand...
> - each packet, now called a datagram, is treated as a separate entity
> - each packet is routed independently through the network
> - 3 primary types of datagram switching networks
> 	- <strong>store and forward</strong> - buffers data until the entire packet is received and checked for errors. This prevents corrupted packets from propagating throughout the network but increases switching delay.
> 	- <strong>fragment free</strong> - filters out most error packets but doesn't necessarily prevent the propagation of errors throughout the network. It offers faster switching speeds and lower delay than store-and-forward mode.
> 	- <strong>cut through</strong> - does not filter errors; it switches packets at the highest throughput, offering the least forwarding delay
>
> - every packet contains just enough information to enable any switch to decide how to get it to destination
> - for each switch, to decide how to forward a packet, it consults the [forwarding table](http://doc.marcuschiu.com/log-page/5c7326b4154cee28cd8f4094)
> - [[Routing Tables - Forwarding Tables|forwarding tables]] could be setup either:
> 	- statically - via network admins
> 	- dynamically - via[[Routing Protocols]][[Dynamic Routing Protocols|dynamic routing protocols]]
>
> ![[Packet Switching - Datagram, Virtual Circuit, Source Routing/1.png|650]]
## <strong>Virtual Circuit</strong>

> [!expand]- Click here to expand...
> - similar to <em>circuit switching</em>, but built on top of a packet switching internetwork
> - path is determined between source and destination. however, resources are not allocated
>
> - not as popular as the Internet's connectionless model
> - two phases:
> 	1. connection setup
> 	2. data transfer
> - <strong>Phase 1: Connection Setup</strong>
> 	- each switch between source and destination is to establish a <em>connection state</em> by adding an entry into a <em>VC table</em>
> 	- an entry in the VC table on a single switch contains (look at figure 3.4 and table 3.2):
> 		- <strong>incoming interface</strong> - on which packets for this VC arrive at the switch
> 		- <strong>virtual circuit identifier (VCI)</strong> - uniquely identifies the connection at connection at this switch and which will be carried inside the header of the packets that belong to this connection
> 		- <strong>outgoing interface</strong> - on which packets for this VC leave the switch
> 		- <strong>VCI</strong> - potentially different VCI that will be used for outgoing packets
> 	- two approaches to establishing <em>connection state</em>:
> 		- <strong>permanent virtual circuit (PVC)</strong>
> 			- have a network administrator to configure the <em>connection state</em>
> 		- <strong>salient/signaled virtual circuit (SVC)</strong>
> 			- host send messages into the network to setup/teardown a <em>connection state</em>
> 				- before data-transfer - send setup message
> 				- after data-transfer - send teardown message
>
>   > [!list-indent-undo]
>   > > [!indent]
>   > > ![[Packet Switching - Datagram, Virtual Circuit, Source Routing/2.png|500]]
>
> - types of VC technologies:
> 	- X.25
> 	- Frame Relay
> 	- Asynchronous Transfer Mode (ATM)
>
> ### Asynchronous Transfer Mode (ATM)
>
> > [!expand]- Click here to expand...
> > - a virtual circuit-based networking technology
> > - ATM defines two different cell formats:
> > 	- <strong>user–network interface (UNI)</strong>
> > 	- <strong>network–network interface (NNI)</strong>
> > - most ATM links use UNI cell format
> >
> > > <strong>UNI ATM Format</strong>
> > > 
> > > <strong>![[Packet Switching - Datagram, Virtual Circuit, Source Routing/3.png]]</strong>
> > - UNI ATM cell format (figure 3.6)
> > 	- 4-bit GFC - never saw much use
> > 	- 8-bit virtual path identifier (VPI)
> > 	- 16-bit virtual circuit identifier (VCI)
> > 	- 3-bit type
> > 	- 1-bit CLP
> > 	- 8-bit header error check (HEC) - which uses the [[network - error detection and correction|CRC]]-8 polynomial
> > 	- 48 bytes payload
> > - an UNI ATM cell has a fixed size of 53 bytes
## <strong>Source Routing</strong>

> [!expand]- Click here to expand...
> - source host must have all information about network topology that is required to forward a packet across to destination
> - ways to implement source routing:
> 	- host would be to assign a number to each output of each switch and to place that number in the header of the packet. The switching function is then very simple: For each packet that arrives on an input, the switch would read the port number in the header and transmit the packet on that output
> - types of source routing:
> 	- <strong>strict source routing</strong> - every node on the path is included in the route
> 	- <strong>loose source routing</strong> - only a subset of nodes to be traversed is included in the route
>
> ![[Packet Switching - Datagram, Virtual Circuit, Source Routing/4.png]]
