---
title: "Java - Spring - WebSockets - 403 Forbidden Error (SSL)"
created: 2020-06-28T14:21:40.739-05:00
modified: 2020-06-28T14:25:39.897-05:00
parent: "[[Java - Spring Framework - Web - WebSockets]]"
children: []
---
by default <font style="color: rgb(128,128,128);">WebSocketConfig</font> would not serve [[Hyper Text Transfer Protocol Secure (HTTPS)|https://]] but only [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|http://]]

add <font style="color: rgb(128,128,128);">.setAllowedOrigins("https://chat.marcuschiu.com")</font> into the <font style="color: rgb(128,128,128);">WebSocketConfig</font> like below
```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

  @Override
  public void configureMessageBroker(MessageBrokerRegistry config) {
    config.enableSimpleBroker("/your/topic");
    config.setApplicationDestinationPrefixes("/yourapp");
  }
  @Override
  public void registerStompEndpoints(StompEndpointRegistry registry) {
    registry.addEndpoint("/your/endpoint").setAllowedOrigins("https://chat.marcuschiu.com").withSockJS();
  }
}
```
