---
title: "Strategy Pattern"
created: 2021-04-24T16:49:11.855-05:00
modified: 2026-01-10T23:54:16.351-06:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Strategy Pattern
````excerpt
- is a [[Behavioral Design Patterns|behavioral design pattern]] that lets you define a family of algorithms that "solve" the same thing, put each of them into a separate class, and make their objects interchangeable
````
^excerpt

# Code Structure

```merge-table
{
  "rows": [
    [
      "1. The <strong>Context</strong> maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.\n2. The <strong>Strategy</strong> interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.\n3. <strong>Concrete Strategies</strong> implement different variations of an algorithm the context uses.\n4. The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.\n5. The <strong>Client</strong> creates a specific strategy object and passes it to the context. The context exposes a setter that lets clients replace the strategy associated with the context at runtime.",
      "![[Strategy Pattern/strategy-pattern-structure.png|375]]"
    ]
  ],
  "tableStyle": "width: 60.2941%;"
}
```
# Example Implementation
```
// 1. Define the interface of the algorithm
interface Strategy {
    void solve();
}

// 2. Bury the 2 implementations
class Implementation1 implement Strategy {
	public void solve() {
		// implementation 1 here
	}
}
class Implementation2 implement Strategy {
	public void solve() {
		// implementation 2 here
	}
}

// 3. Define user of Strategy interface (with no view of implementation)
class Context {
	private Strategy strategy;
	public Context(Strategy strategy) { this.strategy = strategy; } // Dependency Injection happens here
	public void setStrategy(Strategy strategy) { this.strategy = strategy; } // Dependency Injection happens here
	public void doSomething() { strategy.solve(); }
}

// 4. Using it as Client
public static void main( String[] args ) {
	Context context = new Context(new Implementation1());
	context.doSomething(); // executes implementation #1
	context.setStrategy(new Implementation2());
	context.doSomething(); // executes implementation #2
    for (Strategy algorithm : algorithms) {
    	algorithm.solve();
    }
}
```
# Comparisons to Other Design Patterns

> [!expand]- Click here to expand...
> ![[Bridge Pattern vs Strategy Pattern#^excerpt]]
>
> ![[Strategy Pattern vs Dependency Injection#^excerpt]]
>
> ![[Strategy Pattern vs State Pattern#^excerpt]]
>
> ![[Command Pattern vs Strategy Pattern#^excerpt]]
>
> ![[Strategy Pattern vs Template Method Pattern#^excerpt]]
# Resources
- [https://en.wikipedia.org/wiki/Strategy_pattern](https://en.wikipedia.org/wiki/Strategy_pattern)
- [https://sourcemaking.com/design_patterns/strategy](https://sourcemaking.com/design_patterns/strategy)
