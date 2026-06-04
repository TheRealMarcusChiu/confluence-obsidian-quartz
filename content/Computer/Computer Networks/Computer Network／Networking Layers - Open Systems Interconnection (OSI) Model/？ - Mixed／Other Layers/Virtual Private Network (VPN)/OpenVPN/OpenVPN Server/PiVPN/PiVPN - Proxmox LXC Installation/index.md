---
title: "PiVPN - Proxmox LXC Installation"
created: 2025-02-06T13:24:30.842-06:00
modified: 2025-02-06T13:28:23.421-06:00
parent: "[[PiVPN]]"
children: []
---
see: [https://colinmurphy.me/posts/2023/05/pivpn-proxmox-lxc/](https://colinmurphy.me/posts/2023/05/pivpn-proxmox-lxc/)

From the [[Proxmox Virtual Environment (PVE)|Proxmox]] web interface, create a new container with these options:
- <strong>Unprivileged:</strong> Yes
- <strong>Nesting:</strong> Yes
- <strong>Template:</strong> Debian 11 (See [Container Images](https://pve.proxmox.com/wiki/Linux_Container#pct_container_images) on the Proxmox Wiki)
- <strong>Disks:</strong> 8GB rootfs
- <strong>CPU:</strong> Match the number of cores on your CPU, in my case this is 4
- <strong>Memory:</strong> Default options (512MB is more than enough)
- <strong>Network:</strong> Assign a static IPv4 address
- <strong>DNS:</strong> Default options

Once your container is created, go into the configuration and ensure that the option <strong>Create Device Nodes</strong> is checked in the container Options \> Features.

![[PiVPN - Proxmox LXC Installation/PiVPN-proxmox-lxc-installation.png|700]]

Enabling the Create Device Nodes feature in Proxmox
## Pass the <code>tun</code> device to the container

According to <em>[Wikipedia](https://en.wikipedia.org/wiki/TUN/TAP)</em>, a tun device is a virtual network device built in to the Linux kernel. This device operates at the network layer, and is used to tunnel IP packets. This device is normally not able to be accessed in an unprivileged LXC container, so we will need to make sure that this container is able to access it on the host device by using an LXC mount entry.

In order to pass through the <code>/dev/net/tun</code> device to our container, we will need to modify the container’s configuration file. Proxmox stores these configuration files at the <code>/etc/pve/lxc</code> directory, with each container having its own .conf file. In my case, this container’s ID is 107, so the resulting file we will want to edit is <code>/etc/pve/lxc/107.conf</code>.

Ensure that your container is not currently running, and then add the following line to its configuration file:
```
lxc.mount.entry: /dev/net dev/net none bind,optional,create=dir
```

Now that we have added a mount entry, we can start the container and install PiVPN!
## Installing PiVPN

Start your container, and sign into it by using <code>ssh</code> or the Shell tab in Proxmox.

First, we’ll need to update the repositories and then do a full system upgrade to ensure all packages are up to date.
```
apt update
apt -y full-upgrade
```

Next, we’ll install curl and then kick off the PiVPN installation process.
```
# Install curl
apt -y install curl

# Install PiVPN
curl -L https://install.pivpn.io | bash
```

PiVPN will begin the installation process. This process is relatively simple, and for the most part you can accept the defaults. The main things I recommend is to use WireGuard as the VPN option. It offers better performance than OpenVPN, and is very easy to set up. I also recommend using a public DNS name, using a Dynamic DNS provider if your IP address changes frequently. You should also enable unattended upgrades, especially as this is an internet-facing server.
## Final steps

Once PiVPN finishes the installation, it will ask you to reboot. After rebooting the container, log back into it and run the command <code>pivpn debug</code>. You should see a similar output under the <strong>Self check</strong> section if everything is well:
```
::::            Self check               ::::
:: [OK] IP forwarding is enabled
:: [OK] Iptables MASQUERADE rule set
:: [OK] WireGuard is running
:: [OK] WireGuard is enabled 
(it will automatically start on reboot)
:: [OK] WireGuard is listening on port 51820/udp
```

From here, I recommend following the documentation on [PiVPN’s website](https://docs.pivpn.io/wireguard/) for the remainder of the setup.

Hope this helps!
