---
title: "Nextcloud AIO (All in One)"
created: 2025-02-21T17:59:24.056-06:00
modified: 2025-02-21T18:03:48.015-06:00
parent: "[[Nextcloud]]"
children: []
---
###### Nextcloud AIO (All in One)
````excerpt
- the official [[Nextcloud]] installation method
- provides easy deployment and maintenance with most features included in this one Nextcloud instance
````
^excerpt

# Quickstart
```
# For Linux and without a web server or reverse proxy (like Apache, Nginx, Caddy, Cloudflare Tunnel and else) already in place:
sudo docker run \
--init \
--sig-proxy=false \
--name nextcloud-aio-mastercontainer \
--restart always \
--publish 80:80 \
--publish 8080:8080 \
--publish 8443:8443 \
--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
--volume /var/run/docker.sock:/var/run/docker.sock:ro \
nextcloud/all-in-one:latest
```
# Other
- running Nextcloud AIO locally - [https://github.com/nextcloud/all-in-one/blob/main/local-instance.md](https://github.com/nextcloud/all-in-one/blob/main/local-instance.md)

# Resources
- [https://github.com/nextcloud/all-in-one#how-to-use-this](https://github.com/nextcloud/all-in-one#how-to-use-this)
