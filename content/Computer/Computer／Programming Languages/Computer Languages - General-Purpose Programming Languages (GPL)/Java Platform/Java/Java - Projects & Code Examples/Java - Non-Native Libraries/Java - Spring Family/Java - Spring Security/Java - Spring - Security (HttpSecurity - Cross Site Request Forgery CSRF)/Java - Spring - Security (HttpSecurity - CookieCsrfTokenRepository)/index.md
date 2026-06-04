---
title: "Java - Spring - Security (HttpSecurity - CookieCsrfTokenRepository)"
created: 2022-01-05T17:52:26.816-06:00
modified: 2022-01-05T17:53:47.783-06:00
parent: "[[Java - Spring - Security (HttpSecurity - Cross Site Request Forgery CSRF)]]"
children: []
---
[https://docs.spring.io/spring-security/site/docs/5.0.x/reference/html/csrf.html#csrf-cookie](https://docs.spring.io/spring-security/site/docs/5.0.x/reference/html/csrf.html#csrf-cookie)
```
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf()
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
	}
}
```
