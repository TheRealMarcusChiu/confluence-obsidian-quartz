---
title: "Encryption - Algorithms"
created: 2019-05-01T12:01:57.668-05:00
modified: 2025-08-28T02:10:40.000-05:00
parent: "[[Encryption]]"
children:
  - "[[Advanced Encryption Standard (AES)]]"
  - "[[ChaCha20]]"
  - "[[Data Encryption Standard (DES)]]"
  - "[[Diffie-Hellman (DH) Key Exchange]]"
  - "[[ElGamal Encryption]]"
  - "[[Elliptic-Curve Cryptography (ECC)]]"
  - "[[GNU Privacy Guard (GPG or GnuPG)]]"
  - "[[International Data Encryption Algorithm (IDEA)]]"
  - "[[Pretty Good Privacy (PGP)]]"
  - "[[Rivest Cipher (RC4)]]"
  - "[[Rivest, Shamir, & Adleman (RSA) Algorithm]]"
  - "[[Temporal Key Integrity Protocol (TKIP)]]"
---
###### Encryption Algorithm/Scheme
````excerpt
- is simply an implementation of [[Encryption|encryption]] (the process of encoding a message to provide <em>confidentiality, </em>where only authorized parties can access it and those who are not authorized cannot)
````
^excerpt

# Classifications

see: [[Encryption - Algorithm Classifications|Encryption Algorithm Classifications]]
# [[Symmetric／Single／Secret Key Function|Symmetric Encryption Algorithms]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Scheme",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Type",
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
        "content": "[[Data Encryption Standard (DES)]]",
        "bg": "#F4F5F7"
      },
      "BLOCK",
      ""
    ],
    [
      {
        "content": "[[International Data Encryption Algorithm (IDEA)]]",
        "bg": "#F4F5F7"
      },
      "BLOCK",
      ""
    ],
    [
      {
        "content": "Twofish",
        "bg": "#F4F5F7"
      },
      "BLOCK",
      ""
    ],
    [
      {
        "content": "Blowfish",
        "bg": "#F4F5F7"
      },
      "BLOCK",
      ""
    ],
    [
      {
        "content": "[[Advanced Encryption Standard (AES)]]",
        "bg": "#F4F5F7"
      },
      "BLOCK",
      ""
    ],
    [
      {
        "content": "[[Rivest Cipher (RC4)]]",
        "bg": "#F4F5F7"
      },
      "STREAM",
      ""
    ],
    [
      {
        "content": "[[Temporal Key Integrity Protocol (TKIP)]]",
        "bg": "#F4F5F7"
      },
      "STREAM",
      "- uses [[Rivest Cipher (RC4)]] under the hood"
    ],
    [
      {
        "content": "[[ChaCha20]]",
        "bg": "#F4F5F7"
      },
      "STREAM",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# [[Asymmetric／Two／Public-Private Key Function|Asymmetric Encryption Algorithms]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Scheme",
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
        "content": "[[Rivest, Shamir, & Adleman (RSA) Algorithm|Rivest, Shamir, & Adleman (RSA)]]",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[Elliptic-Curve Cryptography (ECC)]]",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[Diffie-Hellman (DH) Key Exchange|Diffie-Hellman (DH)]]",
        "bg": "#F4F5F7"
      },
      "- DH is an ASYMMETRIC algorithm that produces a SYMMETRIC key\n- DH neither encrypts nor signs data"
    ],
    [
      {
        "content": "[[ElGamal Encryption|EIGamal Encryption]]",
        "bg": "#F4F5F7"
      },
      "- should not be confused with [[Schnorr & ElGamal Signature Schemes|ElGamal Signature Scheme]]\n- is based on [[Diffie-Hellman (DH) Key Exchange]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Other Encryption Algorithms

```merge-table
{
  "rows": [
    [
      {
        "content": "Scheme",
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
        "content": "[[GNU Privacy Guard (GPG or GnuPG)]]",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[Pretty Good Privacy (PGP)]]",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[Physical／Physically Unclonable Key／Function (PUK／PUF)|Physical/Physically Unclonable Key/Function (PUK/PUF)]] schemes",
        "bg": "#F4F5F7"
      },
      "![[Physical／Physically Unclonable Key／Function (PUK／PUF)#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
