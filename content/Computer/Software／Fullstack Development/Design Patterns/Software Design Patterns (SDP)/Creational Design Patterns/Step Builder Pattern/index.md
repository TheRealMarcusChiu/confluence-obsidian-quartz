---
title: "Step Builder Pattern"
created: 2021-10-26T22:08:30.959-05:00
modified: 2026-01-10T23:46:50.662-06:00
parent: "[[Creational Design Patterns]]"
children: []
---
###### Step Builder Pattern
````excerpt
- is an extension of the [[Builder Pattern]] that fully guides the user through the creation of the object with no chances of confusion. The user experience will be much more improved by the fact that he will only see the next step methods available, NO build method until is the right time to build the object
- is a combination of [[Builder Pattern]] and [[Template Method Pattern]]
````
^excerpt

# Applicability

Use the Step Builder pattern when the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled the construction process must allow different representations for the object that's constructed when in the process of constructing the order is important.
# Code Example
```
public class Example {
	private int a; // first set this
	private int b; // next set this
	// etc
}
public static ExampleBuilderStep1 builder() {
    return new ExampleBuilder();
}
interface ExampleBuilderStep1 {
    ExampleBuilderStep2 a(int a);
}
interface ExampleBuilderStep2 {
    ExampleBuilder b(int b);
}
class ExampleBuilder implements ExampleBuilderStep1, ExampleBuilderStep2 {
    private int a, b;
    private String extra;

    public ExampleBuilderStep2 a(int a) { this.a = a; return this; }
    public ExampleBuilder b(int b) { this.b = b; return this; }
    public Example build() { ... }
}
```

Usage example
```
public static void main(String[] args) {
	// valid
	Example example = builder()
		.a(1)
		.b(2)
		.build();

	// invalid
	Example example2 = builder()
		.b() <-- cannot be done because builder() returns ExampleBuilderStep1, and doesn't have .b()
 	Example example2 = builder()
		.build() <-- cannot be done because builder() returns ExampleBuilderStep1 , and doesn't have .build()
}
```
# Comparisons

> [!expand]- Click here to expand...
> ![[Step Builder Pattern vs Template Method Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/step-builder/](https://java-design-patterns.com/patterns/step-builder/)
- [http://rdafbn.blogspot.com/2012/07/step-builder-pattern_28.html](http://rdafbn.blogspot.com/2012/07/step-builder-pattern_28.html)
