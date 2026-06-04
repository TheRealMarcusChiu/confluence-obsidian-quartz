---
title: "Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)"
created: 2020-10-18T13:54:11.222-05:00
modified: 2022-12-22T09:54:43.364-06:00
parent: "[[Java - Spring Framework]]"
children:
  - "[[Java - Spring - AOP - Determine whether method was invoked by @Scheduled]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "AOP Framework",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Supported [[Aspect-Oriented Programming (AOP)|Weaving]] Types",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Spring AOP",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a Spring implementation of the [[Aspect-Oriented Programming (AOP)|AOP paradigm]]",
      "- runtime"
    ],
    [
      {
        "content": "AspectJ",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a more robust implementation of the AOP paradigm",
      "- compile time\n- load time\n- runtime"
    ]
  ]
}
```
# Code Examples
- <strong>Compile-Time Weaving</strong> - (Pure [[Java - AOP Frameworks|AspectJ]]) [https://github.com/SpringBootMarcusChiu/aspect-oriented-programming-compile-time-weaving](https://github.com/SpringBootMarcusChiu/aspect-oriented-programming-compile-time-weaving)
- <strong>Load Time Weaving</strong> - (Pure AspectJ) [https://github.com/SpringBootMarcusChiu/aspect-oriented-programming-load-time-weaving](https://github.com/SpringBootMarcusChiu/aspect-oriented-programming-load-time-weaving)
- <strong>Runtime Weaving</strong> - (Spring AOP) [https://github.com/SpringBootMarcusChiu/aspect-oriented-programming](https://github.com/SpringBootMarcusChiu/aspect-oriented-programming)

# Subpages
- [https://www.baeldung.com/spring-aop-vs-aspectj](https://www.baeldung.com/spring-aop-vs-aspectj)
- [https://docs.spring.io/spring-framework/docs/4.3.15.RELEASE/spring-framework-reference/html/aop.html](https://docs.spring.io/spring-framework/docs/4.3.15.RELEASE/spring-framework-reference/html/aop.html)
- [https://www.baeldung.com/spring-aop-annotation](https://www.baeldung.com/spring-aop-annotation)
- [https://www.baeldung.com/aspectj](https://www.baeldung.com/aspectj)
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Basics
- <strong><em>join-point</em></strong> - is a part of the code (method, constructor, or field assignment) we want to monitor
- <strong><em>pointcut</em></strong> - is a regular expression that matches <strong><em>join points</em></strong>, so the Spring will know that we want to monitor this particular part of the code
- <strong><em>advices </em></strong>- are methods that are bound to pointcuts that decide what to do with them
- <strong><em>aspect</em></strong> - is a place where several <strong>p</strong><strong><em>ointcuts</em></strong> are coupled with their <strong><em>advices</em></strong>

> [!expand-ui]- pointcut
> - <strong>Pointcut </strong>- matches join points
> - <strong>Pointcut Designator (PCD)</strong> - tells Spring what to match. allows you to limit the matching of join points
>
> ###### <strong>PCD - Types</strong>
> - <strong><em>execution</em></strong> - for matching method execution join points, this is the primary pointcut designator you will use when working with Spring AOP
> - <strong><em>within</em></strong> - limits matching to join points within certain types (simply the execution of a method declared within a matching type when using Spring AOP)
> - <strong><em>this</em></strong> - limits matching to join points (the execution of methods when using Spring AOP) where the bean reference (Spring AOP proxy) is an instance of the given type
> - <strong><em>target</em></strong> - limits matching to join points (the execution of methods when using Spring AOP) where the target object (application object being proxied) is an instance of the given type
> - <strong><em>args</em></strong> - limits matching to join points (the execution of methods when using Spring AOP) where the arguments are instances of the given types
> - <em><strong>bean</strong></em> - limits matching join points to a particular named Spring bean, or to a set of named Spring beans (when using wildcards)
> - <strong><em>@target</em></strong> - limits matching to join points (the execution of methods when using Spring AOP) where the class of the executing object has an annotation of the given type
> - <strong><em>@args</em></strong> - limits matching to join points (the execution of methods when using Spring AOP) where the RUNTIME type of the actual arguments passed have annotations of the given type(s)
> - <strong><em>@within</em></strong> - limits matching to join points within types that have the given annotation (the execution of methods declared in types with the given annotation when using Spring AOP)
> - <strong><em>@annotation</em></strong> - limits matching to join points where the subject of the join-point (method being executed in Spring AOP) has the given annotation
>
> AspectJ itself has type-based semantics and at an execution join point both <strong><code>this</code></strong> and <strong><code>target</code></strong> refer to the same object - the object executing the method
>
> Spring AOP is a proxy-based system and differentiates between:
> - the proxy object itself (bound to <strong><code>this</code></strong>)
> - the target object behind the proxy (bound to <strong><code>target</code></strong>)
>
> ###### PCD - Combining
>
> PCD expressions can be combined using '&&', '||' and '!'
> ###### PCD - Code Examples
>
> > [!expand-ui]- execution
> > Here is a pointcut expression general syntax (red means mandatory):
> >
> > ![[Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)/pointcut-expression.png|600]]
> >
> > some examples:
> > - expression matching all public methods:
> > 	- first \* means that it will match any return type
> > 	- \*(..) means that the expression will match any method, no matter how many arguments it contains
> >     ```
> >     execution(public * *(..))
> >     ```
> > - expression matching all setter methods:
> >     ```
> >     execution(* set*(..))
> >     ```
> > - expression matching all methods from AccountService class:
> >     ```
> >     execution(* com.xyz.service.AccountService.*(..))
> >     ```
> > - expression matching the entire service package and its sub-packages:
> >     ```
> >     execution(* com.xyz.service..*.*(..))
> >     ```
> > - expression matching methods which have int as the first parameter in the DemoClass:
> >     ```
> >     execution(public int DemoClass.*(int, ..))
> >     ```
>
> > [!expand-ui]- within
> > as an expression you need to provide package full name, so all the classes and methods from it will be matched (as shown earlier it can be achieved with <em>execution</em>, but in a more simple way)
> >
> > any join point (method execution only in Spring AOP) within the service package:
> > ```
> > within(com.xyz.service.*)
> > ```
> >
> > any join point (method execution only in Spring AOP) within the service package or a sub-package:
> > ```
> > within(com.xyz.service..*)
> > ```
>
> > [!expand-ui]- this & target
> > any join point (method execution only in Spring AOP) where the proxy implements the <code>AccountService</code> interface
> > ```
> > this(com.xyz.service.AccountService)
> > ```
> >
> > any join point (method execution only in Spring AOP) where the target object implements the <code>AccountService</code> interface
> > ```
> > target(com.xyz.service.AccountService)
> > ```
>
> > [!expand-ui]- args
> > any join point (method execution only in Spring AOP) which takes a single parameter, and where the argument passed at runtime is <code>Serializable</code>:
> > ```
> > args(java.io.Serializable)
> > ```Note that the pointcut given in this example is different to <code>execution(\* \*(java.io.Serializable))</code>: the args version matches if the argument passed at runtime is Serializable, the execution version matches if the method signature declares a single parameter of type <code>Serializable</code>.
>
> > [!expand-ui]- bean
> > any join point (method execution only in Spring AOP) on Spring beans having names that match <code>idOrNameOfBean</code>:
> > ```
> > bean(idOrNameOfBean)
> > ```
> >
> > any join point (method execution only in Spring AOP) on Spring beans having names that match the wildcard expression <code>\*Service</code>:
> > ```
> > bean(*Service)
> > ```
>
> > [!expand-ui]- @annotation
> > it limits to the <em>join points</em> that has specific annotation. One of the trick is to create own annotation and add it to the particular parts of the code
>
> > [!expand-ui]- @args
> > it is a combination of last two PCDs, it will look for particular argument type that is passed to the annotation
>
> > [!expand-ui]- @within, @target, @annotation
> > any join point (method execution only in Spring AOP) where the declared type of the target object has an <code>@Transactional</code> annotation:
> > ```
> > @within(org.springframework.transaction.annotation.Transactional)
> > ```
> >
> > any join point (method execution only in Spring AOP) where the target object has an <code>@Transactional</code> annotation:
> > ```
> > @target(org.springframework.transaction.annotation.Transactional)
> > ```
> >
> > any join point (method execution only in Spring AOP) where the executing method has an <code>@Transactional</code> annotation:
> > ```
> > @annotation(org.springframework.transaction.annotation.Transactional)
> > ```

> [!expand-ui]- advice
> Once the join points are defined let’s move on to methods that are called when pointcut constraints are met. They are advices and such can be divided into following types depending on when it will be executed:
> - <code><font style="color: rgb(128,128,0);">@Before</font></code> — Advice will be called before Jointpoint.
> - <code><font style="color: rgb(128,128,0);">@After</font></code> — Advice will be called after Jointpoint, regardless it has throw an exception or not.
> - <code><font style="color: rgb(128,128,0);">@AfterReturning</font></code> — Advice will be called after Jointpoint, unless it will throw an exception
> - <code><font style="color: rgb(128,128,0);">@AfterThrowing</font></code> — Advice will be called after Jointpoint, but only then when it will throe an exception
> - <code><font style="color: rgb(128,128,0);">@Around</font></code> — This kind of advice can be invoked before and after Jointpoint method is called
>
> ###### Advice - Code Examples
>
> > [!expand-ui]- @Before
> > ```
> > import org.aspectj.lang.annotation.Aspect;
> > import org.aspectj.lang.annotation.Before;
> >
> > @Aspect
> > public class BeforeExample {
> >
> >     @Before("execution(* com.xyz.myapp.dao.*.*(..))")
> >     public void doAccessCheck() {
> >         // ...
> >     }
> >
> > }
> > ```
>
> > [!expand-ui]- @After
> > TODO
>
> > [!expand-ui]- @AfterReturning
> > ```
> > import org.aspectj.lang.annotation.Aspect;
> > import org.aspectj.lang.annotation.AfterReturning;
> >
> > @Aspect
> > public class AfterReturningExample {
> >
> >     @AfterReturning(
> >         pointcut="com.xyz.myapp.SystemArchitecture.dataAccessOperation()",
> >         returning="retVal")
> >     public void doAccessCheck(Object retVal) {
> >         // ...
> >     }
> >
> > }
> > ```
>
> > [!expand-ui]- @AfterThrowing
> > ```
> > import org.aspectj.lang.annotation.Aspect;
> > import org.aspectj.lang.annotation.AfterThrowing;
> >
> > @Aspect
> > public class AfterThrowingExample {
> >
> >     @AfterThrowing(
> >         pointcut="com.xyz.myapp.SystemArchitecture.dataAccessOperation()",
> >         throwing="ex")
> >     public void doRecoveryActions(DataAccessException ex) {
> >         // ...
> >     }
> >
> > }
> > ```
>
> > [!expand-ui]- @Around
> > Around advice is declared using the <code>@Around</code> annotation. The first parameter of the advice method must be of type <code>ProceedingJoinPoint</code>. Within the body of the advice, calling <code>proceed()</code> on the <code>ProceedingJoinPoint</code> causes the underlying method to execute. The <code>proceed</code> method may also be called passing in an <code>Object\[\]</code> - the values in the array will be used as the arguments to the method execution when it proceeds.
> ###### Access to Current Join Point
> Any advice method may declare as its first parameter, a parameter of type <code>org.aspectj.lang.JoinPoint</code> (please note that around advice is <em>required</em> to declare a first parameter of type <code>ProceedingJoinPoint</code>, which is a subclass of <code>JoinPoint</code>. The <code>JoinPoint</code> interface provides a number of useful methods such as:
> - <code>getArgs()</code> returns the method arguments
> - <code>getThis()</code> returns the AOP proxy object
> - <code>getTarget()</code> returns the target object
> - <code>getSignature()</code> returns a description of the method that is being advised
> - <code>toString()</code> prints a useful description of the method being advised
>
> ### Passing Parameters to Advice
>
> > [!expand-ui]- Method 1
> > ```
> > @Before("com.xyz.myapp.SystemArchitecture.dataAccessOperation() && args(account,..)")
> > public void validateAccount(Account account) {
> >     // ...
> > }
> > ```The <code>args(account,..)</code> part of the pointcut expression serves two purposes: firstly, it restricts matching to only those method executions where the method takes at least one parameter, and the argument passed to that parameter is an instance of <code>Account</code>; secondly, it makes the actual <code>Account</code> object available to the advice via the <code>account</code> parameter
>
> > [!expand-ui]- Method 2
> > ```
> > @Pointcut("com.xyz.myapp.SystemArchitecture.dataAccessOperation() && args(account,..)")
> > private void accountDataAccessOperation(Account account) {}
> >
> > @Before("accountDataAccessOperation(account)")
> > public void validateAccount(Account account) {
> >     // ...
> > }
> > ```
> ###### Proceed with Arguments
>
> > [!expand-ui]- Example 1
> > ```
> > @Around("execution(List<Account> find*(..)) && " +
> >         "com.xyz.myapp.SystemArchitecture.inDataAccessLayer() && " +
> >         "args(accountHolderNamePattern)")
> > public Object preProcessQueryPattern(ProceedingJoinPoint pjp,
> >         String accountHolderNamePattern) throws Throwable {
> >     String newPattern = preProcess(accountHolderNamePattern);
> >     return pjp.proceed(new Object[] {newPattern});
> > }
> > ```
# Linking Pointcut to Advice

there are 2 ways:

> [!expand-ui]- in place pointcut - pointcut right above advice
> ```
> @Before("execution(void saveUser*(..))")
> public void saveUserAdvice() {
> 	System.out.println("User is saved, but don't know from which package method was used");
> }
> ```

> [!expand-ui]- pointcut & advice declared separately
> ```
> // declaring 2 pointcuts
> @Pointcut("execution(void saveUser*(..))")
> public void saveUserMethod() {}
>
> @Pointcut("within(com.wkrzywiec.library.service.*)")
> public void inServicePackage() {}
>
> // bind the pointcuts to 3 advices
>
> // both pointcuts are combined into one and bounded to an advice method
> @Before("saveUserMethod() && inServicePackage()")
> public void saveUserMethodInServicePackage() {
> 	System.out.println("User is saved using UserService class located in Service package.");
> }
>
> // just one pointcut is bound to an advice method
> @Before("saveUserMethod()")
> public void saveUserMethodInAnyPackage() {
> 	System.out.println("User is saved, but don't know from which package method was used!");
> }
>
> // both pointcuts are combined into one and bounded to an advice method
> @Before("saveUserMethod() || inServicePackage()")
> public void saveUserMethodInServicePackage() {
> 	System.out.println("Either");
> }
> ```
# Aspect Ordering

we need to use @Order annotation with an integer parameter — the lowest number the more important the aspect is so it will be executed first

NOTE: unfortunately it is not possible to order advices within one aspect

> [!expand-ui]- Code Example 1
> ```
> @Aspect
> @Component
> @Order(-13)
> public class RoorUserLoggingAspect{
>   @Before("execution(* saveUser(..))")
>   public void saveUser() {
>       System.out.println("This Aspect has the HIGHEST precedence");
>   }
> }
>
> @Aspect
> @Component
> @Order(0)
> public class RoorUserLoggingAspect{
>   @Before("execution(* saveUser(..))")
>   public void saveUser() {
>       System.out.println("This Aspect has the MIDDLE precedence");
>   }
> }
>
> @Aspect
> @Component
> @Order(75)
> public class RoorUserLoggingAspect{
>   @Before("execution(* saveUser(..))")
>   public void saveUser() {
>       System.out.println("This Aspect has the LOWEST precedence");
>   }
> }
> ```
# Aspect Instantiation Models

By default, there will be a single instance of each aspect within the application context. AspectJ calls this the singleton instantiation model. It is possible to define aspects with alternate lifecycles:Spring supports AspectJ’s <code>perthis</code> and <code>pertarget</code> instantiation models (<code>percflow, percflowbelow,</code> and <code>pertypewithin</code> are not currently supported)

> [!expand-ui]- perthis
> ```
> @Aspect("perthis(com.xyz.myapp.SystemArchitecture.businessService())")
> public class MyAspect {
>
>     private int someState;
>
>     @Before(com.xyz.myapp.SystemArchitecture.businessService())
>     public void recordServiceUsage() {
>         // ...
>     }
> }
> ```
>
> The effect of the <code>'perthis'</code> clause is that one aspect instance will be created for each unique service object executing a business service (each unique object bound to 'this' at join points matched by the pointcut expression). The aspect instance is created the first time that a method is invoked on the service object. The aspect goes out of scope when the service object goes out of scope. Before the aspect instance is created, none of the advice within it executes. As soon as the aspect instance has been created, the advice declared within it will execute at matched join points, but only when the service object is the one this aspect is associated with. See the AspectJ programming guide for more information on per-clauses.
>
> The <code>'pertarget'</code> instantiation model works in exactly the same way as perthis, but creates one aspect instance for each unique target object at matched join points
# Proxying Mechanisms

Spring AOP uses either JDK dynamic proxies or CGLIB to create the proxy for a given target object. (JDK dynamic proxies are preferred whenever you have a choice).

If the target object to be proxied implements at least one interface then a JDK dynamic proxy will be used. All of the interfaces implemented by the target type will be proxied. If the target object does not implement any interfaces then a CGLIB proxy will be created.
# Understanding AOP Proxies

> [!expand]- Click here to expand...
> Consider first the scenario where you have a plain-vanilla, un-proxied, nothing-special-about-it, straight object reference, as illustrated by the following code snippet.
> ```
> public class SimplePojo implements Pojo {
>
>     public void foo() {
>         // this next method invocation is a direct call on the 'this' reference
>         this.bar();
>     }
>
>     public void bar() {
>         // some logic...
>     }
> }
> ```
>
> If you invoke a method on an object reference, the method is invoked <em>directly</em> on that object reference, as can be seen below
>
> ![[Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)/aop-proxy-plain-pojo-call.png|400]]
> ```
> public class Main {
>
>     public static void main(String[] args) {
>
>         Pojo pojo = new SimplePojo();
>
>         // this is a direct method call on the 'pojo' reference
>         pojo.foo();
>     }
> }
> ```
>
> Things change slightly when the reference that the client code has is a proxy. Consider the following diagram and code snippet.
>
> ![[Java - Spring Framework - Core - AOP Frameworks (AspectJ - Spring AOP)/aop-proxy-call.png|400]]
> ```
> public class Main {
>
>     public static void main(String[] args) {
>
>         ProxyFactory factory = new ProxyFactory(new SimplePojo());
>         factory.addInterface(Pojo.class);
>         factory.addAdvice(new RetryAdvice());
>
>         Pojo pojo = (Pojo) factory.getProxy();
>
>         // this is a method call on the proxy!
>         pojo.foo();
>     }
> }
> ```
>
> The key thing to understand here is that the client code inside the <code>main(..)</code> of the <code>Main</code> class <em>has a reference to the proxy</em>. This means that method calls on that object reference will be called on the proxy, and as such the proxy will be able to delegate to all of the interceptors (advice) that are relevant to that particular method call. However, once the call has finally reached the target object, the <code>SimplePojo</code> reference, in this case, any method calls that it may make on itself, such as <code>this.bar()</code> or <code>this.foo()</code>, are going to be invoked against the <em>this</em> reference, and <em>not</em> the proxy. This has important implications. It means that self-invocation is <em>not</em> going to result in the advice associated with a method invocation getting a chance to execute.
>
> Okay, so what is to be done about this? The best approach (the term best is used loosely here) is to refactor your code such that the self-invocation does not happen. For sure, this does entail some work on your part, but it is the best, least-invasive approach. The next approach is absolutely horrendous, and I am almost reticent to point it out precisely because it is so horrendous. You can (choke!) totally tie the logic within your class to Spring AOP by doing this:
> ```
> public class SimplePojo implements Pojo {
>
>     public void foo() {
>         // this works, but... gah!
>         ((Pojo) AopContext.currentProxy()).bar();
>     }
>
>     public void bar() {
>         // some logic...
>     }
> }
> ```
>
> This totally couples your code to Spring AOP, <em>and</em> it makes the class itself aware of the fact that it is being used in an AOP context, which flies in the face of AOP. It also requires some additional configuration when the proxy is being created:
> ```
> public class Main {
>
>     public static void main(String[] args) {
>         ProxyFactory factory = new ProxyFactory(new SimplePojo());
>         factory.adddInterface(Pojo.class);
>         factory.addAdvice(new RetryAdvice());
>         factory.setExposeProxy(true);
>
>         Pojo pojo = (Pojo) factory.getProxy();
>
>         // this is a method call on the proxy!
>         pojo.foo();
>     }
> }
> ```
>
> Finally, it must be noted that AspectJ does not have this self-invocation issue because it is not a proxy-based AOP framework.
