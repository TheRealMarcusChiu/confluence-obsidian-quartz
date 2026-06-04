---
title: "Ports - Sockets - An Application Demultiplexer"
created: 2019-04-02T22:35:59.054-05:00
modified: 2019-12-17T17:31:21.006-06:00
parent: "[[Computer Network／Networking Terminology]]"
children: []
---
### Ports
- ports extends the host-to-host communication service of the underlying network layer into a process-to-process communication service on the transport layer
- ports are identified by a 16-bit integer (\~64K possible ports)
- a process on a host is identified by a ⟨port, host⟩ pair
- ways a client can figure out which port on server connect to:
	- <strong>well-known ports</strong> - (e.g. HTTP=80, SMTP=25, etc)
	- <strong>port-mapper</strong> - servers runs port-mapper at a <em>well-know port</em> then responds to clients which port they should talk to based on client's request

### Sockets
- sockets is tuple: [[IPv4 - Address|IP Address]]/Port Number
- e.g. 192.168.86.1/8080

socket types:
- UNIX Socket
- TCP Socket
