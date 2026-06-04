---
title: "OpenLDAP - Docker Installation"
created: 2022-05-22T20:04:53.237-05:00
modified: 2022-05-22T20:09:39.988-05:00
parent: "[[OpenLDAP]]"
children: []
---
# Docker Images
- [https://github.com/osixia/docker-openldap](https://github.com/osixia/docker-openldap)
- [https://github.com/osixia/docker-phpLDAPadmin](https://github.com/osixia/docker-phpLDAPadmin)

# Pre Setup

Edit /etc/hosts
```
IP_ADDRESS_HERE ldap.example.org
```
# Bash Script
```
#!/bin/bash -e
docker run -p 389:389 -p 636:636 --name ldap-service --hostname ldap-service --detach osixia/openldap:1.5.0
docker run -p 8090:80 --name phpldapadmin-service --hostname phpldapadmin-service --link ldap-service:ldap-host --env PHPLDAPADMIN_LDAP_HOSTS=ldap-host --env PHPLDAPADMIN_HTTPS=false --detach osixia/phpldapadmin:0.9.0

PHPLDAP_IP=$(docker inspect -f "{{ .NetworkSettings.IPAddress }}" phpldapadmin-service)

echo "Go to: http://localhost:8090 or http://ldap.example.org:8090"
echo "Login DN: cn=admin,dc=example,dc=org"
echo "Password: admin"
```
