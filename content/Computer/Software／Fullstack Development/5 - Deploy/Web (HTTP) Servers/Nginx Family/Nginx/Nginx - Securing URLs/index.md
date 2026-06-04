---
title: "Nginx - Securing URLs"
created: 2020-06-21T18:13:43.912-05:00
modified: 2020-06-21T18:16:06.285-05:00
parent: "[[Nginx]]"
children: []
---
```
server {
    listen 80;
    server_name secure-link-demo;

    location /videos {
        secure_link_secret enigma;
        if ($secure_link = "") { return 403; }

        rewrite ^ /secure/$secure_link;
    }

    location /secure {
        internal;
        root /opt;
    }
}
```

With this configuration, to access the file /opt/secure/hls/bunny.m3u8 clients must present the following URL:
- /videos/80e2dfecb5f54513ad4e2e6217d36fd4/hls/bunny.m3u8

Generating the hash
```
# echo -n 'hls/bunny.m3u8enigma' | openssl md5 -hex
(stdin)= 80e2dfecb5f54513ad4e2e6217d36fd4
```
