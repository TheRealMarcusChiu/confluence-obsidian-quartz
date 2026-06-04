---
title: "Java - Spring - TransactionManager (PlatformTransactionManager - ReactiveTransactionManager)"
created: 2021-04-12T00:03:43.944-05:00
modified: 2021-07-26T19:42:46.936-05:00
parent: "[[Java - Spring Data - Transaction Management]]"
children: []
---
# TransactionManager - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>PlatformTransactionManager</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- imperative transactions"
    ],
    [
      {
        "content": "<code>ReactiveTransactionManager</code>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- reactive transactions"
    ]
  ]
}
```

<code>@Transactional</code> commonly works with thread-bound transactions managed by <code>PlatformTransactionManager</code>, exposing a transaction to all data access operations within the current execution thread. Note: This does <em>not</em> propagate to newly started threads within the method.

A reactive transaction managed by <code>ReactiveTransactionManager</code> uses the Reactor context instead of thread-local attributes. As a consequence, all participating data access operations need to execute within the same Reactor context in the same reactive pipeline
# TransactionManager - Code Examples

> [!expand-ui]- PlatformTransactionManager
> ### PlatformTransactionManager - Configuration
> ```
> @Configuration
> @EnableTransactionManagement // <-------------------------------- (1)
> public class MySpringConfig {
> 	@Bean
> 	public DataSource dataSource() {
> 	    return new MysqlDataSource(); // <----------------------- (2)
> 	}
>
> 	@Bean
> 	public PlatformTransactionManager transactionManager() {
> 	    return new DataSourceTransactionManager(dataSource()); // (3)
> 	}
> }
> ```
> 1. [[Java - Spring - @EnableTransactionManagement & @Transactional|@EnableTransactionManagement]] enables Spring's annotation-driven transaction management capability (e.g. <code>[[Java - Spring - @EnableTransactionManagement & @Transactional|@Transactional]]</code>)
> 2. create a database-specific or [[Java - Connection Pooling Frameworks|connection-pool]] specific <code>[[Java - DataSource|DataSource]]</code> here ([[MySQL]] is being used for this example)
> 3. create <code>TransactionManager</code>, which needs a <code>DataSource</code> to be able to manage transactions (for in-depth understanding see other <code>[PlatformTransactionManager](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/PlatformTransactionManager.html)</code> implementations that Spring offers)
>
> ### PlatformTransactionManager - Usage (Programmatically)
> ```
> @Service
> public class UserService {
>  
>     @Autowired
>     private TransactionTemplate template;
>  
>     public Long registerUser(User user) {
>         DefaultTransactionDefinition def = new DefaultTransactionDefinition();
> 		// explicitly setting the transaction name is something that can only be done programmatically
> 		def.setName("SomeTxName");
> 		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
>
> 		TransactionStatus status = transactionManager.getTransaction(def);
> 		try {
> 			// execute your business logic here
> 		}
> 		catch (MyException ex) {
>   			transactionManager.rollback(status);
>   			throw ex;
> 		}
> 		transactionManager.commit(status);
>     }
> }
> ```
> ### PlatformTransactionManager - Usage (Declaratively)
> ```
> TODO
> ```

> [!expand-ui]- ReactiveTransactionManager
> ### PlatformTransactionManager - Configuration
> ```
> TODO
> ```
> ### ReactiveTransactionManager - Usage (Programmatically)
> ```
> TODO
> ```
> ### ReactiveTransactionManager - Usage (Declaratively)
> ```
> TODO
> ```
# Resources
- [https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#transaction-programmatic-tm](https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#transaction-programmatic-tm)
