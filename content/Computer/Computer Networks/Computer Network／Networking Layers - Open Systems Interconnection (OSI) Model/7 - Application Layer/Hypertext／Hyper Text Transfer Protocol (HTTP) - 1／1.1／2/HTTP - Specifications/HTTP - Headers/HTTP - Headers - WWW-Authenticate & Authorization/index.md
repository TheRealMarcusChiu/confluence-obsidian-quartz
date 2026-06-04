---
title: "HTTP - Headers - WWW-Authenticate & Authorization"
created: 2020-01-06T14:07:27.534-06:00
modified: 2020-01-06T17:08:40.164-06:00
parent: "[[HTTP - Headers]]"
children: []
---
these headers are sometimes used as [[API - Security|Basic API Authentication]]
# <strong>WWW-Authenticate</strong>

> [!expand]- Click here to expand...
> The HTTP <strong><code>WWW-Authenticate</code></strong> response header
> - defines the authentication method that should be used to gain access to a resource
> - is sent along with a [<code>401</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) <code>Unauthorized</code> response
>
> ### Syntax
> ```
> WWW-Authenticate: <type> realm=<realm>
> ```
> - <strong>\<type\></strong> - [Authentication type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#Authentication_schemes). A common type is ["Basic"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme). IANA maintains a [list of Authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
> - <strong>realm=\<realm\></strong> - a description of the protected area. If no realm is specified, clients often display a formatted hostname instead.
> - <strong>charset=\<charset\></strong> - tells the client the server's prefered encoding scheme when submitting a username and password. The only allowed value is the case insensitive string "UTF-8". This does not relate to the encoding of the realm string
>
> ### Examples
> ```
> WWW-Authenticate: Basic
> WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
> ```
# <strong>Authorization</strong>

> [!expand]- Click here to expand...
> The HTTP <strong><code>Authorization</code></strong> request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a [<code>401</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) <code>Unauthorized</code> status and the [<code>WWW-Authenticate</code>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) header
> ### Syntax
> ```
> Authorization: <authorization type/scheme> <credentials/data>
> ```
> ### Examples
> ```
> Authorization: Basic base64(user-id:password)		# replace base64(...) with the base64 of input
> Authorization: Digest crypto-hash(user-id:password)	# replace crypto-hash(...) with the output of crypto-hash of input
> Authorization: Bearer BEARER_TOKEN_HERE				#
> ```
> ### Authentication Scheme Types
> - <strong>Basic</strong> - authentication by transmitting a user-id:password pair, encoded using [[Base64 Notation]] (see [RFC7617](https://tools.ietf.org/html/rfc7617))
> - <strong>Digest</strong> - authentication by transmitting a user-id:password pair, encrypted using a [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]] (see [RFC7616](https://tools.ietf.org/html/rfc7616))
> - <strong>Bearer</strong> - authentication by transmitting a bearer token (see [RFC6750](https://tools.ietf.org/html/rfc6750))
> 	- to prevent misuse, bearer tokens need to be protected from disclosure in storage and in transport
