---
title: "Internet Protocol Security (IPSec)"
created: 2019-03-16T23:08:16.580-05:00
modified: 2023-11-16T15:27:30.395-06:00
parent: "[[Routed Protocols]]"
children:
  - "[[IPSec - Authentication Header (AH)]]"
  - "[[IPSec - Encapsulating Security Payload (ESP)]]"
  - "[[IPSec - Internet Key Exchange (IKE)]]"
  - "[[IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)]]"
---
###### Internet Protocol Security (IPSec)
````excerpt
- is a [[3 - Network Layer|network layer]], [[Routed Protocols|routed protocol]] is implemented between [[Internet Protocol (IP)|IP]] and [[Transmission Control Protocol (TCP)|TCP]]
- this suite that authenticates and encrypts the packets of data sent over a network
- includes protocols for establishing mutual authentication between agents at the beginning of the session and negotiation of cryptographic keys to use during the session
````
^excerpt

IPsec can protect data flows between:
- a pair of hosts (host-to-host)
- a pair of security gateways (network-to-network)
- a security gateway and a host (network-to-host)

IPSec is often used in tandem with [[Layer 2 Tunneling Protocol (L2TP)]] for [[Virtual Private Network (VPN)]]
# IPSec Components

first, establish [[Authentication Protocols - Mutual／2-Way|mutual authentication]] and generate a session-key to create a <em>[[IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)|Security Association (SA)]]</em>:
- <strong>[[IPSec - Internet Key Exchange (IKE)|Internet Key Exchange (IKE)]]</strong> - provides <em>mutual authentication</em> between 2 parties and establishes a session-key

second, use the created <em>[[IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)|Security Association (SA)]]</em> to carry out cryptographically protected communication, we do this by choosing 1 of the following IP header extensions:
- <strong>[[IPSec - Authentication Header (AH)|Authentication Header (AH)]]</strong> - provides integrity of [[IPv4 - Packet Header Format|IP packets]] only
- <strong>[[IPSec - Encapsulating Security Payload (ESP)|Encapsulating Security Payload (ESP)]]</strong> - provides both [[Encryption|encryption]] and integrity of IP packets

# IPSec Protocol Modes
- <strong>transport mode </strong>- <strong>host</strong> applies IPSec to the [[4 - Transport Layer|transport layer]] packet
- <strong>tunnel mode </strong>- <strong>gateway</strong> applies IPSec to the IP packet of the host from the network (IP-in-IP tunneling)

# IPSec Packet Processing
###### outbound packets
- check in [[IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)|security policy database]]
- use packet header info to match a suitable <em>[[IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)|Security Association (SA)]]</em> in the SA db
- retrieve [[IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)|SPI]] and SA parameters from the SA database
- apply IPsec protection to the packet and pass it to IP

###### inbound packets
- use SPI in the IPSec header in the packet, find the corresponding SA in SA db for this packet
- use SA parameters to perform IPsec auth/decryption on the packet
- pass the packet to the upper-layer protocol
