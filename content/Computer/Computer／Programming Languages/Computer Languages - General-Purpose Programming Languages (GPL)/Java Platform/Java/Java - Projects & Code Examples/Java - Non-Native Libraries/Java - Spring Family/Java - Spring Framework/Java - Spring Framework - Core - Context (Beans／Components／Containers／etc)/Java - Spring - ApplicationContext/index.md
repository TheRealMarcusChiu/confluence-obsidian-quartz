---
title: "Java - Spring - ApplicationContext"
created: 2020-10-20T14:51:58.149-05:00
modified: 2021-07-04T23:28:30.904-05:00
parent: "[[Java - Spring Framework - Core - Context (Beans／Components／Containers／etc)]]"
children:
  - "[[Java - Spring - ApplicationContext - Accessing ApplicationContext]]"
  - "[[Java - Spring - ApplicationContext - Event／Events (ApplicationContextEvent)]]"
  - "[[Java - Spring - ApplicationContext - Hierarchy (Parent & Child ApplicationContext)]]"
  - "[[Java - Spring - ApplicationContext - WebApplicationContext]]"
  - "[[Java - Spring - ApplicationContext - ＊ContextInitializer]]"
  - "[[Java - Spring - Context - MessageSource & message.properties & Internationalization]]"
---
# <strong>ApplicationContext - Responsibilities</strong>

an <code><font style="color: rgb(51,102,255);">ApplicationContext</font></code> has the following responsibilities:
- <code><font style="color: rgb(128,128,128);">BeanFactory</font></code> methods for accessing application beans/components
- load file resources in a generic way
- publish <code>[[Java - Spring - ApplicationContext - Event／Events (ApplicationContextEvent)|ApplicationContextEvent]]</code>s to registered listeners
- resolve [[Java - Spring - Context - MessageSource & message.properties & Internationalization|messages and internationalization]]

# <strong>ApplicationContext - Implementations/Types</strong>
<code><font style="color: rgb(51,102,255);">ApplicationContext</font></code> has several implementations, such as:

```merge-table
{
  "rows": [
    [
      {
        "content": "AnnotationConfigApplicationContext",
        "header": true,
        "bg": "#F4F5F7"
      },
      "reads configuration using annotations, especially <code><font style=\"color: rgb(128,128,0);\">@Configuration</font></code>\n\n> [!expand]- Click here to expand...\n> the <code><font style=\"color: rgb(51,102,255);\">AnnotationConfigApplicationContext</font></code> class was introduced in Spring 3.0. It can take classes annotated with <code><font style=\"color: rgb(128,128,0);\">@Configuration</font></code>, <code><font style=\"color: rgb(128,128,0);\">@Component</font></code>, and JSR-330 metadata as input.\n>\n> So, let's see a simple example of using the <code><font style=\"color: rgb(51,102,255);\">AnnotationConfigApplicationContext</font></code> container with our Java-based configuration:\n> ```\n> ApplicationContext context = new AnnotationConfigApplicationContext(AccountConfig.class);\n> AccountService accountService = context.getBean(AccountService.class);\n> ```"
    ],
    [
      {
        "content": "AnnotationConfigWebApplicationContext",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is a web-based variant of <code><font style=\"color: rgb(51,102,255);\">AnnotationConfigApplicationContext</font></code>\n\n> [!expand]- Click here to expand...\n> We may use this when we configure:\n> - Spring's <code><font style=\"color: rgb(51,102,255);\">ContextLoaderListener</font></code> servlet listener\n> - Spring MVC <code><font style=\"color: rgb(51,102,255);\">DispatcherServlet</font></code> in a web.xml file\n>\n> Moreover, from Spring 3.0 onward, we can also configure this application context container programmatically. All we need to do is to implement the <code><font style=\"color: rgb(51,102,255);\">WebApplicationInitializer</font></code> interface:\n> ```\n> public class MyWebApplicationInitializer implements WebApplicationInitializer {\n> \tpublic void onStartup(ServletContext container) throws ServletException {\n>     \tAnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();\n>     \tcontext.register(AccountConfig.class);\n>     \tcontext.setServletContext(container);\n>     \t// servlet configuration\n>   \t}\n> }\n> ```"
    ],
    [
      {
        "content": "AnnotationConfigReactiveWebServerApplicationContext",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is a reactive variant of <code><font style=\"color: rgb(51,102,255);\">AnnotationConfigWebApplicationContext</font></code>"
    ],
    [
      {
        "content": "XmlWebApplicationContext",
        "header": true,
        "bg": "#F4F5F7"
      },
      "is an XML based configuration in a web application\n\n> [!expand]- Click here to expand...\n> Configuring this container is like the <code><font style=\"color: rgb(51,102,255);\">AnnotationConfigWebApplicationContext</font></code> class only that we can configure it in <code>web.xml</code> or implement the <code><font style=\"color: rgb(51,102,255);\">WebApplicationInitializer </font></code>interface\n> ```\n> public class MyXmlWebApplicationInitializer implements WebApplicationInitializer {\n> \tpublic void onStartup(ServletContext container) throws ServletException {\n>     \tXmlWebApplicationContext context = new XmlWebApplicationContext();\n>     \tcontext.setConfigLocation(\"/WEB-INF/spring/applicationContext.xml\");\n>     \tcontext.setServletContext(container);\n>     \t// Servlet configuration\n>   \t}\n> }\n> ```"
    ],
    [
      {
        "content": "FileSystemXMLApplicationContext",
        "header": true,
        "bg": "#F4F5F7"
      },
      "loads XML-based Spring configuration file from the file system or from URLs\n\n> [!expand]- Click here to expand...\n> This class is useful when we need to load the <code><font style=\"color: rgb(51,102,255);\">ApplicationContext</font></code> programmatically. In general, test harnesses and standalone applications are some of the possible use cases for this.\n>\n> For example, let's see how we can create this Spring container and load the beans for our XML-based configuration\n> ```\n> String path = \"C:/myProject/src/main/resources/applicationcontext/account-bean-config.xml\";\n>  \n> ApplicationContext context = new FileSystemXmlApplicationContext(path);\n> AccountService accountService = context.getBean(\"accountService\", AccountService.class);\n> ```"
    ],
    [
      {
        "content": "ClassPathXmlApplicationContext",
        "header": true,
        "bg": "#F4F5F7"
      },
      "takes configuration from an XML file on the classpath\n\n> [!expand]- Click here to expand...\n> <code>[ClassPathXmlApplicationContext](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/support/ClassPathXmlApplicationContext.html)</code> class is similar to <code><font style=\"color: rgb(51,102,255);\">FileSystemXMLApplicationContext<em>,</em></font></code> it's useful for test harnesses as well as for application contexts embedded within JARs\n> ```\n> ApplicationContext context = new ClassPathXmlApplicationContext(\"applicationcontext/account-bean-config.xml\");\n> AccountService accountService = context.getBean(\"accountService\", AccountService.class);\n> ```"
    ]
  ]
}
```
# <strong>ApplicationContext - Other</strong>
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
