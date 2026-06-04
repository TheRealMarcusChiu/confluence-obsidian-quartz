---
title: "Java - Code Generation Library (CGLIB)"
created: 2022-06-05T17:13:43.105-05:00
modified: 2022-06-07T02:14:42.687-05:00
parent: "[[Java - Bytecode Manipulation Libraries]]"
children: []
---
###### Code Generation Library (CGLIB)
- is a [[Java - Bytecode Manipulation Libraries|byte instrumentation library]] used in many Java frameworks such as [[Java - Hibernate|Hibernate]] or [[Java - Spring Family|Spring]] which allows manipulating or creating classes after the compilation phase of a program
- the JDK dynamic proxy approach requires the target objects to implement one or more interfaces. What if you want to proxy legacy classes that do not have interfaces? You can use the CGLIB library
- uses [[Java - ASM|ASM]] underneath

# Dependencies

> [!expand]- maven dependencies
> ```
> <dependency>
>     <groupId>cglib</groupId>
>     <artifactId>cglib</artifactId>
>     <version>3.2.4</version>
> </dependency>
> ```
# Package Structure

```merge-table
{
  "rows": [
    [
      {
        "content": "net.sf.cglib.core",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Low-level bytecode manipulation classes; Most of them are related to [[Java - ASM|ASM]]."
    ],
    [
      {
        "content": "net.sf.cglib.transform",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Classes for class file transformations at runtime or build time"
    ],
    [
      {
        "content": "net.sf.cglib.proxy",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Classes for proxy creation and method interceptions"
    ],
    [
      {
        "content": "net.sf.cglib.reflect",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Classes for a faster reflection and C#-style delegates"
    ],
    [
      {
        "content": "net.sf.cglib.util",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Collection sorting utilities"
    ],
    [
      {
        "content": "net.sf.cglib.beans",
        "header": true,
        "bg": "#F4F5F7"
      },
      "JavaBean related utilities"
    ]
  ]
}
```
# Code Examples

> [!expand-ui]- Enhancer - creating proxies
> A service class that you want to proxy
> ```
> public class PersonService {
>
>     public String sayHello(String name) {
>         return "Hello " + name;
>     }
>
>     public Integer lengthOfName(String name) {
>         return name.length();
>     }
> }
> ```
>
> Using Enhancer to proxy class
> ```
> import net.sf.cglib.proxy.Enhancer;
> import net.sf.cglib.proxy.FixedValue;
> import net.sf.cglib.proxy.MethodInterceptor;
>
> public class Main {
>
>     public static void main(String[] args) {
>         Enhancer enhancer = new Enhancer();
>         enhancer.setSuperclass(PersonService.class);
>
>         enhancer.setCallback((MethodInterceptor) (obj, method, args, proxy) -> {
>             if (method.getDeclaringClass() != Object.class && method.getReturnType() == String.class) {
>                 return "Hello Tom!";
>             } else {
>                 return proxy.invokeSuper(obj, args);
>             }
>         });
>
>         PersonService proxy = (PersonService) enhancer.create();
>
>         String response1 = proxy.sayHello(null);
>         int response2 = proxy.lengthOfName("Mary");
>         System.out.println(response1);
>         System.out.println(response2);
> 	}
> }
> ```

> [!expand-ui]- BeanGenerator - creating beans/objects dynamically
> <code>[BeanGenerator](http://cglib.sourceforge.net/apidocs/net/sf/cglib/beans/BeanGenerator.html)</code> allows dynamic creation of beans and to add fields together with setter and getter methods. It can be used by code generation tools to generate simple [[Classes／Objects Types (POCO／POJO／POPO - Data Transfer Object DTO - Domain Model - Persistence Model - Java Data Object (JDO))|POJO]] objects
> ```
> import net.sf.cglib.beans.BeanGenerator;
>
> import java.lang.reflect.InvocationTargetException;
> import java.lang.reflect.Method;
>
> public class BeanGeneratorExample {
>     public static void main(String[] args) throws InvocationTargetException, IllegalAccessException, NoSuchMethodException {
>         BeanGenerator beanGenerator = new BeanGenerator();
>
>         // add property `name` (also adds methods: setName & getName)
>         beanGenerator.addProperty("name", String.class);
>
>         // create a bean object
>         Object myBean = beanGenerator.create();
>
>         // set instance field `name` with some value via CGLIB
>         Method setter = myBean.getClass().getMethod("setName", String.class);
>         setter.invoke(myBean, "some string value set by a cglib");
>
>         // get value of instance field `name` via CGLIB
>         Method getter = myBean.getClass().getMethod("getName");
>         String response = (String) getter.invoke(myBean);
>         System.out.println(response); // outputs: "some string value set by a cglib"
>     }
> }
> ```

> [!expand-ui]- Mixin - combining multiple objects together
> A <em>mixin</em> is a construct that allows combining multiple objects into one. We can include the behavior of a couple of classes and expose that behavior as a single class or interface. The CGLIB Mixins allow the combination of several objects into a single object. However, in order to do so all objects that are included within a mixin must be backed by interfaces.
>
> Let's say that we want to create a mixin of two interfaces. We need to define both interfaces and their implementations:
> ```
> public interface Interface1 {
>     String first();
> }
>
> public interface Interface2 {
>     String second();
> }
>
> public class Class1 implements Interface1 {
>     @Override
>     public String first() {
>         return "first behaviour";
>     }
> }
>
> public class Class2 implements Interface2 {
>     @Override
>     public String second() {
>         return "second behaviour";
>     }
> }
> ```
>
> To compose implementations of <em>Interface1</em> and <em>Interface2 </em>we need to create an interface that extends both of them:
> ```
> public interface MixinInterface extends Interface1, Interface2 { }
> ```
>
> By using a <em>create()</em> method from the [<em>Mixin</em>](http://cglib.sourceforge.net/apidocs/net/sf/cglib/proxy/Mixin.html) class we can include behaviors of <em>Class1</em> and <em>Class2</em> into a <em>MixinInterface:</em>
> ```
> Mixin mixin = Mixin.create(
>   new Class[]{ Interface1.class, Interface2.class, MixinInterface.class },
>   new Object[]{ new Class1(), new Class2() }
> );
> MixinInterface mixinDelegate = (MixinInterface) mixin;
>
> assertEquals("first behaviour", mixinDelegate.first());
> assertEquals("second behaviour", mixinDelegate.second());
> ```
# Resources
- [https://www.baeldung.com/cglib](https://www.baeldung.com/cglib)
- [https://objectcomputing.com/resources/publications/sett/november-2005-create-proxies-dynamically-using-cglib-library#:~:text=CGLIB%20is%20a%20powerful%2C%20high,dynaop%2C%20to%20provide%20method%20interceptions](https://objectcomputing.com/resources/publications/sett/november-2005-create-proxies-dynamically-using-cglib-library#:~:text=CGLIB%20is%20a%20powerful%2C%20high,dynaop%2C%20to%20provide%20method%20interceptions).
