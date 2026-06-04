---
title: "Obtaining Public Certificate of a Domain (OpenSSL)"
created: 2021-10-03T18:52:31.581-05:00
modified: 2021-10-03T18:55:48.834-05:00
parent: "[[Obtaining Public Certificate of a Domain]]"
children: []
---
the command below uses [[openssl]] to obtain the public certificate of example.com
```
openssl x509 -in <(openssl s_client -connect example.com:443 -prexit 2>/dev/null) -out example.crt
```
