---
title: "Java - Spring - Security (Custom FilterChain, AuthenticationManager, & AuthenticationProvider)"
created: 2022-10-07T02:13:43.237-05:00
modified: 2022-10-07T02:46:06.731-05:00
parent: "[[Java - Spring Security]]"
children: []
---
# Custom FilterChain, AuthenticationManager, & AuthenticationProvider
```
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();

        if ("externaluser".equals(username) && "pass".equals(password)) {
            return new UsernamePasswordAuthenticationToken(username, password, grantedAuthorities);
        } else {
            throw new BadCredentialsException("External system authentication failed");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
```
```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public AuthenticationManager authManager(HttpSecurity http,
                                             CustomAuthenticationProvider customAuthProvider,
                                             UserDetailsService usersDetailService1,
                                             PasswordEncoder passwordEncoder1,
                                             UserDetailsService usersDetailService2,
                                             PasswordEncoder passwordEncoder2) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);

        // configure 2 AuthenticationProviders
        authenticationManagerBuilder.authenticationProvider(customAuthProvider);
        authenticationManagerBuilder.inMemoryAuthentication().withUser("memuser").password(passwordEncoder().encode("pass")).roles("USER");

//        // configure 2 UsersDetailsServices
//        authenticationManagerBuilder.userDetailsService(usersDetailService1).passwordEncoder(passwordEncoder1);
//        authenticationManagerBuilder.userDetailsService(usersDetailService2).passwordEncoder(passwordEncoder2);

        return authenticationManagerBuilder.build();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```
# Rest API
```
@RestController
public class MultipleAuthController {
    @GetMapping("/api/ping")
    public String getPing() {
        return "OK";
    }
}
```
# Test Authentication

[[curl]] request
```
curl --header "Accept:application/json" -i --user user1:user1Pass http://localhost:8080/api/ping
```

curl response
```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Set-Cookie: JSESSIONID=B8F0EFA81B78DE968088EBB9AFD85A60; Path=/api/ping; HttpOnly
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Sun, 02 Jun 2013 17:50:40 GMT
```
