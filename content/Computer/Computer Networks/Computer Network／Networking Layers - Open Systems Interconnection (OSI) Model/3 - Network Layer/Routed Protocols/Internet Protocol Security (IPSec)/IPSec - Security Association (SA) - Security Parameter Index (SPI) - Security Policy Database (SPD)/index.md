---
title: "IPSec - Security Association (SA) - Security Parameter Index (SPI) - Security Policy Database (SPD)"
created: 2019-11-09T20:50:45.415-06:00
modified: 2019-12-03T19:01:41.371-06:00
parent: "[[Internet Protocol Security (IPSec)]]"
children: []
---
### Security Association (SA)
- SA is a cryptographically protected connection (i.e. IPSec session)
- SA specifies the encryption/authentication algorithms, keys, parameters, etc
- SA identified by:
	- Security Parameter Index (SPI)
	- Destination [[IPv4 - Address|IP Address]]
	- Protocol Identifier ([[IPSec - Authentication Header (AH)|AH]] or [[IPSec - Encapsulating Security Payload (ESP)|ESP]])
- security policy database - specifies what kind of protection should be applied to packets (acc. to source-destination address, port numbers, user ID, data sensitivity level, etc.)
- each SA entry contains:
- a database of SA entries are stored at the host/router
- a single SA defines the IPSec communication between a 2 hosts/routers, therefore 2 copies are stored (one for each host/router)
