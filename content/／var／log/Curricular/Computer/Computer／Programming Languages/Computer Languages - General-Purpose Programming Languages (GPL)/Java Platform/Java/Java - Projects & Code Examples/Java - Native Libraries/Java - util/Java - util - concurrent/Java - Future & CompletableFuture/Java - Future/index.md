---
title: "Java - Future"
created: 2022-02-21T00:52:17.509-06:00
modified: 2022-02-21T04:13:29.713-06:00
parent: "[[Java - Future & CompletableFuture]]"
children: []
---
###### Future
- represents the future result of an asynchronous computation

# Interface
```
public interface Future<V> {
    boolean cancel(boolean mayInterruptIfRunning);
    boolean isCancelled();
    boolean isDone();
    V get() throws InterruptedException, ExecutionException;
    V get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException;
}
```
# Implementations
- [[Java - CompletableFuture]]
- [[Java - Spring - ListenableFuture]]

# Resources
- [https://www.baeldung.com/java-future](https://www.baeldung.com/java-future)
