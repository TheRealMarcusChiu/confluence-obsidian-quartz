---
title: "smbclient"
created: 2019-03-16T22:53:33.351-05:00
modified: 2019-03-16T22:54:51.634-05:00
parent: "[[SMB Client]]"
children: []
---
# Installation

> [!expand]- apt-get
> <strong>1. Install samba client</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code><br><code>  sudo apt-get install smbclient</code></span>
>
> <strong>2. verify samba client was installed</strong>
> <span style="white-space: pre-wrap"><code>  which smbclient</code></span>
# Configuration

> [!expand]- Click here to expand...
> # ALLOW USER
>
> <strong>1. In the smb.conf add this to the very end of the file:</strong>
> <span style="white-space: pre-wrap"><code>  \[\<folder\_name\>\]</code><br><code>  path = /path/to/shared/directory</code><br><code>  valid users = \<user\_name\></code><br><code>  read only = no</code></span>
>
> <strong>2. restart smbd server</strong>
> <span style="white-space: pre-wrap"><code>   sudo service smbd restart</code></span>
>
> <strong>3. check smbd.conf for syntax errors</strong>
> <span style="white-space: pre-wrap"><code>  testparm</code></span>
# Commands

> [!expand]- Click here to expand...
> <strong>1. list all shares from server</strong>
> <span style="white-space: pre-wrap"><code>  smbclient -L //\<HOST\_IP\_OR\_NAME\>/\<folder\_name\> -U \<user\></code></span>
>
> <strong>2. connect to</strong>
> <span style="white-space: pre-wrap"><code>  smbclient //\<HOST\_IP\_OR\_NAME\>/\<folder\_name\> -U \<user\></code></span>
