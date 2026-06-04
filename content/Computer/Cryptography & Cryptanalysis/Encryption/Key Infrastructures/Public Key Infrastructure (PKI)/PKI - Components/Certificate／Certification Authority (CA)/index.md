---
title: "Certificate／Certification Authority (CA)"
created: 2019-09-29T23:13:05.631-05:00
modified: 2025-12-19T23:26:55.396-06:00
parent: "[[PKI - Components]]"
children:
  - "[[Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #1]]"
  - "[[Certificate Authority (CA) - Creating Your Own CA & Self-Sign Certificates #2]]"
  - "[[Certificate Authority (CA) - Where Are The List of CAs Stored？]]"
---
###### CA (Certificate Authority or Certification Authority)
````excerpt
- is a [[Trusted Intermediaries (TI) - Trusted Third Party (TTP)|Trusted Intermediary]] that:
	- holds a [[Asymmetric／Two／Public-Private Key Function|public-private key]] pair
	- uses its own [[Asymmetric／Two／Public-Private Key Function|private-key]] to issue/sign a:
		- [Certificate Signing Request (CSR)](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2655255) which then becomes a [[Digital SSL／TLS Certificate|Digital SSL/TLS Certificate]]
		- [[Certificate Revocation List (CRL)]]
- to verify whether a [[Certificate Signing Request (CSR)|CSR]] or [[Certificate Revocation List (CRL)|CRL]] was signed by a CA, we use the CA's [[Asymmetric／Two／Public-Private Key Function|public-key]]. [[Certificate Authority (CA) - Where Are The List of CAs Stored？|All trusted CA public-keys come pre-package in the operating system]]
````
^excerpt

# How does HTTPS work? What's a CA? What's a self-signed Certificate?
![](https://www.youtube.com/watch?v=T4Df5_cojAs)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
