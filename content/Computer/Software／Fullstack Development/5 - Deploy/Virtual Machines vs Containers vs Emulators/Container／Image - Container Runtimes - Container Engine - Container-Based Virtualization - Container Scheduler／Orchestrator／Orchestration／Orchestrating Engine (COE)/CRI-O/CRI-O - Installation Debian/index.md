---
title: "CRI-O - Installation Debian"
created: 2024-08-25T23:21:50.072-05:00
modified: 2024-08-25T23:22:42.499-05:00
parent: "[[CRI-O]]"
children: []
---
```
apt-get update
apt-get install -y apt-transport-https ca-certificates curl gpg

curl -fsSL https://pkgs.k8s.io/addons:/cri-o:/stable:/v1.30/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/cri-o-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/cri-o-apt-keyring.gpg] https://pkgs.k8s.io/addons:/cri-o:/stable:/v1.30/deb/ /" | tee /etc/apt/sources.list.d/cri-o.list

apt-get update
apt-get install -y cri-o
apt-mark hold cri-o

systemctl enable --now crio.service
systemctl start crio.service
```
