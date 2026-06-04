---
title: "Java - Spring Cloud - Resilience4j"
created: 2021-03-28T15:02:49.171-05:00
modified: 2022-12-22T09:57:13.209-06:00
parent: "[[Java - Spring Cloud Circuit Breaker - Pattern & Fault／Latency Tolerance & Resilience Frameworks]]"
children: []
---
see: [[Java - Resilience4j]]
### Code Example
- [https://github.com/SpringBootMarcusChiu/resilience4j-example](https://github.com/SpringBootMarcusChiu/resilience4j-example)

# 1 - Declare Dependencies

dependencies pom.xml
```xml
<!-- Resilience4j -->
<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>

<!-- Reactive Resilience4j -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-reactor-resilience4j</artifactId>
</dependency>

<!-- AOP is required for Resilience4j's @CircuitBreaker to work -->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```
# 2 - Configure Resilience4j's Circuit Breakers

two ways to configure Resilience4j's CircuitBreakers:
- programmatically
- application.yml and let Spring auto-configure beans

###### Programmatically
```java
import io.github.resilience4j.common.circuitbreaker.configuration.CircuitBreakerConfigCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.Duration;
import static io.github.resilience4j.circuitbreaker.CircuitBreakerConfig.SlidingWindowType.COUNT_BASED;

@Configuration
public class CircuitBreakerConfig {

    @Bean
    public CircuitBreakerConfigCustomizer someRemoteSvcCircitBreaker() {
        //https://resilience4j.readme.io/docs/circuitbreaker
        return CircuitBreakerConfigCustomizer
                .of("marcusServiceA", builder -> {
                    builder.slidingWindowSize(5);
                    builder.failureRateThreshold(3);
                    builder.waitDurationInOpenState(Duration.ofSeconds(10));
                    builder.slowCallDurationThreshold(Duration.ofSeconds(5));
                    builder.slowCallRateThreshold(100);
                    builder.permittedNumberOfCallsInHalfOpenState(2);
                    builder.slidingWindowType(COUNT_BASED);
                });
    }
}
```
###### Via application.yml & Spring Auto-Configuration
```yml
resilience4j.circuitbreaker:
  instances:
    marcusServiceA:
      registerHealthIndicator: true
      slidingWindowSize: 10
    marcusServiceB:
      registerHealthIndicator: true
      slidingWindowSize: 10
      permittedNumberOfCallsInHalfOpenState: 3
      slidingWindowType: TIME_BASED
      minimumNumberOfCalls: 20
      waitDurationInOpenState: 50s
      failureRateThreshold: 50
      eventConsumerBufferSize: 10
# see example code for more
```
# 3 - Using Configured Circuit Breakers
```java
import io.github.resilience4j.bulkhead.annotation.Bulkhead;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import org.springframework.stereotype.Service;

@Service
public class RemoteServiceClient {

    @CircuitBreaker(name = "marcusServiceA", fallbackMethod = "callFail")
    public String call() {
        System.out.println("RemoteServiceClient.call() - executed");
        throw new RuntimeException("error with remote service");
    }

    private String callFail(RuntimeException e) {
        System.out.println("RemoteServiceClient.callFail() - executed");
        return "remote call failed";
    }
}
```
