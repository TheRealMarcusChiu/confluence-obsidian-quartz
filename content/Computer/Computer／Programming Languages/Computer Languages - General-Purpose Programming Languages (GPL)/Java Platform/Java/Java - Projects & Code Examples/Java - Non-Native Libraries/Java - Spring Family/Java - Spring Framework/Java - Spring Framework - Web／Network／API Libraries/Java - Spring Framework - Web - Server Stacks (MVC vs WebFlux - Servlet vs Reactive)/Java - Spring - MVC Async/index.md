---
title: "Java - Spring - MVC Async"
created: 2021-04-25T17:58:30.127-05:00
modified: 2022-02-21T00:23:25.482-06:00
parent: "[[Java - Spring Framework - Web - Server Stacks (MVC vs WebFlux - Servlet vs Reactive)]]"
children: []
---
related:
- [[Java - Spring - ApplicationContext - WebApplicationContext]]
- [[Java - Servlet API／Specification - Servlet Containers - Application Servers|Java - Servlet API/Specification - Servlet Containers - Application Servers]]
- [[Java - Spring - Enabling Async (@EnableAsync - @Async)]]

# History

Spring 3.0 introduced the <code><font style="color: rgb(128,128,0);">@Async</font></code> annotation. <code><font style="color: rgb(128,128,0);">@Async</font></code>'s goal is to allow the application to run heavy-load jobs on a separate thread. Also, the caller can wait for the result if interested. Hence the return type must not be <code><font style="color: rgb(128,128,128);">void</font></code>, and it be can be any of <code>[[Java - Future & CompletableFuture|Future]]</code>, <code>[[Java - Future & CompletableFuture|CompletableFuture]]</code>, or <code><font style="color: rgb(128,128,128);">[[Java - Spring - ListenableFuture|ListenableFuture]]</font></code>.

Moreover, [Spring 3.2](https://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/new-in-3.2.html) introduced the <code><font style="color: rgb(128,128,128);">org.springframework.web.context.request.async</font></code> package that, together with [Servlet 3.0](https://blogs.oracle.com/enterprisetechtips/asynchronous-support-in-servlet-30), brings the joy of the asynchronous process to the web layer. Thus, since Spring 3.2, <code><font style="color: rgb(128,128,0);">@Async</font></code> can be used in classes annotated as [[Java - Spring - Web - @Controller @RestController|@Controller or @RestController]].
# Request Flow

When the client initiates a request, it goes through all matched filters in the filter chain until it arrives at the <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> instance.

Then, the servlet takes care of the async dispatching of the request. It marks the request as started by calling <code><font style="color: rgb(128,128,128);">AsyncWebRequest\#startAsync</font></code>, transfers the request handling to an instance of <code><font style="color: rgb(128,128,128);">WebSyncManager</font></code>, and finishes its job without committing the response. The filter chain also is traversed in the reverse direction to the root.

<code><font style="color: rgb(128,128,128);">WebAsyncManager</font></code> submits the request processing job in its associated [[Java - ExecutorService & Executor|ExecutorService]]. Whenever the result is ready, it notifies <code><font style="color: rgb(128,128,128);">DispatcherServlet</font></code> for returning the response to the client.
# Spring Async Implementation
```
@SpringBootApplication
@EnableAsync
public class AsyncVsWebFluxApp {
    public static void main(String[] args) {
        SpringApplication.run(AsyncVsWebFluxApp.class, args);
    }
}
```

Then we have <code><font style="color: rgb(128,128,128);">AsyncFilter</font></code>, which implements <code><font style="color: rgb(128,128,128);">javax.servlet.Filter</font></code>
```
@Component
public class CustomFilter implements Filter {
    @SneakyThrows
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) {
        System.out.println("inside filter");
		Thread.sleep(2000);
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
```

Finally, we develop our <code><font style="color: rgb(128,128,128);">AsyncController</font></code> with the <code><font style="color: rgb(0,128,0);">"</font></code><code><font style="color: rgb(0,128,0);">/async-result"</font></code> endpoint
```
@RestController
public class AsyncController {
    @GetMapping("/async-result")
    @Async
    public CompletableFuture getResultAsyc(HttpServletRequest request) {
		System.out.println("inside controller");
		Thread.sleep(5000);
        return CompletableFuture.completedFuture("Result is ready!");
    }
}
```

Because of the <code><font style="color: rgb(128,128,0);">@Async</font></code> above <code><font style="color: rgb(128,128,128);">getResultAsync</font></code>, this method is executed in a separate thread on the [[Java - Spring - Enabling Async (@EnableAsync - @Async)|application's default ExecutorService]].
