---
title: "Java - Spring - Security (Working with the Session)"
created: 2020-12-28T11:14:56.616-06:00
modified: 2020-12-28T11:18:31.032-06:00
parent: "[[Java - Spring - Security (Session)]]"
children: []
---
### Session Scoped Beans

> [!expand]- Click here to expand...
> A bean can be defined with <em>session</em> scope simply by using the @Scope annotation on beans declared in the web-Context:
> ```
> @Component
> @Scope("session")
> public class Foo { .. }
> ```
>
> Or with XML:
> ```
> <bean id="foo" scope="session"/>
> ```
>
> Then, the bean can simply be injected into another bean:
> ```
> @Autowired
> private Foo theFoo;
> ```
>
> And Spring will bind the new bean to the lifecycle of the HTTP Session
### Injecting the Raw Session into a Controller

> [!expand]- Click here to expand...
> The raw HTTP Session can also be injected directly into a <em>Controller</em> method:
> ```
> @RequestMapping(..)
> public void fooMethod(HttpSession session) {
>     session.setAttribute(Constants.FOO, new Foo());
>     //...
>     Foo foo = (Foo) session.getAttribute(Constants.FOO);
> }
> ```
### Obtaining the Raw Session

> [!expand]- Click here to expand...
> The current HTTP Session can also be obtained programmatically via the <strong>raw Servlet API</strong>:
> ```
> ServletRequestAttributes attr = (ServletRequestAttributes) 
>     RequestContextHolder.currentRequestAttributes();
> HttpSession session= attr.getRequest().getSession(true); // true == allow create
> ```
