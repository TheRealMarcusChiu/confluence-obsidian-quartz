---
title: "Key Infrastructures"
created: 2019-11-22T12:18:10.460-06:00
modified: 2025-12-19T23:29:10.208-06:00
parent: "[[Encryption]]"
children:
  - "[[Public Key Infrastructure (PKI)]]"
  - "[[Resource Public Key Infrastructure (RPKI)]]"
  - "[[Trusted Intermediaries (TI) - Trusted Third Party (TTP)]]"
---
###### Key Infrastructure
````excerpt
- is a set of roles and procedures needed to: create, manage, distribute, use, store and revoke certificates
````
^excerpt

# Key Infrastructure Types
- [[Public Key Infrastructure (PKI)]] - used for secure web browsing
- [[Resource Public Key Infrastructure (RPKI)]] - used for secure [[Border Gateway Protocol (BGP)|BGP]] updates

# Key Infrastructure Component Comparison

```merge-table
{
  "rows": [
    [
      {
        "content": "Key Infrastructure Components",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Public Key Infrastructure (PKI)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Resource Public Key Infrastructure (RPKI)]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "certificates",
        "bg": "#F4F5F7"
      },
      "[[Certificate Signing Request (CSR)]] → [[Digital SSL／TLS Certificate|Digital SSL/TLS Certificate]]",
      "[[Route Origin Authorization (ROA)]]"
    ],
    [
      {
        "content": "certificate authorities ([[Trusted Intermediaries (TI) - Trusted Third Party (TTP)|trusted intermediaries]])",
        "bg": "#F4F5F7"
      },
      "[[Certificate／Certification Authority (CA)|Certificate/Certification Authority (CA)]]",
      "Trusted Anchors (TA) aka Regional Internet Registry (RIR)"
    ],
    [
      {
        "content": "certificate repository",
        "bg": "#F4F5F7"
      },
      "",
      "Internet Routing Registry (IRR)"
    ],
    [
      {
        "content": "certificate revocation mechanisms",
        "bg": "#F4F5F7"
      },
      "[[Certificate Revocation List (CRL)]]",
      "NONE"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
