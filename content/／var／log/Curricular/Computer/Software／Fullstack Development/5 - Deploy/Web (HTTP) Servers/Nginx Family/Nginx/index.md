---
title: "Nginx"
created: 2019-03-16T01:50:29.537-05:00
modified: 2022-11-07T04:20:14.248-06:00
parent: "[[Nginx Family]]"
children:
  - "[[Nginx - Blocking Bots]]"
  - "[[Nginx - Configuring 2 or more HTTPS on a Single IP Address]]"
  - "[[Nginx - Configuring WebSockets]]"
  - "[[Nginx - Logs]]"
  - "[[Nginx - Proxy SSH Connections]]"
  - "[[Nginx - Rate Limiting]]"
  - "[[Nginx - Securing URLs]]"
  - "[[Nginx UI Managers]]"
---
<strong>Nginx</strong>
- is a [[Web (HTTP) Servers|HTTP server]] and [[Reverse Proxy|reverse proxy]], as well as an [[IMAP]]/[[POP3]] [[Forward Proxy (Proxy)|proxy server]]

# Installation

> [!expand]- homebrew
> <span style="white-space: pre-wrap"><code>brew install nginx</code></span>

> [!expand]- apt
> ```
> sudo apt update
> sudo apt install nginx
> ```
# Configuration

> [!expand]- homebrew
> <strong>1. The default place of nginx.conf on Mac after installing with brew is:</strong>
> <span style="white-space: pre-wrap"><code>  /usr/local/etc/nginx/nginx.conf</code></span>
>
> <strong>2. default docroot is:</strong>
> <span style="white-space: pre-wrap"><code>  /usr/local/var/www</code></span>
>
> <strong>3. to change default docroot, modify the nginx.conf</strong>
> <span style="white-space: pre-wrap"><code>  …</code><br><code>  location / {</code><br><code>   root   /RIGHT/HERE/CHANGE/TO/YOUR/DESIRED/PATH;</code><br><code>   index  index.html index.htm;</code><br><code>  }</code><br><code>  …</code></span>
>
> <strong>4. nginx will load all files in:</strong>
> <span style="white-space: pre-wrap"><code>  /usr/local/etc/nginx/servers/</code></span>

> [!expand]- display nginx.conf location and verify syntax
> <strong>display path to nginx.conf and verify its syntax</strong>
> <span style="white-space: pre-wrap"><code>nginx -t</code></span>
# Start Stop Restart

> [!expand]- homebrew
> <strong>1. start nginx</strong>
> - to have launchd start nginx now and restart at login:
>   
>   <span style="white-space: pre-wrap"><code>brew services start nginx</code></span>
> - or, if you don't want/need a background service you can just run:
>   
>   <span style="white-space: pre-wrap"><code>sudo nginx</code></span>
>
> test it by going to [http://localhost:8080](http://localhost:8080/)
>
> <strong>2. stop nginx</strong>
> <span style="white-space: pre-wrap"><code>  brew services stop nginx</code><br><code>  sudo nginx -s stop       \<— fast shutdown</code><br><code>  sudo nginx -s quit       \<— graceful shutdown</code></span>

> [!expand]- linux
> ```
> sudo service bind9 start
> sudo service bind9 stop
> sudo service bind9 restart
> sudo service bind9 status
>
> sudo systemctl start nginx
> sudo systemctl stop nginx
> sudo systemctl restart nginx
> sudo systemctl status nginx
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
