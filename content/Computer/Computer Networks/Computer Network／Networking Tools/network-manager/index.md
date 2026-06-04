---
title: "network-manager"
created: 2019-03-16T23:47:24.566-05:00
modified: 2019-03-16T23:49:00.448-05:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
NetworkManager is a daemon that sits on top of libudev and other Linux kernel interfaces (and a couple of other daemons) and provides a high-level interface to network interface configuration and setup and is accessible via dbus to apps.
# Installation

> [!expand]- apt-get
> <strong>1. install network-manager</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install network-manager</code></span>
>
> <strong>2. to install the GNOME applet/indicator:</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install network-manager-gnome</code></span>
# Configuration

> [!expand]- /etc/network/interfaces
> <strong>1. reload /etc/network/interfaces</strong>
> <span style="white-space: pre-wrap"><code>  sudo service networking restart</code><br><code></code><br><code>or</code><br><code></code><br><code>  sudo service network-manager restart</code></span>
# Commands

> [!expand]- Click here to expand...
> [https://help.ubuntu.com/community/NetworkManager](https://help.ubuntu.com/community/NetworkManager)
> 1. start network-manager
> 	- using upstart
> 	  
> 	  sudo start network-manager
> 	- using systemd
> 	  
> 	  sudo systemctl start NetworkManager.service
> 	  
> 	  Enable restarting the network manager when the system reboots
> 	  
> 	  sudo systemctl enable NetworkManager.service
> 2. stop network-manager
> 	- using upstart
> 	  
> 	  sudo stop network-manager
> 	  
> 	  Create an override file for the Upstart job:
> 	  
> 	  echo "manual" | sudo tee /etc/init/network-manager.override
> 	- using systemd
> 	  
> 	  sudo systemctl stop NetworkManager.service
> 	  
> 	  Disable network manager (permanently) to avoid it restarting after a reboot
> 	  
> 	  sudo systemctl disable NetworkManager.service
> 3. restarting
>    
>    sudo /etc/init.d/networking restart
