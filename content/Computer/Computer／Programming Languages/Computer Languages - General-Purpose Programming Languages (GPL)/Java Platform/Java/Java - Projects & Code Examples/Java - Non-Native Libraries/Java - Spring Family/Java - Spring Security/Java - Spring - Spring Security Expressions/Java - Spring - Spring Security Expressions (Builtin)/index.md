---
title: "Java - Spring - Spring Security Expressions (Builtin)"
created: 2022-10-06T19:48:06.020-05:00
modified: 2022-10-06T20:11:49.608-05:00
parent: "[[Java - Spring - Spring Security Expressions]]"
children: []
---
Before looking at more complex implementations, such as ACL, it's important to have a solid grasp on security expressions, as they can be quite flexible and powerful if used correctly.
# Spring Security Expressions

> [!expand-ui]- hasRole, hasAnyRole
> These expressions are responsible for defining the access control or authorization to specific URLs and methods in our application:
> ```
> @Bean
> public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
>     ...
>     .antMatchers("/auth/admin/*").hasRole("ADMIN")
>     .antMatchers("/auth/*").hasAnyRole("ADMIN","USER")
>     ...
> }
> ```
>
> <code></code>In the above example, we specified:
> - access to all the links starting with <em>/auth/,</em> restricting them to users that log in with role <em>USER</em> or role <em>ADMIN</em>
> - access to links starting with <em>/auth/admin/, </em>we need to have an <em>ADMIN</em> role

> [!expand-ui]- hasAuthority, hasAnyAuthority
> Roles and authorities are similar in Spring.
>
> The main difference is that roles have special semantics. Starting with Spring Security 4, the <code><font style="color: rgb(122,134,154);">‘<em>ROLE\_</em>‘</font></code> prefix is automatically added (if it's not already there) by any role-related method.
>
> So <code><font style="color: rgb(122,134,154);"><em>hasAuthority(‘ROLE\_ADMIN')</em></font></code> is similar to <code><font style="color: rgb(122,134,154);"><em>hasRole(‘ADMIN')</em></font></code> because the <code><font style="color: rgb(122,134,154);">‘<em>ROLE\_</em>‘</font></code> prefix gets added automatically.
>
> <strong>The benefit of using authorities is that we don't have to use the <em>ROLE\_</em> prefix at all.</strong>
>
> Here's a quick example of defining users with specific authorities:
> ```
> @Bean
> public InMemoryUserDetailsManager userDetailsService() {
>     UserDetails admin = User.withUsername("admin")
>         .password(encoder().encode("adminPass"))
>         .roles("ADMIN")
>         .build();
>     UserDetails user = User.withUsername("user")
>         .password(encoder().encode("userPass"))
>         .roles("USER")
>         .build();
>     return new InMemoryUserDetailsManager(admin, user);
> }
> ```
>
> We can then use these authorities expressions:
> ```
> @Bean
> public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
>     ...
>     .antMatchers("/auth/admin/*").hasAuthority("ADMIN")
>     .antMatchers("/auth/*").hasAnyAuthority("ADMIN", "USER")
>     ...
> }
> ```
>
> As we can see, we don't mention roles here at all.
>
> Additionally, starting with Spring 5, we need a [<em>PasswordEncoder</em>](https://www.baeldung.com/spring-security-5-default-password-encoder) bean:
> ```
> @Bean
> public PasswordEncoder passwordEncoder() {
>     return new BCryptPasswordEncoder();
> }
> ```

> [!expand-ui]- permitAll, denyAll
> We may either permit or deny access to some [[Uniform Resource Locator (URL)|URL]]s in our service.
> ```
> .antMatchers("/*").permitAll() // authorize all users (both anonymous and logged in) to access the page starting with ‘/'
> .antMatchers("/*").denyAll()   // deny all users
> ```

> [!expand-ui]- isAnonymous, isRememberMe, isAuthenticated, isFullyAuthenticated
> ```
> .antMatchers("/*").anonymous()     // enable all unauthorized users to access our main page
> .antMatchers("/*").authenticated() // only those who succesfully logged in has access
> ```
>
> Through the use of cookies, Spring enables remember-me capabilities, so there's no need to log into the system each time. We can read [more about <em>Remember Me</em> here](https://www.baeldung.com/spring-security-remember-me).
>
> In order to give access to users that were logged in by the remember me function, we can use:
> ```
> .antMatchers("/*").rememberMe()
> ```
>
> Finally, some parts of our services require the user to be authenticated again, even if the user is already logged in. For example, let's say a user wants to change the settings or payment information; it's good practice to ask for manual authentication in the more sensitive areas of the system.
>
> In order to do this, we can specify <em>isFullyAuthenticated()</em>, which returns <em>true</em> if the user isn't an anonymous or remember-me user:
> ```
> .antMatchers("/*").fullyAuthenticated()
> ```

> [!expand-ui]- principal, authentication
> These expressions allow us to access the <em>principal</em> object representing the current authorized (or anonymous) user and the current <em>Authentication</em> object from the <em>SecurityContext</em>, respectively.
>
> We can, for example, use <em>principal </em>to load a user's email, avatar, or any other data that's accessible from the logged-in user.
>
> And <em>authentication </em>provides information about the full <em>Authentication</em> object, along with its granted authorities.
>
> Both of these expressions are described in further detail in the article [Retrieve User Information in Spring Security](https://www.baeldung.com/get-user-in-spring-security).

> [!expand-ui]- hasPermission
> This expression is [documented](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/html/authorization.html), and intended to be a bridge between the expression system and Spring Security’s ACL system, allowing us to specify authorization constraints on individual domain objects based on abstract permissions.
>
> Let's look at an example. Imagine that we have a service that allows cooperative article writing, with a main editor who decides which articles proposed by the authors should be published.
>
> In order to allow the use of such a service, we can create the following methods with access control methods:
> ```
> @PreAuthorize("hasPermission(#articleId, 'isEditor')")
> public void acceptArticle(Article article) {
>    …
> }
> ```
>
> Only the authorized user can call this method, and they need to have <em>isEditor </em>permission in the service.
>
> We also need to remember to explicitly configure a <em>PermissionEvaluator</em> in our application context, where <em>customInterfaceImplementation</em> will be the class that implements <em>PermissionEvaluator</em>:
> ```
> @Override
> protected MethodSecurityExpressionHandler expressionHandler() {
>     DefaultMethodSecurityExpressionHandler expressionHandler = new DefaultMethodSecurityExpressionHandler();
>     expressionHandler.setPermissionEvaluator(new CustomInterfaceImplementation());
>     return expressionHandler;
> }
> ```
# Resources
- [https://www.baeldung.com/spring-security-expressions](https://www.baeldung.com/spring-security-expressions)
