---
title: "Open Shortest Path First (OSPF)"
created: 2019-03-16T20:57:42.660-05:00
modified: 2023-11-16T17:41:45.618-06:00
parent: "[[Link-State Protocols]]"
children: []
---
###### Open Shortest Path First (OSPF)
````excerpt
- is an implementation of the [[Link-State Protocols]] with extra features:
	- authentication of routing messages - prevents malicious attacks
	- additional hierarchy - allows scalability
	- load balancing - allows multiple routes to the same place at the same cost
````
^excerpt

# OSPF Message
- there are 5 types of OSPF message
- which all share the same header format (see Figure 3.34)
- a single OSPF message may contain multiple <em>LSAs</em>

<em>![[Open Shortest Path First (OSPF)/1.png|518x250]]</em>
# Link-State Advertisement (LSA)
- is the basic building block of link-state messages in OSPF
- there are multiple types of LSAs
	- <strong>Type 1 LSAs</strong> - advertise the cost of links between routers
	- <strong>Type 2 LSAs</strong> - advertise networks to which the advertising router is connected
	- <strong>other types</strong> - used to support additional hierarchy

# Type 1 LSA

<em>![[Open Shortest Path First (OSPF)/2.png|449x250]]</em>
- <strong>LS Age</strong> -
- <strong>Link state ID</strong> and <strong>Advertising router</strong>
	- fields are identical in a <em>Type 1 LSA</em>
	- is a 32-bit identifier for the router that created this LSA (usually the lowest IP address of the router)
- <strong>LS sequence number</strong> - is used exactly as described above to detect old or duplicate LSAs
- <strong>Length</strong> - length in bytes of complete LSA
- TODO
