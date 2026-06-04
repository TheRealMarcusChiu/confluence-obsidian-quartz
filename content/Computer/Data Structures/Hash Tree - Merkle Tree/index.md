---
title: "Hash Tree - Merkle Tree"
created: 2022-03-26T04:30:38.894-05:00
modified: 2026-01-02T20:19:27.774-06:00
parent: "[[Data Structures]]"
children: []
---
###### Hash Tree - Merkle tree
````excerpt
- is a tree in which:
	- every "leaf" is labeled with the cryptographic hash of a data block
	- every node that is not a leaf is labeled with the cryptographic hash of the labels of its child nodes
````
^excerpt

# Data Verification Mechanism

How two nodes compare whether their data blocks are in sync:
- Compare root hashes - exchange root hashes between replicas, if identical, then data is consistent
- Root mismatch detected - if roots differ, at least one data block is corrupted or inconsistent
- Identify corrupted block - recursively compare child hashes to pinpoint exact differing block
- Efficient repair - only transfer minimal block instead of entire dataset
