---
title: "Web Real-Time Communication (WebRTC)"
created: 2019-09-23T12:26:28.595-05:00
modified: 2023-11-16T17:00:46.152-06:00
parent: "[[7 - Application Layer]]"
children:
  - "[[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling]]"
  - "[[WebRTC - Implementation 0 (You as Signaling Server) - 1 Browser Tabs]]"
  - "[[WebRTC - Implementation 0 (You as Signaling Server) - 2 Browser Tabs (v1 - on same machine)]]"
  - "[[WebRTC - Implementation 0 (You as Signaling Server) - 2 Browser Tabs (v2 - on diff machines)]]"
  - "[[WebRTC - Implementation 1 (Socket.IO as Signaling Server)]]"
---
###### WebRTC ([www.webrtc.org](http://www.webrtc.org/))
````excerpt
- is a bundle of [[Computer Network／Networking Communication Protocols|network protocol]] standards (e.g. [[7 - Application Layer|application layer]]/[[API - Network-Level|network-level API]]/[[JavaScript - Web／Browser APIs|web service]]) that enables peer-to-peer/real-time communication without a mediator server
- faster than traditional peer-server-peer communication
- BUT still needs at least 2 servers to help initiate the peer-to-peer connection:
	- [[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling|STUN Server]] to provide client ice-candidates (i.e. their own public IP address port tuples)
	- [[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling|Signaling Server]] - for 2 clients to exchange Session Description Protocol (SDP), which contains ice-candidates and other metadata
	- [[ICE Framework - STUN Server - TURN Server - Session Description Protocol (SDP) - Signaling|TURN Server]] needed only when client is behind a [[Symmetric NAT]] and/or [[Firewalls - Bastion Host]]
- see also: [Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=330251)

in depth overview, but code not up to date: [https://hpbn.co/webrtc/](https://hpbn.co/webrtc/)
````
^excerpt

# WebRTC - Pros & Cons

```merge-table
{
  "rows": [
    [
      {
        "content": "Pros",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- p2p allows low latency for high bandwidth content\n- standardized API"
    ],
    [
      {
        "content": "Cons",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- maintaining STUN and TURN servers\n- p2p falls apart in case of multiple peers (discord case)"
    ]
  ]
}
```
# WebRTC - Tutorials

![](https://www.youtube.com/watch?v=FExZvpVvYxA&ab_channel=HusseinNasser)
# WebRTC - Subpages
- [codelabs tutorial](https://codelabs.developers.google.com/codelabs/webrtc-web/#0) - best
- [https://webrtc.org/getting-started/overview](https://webrtc.org/getting-started/overview)
- [https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [https://webrtc.github.io/samples/](https://webrtc.github.io/samples/) & [https://github.com/webrtc/samples](https://github.com/webrtc/samples)
- testing WebRTC: [https://test.webrtc.org/](https://test.webrtc.org/)
- [https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
