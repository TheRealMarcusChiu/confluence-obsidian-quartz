---
title: "Vaultwarden - Proxmox Helper Scripts How to Change Port Number from 8000 to 443"
created: 2025-12-19T19:01:45.679-06:00
modified: 2025-12-19T19:03:17.629-06:00
parent: "[[Vaultwarden]]"
children: []
---
Within the Vaultwarden LXC, add the following line (<code><font style="color: rgb(122,134,154);">ROCKET\_PORT=443</font></code>):
```
cat /opt/vaultwarden/.env
ADMIN_TOKEN=''
ROCKET_ADDRESS=0.0.0.0
ROCKET_PORT=443
ROCKET_TLS='{certs="/opt/vaultwarden/ssl-cert-snakeoil.pem",key="/opt/vaultwarden/ssl-cert-snakeoil.key"}'
DATA_FOLDER=/opt/vaultwarden/data
DATABASE_MAX_CONNS=10
WEB_VAULT_FOLDER=/opt/vaultwarden/web-vault
WEB_VAULT_ENABLED=true
```
