---
title: "Security Tokens Service (STS)"
created: 2020-01-09T09:47:45.632-06:00
modified: 2022-12-30T13:37:43.207-06:00
parent: "[[Javascript Object Signing & Encryption (JOSE)]]"
children: []
---
###### Security Tokens Service (STS)
````excerpt
- also referred to as [[Open Authorization (OAuth)|OAuth]] Server or [[OpenID Connect (OIDC)|OIDC]] Provider
- STS issues/generates [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JWTs]] which are signed and/or encrypted by its own [[Asymmetric／Two／Public-Private Key Function|private-key]]
- other entities, upon receiving a JWT can verify its signature by using STS's [[Asymmetric／Two／Public-Private Key Function|public-key]]
- STS exposes this public-key via a [[JSON Web Key (JWK) - JSON Web Key Set (JWKS)|JWKS]] endpoint (e.g. <code>[https://STS-DOMAIN.com/.well-known/jwks.json](https://your_domain/.well-known/jwks.json))</code> that returns a set of [[JSON Web Key (JWK) - JSON Web Key Set (JWKS)|JWKs]]
````
^excerpt
