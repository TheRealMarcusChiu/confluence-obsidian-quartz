---
title: "Refresh Token"
created: 2020-01-09T22:25:21.396-06:00
modified: 2026-01-09T17:19:27.470-06:00
parent: "[[Token Classes]]"
children: []
---
###### Refresh Token
````excerpt
- is a credential used to obtain access tokens. Refresh tokens are issued to the client by the authorization server and are used to obtain a new access token when the current one becomes invalid or expires, or to obtain additional access tokens with identical or narrower scope
- unlike access tokens, refresh tokens are intended for use only with authorization servers and are never sent to resource servers
- as for access tokens a refresh token is represented as a string that is usually opaque to the client
````
^excerpt

# Refresh Token - Example
```
refresh_token=9yNOxJtZa5
```
