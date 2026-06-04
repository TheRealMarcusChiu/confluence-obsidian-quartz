---
title: "HA - Installation Proxmox"
created: 2026-01-07T14:14:29.020-06:00
modified: 2026-01-07T14:17:33.054-06:00
parent: "[[HA - Installation]]"
children: []
---
based on: [https://forum.proxmox.com/threads/guide-install-home-assistant-os-in-a-vm.143251/](https://forum.proxmox.com/threads/guide-install-home-assistant-os-in-a-vm.143251/)
# Obtain the VM image
- Navigate to the installation page on the HA website: [https://www.home-assistant.io/installation/alternative](https://www.home-assistant.io/installation/alternative)
- Simply right-click the KVM/Proxmox link and copy the address
- In your Proxmox console, use wget to download the file
	- wget \<ADDRESS\>
- Expand the compressed image
	- unxz \</path/to/file.qcow2.xz\>

# Create the VM

General:
- Select your VM name and ID
- Select 'start at boot'

OS:
- Select 'Do not use any media'

System:
- Change 'machine' to 'q35'
- Change BIOS to OVMF (UEFI)
- Select the EFI storage (typically local-lvm)
- Uncheck 'Pre-Enroll keys'

Disks:
- Delete the SCSI drive and any other disks

CPU:
- Set minimum 2 cores

Memory:
- Set minimum 4096 MB

Network:
- Leave default unless you have special requirements (static, VLAN, etc)

Confirm and finish. Do not start the VM yet.
# Add the image to the VM

In your node's console, use the following command to import the image from the host to the VM
```
qm importdisk <VM ID> </path/to/file.qcow2> <EFI location>
```

For example:
```
qm importdisk 205 /home/user/haos_ova-12.0.qcow2 local-lvm
```

Close the node's console and select your HA VM
- Go to the 'Hardware' tab
- Select the 'Unused Disk' and click the 'Edit' button
- Check the 'Discard' box if you're using an SSD then click 'Add'
- Select the 'Options' tab
- Select 'Boot Order' and hit 'Edit'
- Check the newly created drive (likely scsi0) and uncheck everything else

Finish Up
- Start the VM
- Check the shell of the VM. If it booted up correctly, you should be greeted with the link to access the Web UI.
- Navigate to \<VM IP\>:8123

Done. Everything should be up and running now.
