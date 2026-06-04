---
title: "Storage Area Network (SAN)"
created: 2020-01-02T02:40:27.922-06:00
modified: 2025-05-18T12:06:18.720-05:00
parent: "[[DAS - NAS - SAN]]"
children: []
---
###### Storage Area Network (SAN)
````excerpt
- is a dedicated storage network that provides block-level access to LUNs
	- a LUN, or logical unit number, is a virtual disk provided by the SAN
	- the system administrator has the same access and rights to the LUN as if it were a disk directly attached to it
	- the system administrator can partition and format the disk by any means he or she chooses
````
^excerpt

# SAN - Network Protocols

Networking protocols are commonly used in a SAN:
- [[Internet Small Computer Systems Interface (iSCSI)|iSCSI]] - is a newer technology that sends [[Small Computer Systems Interface (SCSI)|SCSI]] commands over a [[Transmission Control Protocol (TCP)|TCP]]/[[Internet Protocol (IP)|IP]] network. While this method may not be as fast as a Fibre Channel network, it does save money by using less expensive network hardware. iSCSI uses standard ethernet cables and switches to connect to storage devices and typically operates at speed of 1Gb/s, 10Gb/s, 100Gb/s
- [[Serial Attached SCSI (SAS)|SAS]] - a point-to-point serial protocol for transferring SCSI commands over SAS cables. SAS uses expanders with ports called SAS channels to connect up to 128 drives via [[Host Controller - Host Adapter - Host Bus Adapter (HBA)|HBA]]. Speed options include 3GB/s, 6GB/s, 12GB/s, and 22.5GB/s
- [[Fibre Channel (FC)|fibre channel]] - A fibre channel network is very fast and is not burdened by the other network traffic in a company's LAN. However, it's very expensive. Fibre channel cards cost around \$1000.00 USD each. They also require switches that support fibre channel. Fibre Channel networks are called fabrics because all the switches in a network can behave as one big switch. FC speeds typically range from 1 to 128GB/s
- [[NVMe Over Fabrics (NVMe-oF)|NVMe-oF]] - TODO

# SAN - Software
- [[PetaSAN]]
