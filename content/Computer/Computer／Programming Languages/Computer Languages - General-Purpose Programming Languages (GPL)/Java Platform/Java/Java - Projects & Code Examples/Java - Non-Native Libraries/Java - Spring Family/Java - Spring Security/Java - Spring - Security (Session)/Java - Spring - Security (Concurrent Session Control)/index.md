---
title: "Java - Spring - Security (Concurrent Session Control)"
created: 2020-12-28T11:10:21.500-06:00
modified: 2020-12-28T11:11:38.944-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
When a user that is already authenticated tries to authenticate again, the application can deal with that event in one of a few ways. It can either invalidate the active session of the user and authenticate the user again with a new session, or allow both sessions to exist concurrently.

The first step in enabling the concurrent <em>session-control</em> support is to add the following listener in the <em>web.xml</em>:
```
<listener>
    <listener-class>
      org.springframework.security.web.session.HttpSessionEventPublisher
    </listener-class>
</listener>
```

Or define it as a Bean – as follows:
```
@Bean
public HttpSessionEventPublisher httpSessionEventPublisher() {
    return new HttpSessionEventPublisher();
}
```

This is essential to make sure that the Spring Security session registry is notified when the session is destroyed.

To enable the scenario which allows multiple concurrent sessions for the same user the <em>\<session-management\></em> element should be used in the XML configuration:
```
<http ...>
    <session-management>
        <concurrency-control max-sessions="2" />
    </session-management>
</http>
```

Or, via Java configuration:
```
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.sessionManagement().maximumSessions(2)
}
```
