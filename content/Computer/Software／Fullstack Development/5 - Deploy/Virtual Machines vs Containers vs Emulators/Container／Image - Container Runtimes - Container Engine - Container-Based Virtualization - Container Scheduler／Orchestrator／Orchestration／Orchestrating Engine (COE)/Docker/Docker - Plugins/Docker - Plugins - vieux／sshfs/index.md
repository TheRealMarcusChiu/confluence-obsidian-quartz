---
title: "Docker - Plugins - vieux／sshfs"
created: 2025-02-21T13:04:05.988-06:00
modified: 2025-02-21T14:26:00.789-06:00
parent: "[[Docker - Plugins]]"
children: []
---
This [[Docker - Plugins|docker plugin]] extends the functionality of [[Docker - Volume Mounts]]
# Syntax

Install sshfx
```
❯ docker plugin install vieux/sshfs

Plugin "vieux/sshfs" is requesting the following privileges:
- network: [host]
- capabilities: [CAP_SYS_ADMIN]
Do you grant the above permissions? [y/N] y

vieux/sshfs
```

Create a volume using the plugin. The following will mount the directory <code><font style="color: rgb(122,134,154);">/example-directory</font></code> on host <code><font style="color: rgb(122,134,154);">1.2.3.4</font></code> into a volume named <code><font style="color: rgb(122,134,154);">my-ssh-volume</font></code>.
```
❯ docker volume create \
  -d vieux/sshfs \
  --name my-ssh-volume \
  -o sshcmd=user@1.2.3.4:/example-directory \
  -o password=$(cat file_containing_password_for_remote_host)

my-ssh-sshvolume
```
