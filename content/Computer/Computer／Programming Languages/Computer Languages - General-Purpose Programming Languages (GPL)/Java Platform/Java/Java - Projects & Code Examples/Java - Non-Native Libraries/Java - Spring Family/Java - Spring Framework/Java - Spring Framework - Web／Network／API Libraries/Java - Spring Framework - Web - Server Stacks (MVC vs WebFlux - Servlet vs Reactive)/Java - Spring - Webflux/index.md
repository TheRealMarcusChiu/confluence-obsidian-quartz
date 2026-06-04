---
title: "Java - Spring - Webflux"
created: 2020-10-21T02:16:50.701-05:00
modified: 2022-12-20T09:37:38.826-06:00
parent: "[[Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)]]"
children: []
---
# Spring WebFlux Framework

Spring WebFlux:
- was introduced in Spring 5.0 to support [reactive web](https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html) in a non-blocking manner
- internally uses [[Java - Project Reactor／Reactive Core (Mono - Flux)|Project Reactor]] and its publisher implementations: [[Java - Project Reactor／Reactive Core (Mono - Flux)|Mono and Flux]]
- supports reactive backpressure and [[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)|Servlet 3.1+]] with its non-blocking I/O. Hence, it can be run on [[Netty]], [[JBoss Undertow|Undertow]], [[Eclipse Jetty|Jetty]], [[Apache Tomcat|Tomcat]], or any Servlet 3.1+ compatible server
- supports two programming models:
	- Annotation-based reactive components
	- Functional routing and handling

# Dependency

The following dependency pulls in all other required dependencies:
- <code><font style="color: rgb(122,134,154);"><em>spring-boot</em></font></code> and <em><code><font style="color: rgb(122,134,154);">spring-boot-starter</font></code> </em>for basic Spring Boot application setup
- <em><code><font style="color: rgb(122,134,154);">spring-webflux</font></code> </em>framework
- <code><font style="color: rgb(122,134,154);"><em>reactor-core</em></font></code> that we need for reactive streams and also <code><font style="color: rgb(122,134,154);"><em>reactor-netty</em></font></code>
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
    <version>2.2.6.RELEASE</version>
</dependency>
```
# Code Example

Let's write our <code><font style="color: rgb(122,134,154);">WebFluxFilter</font></code>, which implements <code><font style="color: rgb(122,134,154);">WebFilter</font></code>:
```
@Component
public class WebFluxFilter implements org.springframework.web.server.WebFilter {
    @Override
    public Mono filter(ServerWebExchange serverWebExchange, WebFilterChain webFilterChain) {
        return Mono.delay(Duration.ofMillis(200))
          .then(webFilterChain.filter(serverWebExchange));
    }
}
```

At last, we have our <code><font style="color: rgb(122,134,154);">WebFluxController</font></code>. It exposes an endpoint called <code><font style="color: rgb(0,128,0);">"/flux\_result"</font></code> and returns a <code><font style="color: rgb(122,134,154);">Mono\<String\></font></code> as the response
```
@RestController
public class WebFluxController {
    @GetMapping("/flux_result")
    public Mono getResult(ServerHttpRequest request) {
       return Mono.defer(() -> Mono.just("Result is ready!"))
         .delaySubscription(Duration.ofMillis(5000));
    }
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- code: [https://github.com/SpringBootMarcusChiu/webflux](https://github.com/SpringBootMarcusChiu/webflux)
- articles:
	- intro: [https://www.baeldung.com/spring-webflux](https://www.baeldung.com/spring-webflux)
	- spring repository: [https://thepracticaldeveloper.com/full-reactive-stack-2-backend-webflux/#repository-layer](https://thepracticaldeveloper.com/full-reactive-stack-2-backend-webflux/#repository-layer)
	- spring security: [https://www.baeldung.com/spring-security-5-reactive](https://www.baeldung.com/spring-security-5-reactive)
