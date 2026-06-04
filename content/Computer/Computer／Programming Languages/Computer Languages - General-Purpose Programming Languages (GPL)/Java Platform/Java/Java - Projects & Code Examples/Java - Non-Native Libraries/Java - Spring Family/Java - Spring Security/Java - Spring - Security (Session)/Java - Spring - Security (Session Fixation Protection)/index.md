---
title: "Java - Spring - Security (Session Fixation Protection)"
created: 2020-12-28T11:02:14.738-06:00
modified: 2020-12-28T11:05:17.878-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
The framework offers protection against typical Session Fixation attacks by configuring what happens to an existing session when the user tries to authenticate again:
```
<session-management session-fixation-protection="migrateSession"> ...
```

The corresponding Java configuration:
```java
http.sessionManagement()
  .sessionFixation()
    .migrateSession()
    // .none()
    // .newSession()
    // .changeSessionId()
```

By default, Spring Security has this protection enabled (“<em>migrateSession</em>“) – on authentication a new HTTP Session is created, the old one is invalidated and the attributes from the old session are copied over.

If this is not the desired behavior, two other options are available:
- when “<em>none</em>” is set, the original session will not be invalidated
- when “<em>newSession</em>” is set, a clean session will be created without any of the attributes from the old session being copied over
- when “<em>changeSessionId</em>” is set, changes the current session id with a new one
