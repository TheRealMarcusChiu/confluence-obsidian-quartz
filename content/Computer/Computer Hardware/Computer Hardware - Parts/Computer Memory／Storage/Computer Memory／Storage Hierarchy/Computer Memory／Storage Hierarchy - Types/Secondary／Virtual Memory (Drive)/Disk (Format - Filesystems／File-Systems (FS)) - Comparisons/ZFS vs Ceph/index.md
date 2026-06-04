---
title: "ZFS vs Ceph"
created: 2025-05-18T11:54:49.561-05:00
modified: 2025-05-18T12:13:52.666-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS)) - Comparisons]]"
children: []
---
Comparing:
- [[Zettabyte File System (ZFS)]]
- [[Ceph Storage Cluster - CephFS - Ceph File System]]

I've run both and If you have multiple machines available to you, ceph is indeed the better choice.

I used to run a 5 node [[PetaSAN]] cluster providing storage for a 3 node [[Proxmox Virtual Environment (PVE)|proxmox]] cluster. With redundant network switches it was basically a no-SPOF design. I've had whole ceph nodes go down and the clients didn't even notice a thing. ZFS can also do HA but only with special hardware. (Dual ported disk enclosures)

<strong>The biggest difference however is that ceph has data redundancy on block or object level where ZFS does redundancy with whole disks</strong>.
- Need more space on ceph; Just add more disks, it will rebalance itself. Need to retire old disks? Just pull them out and the cluster will rebalance itself. Same for adding and removing nodes.
- Expansion on ZFS, you need to add in whole RAID arrays as vdevs. And once added to the pool, you can never remove them again.
- On a single machine ZFS does offer more features and much better performance.
- ZFS ARC and L2ARC works allot better than caching on ceph.

Ceph not only offers that but you could migrate to entire new nodes by adding nodes, rebalancing the cluster and removing old nodes. Without a single second of downtime.

What's missing from ceph is a Windows RBD client like a iSCSI initiator. Proxmox can directly connect to a ceph cluster, everything else needs an intermediate node serving as a bridge. (Which petasan does make easy to set up but for best performance that means adding even more machines to the cluster)

You cannot directly run a file server (SMB, NFS) on ceph either. When I needed to provide file server functionality it made more sense to setup a VM for it than trying to use CephFS to approach the ceph cluster. Not to mention CephFS has not been battle tested as much as ZFS.

I've also tried running ceph on proxmox in a hyperconverged setup but that didn't work so well. (Performance issues) What you can do from the GUI is limited in proxmox. (No erasure coding for example) Proxmox is excellent as a client for a external ceph cluster, just don't try to skimp on hardware by having your nodes pull double duty as storage and hypervisor. But I guess the same holds true for trying to run VM's in TrueNAS for example. Just because it can do it, doesn't make it a good idea.

So yeah, mixed bag... For me Ceph is the better way to go. But the startup cost is huge. For ZFS all you need is a single server to get started. Ceph needs at least five nodes before it becomes useable in practice. And you need fast networking as well. So add another two costly switches to the list.

If all you need is a small NAS to provide some safe storage to your network, ZFS is still a better choice. It just sucks you can't retire old vdevs.
