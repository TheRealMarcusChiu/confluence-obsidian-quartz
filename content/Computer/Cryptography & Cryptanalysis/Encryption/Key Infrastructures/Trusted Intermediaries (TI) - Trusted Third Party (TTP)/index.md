---
title: "Trusted Intermediaries (TI) - Trusted Third Party (TTP)"
created: 2019-09-29T23:07:43.522-05:00
modified: 2022-09-08T01:57:05.794-05:00
parent: "[[Key Infrastructures]]"
children:
  - "[[Key Distribution Center (KDC)]]"
---
In [[Cryptography & Cryptanalysis|cryptography]], a <strong>Trusted Intermediary (TI)</strong> or <strong>Trusted Third Party</strong><strong> (TTP)</strong> is an entity that facilitates interactions between two parties who both trust the third party
# Trusted Intermediaries Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Trusted Intermediaries Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Key Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Preferable [[Computer Network／Networking Sizes (NANO／NFC／BAN／PAN／SAN／LAN／CAN／MAN／RAN／WAN) Near-Field Communication Body／Personal／Storage／System／Local／Controller／Metropolitan／Radio／Wide Area／Access Network|Network Size]]",
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
        "content": "[[Key Distribution Center (KDC)]]",
        "bg": "#F4F5F7"
      },
      "deals with [[Symmetric／Single／Secret Key Function|symmetric keys]]",
      "LAN",
      "- has to be online\n- compromised KDC does decrypt messages\n- not scalable"
    ],
    [
      {
        "content": "[[Certificate／Certification Authority (CA)|Certification Authority (CA)]]",
        "bg": "#F4F5F7"
      },
      "deals with [[Asymmetric／Two／Public-Private Key Function|asymmetric keys]]",
      "WAN",
      "- does not have to be online\n- compromised CA does NOT decrypt messages\n- scalable\n- used for secure web browsing"
    ],
    [
      {
        "content": "Trusted Anchor (TA)",
        "bg": "#F4F5F7"
      },
      "deals with [[Asymmetric／Two／Public-Private Key Function|asymmetric keys]]",
      "WAN",
      "- similar to CA\n- used for securing [[Border Gateway Protocol (BGP)|BGP]]"
    ]
  ],
  "tableStyle": "width: 92.0588%;"
}
```
