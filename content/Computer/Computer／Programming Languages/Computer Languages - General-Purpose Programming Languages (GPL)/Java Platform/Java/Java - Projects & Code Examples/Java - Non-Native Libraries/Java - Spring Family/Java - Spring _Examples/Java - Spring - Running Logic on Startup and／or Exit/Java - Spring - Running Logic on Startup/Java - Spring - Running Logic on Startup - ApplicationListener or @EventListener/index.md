---
title: "Java - Spring - Running Logic on Startup - ApplicationListener or @EventListener"
created: 2020-10-19T23:20:46.568-05:00
modified: 2021-06-15T10:02:43.831-05:00
parent: "[[Java - Spring - Running Logic on Startup]]"
children: []
---
# ApplicationListener or @EventListener

is used for running logic after a [[Java - Spring - Context - Event／Events (ApplicationEvent - ApplicationListener - ApplicationEventPublisher)|Spring Event]] is thrown

In the examples below, we chose to catch <code><font style="color: rgb(128,128,128);">ContextRefreshedEvent</font></code>. Make sure to pick an appropriate event that suits your needs
# Catching ContextRefreshedEvents with ApplicationListener

In order to achieve this you need to create a bean that implements the <code><font style="color: rgb(128,128,128);">ApplicationListener\<ContextRefreshedEvent\></font></code> interface
```
@Component
public class StartupApplicationListenerExample implements ApplicationListener<ContextRefreshedEvent> {
 
    @Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
        System.out.println("Hello, World!");
    }
}
```
# Catching ContextRefreshedEvents with @EventListener

The same results can be achieved by using the newly-introduced <code><font style="color: rgb(128,128,0);">@EventListener</font></code> annotation:
```
@Component
public class EventListenerExampleBean {
 
    @EventListener
    public void onApplicationEvent(ContextRefreshedEvent event) {
        System.out.println("Hello, World!");
    }
}
```
