---
title: "Border Gateway Protocol (BGP)"
created: 2019-03-17T00:53:40.147-05:00
modified: 2019-12-03T22:49:04.764-06:00
parent: "[[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)]]"
children:
  - "[[BGP - Packet Format]]"
  - "[[BGP - Secure Variants]]"
  - "[[Border Router - BGP Speaker]]"
  - "[[External BGP (eBGP)]]"
  - "[[Internal BGP (iBGP)]]"
---
<strong>Border Gateway Protocol</strong> (<strong>BGP</strong>) is a standardized [[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)|exterior gateway protocol]] designed to exchange routing and reachability information among [[Autonomous System (AS) - Domain|autonomous systems]] (AS) on the Internet
- BGP runs over [[Transmission Control Protocol (TCP)|TCP]]
- BGP makes no assumptions how [[Autonomous System (AS) - Domain|autonomous systems]] (AS) are interconnected
- BGP routes to networks not individual hosts
- BGP advertises complete paths as a list of autonomous systems (AS) to reach a particular network (<em>unlike the 2 main classes of [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|interior gateway protocols]] (e.g. [[Distant Vector Protocols|distance-vector]] & [[Link-State Protocols|link-state]])</em>). The complete path prevents looping. for this reason BGP is sometimes called a <strong>path-vector protocol</strong>

### <strong>BGP Variants</strong>
- <strong>[[External BGP (eBGP)]] </strong>- is used between multiple [[Autonomous System (AS) - Domain|autonomous systems]]
- <strong>[[Internal BGP (iBGP)]] </strong>- is used within a single [[Autonomous System (AS) - Domain|autonomous system]]. more in [[Integrating EGP & IGP]]

### BGP Variants Secure
- [[BGP - Secure Variants]]

### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
