---
title: "OAuth - Authorization Code Flow"
created: 2020-01-09T13:07:21.890-06:00
modified: 2026-01-09T14:07:00.197-06:00
parent: "[[OAuth - Grant Types／Flows (Message Exchange Patterns)]]"
children: []
---
![[OAuth - Authorization Code Flow/authorization-code-flow.png|600]]
# Authentication Code Flow
1. User goes to <strong>Client</strong>
2. <strong>Client</strong> returns page that wants access to user's data stored in <strong>Resource Server</strong>
3. User clicks login-button which redirects browser to <strong>Auth Server</strong> passing along:
	1. client\_id - unique identifier of <strong>Client</strong>
	2. scopes - the type of data requested by <strong>Client</strong>
4. <strong>Auth Server</strong> return login page to User. The page also clearly tells user that <strong>Client</strong> wants access to the requested scopes
5. User submits login credentials to <strong>Auth Server</strong>, which will be validated
6. <strong>Auth Server</strong> responds with an <code><font style="color: rgb(128,128,128);">auth-code</font></code>
7. <code><font style="color: rgb(128,128,128);">auth-code</font></code> is passed to <strong>Client</strong>
8. <strong>Client</strong> sends the <code><font style="color: rgb(128,128,128);">auth-code</font></code> to <strong>Token Server</strong>
9. <strong>Token Server</strong> verifies <code><font style="color: rgb(128,128,128);">auth-code</font></code> and then sends <code><font style="color: rgb(128,128,128);">access-code</font></code> to <strong>Client</strong>
10. <strong>Client</strong> uses the <code><font style="color: rgb(128,128,128);">access-code</font></code> to request user's data from <strong>Resource Server</strong>
11. <strong>Resource Server</strong> verifies <code><font style="color: rgb(128,128,128);">access-code</font></code>
12. <strong>Auth Server</strong> confirms <code><font style="color: rgb(128,128,128);">access-code</font></code>
13. <strong>Resource Server</strong> provides user's data to <strong>Client</strong>
14. <strong>Client </strong>sends user's data to User's browser to be displayed

# Entities

> [!expand]- Click here to expand...
> ![[Authentication／Authorization／Delegation - Entities／Actors#^excerpt]]
# Limitation (No Authentication)

OAuth only authorizes but doesn't authenticates

An important factor to note within this flow is that the Client knows nothing about the user at this stage. The token that was sent to the client was completely opaque — only a string of random characters. Though this is a secure exchange, the token data is itself useless to the client. The exchange thus supplies access for the client, but not user information. What if our app needed to customize the User Experience (UX) based on which membership level the user belonged to, a group they were a member of, where they were located, their preferred language, etc.? Many apps provide this type of experience and for that they require additional user information

solution: use [[OIDC - Authentication Code Flow|OpenID Connect's Authentication Code Flow]]
