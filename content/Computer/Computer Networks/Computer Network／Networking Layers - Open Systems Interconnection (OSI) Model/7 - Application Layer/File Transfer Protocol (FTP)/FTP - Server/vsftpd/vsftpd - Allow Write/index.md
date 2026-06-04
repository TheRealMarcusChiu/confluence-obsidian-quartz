---
title: "vsftpd - Allow Write"
created: 2020-07-16T11:48:03.930-05:00
modified: 2020-07-16T11:49:21.991-05:00
parent: "[[vsftpd]]"
children: []
---
uncomment or add the following line in /etc/vsftpd.conf
```
write_enable=YES
```

then restart
```
sudo systemctl restart vsftpd
```
