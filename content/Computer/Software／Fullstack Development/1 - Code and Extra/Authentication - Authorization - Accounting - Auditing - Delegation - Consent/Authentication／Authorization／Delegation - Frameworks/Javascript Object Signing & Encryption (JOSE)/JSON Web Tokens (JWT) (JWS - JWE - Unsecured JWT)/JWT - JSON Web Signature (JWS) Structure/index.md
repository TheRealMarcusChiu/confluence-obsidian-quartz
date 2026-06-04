---
title: "JWT - JSON Web Signature (JWS) Structure"
created: 2019-09-16T18:43:07.272-05:00
modified: 2022-12-30T14:15:26.773-06:00
parent: "[[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)]]"
children: []
---
###### JSON Web Signature (JWS)
- is a signed [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JSON Web Token (JWT)]]
- the purpose of a signature is to allow one or more parties <em>to establish the authenticity</em> of the JWT. We use JWS to sign the session data which can be used to verify that the data has not been tampered with
- this does not prevent other parties from reading the contents of the JWT (for encryption see [[JWT - JSON Web Encryption (JWE) Structure|JWE]])

# JWS - Signing Schemes
- <strong>[[Hash-Based Message Authentication Code (HMAC)|HMAC]]</strong> - it combines a certain payload with a shared-secret-key using a [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]] (e.g. [[Secure Hash Algorithms (SHA)|SHA-256]]) and produces a signature that can be used to verify the message. This is a so-called shared-secret signing scheme since both the party that generates the signature and the party that verifies it knows the secret. And since both parties know it, <em>both can generate</em> a new signed message.
- <strong>RSASSA</strong> - unlike HMAC, it allows the receiving parties to <em>only verify</em> the authenticity of a message, but not generate it. The algorithm is based on the [[Asymmetric／Two／Public-Private Key Function|public/private key scheme]]. The private key can be used to both create a signed message and verify its authenticity. The public key, in contrast, can only be used to verify the authenticity of a message. This is important in one-to-many signing scenarios, like Single-Sign-On, where there’s only one producer of the message and many consumers. If, for example, a legitimate consumer turns malicious, it is impossible for it to modify a message without the other parties noticing

# JWS - Structure (Overview)

in its compact form, a JWS consists of 3 parts separated by dots (<code><font style="color: rgb(193,199,208);">.</font></code>):
- <font style="color: rgb(255,0,255);">header</font>
- <font style="color: rgb(255,153,0);">payload</font>
- <font style="color: rgb(0,255,255);">signature</font>

a JWS typically looks like the following:

<code><font style="color: rgb(255,0,255);">header</font><font style="color: rgb(193,199,208);">.</font><font style="color: rgb(255,102,0);">payload</font><font style="color: rgb(193,199,208);">.</font><font style="color: rgb(0,255,255);">signature</font></code>

<font style="color: rgb(255,0,255);">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</font><font style="color: rgb(193,199,208);">.</font><font style="color: rgb(255,102,0);">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9</font><font style="color: rgb(193,199,208);">.</font><font style="color: rgb(0,255,255);">TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</font>

<font style="color: rgb(0,255,255);"><font style="color: rgb(92,102,111);">use </font>[jwt.io Debugger](http://jwt.io/)<font style="color: rgb(92,102,111);"> to decode, verify, and generate JWSs</font></font>
# JWS - Structure (Details)
> [!tabs]
>
> === Header
>
> The header <em>typically</em> consists of two parts: the type of the token, which is JWS, and the signing algorithm being used, such as [[Hash-Based Message Authentication Code (HMAC)|HMAC]]-[[Secure Hash Algorithms (SHA)|SHA256]] or [[Rivest, Shamir, & Adleman (RSA) Algorithm|RSA]].
>
> example header (specifying HMAC-SHA256):
>
> > [!indent]
> <code>{</code>  "alg": <font style="color: rgb(0,251,202);">"HS256"</font>, 
> >   "typ": <font style="color: rgb(0,251,202);">"JWT"</font>}
>
> the Header is compacted into a single line with no spaces
>
> > [!indent]
> <code>{"alg":<font style="color: rgb(0,251,202);">"HS256"</font>,"typ":<font style="color: rgb(0,251,202);">"JWT"</font>}</code>
>
> The Header is then [[Base64url Notation]] encoded to form the first part of the JWS:
>
> > [!indent]
> <font style="color: rgb(255,0,255);">base64UrlEncode('</font>{"alg":<font style="color: rgb(0,251,202);">"HS256"</font>,"typ":<font style="color: rgb(0,251,202);">"JWT"</font>}<font style="color: rgb(255,0,255);">') </font>
>
> <font style="color: rgb(255,0,255);"><font style="color: rgb(51,51,51);">resulting:</font></font>
>
> > [!indent]
> <font style="color: rgb(255,0,255);">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</font>
>
> === Body/Payload
>
> The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: <em>registered</em>, <em>public</em>, and <em>private</em> claims.
>
> example payload:
>
> > [!indent]
> <code>{
> >   "sub": <font style="color: rgb(0,251,202);">"1234567890"</font>,
> >   "name": <font style="color: rgb(0,251,202);">"John Doe"</font>,
> >   "admin": <font style="color: rgb(66,199,244);">true</font>}</code>
>
> The Payload is compacted into a single line with no spaces:
>
> > [!indent]
> <code>{"sub":<font style="color: rgb(0,251,202);">"1234567890"</font>,"name":<font style="color: rgb(0,251,202);">"John Doe"</font>,"admin":<font style="color: rgb(66,199,244);">true</font>}</code>
>
> The Payload is then [[Base64url Notation]] encoded to form the second part of the JWS:
>
> > [!indent]
> <font style="color: rgb(255,102,0);">base64UrlEncode('</font>{"sub":<font style="color: rgb(0,251,202);">"1234567890"</font>,"name":<font style="color: rgb(0,251,202);">"John Doe"</font>,"admin":<font style="color: rgb(66,199,244);">true</font>}<font style="color: rgb(255,102,0);">')</font>
>
> <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">resulting:</font></font>
>
> > [!indent]
> <font style="color: rgb(255,102,0);">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9</font>
>
> === Signature
>
> To create the signature part you have to take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and sign that.
>
> For example, if you want to use the [[Hash-Based Message Authentication Code (HMAC)|HMAC]] [[Secure Hash Algorithms (SHA)|SHA256]] algorithm, the [[Digital Signatures|signature]] will be created in the following way:
>
> > [!indent]
> <code>HMACSHA256( base64UrlEncode(header) + <font style="color: rgb(0,251,202);">"."</font> + 
> >             base64UrlEncode(payload),
> >             shared-secret-key )</code>
>
> The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWS is who it says it is.
>
> The Signature is then [[Base64url Notation]] encoded to form the third part of the JWS:
>
> > [!indent]
> <font style="color: rgb(0,255,255);">base64UrlEncode(signature)</font>
>
> <font style="color: rgb(0,255,255);"><font style="color: rgb(51,51,51);">resulting:</font></font>
>
> > [!indent]
> <font style="color: rgb(0,255,255);">TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</font>

# JWS - Structure (Putting It All Together)

the following shows the resulting JWS (i.e. 3 [[Base64url Notation|base64url]] strings delimited by a dot):

<font style="color: rgb(255,0,255);">base64UrlEncode(header)</font>.<font style="color: rgb(255,102,0);">base64UrlEncode(payload)</font>.<font style="color: rgb(0,255,255);">base64UrlEncode(signature)</font>

<font style="color: rgb(255,0,255);">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</font>.<font style="color: rgb(255,102,0);">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9</font>.<font style="color: rgb(0,255,255);">TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</font>

<font style="color: rgb(92,102,111);">use </font>[jwt.io Debugger](http://jwt.io/)<font style="color: rgb(92,102,111);"> to decode, verify, and generate JWSs</font>
