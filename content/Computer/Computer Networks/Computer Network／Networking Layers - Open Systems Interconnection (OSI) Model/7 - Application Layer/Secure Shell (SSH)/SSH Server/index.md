---
title: "SSH Server"
created: 2019-03-16T22:31:27.211-05:00
modified: 2022-12-06T22:02:12.353-06:00
parent: "[[Secure Shell (SSH)]]"
children:
  - "[[SSH - Disable Password Authentication]]"
  - "[[SSH - Upload Public Key to SSH Server]]"
---
# Configuration

> [!expand]- macOS
> MacOS already comes preinstalled with sshd
>
> <strong>1. Open sshd config file with the following command</strong>
> <span style="white-space: pre-wrap"><code>  vim /etc/ssh/sshd\_config</code></span>
>
> <strong>2. make any changes</strong>
>
> <strong>3. start ssh server</strong>
> <span style="white-space: pre-wrap"><code>  sudo service ssh restart</code></span>

> [!expand]- apt-get
> [https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys) [http://linux-sys-adm.com/how-to-install-and-configure-ssh-on-ubuntu-server-14.04-lts-step-by-step/](http://linux-sys-adm.com/how-to-install-and-configure-ssh-on-ubuntu-server-14.04-lts-step-by-step/)
>
> <strong>1. Open sshd config file with the following command</strong>
> <span style="white-space: pre-wrap"><code>  vim /etc/ssh/sshd\_config</code></span>
>
> <strong>2. make any changes</strong>
>
> <strong>3. start ssh server</strong>
> <span style="white-space: pre-wrap"><code>  sudo service ssh restart</code></span>
# Server Setup

> [!expand]- macOS
> already provided in MacOS
>
> <strong>1. Start Stop Restart</strong>
>
> In System Preferences under Sharing, there is an option for Remote Login.
>
> This will run sshd at startup (through launchd) and enable SSH access with standard options. To tweak the sshd options, edit /etc/sshd\_config (you'll need to do this in a sudo shell or via sudo vi /etc/sshd\_config).

> [!expand]- apt-get
> <strong>1. install sshd using apt-get in terminal</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install openssh-server</code></span>
>
> <strong>2. verify sshd</strong>
> <span style="white-space: pre-wrap"><code>  which sshd</code></span>
>
> <strong>3. verify status of ssh server (at time of writing, ssh server automatically starts and is enabled)</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl status ssh</code></span>
>
> <strong>4. Start Stop Restart Status</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl start ssh</code><br><code>  sudo systemctl stop ssh</code><br><code>  sudo systemctl restart ssh</code><br><code>  sudo systemctl status ssh</code></span>
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
