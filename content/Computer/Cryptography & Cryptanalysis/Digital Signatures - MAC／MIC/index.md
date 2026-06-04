---
title: "Digital Signatures - MAC／MIC"
created: 2019-11-13T12:43:26.432-06:00
modified: 2025-12-19T23:35:08.312-06:00
parent: "[[Cryptography & Cryptanalysis]]"
children:
  - "[[Digital Signatures]]"
  - "[[Message Authentication Code (MAC) - Message Integrity Code (MIC)]]"
---
# Digital Signatures vs MAC/MIC
````excerpt
<strong>[[Message Authentication Code (MAC) - Message Integrity Code (MIC)|MACs/MICs]]</strong> are sometimes incorrectly referred as <strong>[[Digital Signatures]]</strong>
- both enforce <em>integrity</em> and <em>[[Authentication (AuthN)|authenticity]]</em>
- both use cryptographic keys

the difference is that:
- <strong>[[Digital Signatures]]</strong> use [[Asymmetric／Two／Public-Private Key Function|asymmetric-key functions]]
- <strong>[[Message Authentication Code (MAC) - Message Integrity Code (MIC)|MACs/MICs]]</strong> use [[Symmetric／Single／Secret Key Function|symmetric-key functions]]
	- <strong>[[Hash-Based Message Authentication Code (HMAC)|Hash-Based MACs]]</strong> use [[Secure／Keyed Cryptographic Hash Function|keyed cryptographic hash functions]]
````
^excerpt
