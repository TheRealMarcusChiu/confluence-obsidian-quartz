---
title: "Java - Spring - Security (Retrieve User Information)"
created: 2020-12-28T11:19:05.528-06:00
modified: 2022-10-07T00:58:33.758-05:00
parent: "[[Java - Spring Security]]"
children: []
---
article: [https://www.baeldung.com/get-user-in-spring-security](https://www.baeldung.com/get-user-in-spring-security)
# Get the User in a Bean

> [!expand]- Click here to expand...
> The simplest way to retrieve the currently authenticated principal is via a static call to the <em>SecurityContextHolder</em>:
> ```
> Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
> String currentPrincipalName = authentication.getName();
> ```
>
> An improvement to this snippet is first checking if there is an authenticated user before trying to access it:
> ```
> Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
> if (!(authentication instanceof AnonymousAuthenticationToken)) {
>     String currentUserName = authentication.getName();
>     return currentUserName;
> }
> ```
>
> There are of course downsides to having a static call like this – decreased testability of the code being one of the more obvious. Instead, we'll explore alternative solutions for this very common requirement.
# Get the User in a Controller

> [!expand]- Click here to expand...
> In a <em>@Controller</em> annotated bean, there are additional options. The principal can be defined directly as a method argument and it will be correctly resolved by the framework:
> ```
> @Controller
> public class SecurityController {
>
>     @RequestMapping(value = "/username", method = RequestMethod.GET)
>     @ResponseBody
>     public String currentUserName(Principal principal) {
>         return principal.getName();
>     }
> }
> ```
>
> Alternatively, we can also use the authentication token:
> ```
> @Controller
> public class SecurityController {
>
>     @RequestMapping(value = "/username", method = RequestMethod.GET)
>     @ResponseBody
>     public String currentUserName(Authentication authentication) {
>         return authentication.getName();
>     }
> }
> ```
>
> The API of the <em>Authentication</em> class is very open so that the framework remains as flexible as possible. Because of this, the Spring Security principal can only be retrieved as an <em>Object</em> and needs to be cast to the correct <em>UserDetails</em> instance:
> ```
> UserDetails userDetails = (UserDetails) authentication.getPrincipal();
> System.out.println("User has authorities: " + userDetails.getAuthorities());
> ```
>
> And finally, directly from the HTTP request:
> ```
> @Controller
> public class GetUserWithHTTPServletRequestController {
>
>     @RequestMapping(value = "/username", method = RequestMethod.GET)
>     @ResponseBody
>     public String currentUserNameSimple(HttpServletRequest request) {
>         Principal principal = request.getUserPrincipal();
>         return principal.getName();
>     }
> }
> ```
# Get the User via a Custom Interface

> [!expand]- Click here to expand...
> To fully leverage the Spring dependency injection and be able to retrieve the authentication everywhere, not just in <em>@Controller beans</em>, we need to hide the static access behind a simple facade:
> ```
> public interface IAuthenticationFacade {
>     Authentication getAuthentication();
> }
>
> @Component
> public class AuthenticationFacade implements IAuthenticationFacade {
>
>     @Override
>     public Authentication getAuthentication() {
>         return SecurityContextHolder.getContext().getAuthentication();
>     }
> }
> ```
>
> The facade exposes the <em>Authentication</em> object while hiding the static state and keeping the code decoupled and fully testable:
> ```
> @Controller
> public class GetUserWithCustomInterfaceController {
>     @Autowired
>     private IAuthenticationFacade authenticationFacade;
>
>     @RequestMapping(value = "/username", method = RequestMethod.GET)
>     @ResponseBody
>     public String currentUserNameSimple() {
>         Authentication authentication = authenticationFacade.getAuthentication();
>         return authentication.getName();
>     }
> }
> ```
# Get the User in JSP

> [!expand]- Click here to expand...
> The currently authenticated principal can also be accessed in JSP pages, by leveraging the spring security taglib support. First, we need to define the tag in the page:
> <span style="white-space: pre-wrap"><code>\<<font style="color: rgb(99,177,117);">%@</font> taglib prefix=<font style="color: rgb(78,147,89);">"security"</font> uri=<font style="color: rgb(78,147,89);">"http://www.springframework.org/security/tags"</font> %\></code></span>
>
> Next, we can refer to the principal:
> <span style="white-space: pre-wrap"><code>\<<font style="color: rgb(99,177,117);">security:authorize</font> access=<font style="color: rgb(78,147,89);">"isAuthenticated()"</font>\></code><br><code>    authenticated as \<<font style="color: rgb(99,177,117);">security:authentication</font> property=<font style="color: rgb(78,147,89);">"principal.username"</font> /\>\</<font style="color: rgb(99,177,117);">security:authorize</font>\></code></span>
# Get the User in Thymeleaf

> [!expand]- Click here to expand...
> [Thymeleaf](http://www.thymeleaf.org/index.html) is a modern, server-side web templating engine, with good [integration with the Spring MVC](https://www.baeldung.com/thymeleaf-in-spring-mvc) framework. Let's see how to access the currently authenticated principal in a page with Thymeleaf engine.
>
> First, we need to add the [<em>thymeleaf-spring5</em>](https://search.maven.org/search?q=a:thymeleaf-spring5) and the [<em>thymeleaf-extras-springsecurity5</em>](https://search.maven.org/search?q=a:thymeleaf-extras-springsecurity5) dependencies to integrate Thymeleaf with Spring Security:
> <span style="white-space: pre-wrap"><code>\<<font style="color: rgb(99,177,117);">dependency</font>\>\<<font style="color: rgb(99,177,117);">groupId</font>\>org.thymeleaf.extras\</<font style="color: rgb(99,177,117);">groupId</font>\>\<<font style="color: rgb(99,177,117);">artifactId</font>\>thymeleaf-extras-springsecurity5\</<font style="color: rgb(99,177,117);">artifactId</font>\>\</<font style="color: rgb(99,177,117);">dependency</font>\>\<<font style="color: rgb(99,177,117);">dependency</font>\>\<<font style="color: rgb(99,177,117);">groupId</font>\>org.thymeleaf\</<font style="color: rgb(99,177,117);">groupId</font>\>\<<font style="color: rgb(99,177,117);">artifactId</font>\>thymeleaf-spring5\</<font style="color: rgb(99,177,117);">artifactId</font>\>\</<font style="color: rgb(99,177,117);">dependency</font>\></code></span>
>
> Now we can refer to the principal in the HTML page using the <em>sec:authorize</em> attribute:
> <span style="white-space: pre-wrap"><code>\<<font style="color: rgb(99,177,117);">html</font> xmlns:th=<font style="color: rgb(78,147,89);">"https://www.thymeleaf.org"</font> xmlns:sec=<font style="color: rgb(78,147,89);">"https://www.thymeleaf.org/thymeleaf-extras-springsecurity5"</font>\>\<<font style="color: rgb(99,177,117);">body</font>\>\<<font style="color: rgb(99,177,117);">div</font> sec:authorize=<font style="color: rgb(78,147,89);">"isAuthenticated()"</font>\></code><br><code>      Authenticated as \<<font style="color: rgb(99,177,117);">span</font> sec:authentication=<font style="color: rgb(78,147,89);">"name"</font>\>\</<font style="color: rgb(99,177,117);">span</font>\>\</<font style="color: rgb(99,177,117);">div</font>\>\</<font style="color: rgb(99,177,117);">body</font>\>\</<font style="color: rgb(99,177,117);">html</font>\></code></span>
