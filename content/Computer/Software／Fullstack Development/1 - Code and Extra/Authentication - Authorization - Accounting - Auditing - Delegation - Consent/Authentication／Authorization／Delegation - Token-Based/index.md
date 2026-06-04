---
title: "Authentication／Authorization／Delegation - Token-Based"
created: 2020-01-09T10:42:30.821-06:00
modified: 2023-02-19T18:03:11.019-06:00
parent: "[[Authentication - Authorization - Accounting - Auditing - Delegation - Consent]]"
children:
  - "[[Token Classes]]"
---
<strong>Token-Based Authentication</strong>
- is a method that allows users to enter their username and password in order to obtain a token that allows them to make a specific request - without using their username and password. Once their token has been obtained, the user can offer the token - which offers access to a specific resource for a time period - to the remote site

# Authentication/Authorization/Delegation Entities

> [!expand]- Click here to expand...
> ![[Authentication／Authorization／Delegation - Entities／Actors#^excerpt]]
# Token Classes

![[Token Classes#^excerpt]]
# Access Token - Pass Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Access Token Pass Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Implementation",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Pass-By-Reference",
        "bg": "#F4F5F7"
      },
      "- the standard form of an access token — without extraneous content, simply used for a client to make a protected call to the Resource Holder on behalf of the Resource Owner\n- IF the protected call is specific to a Resource Owner, then the Resource Holder requires knowledge about the Resource Owner, this binding between token and info is done by:\n\t- <strong>translating the token into a pass-by-value token</strong> (this is done at API Gateway, where it validates the pass-by-reference token against the STS and receives its corresponding pass-by-value token. The API Gateway then injects the Pass-By-Value token into the internal system where it gets passed around like hot-potato)\n\t- <strong>setup a user-session cache server</strong> (e.g. [[Redis]]) and allow the Pass-By-Reference token to be passed around the internal system. Whenever an internal service receives this token it fetches the Resource Owner's info from the user-session cache server",
      "- Standard Access Token\n- Standard [[API Keys - Authentication Tokens]]"
    ],
    [
      {
        "content": "Pass-By-Value",
        "bg": "#F4F5F7"
      },
      "- an access token that contains information about the Resource Owner",
      "- [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JSON Web Tokens (JWT)]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Access Token - Profile Types
- <strong>Holder of Key (HoK) Tokens </strong>- like a credit card, ensures that the Client presenting the token is the one it was issued to
- <strong>Bearer Tokens</strong> - like cash, do not ensure whether the Client presenting the token was actually issued it

# Access Token - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Token Type",
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
        "content": "[API Keys - Authentication Tokens](http://confluence.marcuschiu.com/display/NOT/API+Keys+-+Authentication+Tokens)",
        "bg": "#F4F5F7"
      },
      "- secret key/token always traveling with a request\n- usually opaque (i.e. pass by reference) cannot contain any meaningful data"
    ],
    [
      {
        "content": "WS-Security Tokens (esp [[Security Assertion Markup Language (SAML) Tokens|SAML Tokens]])",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Legacy Tokens",
        "bg": "#F4F5F7"
      },
      "- those issued by a Web Access Management System (WAMS)"
    ],
    [
      {
        "content": "OAuth Access Tokens",
        "bg": "#F4F5F7"
      },
      "- [[Open Authorization (OAuth)|OAuth]] is basically a way to separate the Authentication Process from the Access to the Resource and therefore limit the exposure of the credentials"
    ],
    [
      {
        "content": "[JSON Web Tokens (JWT)](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=328392)",
        "bg": "#F4F5F7"
      },
      "- used in OpenID Connect as an [[ID Token]] implementation\n- ability to be transparent (i.e. pass by value) allows data to be embedded within the token itself, such as who logged in, what kind of credential was used, when login occurred, was SSO cookie used, or did the user login afresh, various attributes/claims about the user (e.g., first name, last name, customer number, etc.)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources![](https://www.youtube.com/watch?v=tj03NRM6SP8&ab_channel=NordicAPIs)![](https://www.youtube.com/watch?v=9CJ_BAeOmW0&ab_channel=Devoxx)
