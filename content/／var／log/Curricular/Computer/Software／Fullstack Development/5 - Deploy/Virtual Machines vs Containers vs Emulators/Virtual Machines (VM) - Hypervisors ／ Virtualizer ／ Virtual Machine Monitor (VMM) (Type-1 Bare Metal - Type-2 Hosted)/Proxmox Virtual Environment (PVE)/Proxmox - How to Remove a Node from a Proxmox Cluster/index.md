---
title: "Proxmox - How to Remove a Node from a Proxmox Cluster"
created: 2025-12-05T18:56:34.504-06:00
modified: 2025-12-05T19:15:29.657-06:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
First, stop the corosync and pve-cluster services on the node:
```
systemctl stop pve-cluster
systemctl stop corosync
```

Start the cluster file system again in local mode:
```
pmxcfs -l
```

Delete the corosync configuration files:
```
rm /etc/pve/corosync.conf
rm -r /etc/corosync/*
```

You can now start the file system again as a normal service:
```
killall pmxcfs
systemctl start pve-cluster
```

The node is now separated from the cluster. You can delete it from any remaining node of the cluster with:
```
pvecm delnode $NODE_NAME_HERE
```

If the command fails due to loss of quorum in the remaining node, you can set the expected votes to 1 as a workaround:
```
pvecm expected 1
```

And then repeat the <code><font style="color: rgb(122,134,154);">pvecm delnode</font></code> command.

Now switch back to the separated node and delete all the remaining cluster files on it. This ensures that the node can be added to another cluster again without problems:
```
rm /var/lib/corosync/*
```

As the configuration files from the other nodes are still in the cluster file system, you may want to clean those up too. After making absolutely sure that you have the correct node name, you can simply remove the entire directory recursively from <code><font style="color: rgb(122,134,154);">/etc/pve/nodes/NODENAME</font></code>.
```
rm -rf /etc/pve/nodes/{ALL_NODE_NAMES_NOT_SEPARATED_NODE_NAME}
```

Caution: the node’s SSH keys will remain in the authorized\_key file. This means that the nodes can still connect to each other with public key authentication. You should fix this by removing the respective keys from the <code><font style="color: rgb(122,134,154);">/etc/pve/priv/authorized\_keys</font></code> file.
