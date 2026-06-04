---
title: "Upstart"
created: 2019-11-19T16:11:36.744-06:00
modified: 2021-12-11T15:53:44.971-06:00
parent: "[[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)]]"
children: []
---
````excerpt
<strong>Upstart</strong> uses job definition files in <code><font style="color: rgb(122,134,154);">/etc/init</font></code> to define on what events a service should be started. So, while the system is booting, upstart processes various events, and then can start multiple services in parallel. This allows them to fully utilize the resources of the system, for instance, by starting a disk-bound service up while another CPU-bound service runs, or while the network is waiting for a dynamic IP address to be assigned.

You can see all of the upstart job files by running <code><font style="color: rgb(122,134,154);">ls /etc/init/\*.conf</font></code>

Let me just stop here and say that if you don't know what a service is, or what it does, DO NOT disable it!

Not all services have been converted to upstart. While working on the server team at Canonical for the past few months, I've worked on a number of converted job files, and the nicest part is that it allows one to get rid of all the script "magic" and just put in a few commands here and there to define exactly how to start the service, and nothing more. But for now, only a handful of traditional network services, like <em>squid</em> and <em>samba</em>, have been converted.
````
^excerpt

# Commands
- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|service]]
- [[SysV／Upstart／Systemd／Launchd - Commands (service - chkconfig - systemctl - journalctl - launchctl)|chkconfig]]

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
