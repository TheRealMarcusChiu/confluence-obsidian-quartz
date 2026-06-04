---
title: "WebHooks"
created: 2019-12-12T21:13:13.101-06:00
modified: 2022-02-14T20:53:16.114-06:00
parent: "[[API-DP - Subscription／Consumer Publisher／Producer Based]]"
children: []
---
<strong>WebHooks</strong> is an architectural framework for subscribers and providers
# WebHooks - Components
###### Client/Subscriber
- client registers subscription endpoint by submitting a Client Callback [[Uniform Resource Locator (URL)|URL]] to the Server/Provider
- and then, whenever a new event occurs on the server, the server can send a request to the Client Callback URL to notify the update

###### Server/Provider
- define a subscription endpoint that allows clients to subscribe
- implement a WebHook queue of Client Callback URLs

# WebHooks - Implementations
- [WebHooks.org](https://sendgrid.com/blog/whats-webhook/): If the Wiki has not been updated for a while it remains mostly up to date and the mailing list is still active.
- [What’s a WebHook](https://sendgrid.com/blog/whats-webhook/) by Nick Quinlan
