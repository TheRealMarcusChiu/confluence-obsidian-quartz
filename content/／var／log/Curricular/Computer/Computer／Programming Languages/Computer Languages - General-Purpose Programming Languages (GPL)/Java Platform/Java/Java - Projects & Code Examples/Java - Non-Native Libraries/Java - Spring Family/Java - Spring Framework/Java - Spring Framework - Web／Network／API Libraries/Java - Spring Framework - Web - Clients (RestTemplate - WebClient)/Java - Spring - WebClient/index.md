---
title: "Java - Spring - WebClient"
created: 2021-03-07T11:58:04.633-06:00
modified: 2021-09-25T19:49:42.289-05:00
parent: "[[Java - Spring Framework - Web - Clients (RestTemplate - WebClient)]]"
children: []
---
<strong>WebClient</strong> is an asynchronous non-blocking version of [[Java - Spring - RestTemplate|RestTemplate]]
# Example Code
```
@Service
public class MyService {

    private final WebClient webClient;

    public MyService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://example.org").build();
    }

    public Mono<Details> someRestCall(String name) {
        return this.webClient.get().uri("/{name}/details", name).retrieve().bodyToMono(Details.class);
    }
}
```
# Resources
- [https://www.baeldung.com/spring-5-webclient](https://www.baeldung.com/spring-5-webclient)
- [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.webclient](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.webclient)
