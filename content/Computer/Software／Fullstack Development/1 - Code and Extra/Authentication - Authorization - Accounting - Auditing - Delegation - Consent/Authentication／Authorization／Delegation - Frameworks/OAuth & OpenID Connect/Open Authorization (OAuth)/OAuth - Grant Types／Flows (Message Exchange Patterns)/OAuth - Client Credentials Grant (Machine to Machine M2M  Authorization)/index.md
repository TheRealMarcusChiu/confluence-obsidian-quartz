---
title: "OAuth - Client Credentials Grant (Machine to Machine M2M  Authorization)"
created: 2021-01-10T14:22:59.055-06:00
modified: 2021-01-10T14:25:13.969-06:00
parent: "[[OAuth - Grant Types／Flows (Message Exchange Patterns)]]"
children: []
---
there are [[OAuth - Grant Types／Flows (Message Exchange Patterns)|4 different types of Authorization Flow]], below we will do over the <strong>Client Credentials Grant (Machine to Machine M2M  Authorization)</strong>:

![[OAuth - Client Credentials Grant (Machine to Machine M2M  Authorization)/JSON Web Token.png|400]]
1. the Application Client wants to access protected resource from Resource Server, thus it requests authorization from the Authorization Server
2. when the authorization is granted, the Authorization Server generates a [[JWT - JSON Web Signature (JWS) Structure|JWS]] (a signed JWT) to send back to the Application Client:
	1. the Authorization Server generates the necessary JWT header and payload based on identity of client
	2. the Authorization Server signs the JWT header and payload (signs with it's own [[Asymmetric／Two／Public-Private Key Function|private-key]] or a shared [[Symmetric／Single／Secret Key Function|secret-key]] between the Resource Server)
	3. the Authorization Server then returns the JWS (header, payload, and signature) to the Application Client
3. the Application Client sends the JWS to the Resource Server whenever accessing a protected resource
	1. the Resource Server verifies the JWS with the shared secret-key or the Authorization Server's public-key
	2. if signature matches, grant access based on JWS payload info
