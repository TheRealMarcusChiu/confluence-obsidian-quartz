---
title: "Java - Spring - Security (WebSecurity vs HttpSecurity)"
created: 2021-01-01T12:22:07.391-06:00
modified: 2022-01-05T17:05:13.249-06:00
parent: "[[Java - Spring Security]]"
children: []
---
# Example 1

General use of <font style="color: rgb(122,134,154);">WebSecurity</font> <code><font style="color: rgb(122,134,154);">ignoring()</font></code> method <em>omits Spring Security</em> and none of Spring Security’s features will be available. <font style="color: rgb(122,134,154);">WebSecurity</font> is based above <font style="color: rgb(122,134,154);">HttpSecurity</font>.
```
@Override
public void configure(WebSecurity web) throws Exception {
    web
        .ignoring()
        .antMatchers("/resources/**")
        .antMatchers("/public/**");
}

@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .authorizeRequests()
        .antMatchers("/admin/**").hasRole("ADMIN")
        .antMatchers("/public/**").hasRole("USER") // no effect
        .anyRequest().authenticated();
}
```

<font style="color: rgb(122,134,154);">WebSecurity</font> in the above example lets Spring ignore <code><font style="color: rgb(122,134,154);">/resources/\*\*</font></code> and <code><font style="color: rgb(122,134,154);">/public/\*\*</font></code>. Therefore the <code><font style="color: rgb(122,134,154);">.antMatchers("/public/\*\*").hasRole("USER")</font></code> in <font style="color: rgb(122,134,154);">HttpSecurity</font> is <em>unconsidered</em>.
> This will omit the request pattern from the security filter chain entirely. Note that anything matching this path will then have no authentication or authorization services applied and will be freely accessible.

<code><font style="color: rgb(122,134,154);">configure(HttpSecurity)</font></code> allows configuration of web-based security at a <em>resource level</em>, based on a selection match - e.g. The example above restricts the URLs that start with <code><font style="color: rgb(122,134,154);">/admin/</font></code> to users that have <code><font style="color: rgb(122,134,154);">ADMIN</font></code> role and declares that any other URLs need to be successfully authenticated (with the exception of <code><font style="color: rgb(122,134,154);">/public/</font></code> because of <code><font style="color: rgb(122,134,154);">configure(WebSecurity)</font></code>)

<code><font style="color: rgb(122,134,154);">configure(WebSecurity)</font></code> is used for configuration settings that <em>impact global security</em> (ignore resources, set debug mode, reject requests by implementing a custom firewall definition). For example, the following method would cause any request that starts with <code><font style="color: rgb(122,134,154);">/resources/</font></code> or <code><font style="color: rgb(122,134,154);">/public/</font></code> to be <em>ignored for authentication</em> purposes.
# Example 2

Let's consider the below code, we can ignore the authentication for the endpoints (<code><font style="color: rgb(122,134,154);">"/login"</font></code>, <code><font style="color: rgb(122,134,154);">"/register"</font></code>, <code><font style="color: rgb(122,134,154);">"/api/public/\*\*"</font></code>) provided within antMatchers using both methods.
```
@Override
public void configure(WebSecurity web) throws Exception {
    web
        .ignoring()
        .antMatchers("/login", "/register", "/api/public/**");
}

@Override
public void configure(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .authorizeRequests()
        .antMatchers("/login", "/register", "/api/public/**").permitAll()
        .anyRequest().authenticated();
}
```
- <code><font style="color: rgb(122,134,154);">configure(WebSecurity web)</font></code> Endpoint used in this method ignores the spring security filters, security features (secure headers, CSRF protection, etc) are also ignored and no security context will be set and can not protect endpoints for Cross-Site Scripting, XSS attacks, content-sniffing.

- <code><font style="color: rgb(122,134,154);">configure(HttpSecurity http)</font></code> Endpoint used in this method ignores the authentication for endpoints used in antMatchers and other security features will be in effect such as secure headers, CSRF protection, etc.
