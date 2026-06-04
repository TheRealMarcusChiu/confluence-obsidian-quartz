---
title: "Nginx - Logs"
created: 2020-09-19T16:29:12.076-05:00
modified: 2020-09-19T16:29:38.547-05:00
parent: "[[Nginx]]"
children: []
---
```
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] '
                      '"HOST: $host" '
                      '"REQUEST: $request" '
                      '"HTTP-STATUS: $status" '
                      '"BODY-BYTES-SENT: $body_bytes_sent" '
                      '"HTTP-REFERER: $http_referer" '
                      '"HTTP-USER-AGENT: $http_user_agent" '
                      '"HTTP-FORWARDED-FOR: $http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log;
}
```
