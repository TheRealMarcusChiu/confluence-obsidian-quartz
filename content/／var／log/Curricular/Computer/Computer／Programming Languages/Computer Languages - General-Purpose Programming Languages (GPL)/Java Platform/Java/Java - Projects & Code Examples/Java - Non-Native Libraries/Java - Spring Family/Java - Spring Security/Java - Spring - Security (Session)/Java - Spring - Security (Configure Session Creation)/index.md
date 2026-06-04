---
title: "Java - Spring - Security (Configure Session Creation)"
created: 2020-12-28T11:12:12.907-06:00
modified: 2020-12-28T11:14:40.717-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
We can control exactly when our session gets created and how Spring Security will interact with it:
- <em><strong>always</strong> </em>– a session will always be created if one doesn't already exist
- <em><strong>ifRequired</strong> </em>– a session will be created only if required (default)
- <em><strong>never</strong> </em>– the framework will never create a session itself but it will use one if it already exists
- <em><strong>stateless</strong> </em>– no session will be created or used by Spring Security
```
<http create-session="ifRequired">...</http>
```

Java configuration:
```
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
}
```

It's very important to understand that <strong>this configuration only controls what Spring Security does</strong> – not the entire application. Spring Security may not create the session if we instruct it not to, but our app may!

By default, <strong>Spring Security will create a session when it needs one</strong> – this is “<em>ifRequired</em>“.

For <strong>a more stateless application</strong>, the “<em>never</em>” option will ensure that Spring Security itself will not create any session; however, if the application creates one, then Spring Security will make use of it.

Finally, the strictest session creation option – “<em>stateless</em>” – is <strong>a guarantee that the application will not create any session at all</strong>.

This was [introduced](https://jira.springsource.org/browse/SEC-1424) in Spring 3.1 and will effectively skip parts of the Spring Security filter chain – mainly the session related parts such as <em>HttpSessionSecurityContextRepository</em>, <em>SessionManagementFilter</em>, <em>RequestCacheFilter</em>.

These more strict control mechanisms have the direct implication that <strong>cookies are not used</strong> and so <strong>each and every request needs to be re-authenticated</strong>. This stateless architecture plays well with REST APIs and their Statelessness constraint. They also work well with authentication mechanisms such as Basic and Digest Authentication.
### Under the Hood

Before executing the Authentication process, Spring Security will run a filter responsible with storing the Security Context between requests – the <em>SecurityContextPersistenceFilter</em>. The context will be stored according to a strategy – <em>HttpSessionSecurityContextRepository</em> by default – which uses the HTTP Session as storage.

For the strict <em>create-session=”stateless”</em> attribute, this strategy will be replaced with another – <em>NullSecurityContextRepository</em> – and <strong>no session will be created or used</strong> to keep the context.
