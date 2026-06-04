---
title: "ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling"
created: 2019-09-23T12:48:40.099-05:00
modified: 2021-08-12T11:24:06.295-05:00
parent: "[[Web Real-Time Communication (WebRTC)]]"
children: []
---
# Signaling

<strong>Signaling</strong> is the process of sending <strong>Session Description Protocol (SDP)</strong> between two clients in order for them to establish a [[Web Real-Time Communication (WebRTC)|WebRTC]] peer-to-peer connection

For metadata signaling, WebRTC apps use an intermediary server, but for actual media and data streaming once a session is established, RTCPeerConnection attempts to connect clients directly: peer-to-peer.
# Session Description Protocol (SDP)

the SDP contains the following information:
- ice-candidates - network data, such as a host's IP address and port as seen by the outside world
- security metadata
- media metadata such as codecs and codec settings, bandwidth and media types
- etc

# Using ICE Framework to Cope with NATs and Firewalls

In a simpler world, every WebRTC endpoint would have a unique address that it could exchange with other clients in order to communicate directly.
###### A World without NATs and Firewalls
![[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling/1.png|401]]

In reality most clients live behind [[Network Address Translation (NAT)|NATs]] and firewalls.
###### The Real World
![[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling/nat.png|401]]

WebRTC apps can use the ICE Framework to overcome the complexities of real-world networking.

ICE Framework utilizes the following servers:
- <strong>STUN Server</strong> - provides ice-candidates back to client (inexpensive to maintain)
- <strong>TURN Server</strong> - provides a relay between 2 clients, but only used when direct peer-to-peer connection is impossible (expensive to maintain)
	- are usually also a STUN Server

ICE tries to find the best path to connect clients. It tries all possibilities in parallel and chooses the most efficient option that works:
- ICE first tries to make a connection using the host address obtained from a device's operating system and network card
- if that fails, (which it will for devices behind NATs) ICE obtains an external address using a STUN Server
- if that fails, traffic is routed via a TURN Server

URLs for STUN and/or TURN servers are (optionally) specified by a WebRTC app in the <code><font style="color: rgb(128,128,128);">iceServers</font></code> configuration object that is the first argument to the <code><font style="color: rgb(128,128,128);">RTCPeerConnection</font></code> constructor. For [appr.tc](http://appr.tc/) that value looks like this:
```
{																																																																												
  'iceServers': [
    {
      'urls': 'stun:stun.l.google.com:19302'
    },
    {
      'urls': 'turn:192.158.29.39:3478?transport=udp',
      'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      'username': '28224511:1379330808'
    },
    {
      'urls': 'turn:192.158.29.39:3478?transport=tcp',
      'credential': 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      'username': '28224511:1379330808'
    }
  ]
}
```

Once <code><font style="color: rgb(128,128,128);">RTCPeerConnection</font></code> has that information, the ICE magic happens automatically: <code><font style="color: rgb(128,128,128);">RTCPeerConnection</font></code> uses the ICE framework to work out the best path between clients, working with STUN and TURN servers as necessary.
### STUN (Session Traversal Utilities for NAT)

> [!expand]- Click here to expand...
> [[Network Address Translation (NAT)|NAT]]s provide a device with a [[IPv4 - Reserved／Private IP Address|private IP address]] for use within a private local network, but this address can't be used externally. Without a public address, there's no way for WebRTC clients to communicate. To get around this problem WebRTC uses [STUN](https://en.wikipedia.org/wiki/STUN) to traverse through the NAT device
>
> STUN servers live on the public internet and have one simple task: check the IP:port address of an incoming request of the NAT and send that address back as a response. In other words, the client applications use a STUN server to discover its IP:port from a public perspective. This process enables a WebRTC client to get a publicly accessible address for itself, and then pass that on to another client via a signaling mechanism, in order to set up a direct link.
>
> STUN servers don't have to do much or remember much, so relatively low-spec STUN servers can handle a large number of requests.
>
> Most WebRTC calls successfully make a connection using STUN: 86%, according to [webrtcstats.com](http://webrtcstats.com/), though this can be less for calls between clients behind firewalls and complex NAT configurations.
> ###### Using STUN Servers to get public IP:port Addresses
> ![[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling/stun.png|401]]
>
> Simply put STUN allows your console/PC or internal device to learn what its public NATed IP address and port is. Once this is achieved your device can now send out the correct details to other devices that want to connect to you. But it doesn’t work with [[Symmetric NAT|Symmetric NATs]] (can learn its public IP address but it is impossible to learn its public port). If that is the case we use TURN Servers.
>
> STUN is quite simple in how it works. You connect to a server running the STUN protocol (Xbox live servers) and it reads the source IP address and source port from the incoming packets. These of course will be the NATed ones (which are the ones we need). STUN then sends this information back to the client and its job is now done. Your console now knows it’s NATed IP and port and will send this onto other devices. If you remember, with the exception of a symmetric NAT all other types of NAT don’t change the source port. What this means is that when my console creates a NAT mapping it will use it for ALL connections of this type; it uses the same <strong>ONE</strong> mapping when sending and receiving packets to several devices on the Internet therefore it uses the same public IP address and port. In the case of a symmetric NAT however every single connection has a different mapping with a different (randomly generated) port; the connection to the STUN server will have it’s own unique mapping as will every other console…which means different ports for each mapping. In this case the port that the STUN detected is now useless as this mapping is exclusive to the STUN server. Whatever port is used in the mapping to other devices is unknown and there is no way for STUN to detect it. Since your console can’t learn the public NATed port for each mapping to each console it can’t pass this information on therefore nothing can connect to your hosted game. This is the reason Symmetric NATs cause so many gaming issues.
>
> Thus, if STUN doesn't work we do TURN
### TURN (Traversal Using Relays around NAT)

> [!expand]- Click here to expand...
> <code><font style="color: rgb(128,128,128);">RTCPeerConnection</font></code> tries to set up direct communication between clients:
> - first over UDP
> - if that fails, RTCPeerConnection resorts to TCP
> - if that fails, TURN Servers can be used as a fallback, relaying data between endpoints
>
> <strong>Just to reiterate: TURN is used to relay audio/video/data streaming between clients, not signaling data!</strong>
>
> TURN servers have public addresses, so they can be contacted by clients even if the clients are behind firewalls or proxies. TURN servers have a conceptually simple task — to relay a stream — but, unlike STUN servers, they inherently consume a lot of bandwidth. In other words, TURN servers need to be beefier
> ###### The Full Monty: Signaling & ICE (STUN & TURN)
> ![[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling/turn.png|401]]
>
> This diagram shows TURN in action: pure STUN didn't succeed, so each client resorts to using a TURN Server
# WebRTC Flow
1. WebRTC can be thought of as just a "protocol" for establishing "P2P" connections
2. The Session Description Protocol (SDP) is a structured format that defines the media capabilities of a peer: codecs, video availability, audio availability, resolution, etc.
3. An Interactive Connectivity Establishment (ICE) candidate defines the available "routes" a data packet can take to get from Peer A to Peer B. For example, an ICE candidate may describe a simple, direct P2P connection (just like in the "old days", as you mentioned in the video). However, due to NAT, there may be some other ICE candidates that may help work around this issue, such as an intermediary TURN server
4. In the initial handshake of every WebRTC connection, Peer A creates an "offer" to Peer B. The WebRTC standard itself does not define how this "offer" is brought to Peer B, but people usually opt to using WebSockets, at least for this "signaling" portion of the handshake
5. Once Peer B receives the "offer" (by any means necessary, even by carrier pigeon), Peer B responds with its own SDP (the "answer") to inform Peer A about Peer B's media capabilities
6. Peer A receives Peer B's "answer". By then, both peers know each other's media capabilities. This is the end of the initial "three-way" handshake, analogous to that of TCP (\`SYN\`, \`SYN-ACK\`, and \`ACK\`)
7. However, the connection has not been established yet. Only the optimal media capabilities have been agreed upon. During this time, each peer receives an ICE candidate from their browser. As soon as they receive a candidate, they should immediately forward it to the other side. This is the part when both peers just to throw ICE candidates back and forth (via any "signaling" method). Rinse and repeat until they both agree on a viable ICE candidate
8. Once both have agreed on an ICE candidate, a connection can finally be established. Data can be streamed back and forth from Peer A to Peer B via the route defined by the agreed-upon ICE candidate. By this time, there is no longer a need for the intermediary "signaling" server since the P2P connection has already been established

# Signaling SDP
- to connect 2 clients A and B
- A will create an offer (SDP) and set it as local description
- B will get the offer and set it as remote description
- B creates an answer and sets it as its local description and signal the answer (SDP) to A
- A sets the answer as its remote description
- connection established, exchange data channel
