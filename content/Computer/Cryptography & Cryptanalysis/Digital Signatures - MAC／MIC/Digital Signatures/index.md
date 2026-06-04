---
title: "Digital Signatures"
created: 2019-08-28T14:59:14.270-05:00
modified: 2025-12-19T23:34:05.430-06:00
parent: "[[Digital Signatures - MAC／MIC]]"
children:
  - "[[Digital Signature Algorithm (DSA)]]"
  - "[[Digital Signature Standard (DSS)]]"
  - "[[Schnorr & ElGamal Signature Schemes]]"
---
###### Digital Signatures
````excerpt
- a <em>digital signature</em> of a message (which is produced by the signer) gives a recipient very strong reason to ensure:
	- message authentication - message originated from the stated signer
	- message integrity - message has not been changed
````
^excerpt

related: [[Digital Signatures - MAC／MIC|Digital Signatures - MAC/MIC]]
# Digital Signature Algorithms

```merge-table
{
  "rows": [
    [
      {
        "content": "Digital Signature Algorithms",
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
        "content": "ANY [[Secure／Keyed Cryptographic Hash Function|Keyed Cryptographic Hash Functions]]\n\n<font style=\"color: rgb(255,0,0);\">(does not produce true digital signatures)</font>",
        "bg": "#F4F5F7"
      },
      "<strong>secure/keyed hash functions</strong> generating [[Hash-Based Message Authentication Code (HMAC)|HMACs]] could be used in place of \"[[Digital Signatures|digital signatures]]\", but does not protect against <strong>non-repudiation</strong> (where 1 of the 2 parties that share the same key could secretly sign a message and say it was signed from the other)"
    ],
    [
      {
        "content": "ANY [[Asymmetric／Two／Public-Private Key Function|Asymmetric-Key Algorithms]]",
        "bg": "#F4F5F7"
      },
      "[[Asymmetric／Two／Public-Private Key Function|asymmetric key function]] can be used for generating digital signatures, and does not fail on <strong>non-repudiation</strong>\n- private-key - used to sign message\n- public-key - used to verify message"
    ],
    [
      {
        "content": "[[Digital Signature Standard (DSS)]]",
        "bg": "#F4F5F7"
      },
      "<strong>DSS</strong> is simply a document that describes the signing procedure and specifies certain standards"
    ],
    [
      {
        "content": "[[Schnorr & ElGamal Signature Schemes]]",
        "bg": "#F4F5F7"
      },
      "<strong>ElGamal Signature Scheme</strong> is a digital signature scheme which is based on the difficulty of computing [discrete logarithms](https://en.wikipedia.org/wiki/Discrete_logarithm)"
    ],
    [
      {
        "content": "[[Digital Signature Algorithm (DSA)]]",
        "bg": "#F4F5F7"
      },
      "<strong>DSA</strong> is a variant of the Schnorr and ElGamal Signature Schemes\n\n<strong>DSA</strong> is a cryptographic algorithm that generates keys, signs data, and verifies signatures"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Digital Signature Attacks and Forgeries
###### Digital Signature Attacks
- <strong>key-only attack</strong> - attacker knows sender's public key
- <strong>known message attack</strong> - attacker has access to set of messages and their corresponding signatures
- <strong>generic chosen message attack</strong> - attacker choose a list of messages independent of sender's public key)
- <strong>directed chosen message attack</strong> - attacker choose a list of messages dependent on sender's public key before signatures are seen

###### Digital Signature Forgeries
- <strong>total break</strong> - attacker determines senders private key
- <strong>universal forgery</strong> - attacker efficiently finds a way to sign arbitrary messages
- <strong>selective forgery</strong> - attacker forges signature for a chosen message
- <strong>existential forgery</strong> - attacker forges signature for at least 1 message. attacker has no control over message
