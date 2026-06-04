---
title: "Proxmox - Shutdown & Restart"
created: 2025-08-09T15:41:01.761-05:00
modified: 2025-08-09T15:45:46.423-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
# TODO
- wakeonlan not working

# Shutdown

Shutdown Ceph
```bash
ceph osd set noout
ceph osd set norecover
ceph osd set norebalance
ceph osd set nobackfill
ceph osd set nodown
ceph osd set pause
```

Shutdown VMs and LXCs (MAY NOT NEED TO SHUTDOWN)
```bash
#!/bin/bash

##############################
# Initiate Graceful Shutdown #
##############################

echo "Shutting down all LXC containers..."
for i in $(pct list | awk '{print $1}' | grep -E '^[0-9]+$'); do
  echo "Shutting down LXC container $i..."
  pct shutdown $i
done

echo "Shutting down all VMs..."
for i in $(qm list | awk '{print $1}' | grep -E '^[0-9]+$'); do
  echo "Shutting down VM $i..."
  qm shutdown $i
done

##################
# Wait 5 Minutes #
##################

sleep 5m

##############
# Force Stop #
##############

for i in $(pct list | awk '{print $1}' | grep -E '^[0-9]+$'); do
   if pct status $i | grep -q "running"; then
     echo "LXC container $i did not shut down gracefully, forcing stop..."
     pct stop $i
   fi
done

for i in $(qm list | awk '{print $1}' | grep -E '^[0-9]+$'); do
   if qm status $i | grep -q "running"; then
     echo "VM $i did not shut down gracefully, forcing stop..."
     qm stop $i
   fi
done

echo "All VMs and LXC containers have been shutdown."
```
# Restart

Start Ceph
```bash
ceph osd unset pause
ceph osd unset nodown
ceph osd unset nobackfill
ceph osd unset norebalance
ceph osd unset norecover
ceph osd unset noout
```

Start all VMs and LXCs
```
TODO
```
