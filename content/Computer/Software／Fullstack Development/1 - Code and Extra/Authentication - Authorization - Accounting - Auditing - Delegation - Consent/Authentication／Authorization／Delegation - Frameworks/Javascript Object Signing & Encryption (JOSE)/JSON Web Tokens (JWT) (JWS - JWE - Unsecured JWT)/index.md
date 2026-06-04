---
title: "JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)"
created: 2019-03-16T00:46:44.758-05:00
modified: 2026-01-09T16:24:41.452-06:00
parent: "[[Javascript Object Signing & Encryption (JOSE)]]"
children:
  - "[[JWT - JSON Web Encryption (JWE) Structure]]"
  - "[[JWT - JSON Web Signature (JWS) Structure]]"
  - "[[JWT - Use Cases]]"
---
###### JSON Web Token (JWT)
````excerpt
- is a [[JavaScript Object Notation (JSON)|JSON]] object containing a claim, which is to be transferred between parties
- usually used in conjunction with [[Open Authorization (OAuth)|OAuth]]/[[OpenID Connect (OIDC)|OIDC]]
````
^excerpt

- is an implementation of [[Javascript Object Signing & Encryption (JOSE)|JOSE]]

# JWT - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[JWT - JSON Web Signature (JWS) Structure|JSON Web Signature (JWS)]]",
        "bg": "#F4F5F7"
      },
      "- for [[Digital Signatures|signing]] claims"
    ],
    [
      {
        "content": "[[JWT - JSON Web Encryption (JWE) Structure|JSON Web Encryption (JWE)]]",
        "bg": "#F4F5F7"
      },
      "- for [[Encryption|encrypting]] claims"
    ],
    [
      {
        "content": "Unsecured JWT",
        "bg": "#F4F5F7"
      },
      "- a JWS with no signature"
    ]
  ]
}
```
# JWT - Use Cases

![[JWT - Use Cases#^excerpt]]
