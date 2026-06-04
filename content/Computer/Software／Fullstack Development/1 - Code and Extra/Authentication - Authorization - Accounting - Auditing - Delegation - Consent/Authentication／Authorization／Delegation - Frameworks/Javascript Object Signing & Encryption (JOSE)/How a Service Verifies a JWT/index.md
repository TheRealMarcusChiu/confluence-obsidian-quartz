---
title: "How a Service Verifies a JWT"
created: 2020-01-08T22:16:14.591-06:00
modified: 2022-12-30T13:52:29.158-06:00
parent: "[[Javascript Object Signing & Encryption (JOSE)]]"
children: []
---
The internal JWT is signed by a private key that only the [[Security Tokens Service (STS)|Security Token Service (STS)]] or more specifically, the [[Open Authorization (OAuth)|OAuth]]/[[OpenID Connect (OIDC)|OIDC]] server).

A signed JWT (i.e. [[JWT - JSON Web Signature (JWS) Structure|JWS]]) consists of 3 parts:
- header
- payload
- signature

The services validate it like this:
1. The JWT includes an issuer in the payload. The issuer is a URL of the OAuth server (e.g., my test machine has an issuer ID of [https://localhost:8443/dev/oauth/anonymous](https://localhost:8443/dev/oauth/anonymous). (According to OAuth, it can be any value, but then it makes the system harder to connect in the loosely coupled fashion described below. OpenID Connect mandates it to be a URL)
2. The header (usually) has a key ID. Here's one from the same server:
    ```
    {
    	"kid": "-38074812",
    	"x5t": "MR-pGTa866RdZLjN6Vwrfay907g",
    	"alg": "RS256"
    }
    ```
3. If my microservice doesn't have a key that matches that ID (kid means Key ID), then it'll make a request to the issuer URI + some well-known URI. This isn't defined for OAuth, but OIDC defines it to be ".well-known/openid-configuration". So, for my test machine, it's [https://localhost:8443/dev/oauth/anonymous/.well-known/openid-configuration](https://localhost:8443/dev/oauth/anonymous/.well-known/openid-configuration)
4. The resource at this URL is a JSON document, and one of the topmost values is jwks\_uri. This is another URL that the microservice can fetch. On my test machine, the value is [https://localhost:8443/dev/oauth/anonymous/jwks](https://localhost:8443/dev/oauth/anonymous/jwks)
5. The microservice fetches this JWKS URI and finds something like this:
    ```
    {
    	"keys": [
    		{
    			"kty": "RSA",
    			"kid": "-38074812",
    			"use": "sig",
    			"alg": "RS256",
    			"n": "yMAHZiIfbAgmZJ-_4Gj-wdS8rvaKNBbnHz_krmd-kkX51bA1EsUc0CN672-xnUb_-E_u_GoWhJzdjiBuz9XasSfQK8WyAwbc7MLkw40A7Zxl2sfsxGTod3qi1u8mjguoc9CbVqPdYe_9YPVxoK4CeJz6V8AsPcxVJxYq6os1rI9qFx_6a1JdQEhetGtkHLFvwo80UTzKXKhGXSu96WrXnkDE8Kw5TSKvh2gI_BX4QHXjE82xldJRJ8QIXGpRNbdyzGkUdjsrhmZl3ARC9IUlxmowkcEEIzjfbOKBVGrVcJ7rHb0GYNaKtMB_MlH1uAPDxl6qKeXOAZ8YEZ1r0ToPw",
    			"e": "AQAB",
    			"x5t": "MR-pGTa866RdZLjN6Vwrfay907g"
    		}
    	]
    }
    ```
	- kty – Key Type – Identifies the family of algorithms used with this key
	- alg – Algorithm – Identifies the specific algorithm
	- use – Usage – ‘sig’ for signing keys, ‘enc’ for encryption keys
	- x5t – X.509 Certificate Thumbprint – Used to identify specific certificates
	- kid – Key Identifier – Acts as an ‘alias’ for the key
	- x5c – X.509 Certificate Chain – Chain of certificates used for verification. The first entry in the array is always the cert to use for token verification. The other certificates can be used to verify this first certificate

  See the kid? It matches the one that's in the JWT!
6. So, now, the microservice can use the modulo (n) and the exponent (e) to create an RSA public key
7. The JWT then says in the header to use RSA-256 to sign the payload. Doing that, the result should match the included signature

If that is OK, then the microservice should check a few other things:
1. If the audience (aud claim) claim is included, then it is a string that refers to the API, or if it's an array that its audience is in that array. The microservice should reject the JWT if the aud claim is missing
2. That the token was not issued in the future (iat claim) -- possibly with some small skew to allow for unsynchronized clocks
3. Check if the token has a purpose (purpose or typ claim usually) that is access\_token. If this isn't included, reject the token unless your STS doesn't include this (which it should but isn't required to)
4. Check if the token has an authentication time (auth\_time) claim, and if so, it's in the past -- possibly with a slight skew. Most times, an API's access token won't have this. It's OK
5. Ensure that the token has an expiration time (the exp claim) and that it's in the future -- possibly with a slight skew
6. See if the token has a not-before claim (nbf) and that the current time is not before that time -- possibly with a slight skew

To help you picture steps 1 - 6, here's an example of a JWT I got from that test machine:
```
eyJraWQiOiItMzgwNzQ4MTIiLCJ4NXQiOiJNUi1wR1RhODY2UmRaTGpONlZ3cmZheTkwN2ciLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJQJDhhNDNhNGY2LWQ3YjItNGRiOS1iN2RkLTU4MDAxMjA2NzcyZSIsImRlbGVnYXRpb25JZCI6IjY1ZGUwN2EwLTAwZDUtNGYyNy04Mzc5LWM5ZGVlMDU3YjkwOSIsImV4cCI6MTUxMTkwMTIxMiwibmJmIjoxNTExOTAwOTEyLCJzY29wZSI6InJlYWQgb3BlbmlkIHdyaXRlIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9kZXYvb2F1dGgvYW5vbnltb3VzIiwic3ViIjoidGVkZGllIiwiYXVkIjpbImNsaWVudC1vbmUiLCJhdWRpZW5jZTIiXSwiaWF0IjoxNTExOTAwOTEyLCJwdXJwb3NlIjoiYWNjZXNzX3Rva2VuIn0.Y6qwCL1kr36eR12uuUlDzVTlbi5WF9DEleFNdSsN_f0UJqOTiQEBuo630sDkN5DdwNKTatKy2buzt1Yn4o3FOGH1xopoycKsREFuUtWmPtZmDK70wHKueJBOVtJ4inLWx4dInaHkNOIaOKLgSz0j-n1g0F5t1oJIUyxOonMpNUNuLKY1E1kVNcC6DiMsj-sbJzyCh6u4gJ21r9Zkjo-UCJWiu2MklzLhK7lB1Z5T5SBr-EvzgQhcTUhPs40CiqygsqeJbM1gU7yeNcG6eE461LrqvkrnhRNP1VCrupDDyqOazeMLoDCCScu5cRKFpgPTarjwTY7KLK7YM8Bxy3B0FQ
```

If you look at the payload, you'll find this:
```
{
	"jti": "P$8a43a4f6-d7b2-4db9-b7dd-58001206772e",
	"delegationId": "65de07a0-00d5-4f27-8379-c9dee057b909",
	"exp": 1511901212,
	"nbf": 1511900912,
	"scope": "read openid write",
	"iss": "https://localhost:8443/dev/oauth/anonymous",
	"sub": "teddie",
	"aud": [
		"client-one",
		"audience2"
	],
	"iat": 1511900912,
	"purpose": "access_token"
}
```

Notice that the JWT also has an x5t claim in the header. That's the thumbprint of the STS's X.509 certificate (which it might not even have if a PKI isn't in use). If the microservice has this cert (e.g., through a PKI or integration with a CA), it can use that to verify the signature in step 7.

The fetching of the JWKS is usually done at the boot-up of the microservice and cached. If it gets a cache miss (e.g., because the STS rolled its keys), the API will do the call and update its cache of keys. This ensures that the call need not be made very often. It will probably cache the creation of the public key (as an object in your programming language of choice).
