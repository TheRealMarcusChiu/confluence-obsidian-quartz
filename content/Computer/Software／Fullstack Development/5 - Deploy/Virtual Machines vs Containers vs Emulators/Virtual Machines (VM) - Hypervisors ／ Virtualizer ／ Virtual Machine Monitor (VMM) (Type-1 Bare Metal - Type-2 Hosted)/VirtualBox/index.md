---
title: "VirtualBox"
created: 2019-03-15T02:09:19.241-05:00
modified: 2022-09-22T01:14:14.194-05:00
parent: "[[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)]]"
children:
  - "[[VirtualBox - Connecting USB NIC Device]]"
  - "[[VirtualBox - Exposing Guest Machine Ports to Host Machine]]"
---
###### VirtualBox
- is a [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|type-2 hypervisor]] for [[x86 x64 (x86-16, x86-32, x86-64)|x86 hardware]]

# General
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Setup Guides

> [!expand]- Kali Linux
> > [!expand]- Setup Version 1
> > [https://www.youtube.com/watch?v=vg9cNFPQFqM](https://www.youtube.com/watch?v=vg9cNFPQFqM)
> > 1. get kali iso from online
> > 2. Open VirtualBox and click on new
> > 3. Enter these into first popup:
> > 	- Name: anything you want
> > 	- Type: Linux
> > 	- Version: Debian (64-bit)
> > 4. Allot RAM
> > 	- 2048MB for 2G
> > 5. Create VirtualBox Hard-Drive and allocate 100G
> > 6. Attach ISO image
> >
> > START VIRTUAL MACHINE
> > 1. If boot from LIVE version the password is: toor
> > 2. Click on Install
> > 3. Choose Language and Country
> > 4. Choose Hostname and DomainName
> > 5. Partitioning Method: Guided - use entire disk
> > 6. Partitioning Scheme: All files in one partition
> > 7. Finish Partitioning Disks and YES
> >
> > INSTALL
> > 1. No network mirror
> > 2. Yes for Grub Loader
> > 3. Device for Boot Loader Installation: /dev/sa
> >
> > FINISH INSTALLATION
>
> > [!expand]- Setup Version 2
> > [https://www.youtube.com/watch?v=vg9cNFPQFqM](https://www.youtube.com/watch?v=vg9cNFPQFqM)
> >
> > <strong>1. optional /etc/NetworkManager/NetworkManager.conf</strong>
> >
> > change managed=false to managed=true
> >
> > <strong>2. /etc/apt/sources.list</strong>
> > <span style="white-space: pre-wrap"><code>  go to [https://docs.kali.org/general-use/kali-linux-sources-list-repositories](https://docs.kali.org/general-use/kali-linux-sources-list-repositories)</code><br><code>  copy the repository links and paste it into /etc/apt/sources.list</code></span>
> >
> > <strong>3. the update and upgrade</strong>
> > <span style="white-space: pre-wrap"><code>  apt-get update</code><br><code>  apt-get upgrade</code><br><code>  apt-get dist-upgrade</code></span>
>
> > [!expand]- Guest Edditions 2
> > [https://www.youtube.com/watch?v=vg9cNFPQFqM](https://www.youtube.com/watch?v=vg9cNFPQFqM)
> >
> > This is for Newer Kali Versions
> >
> > <strong>1. install virtual-box guest additions</strong>
> > <span style="white-space: pre-wrap"><code>  apt-get install -y virtualbox-guest-x11</code></span>
> >
> > <strong>7. reboot machine with reboot command</strong>
> > <span style="white-space: pre-wrap"><code>  reboot</code></span>
>
> > [!expand]- guest editions 1
> > [https://www.youtube.com/watch?v=vg9cNFPQFqM](https://www.youtube.com/watch?v=vg9cNFPQFqM)
> >
> > This is for Older Kali Versions
> >
> > <strong>1. /etc/apt/sources.list</strong>
> > <span style="white-space: pre-wrap"><code>  go to [https://docs.kali.org/general-use/kali-linux-sources-list-repositories](https://docs.kali.org/general-use/kali-linux-sources-list-repositories)</code><br><code>  copy the repository links and paste it into /etc/apt/sources.list</code></span>
> >
> > <strong>2. the update and upgrade</strong>
> > <span style="white-space: pre-wrap"><code>  apt-get update</code><br><code>  apt-get upgrade</code><br><code>  apt-get dist-upgrade</code></span>
> >
> > <strong>3. install the needed packages for guest editions</strong>
> > <span style="white-space: pre-wrap"><code>  apt-get install dkms </code><br><code>  apt-get install linux-headers-\$(uname -r)</code></span>
> >
> > <strong>4. On the virtualBox toolbar</strong>
> > - click devices dropdown menu
> > - click “Insert Guest Additions CD Image”
> >
> > <strong>5. cp /media/cdrom0/VBoxLinuxAdditions.run /root/Desktop</strong>
> >
> > <strong>6. run the VBoxLinuxAdditions.run script</strong>
> > <span style="white-space: pre-wrap"><code>  /root/Desktop/VBoxLinuxAdditions.run</code></span>
> >
> > <strong>7. reboot machine with reboot command</strong>
> > <span style="white-space: pre-wrap"><code>  reboot</code></span>

> [!expand]- Ubuntu
> ## Install Ubuntu
> 1. select New
> 2. Linux 64 bit
> 3. Disk Size 20 GB
> 4. Enable Graphics Hardware Acceleration
> 5. Increase Video Memory to max
> 6. iso point to ubuntu.iso
>
> ## Installing Guest Additions
> ```
> sudo apt update
> sudo apt install -y build-essential linux-headers-$(uname -r)
> ```
>
> Go to Devices \>\> Insert Guest Additions CD Image on the VM window
> ```
> sudo mount /dev/cdrom /mediaCOPY
> cd /media
> sudo ./VBoxLinuxAdditions.run
> sudo reboot
> ```
# Resources
- [www.virtualbox.org](http://www.virtualbox.org/)
