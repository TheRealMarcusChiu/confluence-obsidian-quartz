---
title: "Java - Spring - Security (@EnableWebSecurity)"
created: 2020-12-29T21:46:27.805-06:00
modified: 2022-01-05T17:45:29.830-06:00
parent: "[[Java - Spring Security]]"
children: []
---
```java
@Configuration
@EnableWebSecurity
public class OAuth2LoginSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(WebSecurity web) throws Exception {} 

    @Override
    protected void configure(HttpSecurity http) throws Exception {}
    
    @Override
    protected void configure(AuthenticationManagerBuilder amb) {}
}
```
# What is the Use of @EnableWebSecurity

To switch off the default web application security configuration completely you can add a bean with <code><font style="color: rgb(128,128,0);">@EnableWebSecurity</font></code> (this does not disable the authentication manager configuration or Actuator’s security). To customize it you normally use external properties and beans of type <code><font style="color: rgb(122,134,154);">WebSecurityConfigurerAdapter</font></code> (e.g. to add form-based login).

If you add <code><font style="color: rgb(128,128,0);">@EnableWebSecurity</font></code> and also disable Actuator security, you will get the default form-based login for the entire application unless you add a custom WebSecurityConfigurerAdapter.

If you define a <code><font style="color: rgb(128,128,0);">@Configuration</font></code> with <code><font style="color: rgb(128,128,0);">@EnableWebSecurity</font></code> anywhere in your application, it will switch off the default webapp security settings in Spring Boot (but leave the Actuator’s security enabled). To tweak the defaults try setting properties in <code><font style="color: rgb(0,128,0);"><font style="color: rgb(51,153,102);">security.\*</font> </font></code>(see SecurityProperties for details of available settings) and SECURITY section of Common application properties.
