---
title: "Ethernet - Frame Format"
created: 2019-11-09T11:51:33.189-06:00
modified: 2019-11-09T12:05:46.763-06:00
parent: "[[802.3 - Ethernet]]"
children: []
---
### <strong>Frame Format</strong>
- <strong>64-bit/8-byte preamble</strong> - allows receiver to synchronize with the signal
- <strong>48-bit/6-byte destination [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC address]]</strong>
- <strong>48-bit/6-byte source MAC address</strong>
- <strong>16-bit/2-byte type</strong> - identifies to which of the many higher-level protocols this frame should be delivered to
- <strong>N-bit data body</strong> - between 46 to 1500 bytes of data
- <strong>32-bit/4-byte CRC</strong> - [[Error Detection - Cyclic Redundancy Check (CRC)|Cyclic Redundancy Check (CRC)]] for error detection
> [!list-indent-undo]
> > [!indent]
> > ![[Ethernet - Frame Format/1.png]]

- like [HDLC protocol](http://doc.marcuschiu.com/log-page/5c6e0632154cee28cd8f407f), Ethernet is a [bit-oriented framing](http://doc.marcuschiu.com/log-page/5c6e0632154cee28cd8f407f) protocol
- frame size (including preamble) must be between 72 to 1,526 bytes
- <strong>network adaptor's perspective</strong>: sender attaches the <em>preamble</em> and <em>CRC</em>, receiver removes them
- <strong>host's perspective</strong>: frame has a 14-byte header (two 6-byte address and a 2-byte type field) and a N-bit body
