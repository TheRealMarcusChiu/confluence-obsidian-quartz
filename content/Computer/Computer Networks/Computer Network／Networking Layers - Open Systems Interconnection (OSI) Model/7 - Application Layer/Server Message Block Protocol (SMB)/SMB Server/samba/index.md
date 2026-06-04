---
title: "samba"
created: 2019-03-16T22:50:59.680-05:00
modified: 2019-03-16T22:52:07.420-05:00
parent: "[[SMB Server]]"
children: []
---
Samba is a free software re-implementation of the SMB/CIFS networking protocol, and was originally developed by Andrew Tridgell. Samba provides file and print services for various Microsoft Windows clients and can integrate with a Microsoft Windows Server domain, either as a Domain Controller (DC) or as a domain member. As of version 4, it supports Active Directory and Microsoft Windows NT domains.
# Installation

> [!expand]- apt-get
> <strong>1. Install samba</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code><br><code>  sudo apt-get install samba</code></span>
>
> <strong>2. Start Stop Restart Status</strong>
> <span style="white-space: pre-wrap"><code>  sudo service smbd start</code><br><code>  sudo service smbd start</code><br><code>  sudo service smbd restart</code><br><code>  sudo service smbd status</code></span>
# Configuration

> [!expand]- Click here to expand...
> <strong>1. In the smb.conf add this to the very end of the file:</strong>
> <span style="white-space: pre-wrap"><code>  \[\<folder\_name\>\]</code><br><code>  path = /path/to/shared/directory</code><br><code>  valid users = \<user\_name\></code><br><code>  read only = no</code></span>
>
> <strong>2. restart smbd server</strong>
> <span style="white-space: pre-wrap"><code>  sudo service smbd restart</code></span>
>
> <strong>3. check smbd.conf for syntax errors</strong>
> <span style="white-space: pre-wrap"><code>  testparm</code></span>
# Commands

> [!expand]- Click here to expand...
> <strong>1. Set a password for your user in Samba</strong>
> <span style="white-space: pre-wrap"><code>  sudo smbpasswd -a \<user\_name\></code></span>
