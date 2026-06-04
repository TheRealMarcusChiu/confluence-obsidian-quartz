---
title: "Asymmetric／Two／Public-Private Key Function"
created: 2019-08-29T17:23:23.569-05:00
modified: 2025-12-19T23:30:45.689-06:00
parent: "[[Cryptographic Function Type & Number of Keys Used]]"
children: []
---
###### Asymmetric/Two/Public-Private Key Function
````excerpt
- utilizes 2 distinct keys and is used for:
	- <strong>[[Encryption|encryption]]</strong> - the public-key (public encryption key) is used to [[Encryption|encrypt]] messages, while the private-key (private decryption key) is used to decrypt
	- <strong>signing</strong> - the private-key (private signing key) is used to sign a message which generates a [[Digital Signatures|digital signature]], while the public-key (public signature key) is used to verify the message's integrity
````
^excerpt

# Asymmetric Function Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Asymmetric Function Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Algorithms",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Modular Arithmetic & Prime Factorization",
        "bg": "#F4F5F7"
      },
      "- [[Rivest, Shamir, & Adleman (RSA) Algorithm|RSA]]"
    ],
    [
      {
        "content": "Discrete Logarithm System",
        "bg": "#F4F5F7"
      },
      "- [[Diffie-Hellman (DH) Key Exchange|Diffie-Hellman]]"
    ],
    [
      {
        "content": "Elliptic Curve System",
        "bg": "#F4F5F7"
      },
      "- [[Elliptic-Curve Cryptography (ECC)|ECC]]"
    ]
  ]
}
```
# Asymmetric Algorithms

refer to [[Encryption - Algorithms]]
