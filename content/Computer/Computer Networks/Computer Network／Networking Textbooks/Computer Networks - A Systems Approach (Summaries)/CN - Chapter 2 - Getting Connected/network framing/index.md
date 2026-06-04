---
title: "network framing"
created: 2019-03-17T00:12:48.059-05:00
modified: 2019-03-17T00:26:51.721-05:00
parent: "[[CN - Chapter 2 - Getting Connected]]"
children: []
---
### Framing - how portray sequence of bits into a complete message
- on <em>packet-switched</em> networks frames are exchanged between nodes via adapters
- adaptor needs to recognize a frame as a set of bits, and there are several protocols:
	- <strong>bit-oriented protocol</strong>
	- <strong>byte-oriented protocol</strong> - also called character-oriented protocol
	- <strong>clock-based protocol</strong>

### Bit-Oriented Protocols (HDLC)

> [!expand]- Click here to expand...
> - views frame as collection of bits
> - types of bit-oriented protocols
> 	- SDLC/HDLC (Synchronous/High Level Data Link Control)
> - <strong>SDLC/HDLC (Synchronous/High Level Data Link Control)</strong>
> 	- <strong>sentinel bits</strong>
> 		- 01111110 - denotes start and end of frame
> 	- <strong>bit stuffing</strong>
> 		- anytime sender transmits 5 consecutive 1s, transmit a 0 afterwards
> 		- anytime receiver reads 5 consecutive 1s, check next bit. If 0 remove it and continue reading, otherwise end-of-frame marker is read
>
> ![[network framing/1.png|674x150]]
### Byte-Oriented Protocol

> [!expand]- Click here to expand...
> - views each frame as a set of bytes rather than bits
> - types of byte-oriented protocols
> 	- <strong>BISYNC (Binary Synchronous Communication)</strong>
> 	- <strong>PPP (Point-to-Point Protocol)</strong>
> 	- <strong>DDCMP (Digital Data Communication Message Protocol)</strong>
> - sentinel-based approach
> 	- uses special characters to indicate where frames start and end
> 	- character stuffing - escapes data that may be misinterpreted as <em>sentinel characters</em> so that data may not be misinterpreted as sentinel characters
> - <strong>BISYNC (Binary Synchronous Communication)</strong>
> 	- look at figure 2.7
> 	- uses <em>sentinel characters</em> and <em>character stuffing</em> (DLE (data-link-escape) character)
> 	- includes CRC (cyclic redundancy check) at end of frame which is used to detect errors
> - <strong>PPP (Point-to-Point Protocol)</strong>
> 	- commonly used to carry Internet Protocol packets
> 	- look at figure 2.8
> 	- uses <em>sentinel characters</em> and <em>character stuffing</em>
> - <strong>DDCMP (Digital Data Communication Message Protocol)</strong>
> 	- look at figure 2.9
> 	- COUNT field specifies how many bytes are contained in the frame’s body
>
> ![[network framing/2.png]]
### Clock-Based Framing

> [!expand]- Click here to expand...
> - dominant standard in long-distance optical networks
> - <strong>Synchronous Optical Network (SONET)</strong>
> 	- addresses both <em>framing problem</em> and <em>encoding problem</em>
> 	- full specifications is bigger than the book
> 	- go to page 121
