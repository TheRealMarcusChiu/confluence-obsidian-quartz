---
title: "Java - Spring - Creating @Bean／@Component at Runtime"
created: 2021-08-03T21:16:27.862-05:00
modified: 2021-08-03T21:21:33.092-05:00
parent: "[[Java - Spring - @Bean @Component]]"
children: []
---
> [!tabs]
>
> === Option 1
>
> ```
> @Configuration
> public class ExampleConfiguration {
> 	@Bean
> 	List<Room> rooms() {
>     	return Arrays.stream(Rules.values())
>         	.map(rule -> room(rule))
>         	.collect(Collectors.toList());
> 	}
>
> 	@Bean
> 	Room room(Rule rule) {
>     	return new Room(rule);
> 	}
> }
> ```
>
> === Option 2
>
> ```
> @Configuration
> public class ExampleConfiguration {
>     @Autowired
>     private ConfigurableListableBeanFactory beanFactory;
> 	
> 	@Bean
> 	List<Room> rooms() {
>   		return Arrays.stream(Rules.values())
>     		.map(rule -> {
>         		Room r = room(rule);
>         		this.beanFactory.initializeBean(r, <some unique name>);
>         		this.beanFactory.autowireBean(r);
>         		this.beanFactory.registerSingleton(<same name>, r);
>     		})
>     		.collect(Collectors.toList());
> 	}
>
> 	private Room room(Rule rule) {
> 		return new Room(rule);
> 	}
> }
> ```
