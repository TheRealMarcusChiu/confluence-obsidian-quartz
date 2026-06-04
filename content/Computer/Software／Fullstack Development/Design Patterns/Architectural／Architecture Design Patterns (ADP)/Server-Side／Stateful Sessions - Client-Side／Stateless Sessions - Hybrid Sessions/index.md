---
title: "Server-Side／Stateful Sessions - Client-Side／Stateless Sessions - Hybrid Sessions"
created: 2019-12-13T14:51:46.547-06:00
modified: 2021-12-31T03:44:24.191-06:00
parent: "[[Architectural／Architecture Design Patterns (ADP)]]"
children: []
---
# Session Data - Purpose

session data is data preserved across page loads
# Session Data - Storage Location

> [!expand-ui]- Server-Side/Stateful Sessions
> As you know, [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] is a stateless protocol, which means that it doesn’t provide a mechanism to associate multiple requests with the same client. However, most web applications need this ability in order to offer a personalized experience to users. If an application requires a login, you usually need to track some information about a logged-in user. For years, this has been achieved via implementing server-side sessions.
>
> Under this workflow, a user’s session data is stored on a server using various [[Data Storage - Types|storage implementations]] (e.g. [[Disk (Format - Filesystems／File-Systems (FS))|file-systems]], [[Database Management Systems (DBMS)|databases]] or [[Cache／Caching Servers|cache servers]]). To associate a session data with a client’s request, a server generates a session\_ID and binds it to the session data. The server sends the ID to the client and any future client requests will contain this ID. The server uses this ID to look up a session data for that client request.
>
> problems with server-side/stateful sessions:
> - implementation is rather complex
> - having a state makes it harder to replicate and fix bugs
> - biggest disadvantage is the difficulty to scale. You either need to:
> 	- replicate a session data across all web servers
> 	- use a central session-data store that each web server connects to
> 	- ensure that a given user always hits the same web server
>
> All that prompted software engineers to look for alternatives. One of the obvious ones is to keep the user’s data on the client instead of the server. That approach is widely used nowadays and is known as client-side or stateless sessions.

> [!expand-ui]- Client-Side/Stateless Sessions
> client-side session data is stored on the web client and sent to a server with each request.
>
> ways to send session data to client:
> - store the entire session data in cookies. Cookies are a convenient mechanism since they are handled automatically by web browsers.
> - session data can also be passed through [[HTTP - Headers|HTTP headers]] (Authorization) to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues or URL parameters to make a client state bookmark-able
> - using any [[API Design Patterns (API-DP)|API Design Patterns]] (e.g. REST, GraphQL, etc) or just bare-bones [[API - Network-Level]]s (e.g. HTTP1.1, WebSockets, etc)
>
> where session data is stored on client: [[Browser Application - Storage|Browser Storage Types]]
>
> with client-side sessions you no longer have the scalability problems
>
> problems with client-side/stateless sessions:
> - client can tamper the session data. For example, if the user ID is stored in a cookie, it is easy for that user to modify the cookie and change that ID. This will make it possible to get access to someone else’s account. To prevent that possibility we need to wrap that data in a tamper-proof package. That’s exactly the job for [[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JWT]]. Since JWTs can be signed, a server can verify the authenticity of the session data and trust that it hasn’t been tamped with. If needed, JWTs can also be encrypted to obscure the session data which prevents users from reading or modifying it.
> - application may require large amount of session-data that needs to be sent back and forth for every request. This can easily overcome the benefits of the reduced complexity and scalability issues in the backend

> [!expand-ui]- Hybrid Sessions
> uses both client and server side sessions
