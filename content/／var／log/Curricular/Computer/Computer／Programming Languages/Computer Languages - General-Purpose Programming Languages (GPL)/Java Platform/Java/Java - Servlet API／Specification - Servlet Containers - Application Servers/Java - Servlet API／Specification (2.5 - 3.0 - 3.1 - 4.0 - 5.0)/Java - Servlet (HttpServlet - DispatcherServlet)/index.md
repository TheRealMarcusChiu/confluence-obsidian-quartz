---
title: "Java - Servlet (HttpServlet - DispatcherServlet)"
created: 2021-07-08T20:04:59.129-05:00
modified: 2021-07-08T20:06:35.430-05:00
parent: "[[Java - Servlet API／Specification (2.5 - 3.0 - 3.1 - 4.0 - 5.0)]]"
children: []
---
The <code>DispatcherServlet</code> is an actual <code>Servlet</code> (it inherits from the <code>HttpServlet</code> base class)
# Servlet Interface
```
public interface Servlet {
    void init(ServletConfig var1) throws ServletException;

    ServletConfig getServletConfig();

    void service(ServletRequest var1, ServletResponse var2) throws ServletException, IOException;

    String getServletInfo();

    void destroy();
}
```
