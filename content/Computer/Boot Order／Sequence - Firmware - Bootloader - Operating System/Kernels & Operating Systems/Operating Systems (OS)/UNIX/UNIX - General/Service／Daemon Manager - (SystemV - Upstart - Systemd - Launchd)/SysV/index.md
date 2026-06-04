---
title: "SysV"
created: 2019-11-19T16:13:31.195-06:00
modified: 2021-12-11T15:53:04.425-06:00
parent: "[[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)]]"
children: []
---
````excerpt
<strong>SysV</strong> is the traditional way to start services in [[Linux]] was to place a script in <code><font style="color: rgb(122,134,154);">/etc/init.d</font></code>, and then use the <code><font style="color: rgb(122,134,154);">update-rc.d</font></code> command (or in [[Red Hat Enterprise Linux (RHEL)|RedHat]] based distros, <code><font style="color: rgb(122,134,154);">chkconfig</font></code>) to enable or disable it.

This command uses some mildly complicated logic to create symlinks in <code><font style="color: rgb(122,134,154);">/etc/rc\#.d</font></code>, that control the order of starting services. If you run <code><font style="color: rgb(122,134,154);">ls /etc/rc2.d</font></code> you can see the order that services will be killed with a file name like <code><font style="color: rgb(122,134,154);">K\#\#xxxx</font></code> and started with file names <code><font style="color: rgb(122,134,154);">S\#\#xxxx</font></code>. The <code><font style="color: rgb(122,134,154);">\#\#</font></code> in <code><font style="color: rgb(122,134,154);">S\#\#xxxx</font></code>means a "start order" for service <code><font style="color: rgb(122,134,154);">xxxx</font></code>. Conversely, the <code><font style="color: rgb(122,134,154);">\#\#</font></code> in <code><font style="color: rgb(122,134,154);">K\#\#xxxx</font></code> means the kill order for service <code><font style="color: rgb(122,134,154);">xxxx</font></code>.

One major issue with <strong>SysV</strong> was that when [[Boot Order／Sequence - Firmware - Bootloader - Operating System|booting]] the system, [everything had to be done in serial, one thing after another, making system boot times really slow](http://upstart.ubuntu.com/cookbook/#critique-of-the-system-v-init-system). Attempts were made to parallelize this, but they were haphazard and hard to take full advantage of. This was the main reason that <em><strong>[[Upstart]]</strong> </em>was created.
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
