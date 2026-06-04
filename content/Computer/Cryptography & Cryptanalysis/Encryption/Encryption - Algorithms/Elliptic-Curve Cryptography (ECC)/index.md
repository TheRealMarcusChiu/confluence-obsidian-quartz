---
title: "Elliptic-Curve Cryptography (ECC)"
created: 2019-09-09T11:12:56.993-05:00
modified: 2025-08-28T02:18:55.446-05:00
parent: "[[Encryption - Algorithms]]"
children:
  - "[[Curve25519]]"
---
###### Elliptic-curve cryptography (ECC)
- is an approach to [[Asymmetric／Two／Public-Private Key Function|public-key cryptography]] based on the [[Algebraic Structures|algebraic structure]] of <strong>elliptic curves</strong> over finite fields
- requires smaller keys compared to non-EC (Elliptic-Curve) cryptography (based on plain Galois fields) to provide equivalent security.

# Elliptic-Curve Cryptographic Schemes
- [Elliptic Curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic_Curve_Diffie%E2%80%93Hellman) (ECDH) key agreement scheme is based on the [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman) scheme
- Elliptic Curve [Integrated Encryption Scheme](https://en.wikipedia.org/wiki/Integrated_Encryption_Scheme) (ECIES), also known as Elliptic Curve Augmented Encryption Scheme or simply the Elliptic Curve Encryption Scheme
- [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_DSA) (ECDSA) is based on the [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm)
- deformation scheme using Harrison's p-adic Manhattan metric
- [Edwards-curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/EdDSA) (EdDSA) is based on [Schnorr signature](https://en.wikipedia.org/wiki/Schnorr_signature) and uses [twisted Edwards curves](https://en.wikipedia.org/wiki/Twisted_Edwards_curve)
- [ECMQV](https://en.wikipedia.org/wiki/ECMQV) key agreement scheme is based on the [MQV](https://en.wikipedia.org/wiki/Menezes%E2%80%93Qu%E2%80%93Vanstone) key agreement scheme
- [ECQV](https://en.wikipedia.org/wiki/Implicit_certificate) implicit certificate scheme
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
