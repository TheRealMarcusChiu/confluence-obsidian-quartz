---
title: "Nginx - Configuring WebSockets"
created: 2020-06-28T14:25:50.844-05:00
modified: 2020-06-29T18:41:12.599-05:00
parent: "[[Nginx]]"
children: []
---
add the following into the server block:
> \# necessary stuff for websockets
> proxy\_http\_version 1.1;
> proxy\_set\_header Upgrade \$http\_upgrade;
> proxy\_set\_header Connection "Upgrade";
> 
> \# extras?
> proxy\_set\_header Host \$host;
> proxy\_read\_timeout 86400;
- first line tells [[Nginx]] to use [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP/1.1]] when communicating to the Node backend, which is required for [[WebSockets]]
- next two tell Nginx to respond to the Upgrade request which is initiated over HTTP by the browser when it wants to use a WebSocket

### Example Server Block
```
server {
    listen 8080;
    server_name chat.marcuschiu.com;

    location / {
        proxy_pass http://192.168.0.2:8080;
		
		# necessary stuff for websockets
	    proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";

		# extras?
        proxy_set_header Host $host;
        proxy_read_timeout 86400;
    }
}
```
