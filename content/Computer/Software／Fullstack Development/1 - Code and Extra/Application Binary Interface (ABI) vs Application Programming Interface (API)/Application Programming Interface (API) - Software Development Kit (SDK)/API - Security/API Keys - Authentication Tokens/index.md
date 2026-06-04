---
title: "API Keys - Authentication Tokens"
created: 2020-01-06T14:33:06.823-06:00
modified: 2020-01-09T12:35:07.579-06:00
parent: "[[API - Security]]"
children: []
---
both are types of [[Authentication／Authorization／Delegation - Token-Based|Token-Based Authentication]]
- <strong>API Keys</strong> - identifies the calling project (the application or site) making the call to an API
- <strong>Authentication Tokens</strong> - identify a user (the person) that is using the app or site

sometimes we use both API keys and [[Authentication (AuthN)|Authentication Schemes]]

![[API Keys - Authentication Tokens/api-keys-and-auth-token.png|450]]
## When to use API Keys

An API may restrict some or all of its methods to require API keys. It makes sense to do this if:
- You do want to block anonymous traffic. API keys identify an application's traffic for the API producer, in case the application developer needs to work with the API producer to debug an issue or show their application's usage
- You want to control the number of calls made to your API
- You want to identify usage patterns in your API's traffic. You can see application usage in [APIs & services](http://console.developers.google.com/)
- You want to filter logs by API key

API keys cannot be used for:
- Identifying individual users — API keys don't identify users, they identify projects
- Secure authorization
- Identifying the creators of a project
