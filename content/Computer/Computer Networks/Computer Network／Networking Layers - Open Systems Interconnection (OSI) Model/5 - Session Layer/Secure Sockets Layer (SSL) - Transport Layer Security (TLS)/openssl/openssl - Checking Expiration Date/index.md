---
title: "openssl - Checking Expiration Date"
created: 2020-09-19T21:28:55.401-05:00
modified: 2020-09-19T21:29:38.147-05:00
parent: "[[openssl]]"
children: []
---
```
echo | openssl s_client -servername *.marcuschiu.com -connect marcuschiu.com:443 2>/dev/null | openssl x509 -noout -dates
```
