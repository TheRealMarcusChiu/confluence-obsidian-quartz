---
title: "curl - Show Just The Response Headers and Body"
created: 2022-01-10T23:38:21.580-06:00
modified: 2022-01-10T23:39:45.414-06:00
parent: "[[curl]]"
children: []
---
# curl -i
```
❯ curl http://localhost:8080/hello -i
HTTP/1.1 400
Content-Type: text/plain;charset=UTF-8
Content-Length: 16
Date: Mon, 10 Jan 2022 23:38:01 GMT
Connection: close

response message%
```
