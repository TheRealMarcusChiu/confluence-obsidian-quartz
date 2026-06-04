---
title: "Java - Spring - Spring Cloud Stream (RabbitMQ)"
created: 2022-08-09T02:36:48.449-05:00
modified: 2022-08-11T02:26:40.681-05:00
parent: "[[Java - Spring Cloud Stream]]"
children: []
---
# Dependencies
```
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-stream-rabbit</artifactId>
			<version>3.1.3</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-stream-test-support</artifactId>
			<version>3.1.3</version>
			<scope>test</scope>
		</dependency>
```
# Application Code

The programming models are:

> [!expand-ui]- Functional Programming
> TODO

> [!expand-ui]- Imperative Programming (@Annotations)
> > [!info]
> > <font style="color: rgb(82,89,96);">Starting with 3.1.0 version of the binder, we recommend using the functional programming model described above for Kafka Streams binder-based applications. The support for StreamListener is deprecated starting with 3.1.0 of Spring Cloud Stream</font>
> ```
> @Slf4j
> @SpringBootApplication
> @EnableBinding(Processor.class)
> public class DemoApplication {
>
>     public static void main(String[] args) {
>         SpringApplication.run(DemoApplication.class, args);
>     }
>
>     @StreamListener(Processor.INPUT)
>     @SendTo(Processor.OUTPUT)
>     public String enrichLogMessage(String event) {
>         return String.format("[1]: %s", event);
>     }
> }
> ```
# Test Code
```
@DirtiesContext
@SpringBootTest(classes = DemoApplication.class)
class DemoApplicationTests {

	@Autowired
	private Processor pipe;

	@Autowired
	private MessageCollector messageCollector;

	@Test
	void whenSendMessage_thenResponseShouldUpdateText() {
		Message<String> message = MessageBuilder.withPayload("This is my message").build();
		pipe.input().send(message);

		Object payload = messageCollector
				.forChannel(pipe.output())
				.poll()
				.getPayload();

		assertEquals("[1]: This is my message", payload.toString());
	}
}
```
# Resources
- [https://www.baeldung.com/spring-cloud-stream](https://www.baeldung.com/spring-cloud-stream)
