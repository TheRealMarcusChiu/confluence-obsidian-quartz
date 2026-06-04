---
title: "PXE Boot vs IPMI"
created: 2025-12-24T02:36:23.340-06:00
modified: 2025-12-24T03:01:54.013-06:00
parent: "[[Preboot eXecution Environment (PXE) Boot]]"
children: []
---
# [[Intelligent Platform Management Interface (IPMI)|IPMI]] (BMC virtual media)

IPMI gives you:
- Remote KVM (see BIOS/boot screen)
- Power control (on/off/reset)
- Virtual Media (mount an ISO over the network as if it were a local USB/DVD)

What this means in practice:
- You can install any OS by mounting an ISO via IPMI
- No PXE server, DHCP options, or TFTP needed
- Works even on a completely blank system
- Perfect for one-off installs or occasional reinstalls

# [[Preboot eXecution Environment (PXE) Boot|PXE]] Boot

PXE is useful when you want:
- Fully automated installs (no clicking through installers)
- Rapid re-provisioning of many machines
- Diskless or ephemeral nodes
- CI / bare-metal automation ([[Metal as a Service (MaaS)|MAAS]], Foreman, Cobbler, iPXE)

Trade-offs:
- Requires [[Dynamic Host Configuration Protocol (DHCP)|DHCP]], [[Trivial File Transfer Protocol (TFTP)|TFTP]]/[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]], boot images
- More setup and maintenance
- Overkill for a few machines unless you want automation
