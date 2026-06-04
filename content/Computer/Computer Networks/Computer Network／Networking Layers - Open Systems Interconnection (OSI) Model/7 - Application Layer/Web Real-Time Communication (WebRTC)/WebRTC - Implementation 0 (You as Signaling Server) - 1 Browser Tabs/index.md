---
title: "WebRTC - Implementation 0 (You as Signaling Server) - 1 Browser Tabs"
created: 2022-12-19T20:30:24.139-06:00
modified: 2022-12-19T20:36:12.057-06:00
parent: "[[Web Real-Time Communication (WebRTC)]]"
children: []
---
Open 1 browser tab and paste the following into console
```js
const localConnection = new RTCPeerConnection();
var remoteConnection = new RTCPeerConnection();

localConnection.onicecandidate = (e) => {
  console.log(e.candidate);
  remoteConnection.addIceCandidate(e.candidate);
};

remoteConnection.onicecandidate = (e) => {
  console.log(e.candidate);
  localConnection.addIceCandidate(e.candidate);
}

var localChannel = localConnection.createDataChannel('cfChannel', null);

localChannel.onmessage = (e) => {
  console.log('++ ' + e.data);
};

remoteConnection.ondatachannel = (e) => {
  console.log(e);
  e.channel.onmessage = ev => {
  console.log('>> ' + ev.data);
  e.channel.send(ev.data.toLowerCase());
}
};

localConnection.createOffer().then((desc) => {
console.log(desc);
  localConnection.setLocalDescription(desc);
  remoteConnection.setRemoteDescription(desc);
  remoteConnection.createAnswer().then(remoteDesc => {
    console.log(remoteDesc);
    remoteConnection.setLocalDescription(remoteDesc);
    localConnection.setRemoteDescription(remoteDesc);
  });
});

console.log('---');
setTimeout(() => localChannel.send("BLAH BLEEP BLOOP"), 1000);
setTimeout(() => localChannel.send("look at this message sent"), 2000);
```
