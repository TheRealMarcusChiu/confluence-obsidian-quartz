---
title: "Null Object Design Pattern"
created: 2022-01-10T23:47:33.111-06:00
modified: 2023-06-02T16:54:45.194-05:00
parent: "[[Behavioral Design Patterns]]"
children: []
---
###### Null Object Design Pattern
````excerpt
- in [[Computer／Programming Languages - Paradigms|object-oriented]] [[Computer／Programming Languages|computer programming]], a null object is an object with no referenced value or with defined neutral behavior
- was first published in the Pattern Languages of Program Design book series
````
^excerpt

# Code Example
```
public interface Animal {
	void makeSound() ;
}

public class Dog implements Animal {
	public void makeSound() {
		System.out.println("woof!");
	}
}

public class NullAnimal implements Animal {
	public void makeSound() {
                // silence...
	}
}
```
