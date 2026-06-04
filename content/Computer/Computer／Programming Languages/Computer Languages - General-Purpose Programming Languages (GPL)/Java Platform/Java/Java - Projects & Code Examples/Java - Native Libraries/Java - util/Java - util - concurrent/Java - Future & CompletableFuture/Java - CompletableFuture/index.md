---
title: "Java - CompletableFuture"
created: 2022-02-21T00:52:49.637-06:00
modified: 2022-02-21T05:04:44.762-06:00
parent: "[[Java - Future & CompletableFuture]]"
children: []
---
###### CompletableFuture
- is an implementation of [[Java - Future|Future]]

# Creating CompletableFutures
```
CompletableFuture<String> completableFuture = CompletableFuture.completedFuture("Hello");
assertEquals("Hello", completableFuture.get());
```
```
CompletableFuture<String> completableFuture = CompletableFuture.supplyAsync(() -> "Hello");
assertEquals("Hello", completableFuture.get());
```
# Processing Results of Asynchronous Computations
```
CompletableFuture<String> future = completableFuture.thenApply(s -> s + " World");
```
```
CompletableFuture<Void> future = completableFuture.thenAccept(s -> System.out.println("Computation returned: " + s));
```
```
CompletableFuture<Void> future = completableFuture.thenRun(() -> System.out.println("Computation finished."));
```
# Combining Futures

TODO
# Multiple Parallel Futures
```
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "Hello");
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "Beautiful");
CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> "World");

CompletableFuture<Void> combinedFuture = CompletableFuture.allOf(future1, future2, future3);

combinedFuture.get();

assertTrue(future1.isDone());
assertTrue(future2.isDone());
assertTrue(future3.isDone());
```
# Resources
- [https://www.baeldung.com/java-completablefuture](https://www.baeldung.com/java-completablefuture)
