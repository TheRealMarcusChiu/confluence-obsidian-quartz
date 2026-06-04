---
title: "Java - Streams - Peek With Filter & FindFirst Behavior"
created: 2021-05-08T14:49:05.221-05:00
modified: 2021-05-08T14:49:40.893-05:00
parent: "[[Java - util - stream]]"
children: []
---
### Peek With Filter & FindFirst Behavior

No, filter does not scan the whole stream. It's an intermediate operation, which returns a lazy stream (actually all intermediate operations return a lazy stream). To convince you, you can simply do the following test:
```java
List<Integer> list = Arrays.asList(1, 10, 3, 7, 5);
int a = list.stream()
            .peek(num -> System.out.println("will filter " + num))
            .filter(x -> x > 5)
            .findFirst()
            .get();
System.out.println(a);
```

Which outputs:
```
will filter 1
will filter 10
10
```
