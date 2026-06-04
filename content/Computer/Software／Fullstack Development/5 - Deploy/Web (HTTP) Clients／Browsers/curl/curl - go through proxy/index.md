---
title: "curl - go through proxy"
created: 2020-01-06T15:36:32.386-06:00
modified: 2020-01-06T15:42:30.789-06:00
parent: "[[curl]]"
children: []
---
making [[curl]] requests through a [[Proxy (Forward／Reverse Proxy Chains)|proxy]]
# <strong>CLI Option</strong>
###### syntax
```bash
-x, --proxy <[protocol://][user:password@]proxyhost[:port]>
```
###### example
```bash
curl -x http://localhost:8080/ http://www.google.com/
```
# <strong>Setting Environment Variable</strong>
###### HTTP Proxy
```bash
export http_proxy=http://your.proxy.server:port/
export HTTP_PROXY=http://your.proxy.server:port/
```
###### HTTPS Proxy
```bash
export https_proxy=https://your.proxy.server:port/
export HTTPS_PROXY=https://your.proxy.server:port/
```
