---
title: "SSL／TLS - Offloading／Acceleration (Termination - Bridging)"
created: 2020-01-31T20:35:43.480-06:00
modified: 2020-01-31T21:40:50.195-06:00
parent: "[[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)]]"
children: []
---
<strong>SSL/TLS Offloading</strong> works by moving the SSL/TLS processing from the main Web Server to another SSL/TLS device (e.g. application delivery controller) that is optimized to process this data as quickly as possible. This device processes both the SSL/TLS encryption and decryption – two tasks that typically bog down the main Web Server. The encryption and decryption process faster than they would on your original Web server
## <strong>Types of SSL Offloading</strong>
- <strong>client </strong>- is usually a browser which can communicate in SSL/TLS
- <strong>web server</strong> - is a computer that can satisfy a client's request, with ability to communicate in SSL/TLS
- <strong>application delivery controller</strong> - is a computer network device in a datacenter, often part of an application delivery network, that helps perform common tasks (e.g. SSL/TLS processing), such as those done by web accelerators to remove load from the web servers themselves

### Without SSL Offloading
![[SSL／TLS - Offloading／Acceleration (Termination - Bridging)/ssl-offloading-without.png|600]]
### SSL Termination
![[SSL／TLS - Offloading／Acceleration (Termination - Bridging)/ssl-offloading-termination.png|600]]
### SSL Bridging
![[SSL／TLS - Offloading／Acceleration (Termination - Bridging)/ssl-offloading-bridging.png|600]]

the purpose of SSL bridging is to perform extra checks on the data to ensure that there is no malware included. The process includes decrypting the incoming data, inspecting it for any malicious code, and then re-encrypting it and sending it on to the web server. Obviously, this form of offloading is meant to increase security rather than relieve the web server of processing activities
