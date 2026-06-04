---
title: "NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)"
created: 2022-09-23T00:54:45.463-05:00
modified: 2024-08-07T11:57:42.504-05:00
parent: "[[Memory Interfaces (AHCI - NVMe)]]"
children:
  - "[[NVMe Over Fabrics (NVMe-oF)]]"
---
###### NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)
````excerpt
- introduced in 2011
- is a communication protocol specifically developed for [[Solid State Drives (SSD)|SSDs]]
- was designed to address the shortcomings of the [[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]] and [[Serial Attached SCSI (SAS)|SAS]] interfaces
- defines how host software communicates with non-volatile memory across a [[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe]], [[Remote Direct Memory Access (RDMA)|RDMA]], [[Transmission Control Protocol (TCP)|TCP]] and more
- is an industry standard for SSDs in many form factors (U.2, [[M.2 - Next Generation Form Factor (NGFF)|M.2]], AIC, EDSFF)
- bypasses all the [[Advance Host Controller Interface (AHCI)|AHCI]]/[[Small Computer Systems Interface (SCSI)|SCSI]] layers
````
^excerpt

# NVMe - Specification Structure

```merge-table
{
  "rows": [
    [
      "![[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)/nvm-express-specification.png|500]]"
    ]
  ]
}
```

NVMe library of specifications is divided into eight different specifications, including the:
- <strong>NVMe Management Interface Specification - (NVMe-MI) Specification</strong> - defines an optional management interface for all NVMe subsystems
- <strong>NVMe I/O Command Set Specifications</strong> - define data structures, features, log pages, commands, and status values that extend the NVMe Base Specification
	- NVM Command Set specification
	- ZNS Command Set specification
	- KV Command Set specification
- <strong>NVMe Base Specification</strong> -
- <strong>NVMe Transport Specifications</strong> - defines the binding of the NVMe protocol including controller properties to a specific transport
	- PCIe Transport specification
	- RDMA Transport specification
	- TCP Transport specification
- <strong>NVMe Boot Specification (NVMe Boot)</strong> - defines constructs and guidelines for booting from NVMe interfaces

# NVMe - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# NVMe - Specification Versions
- [https://nvmexpress.org/developers/nvme-specification/](https://nvmexpress.org/developers/nvme-specification/)
- [https://en.wikipedia.org/wiki/NVM_Express](https://en.wikipedia.org/wiki/NVM_Express)
