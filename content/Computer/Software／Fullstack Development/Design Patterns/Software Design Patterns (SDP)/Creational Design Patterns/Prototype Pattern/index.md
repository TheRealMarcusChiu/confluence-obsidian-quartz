---
title: "Prototype Pattern"
created: 2021-10-26T22:04:42.477-05:00
modified: 2023-06-02T18:57:12.073-05:00
parent: "[[Creational Design Patterns]]"
children: []
---
###### Prototype Pattern
````excerpt
- is a type of [[Creational Design Patterns|creational design pattern]] that specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype
````
^excerpt

# Real-World Example
- Remember Dolly? The sheep that was cloned! Let's not get into the details but the key point here is that it is all about cloning

# Code Example
```
public interface Prototype<T> {
    T prototype();
}
```
```
@Data
@Builder
public class ExamplePojo implements Prototype<ExamplePojo> {
    private String field1;
    private String field2;

    @Override
    public ExamplePojo prototype() {
        return ExamplePojo.builder()
                .field1(field1)
                .field2(field2)
                .build();
    }
}
```
```
public static void main(String[] args) {
    ExamplePojo examplePojo = ExamplePojo.builder()
            .field1("hello")
            .field2("hello")
            .build();
    ExamplePojo prototype = examplePojo.prototype();
}
```
# Resources
- [https://java-design-patterns.com/patterns/prototype/](https://java-design-patterns.com/patterns/prototype/)
