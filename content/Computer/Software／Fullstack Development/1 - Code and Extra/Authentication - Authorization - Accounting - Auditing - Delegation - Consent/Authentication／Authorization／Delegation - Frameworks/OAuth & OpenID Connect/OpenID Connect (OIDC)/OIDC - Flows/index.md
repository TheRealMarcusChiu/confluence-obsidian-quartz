---
title: "OIDC - Flows"
created: 2020-01-09T13:12:52.962-06:00
modified: 2022-02-06T05:25:57.992-06:00
parent: "[[OpenID Connect (OIDC)]]"
children:
  - "[[OIDC - Authentication Code Flow]]"
---
````excerpt
OpenID Connect defines different types of authentication flow to cater to different Client types

```merge-table
{
  "rows": [
    [
      {
        "content": "Flow",
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
        "content": "Token Flow (Implicit Flow)",
        "bg": "#F4F5F7"
      },
      "- front-channel only (less secure)\n- required for client apps that have no “back end” logic on the web server, like a Javascript app\n- [[OAuth - Grant Types／Flows (Message Exchange Patterns)|OAuth 2.0 flow]] in which all tokens (e.g. [[Access Token]], [[Refresh Token]], [[ID Token]]) are returned from the Authorization Endpoint, and neither the Token Endpoint nor an Authorization Code are used"
    ],
    [
      {
        "content": "Code Flow (Authentication Code Flow)",
        "bg": "#F4F5F7"
      },
      "- front-channel and back-channel (more secure)\n- designed for client apps that have a back end that can communicate with the IdP away from prying eyes\n- OAuth 2.0 flow in which an Authorization Code is returned from the Authorization Endpoint and all tokens (e.g. [[Access Token]], [[Refresh Token]], [[ID Token]]) is returned from the Token Endpoint"
    ],
    [
      {
        "content": "Hybrid Flow",
        "bg": "#F4F5F7"
      },
      "- OAuth 2.0 flow in which an Authorization Code is returned from the Authorization Endpoint, some tokens are returned from the Authorization Endpoint, and others are returned from the Token Endpoint"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt

[[Open Authorization (OAuth)|OAuth]] Specification includes the definition of a Web API called “authorization endpoint”. The API requires <code>response\_type</code> as a mandatory request parameter. OpenID Connect has defined flows to issue ID tokens by extending the specification of the <code>response\_type</code> request parameter.

In [[Open Authorization (OAuth)|OAuth]], the value of <code>response\_type</code> is either <code>code</code> or <code>token</code>. OpenID Connect has added a new value, <code>id\_token</code>, and allowed any combination of <code>code</code>, <code>token</code> and <code>id\_token</code>. A special value, <code>none</code>, has been added, too. As a result, now <code>response\_type</code> can take any one of the following values

```merge-table
{
  "rows": [
    [
      {
        "content": "\"response_type\" value",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Flow",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "code",
        "bg": "#F4F5F7"
      },
      "Authorization Code Flow (detailed flow here: [[OIDC - Authentication Code Flow]])\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>code</code>, but if <code>openid</code> is not included in the <code>scope</code> request parameter, the request is just an [authorization code flow](https://tools.ietf.org/html/rfc6749#section-4.1) which is defined in RFC 6749. On the other hand, if <code>openid</code> is included in the <code>scope</code> request parameter, an ID token is issued from the token endpoint in addition to an access token.\n>\n> if <code>openid</code> is included\n>\n> ![[OIDC - Flows/1.png|400]]\n>\n> ![[OIDC - Flows/2.png|400]]\n>\n> if <code>openid</code> is not included (authorization code flow defined in RFC 6749)\n>\n> ![[OIDC - Flows/3.png|400]]\n>\n> ![[OIDC - Flows/4.png|400]]"
    ],
    [
      {
        "content": "token",
        "bg": "#F4F5F7"
      },
      "Implicit Flow\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>token</code>, the request is an [implicit flow](https://tools.ietf.org/html/rfc6749#section-4.2) defined in RFC 6749. Even if <code>openid</code> is included in the <code>scope</code> request parameter, an ID token is not issued. This flow uses the authorization endpoint but does not use the token endpoint.\n>\n> ![[OIDC - Flows/5.png|400]]\n>\n> ![[OIDC - Flows/6.png|400]]\n>\n> At the end of <em>“</em>[<em>3. Authentication</em>](http://openid.net/specs/openid-connect-core-1_0.html#Authentication)<em>”</em>, OpenID Connect Core 1.0 explicitly states that OpenID Connect does not use <code>token</code> as follows:\n>\n> NOTE: While OAuth 2.0 also defines the token Response Type value for the Implicit Flow, OpenID Connect does not use this Response Type, since no ID Token would be returned."
    ],
    [
      {
        "content": "id_token",
        "bg": "#F4F5F7"
      },
      "Implicit Flow\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>id\\_token</code>, an ID token is issued from the authorization endpoint. This flow does not use the token endpoint.\n>\n> ![[OIDC - Flows/7.png|400]]\n>\n> ![[OIDC - Flows/8.png|400]]"
    ],
    [
      {
        "content": "id_token token",
        "bg": "#F4F5F7"
      },
      "Implicit Flow\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>id\\_token token</code>, an ID token and an access token are issued from the authorization endpoint. This flow does not use the token endpoint.\n>\n> ![[OIDC - Flows/9.png|400]]\n>\n> ![[OIDC - Flows/10.png|400]]\n>\n> When an access token is issued together with an ID token from the authorization endpoint, the hash value of the access token calculated in a certain way has to be embedded in the ID token. So, be careful when you implement this flow. <em>“</em>[<em>3.2.2.10 ID Token</em>](http://openid.net/specs/openid-connect-core-1_0.html#ImplicitIDToken)<em>”</em> in OpenID Connect Core 1.0 says as follows:\n> > at\\_hash\n> > \n> > Access Token hash value. Its value is the base64url encoding of the left-most half of the hash of the octets of the ASCII representation of the <code>access\\_token</code> value, where the hash algorithm used is the hash algorithm used in the <code>alg</code> Header Parameter of the ID Token's JOSE Header. For instance, if the <code>alg</code> is <code>RS256</code>, hash the <code>access\\_token</code> value with SHA-256, then take the left-most 128 bits and base64url encode them. The <code>at\\_hash</code> value is a case sensitive string.\n> > \n> > If the ID Token is issued from the Authorization Endpoint with an <code>access\\_token</code> value, which is the case for the <code>response\\_type</code> value <code>id\\_token token</code>, this is REQUIRED; it MAY NOT be used when no Access Token is issued, which is the case for the <code>response\\_type</code> value <code>id\\_token</code>."
    ],
    [
      {
        "content": "code id_token",
        "bg": "#F4F5F7"
      },
      "Hybrid Flow\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>code id\\_token</code>, an authorization code and an ID token are issued from the authorization endpoint, and an access token and an ID token are issued from the token endpoint.\n>\n> ![[OIDC - Flows/11.png|400]]\n>\n> ![[OIDC - Flows/12.png|400]]\n>\n> Both the authorization endpoint and the token endpoint issue an ID token, but the contents of the ID tokens are not always the same. Regarding this, <em>“</em>[<em>3.3.3.6 ID Token</em>](http://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken2)<em>”</em> in OpenID Connect Core 1.0 says as follows:\n> > If an ID Token is returned from both the Authorization Endpoint and from the Token Endpoint, which is the case for the <code>response\\_type</code> values <code>code id\\_token</code> and <code>code id\\_token token</code>, the <code>iss</code> and <code>sub</code> Claim Values MUST be identical in both ID Tokens. All Claims about the Authentication event present in either SHOULD be present in both. If either ID Token contains Claims about the End-User, any that are present in both SHOULD have the same values in both. Note that the OP MAY choose to return fewer Claims about the End-User from the Authorization Endpoint, for instance, for privacy reasons. The <code>at\\_hash</code> and <code>c\\_hash</code> Claims MAY be omitted from the ID Token returned from the Token Endpoint even when these Claims are present in the ID Token returned from the Authorization Endpoint, because the ID Token and Access Token values returned from the Token Endpoint are already cryptographically bound together by the TLS encryption performed by the Token Endpoint.\n>\n> When an authorization code is issued together with an ID token from the authorization endpoint, the hash value of the authorization code calculated in a certain way has to be embedded in the ID token. So, be careful when you implement this flow. <em>“</em>[<em>3.3.2.11. ID Token</em>](http://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken)<em>”</em> in OpenID Connect Core 1.0 says as follows:\n> > c\\_hash\n> > \n> > Code hash value. Its value is the base64url encoding of the left-most half of the hash of the octets of the ASCII representation of the <code>code</code> value, where the hash algorithm used is the hash algorithm used in the <code>alg</code> Header Parameter of the ID Token's JOSE Header. For instance, if the <code>alg</code> is <code>HS512</code>, hash the <code>code</code> value with SHA-512, then take the left-most 256 bits and base64url encode them. The <code>c\\_hash</code> value is a case sensitive string.\n> > \n> > If the ID Token is issued from the Authorization Endpoint with a <code>code</code>, which is the case for the <code>response\\_type</code> values <code>code id\\_token</code> and <code>code id\\_token token</code>, this is REQUIRED; otherwise, its inclusion is OPTIONAL."
    ],
    [
      {
        "content": "code token",
        "bg": "#F4F5F7"
      },
      "Hybrid Flow\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>code token</code>, an authorization code and an access token are issued from the authorization endpoint, and an access token is issued from the token endpoint. In addition, if <code>openid</code> is included in the <code>scope</code> request parameter, an ID token is issued from the token endpoint, too.\n>\n> if <code>openid</code> is included\n>\n> ![[OIDC - Flows/13.png|400]]\n>\n> ![[OIDC - Flows/14.png|400]]\n>\n> if <code>openid</code> is not included\n>\n> ![[OIDC - Flows/15.png|400]]\n>\n> ![[OIDC - Flows/16.png|400]]\n>\n> Both the authorization endpoint and the token endpoint issue an access token, but the contents of the access tokens are not always the same. Regarding this, <em>“</em>[<em>3.3.3.8. Access Token</em>](http://openid.net/specs/openid-connect-core-1_0.html#HybridAccessToken2)<em>”</em> in OpenID Connect Core 1.0 says as follows:\n> > If an Access Token is returned from both the Authorization Endpoint and from the Token Endpoint, which is the case for the <code>response\\_type</code> values <code>code token</code> and <code>code id\\_token token</code>, their values MAY be the same or they MAY be different. Note that different Access Tokens might be returned be due to the different security characteristics of the two endpoints and the lifetimes and the access to resources granted by them might also be different."
    ],
    [
      {
        "content": "code id_token token",
        "bg": "#F4F5F7"
      },
      "Hybrid Flow\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>code id\\_token token</code>, an authorization code, an access token and an ID token are issued from the authorization endpoint, and an access token and an ID token are issued from the token endpoint.\n>\n> ![[OIDC - Flows/17.png|400]]\n>\n> ![[OIDC - Flows/18.png|400]]\n>\n> Both the authorization endpoint and the token endpoint issue an access token, but the contents of the access tokens are not always the same, likewise <em>“6. response\\_type=code token”</em>. As for the specification, please refer to <em>“</em>[<em>3.3.3.8. Access Token</em>](http://openid.net/specs/openid-connect-core-1_0.html#HybridAccessToken2)<em>”</em> in OpenID Connect Core 1.0.\n>\n> When an ID token is issued from the authorization endpoint, the hash value of the access token has to be embedded in the ID token if an access token is also issued, and the hash value of the authorization code has to be embedded in the ID token if an authorization code is also issued, likewise <em>“4. response\\_type=id\\_token token”</em> and <em>“5. response\\_type=code id\\_token”</em>. As for the specification, please refer to <em>“</em>[<em>3.3.2.11. ID Token</em>](http://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken)<em>”</em> in OpenID Connect Core 1.0."
    ],
    [
      {
        "content": "none",
        "bg": "#F4F5F7"
      },
      "None\n\n> [!expand]- Click here to expand...\n> When the value of <code>response\\_type</code> is <code>none</code>, nothing is issued from the authorization endpoint. This flow does not use the token endpoint.\n>\n> ![[OIDC - Flows/19.png|400]]\n>\n> ![[OIDC - Flows/20.png|400]]\n>\n> The definition of <code>none</code> is in <em>“</em>[<em>4. None Response Type</em>](http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#none)<em>”</em> in [OAuth 2.0 Multiple Response Type Encoding Practices](http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html)."
    ]
  ],
  "tableStyle": "text-align: center;width: 100.0%;"
}
```Note that a request for an ID token has to include <code>openid</code> in the <code>scope</code> request parameter
