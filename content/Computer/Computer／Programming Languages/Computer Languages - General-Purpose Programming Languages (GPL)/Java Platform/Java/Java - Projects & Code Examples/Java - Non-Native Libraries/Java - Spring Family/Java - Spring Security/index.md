---
title: "Java - Spring Security"
created: 2020-12-28T10:47:09.218-06:00
modified: 2022-12-22T09:53:02.849-06:00
parent: "[[Java - Spring Family]]"
children:
  - "[[Java - Spring - Security (@EnableWebSecurity)]]"
  - "[[Java - Spring - Security (Authentication with a Database-backed UserDetailsService)]]"
  - "[[Java - Spring - Security (Custom FilterChain, AuthenticationManager, & AuthenticationProvider)]]"
  - "[[Java - Spring - Security (HttpSecurity - Cross Site Request Forgery CSRF)]]"
  - "[[Java - Spring - Security (JDBC Authentication)]]"
  - "[[Java - Spring - Security (Logout)]]"
  - "[[Java - Spring - Security (Method Security)]]"
  - "[[Java - Spring - Security (OAuth 2.0 & OpenID Connect)]]"
  - "[[Java - Spring - Security (Remember Me)]]"
  - "[[Java - Spring - Security (Retrieve User Information)]]"
  - "[[Java - Spring - Security (Role vs GrantedAuthority)]]"
  - "[[Java - Spring - Security (Session)]]"
  - "[[Java - Spring - Security (Testing Method Security With Custom UserDetailsService)]]"
  - "[[Java - Spring - Security (WebSecurity vs HttpSecurity)]]"
  - "[[Java - Spring - Spring Security Expressions]]"
---
# Packages

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>spring-security-core</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "this provides the Core Spring Security support for Access Control, Method-level Security and it can be used with non-web applications as well"
    ],
    [
      {
        "content": "<strong>spring-security-web</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "web support for spring security"
    ],
    [
      {
        "content": "<strong>spring-security-config</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "to use the rich Spring Security XML namespace and annotations"
    ],
    [
      {
        "content": "<strong>spring-boot-starter-security</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a Spring Boot Starter that brings together security-related jars:\n- spring-security-core\n- spring-security-config\n- spring-security-web\n- etc"
    ]
  ],
  "tableStyle": "width: 97.9478%;"
}
```
# Architecture

> [!expand]- Click here to expand...
> - [https://www.javainuse.com/webseries/spring-security-jwt/chap3](https://www.javainuse.com/webseries/spring-security-jwt/chap3)
> - [https://spring.io/guides/topicals/spring-security-architecture](https://spring.io/guides/topicals/spring-security-architecture)
>
> ![[Java - Spring Security/spring-security-architecture.jpg|400]]
>
> > [!expand-ui]- 1 Filters
> > Any incoming request is intercepted by a chain of filters before it reaches the Dispatcher Servlet
> >
> > ![[Java - Spring Security/spring-security-filters.jpeg|400]]
> >
> > It is here where authentication and authorization takes place
> >
> > Based on the type of requests there are different Authentication Filters like:
> > - BasicAuthenticationFilter
> > - UsernamePasswordAuthenticationFilter
> > - etc
>
> > [!expand-ui]- 2 Authentication Object Creation
> > When the request is intercepted by the appropriate AuthenticationFilter it retrieves the credentials from the request and creates the Authentication Object.
> >
> > If the extracted credentials are username and password, then UsernamePasswordAuthenticationToken is created
> >
> > ![[Java - Spring Security/authentication-object-creation.jpeg|301]]
>
> > [!expand-ui]- 3 AuthenticationManager
> > The authenticate() method of AuthenticationManager is then invoked, taking in the Authentication object created by the filter as a parameter. After successful authentication, it returns an object of type Authentication
> >
> > The Authentication Manager is only an interface and actual implementation of the authenticate method is provided by the ProviderManager
> >
> > ![[Java - Spring Security/authentication-manager.jpeg|400]]
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "Field",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "Authentication (User Request before Authentication)",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "Authentication (After Authentication)",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "principal",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "username",
> >       "User Object"
> >     ],
> >     [
> >       {
> >         "content": "granted authorities",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "empty",
> >       "ROLE_ADMIN, etc"
> >     ],
> >     [
> >       {
> >         "content": "authenticated",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "false",
> >       "true"
> >     ]
> >   ]
> > }
> > ```
>
> > [!expand-ui]- 4 ProviderManager
> > the ProviderManager has a list of AuthenticationProviders
> >
> > From it's authenticate method it calls the authenticate method of the appropriate AuthenticateProvider. In response it gets the Principal Authentication Object if the authentication is successful
> >
> > ![[Java - Spring Security/provider-manager.jpeg|400]]
>
> > [!expand-ui]- 5 AuthenticationProvider
> > The AuthenicationProvider is an interface with a single authenticate method
> >
> > ![[Java - Spring Security/authentication-provider.jpeg|400]]
> >
> > It has various implementations like:
> > - CasAuthenticationProvider
> > - DaoAuthenticationProvider
> > - etc
> >
> > Depending on the implementation an appropriate AuthenicationProvider implementation is used.
> >
> > It is in the AuthenticationProvider Implementation authenticate method where all the actual authentication takes place
> >
> > ![[Java - Spring Security/dao-authentication-provider.jpeg|301]]
>
> > [!expand-ui]- 6 UserDetailsService
> > The UserDetailsService is an interface having a single method named loadUserByUsername()
> >
> > ![[Java - Spring Security/user-details-service.jpeg|350]]
> >
> > It has various implementations:
> > - CachingUserDetailsService
> > - JDBCDaoImpl
> > - etc
> >
> > Based on the implementation an appropriate UserDetailsService is called
> >
> > ![[Java - Spring Security/user-details-service-implementations.jpeg|350]]
> >
> > It is responsible for fetching the User Object with username and password against which the incoming User Object will be compared
> > ### With AuthenticationProvider
> >
> > The AuthenticationProvider uses the UserDetailsService to fetch the User Object corresponding to the username.
> >
> > It fetches this User Object from either a:
> > - database
> > - internal memory
> > - other sources
> >
> > This User object credentials are then compared with the incoming Authentication Object credentials. If Authentication is successful then the Principal Authentication Object is returned in response
> >
> > ![[Java - Spring Security/principal-authentication-object.jpeg|350]]
# Code Examples
- [https://github.com/SpringBootMarcusChiu/security-example](https://github.com/SpringBootMarcusChiu/security-example)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security)
- [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.security](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.security)
