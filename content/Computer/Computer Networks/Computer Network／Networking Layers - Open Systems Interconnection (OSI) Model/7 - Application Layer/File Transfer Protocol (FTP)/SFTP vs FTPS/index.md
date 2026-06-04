---
title: "SFTP vs FTPS"
created: 2019-08-23T22:15:23.980-05:00
modified: 2019-08-23T22:16:02.070-05:00
parent: "[[File Transfer Protocol (FTP)]]"
children: []
---
An increasing number of our customers are looking to move away from standard FTP for transferring data, so we are often asked which secure FTP protocol we recommend. In the next few paragraphs, we will explain what options are available and their main differences.

The two mainstream protocols available for Secure FTP transfers are named SFTP (FTP over SSH) and FTPS (FTP over SSL). Both SFTP and FTPS offer a high level of protection since they implement strong algorithms such as AES and Triple DES to encrypt any data transferred. Both options also support a wide variety of functionality with a broad command set for transferring and working with files. So the most notable differences between SFTP and FTPS is how connections are authenticated and managed.

<strong>Authentication: SFTP vs. FTPS</strong>

With SFTP (FTP over SSH), a connection can be authenticated using a couple different techniques. For basic authentication, you (or your trading partner) may just require a user id and password to connect to the SFTP server. It's important to note that any user ids and passwords supplied over the SFTP connection will be encrypted, which is a big advantage over standard FTP.

SSH keys can also be used to authenticate SFTP connections in addition to, or instead of, passwords. With key-based authentication, you will first need to generate a SSH private key and public key beforehand. If you need to connect to a trading partner's SFTP server, you would send your SSH public key to them, which they will load onto their server and associate with your account. When you connect to their SFTP server, your client software will transmit your public key to the server for authentication. If the keys match, along with any user/password supplied, then the authentication will succeed.

With FTPS (FTP over SSL), a connection is authenticated using a user id, password and certificate(s). Like SFTP, the users and passwords for FTPS connections will also be encrypted. When connecting to a trading partner's FTPS server, your FTPS client will first check if the server's certificate is trusted. The certificate is considered trusted if either the certificate was signed off by a known certificate authority (CA), like Verisign, or if the certificate was self-signed (by your partner) and you have a copy of their public certificate in your trusted key store.

Your partner may also require that you supply a certificate when you connect to them. Your certificate may be signed off by a 3rd party CA or your partner may allow you to just self-sign your certificate, as long as you send them the public portion of your certificate beforehand (which they will load in their trusted key store).

<strong>Implementation: SFTP vs. FTPS</strong>

In regards to how easy each of the secure FTP protocols are to implement, SFTP is the clear winner since it is very firewall friendly. SFTP only needs a single port number (default of 22) to be opened through the firewall. This port will be used for all SFTP communications, including the initial authentication, any commands issued, as well as any data transferred.

On the other hand, FTPS can be very difficult to patch through a tightly secured firewall since FTPS uses multiple port numbers. The initial port number (default of 21) is used for authentication and passing any commands. However, every time a file transfer request (get, put) or directory listing request is made, another port number needs to be opened. You and your trading partners will therefore have to open a range of ports in your firewalls to allow for FTPS connections, which can be a security risk for your network.

In summary, SFTP and FTPS are both very secure with strong authentication options. However since SFTP is much easier to port through firewalls, and we are seeing an increasing percentage of trading partners adopting SFTP, we believe SFTP is the clear winner for your secure FTP needs.
