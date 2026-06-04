---
title: "Reactive Streams"
created: 2020-10-21T02:24:51.125-05:00
modified: 2023-11-16T16:52:12.780-06:00
parent: "[[7 - Application Layer]]"
children:
  - "[[Reactive Socket (RSocket)]]"
---
###### Reactive Streams ([www.reactive-streams.org)](https://www.reactive-streams.org/)
````excerpt
- is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure
- this encompasses efforts aimed at runtime environments ([[Java Platform|JVM]] and [[JavaScript]]) as well as [[Computer Network／Networking Communication Protocols|network protocols]]
````
^excerpt

# 4 Interfaces of Reactive Streams API

The <strong>Reactive Streams API</strong> consists of just 4 high interfaces:
1. <font style="color: rgb(128,0,0);"><strong>Publisher</strong></font> - is a provider of a potentially unbounded number of sequenced elements, publishing them according to the demand received from its <font style="color: rgb(255,102,0);">Subscribers</font>
2. <font style="color: rgb(255,102,0);"><strong>Subscriber</strong></font> - will receive call to <font style="color: rgb(255,102,0);">Subscriber</font>.onSubscribe(<font style="color: rgb(128,128,0);">Subscription</font>) once after passing an instance of <font style="color: rgb(255,102,0);">Subscriber</font> to <font style="color: rgb(128,0,0);">Publisher</font>.subscribe(<font style="color: rgb(255,102,0);">Subscriber</font>)
3. <font style="color: rgb(128,128,0);"><strong>Subscription</strong></font> - represents a one-to-one lifecycle of a <font style="color: rgb(255,102,0);">Subscriber</font> subscribing to a <font style="color: rgb(128,0,0);">Publisher</font>
4. <font style="color: rgb(0,128,0);"><strong>Processor</strong></font> - represents a processing stage—which is both a <font style="color: rgb(255,102,0);">Subscriber</font> and a <font style="color: rgb(128,0,0);">Publisher</font> and obeys the contracts of both
```
public interface Processor<T, R> extends Subscriber<T>, Publisher<R> {
}

public interface Publisher<T> {
    public void subscribe(Subscriber<? super T> s);
}

public interface Subscriber<T> {
    public void onSubscribe(Subscription s);
    public void onNext(T t);
    public void onError(Throwable t);
    public void onComplete();
}

public interface Subscription {
    public void request(long n);
    public void cancel();
}
```
# Reactive Streams - Library Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [RxJavaReactiveStreams with RxJava 1.x](https://github.com/ReactiveX/RxJavaReactiveStreams) or [RxJava 2.x](https://github.com/ReactiveX/RxJava/issues/2450)
- [Project Reactor](http://projectreactor.io/)
- [Vert.x](http://vertx.io/)
- [Akka Streams](http://akka.io/)
- [Slick](http://slick.typesafe.com/)
