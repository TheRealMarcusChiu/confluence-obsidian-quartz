---
title: "Proxmox - Firewall"
created: 2026-01-29T00:03:19.728-06:00
modified: 2026-01-29T00:04:54.684-06:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
# LXC Containers

To apply firewall rules at the LXC container level, the Proxmox firewall must be enabled at every layer of the stack. Rules are evaluated top-down, so each scope must be active.
- <strong>Data Center</strong>: Firewall must be enabled. Ensure inbound traffic is ACCEPTed here first, or you risk locking yourself out.
- <strong>Node</strong>: Enable the firewall on the Proxmox node hosting the container.
- <strong>LXC Container</strong>: Enable the firewall on the container itself.
- <strong>LXC Network Interface (net0)</strong>: Enable the firewall on the container’s network interface.

Firewall rules on an LXC container will only take effect when <strong>all four layers</strong> are enabled.
