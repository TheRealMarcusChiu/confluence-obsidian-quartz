---
title: "WebRTC - Implementation 0 (You as Signaling Server) - 2 Browser Tabs (v2 - on diff machines)"
created: 2022-12-19T21:46:30.830-06:00
modified: 2022-12-19T22:15:10.731-06:00
parent: "[[Web Real-Time Communication (WebRTC)]]"
children: []
---
open 2 chrome browser tabs with console open on developer-tools
# Browser Tab 1
```
const iceConfiguration = { };
iceConfiguration.iceServers = [];
iceConfiguration.iceServers.push({
	urls: 'stun:stun.l.google.com:19302'
});

const localConnection = new RTCPeerConnection(iceConfiguration);

localConnection.onicecandidate = e => {
    console.log("NEW ice candidnat!! on localconnection reprinting SDP");
    console.log(JSON.stringify(localConnection.localDescription));
}

localConnection.channel = localConnection.createDataChannel("custom-data-channel");
localConnection.channel.onopen    = e => console.log("channel opened");
localConnection.channel.onmessage = e => console.log("channel received message = " + e.data);
localConnection.channel.onclose   = e => console.log("channel closed");

localConnection.createOffer().then(offer => localConnection.setLocalDescription(offer));
```
# Browser Tab 2
```
const remoteConnection = new RTCPeerConnection();

remoteConnection.onicecandidate = e => {
    console.log("NEW ice candidnat!! on localconnection reprinting SDP");
    console.log(JSON.stringify(remoteConnection.localDescription));
}

remoteConnection.ondatachannel = e => {
	remoteConnection.channel = e.channel;
	remoteConnection.channel.onopen    = e => console.log("channel opened");
	remoteConnection.channel.onmessage = e => console.log("channel received message = " + e.data);
	remoteConnection.channel.onclose   = e => console.log("channel closed");
}

// set offer const offer = with browser-tab-1's most recent localDescription
const offer = {"type":"offer","sdp":"v=0\r\no=-... REPLACE ME!!!!!!!!!!!!!!!
remoteConnection.setRemoteDescription(offer).then(a => console.log("remote description set"));

// create answer
await remoteConnection.createAnswer()
    .then(answer => remoteConnection.setLocalDescription(answer))
    .then(answer => console.log(JSON.stringify(remoteConnection.localDescription)));

// send the answer back the client tab 1
```
# Browser Tab 1 (Open Connection)
```
// set answer const answer = with browser-tab-2's most recent localDescription
const answer = {"type":"offer","sdp":"v=0\r\no=-... REPLACE ME!!!!!!!!!!!!!!!
// this also opens the channel connection
localConnection.setRemoteDescription(answer).then(a => console.log("remote description set"));
```
# Browser Tab 1 (Send Data To 2)
```
localConnection.channel.send("test");
```
# Browser Tab 2 (Send Data To 1)
```
remoteConnection.channel.send("test");
```
# Resources

[https://github.com/hnasr/javascript_playground/tree/master/webrtc](https://github.com/hnasr/javascript_playground/tree/master/webrtc)

![](https://www.youtube.com/watch?v=FExZvpVvYxA&t=2610s)
