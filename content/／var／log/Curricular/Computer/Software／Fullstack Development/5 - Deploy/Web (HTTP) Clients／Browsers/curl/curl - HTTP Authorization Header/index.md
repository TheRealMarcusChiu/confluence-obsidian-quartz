---
title: "curl - HTTP Authorization Header"
created: 2020-01-06T17:35:22.668-06:00
modified: 2020-01-06T17:45:46.175-06:00
parent: "[[curl]]"
children: []
---
related: [[HTTP - Headers - WWW-Authenticate & Authorization]]
### Basic Scheme
```bash
curl --user "user-id:password" http://www.google.com -v
> ...
> Authorization: Basic dXNlci1pZDpwYXNzd29yZA==
> ...
```
### Digest Scheme
```bash
curl --user "user-id:password" --digest http://www.google.com -v
> ...
# Authorization Header not present in HTTP Request
```
### Bearer Scheme
```bash
curl --oauth2-bearer "BEARER_TOKEN" http://www.google.com -v
> ...
> Authorization: Bearer BEARER_TOKEN
> ...
```
