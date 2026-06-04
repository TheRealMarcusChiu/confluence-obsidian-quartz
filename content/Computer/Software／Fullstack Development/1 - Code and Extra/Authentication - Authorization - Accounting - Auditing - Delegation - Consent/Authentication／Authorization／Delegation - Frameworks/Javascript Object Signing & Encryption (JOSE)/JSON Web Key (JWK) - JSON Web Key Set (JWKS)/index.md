---
title: "JSON Web Key (JWK) - JSON Web Key Set (JWKS)"
created: 2020-01-08T22:28:03.862-06:00
modified: 2022-12-30T13:48:15.012-06:00
parent: "[[Javascript Object Signing & Encryption (JOSE)]]"
children: []
---
````excerpt
- <strong>JSON Web Key (JWK) </strong>- a JSON object that contains a [[Asymmetric／Two／Public-Private Key Function|public/cryptographic key]] that is used to verify the signature of a [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JWT]] issued by the [[Security Tokens Service (STS)|STS]]
- <strong>JSON Web Key Set (JWKS) </strong>- a JSON object containing a SET of JWKs
````
^excerpt

# Example JWKS
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
		},
		{
			...
		},
		...
	]
}
```
- <strong>kty</strong> – Key Type – Identifies the family of algorithms used with this key
- <strong>kid</strong> – Key Identifier – Acts as an ‘alias’ for the key
- <strong>use</strong> – Usage – ‘sig’ for signing keys, ‘enc’ for encryption keys
- <strong>alg</strong> – Algorithm – Identifies the specific algorithm
- <strong>n</strong> & <strong>e</strong> - both used to create an RSA public-key:
	- modulo (n)
	- exponent (e)
- <strong>x5t</strong> – [[X.509 and PKIX|X.509 Certificate]] Thumbprint – Used to identify specific certificates
- <strong>x5c</strong> – X.509 Certificate Chain – Chain of certificates used for verification. The first entry in the array is always the cert to use for token verification. The other certificates can be used to verify this first certificate
