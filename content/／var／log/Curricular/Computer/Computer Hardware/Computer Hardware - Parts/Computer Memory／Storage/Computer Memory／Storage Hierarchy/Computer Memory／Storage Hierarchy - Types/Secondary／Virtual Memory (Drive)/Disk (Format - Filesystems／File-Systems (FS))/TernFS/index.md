---
title: "TernFS"
created: 2025-09-24T12:46:24.442-05:00
modified: 2025-09-24T12:54:31.543-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS))]]"
children: []
---
###### TernFS
````excerpt
- is designed for XTX’s machine learning workloads, which involve reading and writing very large, immutable files
- it targets:
	- scale: up to 10EB storage, 1 trillion files (\~10MB avg), 100B directories (\~10 files each), and 1M clients
	- usage patterns: infrequent directory creation/moves, files are written once and not modified
	- infrastructure: built on commodity hardware and Ethernet
- key requirements:
	- atomic file writes (no half-written files visible)
	- fault tolerance against node failures or power loss without corruption
	- strong protection against bitrot and data loss (except catastrophic datacenter failure)
	- continuous operation during maintenance/failures
	- configurable undelete for files/directories
	- option for multi-region replication to scale compute and avoid single-DC dependency
````
^excerpt

# Resources
- [https://github.com/XTXMarkets/ternfs](https://github.com/XTXMarkets/ternfs)
- [https://www.xtxmarkets.com/tech/2025-ternfs/](https://www.xtxmarkets.com/tech/2025-ternfs/)
