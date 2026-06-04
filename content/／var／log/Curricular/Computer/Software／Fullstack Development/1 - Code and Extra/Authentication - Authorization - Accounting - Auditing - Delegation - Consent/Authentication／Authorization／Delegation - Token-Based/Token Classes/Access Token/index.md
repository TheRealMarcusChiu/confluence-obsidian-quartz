---
title: "Access Token"
created: 2020-01-09T22:24:04.227-06:00
modified: 2020-01-09T22:25:14.404-06:00
parent: "[[Token Classes]]"
children: []
---
<strong>Access Token</strong> is a credential used to access protected resources. It represents specific scopes and durations of access, granted by the resource owner, and enforced by the resource server and authorization.

[[Open Authorization (OAuth)|OAuth 2.0]] supports a number of access token types, the type used by [[OpenID Connect (OIDC)|OpenID Connect]] are bearer tokens which can be simply understood as meaning “give access to the bearer of this token”.

Access tokens can have different formats, structures, and methods of utilization based on the resource server security requirements. However they are represented as a string the structure of which is usually opaque to the client. An example of a returned access token is given below:
```
access_token=jHkWEdUXMU1BwAsC4vtUsZwnNvTIxEl0z9K3vx5KF0Y
```
