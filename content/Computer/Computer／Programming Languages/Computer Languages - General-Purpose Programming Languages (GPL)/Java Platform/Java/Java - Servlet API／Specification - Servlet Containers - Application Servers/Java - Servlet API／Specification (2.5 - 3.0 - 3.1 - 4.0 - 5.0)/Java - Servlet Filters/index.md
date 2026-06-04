---
title: "Java - Servlet Filters"
created: 2021-06-27T17:52:55.454-05:00
modified: 2021-07-05T12:41:36.394-05:00
parent: "[[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)]]"
children: []
---
<strong>Servlet Filters</strong> are pluggable java components that we can use to intercept and process requests before they are sent to servlets and response after servlet code is finished and before container sends the response back to the client

![[Java - Servlet Filters/servlet-filter.png|500]]
# Servlet Filter Interface

Servlet Filter interface is similar to Servlet interface and we need to implement it to create our own servlet filter. Servlet Filter interface contains lifecycle methods of a Filter and it’s managed by servlet container.

Servlet Filter interface lifecycle methods are:
```
package javax.servlet;

import java.io.IOException;

public interface Filter {
    default void init(FilterConfig filterConfig) throws ServletException {}

    void doFilter(ServletRequest var1, ServletResponse var2, FilterChain var3) throws IOException, ServletException;

    default void destroy() {}
}
```
1. <code><font style="color: rgb(128,128,128);"><strong>void init(FilterConfig filterConfig)</strong></font></code> – When container initializes the Filter, this is the method that gets invoked. This method is called only once in the lifecycle of filter and we should initialize any resources in this method. <strong>FilterConfig</strong> is used by container to provide init parameters and servlet context object to the Filter. We can throw ServletException in this method.
2. <code><font style="color: rgb(128,128,128);"><strong>doFilter(ServletRequest var1, ServletResponse var2, FilterChain var3)</strong></font></code> – This is the method invoked every time by container when it has to apply filter to a resource. Container provides request and response object references to filter as argument. <strong>FilterChain</strong> is used to invoke the next filter in the chain. This is a great example of [<strong>Chain of Responsibility Pattern</strong>](https://www.journaldev.com/1617/chain-of-responsibility-design-pattern-in-java).
3. <code><font style="color: rgb(128,128,128);"><strong>void destroy()</strong></font></code> – When container offloads the Filter instance, it invokes the destroy() method. This is the method where we can close any resources opened by filter. This method is called only once in the lifetime of filter.

# Servlet WebFilter Annotation

<code><font style="color: rgb(128,128,0);">javax.servlet.annotation.WebFilter</font></code> was introduced in Servlet 3.0 and we can use this annotation to declare a servlet filter. We can use this annotation to define init parameters, filter name and description, servlets, url patterns and dispatcher types to apply the filter. If you make frequent changes to the filter configurations, its better to use web.xml because that will not require you to recompile the filter class
# Resources
- [https://www.journaldev.com/1933/java-servlet-filter-example-tutorial](https://www.journaldev.com/1933/java-servlet-filter-example-tutorial)
- [https://docs.oracle.com/javaee/6/tutorial/doc/bnagb.html](https://docs.oracle.com/javaee/6/tutorial/doc/bnagb.html)
