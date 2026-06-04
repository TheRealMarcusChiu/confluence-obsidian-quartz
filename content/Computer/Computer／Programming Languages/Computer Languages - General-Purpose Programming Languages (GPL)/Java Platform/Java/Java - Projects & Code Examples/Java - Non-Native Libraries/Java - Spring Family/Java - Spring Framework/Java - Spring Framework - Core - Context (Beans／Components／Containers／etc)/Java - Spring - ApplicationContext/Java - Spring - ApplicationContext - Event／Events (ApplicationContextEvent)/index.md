---
title: "Java - Spring - ApplicationContext - Event／Events (ApplicationContextEvent)"
created: 2021-07-04T23:06:04.573-05:00
modified: 2021-07-04T23:09:28.418-05:00
parent: "[[Java - Spring - ApplicationContext]]"
children: []
---
<code><font style="color: rgb(51,102,255);">[[Java - Spring - ApplicationContext|ApplicationContext]]</font></code> supports event handling with the help of the <code><font style="color: rgb(51,102,255);">[[Java - Spring - Context - Event／Events (ApplicationEvent - ApplicationListener - ApplicationEventPublisher)|ApplicationEvent]]</font></code> class and the <code><font style="color: rgb(51,102,255);">[[Java - Spring - Context - Event／Events (ApplicationEvent - ApplicationListener - ApplicationEventPublisher)|ApplicationListener]]</font></code> interface

Spring contains the following builtin <code><font style="color: rgb(51,102,255);">ApplicationContextEvent</font></code>s
- <code><font style="color: rgb(51,102,255);">ContextStartedEvent</font></code>
- <code><font style="color: rgb(51,102,255);">ContextRefreshedEvent</font></code>
- <code><font style="color: rgb(51,102,255);">ContextStoppedEvent</font></code>
- <code><font style="color: rgb(51,102,255);">ContextClosedEvent</font></code>

# Example <code>ContextRefreshedEvent</code> Listener
###### Programmatic Listener
```
@Component
public class StartupApplicationListenerExample implements ApplicationListener<ContextRefreshedEvent> {
    @Override
    public void onContextStartedEvent(ContextStartedEvent event) {
        System.out.println("Context refreshed event received");
    }
}
```
###### Annotation-Driven Listener
```
@Component
public class StartupApplicationListenerExample {
	@EventListener
	public void onContextStartedEvent(ContextStartedEvent event) {
		System.out.println("Context refreshed event received");
	}
}
```
