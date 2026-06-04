---
title: "Command-Query Separation (CQS) Principle"
created: 2022-02-14T23:23:47.301-06:00
modified: 2023-03-18T16:47:18.802-05:00
parent: "[[CQS vs CQRS]]"
children: []
---
###### Command-Query Separation (CQS) Principle
````excerpt
- is [[Command-Query Responsibility Segregation (CQRS) Principle|Command-Query Responsibility Segregation]] on a smaller scale
- is a principle of [[Imperative Programming Paradigm|imperative computer programming]]
- it states that every method should either be a:
	- <strong>command</strong> - change data
	- <strong>query</strong> - returns data
````
^excerpt

# CQS - Example
```
class OrderService {
	List<Order> createNewOrderAndFindOrdersBeforeTimestamp(Order newOrder, Timestamp timestamp);
}
```

Applying CQS on the OrderService would result in two methods as shown below
```
class OrderService {
	void createNewOrder(Order newOrder);
	List<Order> findOrdersBeforeTimestamp(Timestamp timestamp);
}
```
