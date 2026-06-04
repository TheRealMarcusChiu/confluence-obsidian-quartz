---
title: "Authentication／Authorization／Delegation - Entities／Actors"
created: 2019-12-13T13:58:55.437-06:00
modified: 2022-02-06T05:33:10.199-06:00
parent: "[[Authentication - Authorization - Accounting - Auditing - Delegation - Consent]]"
children: []
---
````excerpt
authentication/authorization/delegation entities/actors:

```merge-table
{
  "rows": [
    [
      {
        "content": "Entity/Actor",
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
        "content": "- Resource Owner (RO)\n- End-User\n- Principal",
        "bg": "#F4F5F7"
      },
      "the entity that is in control of the data exposed by the API, typically an end-user"
    ],
    [
      {
        "content": "- Client\n- Relying-Party (RP)",
        "bg": "#F4F5F7"
      },
      "the mobile app, website, etc. that wants to access data on behalf of the Resource Owner"
    ],
    [
      {
        "content": "- Authorization/OAuth Server/Service (AS)\n- Identity-Provider (IdP)\n- OpenID Provider",
        "bg": "#F4F5F7"
      },
      "- a combination or sometimes a separation of:\n\t- Authentication Server - deals with authenticating the End-User\n\t- [[Security Tokens Service (STS)|Security Token Service (STS)]] or Token Endpoint - issues tokens (e.g. [[Authentication／Authorization／Delegation - Token-Based|Access Tokens, Refresh Tokens, ID Tokens]])"
    ],
    [
      {
        "content": "- Resource/UserInfo Server/Provider (RS)\n- Service-Provider (SP)",
        "bg": "#F4F5F7"
      },
      "the service/application/resource:\n- that exposes the protected resource/API and requires authentication/authorization of any principal wishing to access it\n- agrees to trust the <strong>Identity-Provider</strong> to [[Authentication (AuthN)|authenticate]]<strong>Client</strong>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

![[Authentication／Authorization／Delegation - Entities／Actors/authentication-authorization-entities-actors.png]]

<font style="color: rgb(255,0,0);">NOTE</font>: This 1 of many Grant Flows (above portrays [[OAuth - Grant Types／Flows (Message Exchange Patterns)|Implicit Flow]] of [[Open Authorization (OAuth)|OAuth]] & [[OpenID Connect (OIDC)|OpenID Connect]])
````
^excerpt
