---
title: "Security Assertion Markup Language (SAML) Tokens"
created: 2019-12-13T11:15:24.803-06:00
modified: 2022-12-30T14:21:41.554-06:00
parent: "[[Authentication／Authorization／Delegation - Frameworks]]"
children: []
---
<strong>Security Assertion Markup Language (SAML</strong><strong>)</strong>
````excerpt
- is an [[Extensible Markup Language (XML)|XML]]-based framework for [[Authentication - Authorization - Accounting - Auditing - Delegation - Consent|authentication and authorization]]
- has multiple authentication methods (e.g. Single-Sign-On (SSO) across multiple sites)
````
^excerpt

# Introduction
![](https://www.youtube.com/watch?v=l-6QSEqDJPo)
# Authentication Entities

> [!expand]- Click here to expand...
> ![[Authentication／Authorization／Delegation - Entities／Actors#^excerpt]]
# Authentication Process

The information sent from <font style="color: rgb(255,0,0);"><strong>Identity-Provider</strong></font> to <strong>User</strong> is known as an assertion.
###### Flow 1 - Service Provider Initiated (SP-Initiated) SSO

```merge-table
{
  "rows": [
    [
      "![[Security Assertion Markup Language (SAML) Tokens/saml-flow-diagram.png|399x250]]",
      "1. the <strong>User</strong> tries to log in to <font style=\"color: rgb(51,102,255);\"><strong>Service-Provider</strong></font> from a browser\n2. <font style=\"color: rgb(51,102,255);\"><strong>Service-Provider</strong></font> responds by generating a SAML request\n3. the browser redirects the <strong>User</strong> to an SSO (Single-Sign On) URL, <font style=\"color: rgb(255,0,0);\"><strong>Identity-Provider</strong></font>\n4. <font style=\"color: rgb(255,0,0);\"><strong>Identity-Provider</strong></font> parses the SAML request, authenticates the <strong>User</strong> (this could be via username and password or even a two-factor authentication; if the <strong>User</strong> is already authenticated on <font style=\"color: rgb(255,0,0);\"><strong>Identity-Provider</strong></font>, this step will be skipped) and generates a SAML response\n5. <font style=\"color: rgb(255,0,0);\"><strong>Identity-Provider</strong></font> returns the encoded SAML response to the browser\n6. the browser sends the SAML response to <font style=\"color: rgb(51,102,255);\"><strong>Service-Provider</strong></font> for verification\n7. if the verification is successful, the <font style=\"color: rgb(0,51,102);\"><strong>User</strong></font> will be logged in to <font style=\"color: rgb(51,102,255);\"><strong>Service-Provider</strong></font> and granted access to all the various resources"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
###### Flow 2 - Identity Provider Initiated (IdP-Initiated) SSO

```merge-table
{
  "rows": [
    [
      "TODO",
      "see:"
    ]
  ]
}
```
