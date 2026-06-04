---
title: "Java - Spring - ListenableFuture"
created: 2021-09-26T23:30:02.347-05:00
modified: 2022-02-21T17:26:39.503-06:00
parent: "[[Java - Spring Framework - Integration - Concurrency & Job／Task Scheduler／Manager Frameworks]]"
children: []
---
###### ListenableFuture
- extends <code>[[Java - Future|Future]]</code> with the capability to accept callbacks, when completed the callback is triggered immediately
- inspired by Guava/Google's ListenableFuture

# ListenableFuture - Interface Definition
```
public interface ListenableFuture<T> extends Future<T> {
    void addCallback(ListenableFutureCallback<? super T> callback);

    void addCallback(SuccessCallback<? super T> successCallback, FailureCallback failureCallback);

    default CompletableFuture<T> completable() {
        CompletableFuture<T> completable = new DelegatingCompletableFuture(this);
        this.addCallback(completable::complete, completable::completeExceptionally);
        return completable;
    }
}
```
