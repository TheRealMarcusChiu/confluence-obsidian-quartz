---
title: "WebHooks vs WebSub"
created: 2022-02-14T20:55:22.390-06:00
modified: 2022-02-14T20:56:05.567-06:00
parent: "[[API-DP - Subscription／Consumer Publisher／Producer Based]]"
children: []
---
# [[WebHooks]] vs [[WebSubs - PubSubHubbub - PubSub - PuSH|WebSub]]

Compared to WebHook, WebSub requires way <strong>less effort</strong> for Publishers as all they need to do is declare the Hub they’re using with the [Link Header](https://www.w3.org/wiki/LinkHeader), and then ping it when they have new content published.

For Client/Subscribers, not much changed as they’re still going to make a subscription request but this time to the Hub, which is going to ping them at its turn when new content has been published.
