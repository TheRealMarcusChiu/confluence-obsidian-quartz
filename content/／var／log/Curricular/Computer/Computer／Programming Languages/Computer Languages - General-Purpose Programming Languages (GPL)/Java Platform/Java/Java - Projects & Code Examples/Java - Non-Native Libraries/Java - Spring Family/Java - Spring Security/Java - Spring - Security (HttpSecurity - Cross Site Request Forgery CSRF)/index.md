---
title: "Java - Spring - Security (HttpSecurity - Cross Site Request Forgery CSRF)"
created: 2022-01-05T17:05:39.460-06:00
modified: 2022-01-05T17:54:23.312-06:00
parent: "[[Java - Spring Security]]"
children:
  - "[[Java - Spring - Security (HttpSecurity - CookieCsrfTokenRepository)]]"
---
Protecting against [[Cross-Site Request Forging (CSRF)]]
# 1 - Configure CSRF Protection
```
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable();
	}
}
```
# 2 - Include the CSRF Token

see: [https://docs.spring.io/spring-security/site/docs/5.0.x/reference/html/csrf.html#csrf-include-csrf-token](https://docs.spring.io/spring-security/site/docs/5.0.x/reference/html/csrf.html#csrf-include-csrf-token)
# 3 - Other
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
