---
title: "Cross-Origin Request (COR)"
created: 2026-05-17T12:57:38.361-05:00
modified: 2026-05-17T13:01:02.668-05:00
parent: "[[Cross-Origin Request (COR) - Same-Origin Policy (SOP) - Cross-Origin Resource Sharing (CORS) - Cross-Origin Read Blocking (CORB)]]"
children: []
---
# Cross-Origin Request (COR)

a type of request where a website making a request to a different website

a COR can be either a:
- simple request - allowed HTTP methods:
	- GET
	- HEAD
	- POST
- non-simple request - any other HTTP method

# Preflight Request

a preflight request is an HTTP request with:
- request method = OPTIONS
- 2 HTTP Headers:
	- <code>[Access-Control-Request-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)</code>
	- <code>[Access-Control-Request-Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)</code>

# How Browser Handles a Cross-Origin Request
```
if (COR is a simple-request)
	browser send COR
else
	preflight-response = browser send preflight-request
	if (COR satisfies conditions of preflight-response)
		browser send COR
	else
		browser output console error
```
# Making a Cross-Origin Request (COR) - Part 1

open chrome browser to any website (e.g. [https://google.com](https://google.com))

open [google's developer tools](https://developers.google.com/web/tools/chrome-devtools/open)

paste the following in the console prompt and press enter
```js
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.example.org/");
oReq.send();
```

the following code will make a cross-origin request to [www.example.org](https://www.example.org), since we opened browser on a different website
