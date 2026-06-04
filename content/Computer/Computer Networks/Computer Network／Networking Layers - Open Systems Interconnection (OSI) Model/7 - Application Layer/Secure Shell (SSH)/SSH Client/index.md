---
title: "SSH Client"
created: 2019-03-16T22:24:17.051-05:00
modified: 2022-09-06T02:19:40.249-05:00
parent: "[[Secure Shell (SSH)]]"
children:
  - "[[SSH Tunneling]]"
  - "[[ssh-key-management]]"
---
# Configuration

> [!expand]- Click here to expand...
> [https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
> [https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)
>
> There are 2 types of client configuration files:
> - system-wide configuration
> - user-specific configuration - which overrides the system-wide configuration
>
> > [!expand]- config format
> > [https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
> > [https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)
> > ## How Configs Simplify Commands
> >
> > <strong>Given:</strong>
> > - Local desktop client – Apple OS X or Ubuntu Linux.
> > - Remote Unix server – OpenBSD server running latest OpenSSH server.
> > - Remote OpenSSH server ip/host: 75.126.153.206 ([server1.cyberciti.biz](http://server1.cyberciti.biz))
> > - Remote OpenSSH server user: nixcraft
> > - Remote OpenSSH port: 4242
> > - Local ssh private key file path : /nfs/shared/users/nixcraft/keys/server1/id\_rsa
> >
> > <strong>Command Without Config</strong>
> > - ssh -i /nfs/shared/users/nixcraft/keys/server1/id\_rsa -p 4242 -l nixcraft [server1.cyberciti.biz](http://server1.cyberciti.biz)
> >
> > <strong>To avoid typing all this, edit the configuration file and append this:</strong>
> > <span style="white-space: pre-wrap"><code>Host server1</code><br><code>  HostName server1.cyberciti.biz</code><br><code>  User nixcraft</code><br><code>  Port 4242</code><br><code>  IdentityFile /nfs/shared/users/nixcraft/keys/server1/id\_rsa</code></span>
> >
> > <strong>Command With Config</strong>
> > - ssh server1
> >
> > ## Understanding Config Entries
> > - <strong>Host</strong>
> > 	- Defines for which host or hosts the configuration section applies. The section ends with a new Host section or the end of the file. A single \* as a pattern can be used to provide global defaults for all hosts.
> > - <strong>HostName</strong>
> > 	- Specifies the real host name to log into. Numeric IP addresses are also permitted.
> > - <strong>User</strong>
> > 	- Defines the username for the SSH connection.
> > - <strong>IdentityFile</strong>
> > 	- Specifies a file from which the user’s DSA, ECDSA or DSA authentication identity is read. The default is \~/.ssh/identity for protocol version 1, and \~/.ssh/id\_dsa, \~/.ssh/id\_ecdsa and \~/.ssh/id\_rsa for protocol version 2.
> > - <strong>ProxyCommand</strong>
> > 	- Specifies the command to use to connect to the server. The command string extends to the end of the line, and is executed with the user’s shell. In the command string, any occurrence of %h will be substituted by the host name to connect, %p by the port, and %r by the remote user name. The command can be basically anything, and should read from its standard input and write to its standard output. This directive is useful in conjunction with nc(1) and its proxy support.
> > 	- For example, the following directive would connect via an HTTP proxy at 192.1.0.253:
> > ProxyCommand /usr/bin/nc -X connect -x 192.1.0.253:3128 %h %p
> > - <strong>LocalForward</strong>
> > 	- Specifies that a TCP port on the local machine be forwarded over the secure channel to the specified host and port from the remote machine. The first argument must be \[bind\_address:\]port and the second argument must be host:hostport.
> > - <strong>Port</strong>
> > 	- Specifies the port number to connect on the remote host.
> > - <strong>Protocol</strong>
> > 	- Specifies the protocol versions ssh(1) should support in order of preference. The possible values are 1 and 2.
> > - <strong>ServerAliveInterval</strong>
> > 	- Sets a timeout interval in seconds after which if no data has been received from the server, ssh(1) will send a message through the encrypted channel to request a response from the server. See blogpost “Open SSH Server connection drops out after few or N minutes of inactivity” for more information.
> > - <strong>ServerAliveCountMax</strong>
> > 	- Sets the number of server alive messages which may be sent without ssh(1) receiving any messages back from the server. If this threshold is reached while server alive messages are being sent, ssh will disconnect from the server, terminating the session.
>
> > [!expand]- system wide config
> > [https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
> > [https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)
> >
> > <strong>1. System-wide SSH client configuration files</strong>
> > <span style="white-space: pre-wrap"><code>  /etc/ssh/ssh\_config</code></span>
>
> > [!expand]- user specific config
> > [https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
> > [https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)
> >
> > <strong>1. User-specific SSH client configuration files</strong>
> > <span style="white-space: pre-wrap"><code>  \~/.ssh/config</code><br><code>  \$HOME/.ssh/config</code><br><code></code><br><code>  overrides the settings in the global client configuration file, /etc/ssh/ssh\_config</code></span>
> >
> > <strong>2. if this is new Linux/Unix box, create \~/.ssh directory</strong>
> > <span style="white-space: pre-wrap"><code>  mkdir -p \~/.ssh</code><br><code>  chmod 0700 \~/.ssh</code></span>
# Commands

> [!expand]- Click here to expand...
> [SSH Essentials Working With SSH Servers Client & Keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)
> [22 SSH Examples](https://hackertarget.com/ssh-examples-tunnels/)
>
> <strong>1. login</strong>
> <span style="white-space: pre-wrap"><code>  ssh \<remote\_host\></code><br><code>  ssh \<username@remote\_host\></code></span>
>
> <strong>2. login with private key</strong>
> <span style="white-space: pre-wrap"><code>  ssh -i \<path to private-key-file\> \<host-url\></code></span>
>
> <strong>3. login with different port (by default the ssh daemon on a server runs on port 22)</strong>
> <span style="white-space: pre-wrap"><code>  ssh -p \<port number\> \<host-url\></code></span>
>
> <strong>1. The fingerprint is the MD5 of the Base64-encoded public key.</strong>
> <span style="white-space: pre-wrap"><code>  echo 'public-key-here' | base64 -D | md5</code></span>
>
> <strong>1. running a single command on remote host</strong>
> <span style="white-space: pre-wrap"><code>  ssh username@remote\_host \<command to run\></code></span>
# Other Commands
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
