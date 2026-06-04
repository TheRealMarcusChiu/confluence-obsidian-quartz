---
title: "Java - Spring - Context - Event／Events (ApplicationEvent - ApplicationListener - ApplicationEventPublisher)"
created: 2021-06-05T14:09:36.670-05:00
modified: 2021-07-04T23:11:52.507-05:00
parent: "[[Java - Spring Framework - Core - Context (Beans／Components／Containers／etc)]]"
children: []
---
# Builtin Events
- [[Java - Spring - Transaction Bound Events - @TransactionalEventListener]]
- [[Java - Spring - ApplicationContext - Event／Events (ApplicationContextEvent)|Java - Spring - ApplicationContext - Event/Events (ApplicationContextEvent)]]

# Custom (Event - Publisher - Listener)

guidelines to follow:
- the event should extend <code><font style="color: rgb(128,128,128);">ApplicationEvent</font></code>
- the publisher should inject an <code><font style="color: rgb(128,128,128);">ApplicationEventPublisher</font></code> object
- the listener should implement the <code><font style="color: rgb(128,128,128);">ApplicationListener</font></code> interface

# Custom Event
```
public class CustomSpringEvent extends ApplicationEvent {
    private String message;

    public CustomSpringEvent(Object source, String message) {
        super(source);
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
}
```
# Custom Publisher & Listener

> [!expand-ui]- Custom Event (Synchronous)
> custom events are by <strong>default synchronous</strong>
> ### Publisher
> ```
> @Component
> public class CustomSpringEventPublisher {
>     @Autowired
>     private ApplicationEventPublisher applicationEventPublisher;
>
>     public void publishCustomEvent(final String message) {
>         System.out.println("Publishing custom event. ");
>         CustomSpringEvent customSpringEvent = new CustomSpringEvent(this, message);
>         applicationEventPublisher.publishEvent(customSpringEvent);
>     }
> }
> ```
> ### Listener
> ```
> @Component
> public class CustomSpringEventListener implements ApplicationListener<CustomSpringEvent> {
>     @Override
>     public void onApplicationEvent(CustomSpringEvent event) {
>         System.out.println("Received spring custom event - " + event.getMessage());
>     }
> }
> ```
> ### Annotation-Driven Listener
> ```
> @EventListener
> public void receiveEvent(CustomSpringEvent cse) {
>     System.out.println("Received custom event");
> }
> ```

> [!expand-ui]- Custom Event (Asynchronous)
> To turn on asynchronous events, create an <em>ApplicationEventMulticaster</em> bean with an executor; for our purposes here <em>SimpleAsyncTaskExecutor </em>works well:
> ```
> @Configuration
> public class AsynchronousSpringEventsConfig {
>     @Bean(name = "applicationEventMulticaster")
>     public ApplicationEventMulticaster simpleApplicationEventMulticaster() {
>         SimpleApplicationEventMulticaster eventMulticaster =
>           new SimpleApplicationEventMulticaster();
>         
>         eventMulticaster.setTaskExecutor(new SimpleAsyncTaskExecutor());
>         return eventMulticaster;
>     }
> }
> ```
>
> The event, the publisher, and the listener implementations remain the same as before – but now, the listener will asynchronously deal with the event in a separate thread
# Resources
- [https://www.baeldung.com/spring-events](https://www.baeldung.com/spring-events)
- [https://www.baeldung.com/spring-context-events](https://www.baeldung.com/spring-context-events)
