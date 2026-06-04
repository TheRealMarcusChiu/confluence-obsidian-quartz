---
title: "Java - Project Reactor／Reactive Core (Mono - Flux)"
created: 2022-02-14T21:42:04.567-06:00
modified: 2022-02-21T00:47:21.467-06:00
parent: "[[Java - Non-Native Libraries]]"
children: []
---
###### Reactor Core - Project Reactor
- is an implementation of the Java 8's [[Java - Flow (Publisher - Subscriber - Subscription)|Flow (Publisher - Subscriber - Subscription)]]

# Complete Execution Process
![[Java - Project Reactor／Reactive Core (Mono - Flux)/reactor-core-execution-process.png]]
# Dependencies

> [!expand-ui]- Maven
> ```
> <dependency>
>     <groupId>io.projectreactor</groupId>
>     <artifactId>reactor-core</artifactId>
>     <version>3.3.9.RELEASE</version>
> </dependency>
> ```
# Producing a Stream of Data

<code><font style="color: rgb(122,134,154);">Flux</font></code> and <code><font style="color: rgb(122,134,154);">Mono</font></code> are implementations of the Reactive Streams [[Java - Flow (Publisher - Subscriber - Subscription)|Publisher interface]]

> [!expand-ui]- Flux
> Flux is a stream that can emit 0..n elements.
>
> For example, below is a static stream of four elements:
> ```
> Flux<Integer> just = Flux.just(1, 2, 3, 4);
> ```

> [!expand-ui]- Mono
> Mono is a stream of 0..1 element.
>
> For example, below is a static stream of 1 element
> ```
> Mono<Integer> just = Mono.just(1);
> ```
# Subscribing to a Stream

> [!expand-ui]- Simple
> Let's use the subscribe() method to collect all the elements in a stream. The data won't start flowing until we subscribe.
> ```
> List<Integer> elements = new ArrayList<>();
>
> Flux.just(1, 2, 3, 4)
>   .log()
>   .subscribe(elements::add);
>
> assertThat(elements).containsExactly(1, 2, 3, 4);
> ```
>
> Output
> ```
> 20:25:19.550 [main] INFO  reactor.Flux.Array.1 - | onSubscribe([Synchronous Fuseable] FluxArray.ArraySubscription)
> 20:25:19.553 [main] INFO  reactor.Flux.Array.1 - | request(unbounded)
> 20:25:19.553 [main] INFO  reactor.Flux.Array.1 - | onNext(1)
> 20:25:19.553 [main] INFO  reactor.Flux.Array.1 - | onNext(2)
> 20:25:19.553 [main] INFO  reactor.Flux.Array.1 - | onNext(3)
> 20:25:19.553 [main] INFO  reactor.Flux.Array.1 - | onNext(4)
> 20:25:19.553 [main] INFO  reactor.Flux.Array.1 - | onComplete()
> ```
>
> Now let's go through the sequence that we have logged one by one:
> 1. <em><code><font style="color: rgb(122,134,154);">onSubscribe()</font></code> </em>– This is called when we subscribe to our stream
> 2. <em><code><font style="color: rgb(122,134,154);">request(unbounded)</font></code> – </em>When we call <em>subscribe</em>, behind the scenes we are creating a <em>[Subscription](http://www.reactive-streams.org/reactive-streams-1.0.0-javadoc/org/reactivestreams/Subscription.html). </em>This subscription requests elements from the stream. In this case, it defaults to <em>unbounded, </em>meaning it requests every single element available
> 3. <em><code><font style="color: rgb(122,134,154);">onNext()</font></code> – </em>This is called on every single element
> 4. <em><code><font style="color: rgb(122,134,154);">onComplete()</font></code> – </em>This is called last, after receiving the last element. There's actually a <em>onError()</em> as well, which would be called if there is an exception, but in this case, there isn't

> [!expand-ui]- Complex
> ```
> List<Integer> elements = new ArrayList<>();
>
> Flux.just(1, 2, 3, 4)
>   .log()
>   .subscribe(new Subscriber<Integer>() {
>     @Override
>     public void onSubscribe(Subscription s) {
>       s.request(Long.MAX_VALUE);
>     }
>
>     @Override
>     public void onNext(Integer integer) {
>       elements.add(integer);
>     }
>
>     @Override
>     public void onError(Throwable t) {}
>
>     @Override
>     public void onComplete() {}
> });
>
> assertThat(elements).containsExactly(1, 2, 3, 4);
> ```

> [!expand-ui]- Complex With BackPressure
> ```
> Flux.just(1, 2, 3, 4)
>   .log()
>   .subscribe(new Subscriber<Integer>() {
>     private Subscription s;
>     int onNextAmount;
>
>     @Override
>     public void onSubscribe(Subscription s) {
>         this.s = s;
>         s.request(2);
>     }
>
>     @Override
>     public void onNext(Integer integer) {
>         elements.add(integer);
>         onNextAmount++;
>         if (onNextAmount % 2 == 0) {
>             s.request(2);
>         }
>     }
>
>     @Override
>     public void onError(Throwable t) {}
>
>     @Override
>     public void onComplete() {}
> });
> ```
>
> output
> ```
> 23:31:15.395 [main] INFO  reactor.Flux.Array.1 - | onSubscribe([Synchronous Fuseable] FluxArray.ArraySubscription)
> 23:31:15.397 [main] INFO  reactor.Flux.Array.1 - | request(2)
> 23:31:15.397 [main] INFO  reactor.Flux.Array.1 - | onNext(1)
> 23:31:15.398 [main] INFO  reactor.Flux.Array.1 - | onNext(2)
> 23:31:15.398 [main] INFO  reactor.Flux.Array.1 - | request(2)
> 23:31:15.398 [main] INFO  reactor.Flux.Array.1 - | onNext(3)
> 23:31:15.398 [main] INFO  reactor.Flux.Array.1 - | onNext(4)
> 23:31:15.398 [main] INFO  reactor.Flux.Array.1 - | request(2)
> 23:31:15.398 [main] INFO  reactor.Flux.Array.1 - | onComplete()
> ```
# Operating on a Stream

> [!expand-ui]- Mapping Data in a Stream
> A simple operation that we can perform is applying a transformation. In this case, let's just double all the numbers in our stream:
> ```
> Flux.just(1, 2, 3, 4)
>   .log()
>   .map(i -> i * 2)
>   .subscribe(elements::add);
> ```
>
> <code><font style="color: rgb(122,134,154);">map()</font></code> will be applied when <code><font style="color: rgb(122,134,154);">onNext()</font></code> is called.

> [!expand-ui]- Combining Streams
> We can then make things more interesting by combining another stream with this one. Let's try this by using <em>zip() </em>function<em>:</em>
> ```
> Flux.just(1, 2, 3, 4)
>   .log()
>   .map(i -> i * 2)
>   .zipWith(Flux.range(0, Integer.MAX_VALUE), 
>     (one, two) -> String.format("First Flux: %d, Second Flux: %d", one, two))
>   .subscribe(elements::add);
>
> assertThat(elements).containsExactly(
>   "First Flux: 2, Second Flux: 0",
>   "First Flux: 4, Second Flux: 1",
>   "First Flux: 6, Second Flux: 2",
>   "First Flux: 8, Second Flux: 3");
> ```
>
> Here, we are creating another <em>Flux</em> that keeps incrementing by one and streaming it together with our original one. We can see how these work together by inspecting the logs:
> ```
> 20:04:38.064 [main] INFO  reactor.Flux.Array.1 - | onSubscribe([Synchronous Fuseable] FluxArray.ArraySubscription)
> 20:04:38.065 [main] INFO  reactor.Flux.Array.1 - | onNext(1)
> 20:04:38.066 [main] INFO  reactor.Flux.Range.2 - | onSubscribe([Synchronous Fuseable] FluxRange.RangeSubscription)
> 20:04:38.066 [main] INFO  reactor.Flux.Range.2 - | onNext(0)
> 20:04:38.067 [main] INFO  reactor.Flux.Array.1 - | onNext(2)
> 20:04:38.067 [main] INFO  reactor.Flux.Range.2 - | onNext(1)
> 20:04:38.067 [main] INFO  reactor.Flux.Array.1 - | onNext(3)
> 20:04:38.067 [main] INFO  reactor.Flux.Range.2 - | onNext(2)
> 20:04:38.067 [main] INFO  reactor.Flux.Array.1 - | onNext(4)
> 20:04:38.067 [main] INFO  reactor.Flux.Range.2 - | onNext(3)
> 20:04:38.067 [main] INFO  reactor.Flux.Array.1 - | onComplete()
> 20:04:38.067 [main] INFO  reactor.Flux.Array.1 - | cancel()
> 20:04:38.067 [main] INFO  reactor.Flux.Range.2 - | cancel()
> ```
>
> Note how we now have one subscription per <em>Flux</em>. The <em>onNext() </em>calls are also alternated, so the index of each element in the stream will match when we apply the <em>zip() </em>function.
# Hot (Infinite) Streams

> [!expand-ui]- ConnectableFlux
> One way to create a hot stream is by converting a cold stream into one. Let's create a Flux that lasts forever, outputting the results to the console, which would simulate an infinite stream of data coming from an external resource:
> ```
> ConnectableFlux<Object> publish = Flux.create(fluxSink -> {
>     while(true) {
>         fluxSink.next(System.currentTimeMillis());
>     }
> }).publish();
> ```
>
> By calling publish() we are given a ConnectableFlux. This means that calling subscribe() won't cause it to start emitting, allowing us to add multiple subscriptions:
> ```
> publish.subscribe(System.out::println);        
> publish.subscribe(System.out::println);
> ```
>
> If we try running this code, nothing will happen. It's not until we call connect(), that the Flux will start emitting:
> ```
> publish.connect();
> ```

> [!expand-ui]- Throttling
> If we run our code, our console will be overwhelmed with logging. This is simulating a situation where too much data is being passed to our consumers. Let's try getting around this with throttling:
> ```
> ConnectableFlux<Object> publish = Flux.create(fluxSink -> {
>     while(true) {
>         fluxSink.next(System.currentTimeMillis());
>     }
> })
>   .sample(ofSeconds(2))
>   .publish();
> ```
>
> Here, we've introduced a <em>sample()</em> method with an interval of two seconds. Now values will only be pushed to our subscriber every two seconds, meaning the console will be a lot less hectic.
>
> Of course, there are multiple strategies to reduce the amount of data sent downstream, such as windowing and buffering, but they will be left out of scope for this article.
# Concurrency

> [!expand-ui]- Example
> All of our above examples have currently run on the main thread. However, we can control which thread our code runs on if we want. The [<em>Scheduler</em>](https://projectreactor.io/docs/core/release/api/reactor/core/scheduler/Scheduler.html) interface provides an abstraction around asynchronous code, for which many implementations are provided for us. Let's try subscribing to a different thread to main:
> ```
> Flux.just(1, 2, 3, 4)
>   .log()
>   .map(i -> i * 2)
>   .subscribeOn(Schedulers.parallel())
>   .subscribe(elements::add);
> ```
>
> The <em>Parallel </em>scheduler will cause our subscription to be run on a different thread, which we can prove by looking at the logs. We see the first entry comes from the <em>main</em> thread and the Flux is running in another thread called <em>parallel-1</em>.
> ```
> 20:03:27.505 <strong>[main]</strong> DEBUG reactor.util.Loggers$LoggerFactory - Using Slf4j logging framework
> 20:03:27.529 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | onSubscribe([Synchronous Fuseable] FluxArray.ArraySubscription)
> 20:03:27.531 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | request(unbounded)
> 20:03:27.531 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | onNext(1)
> 20:03:27.531 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | onNext(2)
> 20:03:27.531 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | onNext(3)
> 20:03:27.531 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | onNext(4)
> 20:03:27.531 <strong>[parallel-1]</strong> INFO  reactor.Flux.Array.1 - | onComplete()
> ```
# Resources
- [https://www.baeldung.com/reactor-core](https://www.baeldung.com/reactor-core)
