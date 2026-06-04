---
title: "Java - Spring - Security (Configure Session Timeout)"
created: 2020-12-28T11:07:31.300-06:00
modified: 2020-12-28T11:08:20.913-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
We can easily configure the Session timeout value of the embedded server using properties:
```
server.servlet.session.timeout=15m
```

If we don't specify the duration unit, Spring will assume it's seconds.

In a nutshell, with this configuration, after 15 minutes of inactivity, the session will expire. The session after this period of time is considered invalid.

If we configured our project to use Tomcat, we have to keep in mind that it only supports minute precision for session timeout, with a minimum of one minute. This means that if we specify a timeout value of <em>170s </em>for example, it will result in a 2 minutes timeout.

Finally, it's important to mention that even though [Spring Session](https://www.baeldung.com/spring-session) supports a similar property for this purpose (<em>spring.session.timeout</em>), if that's not specified then the autoconfiguration will fallback to the value of the property we first mentioned
