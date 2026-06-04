---
title: "Nginx - Proxy SSH Connections"
created: 2025-05-20T16:06:53.472-05:00
modified: 2025-05-20T16:09:58.445-05:00
parent: "[[Nginx]]"
children: []
---
Install module
```
apt update
apt install libnginx-mod-stream
```

Remove the auto generated soft-link file in <code><font style="color: rgb(122,134,154);">/etc/nginx/modules-enabled/ngx\_stream\_module.so</font></code>
```
rm /etc/nginx/modules-enabled/ngx_stream_module.so
```

Add the following to the TOP of <code><font style="color: rgb(122,134,154);">/etc/nginx.conf</font></code>
```
load_module /usr/lib/nginx/modules/ngx_stream_module.so;

# Stream for Gitea SSH proxy
stream {
    upstream gitea-ssh-backend {
        server ubuntu-server-docker.lan:222;
    }
    server {
        listen 222;
        proxy_pass gitea-ssh-backend;
    }
}
```
