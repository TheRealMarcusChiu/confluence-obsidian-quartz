---
title: "JWT - JSON Web Encryption (JWE) Structure"
created: 2019-12-13T15:40:15.218-06:00
modified: 2022-12-30T14:17:39.954-06:00
parent: "[[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)]]"
children: []
---
<strong>JSON Web Encryption (JWE)</strong>
- is an encrypted [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JSON Web Token (JWT)]]
- while signing a JWT provides a means to establish the authenticity of the JWT contents, encryption provides a way to keep the contents of the JWT unreadable to third parties.

# JWE - Encryption Schemes
- <strong>[[Symmetric／Single／Secret Key Function|shared secret scheme]]</strong> - is analogous to the signing mechanism where all parties know the secret and can both encrypt and decrypt a token.
- <strong>[[Asymmetric／Two／Public-Private Key Function|private/public keys scheme]]</strong> - however, works differently. In JWE, all public-key holders can encrypt the data, but only the party holding the private key can decrypt it. What that means is that JWE cannot guarantee the authenticity of the JWT when a public/private key scheme is used. To have the guarantee of authenticity both JWS and JWE should be used. Note that this restriction only applies in situations where consumers are different entities from producers. If the producer of the data and the consumer are the same entity, then a shared secret encrypted JWT provides the same guarantees as an encrypted and signed JWT.

# JWE - Structure

in its compact form, a JWE consists of 5 parts separated by dots (<code>.</code>):
- <font style="color: rgb(128,0,0);">header (encrypted?)</font>
- <font style="color: rgb(255,102,0);">encrypted-key</font>
- <font style="color: rgb(0,128,0);">initialization-vector</font>
- <font style="color: rgb(255,0,255);">encrypted-payload</font>
- <font style="color: rgb(0,0,255);">authentication-tag/signature</font>

<font style="color: rgb(128,0,0);"><font style="color: rgb(0,51,102);">a JWE typically looks like the following:</font></font>

<font style="color: rgb(128,0,0);">header</font>.<font style="color: rgb(255,102,0);">encrypted-key</font>.<font style="color: rgb(0,128,0);">initialization-vector</font>.<font style="color: rgb(255,0,255);">encrypted-payload</font>.<font style="color: rgb(0,0,255);">authentication-tag</font>

<font style="color: rgb(0,0,255);"><font style="color: rgb(92,102,111);">use </font>[jwt.io Debugger](http://jwt.io/)<font style="color: rgb(92,102,111);"> to decode, verify, and generate JWEs</font></font>
