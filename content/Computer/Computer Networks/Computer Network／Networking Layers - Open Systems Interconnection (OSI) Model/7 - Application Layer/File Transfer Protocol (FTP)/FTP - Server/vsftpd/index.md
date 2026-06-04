---
title: "vsftpd"
created: 2019-11-16T17:28:15.838-06:00
modified: 2020-07-16T11:56:00.777-05:00
parent: "[[FTP - Server]]"
children:
  - "[[vsftpd - Allow Write]]"
---
<strong>vsftpd</strong> is an [[File Transfer Protocol (FTP)|FTP]] server for [[UNIX|Unix]]-like systems. It supports [[IPv6]], [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|TLS]] and [[File Transfer Protocol SSL (FTPS)]]
### Installation
- apt-get install -y vsftpd

### Commands
- sudo systemctl start vsftpd
- sudo systemctl restart vsftpd
- sudo systemctl stop vsftpd
- sudo systemctl status vsftpd

### Configuration Files
- /etc/vsftpd.conf

### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

### Resources
- [https://www.howtoforge.com/tutorial/ubuntu-vsftpd/](https://www.howtoforge.com/tutorial/ubuntu-vsftpd/)
