---
title: "Java - Spring - Security (Secure Session Cookie)"
created: 2020-12-28T10:59:00.533-06:00
modified: 2020-12-28T11:01:52.279-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
### Secure Session Cookie

We can use the <em>httpOnly</em> and <em>secure</em> flags to secure our session cookie:
- <em>httpOnly:</em> if true then browser script won't be able to access the cookie
- <em>secure:</em> if true then the cookie will be sent only over HTTPS connection

We can set those flags for our session cookie in the <em>web.xml</em>:
```xml
<session-config>
    <session-timeout>1</session-timeout>
    <cookie-config>
        <http-only>true</http-only>
        <secure>true</secure>
    </cookie-config>
</session-config>
```

This configuration option is available since Java servlet 3. By default, <em>http-only</em> is true and <em>secure</em> is false.

Let's also have a look at the corresponding Java configuration:
```java
public class MainWebAppInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext sc) throws ServletException {
        // ...
        sc.getSessionCookieConfig().setHttpOnly(true);        
        sc.getSessionCookieConfig().setSecure(true);        
    }
}
```

If we're using Spring Boot, we can set these flags in our <em>application.properties</em>:
```
server.servlet.session.cookie.http-only=true
server.servlet.session.cookie.secure=true
```

Finally, we can also achieve this manually by using a <em>Filter</em>:
```java
public class SessionFilter implements Filter {
    @Override
    public void doFilter( ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        Cookie[] allCookies = req.getCookies();
        if (allCookies != null) {
            Cookie session = 
              Arrays.stream(allCookies).filter(x -> x.getName().equals("JSESSIONID"))
                    .findFirst().orElse(null);

            if (session != null) {
                session.setHttpOnly(true);
                session.setSecure(true);
                res.addCookie(session);
            }
        }
        chain.doFilter(req, res);
    }
}
```
