---
title: "How Do You Know if You are Behind a Symmetric NAT？"
created: 2020-06-26T15:14:28.190-05:00
modified: 2022-12-19T22:33:27.732-06:00
parent: "[[Symmetric NAT]]"
children: []
---
[[Symmetric NAT]] sucks! They prevent peer-to-peer connections!
# Introduction

When you go to [www.google.com](https://www.google.com/) from a computer, the computer sends a request through a [[Network Address Translation (NAT)]] before hitting [www.google.com](https://www.google.com/). This NAT translates the [[IPv4 - Reserved／Private IP Address|private IP address]] of the computer to the public IP address of the NAT. Additionally if the NAT is symmetric, the port number of the computer is translated to a new port number.

So how do you check if you are behind a Symmetric NAT?
# Steps

the following link returns the IP address and port number of the NAT
- [http://util.marcuschiu.com/api/my-ip-address-and-port](http://util.marcuschiu.com/api/my-ip-address-and-port)

we need to check whether the NAT keeps the same port number of the computer

we shall use [[curl]] to enforce the outbound port of the computer
```
curl http://util.marcuschiu.com/api/my-ip-address-and-port --local-port 5555
```

if the returned port number is DIFFERENT then your computer is behind a [[Symmetric NAT]]!
###### Not Behind Symmetric NAT
```
❯ curl http://util.marcuschiu.com/api/my-ip-address-and-port --local-port 5555
{"ipAddress":"17.23.45.4","port":"5555"}
```
###### Behind Symmetric NAT
```
❯ curl http://util.marcuschiu.com/api/my-ip-address-and-port --local-port 5555
{"ipAddress":"17.23.45.4","port":"4535"}
```
