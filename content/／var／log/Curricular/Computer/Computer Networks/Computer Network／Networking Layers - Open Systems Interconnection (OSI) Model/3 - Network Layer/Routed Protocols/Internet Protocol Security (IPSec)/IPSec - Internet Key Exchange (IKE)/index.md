---
title: "IPSec - Internet Key Exchange (IKE)"
created: 2019-11-09T20:06:41.246-06:00
modified: 2023-11-16T14:50:46.101-06:00
parent: "[[Internet Protocol Security (IPSec)]]"
children: []
---
###### Internet Key Exchange (IKE)
````excerpt
- is a key management protocol standard used in conjunction with the [[Internet Protocol Security (IPSec)]] standard protocol
- it provides security for [[Virtual Private Network (VPN)|virtual private networks' (VPNs)]] negotiations and network access to random hosts
````
^excerpt

# IKE Protocol - History
- early contenders
	- Photuris - authenticated DH with cookies and identity-hiding
	- SKIP - authenticated DH with long-term exponents
- ISAKMP
	- A protocol specifying only payload formats and exchanges (i.e., an empty protocol)
	- Adopted by the IPsec working group
- Oakley - modified Photuris, can work with ISAKMP
- IKE - a particular Oakley-ISAKMP combination

# IKE Protocol - Overview
###### Phase 1
- does authenticated [[Diffie-Hellman (DH) Key Exchange|Diffie-Hellman]], establishes session key and “ISAKMP SA”
- 2 possible modes: main and aggressive
- 4 possible authentication types
- 2 keys are derived from the session key:
	- SKEYID\_e – to encrypt Phase 2 messages
	- SKEYID\_a – to authenticate Phase 2 messages

###### Phase 2
- IPsec SA and session key established; messages encrypted and authenticated with Phase 1 keys
- additional DH exchange is optional (for perfect forward secrecy (PFS))

# IKE Protocol - Phase Details

> [!expand-ui]- Phase 1
> phase 1 has 2 possible modes to choose from:
> - main mode - 6 messages;  provides identity hiding
> - aggressive mode - 3 messages
>
> phase 1 has 4 authentication types to choose from:
> - [[Secure／Keyed Cryptographic Hash Function|Secure/Keyed Cryptographic Hash Function]]
> - [[Digital Signatures|digital signatures]]
> - [[Asymmetric／Two／Public-Private Key Function|public key encryption]]
> 	- original - all public key encryption
> 	- revised - public + secret key encryption
>
> ###### main mode
> ![[IPSec - Internet Key Exchange (IKE)/Screen Shot 2019-11-09 at 8.47.57 PM.png|400]]
> ###### aggressive mode
> ![[IPSec - Internet Key Exchange (IKE)/Screen Shot 2019-11-09 at 8.48.04 PM.png|400]]

> [!expand-ui]- Phase 2
> - establishes IPsec SA & session key
> - runs over the IKE SA established in Phase 1 (messages are encrypted/authenticated with Phase 1 keys)
> - key generation - based on Phase 1 key, SPI, nonces
> - [[Diffie-Hellman (DH) Key Exchange]] exchange - optional (for perfect forward secrecy (PFS))
> - IPsec Traffic Selector - established optionally, specifies what traffic is acceptable (e.g. what port numbers are allowed to use this SA)
>
> ![[IPSec - Internet Key Exchange (IKE)/ipsec-ike-phase-2.png|400]]
> - X - pair of cookies generated in Phase 1
> - Y - session identifier
> - CP(A) - crypto proposal (accepted)
> - Traffic: IPsec traffic selector (optional)
