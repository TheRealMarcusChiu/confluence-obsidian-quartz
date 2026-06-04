---
title: "Secure Sockets Layer (SSL) - Transport Layer Security (TLS)"
created: 2019-03-16T22:01:51.691-05:00
modified: 2026-05-27T11:34:02.578-05:00
parent: "[[5 - Session Layer]]"
children:
  - "[[SSL／TLS - Attacks]]"
  - "[[SSL／TLS - History]]"
  - "[[SSL／TLS - How It Works]]"
  - "[[SSL／TLS - Offloading／Acceleration (Termination - Bridging)]]"
  - "[[SSL／TLS - Optimizing Handshaking]]"
  - "[[openssl]]"
---
###### SSL (and its successor, TLS)
````excerpt
- is a [[Computer Network／Networking Communication Protocols|network protocol]] that operates directly on top of [[Transmission Control Protocol (TCP)|TCP]] at the [[5 - Session Layer|session layer]], although there are also implementations for datagram-based protocols such as [[Universal／User Datagram Protocol (UDP)|UDP]]. This way, protocols on higher layers (such as [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]) can be left unchanged while still providing a secure connection.
````
^excerpt

# SSL/TLS - History
- [[SSL／TLS - History|SSL/TLS - History]]

# SSL/TLS - How It Works
- [[SSL／TLS - How It Works|SSL/TLS - How It Works]] - Comprehensive Article
- [SSL/TLS - How it Works](https://security.stackexchange.com/questions/20803/how-does-ssl-tls-work) - StackOverflow Answer
- [[SSL／TLS - Optimizing Handshaking|SSL/TLS - Optimizing Handshaking]]
- [[SSL／TLS - Offloading／Acceleration (Termination - Bridging)|SSL/TLS - Offloading/Acceleration (Termination - Bridging)]]
- [[Digital SSL／TLS Certificate|SSL/TLS - Digital Certificate]]
- [[Digital SSL／TLS Certificate - Creation Processes (Enabling HTTPS)|SSL/TLS - Digital Certificate - Creation Processes (Enabling HTTPS)]]

# SSL/TLS - Tools
- [[openssl]]
- online SSL/TLS server test - [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)

# SSL/TLS - Attacks
```dataview
LIST
FROM ""
WHERE file.folder = [[SSL／TLS - Attacks]].file.folder + "/" + [[SSL／TLS - Attacks]].file.name
```
