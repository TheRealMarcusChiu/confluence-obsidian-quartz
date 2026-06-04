---
title: "Java - Spring - Enabling Async (@EnableAsync - @Async)"
created: 2020-10-20T22:01:03.100-05:00
modified: 2021-09-27T00:06:08.623-05:00
parent: "[[Java - Spring Framework - Integration - Concurrency & Job／Task Scheduler／Manager Frameworks]]"
children: []
---
- code: [https://github.com/SpringBootMarcusChiu/async](https://github.com/SpringBootMarcusChiu/async)
- article: [https://www.baeldung.com/spring-async](https://www.baeldung.com/spring-async)

# 1 - @EnableAsync
```
@Configuration
@EnableAsync
public class SpringAsyncConfig { ... }
```

<code><font style="color: rgb(128,128,0);">@EnableAsync</font></code> by default, Spring will be searching for an associated thread pool definition: either a unique <code>[[Java - Spring - TaskExecutor|TaskExecutor]]</code> bean in the context, or an <code>[[Java - ExecutorService & Executor|Executor]]</code> bean named "<code><font style="color: rgb(122,134,154);">taskExecutor</font></code>" otherwise. If neither of the two is resolvable, a <code>[[Java - Spring - TaskExecutor|SimpleAsyncTaskExecutor]]</code> will be used to process async method invocations. Besides, annotated methods having a <code><font style="color: rgb(122,134,154);">void</font></code> return type cannot transmit any exception back to the caller. By default, such uncaught exceptions are only logged. To customize your own <code><font style="color: rgb(122,134,154);">Executor</font></code> see [[Java - Spring - Enabling Async (@EnableAsync - @Async)|Configuring Executor]] section below

<code><font style="color: rgb(128,128,0);">@EnableAsync</font></code> has a few options:
- <strong><code>annotation</code></strong> - By default, <code><font style="color: rgb(128,128,0);">@EnableAsync</font></code> detects Spring's <code><font style="color: rgb(128,128,0);">@Async</font></code> annotation and the EJB 3.1 <code><font style="color: rgb(128,128,128);">javax.ejb.Asynchronous</font></code>. We can use this option to detect other, user-defined annotation types as well.
- <strong><code>mode</code></strong> - indicates the type of advice that should be used — JDK proxy-based or [[Java - AOP Frameworks|AspectJ]] weaving.
- <strong><code>proxyTargetClass</code></strong> - indicates the type of proxy that should be used — CGLIB or JDK. This attribute has effect only if the <code>mode</code> is set to <code><font style="color: rgb(128,128,128);">AdviceMode.PROXY</font></code>.
- <strong><code>order</code></strong> - sets the order in which <code><font style="color: rgb(128,128,128);">AsyncAnnotationBeanPostProcessor</font></code> should be applied. By default, it runs last so that it can take into account all existing proxies.

# 2 - @Async

<code><font style="color: rgb(128,128,0);">@Async</font></code> has two limitations:
- can only be applied to <font style="color: rgb(128,128,128);">public</font> methods
- self-invocation won't work — calling the async method from within the same class won't work

###### Methods With Void Return Type
```
@Async
public void test() {
    // do stuff
}
```
###### Methods With Return Type
```
@Async
public Future<String> asyncMethodWithReturnType() {
    // sleep
    return new AsyncResult<String>("Hello, World!");
}
```
# 3 - Configuring Executor

By default, Spring uses a <code><font style="color: rgb(128,128,128);">[[Java - Spring - TaskExecutor|SimpleAsyncTaskExecutor]]</font></code> to actually run these methods asynchronously. But we can override the defaults at two levels:
- application level
- method level

###### Override the Executor at the Method Level
```
@Configuration
@EnableAsync
public class SpringAsyncConfig {
    @Bean(name = "threadPoolTaskExecutor")
    public Executor threadPoolTaskExecutor() {
        return new ThreadPoolTaskExecutor();
    }
}

@Async("threadPoolTaskExecutor")
public void asyncMethodWithConfiguredExecutor() {
    // do something
}
```
###### Override the Executor at the Application Level

implement the <code><font style="color: rgb(128,128,128);">AsyncConfigurer</font></code> interface. So, it has to implement the <code><font style="color: rgb(128,128,128);">getAsyncExecutor()</font></code> method. Here, we will return the executor for the entire application. This now becomes the default executor to run methods annotated with <code><font style="color: rgb(128,128,0);">@Async</font></code>:
```
@Configuration
@EnableAsync
public class SpringAsyncConfig implements AsyncConfigurer {
	@Override
	public Executor getAsyncExecutor() {
		return new ThreadPoolTaskExecutor();
	}
}
```
# 4 - Exception Handling

When a method return type is a <code><em>[[Java - Future & CompletableFuture|Future]]</em></code>, exception handling is easy. <code><font style="color: rgb(128,128,128);"><em>Future.get()</em></font></code> method will throw the exception.

But if the return type is <code><font style="color: rgb(128,128,128);"><em>void</em></font></code>, exceptions will not be propagated to the calling thread. So, we need to add extra configurations to handle exceptions

The<em><code><font style="color: rgb(128,128,128);"> handleUncaughtException()</font></code> </em>method is invoked when there are any uncaught asynchronous exceptions
```
@Configuration
@EnableAsync
public class SpringAsyncConfig implements AsyncConfigurer {
    @Override
    public void handleUncaughtException(Throwable throwable, Method method, Object... obj) {
        System.out.println("Exception message - " + throwable.getMessage());
        System.out.println("Method name - " + method.getName());
        for (Object param : obj) {
            System.out.println("Parameter value - " + param);
        }
    }
}
```
