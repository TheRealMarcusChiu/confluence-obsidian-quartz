---
title: "Java - Spring - TransactionOperator"
created: 2021-04-12T23:42:12.341-05:00
modified: 2021-04-12T23:49:11.459-05:00
parent: "[[Java - Spring Data - Transaction Management]]"
children: []
---
### 1 - Configuring ReactiveTransactionManager
```
@Configuration
public class TransactionConfig {
	@Bean
	public ReactiveTransactionManager reactiveTransactionManager() {
		// see TransactionManager
	}
}
```

see: [[Java - Spring - TransactionManager (PlatformTransactionManager - ReactiveTransactionManager)]]
### 2 - Configuring & Using  TransactionalOperator
```
public class SimpleService {

    private final TransactionalOperator transactionalOperator;

    public SimpleService(ReactiveTransactionManager transactionManager) {
		// Method 1
        this.transactionOperator = TransactionalOperator.create(transactionManager);
		
		// Method 2
		DefaultTransactionDefinition definition = new DefaultTransactionDefinition();
        // the transaction settings can be set here explicitly if so desired
        definition.setIsolationLevel(TransactionDefinition.ISOLATION_READ_UNCOMMITTED);
        definition.setTimeout(30); // 30 seconds
        // and so forth...
        this.transactionalOperator = TransactionalOperator.create(transactionManager, definition);
    }

    public Mono<Object> someServiceMethod() {
        // the code in this method runs in a transactional context
        Mono<Object> update = updateOperation1();
        return update.then(resultOfUpdateOperation2).as(transactionalOperator::transactional);
    }
}
```
### Resources
- [https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#tx-prog-operator](https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#tx-prog-operator)
