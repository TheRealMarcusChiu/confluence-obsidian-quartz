---
title: "openssl - Generating a Certificate Signing Request (CSR)"
created: 2020-06-27T23:58:20.900-05:00
modified: 2020-06-28T00:00:32.198-05:00
parent: "[[openssl - Generating SSL Certificates]]"
children: []
---
generating a [[Certificate Signing Request (CSR)]]
## <strong>Generate a Private Key and a CSR</strong>

<strong>create a 2048-bit private key (domain.key) and a CSR (domain.csr)</strong>
<span style="white-space: pre-wrap"><code>openssl req -newkey rsa:2048 -nodes -keyout domain.key -out domain.csr</code></span>

- newkey rsa:2048 option specifies that the key should be 2048-bit, generated using the RSA algorithm
- nodes option specifies that the private key should not be encrypted with a pass phrase
- new option, which is not included here but implied, indicates that a CSR is being generated

## <strong>Generate a CSR from an Existing Private Key</strong>

<strong>create a new CSR (domain.csr) based on an existing private key (domain.key)</strong>
<span style="white-space: pre-wrap"><code>openssl req -key domain.key -new -out domain.csr</code></span>

## <strong>Generate a CSR from an Existing Certificate and Private Key</strong>

<strong>create a new CSR (domain.csr) based on an existing certificate (domain.crt) and private key (domain.key)</strong>
<span style="white-space: pre-wrap"><code>openssl x509 -in domain.crt -signkey domain.key -x509toreq -out domain.csr</code></span>
