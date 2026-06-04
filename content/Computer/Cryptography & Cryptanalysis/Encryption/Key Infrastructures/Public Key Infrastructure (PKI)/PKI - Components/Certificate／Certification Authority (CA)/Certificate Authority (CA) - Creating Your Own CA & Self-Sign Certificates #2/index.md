---
title: "Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #2"
created: 2025-12-19T23:21:18.898-06:00
modified: 2025-12-19T23:25:01.383-06:00
parent: "[[Certificate／Certification Authority (CA)]]"
children: []
---
# Create a CA

we will create 2 files:
- <code><font style="color: rgb(122,134,154);">ca.key</font></code> - private key
- <code><font style="color: rgb(122,134,154);">ca.crt</font></code> - public cert (meant to be imported into OS)
```
openssl genrsa -out ca.key 4096
openssl req -x509 -new -nodes -key ca.key \
  -sha256 -days 3650 -out ca.crt \
  -subj "/C=US/O=Homelab/CN=Homelab Root CA"
```
# Create a Cert (signed by CA)
```
openssl genrsa -out vaultwarden.key 2048
openssl req -new -key vaultwarden.key -out vaultwarden.csr -subj "/CN=vaultwarden.lan"
```

SANs (required by [[Apple iOS|iOS]])
```
cat > vaultwarden-san.cnf <<EOF
subjectAltName=DNS:vaultwarden.lan,IP:192.168.111.14
extendedKeyUsage=serverAuth
EOF
```

sign it
```
openssl x509 -req -in vaultwarden.csr \
  -CA ../ca.crt -CAkey ../ca.key -CAcreateserial \
  -out vaultwarden.pem -days 825 -sha256 \
  -extfile vaultwarden-san.cnf
```

create fullchain
```
cat vaultwarden.pem ../ca.crt > vaultwarden-fullchain.pem
```
