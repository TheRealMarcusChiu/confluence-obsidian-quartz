---
title: "Extensible Authentication Protocol (EAP)"
created: 2019-11-13T10:41:33.674-06:00
modified: 2019-12-03T22:32:12.713-06:00
parent: "[[Authentication Frameworks]]"
children: []
---
### EAP Methods/Alternatives
###### EAP-TLS
- [[Authentication Protocols - Mutual／2-Way|mutual authentication]] using [[Asymmetric／Two／Public-Private Key Function|public key]] certificates between user and [[Remote Authentication Dial-In User Service (RADIUS)|authentication server (RADIUS)]]
- establishes encrypted [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|TLS]] session between the two

###### Protected EAP (PEAP)
- 2 stages
- [[Remote Authentication Dial-In User Service (RADIUS)|RADIUS server]] authenticates itself using certificates
- user can use some other method available in EAP

###### Lightweight EAP (LEAP)
- Cisco proprietary EAP
- enables [[Authentication Factor - Password Based - Static Password／Passwords|password based authentication]] for user
