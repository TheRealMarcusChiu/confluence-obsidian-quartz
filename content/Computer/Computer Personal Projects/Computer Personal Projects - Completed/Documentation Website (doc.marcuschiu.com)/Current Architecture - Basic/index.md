---
title: "Current Architecture - Basic"
created: 2019-07-10T00:07:12.430-05:00
modified: 2019-07-10T00:07:51.859-05:00
parent: "[[Documentation Website (doc.marcuschiu.com)]]"
children: []
---
All code repositories are within this [github organization](https://github.com/d-log)

[Current Architecture - Detailed](http://confluence.marcuschiu.com/display/NOT/Current+Architecture+-+Detailed)
[doc.marcuschiu.com backup](http://confluence.marcuschiu.com/display/NOT/doc.marcuschiu.com+Backup)
### There are 2 modes in this Current Architecture:
- <strong>view mode</strong> - public for everyone
- <strong>edit mode</strong> - restricted to me only

<strong>Editing and Creating </strong><strong>Web Pages</strong>
anyone could view the edit console, but only I can submit the changes
- <strong>edit</strong> - double press f-key
- <strong>create</strong> - double press c-key

## View Mode Architecture
![[Current Architecture - Basic/1.jpg|681x400]]

<strong>Browser</strong>
any computer accessing [doc.marcuschiu.com](http://doc.marcuschiu.com/)

<strong>AWS Network</strong>
this network contains a single EC2 instance. This instance is a public computer running a Nginx server that handles 2 jobs: a web server and a proxy server
- web server
	- serves "blank" web pages which are to filled from data received from the API server
	- web pages are built using Angular 5
	- here's the [github repository](https://github.com/d-log/ui-store-front)
- proxy server
	- mediates all API requests between Browser and API server

<strong>Home Network</strong>
this network contains a API server and a Database
- API Server
	- exposed to the internet, but only responds to the proxy server
	- is a Spring Boot application
	- here's the [github repository](https://github.com/d-log/core-service)
- Database
	- is a MongoDB database

## Edit Mode Architecture

![[Current Architecture - Basic/2.jpg|994x250]]

<strong>My Browser</strong>
via VPN, my browser is able to contact my Home Network directly and thus edit any webpage.
