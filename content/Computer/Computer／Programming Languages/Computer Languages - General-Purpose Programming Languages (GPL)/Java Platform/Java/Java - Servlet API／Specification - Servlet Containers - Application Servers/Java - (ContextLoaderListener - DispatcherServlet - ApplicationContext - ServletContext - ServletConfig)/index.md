---
title: "Java - (ContextLoaderListener - DispatcherServlet - ApplicationContext - ServletContext - ServletConfig)"
created: 2021-07-05T09:24:40.429-05:00
modified: 2021-07-05T09:56:42.194-05:00
parent: "[[Java - Servlet API／Specification - Servlet Containers - Application Servers]]"
children: []
---
### ContextLoaderListener vs DispatcherServlet
1. <code>ContextLoaderListener</code> creates root application context
2. Each <code>DispatcherServlet</code> entry creates one child application context
3. Child contexts can access beans defined in root context
4. Beans in root context cannot access beans in child contexts (directly)
5. All contexts are added to <code>ServletContext</code>.
6. You can access root context using <code>WebApplicationContextUtils</code> class

Generally, you will define all MVC related beans (controller and views etc) in <code>DispatcherServlet</code> context, and all cross-cutting beans such as security, transaction, services etc. at root context by <code>ContextLoaderListener</code>
### Application Context

It is a Spring specific thing. It is initialized by Spring. It holds all the bean definitions and life-cycle of the beans that are defined inside the spring configuration files. Servlet-Context has no idea about these things
### ServletContext

ServletContext is the object created by Servlet Container to share initial parameters or configuration information to the whole application

It is initialized when a Servlet application is deployed. Servlet Context holds all the configurations (init-param, context-params, etc) of the whole servlet application.
### ServletConfig

ServletConfig is an object containing some initial parameters or configuration information created by Servlet Container and passed to the servlet during initialization.

ServletConfig is for a particular servlet, that means one should store servlet specific information in web.xml and retrieve them using this object
### ServletContext vs ServletConfig
![[Java - (ContextLoaderListener - DispatcherServlet - ApplicationContext - ServletContext - ServletConfig)/servletcontext-servletconfig.jpg|500]]

```merge-table
{
  "rows": [
    [
      {
        "content": "ServletConfig",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "ServletContext",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "ServletConfig is servlet specific",
      "ServletContext is for whole application"
    ],
    [
      "Parameters of ServletConfig are present as name-value pair in <code><font style=\"color: rgb(128,128,128);\">\\<init-param\\></font></code> inside<code><font style=\"color: rgb(128,128,128);\">\\<servlet\\></font></code>.",
      "Parameters of ServletContext are present as name-value pair in <code><font style=\"color: rgb(128,128,128);\">\\<context-param\\></font></code> which is outside of <code><font style=\"color: rgb(128,128,128);\">\\<servlet\\></font></code> and inside<code><font style=\"color: rgb(128,128,128);\">\\<web-app\\></font></code>"
    ],
    [
      "ServletConfig object is obtained by <code><font style=\"color: rgb(128,128,128);\">getServletConfig()</font></code> method.",
      "ServletContext object is obtained by <code><font style=\"color: rgb(128,128,128);\">getServletContext()</font></code> method."
    ],
    [
      "Each servlet has got its own ServletConfig object.",
      "ServletContext object is only one and used by different servlets of the application."
    ],
    [
      "Use ServletConfig when only one servlet needs information shared by it.",
      "Use ServletContext when whole application needs information shared by it"
    ]
  ]
}
```
### ServletContext vs ServletConfig - Code Example

> [!expand]- Click here to expand...
> ```xml
> <web-app>
>
>     <context-param>
>         <param-name>Website-name</param-name>
>         <param-value>NewWebsite.tg</param-value>
>     </context-param>
>
>     <servlet>
>         <servlet-name>recruiter</servlet-name>
>         <servlet-class>Recruiter</servlet-class>
>         <init-param>
>             <param-name>Email</param-name>
>             <param-value>forRecruiter@xyz.com</param-value>
>         </init-param>
>     </servlet>
>     <servlet-mapping>
>         <servlet-name>recruiter</servlet-name>
>         <url-pattern>/servlet1</url-pattern>
>     </servlet-mapping>
>
>     <servlet>
>         <servlet-name>applicant</servlet-name>
>         <servlet-class>Applicant</servlet-class>
>         <init-param>
>             <param-name>Email</param-name>
>             <param-value>forApplicant@xyz.com</param-value>
>         </init-param>
>     </servlet>
>     <servlet-mapping>
>         <servlet-name>applicant</servlet-name>
>         <url-pattern>/servlet2</url-pattern>
>     </servlet-mapping>
>     
> </web-app>
> ```
> ### Servlet For Recruiter
> ```
> import java.io.*;
> import javax.servlet.*;
> import javax.servlet.http.*;
>   
> public class Recruiter extends HttpServlet {
>   
>     protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
>         String email = getServletConfig().getInitParameter("Email");
>         String website = getServletContext().getInitParameter("Website-name");
>         PrintWriter out = response.getWriter();
>         out.println("<center><h1>" + website + "</h1></center><br><p>Contact us:" + email);
>     }
> }
> ```
> ### Servlet For Applicant
> ```
> import java.io.*;
> import javax.servlet.ServletException;
> import javax.servlet.http.*;
>   
> public class Applicant extends HttpServlet {
>   
>     protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
>         String email = getServletConfig().getInitParameter("Email");
>         String website = getServletContext().getInitParameter("Website-name");
>         PrintWriter out = response.getWriter();
>         out.println("<center><h1>" + website + "</h1></center><br><p>Contact us:" + email);
>     }
> }
> ```
> ### Output: Deploy the app and open urls on localhost
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "[http://localhost:8080/servlet1](http://localhost:8080/servlet1)",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "[http://localhost:8080/serlvet2](http://localhost:8080/serlvet2)",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "![[Java - (ContextLoaderListener - DispatcherServlet - ApplicationContext - ServletContext - ServletConfig)/servlet1.jpg|500]]",
>       "![[Java - (ContextLoaderListener - DispatcherServlet - ApplicationContext - ServletContext - ServletConfig)/serlvet2.jpg|500]]"
>     ]
>   ]
> }
> ```
