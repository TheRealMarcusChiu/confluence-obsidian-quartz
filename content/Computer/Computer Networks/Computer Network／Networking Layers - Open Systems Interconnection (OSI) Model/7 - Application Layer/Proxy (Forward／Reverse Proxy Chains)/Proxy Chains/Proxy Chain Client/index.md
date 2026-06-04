---
title: "Proxy Chain Client"
created: 2019-03-16T22:10:01.533-05:00
modified: 2019-03-16T22:10:10.498-05:00
parent: "[[Proxy Chains]]"
children: []
---
[https://github.com/rofl0r/proxychains-ng](https://github.com/rofl0r/proxychains-ng)

<strong>1. install proxychains</strong>
<span style="white-space: pre-wrap"><code>  sudo apt-get install proxychains</code></span>

This will create a file in /etc/proxychains.conf
<span style="white-space: pre-wrap"><code>  brew install proxychains-ng</code></span>

This will create a file in /usr/local/etc/proxychains.conf

<strong>2. verify proxychains been downloaded</strong>
<span style="white-space: pre-wrap"><code>  which proxychains</code><br><code>  proxychains -—help</code></span>

<strong>3. proxychains looks for config file in the following order</strong>
<span style="white-space: pre-wrap"><code>  ./proxychains.conf</code><br><code>  \$(HOME)/.proxychains/proxychains.conf</code><br><code>  /etc/proxychains.conf</code></span>

- optional, proxychains.conf default uses tor, so start tor
	- tor
	- brew services start tor
	- service tor start

<strong>4. example standard use</strong>
<span style="white-space: pre-wrap"><code>  proxychains firefox [duckduckgo.com](http://duckduckgo.com/)</code></span>

This will run firefox through the proxy(or chained proxies) specified in the proxychains.conf

<strong>5. In OSX 10.11 - turn off debug flag in SIP in recovery mode</strong>
<span style="white-space: pre-wrap"><code>  csrutil enable --without debug</code></span>
