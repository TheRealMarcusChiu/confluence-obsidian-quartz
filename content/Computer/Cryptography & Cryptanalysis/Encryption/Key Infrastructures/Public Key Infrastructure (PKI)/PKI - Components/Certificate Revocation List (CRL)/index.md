---
title: "Certificate Revocation List (CRL)"
created: 2019-09-29T22:52:51.788-05:00
modified: 2025-12-19T23:28:28.138-06:00
parent: "[[PKI - Components]]"
children: []
---
###### Certificate Revocation List (CRL)
````excerpt
- is a list of [[Digital SSL／TLS Certificate|digital certificates]] that have been revoked by the issuing [[Certificate／Certification Authority (CA)|Certificate Authority]] before their scheduled expiration date and should no longer be trusted
- a [[Digital SSL／TLS Certificate|digital certificate]] is valid if:
	- it has a valid CA signature
	- not expired
	- is not listed in CRL
````
^excerpt

# CRL Format

defined in the [[X.509 and PKIX|X.509]]
