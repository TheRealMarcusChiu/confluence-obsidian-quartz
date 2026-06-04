---
title: "Java - Spring - Spring Cloud Stream (Functional Programming Implementation)"
created: 2022-08-11T02:37:54.148-05:00
modified: 2022-08-11T02:51:55.769-05:00
parent: "[[Java - Spring Cloud Stream]]"
children: []
---
# Dependencies
```xml
<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-stream</artifactId>
</dependency>

<!-- For Tests -->
<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-stream</artifactId>
	<scope>test</scope>
	<classifier>test-binder</classifier>
	<type>test-jar</type>
</dependency>
```
# Define Functions
```java
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.Duration;
import java.util.Random;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

@Slf4j
@Configuration
public class AmqpConfiguration {

    @Bean
    public Supplier<Flux<Integer>> fizzBuzzProducer() {
	    Random random = new Random();
        return () -> Flux.interval(Duration.ofSeconds(5)).map(value -> random.nextInt(1000 - 1) + 1).log();
    }

    @Bean
    public Function<Flux<Integer>, Flux<String>> fizzBuzzProcessor() {
        return longFlux -> longFlux
                .map(i -> i + i)
                .log();
    }

    @Bean
    public Consumer<String> fizzBuzzConsumer() {
        return (value) -> log.info("Consumer Received : " + value);
    }
}
```
# Configure Functions
The configuration is similar to the annotation-based approach but the binding name is determined by the framework based on this naming convention: <strong><em>\<function name\>-in-\<index\></em></strong> where <em>\<index\></em> is always 0 for most cases unless [functions with multiple inputs and outputs](https://docs.spring.io/spring-cloud-stream/docs/3.1.3/reference/html/spring-cloud-stream.html#_functions_with_multiple_input_and_output_arguments).
```yml
spring:
  cloud:
    stream:
      function:
        definition: fizzBuzzProducer;fizzBuzzProcessor;fizzBuzzConsumer

      bindings:
		# tells fizzBuzzProducer() to publish to topic `numbers`
        fizzBuzzProducer-out-0:
          destination: numbers

		# tells fizzBuzzProcessor() to subscribe from topic `numbers`
        fizzBuzzProcessor-in-0:
          destination: numbers
		# tells fizzBuzzProcessor() to publish to topic `fizz-buz`
        fizzBuzzProcessor-out-0:
          destination: fizz-buzz

		# tells fizzBuzzConsumer() to subscribe from topic `fizz-buz`
        fizzBuzzConsumer-in-0:
          destination: fizz-buzz

      kafka:
        binder:
          brokers: localhost:9092
          auto-create-topics: true
```
# Resources
- [https://medium.com/geekculture/spring-cloud-streams-with-functional-programming-model-93d49696584c](https://medium.com/geekculture/spring-cloud-streams-with-functional-programming-model-93d49696584c)
