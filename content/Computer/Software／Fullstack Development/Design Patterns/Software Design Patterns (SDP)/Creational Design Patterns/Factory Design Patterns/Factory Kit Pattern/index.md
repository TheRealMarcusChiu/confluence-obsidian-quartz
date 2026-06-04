---
title: "Factory Kit Pattern"
created: 2021-11-26T22:21:26.546-06:00
modified: 2026-01-10T15:49:19.969-06:00
parent: "[[Factory Design Patterns]]"
children: []
---
###### Factory Kit Pattern
````excerpt
- is a [[Creational Design Patterns|creational pattern]] used to define a factory of immutable content with the separated [[Builder Pattern|builder]] and [[Factory Method Pattern|factory method]] interfaces
````
^excerpt

# Factory Kit Pattern Example

Define <font style="color: rgb(122,134,154);">factory kit</font> in compile time, then use it in runtime use it to create a custom [[Factory Method Pattern|factory method]] object, then use it to create number of objects
```java
import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

public class Main {

	// define factory kit
    public static <K, T> Function<K, T> factoryKit(Consumer<BiConsumer<K, T>> consumer, Function<K, T> ifAbsent) {
        Map<K, T> map = new HashMap<>();
        consumer.accept(map::put);
        return key -> map.computeIfAbsent(key, ifAbsent);
    }

    public static void main(String[] args) {
        // use factory kit to create custom factory method object
        Function<String, Supplier<Number>> factory = factoryKit(builder -> {
            builder.accept("Integer", () -> Integer.parseInt("12345678"));
            builder.accept("Double", () -> Double.parseDouble("12345678.1234"));
        }, name -> { throw new IllegalArgumentException("unkown number " + name); });
    
        // use custom factory method object to create number objects
        Number n1 = factory.apply("Integer").get();
        Number n2 = factory.apply("Integer").get();
        System.out.println(n1 == n2); // false - different objects
        Number n3 = factory.apply("Double").get();
        Number n4 = factory.apply("Double").get();
        System.out.println(n3 == n4); // false - different objects
    }
}
```
# Resources
- [https://java-design-patterns.com/patterns/factory-kit/](https://java-design-patterns.com/patterns/factory-kit/)
