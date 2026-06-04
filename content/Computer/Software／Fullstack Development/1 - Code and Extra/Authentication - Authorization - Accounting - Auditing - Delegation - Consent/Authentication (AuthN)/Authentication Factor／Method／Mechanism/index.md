---
title: "Authentication Factor／Method／Mechanism"
created: 2020-05-19T13:15:18.919-05:00
modified: 2022-09-21T23:28:30.232-05:00
parent: "[[Authentication (AuthN)]]"
children:
  - "[[Authentication Factor - One Time Password (OTP) - PIN - Authorization Code (OTAC) - Dynamic Password／Passwords]]"
  - "[[Authentication Factor - Password Based - Static Password／Passwords]]"
  - "[[Authentication Factor - Password as Cryptographic Key]]"
  - "[[Authentication Factor - Single vs Multi]]"
---
###### Authentication Factor/Method/Mechanism
- is how one verifies the identity to another party

# Authentication Factor - Categories
- knowledge factors
- possession factors
- inherence factors
- location factors
- behavior factors
- etc

# Authentication Factor - Methods/Mechanisms

non-cryptographic
- [[Authentication Factor - Password Based - Static Password／Passwords|password based]]
- [[Authentication Factor - Password as Cryptographic Key|password as cryptographic key]]
- [[IPv4 - Address|IP Address]] based
- biometric based

cryptographic (when there are multiple keys maybe consider incorporating [[Trusted Intermediaries (TI) - Trusted Third Party (TTP)|Trusted Intermediaries]])
- [secret-key](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=2656235) based
- [[Secure／Keyed Cryptographic Hash Function|secure/keyed cryptographic hash function]] based
- [[Asymmetric／Two／Public-Private Key Function|public/private-key]] based
- [[Authentication／Authorization／Delegation - Token-Based|token based]] - usually incorporating any of the above 3 cryptographic methods

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
