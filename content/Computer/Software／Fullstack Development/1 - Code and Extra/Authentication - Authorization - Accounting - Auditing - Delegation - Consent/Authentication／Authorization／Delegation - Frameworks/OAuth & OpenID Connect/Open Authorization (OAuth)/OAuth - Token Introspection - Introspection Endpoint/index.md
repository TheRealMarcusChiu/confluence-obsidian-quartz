---
title: "OAuth - Token Introspection - Introspection Endpoint"
created: 2020-01-09T00:17:21.878-06:00
modified: 2022-02-06T05:36:47.834-06:00
parent: "[[Open Authorization (OAuth)]]"
children: []
---
<strong>Token Introspection</strong> is a method for a protected resource to query an OAuth 2.0 authorization server to determine the active state of an OAuth 2.0 token and to determine meta-information about this token
###### Introspection Endpoint
- is the OAuth 2.0 Server endpoint through which the token introspection operation is accomplished
- MUST be protected by a transport-layer security mechanism
- to prevent token scanning, a token-introspection request must be authorized

# Request to Introspection Endpoint
```
POST /introspect HTTP/1.1
Host: oauth-server.example.com
Accept: application/json
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer 23410913-abewfq.123483		# request authorization

token=2YotnFZFEjr1zCsicMWpAA						# token that the protected resource wants info about
```
# Response From Authorization Server
```
HTTP/1.1 200 OK
Content-Type: application/json

{
	"active": true,
    "client_id": "l238j323ds-23ij4",
    "username": "jdoe",
    "scope": "read write dolphin",
    "sub": "Z5O3upPC88QrAjx00dis",
    "aud": "https://protected.example.net/resource",
    "iss": "https://auth-server.example.com/",
    "exp": 1419356238,
    "iat": 1419350238,
    "extension_field": "twenty-seven"
}
```
- <strong>active</strong> REQUIRED. Boolean indicator of whether or not the presented token is currently active. The specifics of a token's "active" state will vary depending on the implementation of the authorization server and the information it keeps about its tokens, but a "true" value return for the "active" property will generally indicate that a given token has been issued by this authorization server, has not been revoked by the resource owner, and is within its given time window of validity (e.g., after its issuance time and before its expiration time). See Section 4 for information on implementation of such checks.
- <strong>scope</strong> OPTIONAL. A JSON string containing a space-separated list of scopes associated with this token, in the format described in Section 3.3 of OAuth 2.0 \[RFC6749\]
- <strong>client\_id</strong> OPTIONAL. Client identifier for the OAuth 2.0 client that requested this token.
- <strong>username</strong> OPTIONAL. Human-readable identifier for the resource owner who authorized this token.
- <strong>token\_type </strong>OPTIONAL. Type of the token as defined in Section 5.1 of OAuth 2.0 \[RFC6749\].
- <strong>exp</strong> OPTIONAL. Integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire, as defined in JWT \[RFC7519\].
- <strong>iat</strong> OPTIONAL. Integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued, as defined in JWT \[RFC7519\].
- <strong>nbf</strong> OPTIONAL. Integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token is not to be used before, as defined in JWT \[RFC7519\].
