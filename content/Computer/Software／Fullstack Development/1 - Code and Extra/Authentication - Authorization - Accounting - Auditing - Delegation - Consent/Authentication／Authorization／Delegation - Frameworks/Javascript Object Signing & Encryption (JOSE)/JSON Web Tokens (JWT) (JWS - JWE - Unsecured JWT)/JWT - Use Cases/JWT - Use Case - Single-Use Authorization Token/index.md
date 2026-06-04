---
title: "JWT - Use Case - Single-Use Authorization Token"
created: 2019-09-16T18:49:51.830-05:00
modified: 2022-12-30T12:47:49.390-06:00
parent: "[[JWT - Use Cases]]"
children: []
---
# Single-Use Authorization Token

the use-cases where JWT is particularly effective are typically use-cases where they are used as a <em>single-use authorization token</em>.

From the [JSON Web Token specification](https://tools.ietf.org/html/rfc7519):
> JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. \[...\] enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

In this context, "claim" can be something like a 'command', a one-time authorization, or basically any other scenario that you can word as:
> Hello Server B, Server A told me that I could \<claim goes here\>, and here's the (cryptographic) proof.

For example, you might run a file-hosting service where the user has to authenticate to download their files, but the files themselves are served by a separate, stateless "download server". In this case, you might want to have your <em>application server</em> (Server A) issue single-use "download tokens", that the client can then use to download the file from a <em>download server</em> (Server B).

When using JWT in this manner, there are a few specific properties:
- <strong>The tokens are short-lived.</strong> They only need to be valid for a few minutes, to allow a client to initiate the download.
- <strong>The token is only expected to be used once.</strong> The application server would issue a new token for every download, so any one token is just used to request a file once, and then thrown away. There's no persistent state, <em>at all</em>.
- <strong>The application server still uses sessions.</strong> It's just the <em>download server</em> that uses tokens to authorize individual downloads, because it doesn't need persistent state.

As you can see here, it's completely reasonable to <em>combine</em> sessions and JWT tokens - they each have their own purpose, and sometimes you need both. Just don't use JWT for <em>persistent</em>, <em>long-lived</em> data
# Single-Use Authorization Token - Example Flow

see: [[OAuth - Grant Types／Flows (Message Exchange Patterns)|OAuth - Grant Types/Flows (Message Exchange Patterns)]]
