---
title: "Dependency Injection (DI)"
created: 2020-10-18T16:18:37.110-05:00
modified: 2023-06-02T16:45:47.699-05:00
parent: "[[Structural Design Patterns]]"
children: []
---
###### Dependency Injection (DI)
````excerpt
- is an implementation of the [[Dependency Injection Principle (DIP) - Inversion of Control (IoC)|Dependency Inversion Principle (DIP) and Inversion of Control (IoC)]]
- is a [[Structural Design Patterns|structural design pattern]] and a refined [[Strategy Pattern]] in which one or more dependencies (or services) are injected, or passed by reference, into a dependent object (or client) and are made part of the client's state. The pattern separates the creation of a client's dependencies from its own behavior, which allows program designs to be loosely coupled and to follow the inversion of control and single responsibility principles
````
^excerpt

# Code Example
```
interface IOperation {
  void send();
}
 
class LowLevelModule: IOperation {
	@Override
  	public void send() {
    	//perform sending operation
  	}
}

class HighLevelModule {
  	private IOperation operation;
 
  	public HighLevelModule(IOperation operation) {
  		this.operation = operation;
  	}

  	public void Call() {
    	operation.Send();
  	}
}
```
# Frameworks
- [[Java - Dependency Injection Frameworks - Spring vs CDI (Context and Dependency Injection)]]

# Comparisons to Other Design Patterns

> [!expand]- Click here to expand...
> ![[Strategy Pattern vs Dependency Injection#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/dependency-injection/](https://java-design-patterns.com/patterns/dependency-injection/)
