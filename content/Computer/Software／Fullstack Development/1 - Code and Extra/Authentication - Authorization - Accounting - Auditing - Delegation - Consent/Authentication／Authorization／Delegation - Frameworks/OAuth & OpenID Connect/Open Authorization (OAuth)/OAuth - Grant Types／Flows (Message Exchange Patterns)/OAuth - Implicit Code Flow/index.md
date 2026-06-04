---
title: "OAuth - Implicit Code Flow"
created: 2026-01-09T17:03:27.625-06:00
modified: 2026-01-12T02:21:48.763-06:00
parent: "[[OAuth - Grant Types／Flows (Message Exchange Patterns)]]"
children: []
---
![[OAuth - Implicit Code Flow/implicit-code-flow.jpg|900]]

[[implicit-code-flow.drawio]]
# Implicit Code Flow
1. User goes to <strong>Client</strong>
2. <strong>Client</strong> returns page that wants access to user's data stored in <strong>Resource Server</strong>
3. User clicks login-button which redirects browser to <strong>Auth Server</strong> passing along:
	1. client\_id - unique identifier of <strong>Client</strong>
	2. scopes - the type of data requested by <strong>Client</strong>
4. <strong>Auth Server</strong> return login page to User. The page also clearly tells user that <strong>Client</strong> wants access to the requested scopes
5. User submits login credentials to <strong>Auth Server</strong>, which will be validated
6. <strong>Auth Server</strong> responds with an <code><font style="color: rgb(128,128,128);">access-code</font></code>
7. <code><font style="color: rgb(128,128,128);">access-code</font></code> to request user's data from <strong>Resource Server</strong>
8. <strong>Resource Server</strong> verifies <code><font style="color: rgb(128,128,128);">access-code</font></code>
9. <strong>Auth Server</strong> confirms <code><font style="color: rgb(128,128,128);">access-code</font></code>
10. <strong>Resource Server</strong> provides user's data to User's browser to be displayed

# Entities

> [!expand]- Click here to expand...
> ![[Authentication／Authorization／Delegation - Entities／Actors#^excerpt]]
