---
title: "Java - Spring - Security (Handling Session Timeout)"
created: 2020-12-28T11:08:36.477-06:00
modified: 2020-12-28T11:09:58.744-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
After the session has timed out, if the user sends a request with an expired session id, they will be redirected to a URL configurable via the namespace:
```
<session-management>
    <concurrency-control expired-url="/sessionExpired.html" ... />
</session-management>
```

Similarly, if the user sends a request with a session id which is not expired, but entirely invalid, they will also be redirected to a configurable URL:
```
<session-management invalid-session-url="/invalidSession.html">
    ...
</session-management>
```

The corresponding Java configuration:
```
http.sessionManagement()
  .expiredUrl("/sessionExpired.html")
  .invalidSessionUrl("/invalidSession.html");
```
