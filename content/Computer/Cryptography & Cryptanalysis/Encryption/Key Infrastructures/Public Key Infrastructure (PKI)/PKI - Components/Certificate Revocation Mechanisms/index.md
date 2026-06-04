---
title: "Certificate Revocation Mechanisms"
created: 2019-11-22T12:53:12.887-06:00
modified: 2022-11-25T18:35:09.078-06:00
parent: "[[PKI - Components]]"
children: []
---
# Revocation Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "Revocation Methods",
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
        "content": "[[Certificate Revocation List (CRL)]]",
        "bg": "#F4F5F7"
      },
      "- list of revoked certificates published periodically by the [[Certificate／Certification Authority (CA)|CA]]"
    ],
    [
      {
        "content": "Delta Certificate Revocation List (CRL)",
        "bg": "#F4F5F7"
      },
      "- only the changes since the previous issue are published"
    ],
    [
      {
        "content": "Online Revocation Servers",
        "bg": "#F4F5F7"
      },
      "- no CRL is published\n- verifier queries a central server to check if a certificate has been revoked"
    ]
  ],
  "tableStyle": "width: 51.5441%;"
}
```
# Bad List vs Good List

```merge-table
{
  "rows": [
    [
      {
        "content": "List Type",
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
        "content": "Bad List",
        "bg": "#F4F5F7"
      },
      "- keep a list of revoked certificates\n- if a bogus certificate is issued to someone w/o keeping a log of it, no one would know its existence"
    ],
    [
      {
        "content": "Good List",
        "bg": "#F4F5F7"
      },
      "- keeping a list of valid certificates\n- bogus certificates would not be honored. But would be a too-large and dynamic list"
    ]
  ]
}
```
# Where to Store Certificates

```merge-table
{
  "rows": [
    [
      {
        "content": "Where to Store Certificates",
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
        "content": "Storing With Subject",
        "bg": "#F4F5F7"
      },
      "- the issuer may not have write access to the subject’s record\n- for a root CA with many children, more convenient for down-certificates from the CA to be stored in subjects’ records"
    ],
    [
      {
        "content": "Storing With Issuer",
        "bg": "#F4F5F7"
      },
      "- if a key is compromised, the principal needs to inform everyone certifying his key & how to know cross-certifiers inform them?\n- helps find a path toward a target name from the trust anchor"
    ]
  ]
}
```
