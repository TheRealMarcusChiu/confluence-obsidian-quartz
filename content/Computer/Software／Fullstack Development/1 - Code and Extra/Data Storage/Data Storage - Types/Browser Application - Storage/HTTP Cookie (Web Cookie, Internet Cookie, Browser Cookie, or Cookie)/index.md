---
title: "HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)"
created: 2019-09-16T18:18:27.495-05:00
modified: 2025-09-24T12:58:27.401-05:00
parent: "[[Browser Application - Storage]]"
children:
  - "[[Cookie - SameSite]]"
---
###### HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)
````excerpt
- is a key-value data sent from a [[Web (HTTP) Servers|Web Server]] to user's web browser and is stored on the user's computer
- were designed to be a reliable mechanism for websites to remember stateful information
````
^excerpt

# Introduction
![](https://www.youtube.com/watch?v=sovAIX4doOE&ab_channel=HusseinNasser)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

> [!expand-ui]- How are Cookies Passed
> ###### <font style="color: rgb(0,0,255);"><font style="color: rgb(34,34,34);">First Client Request</font></font>
> <font style="color: rgb(0,0,255);"><font style="color: rgb(34,34,34);">the browser sends its first request for the homepage of the </font><code>[www.example.org](http://www.example.org/)</code><font style="color: rgb(34,34,34);"> website:</font></font>
> <span style="white-space: pre-wrap"><code><font style="color: rgb(0,0,255);">GET</font> <font style="color: rgb(0,0,255);">/index.html</font> <font style="color: rgb(0,128,0);">HTTP</font><font style="color: rgb(102,102,102);">/</font><font style="color: rgb(102,102,102);">1.1</font></code><br><code><font style="color: rgb(125,144,41);">Host</font><font style="color: rgb(102,102,102);">:</font> www.example.org</code><br><code>...</code></span>
>
> ###### Server Response
>
> the server responds with two <code>Set-Cookie</code> headers:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(0,128,0);">HTTP</font><font style="color: rgb(102,102,102);">/</font><font style="color: rgb(102,102,102);">1.0</font> <font style="color: rgb(102,102,102);">200</font> <font style="color: rgb(210,65,58);">OK</font></code><br><code><font style="color: rgb(125,144,41);">Content-type</font><font style="color: rgb(102,102,102);">:</font> text/html</code><br><code><font style="color: rgb(125,144,41);">Set-Cookie</font><font style="color: rgb(102,102,102);">:</font> theme=light</code><br><code><font style="color: rgb(125,144,41);">Set-Cookie</font><font style="color: rgb(102,102,102);">:</font> sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT</code><br><code>...</code></span>
>
> The server's HTTP response contains the contents of the website's homepage. But it also instructs the browser to set two cookies:
> - "theme", is considered to be a <em>session cookie</em> since it does not have an <code>Expires</code> or <code>Max-Age</code> attribute. Session cookies are intended to be deleted by the browser when the browser closes
> - "sessionToken", is considered to be a <em>persistent cookie</em> since it contains an <code>Expires</code> attribute, which instructs the browser to delete the cookie at a specific date and time.
>
> ###### Second Client Request
>
> next, the browser sends another request to visit the <code>spec.html</code> page on the website. This request contains a <code>Cookie</code> HTTP header, which contains the two cookies that the server instructed the browser to set:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(0,0,255);">GET</font> <font style="color: rgb(0,0,255);">/spec.html</font> <font style="color: rgb(0,128,0);">HTTP</font><font style="color: rgb(102,102,102);">/</font><font style="color: rgb(102,102,102);">1.1</font></code><br><code><font style="color: rgb(125,144,41);">Host</font><font style="color: rgb(102,102,102);">:</font> www.example.org</code><br><code><font style="color: rgb(125,144,41);">Cookie</font><font style="color: rgb(102,102,102);">:</font> theme=light; sessionToken=abc123</code><br><code>…</code></span>

> [!expand-ui]- Setting Cookie
> Server HTTP Response Header
> - <span style="white-space: pre-wrap"><code><font style="color: rgb(125,144,41);">Set-Cookie</font><font style="color: rgb(102,102,102);">:</font> cookie key=cookie value; Max-Age=26000; Secure; SameSite=Strict</code></span>
>
> Corresponding JavaScript Browser Console:
> - <code>document.cookie = "cookie key=cookie value; Max-Age=26000; Secure; SameSite=Strict"</code>
