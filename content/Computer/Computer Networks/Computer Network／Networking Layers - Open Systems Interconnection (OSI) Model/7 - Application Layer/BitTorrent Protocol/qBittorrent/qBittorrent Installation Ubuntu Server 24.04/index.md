---
title: "qBittorrent Installation Ubuntu Server 24.04"
created: 2025-06-12T18:01:01.783-05:00
modified: 2025-06-12T18:08:06.388-05:00
parent: "[[qBittorrent]]"
children: []
---
# Install qbittorrent-nox
```
sudo apt install qbittorrent-nox
```
# Initial Run and Password Setup

make note of username (this will be used in Systemd Setup):
```
whoami
```

Run qbittorrent:
```
qbittorrent-nox
```

Make not of the username and password in console

Open [http://localhost:8080/](http://localhost:8080/) in browser.

Click on blue gearbox \> Web UI. Under authentication change username and password. Scroll to bottom and click save.
# Setup Systemd Service

Create a new service file
```
sudo vim /etc/systemd/system/qbittorrent-nox.service
```

add the following contents into service file
```
[Unit]
Description=qBittorrent Command Line Client
After=network.target

[Service]
Type=forking
User=USERNAME_HERE  <---------------------- change this here
Group=USERNAME_HERE <---------------------- change this here
UMask=007
ExecStart=/usr/bin/qbittorrent-nox -d --webui-port=8080
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Execute the following commands
```
sudo systemctl daemon-reload
sudo systemctl enable qbittorrent-nox
sudo systemctl start qbittorrent-nox
sudo systemctl status qbittorrent-nox
```
