---
title: "Authentication／Authorization／Delegation - Frameworks"
created: 2020-01-09T11:57:00.814-06:00
modified: 2026-01-09T16:10:27.435-06:00
parent: "[[Authentication - Authorization - Accounting - Auditing - Delegation - Consent]]"
children:
  - "[[Auth0 (zero)]]"
  - "[[Central Authentication Server (CAS)]]"
  - "[[FreeIPA]]"
  - "[[Javascript Object Signing & Encryption (JOSE)]]"
  - "[[Light-Weight／Lightwieght Directory Access Protocol (LDAP)]]"
  - "[[OAuth & OpenID Connect]]"
  - "[[Remote Authentication Dial-In User Service (RADIUS)]]"
  - "[[Security Assertion Markup Language (SAML) Tokens]]"
  - "[[Simple Web Tokens (SWT)]]"
---
# Frameworks

```merge-table
{
  "rows": [
    [
      {
        "content": "Framework",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Authentication",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Authorization",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Accounting",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Central Authentication Server (CAS)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">x</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><font style=\"color: rgb(51,153,102);\">✓</font></font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "![[Central Authentication Server (CAS)#^excerpt]]"
    ],
    [
      {
        "content": "[[Remote Authentication Dial-In User Service (RADIUS)|Remote Authentication Dial-In User Service (RADIUS)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "![[Remote Authentication Dial-In User Service (RADIUS)#^excerpt]]"
    ],
    [
      {
        "content": "[[Light-Weight／Lightwieght Directory Access Protocol (LDAP)|Lightweight Directory Access Protocol (LDAP)]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      },
      "![[Light-Weight／Lightwieght Directory Access Protocol (LDAP)#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Delegation Protocol Frameworks

```merge-table
{
  "rows": [
    [
      {
        "content": "Frameworks",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Delegated Authentication",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Delegated Authorization",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Open Authorization (OAuth)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">x</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "![[Open Authorization (OAuth)#^excerpt]]"
    ],
    [
      {
        "content": "[[OpenID Connect (OIDC)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><font style=\"color: rgb(51,153,102);\">✓</font></font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "![[OpenID Connect (OIDC)#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Token-Based Protocol Frameworks

```merge-table
{
  "rows": [
    [
      {
        "content": "Token-Based Frameworks",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Authentication",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Authorization",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Data Language & Library (Message／Transfer／Interchange／Storage／Format／Serializer／Deserializer)|Data Format]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">x</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\"><font style=\"color: rgb(255,0,0);\">x</font></font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "[[Representational State Transfer (REST) - RESTful|REST]]",
        "align": "center"
      },
      {
        "content": "[[JavaScript Object Notation (JSON)|JSON]]",
        "align": "center"
      },
      "![[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)#^excerpt]]"
    ],
    [
      {
        "content": "[[Simple Web Tokens (SWT)]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "content": "[[Representational State Transfer (REST) - RESTful|REST]]",
        "align": "center"
      },
      {
        "align": "center"
      },
      "![[Simple Web Tokens (SWT)#^excerpt]]"
    ],
    [
      {
        "content": "[[Security Assertion Markup Language (SAML) Tokens|Security Assertion Markup Language Tokens (SAML)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "[[Simple Object Access Protocol (SOAP)|SOAP]]",
        "align": "center"
      },
      {
        "content": "[[Extensible Markup Language (XML)|XML]]",
        "align": "center"
      },
      "![[Security Assertion Markup Language (SAML) Tokens#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# SaaS Organizations

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Cloud Computing／Service Models／Platforms (SaaS - FaaS - PaaS - IaaS - MaaS - PC)|SaaS]] Framework",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Authentication",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Authorization",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Accounting",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Auth0 (zero)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">✓</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "![[Auth0 (zero)#^excerpt]]"
    ],
    [
      {
        "content": "Okta",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
