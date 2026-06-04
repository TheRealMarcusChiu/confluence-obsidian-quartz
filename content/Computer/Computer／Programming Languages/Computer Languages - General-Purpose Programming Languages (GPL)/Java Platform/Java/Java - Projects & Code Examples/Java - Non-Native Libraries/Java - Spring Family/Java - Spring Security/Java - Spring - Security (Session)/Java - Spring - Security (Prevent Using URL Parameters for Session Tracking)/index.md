---
title: "Java - Spring - Security (Prevent Using URL Parameters for Session Tracking)"
created: 2020-12-28T11:05:44.995-06:00
modified: 2020-12-28T11:07:22.916-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
Exposing session information in the URL is a growing [security risk](https://www.sitelock.com/blog/owasp-top-10-broken-authentication-session-management/) (from place 7 in 2007 to place 2 in 2013 on the OWASP Top 10 List).

[Starting with Spring 3.0](https://jira.springsource.org/browse/SEC-1052), the URL rewriting logic that would append the <em>jsessionid</em> to the URL can now be disabled by setting the <em>disable-url-rewriting=”true”</em> in the <em>\<http\></em> namespace.

Alternatively, starting with Servlet 3.0, the session tracking mechanism can also be configured in the <em>web.xml:</em>
```
<session-config>
     <tracking-mode>COOKIE</tracking-mode>
</session-config>
```

and programmatically:
```
public class MainWebAppInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext sc) throws ServletException {
        // ...
        sc.setSessionTrackingModes(EnumSet.of(SessionTrackingMode.COOKIE));        
    }
}
```

This chooses where to store the <em>JSESSIONID</em> – in the cookie or in a URL parameter.
