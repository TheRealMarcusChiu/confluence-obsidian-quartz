---
title: "Nginx - Rate Limiting"
created: 2020-05-29T02:31:56.350-05:00
modified: 2020-05-29T02:37:40.937-05:00
parent: "[[Nginx]]"
children: []
---
see: [https://www.nginx.com/blog/rate-limiting-nginx/](https://www.nginx.com/blog/rate-limiting-nginx/)
### Example Use Case
- only allow 3.95.18.164 and 192.168.86.0/24
- 3.95.18.164 is rate limited
- 192.168.86.0/24 is NOT rate limited
```
geo $limit {
    default 1;
    192.168.86.0/24 0;
}

map $limit $limit_key {
    0 "";
    1 $binary_remote_addr;
}

limit_req_zone $limit_key zone=confluencelimit:10m rate=20r/s;

server {
    listen 8080;
    listen 80;
    server_name confluence.marcuschiu.com;

    allow 3.95.18.164;
    allow  192.168.86.0/24;
    deny all;

    access_log logs/confluence.marcuschiu.com/access.log;
    error_log  logs/confluence.marcuschiu.com/error.log;

    location / {
		limit_req zone=confluencelimit burst=20 nodelay;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;

        proxy_pass http://192.168.86.28:8090;
    }
}
```
