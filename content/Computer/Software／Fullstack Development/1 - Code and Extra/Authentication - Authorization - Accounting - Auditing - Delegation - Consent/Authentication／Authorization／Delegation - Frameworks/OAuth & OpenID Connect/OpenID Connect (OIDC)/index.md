---
title: "OpenID Connect (OIDC)"
created: 2019-09-16T10:54:30.924-05:00
modified: 2022-02-06T05:26:23.289-06:00
parent: "[[OAuth & OpenID Connect]]"
children:
  - "[[OIDC - Flows]]"
---
###### OpenID Connect (OIDC)
````excerpt
- is an extension of [[Open Authorization (OAuth)]] adding delegated authentication (i.e. allowing Client application(s) to obtain a Resource Owner's information)
- is not backward compatible with OpenID 2 (or 1 for that matter). OpenID Connect is effectively version 3 of the OpenID specification
````
^excerpt

# OIDC Entities

> [!expand]- Click here to expand...
> ![[Authentication／Authorization／Delegation - Entities／Actors#^excerpt]]
# OIDC Terms

```merge-table
{
  "rows": [
    [
      {
        "content": "Terms",
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
        "content": "Claim",
        "bg": "#F4F5F7"
      },
      "- a piece of information asserted about an entity\n- OIDC defines a number of standard claims e.g. the name claim represents an End-User’s full name in displayable format"
    ],
    [
      {
        "content": "Scope",
        "bg": "#F4F5F7"
      },
      "- a collection of claims\n- OIDC defines a number of standard scopes that a Relying Party can request about an authentication event or End-User. For example, the profile scope contains claims such as: name, family\\_name, given\\_name, etc"
    ],
    [
      {
        "content": "[[Access Token]]",
        "bg": "#F4F5F7"
      },
      "- intended for the Client to make protected calls to the Resource Holder on behalf of the Resource Owner"
    ],
    [
      {
        "content": "[[Refresh Token]]",
        "bg": "#F4F5F7"
      },
      "- intended for the Client to obtain a new Access Token from the Security Token Service (STS)"
    ],
    [
      {
        "content": "[[ID Token]]",
        "bg": "#F4F5F7"
      },
      "- intended for the Client to know about the Resource Owner\n- Unlike Access Tokens and Refresh Tokens that are opaque to the client, ID Tokens contains information about the resource owner for the client\n- introduced in [[OpenID Connect (OIDC)]]"
    ],
    [
      {
        "content": "UserInfo",
        "bg": "#F4F5F7"
      },
      "- is the Resource Holder, in which a request presented with a valid Access Token would be consumed"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# OIDC Flows

![[OIDC - Flows#^excerpt]]
