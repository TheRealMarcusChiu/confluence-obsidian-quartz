---
title: "WebRTC - Implementation 1 (Socket.IO as Signaling Server)"
created: 2020-06-27T02:57:21.745-05:00
modified: 2021-08-12T11:54:21.550-05:00
parent: "[[Web Real-Time Communication (WebRTC)]]"
children: []
---
Implementation of [[Web Real-Time Communication (WebRTC)|WebRTC]] using [[Socket.IO]] as it signaling server
- [https://github.com/TheRealMarcusChiu/meet-marcuschiu-com](https://github.com/TheRealMarcusChiu/meet-marcuschiu-com)

### Example (Work in Progress)
![[WebRTC - Implementation 1 (Socket.IO as Signaling Server)/meet-marcuschiu-com.png|500]]
### WebRTC - Flow
```
- send 'create or join'
  - created-room
    - becomes INITIATOR
  - joined-room
    - CHANNEL-READY
    - server sends everyone in room 'someone-joined' and sets their CHANNEL-READY
  - room-full

- getMediaDevices
  - set LOCAL-STREAM
  - send-message 'got user media'
    - everyone else in room - maybeStart()
  - if INITIATOR maybeStart()

- maybeStart() // not started, LOCAL-STREAM, CHANNEL-READY
  - pc = new RTCPeerConnection
  - pc attach own LOCAL-STREAM
  - for each ice-candidate:
    - send-message to everyone in room:
      { type: 'candidate', label: ..., id: ..., candidate: ... }
      when received, those people do the following:
      - pc.addIceCandidate
  - if (INITIATOR)
    - create SDP-OFFER
    - pc.setLocalDescription(SDP-OFFER)
    - send-message SDP-OFFER to FOLLOWER:
    - upon receiving SDP-OFFER, FOLLOWER does the following:
      - pc.setRemoteDescription(new RTCSessionDescription(...))
      - create SDP-ANSWER
      - pc.setLocalDescription(SDP-ANSWER)
      - send-message SDP-ANSWER to INITIATOR
      - upon receiving SDP-ANSWER, INITIATOR does the following:
        - pc.setRemoteDescription(new RTCSessionDescription(...))

- pc.addstream(event)
  - remoteStream = event.stream
  - remoteVideo.srcObject = event.stream
```
