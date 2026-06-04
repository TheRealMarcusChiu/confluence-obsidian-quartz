---
title: "Kubernetes - Storage - AccessModes (ReadOnlyMany (ROX) - ReadWriteMany (RWX) - ReadWriteOnce (RWO) - ReadWriteOncePod (RWOP))"
created: 2025-01-12T19:39:16.954-06:00
modified: 2025-01-12T19:46:42.134-06:00
parent: "[[Kubernetes - Storage]]"
children: []
---
In Kubernetes you provision storage either statically(using a storage class) or dynamically (Persistent Volume). Once the storage is available to bound and claimed, you need to configure it in what way your Pods or Nodes are connecting to the storage (a persistent volume). That could be configured in below four modes.
# ReadOnlyMany (ROX)

In this mode <strong>multiple pods running on different Nodes</strong> could connect to the storage and carry out <strong>read</strong> operation.
# ReadWriteMany (RWX)

In this mode <strong>multiple pods running on different Nodes</strong> could connect to the storage and carry out <strong>read and write</strong> operation.
# ReadWriteOnce (RWO)

In this mode <strong>multiple pods running in only one Node</strong> could connect to the storage and carry out <strong>read and write</strong> operation.
# ReadWriteOncePod (RWOP)

In this mode the volume can be mounted as <strong>read-write by a single Pod</strong>. Use ReadWriteOncePod access mode if you want to ensure that only one pod across whole cluster can read that PVC or write to it. This is only supported for CSI volumes and Kubernetes version 1.22+.
