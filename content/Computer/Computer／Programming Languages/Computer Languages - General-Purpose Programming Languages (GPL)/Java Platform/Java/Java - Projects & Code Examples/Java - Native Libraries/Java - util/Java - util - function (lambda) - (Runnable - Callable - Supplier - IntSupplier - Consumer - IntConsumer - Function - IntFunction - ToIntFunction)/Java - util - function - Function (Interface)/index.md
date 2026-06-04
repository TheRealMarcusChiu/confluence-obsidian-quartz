---
title: "Java - util - function - Function (Interface)"
created: 2021-10-27T02:38:28.247-05:00
modified: 2021-11-26T03:53:21.519-06:00
parent: "[[Java - util - function (lambda) - (Runnable - Callable - Supplier - IntSupplier - Consumer - IntConsumer - Function - IntFunction - ToIntFunction)]]"
children: []
---
# Code Example
```
public class HigherOrder {

    private static Function<String, String> camelize = (str) -> str.substring(0, 1).toUpperCase() + str.substring(1);

    public static void main(String[] args) {
        Function<Integer, Long> addOne = add(1L);

        System.out.println(addOne.apply(1)); //prints 2

        Arrays.asList("test", "new")
                .parallelStream()  // suggestion for execution strategy
                .map(camelize)     // call for static reference
                .forEach(System.out::println);
    }

    private static Function<Integer, Long> add(long l) {
        return (Integer i) -> l + i;
    }
}
```
