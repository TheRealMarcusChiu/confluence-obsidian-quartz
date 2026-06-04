---
title: "Chain of Responsibility (CoR) Pattern"
created: 2021-07-10T11:30:15.354-05:00
modified: 2023-06-02T17:04:04.657-05:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Chain of Responsibility
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain
````
^excerpt

# Code Structure
![[Chain of Responsibility (CoR) Pattern/chain-of-responsibility-structure.png|700]]
# Code Example

> [!expand]- Click here to expand...
> ```
> interface Handler {
> 	void setNext(Handler handler);
> 	void handle(request);
> }
> ```
> ```
> abstract class BaseHandler implements Handler {
> 	private Handler next;
> 	void setNext(Handler next) { this.next = next; }
> 	void handle(request);
> }
> ```
> ```
> class ConcreteHandler1 extends BaseHandler {
> 	void handle(request) {
> 		if (canHandleRequest1(request)) {
> 			// handle logic
> 		} else {
> 			next.handle(request);
> 		}
> 	}
> }
>
> class ConcreteHandler2 extends BaseHandler {
> 	void handle(request) {
> 		if (canHandleRequest2(request)) {
> 			// handle logic
> 		} else {
> 			next.handle(request);
> 		}
> 	}
> }
>
> ...
> ```
> ```
> main() {
> 	Handler h1 = new ConcreteHandler1();
> 	Handler h2 = new ConcreteHandler1();
> 	Handler h3 = new ConcreteHandler1();
> 	h1.setNext(h2);
> 	h2.setNext(h3);
>
> 	// ...
> 	h1.handle(request);	
> }
> ```
# Comparisons

> [!expand]- Click here to expand...
> ![[Chain of Responsibility vs Command vs Mediator vs Observer#^excerpt]]
>
> ![[Chain of Responsibility Pattern vs Command Pattern#^excerpt]]
>
> ![[Chain of Responsibility Pattern vs Decorator Pattern#^excerpt]]
>
> ![[Chain of Responsibility Pattern vs Composite Pattern ／ Object Tree Pattern#^excerpt]]
# Resources
- [https://refactoring.guru/design-patterns/chain-of-responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility)
