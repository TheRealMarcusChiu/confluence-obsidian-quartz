---
title: "Nginx - Configuring 2 or more HTTPS on a Single IP Address"
created: 2020-06-27T23:50:16.411-05:00
modified: 2020-06-27T23:53:26.144-05:00
parent: "[[Nginx]]"
children: []
---
###### Name-based HTTPS servers

A common issue arises when configuring two or more HTTPS servers listening on a single IP address:
> <span style="white-space: pre-wrap"><code>server {</code><br><code>    listen          443 ssl;</code><br><code>    server\_name     www.example.com;</code><br><code>    ssl\_certificate www.example.com.crt;</code><br><code>    ...</code><br><code>}</code><br><code></code><br><code>server {</code><br><code>    listen          443 ssl;</code><br><code>    server\_name     www.example.org;</code><br><code>    ssl\_certificate www.example.org.crt;</code><br><code>    ...</code><br><code>}</code></span>

With this configuration a browser receives the default server’s certificate, i.e. <code>[www.example.com](http://www.example.com)</code> regardless of the requested server name. This is caused by SSL protocol behaviour. The SSL connection is established before the browser sends an HTTP request and nginx does not know the name of the requested server. Therefore, it may only offer the default server’s certificate.

The oldest and most robust method to resolve the issue is to assign a separate IP address for every HTTPS server:
> <span style="white-space: pre-wrap"><code>server {</code><br><code>    listen          192.168.1.1:443 ssl;</code><br><code>    server\_name     www.example.com;</code><br><code>    ssl\_certificate www.example.com.crt;</code><br><code>    ...</code><br><code>}</code><br><code></code><br><code>server {</code><br><code>    listen          192.168.1.2:443 ssl;</code><br><code>    server\_name     www.example.org;</code><br><code>    ssl\_certificate www.example.org.crt;</code><br><code>    ...</code><br><code>}</code></span>
