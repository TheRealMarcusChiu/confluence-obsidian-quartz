---
title: "Confluence - Systemd Service"
created: 2019-11-19T18:39:58.626-06:00
modified: 2024-08-04T23:17:14.454-05:00
parent: "[[Personal Confluence (confluence.marcuschiu.com)]]"
children: []
---
Running [[Confluence]] as a [[Systemd]] [[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)|Service]] on [[Linux]]

Related: [[Systemd - Creating .service Files]]
# Pre-requisites
1. You already have Confluence installed and working, but you need it to function as a service (i.e. start on boot).
2. Your existing Confluence installation is running under a user other than root (we'll assume the user is named 'confluence').

# Solution

Login to the machine and elevate to the root user
```bash
sudo su
```

Create the following service config as root:
```bash
touch /lib/systemd/system/confluence.service
chmod 664 /lib/systemd/system/confluence.service
```

Edit the service config as root
```bash
vim /lib/systemd/system/confluence.service
```

Define the service config by putting this into confluence.service
```bash
[Unit]
Description=Confluence
After=network.target
After=postgresql.service
Requires=postgresql.service

[Service]
Type=forking
User=confluence
PIDFile=/opt/atlassian/confluence/work/catalina.pid
ExecStart=/opt/atlassian/confluence/bin/start-confluence.sh
ExecStop=/opt/atlassian/confluence/bin/stop-confluence.sh
TimeoutSec=200
LimitNOFILE=4096
LimitNPROC=4096

[Install]
WantedBy=multi-user.target
```
- User - the name of this user may vary in your environment
- PIDFile/ExecStart/ExecStop - change \<Confluence-Installation-Directory\> with the full path for your installation folder (e.g. /opt/atlassian-confluence-6.2.1 )
- WantedBy - /etc/systemd/system/multi-user.target.wants/

update Systemd
```bash
systemctl daemon-reload
```

allowed commands
```bash
systemctl enable confluence.service
systemctl disable confluence.service
systemctl start confluence.service
systemctl stop confluence.service
systemctl restart confluence.service
systemctl status confluence.service
```
