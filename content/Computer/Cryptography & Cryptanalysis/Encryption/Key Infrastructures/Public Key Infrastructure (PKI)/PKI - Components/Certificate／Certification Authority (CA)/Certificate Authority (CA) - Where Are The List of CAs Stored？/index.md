---
title: "Certificate Authority (CA) - Where Are The List of CAs Stored？"
created: 2019-10-08T14:25:44.580-05:00
modified: 2019-11-22T12:25:37.682-06:00
parent: "[[Certificate／Certification Authority (CA)]]"
children: []
---
### Debian
- root certificates are stored in the <strong>/etc/ssl/certs</strong> folder along with a file called <strong>ca-certificates.cr</strong>
- It is created by the system and can be updated if new certificates are added using the <strong>update-ca-certificates</strong> command
