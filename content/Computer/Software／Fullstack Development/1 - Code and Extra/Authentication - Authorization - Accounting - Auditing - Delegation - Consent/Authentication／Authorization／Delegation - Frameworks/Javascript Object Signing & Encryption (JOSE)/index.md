---
title: "Javascript Object Signing & Encryption (JOSE)"
created: 2020-01-08T17:11:52.482-06:00
modified: 2022-12-30T13:47:24.390-06:00
parent: "[[Authentication／Authorization／Delegation - Frameworks]]"
children:
  - "[[How a Service Verifies a JWT]]"
  - "[[JSON Web Algorithms (JWA)]]"
  - "[[JSON Web Key (JWK) - JSON Web Key Set (JWKS)]]"
  - "[[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)]]"
  - "[[Security Tokens Service (STS)]]"
---
###### Javascript Object Signing and Encryption (JOSE)
- is a framework intended to provide a method to securely transfer claims (such as authorization information) between parties

# JOSE Suite

```merge-table
{
  "rows": [
    [
      {
        "content": "[[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JSON Web Token (JWT)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)#^excerpt]]"
    ],
    [
      {
        "content": "[[JSON Web Key (JWK) - JSON Web Key Set (JWKS)|JSON Web Key (JWK)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "![[JSON Web Key (JWK) - JSON Web Key Set (JWKS)#^excerpt]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[JSON Web Key (JWK) - JSON Web Key Set (JWKS)|JSON Web Key Set (JWKS)]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[JSON Web Algorithms (JWA)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[JSON Web Algorithms (JWA)#^excerpt]]"
    ],
    [
      {
        "content": "[[Security Tokens Service (STS)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Security Tokens Service (STS)#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Putting it All Together
- [[How a Service Verifies a JWT]]

# Code Frameworks
- Java - [https://github.com/java-code-examples/json-web-token-example](https://github.com/java-code-examples/json-web-token-example)
