---
title: "Varnish Cache"
created: 2019-03-16T00:52:18.189-05:00
modified: 2019-11-15T18:22:16.173-06:00
parent: "[[Cache／Caching Servers]]"
children: []
---
[https://varnish-cache.org/intro/](https://varnish-cache.org/intro/)

<strong>Varnish Cache</strong> is a web application accelerator also known as a caching [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] [[Reverse Proxy|reverse proxy]]. You install it in front of any [[Web (HTTP) Servers|HTTP server]] and configure it to cache the contents.
# Installation

> [!expand]- manual
> 1. download and install from [https://varnish-cache.org/](https://varnish-cache.org/)

> [!expand]- homebrew
> <strong>1. install varnish via brew</strong>
> <span style="white-space: pre-wrap"><code>  brew install varnish</code></span>
>
> <strong>2. verify varnish was installed</strong>
> <span style="white-space: pre-wrap"><code>  which varnishd</code></span>
>
> # Start Stop Restart
> <span style="white-space: pre-wrap"><code>  brew services start varnish</code><br><code>  brew services stop varnish</code><br><code>  brew services restart varnish</code></span>

> [!expand]- apt-get
> <strong>1. install varnish via apt-get</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code><br><code>  sudo apt-get upgrade</code><br><code>  sudo apt-get install varnish</code></span>
>
> <strong>2. verify varnish was installed</strong>
> <span style="white-space: pre-wrap"><code>  which varnishd</code></span>
# Commands

> [!expand]- Start Stop Restart
> <strong>1. Or, if you don't want/need a background service you can just run:</strong>
> <span style="white-space: pre-wrap"><code>  /usr/local/sbin/varnishd -n /usr/local/var/varnish -f /usr/local/etc/varnish/default.vcl -s malloc,1G -T 127.0.0.1:2000 -a 0.0.0.0:8080 -F</code></span>
>
> - -n Specifies the name for this instance. This name is used to construct the name of the directory in which varnishd keeps temporary files and persistent state
> - -f Specifies the location of the vcl script to launch Varnish with.
> - -s Specifies storage options. The file argument stores in /tmp by default. You can specify another location with -s file,/location
> - -T Offers a command-line management interface on the specified address and port
> - -a Specifies the address and port that Varnish will run at. You can access your website through Varnish using this address and port
> - -F Do not fork, run in the foreground
