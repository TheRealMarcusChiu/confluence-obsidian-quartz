---
title: "Same-Origin Policy (SOP)"
created: 2026-05-17T13:01:28.268-05:00
modified: 2026-05-17T13:01:52.769-05:00
parent: "[[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)]]"
children: []
---
# Same-Origin Policy (SOP)

a policy that restricts a website from reading the response from a request made to another website (enforced by browser)

<font style="color: rgb(255,0,0);">IMPORTANT NOTE</font>

a browser:
- does not prevent the cross-origin request to be created and sent
- does not prevent the server from receiving the request
- does not prevent the server from making a normal response
- does not prevent the computer from receiving the whole response
- but browser DOES prevent the website from reading the response

![[Same-Origin Policy (SOP)/cross-origin-request-and-same-origin-policy.png|450]]
# Making a Cross-Origin Request (COR) - Part 2
- the code would output an error
> [!list-indent-undo]
> > [!indent]
> > ![[Same-Origin Policy (SOP)/cross-origin-request-error.png]]

The reason why we won't get the response in [[JavaScript]] is the <em>Same-Origin Policy</em>. This policy was aimed at making sure that a website can't read the result from a request made to another website and is enforced by the browser.

The "origin" in this case is composed from
- protocol (e.g. https)
- host (e.g. [www.example.org](http://www.example.org/))
- port (e.g. 80)

So [http://example.org](http://example.org/) and [http://www.example.org](http://www.example.org/) and [https://example.org](https://example.org/) are three different origins
